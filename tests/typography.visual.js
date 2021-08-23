const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe(`Headings`, () => {
  
  it(`should have the correct size`, async(done) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:8080/elements/type#visualtest')
    
    await page.setViewport({ width: 375, height: 800 })

    const fontSize1 = await page.$eval(
      '[data-test="test1"]',
      (el) => parseInt(window.getComputedStyle(el).getPropertyValue("font-size"))
    )
    expect(fontSize1).toBe(32);

    const fontSize2 = await page.$eval(
      '[data-test="test2"]',
      (el) => parseInt(window.getComputedStyle(el).getPropertyValue("font-size"))
    )
    expect(fontSize2).toBe(24);

    const fontSize3 = await page.$eval(
      '[data-test="test3"]',
      (el) => parseInt(window.getComputedStyle(el).getPropertyValue("font-size"))
    )
    expect(fontSize3).toBe(24);

    const fontSize4 = await page.$eval(
      '[data-test="test4"]',
      (el) => parseInt(window.getComputedStyle(el).getPropertyValue("font-size"))
    )
    expect(fontSize4).toBe(20);

    const fontSize5 = await page.$eval(
      '[data-test="test5"]',
      (el) => parseInt(window.getComputedStyle(el).getPropertyValue("font-size"))
    )
    expect(fontSize5).toBe(18);

    const fontSize6 = await page.$eval(
      '[data-test="test6"]',
      (el) => parseInt(window.getComputedStyle(el).getPropertyValue("font-size"))
    )
    expect(fontSize6).toBe(16);

    await browser.close()
    done()
  })
})

describe(`Typography page`, () => {
  
  it(`It should render correctly.`, async(done) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:8080/elements/type#visualtest')
    
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
