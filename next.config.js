const withSass = require('@zeit/next-sass');
const nextConfig  = {
  target: 'serverless',
  ...withSass(),
  cssModules: true,
}
// next.config.js 
// module.exports = withPlugins([...], {
//   webpack5: false,
// })
// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS(withSass());
module.exports = nextConfig;
