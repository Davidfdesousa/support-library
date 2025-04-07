
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
    'index.csr.html': {size: 1424, hash: 'c590f73be28daa7aa8b1d3dd3f7dd74f548579e4040ae92556c114302f55c059', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1787, hash: 'bc2f4518f0b22d00c682beea54afe2f73fb57b205ce9517d98ad4f1c64d394e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3598, hash: '9085d9fd7cc8bb6091f0af62453ee82ea3c134f5a53020785389698fbe92e53d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LJTUTD3T.css': {size: 302, hash: 'L5VqmpEvXZw', text: () => import('./assets-chunks/styles-LJTUTD3T_css.mjs').then(m => m.default)}
  },
};
