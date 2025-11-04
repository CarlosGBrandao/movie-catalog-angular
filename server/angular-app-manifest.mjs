
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://CarlosGBrandao.github.io/movie-catalog-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/movie-catalog-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23671, hash: '813259a71610352c6d8697226a893a46ec10b064de204a1425c5f98aa7822ba5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17245, hash: '1425166d3795525c9d33d12fbe39fd912c3e17c77dbdd9572577d92cdd2638d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 74213, hash: 'db051c02ab679b9f485cebca6cd4c78755e370e390d2c23a9a58221577760a92', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
