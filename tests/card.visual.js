const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })

const pkg = require('../package.json');

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

describe(`Card deck page`, () => {

  it(`It should render correctly.`, async(done) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(pkg.localURL+'/components/card-deck#visualtest')
    
    await page.setViewport({ width: 375, height: 800 })
    const mobileImage = await page.screenshot({ fullPage: true });
    expect(mobileImage).toMatchImageSnapshot({ allowSizeMismatch: true, customDiffConfig: { threshold: 0.5 } });

    await page.setViewport({ width: 768, height: 800 })
    const tabletImage = await page.screenshot({ fullPage: true });
    expect(tabletImage).toMatchImageSnapshot({ allowSizeMismatch: true, customDiffConfig: { threshold: 0.5 } });

    await page.setViewport({ width: 1440, height: 800 })
    const desktopImage = await page.screenshot({ fullPage: true });
    expect(desktopImage).toMatchImageSnapshot({ allowSizeMismatch: true, customDiffConfig: { threshold: 0.5 } });

    done()
  });
});

describe(`Card page`, () => {

  it(`It should render correctly.`, async(done) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(pkg.localURL+'/components/card#visualtest')
    
    await page.setViewport({ width: 375, height: 800 })
    const mobileImage = await page.screenshot({ fullPage: true });
    expect(mobileImage).toMatchImageSnapshot({ allowSizeMismatch: true, customDiffConfig: { threshold: 0.5 } });

    await page.setViewport({ width: 768, height: 800 })
    const tabletImage = await page.screenshot({ fullPage: true });
    expect(tabletImage).toMatchImageSnapshot({ allowSizeMismatch: true, customDiffConfig: { threshold: 0.5 } });

    await page.setViewport({ width: 1440, height: 800 })
    const desktopImage = await page.screenshot({ fullPage: true });
    expect(desktopImage).toMatchImageSnapshot({ allowSizeMismatch: true, customDiffConfig: { threshold: 0.5 } });

    done()
  });
});
