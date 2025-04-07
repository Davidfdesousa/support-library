
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
    'index.csr.html': {size: 1424, hash: 'd56174be0a832fed74c37dfbcecdddb1e1d2f8652c7eb656efc7653f97ad0fa9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1787, hash: '4076909dca96d43f2514e52ee21f14547850f4bbaec2d2bfa18c7aa98a6c2632', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3598, hash: '76b7ff65ecb7bac3e5d0ba68cd87d004c2d3200dfb5a80de4de57b26067fda56', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LJTUTD3T.css': {size: 302, hash: 'L5VqmpEvXZw', text: () => import('./assets-chunks/styles-LJTUTD3T_css.mjs').then(m => m.default)}
  },
};
