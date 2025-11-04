
export default {
  basePath: 'https://CarlosGBrandao.github.io/movie-catalog-angular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
