const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })

describe(`Body font class`, () => {
  it(`should use the correct font`, async() => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:8080/foundations/fonts#visualtest')
    
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
    await page.goto('http://localhost:8080/foundations/fonts#visualtest')
    
    await page.setViewport({ width: 375, height: 800 })

    const fontFamily = await page.$eval(
      '[data-test="test2"]',
      (el) => window.getComputedStyle(el).getPropertyValue("font-family")
    )
    
    expect(fontFamily).toBe('qanelas_softextrabold, arial, sans-serif');
    await browser.close()
  });
})

describe(`Fonts page`, () => {

  it(`It should render correctly.`, async(done) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:8080/foundations/fonts#visualtest')
    
    await page.setViewport({ width: 375, height: 800 })
    const mobileImage = await page.screenshot({ fullPage: true });
    expect(mobileImage).toMatchImageSnapshot();

    await page.setViewport({ width: 768, height: 800 })
    const tabletImage = await page.screenshot({ fullPage: true });
    expect(tabletImage).toMatchImageSnapshot();

    await page.setViewport({ width: 1440, height: 800 })
    const desktopImage = await page.screenshot({ fullPage: true });
    expect(desktopImage).toMatchImageSnapshot();

    done()
  });
});
