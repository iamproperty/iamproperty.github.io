const path = require('path')
const glob = require(`glob`)

const componentNameFromSpec = spec => spec.split(`/`).reverse()[0].replace(/\..*?\.js/, ``);

let pages;

if (process.env.TEST_MODE === `integration`) {
  const integrationSpecs = glob.sync(`./src/**/*.integration.js`);
  pages = integrationSpecs.reduce((prev, spec) => {
    const name = componentNameFromSpec(spec);
    // eslint-disable-next-line no-param-reassign
    prev[name] = { entry: spec };

    return prev;
  }, {});
}

module.exports = {
  transpileDependencies: [
    'framework7',
    'framework7-vue',
    'template7',
    'dom7',
    'ssr-window'
  ],
  lintOnSave: false,
  pages,
  chainWebpack: (config) => {

    /*
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
              mergePaths: false,
              inlineStyles: false
            }
          ]
        }
      })
*/


config.module.rule('svg')
.test(/\.svg$/)
.use('vue-svg-loader')
.loader('vue-svg-loader')
.end()


    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })

    config.module.rule('files')
    .test(/\.(pdf)$/)
    .use('file-loader')
    .loader('file-loader')
    .end()

  },
  css: {sourceMap: true},
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'docs/')
      }
    }
  }
}
