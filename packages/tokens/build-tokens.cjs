const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'custom/xml',
  formatter: function ({ dictionary }) {
    return (
      '<?xml version="1.0" encoding="UTF-8"?>\n<resources>\n' +
      dictionary.allProperties
        .map(token => {
          const name = token.name.replace(/\./g, '_');
          return `  <color name="${name}">${token.value}</color>`;
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
      }
    }
  });

  SD.buildAllPlatforms();
});
