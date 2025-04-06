const StyleDictionary = require('style-dictionary');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Registrar formato custom para XML
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

const themes = ['light', 'dark'];

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
});
