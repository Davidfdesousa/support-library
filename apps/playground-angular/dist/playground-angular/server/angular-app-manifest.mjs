
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
    'index.csr.html': {size: 1245, hash: 'b0110f33009c3241c530660635b13c95d8c3eee8800d78ac02a30ba89208fdd4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1554, hash: '33aee8243fa2961833f79c9be4f96865a8bb48068bc6ce4970c8a3ffbc360d18', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4039, hash: '31e06e1c55bae417bd5d4917d45afa1b685bec9d193907cf125c508c1e518bf0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LHCOHRXL.css': {size: 79, hash: 't7dYLpamxf8', text: () => import('./assets-chunks/styles-LHCOHRXL_css.mjs').then(m => m.default)}
  },
};
