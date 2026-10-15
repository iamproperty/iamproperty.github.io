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
      title: 'Learn more',
      target: '_blank',
    });
    append(component, link);

    setEnabledLinks(component, {
      attributes: { features: { sales: ['dashboard'] } },
    });

    expect(populateLinks(links).includes('data-product="sales"'));
    expect(link.getAttribute('data-is-enabled') === 'true');
    expect(link.getAttribute('href') === '/linked');
    expect(!link.hasAttribute('target'));
    expect(!link.hasAttribute('title'));
  });
});

it('uses v2 bearer authentication without a subject and never falls back after failure', async () => {
  const { loadAuthenticatedUserData, loadNavData } = await import('./nav.ts');
  const originalFetch = globalThis.fetch;
  const requests: any[] = [];
  let status = 200;
  globalThis.fetch = (async (url, options) => {
    requests.push({ url, options });
    return {
      ok: status === 200,
      status,
      json: async (): Promise<any> => ({ data: { attributes: { features: { crm: ['dashboard'] } } } }),
    };
  }) as any;
  try {
    await loadAuthenticatedUserData('dev', 'crm', async () => 'token');
    expect(requests[0].url === 'https://sso-api.dev.iamproperty.group/v2/navigation/access-context');
    expect(requests[0].options.headers.Authorization === 'Bearer token');
    expect(!('subject' in JSON.parse(requests[0].options.body).data.attributes));
    await loadAuthenticatedUserData('production', 'crm', () => 'fresh-token');
    expect(requests[1].url === 'https://sso-api.iamproperty.com/v2/navigation/access-context');
    expect(requests[1].options.headers.Authorization === 'Bearer fresh-token');
    for (const [mode, hub, api] of [
      [undefined, 'https://one.iamproperty.com', 'https://sso-api.iamproperty.com'],
      [null, 'https://one.iamproperty.com', 'https://sso-api.iamproperty.com'],
      ...['production', '', 'unknown'].map((mode) => [
        mode,
        'https://one.iamproperty.com',
        'https://sso-api.iamproperty.com',
      ]),
      ['dev', 'https://hub.dev.iamproperty.group', 'https://sso-api.dev.iamproperty.group'],
      ...['pre-prod', 'test', 'uat'].map((mode) => [
        mode,
        'https://hub.pre-prod.iamproperty.group',
        'https://sso-api.pre-prod.iamproperty.group',
      ]),
    ]) {
      await loadAuthenticatedUserData(mode, 'crm', () => 'environment-token');
      expect(requests.at(-1).url === `${api}/v2/navigation/access-context`);
      await loadNavData(mode);
      expect(requests.at(-1).url === `${hub}/data/ecosystem-switcher.json`);
    }
    for (const code of [401, 403, 500]) {
      status = code;
      const count = requests.length;
      let failed = false;
      try {
        await loadAuthenticatedUserData('dev', 'crm', () => 'expired');
      } catch {
        failed = true;
      }
      expect(failed && requests.length === count + 1);
      expect(requests.at(-1).url.includes('/v2/'));
    }
    for (const provider of [
      (): null => null,
      (): string => '',
      (): never => {
        throw new Error('private provider error');
      },
    ]) {
      const count = requests.length;
      let failed = false;
      try {
        await loadAuthenticatedUserData('dev', 'crm', provider);
      } catch {
        failed = true;
      }
      expect(failed && requests.length === count);
    }
  } finally {
    globalThis.fetch = originalFetch;
  }
});
