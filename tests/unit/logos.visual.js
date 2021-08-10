
describe(`Logos page`, () => {
  
  it(`It should render correctly.`, async (done) => {

    jest.setTimeout(120000)
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const { toMatchImageSnapshot } = require('jest-image-snapshot');
    expect.extend({ toMatchImageSnapshot });

    await page.goto('http://localhost:8080/foundations/logos')

    const image = await page.screenshot({ fullPage: true });

    expect(image).toMatchImageSnapshot();
    done()
  });
});
