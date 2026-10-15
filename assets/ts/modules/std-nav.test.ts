import { it, expect } from './test.ts';
import { JSDOM } from 'jsdom';

it('handles v2 upgrade, refresh, stale responses and disconnect without legacy requests', async () => {
  const dom = new JSDOM(
    '<iam-nav><iam-std-nav data-sso-subject="legacy"></iam-std-nav></iam-nav>',
    { url: 'https://example.com' }
  );
  const saved = {};
  for (const key of ['window', 'document', 'HTMLElement', 'CustomEvent']) {
    saved[key] = globalThis[key];
    globalThis[key] = dom.window[key];
  }
  const originalFetch = globalThis.fetch;
  const requests: string[] = [];
  let pending;
  const schema = [
    {
      attributes: {
        title: 'CRM',
        sections: [],
        links: [
          {
            title: 'Dashboard',
            productKey: 'crm',
            featureKey: 'dashboard',
            destinations: { unlinked: '/learn', linkedEnabled: '/dashboard' },
          },
        ],
      },
    },
  ];
  globalThis.fetch = (async (url) => {
    requests.push(String(url));
    if (String(url).includes('/v2/'))
      return {
        ok: true,
        json: async (): Promise<any> => ({ data: { attributes: { features: { crm: ['dashboard'] } } } }),
      };
    return { ok: true, json: async (): Promise<any> => schema };
  }) as any;
  const settle = async (): Promise<void> => {
    for (let i = 0; i < 20; i++) await Promise.resolve();
  };
  try {
    const legacy = dom.window.document.createElement('iam-std-nav');
    legacy.setAttribute('data-sso-subject', 'one_legacy'); // A subject alone cannot authenticate navigation.
    dom.window.document.querySelector('iam-nav').append(legacy);
    const element = dom.window.document.querySelector('iam-std-nav');
    element.getAccessToken = (): string => 'first'; // Assigned before custom element upgrade.
    const Component = (await import('../components/std-nav/std-nav.component.ts')).default;
    dom.window.customElements.define('iam-std-nav', Component);
    await settle();
    expect(legacy.getAttribute('data-access-context-status') === 'error');
    expect(element.getAttribute('data-access-context-status') === 'loaded');
    expect(dom.window.document.querySelector('a').getAttribute('href') === '/dashboard');
    element.getAccessToken = (): Promise<string> =>
      new Promise((resolve) => {
        pending = resolve;
      });
    expect(!dom.window.document.querySelector('a'));
    element.getAccessToken = (): null => null;
    await settle();
    pending('old-user-token');
    await settle();
    expect(!dom.window.document.querySelector('a'));
    expect(element.getAttribute('data-access-context-status') === 'error');
    element.getAccessToken = (): string => 'new-user-token';
    await settle();
    expect(Boolean(dom.window.document.querySelector('a')));
    element.remove();
    expect(!dom.window.document.querySelector('a'));
    expect(requests.every((url) => url.includes('/v2/') || url.includes('ecosystem-switcher.json')));
  } finally {
    globalThis.fetch = originalFetch;
    for (const key of Object.keys(saved)) globalThis[key] = saved[key];
    dom.window.close();
  }
});
