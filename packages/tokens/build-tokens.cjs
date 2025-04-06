const StyleDictionary = require('style-dictionary');
const fs = require('fs');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function lowercaseFirst(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// Custom XML (Android)
StyleDictionary.registerFormat({
  name: 'custom/xml',
  formatter: function ({ dictionary }) {
    return (
      '<?xml version="1.0" encoding="UTF-8"?>\n<resources>\n' +
      dictionary.allProperties
        .map(token => {
          const name = token.name.replace(/\./g, '_');
          const hex = token.value.replace(/^#ff/i, '#');
          return `  <color name="${name}">${hex}</color>`;
        })
        .join('\n') +
      '\n</resources>'
    );
  }
});

// Custom TS (.d.ts)
StyleDictionary.registerFormat({
  name: 'custom/dts',
  formatter: function ({ dictionary }) {
    return (
      '// Auto-generated tokens\n' +
      'export interface Tokens {\n' +
      dictionary.allProperties
        .map(token => `  '${lowercaseFirst(token.name)}': string;`)
        .join('\n') +
      '\n}\n\nexport const tokens: Tokens = {\n' +
      dictionary.allProperties
        .map(token => {
          const value = typeof token.value === 'string'
            ? `'${token.value.replace(/'/g, "\\'")}'`
            : token.value;
          return `  '${lowercaseFirst(token.name)}': ${value},`;
        })
        .join('\n') +
      '\n};'
    );
  }
});

const themes = ['light', 'dark'];

console.log('\nBuilding Design Tokens:\n');

themes.forEach((theme) => {
  const SD = StyleDictionary.extend({
    source: [
      'foundation/global/**/*.json',
      `foundation/themes/${theme}.json`
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/css/',
        files: [
          {
            destination: `variables.${theme}.css`,
            format: 'css/variables'
          }
        ]
      },
      scss: {
        transformGroup: 'scss',
        buildPath: 'dist/scss/',
        files: [
          {
            destination: `variables.${theme}.scss`,
            format: 'scss/variables'
          }
        ]
      },
      js: {
        transformGroup: 'js',
        buildPath: 'dist/js/',
        files: [
          {
            destination: `tokens.${theme}.js`,
            format: 'javascript/es6'
          }
        ]
      },
      ts: {
        transformGroup: 'js',
        buildPath: 'dist/ts/',
        files: [
          {
            destination: `tokens.${theme}.ts`,
            format: 'custom/dts'
          }
        ]
      },
      xml: {
        transformGroup: 'android',
        buildPath: 'dist/xml/',
        files: [
          {
            destination: `tokens.${theme}.xml`,
            format: 'custom/xml'
          }
        ]
      },
      swift: {
        transformGroup: 'ios-swift',
        buildPath: 'dist/swift/',
        files: [
          {
            destination: `StyleDictionary+${theme}.swift`,
            format: 'ios-swift/class.swift',
            className: `StyleDictionary${capitalize(theme)}Tokens`,
            filter: token => token.attributes.category === 'color'
          }
        ]
      }
    }
  });

  SD.buildAllPlatforms();

  console.log(`  Theme: ${capitalize(theme)}\n`);

  const platforms = {
    css: `dist/css/variables.${theme}.css`,
    scss: `dist/scss/variables.${theme}.scss`,
    js: `dist/js/tokens.${theme}.js`,
    ts: `dist/ts/tokens.${theme}.ts`,
    xml: `dist/xml/tokens.${theme}.xml`,
    swift: `dist/swift/StyleDictionary+${theme}.swift`
  };

  Object.entries(platforms).forEach(([label, filePath]) => {
    const status = fs.existsSync(filePath)
      ? '✔︎ gerado com sucesso!'
      : '✘ erro ao gerar';

    console.log(`  output ${label} ${status}`);
  });

  console.log();
});

console.log('Tokens gerados com sucesso!\n');

