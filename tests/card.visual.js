const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })

const pkg = require('../package.json');

const visualtest = require('./_visualtest.js');

visualtest.testPages(`Card page`,'/components/card');

