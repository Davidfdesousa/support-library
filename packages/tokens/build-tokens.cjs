const StyleDictionary = require('style-dictionary');

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
      }
    }
  });

  SD.buildAllPlatforms();
});
