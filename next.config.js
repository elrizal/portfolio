const withSass = require('@zeit/next-sass')
module.exports = {
  target: 'serverless',
  ...withSass(),
  cssModules: true,
}

// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS(withSass());
