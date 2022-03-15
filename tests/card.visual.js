const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })

const pkg = require('../package.json');

const visualtest = require('./_visualtest.js');

describe(`Card deck`, () => {
  it(`should have some extra padding bottom`, async() => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(pkg.localURL+'/components/card-deck#visualtest')
    
    await page.setViewport({ width: 375, height: 800 })
    const paddingBottom = await page.$eval(
      '[data-test="test1"]',
      (el) => window.getComputedStyle(el).getPropertyValue("padding-bottom")
    )
    expect(Math.round(parseFloat(paddingBottom))).toBe(48);
    
    await page.setViewport({ width: 768, height: 800 })
    const paddingBottom2 = await page.$eval(
      '[data-test="test1"]',
      (el) => window.getComputedStyle(el).getPropertyValue("padding-bottom")
    )
    expect(Math.round(parseFloat(paddingBottom2))).toBe(48);
    
    await page.setViewport({ width: 1440, height: 800 })
    const paddingBottom3 = await page.$eval(
      '[data-test="test1"]',
      (el) => window.getComputedStyle(el).getPropertyValue("padding-bottom")
    )
    expect(Math.round(parseFloat(paddingBottom3))).toBe(48);

    await browser.close()
  });
})



visualtest.testPages(`Card deck page`,'/components/card-deck#visualtest');

visualtest.testPages(`Card page`,'/elements/card#visualtest');

