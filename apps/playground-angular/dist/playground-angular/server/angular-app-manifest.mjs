
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
    'index.csr.html': {size: 1051, hash: 'bda117e7411ee785e3b49cb236c2f4a278efe09f8e5535cb186fc3a48cdf6b6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1414, hash: 'ea20d2775c90744bf7db0e6ec50e28700421ca94537cbdf296a8471b2215401b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3225, hash: '28d2ec2057d82f561b12ceff08fc923a44de7aa02ed341779e4d4a0e43e1c5f5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Q3Q3ZPC7.css': {size: 25, hash: 'crcqGZVO+/Q', text: () => import('./assets-chunks/styles-Q3Q3ZPC7_css.mjs').then(m => m.default)}
  },
};
