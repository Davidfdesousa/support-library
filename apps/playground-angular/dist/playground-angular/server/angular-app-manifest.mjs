
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 702, hash: '210601f38f2f553bfa4b2b29731ccc911cdc7d78a4a163c7d1d56bff0d601bbd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1065, hash: '5573627f9f77bcc966b76391ea809040a54fb70fd08a8f288314c95e8e541687', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2878, hash: 'ae84d6ea568d85a90305dbc181bd032a6d9e14ede08c0764f50cba8496f525c1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Q3Q3ZPC7.css': {size: 25, hash: 'crcqGZVO+/Q', text: () => import('./assets-chunks/styles-Q3Q3ZPC7_css.mjs').then(m => m.default)}
  },
};
