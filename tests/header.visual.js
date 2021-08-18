const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe(`Header`, () => {
  
  it(`should have the breadcrumb and background image absolutely positioned`, async(done) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:8080/components/header#visualtest')
    
    await page.setViewport({ width: 1440, height: 800 })
    const breadcrumbPosition = await page.$eval(
      '.header .breadcrumb',
      (el) => window.getComputedStyle(el).getPropertyValue("position")
    )
    const imgPosition = await page.$eval(
      '.header > picture > img',
      (el) => window.getComputedStyle(el).getPropertyValue("position")
    )
    const minHeight = await page.$eval(
      '.header',
      (el) => parseInt(window.getComputedStyle(el).getPropertyValue("min-height"))
    )
    expect(breadcrumbPosition).toBe('absolute');
    expect(imgPosition).toBe('absolute');
    expect(minHeight).toBe(470);


    await browser.close()
    done()
  })
})

describe(`Header page`, () => {
  
  it(`It should render correctly.`, async(done) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:8080/components/header#visualtest')
    
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
