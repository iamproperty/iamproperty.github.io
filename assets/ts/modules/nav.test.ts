import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { populateLinks, setEnabledLinks } from './nav.ts';

installTestDom();

describe('Navigation module', () => {
  it('builds navigation links and enables linked destinations', () => {
    const links = [
      {
        title: 'Sales',
        productKey: 'sales',
        featureKey: 'dashboard',
        destinations: {
          unlinked: '/sales',
          linkedEnabled: '/linked',
          linkedDisabled: '/disabled',
        },
      },
    ];
    const component = createElement('nav');
    component.innerHTML = populateLinks(links);
    const link = createElement('a', {
      dataProduct: 'sales',
      dataFeature: 'dashboard',
      dataEnabled: '/linked',
      href: '/sales',
      target: '_blank',
    });
    append(component, link);

    setEnabledLinks(component, {
      attributes: { products: { sales: { features: { dashboard: true } } } },
    });

    expect(populateLinks(links).includes('data-product="sales"'));
    expect(link.getAttribute('href') === '/linked');
    expect(!link.hasAttribute('target'));
  });
});
