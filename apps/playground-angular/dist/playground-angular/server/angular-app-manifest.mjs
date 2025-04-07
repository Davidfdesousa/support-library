
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
    'index.csr.html': {size: 1424, hash: 'd0f6919d4db8a7b7282c618205f1278619cd227c794c8bd3fd919fac7fc96188', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1787, hash: '08769bf52b04d171f390a86183a414192fd299f3a7cbcba1aec24ea1e31c68e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3598, hash: '19d557632d068dfc1a8893e9a705db2dd8eef7456717bace701f4e8ab67dcc9a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LJTUTD3T.css': {size: 302, hash: 'L5VqmpEvXZw', text: () => import('./assets-chunks/styles-LJTUTD3T_css.mjs').then(m => m.default)}
  },
};
