const withSass = require('@zeit/next-sass')
// module.exports = {
//   target: 'serverless',
//   ...withSass()
// }

// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true
})