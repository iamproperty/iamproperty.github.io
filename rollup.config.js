'use strict'
const { minify } = require('rollup-plugin-esbuild');
//const  typescript = require('@rollup/plugin-typescript');

const path = require('path')
const fs = require('fs')
const { babel } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const replace = require('@rollup/plugin-replace')
const banner = require('./banner.js')

const BUNDLE = process.env.BUNDLE === 'true'
const ESM = process.env.ESM === 'true'

let fileDest = `scripts${ESM ? '.esm' : ''}`
const external = ['/svg/icons.svg','/svg/logo.svg','@popperjs/core']
const plugins = [
  babel({
    // Only transpile our source code
    exclude: 'node_modules/**',
    // Include the helpers in the bundle, at most one copy of each
    babelHelpers: 'runtime'
  }),
  //typescript({ compilerOptions: {lib: ["es5", "es6", "dom"], target: "es5"}})
]
const globals = {
  '@popperjs/core': 'Popper'
}

if (BUNDLE) {
  fileDest += '.bundle'
  // Remove last entry in external array to bundle Popper
  external.pop()
  delete globals['@popperjs/core']
  plugins.push(
    replace({
      'process.env.NODE_ENV': '"production"',
      preventAssignment: true
    }),
    nodeResolve()
  )
}

plugins.push(minify());

const rollupConfig = [
  {
    input: path.resolve(__dirname, `assets/js/bundle.js`),
    output: {
      banner,
      file: path.resolve(__dirname, `assets/js/${fileDest}.js`),
      format: ESM ? 'esm' : 'umd',
      globals
    },
    external,
    plugins
  },
  {
    input: path.resolve(__dirname, `assets/js/dynamic.js`),
    output: {
      banner,
      file: path.resolve(__dirname, `assets/js/dynamic.min.js`),
      format: ESM ? 'esm' : 'umd',
      globals,
      name: 'iam-dynamic'
    },
    external,
    plugins: [
      replace({
        'process.env.NODE_ENV': '"production"',
        preventAssignment: true,
        'componentExt': '".component.min.js"'
      }),
      minify()
    ]
  }
];

const components = ["accordion","header","table","tabs",'card',"filterlist",'applied-filters','pagination','notification'];

components.forEach((component) => {

  let css = '';

  try {
    if (fs.existsSync(path.resolve(__dirname, `assets/css/components/${component}.css`))) {
      
      css = fs.readFileSync(path.resolve(__dirname, `assets/css/components/${component}.css`), 'utf8');
      css = css.replace("sourceMappingURL=","sourceMappingURL=assets/css/components/");
    }
  } catch (err) {
    console.error(err);
  }

  rollupConfig.push({
    input: path.resolve(__dirname, `assets/js/components/${component}/${component}.component.js`),
    output: {
      banner,
      file: path.resolve(__dirname, `assets/js/components/${component}/${component}.component.min.js`),
      format: 'esm',
      globals,
      name: `iam-${component}`
    },
    external,
    plugins: [
      replace({
        'process.env.NODE_ENV': '"production"',
        preventAssignment: true,
        'loadCSS': JSON.stringify(`${css}`)
      }),
      minify(),
    ]
  })
});


if (!ESM) {
  rollupConfig[0].output.name = 'iamkey'
}

module.exports = rollupConfig
