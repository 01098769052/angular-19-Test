
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://01098769052.github.io/angular-19-Test/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://01098769052.github.io/angular-19-Test"
  }
],
  assets: {
    'index.csr.html': {size: 5972, hash: '4825bbcc727bf0b9690fbd56d637c3e5c308bb6b1ac50af10bad78eaad820a14', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1115, hash: '715823a3350f76f72c180d0d612ccb64da80ba4f3061a9ba1aa49ede8b7b487c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7696, hash: 'bd2c16556128cf37c5f2e2762aecc4115e6a8dbcad2467c6c7482510e85ae8fd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CON6YUZV.css': {size: 305312, hash: 'o2N/S4UGvEs', text: () => import('./assets-chunks/styles-CON6YUZV_css.mjs').then(m => m.default)}
  },
};
