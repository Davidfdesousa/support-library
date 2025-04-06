'use strict';

var index = require('./index-ZM7tSxEp.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.29.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('support-library-ui.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["ui-button.cjs",[[1,"ui-button",{"type":[1],"variant":[1],"size":[1],"disabled":[4]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=support-library-ui.cjs.js.map

//# sourceMappingURL=support-library-ui.cjs.js.map