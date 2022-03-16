const nextConfig  = {
  target: 'serverless',
  cssModules: true,
}
// next.config.js 
// module.exports = withPlugins([...], {
//   webpack5: false,
// })
// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = nextConfig;
