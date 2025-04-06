
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
    'index.csr.html': {size: 702, hash: '34582e5cbcbff636af1ac57660f8c809cd70c9b6ff1e8691c8b14065b810e5bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1065, hash: 'bde43631e8858db6b7753be00bffac5af6672c99da8e1853ebfae88eb3328da3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2878, hash: '1f7b06bdf2575a98fe2b019a3fa748736123ffc28682a28aa606d50ffd8604a8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Q3Q3ZPC7.css': {size: 25, hash: 'crcqGZVO+/Q', text: () => import('./assets-chunks/styles-Q3Q3ZPC7_css.mjs').then(m => m.default)}
  },
};
