const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })

const pkg = require('../package.json');

const visualtest = require('./_visualtest.js');

describe(`Body font class`, () => {
  it(`should use the correct font`, async() => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(pkg.localURL+'/foundations/fonts#visualtest')
    
    await page.setViewport({ width: 375, height: 800 })

    const fontFamily = await page.$eval(
      '[data-test="test1"]',
      (el) => window.getComputedStyle(el).getPropertyValue("font-family")
    )
    
    expect(fontFamily).toBe('qanelasmedium, arial, sans-serif');
    await browser.close()
  });
})

describe(`Heading font class`, () => {
  it(`should use the correct font`, async() => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(pkg.localURL+'/foundations/fonts#visualtest')

    await page.setViewport({ width: 375, height: 800 })

    const fontFamily = await page.$eval(
      '[data-test="test2"]',
      (el) => window.getComputedStyle(el).getPropertyValue("font-family")
    )
    
    expect(fontFamily).toBe('qanelas_softextrabold, arial, sans-serif');
    await browser.close()
  });
})

visualtest.testPages(`Fonts page`,'/foundations/fonts#visualtest');
