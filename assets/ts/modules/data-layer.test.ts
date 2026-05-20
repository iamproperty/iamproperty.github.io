import { describe, expect, it } from './test.ts';
import { installTestDom } from './test-dom.ts';
import createDataLayer from './data-layer.ts';

const { window } = installTestDom();

describe('Data layer module', () => {
  it('pushes the initial pageview event', () => {
    window.dataLayer = [];
    createDataLayer();

    expect(window.dataLayer[0].event === 'Pageview');
    expect(window.dataLayer[0].pageTitle === 'Test page');
  });
});
