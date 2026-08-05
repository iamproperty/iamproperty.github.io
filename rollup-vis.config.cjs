'use strict'
//const { minify } = require('rollup-plugin-esbuild');
//const  typescript = require('@rollup/plugin-typescript');

const path = require('path')
const fs = require('fs')
const { babel } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const replace = require('@rollup/plugin-replace')
const banner = require('./banner.cjs')

const BUNDLE = process.env.BUNDLE === 'true'
const ESM = process.env.ESM === 'true'


const rollupConfig = [];

var components = [
  "table","properties"
]

Array.from(components).forEach((component) => {

  let css = '';
  let extraCSS = '';

  try {
    if (fs.existsSync(path.resolve(__dirname, `assets/css/visualisations/${component}.visualisation.css`))) {
      
      css = fs.readFileSync(path.resolve(__dirname, `assets/css/visualisations/${component}.visualisation.css`), 'utf8');
      css = css.replace("sourceMappingURL=","sourceMappingURL=assets/css/visualisations/");
      css = css.replace("\uFEFF","");
    }
    
  } catch (err) {
    console.error(err);
  }

  try {

    if (fs.existsSync(path.resolve(__dirname, `assets/css/visualisations/${component}.global.css`))) {
      
      extraCSS = fs.readFileSync(path.resolve(__dirname, `assets/css/visualisations/${component}.global.css`), 'utf8');
      extraCSS = extraCSS.replace("sourceMappingURL=","sourceMappingURL=assets/css/visualisations/");
      extraCSS = extraCSS.replace("\uFEFF","");
    }
  } catch (err) {
    console.error(err);
  }

  rollupConfig.push({
    input: path.resolve(__dirname, `assets/js/visualisations/${component}.visualisation.js`),
    output: {
      banner,
      file: path.resolve(__dirname, `assets/js/visualisations/${component}.visualisation.min.js`),
      format: 'esm',
      name: `iam-${component}`
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': '"production"',
        preventAssignment: true,
        'loadCSS': JSON.stringify(`${css}`),
        'loadExtraCSS': JSON.stringify(`${extraCSS}`)
      }),
    ]
  })
});


if (!ESM) {
  rollupConfig[0].output.name = 'iamkey'
}

module.exports = rollupConfig
