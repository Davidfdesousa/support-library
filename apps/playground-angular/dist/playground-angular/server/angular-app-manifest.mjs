
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
    'index.csr.html': {size: 941, hash: 'd6596163c9cee53ce71614f0fef4b52fb24fb2bc494a8bdf59d85096a96ca1bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1304, hash: '749a63215dc7040c3b8899130f285445fb1bda3e07ea16571c8b15d58e9a61a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3115, hash: '868a4ea64e16e84d215f50fbadd3abf3787121ca7a1974144a242066eb83c702', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Q3Q3ZPC7.css': {size: 25, hash: 'crcqGZVO+/Q', text: () => import('./assets-chunks/styles-Q3Q3ZPC7_css.mjs').then(m => m.default)}
  },
};
