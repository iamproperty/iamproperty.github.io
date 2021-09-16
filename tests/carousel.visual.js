const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })

describe(`Carousel page`, () => {

  it(`It should render correctly.`, async(done) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:8080/components/carousel#visualtest')
    
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
