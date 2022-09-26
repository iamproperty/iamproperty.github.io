const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const pkg = require('../package.json');

describe(`Header`, () => {

  it(`should have the breadcrumb and background image absolutely positioned`, async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(pkg.localURL+'/components/header')

    await page.setViewport({ width: 1440, height: 800 })
    const breadcrumbPosition = await page.$eval(
      '.header-banner .breadcrumb',
      (el) => window.getComputedStyle(el).getPropertyValue("position")
    )
    const imgPosition = await page.$eval(
      '.header-banner > picture > img',
      (el) => window.getComputedStyle(el).getPropertyValue("position")
    )
    const minHeight = await page.$eval(
      '.header-banner',
      (el) => parseInt(window.getComputedStyle(el).getPropertyValue("min-height"))
    )
    expect(breadcrumbPosition).toBe('absolute');
    expect(imgPosition).toBe('absolute');
    expect(minHeight).toBe(470);


    await browser.close()
    return true;
  })
})

const visualtest = require('./_visualtest.js');

visualtest.testPages(`Header page`,'/components/header');
