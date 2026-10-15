import { bindNavigationVariables } from '../../modules/navigation-variables';
import {
  populateNav,
  loadNavData,
  getNavigationEnvironment,
  setEnabledLinks,
  hideLinks,
  loadAuthenticatedUserData,
  NavigationTokenProvider,
} from '../../modules/nav';

class iamSTDNav extends HTMLElement {
  private tokenProvider?: NavigationTokenProvider;
  private request?: AbortController;
  private generation = 0;
  private renderedNodes: Node[] = [];
  private restoreVariables: Array<() => void> = [];

  get getAccessToken(): NavigationTokenProvider | undefined {
    return this.tokenProvider;
  }
  set getAccessToken(provider: NavigationTokenProvider | undefined) {
    this.tokenProvider = provider;
    if (this.isConnected) void this.refresh();
  }

  disconnectedCallback(): void {
    this.generation++;
    this.request?.abort();
    this.renderedNodes.forEach((node) => {
      if (node instanceof HTMLElement && node.matches('details[open]')) {
        const nav = node.closest('iam-nav');
        const otherDropdown = Array.from(nav?.querySelectorAll(':scope > details[open]') ?? []).some(
          (details) => !this.renderedNodes.includes(details)
        );
        const otherMenu = nav?.shadowRoot?.querySelector('.menu.open, .nav--menu.open');
        if (nav && !otherDropdown && !otherMenu) {
          nav.classList.remove('open', 'open-secondary');
          nav.shadowRoot?.querySelector('.backdrop')?.classList.remove('show');
        }
      }
      node.parentNode?.removeChild(node);
    });
    this.renderedNodes = [];
    this.restoreVariables.forEach((restore) => restore());
    this.restoreVariables = [];
  }

  // Call on sign-out/account switch, even when the provider function itself is unchanged.
  async refresh(): Promise<void> {
    this.disconnectedCallback();
    const generation = this.generation;
    if (!this.isConnected) return;
    this.hidden = true; // Keep a lifecycle anchor; links remain direct children of iam-nav.
    const nav = this.closest('iam-nav');
    if (!nav) return;
    const current = (): boolean => this.isConnected && generation === this.generation;
    this.setAttribute('data-access-context-status', 'loading');
    this.request = new AbortController();
    try {
      if (typeof this.tokenProvider !== 'function') throw new Error('Navigation token provider unavailable');
      const mode = this.getAttribute('data-mode');
      const userData = await loadAuthenticatedUserData(
        mode,
        this.getAttribute('data-product'),
        this.tokenProvider,
        this.request.signal
      );
      if (!current()) return;
      const schema = await loadNavData(mode);
      if (!current()) return;
      if (!Array.isArray(schema)) throw new Error('Navigation schema unavailable');
      const secondary = this.hasAttribute('slot');
      const template = document.createElement('template');
      template.innerHTML = populateNav(
        secondary ? schema : schema.filter((section) => section.attributes.title !== 'Learning and support'),
        secondary ? 'secondary' : ''
      );
      setEnabledLinks(template.content, userData);
      hideLinks(template.content, userData);
      nav
        .querySelectorAll(
          secondary
            ? ':scope > [slot="secondary"]:not(iam-std-nav):not(iam-branch-selector)'
            : ':scope > :not([slot]):not(iam-std-nav)'
        )
        .forEach((element) => element.remove());
      this.renderedNodes = Array.from(template.content.childNodes);
      this.before(template.content);
      this.restoreVariables.push(bindNavigationVariables(userData.attributes));
      this.setAttribute('data-access-context-status', 'loaded');
    } catch {
      if (current()) {
        this.setAttribute('data-access-context-status', 'error');
        // No token or provider errors are exposed in event details or logs.
        this.dispatchEvent(new CustomEvent('navigation-access-error', { bubbles: true }));
      }
    }
  }

  constructor() {
    super();
  }

  async connectedCallback(): Promise<void> {
    // Recover a property assigned before the custom element was registered.
    if (Object.prototype.hasOwnProperty.call(this, 'getAccessToken')) {
      const provider = this.getAccessToken;
      delete this.getAccessToken;
      this.tokenProvider = provider;
    }
    const nav = this.closest('iam-nav');
    if (!nav) return;
    // Update the logo
    const mode = this.getAttribute('data-mode');
    const brand = nav.querySelector('.brand');
    if (brand) brand.className = 'brand brand--one';
    brand?.setAttribute('title', 'iamproperty One');
    brand?.setAttribute('aria-label', 'iamproperty One');

    brand?.setAttribute('href', `${getNavigationEnvironment(mode).hub}/dashboard`);

    const brandSvg = brand?.querySelector('svg');
    if (brandSvg)
      brandSvg.outerHTML = `<svg viewBox="0 0 205 130" preserveAspectRatio="xMinYMid meet">
        <title>iamproperty One</title>
        <defs xmlns="http://www.w3.org/2000/svg">
          <clipPath id="clippath">
            <path
              d="M44.36,16.04C21.42,16.04,2.81,34.65,2.81,57.59s18.6,41.55,41.55,41.55,41.55-18.6,41.55-41.55-18.6-41.55-41.55-41.55ZM60.28,73.51c-8.79,8.79-23.04,8.79-31.83,0-8.79-8.79-8.79-23.04,0-31.83,8.79-8.79,23.04-8.79,31.83,0,8.79,8.79,8.79,23.04,0,31.83Z"
            />
          </clipPath>
        </defs>

        <g style="clip-path: url(#clippath); display: var(--brand-light-mode-display, block);">
          <foreignObject class="logoBack" x="0" y="0" width="88" height="130">
            <div class="one-gradient" xmlns="http://www.w3.org/1999/xhtml"></div>
          </foreignObject>
        </g>

        <path d="M204.65,69.03c0,1.48-.11,2.85-.23,4.22-.23,1.82-1.37,2.62-3.08,2.62h-38.09c2.05,6.73,7.41,9.47,13.34,9.47,3.19,0,6.39-1.14,8.44-2.85,1.14-.91,2.05-1.48,3.54-1.48l10.95-.11c2.05,0,3.19,1.37,2.28,3.19-4.45,9.92-13.8,15.05-25.43,15.05-18.93,0-31.02-13.11-31.02-30.11s12.54-30.11,30.56-30.11c16.65,0,28.74,12.89,28.74,30.11ZM175.8,54.09c-6.39,0-10.83,2.97-12.66,8.78h24.52c-1.82-6.61-6.84-8.78-11.86-8.78Z" />

        <path d="M141.74,61.39v33.3c0,1.82-1.03,2.85-2.85,2.85h-11.4c-1.82,0-2.85-1.03-2.85-2.85v-31.82c0-5.7-3.31-8.21-7.64-8.21-5.13,0-8.32,2.85-8.32,9.58v30.45c0,1.82-1.03,2.85-2.85,2.85h-11.4c-1.82,0-2.85-1.03-2.85-2.85v-51.32c0-1.82,1.03-2.85,2.85-2.85h11.4c1.82,0,2.85,1.03,2.85,2.85v2.39c2.62-3.88,7.53-6.84,14.83-6.84,10.61,0,18.25,8.21,18.25,22.47Z"/>
      </svg>`;

    await this.refresh();
  }
}

export default iamSTDNav;
