import { it, expect } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';

it('handles v2 connection, refresh, stale responses and disconnect without legacy requests', async () => {
  const { document } = installTestDom();
  const nav = createElement('iam-nav');
  document.body.append(nav);
  nav.shadowRoot = createElement('div');
  const backdrop = createElement('div', { class: 'backdrop' });
  const mobileMenu = createElement('div', { class: 'menu' });
  const accountMenu = createElement('div', { class: 'nav--menu' });
  nav.shadowRoot.append(backdrop, mobileMenu, accountMenu);
  const openDropdown = (): void => {
    nav.querySelector('details').setAttribute('open', '');
    nav.classList.add('open', 'open-secondary');
    backdrop.classList.add('show');
  };

  // The lightweight DOM does not parse HTML. Supply the rendered schema's DOM
  // fixture, as nav.test.ts does, while exercising the real component lifecycle.
  const originalCreateElement = document.createElement.bind(document);
  document.createElement = (tagName): ReturnType<typeof createElement> => {
    if (tagName !== 'template') return originalCreateElement(tagName);
    const template = createElement('template');
    const link = createElement('a', {
      href: '/learn',
      dataProduct: 'crm',
      dataFeature: 'dashboard',
      dataEnabled: '/dashboard',
    });
    const content = createElement('div');
    const dropdown = createElement('details', { slot: 'secondary' });
    dropdown.append(link);
    content.append(dropdown);
    Object.defineProperty(content, 'childNodes', { get: () => content.children });
    template.content = content;
    return template;
  };
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
    const Component = (await import('../components/std-nav/std-nav.component.ts')).default;
    const makeComponent = (): InstanceType<typeof Component> => {
      const element = new Component();
      element.localName = 'iam-std-nav';
      Object.defineProperty(element, 'isConnected', { get: () => document.contains(element) });
      // Model fragment insertion without introducing an HTML parser.
      element.before = (fragment): void => {
        for (const child of [...fragment.children]) {
          fragment.removeChild(child);
          nav.insertBefore(child, element);
        }
      };
      nav.append(element);
      return element;
    };
    const legacy = makeComponent();
    legacy.setAttribute('data-sso-subject', 'one_legacy');
    await legacy.connectedCallback();
    const brand = createElement('a', { class: 'brand', slot: 'logo' });
    nav.append(brand);
    for (const [mode, destination] of [
      [null, 'https://one.iamproperty.com/dashboard'],
      ...['production', '', 'unknown'].map((mode) => [mode, 'https://one.iamproperty.com/dashboard']),
      ['dev', 'https://hub.dev.iamproperty.group/dashboard'],
      ...['pre-prod', 'test', 'uat'].map((mode) => [
        mode,
        'https://hub.pre-prod.iamproperty.group/dashboard',
      ]),
    ]) {
      if (mode === null) legacy.removeAttribute('data-mode');
      else legacy.setAttribute('data-mode', mode);
      await legacy.connectedCallback();
      expect(brand.getAttribute('href') === destination);
    }
    brand.remove();
    const element = makeComponent();
    // An own property models assignment before custom element registration.
    Object.defineProperty(element, 'getAccessToken', {
      value: (): string => 'first',
      configurable: true,
    });
    await element.connectedCallback();
    expect(!Object.prototype.hasOwnProperty.call(element, 'getAccessToken'));
    expect(legacy.getAttribute('data-access-context-status') === 'error');
    expect(element.getAttribute('data-access-context-status') === 'loaded');
    expect(document.querySelector('a').getAttribute('href') === '/dashboard');
    openDropdown();
    element.getAccessToken = (): Promise<string> =>
      new Promise((resolve) => {
        pending = resolve;
      });
    expect(!document.querySelector('a'));
    expect(!nav.classList.contains('open'));
    expect(!nav.classList.contains('open-secondary'));
    expect(!backdrop.classList.contains('show'));
    element.getAccessToken = (): null => null;
    await settle();
    pending('old-user-token');
    await settle();
    expect(!document.querySelector('a'));
    expect(element.getAttribute('data-access-context-status') === 'error');
    element.getAccessToken = (): string => 'new-user-token';
    await settle();
    expect(Boolean(document.querySelector('a')));
    // Refreshing generated links must not close an independently open menu.
    for (const menu of [mobileMenu, accountMenu]) {
      openDropdown();
      menu.classList.add('open');
      await element.refresh();
      expect(nav.classList.contains('open'));
      expect(backdrop.classList.contains('show'));
      expect(menu.classList.contains('open'));
      menu.classList.remove('open');
    }
    openDropdown();
    element.remove();
    element.disconnectedCallback();
    expect(!nav.classList.contains('open'));
    expect(!backdrop.classList.contains('show'));
    expect(!document.querySelector('a'));
    expect(requests.every((url) => url.includes('/v2/') || url.includes('ecosystem-switcher.json')));
  } finally {
    globalThis.fetch = originalFetch;
    document.createElement = originalCreateElement;
    nav.remove();
  }
});
