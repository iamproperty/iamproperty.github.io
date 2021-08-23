const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })


describe(`Logos`, () => {
  
  it(`height should be the same as the font-size`, async() => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:8080/foundations/logos#visualtest')
    
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

describe(`Logos page`, () => {
  it(`It should render correctly `, async() => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:8080/foundations/logos#visualtest')

    await page.setViewport({ width: 375, height: 800 })
    const mobileImage = await page.screenshot({ fullPage: true });
    expect(mobileImage).toMatchImageSnapshot();

    await page.setViewport({ width: 768, height: 800 })
    const tabletImage = await page.screenshot({ fullPage: true });
    expect(tabletImage).toMatchImageSnapshot();

    await page.setViewport({ width: 1440, height: 800 })
    const desktopImage = await page.screenshot({ fullPage: true });
    expect(desktopImage).toMatchImageSnapshot();

    await browser.close()
  });
});
