
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
    'index.csr.html': {size: 702, hash: '28c56a58e9986c3411f8ad084aa40bc63656439ffb4e9be1f29974e9a1344a39', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1065, hash: '1ad0ce4f855654db37ea213a681f883593ecaf5ae2c70eb1884272d4a536a255', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2878, hash: '7b99bbb541332699d38155b8fea730012453c8b71997f9438edea6cff2bbd13b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Q3Q3ZPC7.css': {size: 25, hash: 'crcqGZVO+/Q', text: () => import('./assets-chunks/styles-Q3Q3ZPC7_css.mjs').then(m => m.default)}
  },
};
