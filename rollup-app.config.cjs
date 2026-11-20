'use strict';
const path = require('path');
const fs = require('fs');
const replace = require('@rollup/plugin-replace');
const banner = require('./banner.cjs');

const ESM = process.env.ESM === 'true';

const rollupConfig = [];

const components = ['insights', 'insights-loader'];

components.forEach((component) => {
  let css = '';

  try {
    if (fs.existsSync(path.resolve(__dirname, `assets/css/apps/${component}.app.css`))) {
      css = fs.readFileSync(path.resolve(__dirname, `assets/css/apps/${component}.app.css`), 'utf8');
      css = css.replace('sourceMappingURL=', 'sourceMappingURL=assets/css/apps/');
      css = css.replace('\uFEFF', '');
    }
  } catch (err) {
    console.error(err);
  }

  rollupConfig.push({
    input: path.resolve(__dirname, `assets/js/apps/${component}.app.js`),
    output: {
      banner,
      file: path.resolve(__dirname, `assets/js/apps/${component}.app.min.js`),
      format: 'esm',
      name: `iam-${component}`,
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': '"production"',
        preventAssignment: true,
        loadCSS: JSON.stringify(`${css}`),
      }),
    ],
  });
});

if (!ESM) {
  rollupConfig[0].output.name = 'iamkey';
}

module.exports = rollupConfig;
