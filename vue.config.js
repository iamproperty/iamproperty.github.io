// vue.config.js
const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            {
              cleanupIDs: false,
              mergePaths: false
            }
          ]
        }
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'docs/')
      }
    }
  }
}
