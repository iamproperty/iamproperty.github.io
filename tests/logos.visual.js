const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })

const pkg = require('../package.json');

describe(`Logos`, () => {

  it(`height should be the same as the font-size`, async() => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(pkg.localURL+'/foundations/logos#visualtest')

    await page.setViewport({ width: 375, height: 800 })

    const logoFontSize = await page.$eval(
      '[data-test="test1"]',
      (el) => parseInt(window.getComputedStyle(el).getPropertyValue("font-size"))
    )

    const logoHeight = await page.$eval(
      '[data-test="test1"]',
      (el) => parseInt(window.getComputedStyle(el).getPropertyValue("font-size"))
    )
    expect(logoFontSize).toBe(64);
    expect(logoHeight).toBe(64);

    await browser.close()
  });
})

const visualtest = require('./_visualtest.js');

visualtest.testPages(`Logos page`,'/foundations/logos');
