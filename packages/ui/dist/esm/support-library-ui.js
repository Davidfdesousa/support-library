import { p as promiseResolve, b as bootstrapLazy } from './index-CW8e-4Zv.js';
export { s as setNonce } from './index-CW8e-4Zv.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.29.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["ui-button",[[1,"ui-button",{"type":[1],"variant":[1],"size":[1],"disabled":[4]}]]]], options);
});
//# sourceMappingURL=support-library-ui.js.map

//# sourceMappingURL=support-library-ui.js.map