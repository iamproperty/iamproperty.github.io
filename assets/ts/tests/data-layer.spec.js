// @ts-nocheck
import '@testing-library/jest-dom'
import createDataLayer from "../modules/data-layer";

describe('createDataLayer', () => {
  // Mocking the window object for testing
  let mockDataLayer = [];
  beforeEach(() => {
    window.dataLayer = mockDataLayer;
    document.title = 'Mock Page Title';
  });

  it('should push a "Pageview" event to dataLayer on function call', () => {
    createDataLayer();
    expect(window.dataLayer).toEqual([
      {
        event: 'Pageview',
        pageTitle: 'Mock Page Title',
      },
    ]);
  });

  it('should push a "closeDetails" event when the document click target has "open" attribute and is summary element', () => {
    // Create a mock DOM structure with a summary element having the 'open' attribute
    document.body.innerHTML = `
      <details>
        <summary open>Summary Text</summary>
      </details>
    `;
    const summaryElement = document.querySelector('summary');

    // Simulate the click event on the summary element
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    summaryElement.dispatchEvent(clickEvent);

    expect(window.dataLayer).toEqual([
      {
        event: 'Pageview',
        pageTitle: 'Mock Page Title',
      },
      {
        event: 'openDetails',
        detailsTitle: 'Summary Text',
      },
    ]);

    summaryElement.dispatchEvent(clickEvent);
    expect(window.dataLayer).toEqual([
      {
        event: 'Pageview',
        pageTitle: 'Mock Page Title',
      },
      {
        event: 'openDetails',
        detailsTitle: 'Summary Text',
      },
      {
        event: 'closeDetails',
        detailsTitle: 'Summary Text',
      },
    ]);

  });

  // More test cases for other scenarios can be added here...
});