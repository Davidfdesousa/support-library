
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
    'index.csr.html': {size: 1245, hash: 'dfb982e8c31613c2883f1fe99d8b61d289ca58abbf2f1a5265da1edc82d59fb1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1554, hash: '60365fa431010a2bf9e8d3b7ae58496e5e15d084a1cdb0ebf20a2fd94c5982a1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4420, hash: '1678f2e65fb59929b5d8fcfad73c24896d80834f221d88ff668e8f7d68eabef4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LHCOHRXL.css': {size: 79, hash: 't7dYLpamxf8', text: () => import('./assets-chunks/styles-LHCOHRXL_css.mjs').then(m => m.default)}
  },
};
