import { bindNavigationVariables } from '../../modules/navigation-variables';
import {
  populateNav,
  loadNavData,
  getNavigationEnvironment,
  setEnabledLinks,
  hideLinks,
  loadAuthenticatedUserData,
  NavigationTokenProvider,
  setInsightsLinks,
  loadInsightsData,
  insightsEvents,
  populateInsightsMenu,
  getEnvUrl
} from '../../modules/nav';

class iamSTDNav extends HTMLElement {
  private tokenProvider?: NavigationTokenProvider;
  private request?: AbortController;
  private generation = 0;
  private restoreVariables: Array<() => void> = [];

  constructor() {
    super();

    this.oSVG = `<defs xmlns="http://www.w3.org/2000/svg">
        <clipPath id="clippath">
          <path d="M44.36,16.04C21.42,16.04,2.81,34.65,2.81,57.59s18.6,41.55,41.55,41.55,41.55-18.6,41.55-41.55-18.6-41.55-41.55-41.55ZM60.28,73.51c-8.79,8.79-23.04,8.79-31.83,0-8.79-8.79-8.79-23.04,0-31.83,8.79-8.79,23.04-8.79,31.83,0,8.79,8.79,8.79,23.04,0,31.83Z"/>
        </clipPath>
      </defs>

      <g style="clip-path: url(#clippath); display: block">
        <foreignObject class="logoBack" x="0" y="0" width="88" height="130">
          <div class="one-gradient" xmlns="http://www.w3.org/1999/xhtml"></div>
        </foreignObject>
      </g>`;
    this.oneSVG = `${this.oSVG}
      <path xmlns="http://www.w3.org/2000/svg" d="M141.74,61.39v33.3c0,1.82-1.03,2.85-2.85,2.85h-11.4c-1.82,0-2.85-1.03-2.85-2.85v-31.82c0-5.7-3.31-8.21-7.64-8.21-5.13,0-8.32,2.85-8.32,9.58v30.45c0,1.82-1.03,2.85-2.85,2.85h-11.4c-1.82,0-2.85-1.03-2.85-2.85v-51.32c0-1.82,1.03-2.85,2.85-2.85h11.4c1.82,0,2.85,1.03,2.85,2.85v2.39c2.62-3.88,7.53-6.84,14.83-6.84,10.61,0,18.25,8.21,18.25,22.47Z"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M204.65,69.03c0,1.48-.11,2.85-.23,4.22-.23,1.82-1.37,2.62-3.08,2.62h-38.09c2.05,6.73,7.41,9.47,13.34,9.47,3.19,0,6.39-1.14,8.44-2.85,1.14-.91,2.05-1.48,3.54-1.48l10.95-.11c2.05,0,3.19,1.37,2.28,3.19-4.45,9.92-13.8,15.05-25.43,15.05-18.93,0-31.02-13.11-31.02-30.11s12.54-30.11,30.56-30.11c16.65,0,28.74,12.89,28.74,30.11ZM175.8,54.09c-6.39,0-10.83,2.97-12.66,8.78h24.52c-1.82-6.61-6.84-8.78-11.86-8.78Z"/>`;
    this.oneInsightsSVG = `${this.oSVG}${this.oneSVG}
      <path d="M236.15,94.27v-51.21c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v51.22c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85h0Z"/>
      <path d="M236.15,30.54v-10.24c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v10.24c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85Z"/>
      <path d="M311.42,61.04v33.24c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85v-31.76c0-5.69-3.28-8.2-7.58-8.2-5.09,0-8.26,2.85-8.26,9.56v30.39c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85v-51.22c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v2.39c2.6-3.87,7.47-6.83,14.72-6.83,10.53,0,18.11,8.2,18.11,22.42Z"/>
      <path d="M363.26,80.05c0,13.09-11.09,18.67-23.54,18.67-11.55,0-21.96-5.24-23.32-17.3-.23-1.94.9-2.96,2.72-2.96h11.09c1.7,0,2.27.91,3.06,2.39.9,1.94,3.06,3.07,6.45,3.07,4.75,0,6.57-1.59,6.57-3.87,0-8.2-29.55-.68-29.55-22.76,0-12.86,11.1-18.67,22.98-18.67,10.53,0,20.83,5.24,22.19,17.3.23,1.93-.9,2.96-2.72,2.96h-11.09c-1.7,0-2.27-.91-3.06-2.5-.79-1.82-2.72-2.96-5.32-2.96-4.19,0-6,1.59-6,3.87,0,8.42,29.54.57,29.54,22.76Z"/>
      <path d="M369.49,30.54v-10.24c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v10.24c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85Z"/>
      <path d="M369.49,94.27v-51.21c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v51.22c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85h0Z"/>
      <path d="M453.02,43.06v51.22c0,19.12-15.28,27.2-29.09,27.2s-26.83-6.6-28.53-20.26c-.11-1.93,1.02-2.96,2.83-2.96h11.43c1.7,0,2.49.91,3.06,2.5,1.25,3.41,4.98,5.69,11.21,5.69,7.58,0,12.57-4.1,12.57-12.18v-5.12c-3.74,4.44-9.4,7.28-17.32,7.28-14.83,0-27.05-13.09-27.05-28.91s12.23-28.91,27.05-28.91c7.92,0,13.58,2.85,17.32,7.28v-2.85c0-1.82,1.02-2.85,2.83-2.85h10.87c1.81,0,2.83,1.02,2.83,2.85ZM436.5,67.53c0-7.85-5.66-13.2-13.7-13.2s-13.7,5.35-13.7,13.2,5.66,13.2,13.7,13.2,13.7-5.35,13.7-13.2Z"/>
      <path d="M511.32,61.04v33.24c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85v-31.76c0-5.69-3.28-8.2-7.58-8.2-5.09,0-8.26,2.85-8.26,9.56v30.39c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85V20.29c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v25.16c2.6-3.87,7.47-6.83,14.72-6.83,10.53,0,18.11,8.2,18.11,22.42Z"/>
      <path d="M548.9,43.06v10.7c0,1.82-1.02,2.85-2.83,2.85h-6.23v37.68c0,1.82-1.02,2.85-2.83,2.85h-11.32c-1.81,0-2.83-1.02-2.83-2.85v-37.68h-6.23c-1.81,0-2.83-1.02-2.83-2.85v-10.7c0-1.82,1.02-2.85,2.83-2.85h6.23v-15.37c0-1.82,1.02-2.85,2.83-2.85h11.32c1.81,0,2.83,1.02,2.83,2.85v15.37h6.23c1.81,0,2.83,1.02,2.83,2.85Z"/>
      <path d="M597.12,80.05c0,13.09-11.09,18.67-23.55,18.67-11.55,0-21.96-5.24-23.32-17.3-.23-1.94.91-2.96,2.72-2.96h11.1c1.7,0,2.26.91,3.05,2.39.91,1.94,3.06,3.07,6.45,3.07,4.76,0,6.57-1.59,6.57-3.87,0-8.2-29.54-.68-29.54-22.76,0-12.86,11.09-18.67,22.98-18.67,10.53,0,20.83,5.24,22.19,17.3.23,1.93-.91,2.96-2.72,2.96h-11.09c-1.7,0-2.26-.91-3.05-2.5-.79-1.82-2.72-2.96-5.32-2.96-4.19,0-6,1.59-6,3.87,0,8.42,29.55.57,29.55,22.76Z"/>`;
    this.insightsMenuHTML = /* HTML */`<div class="nav--menu" id="insights-menu" part="insights--menu">
      <button id="insights-close" class="btn btn-secondary btn-compact btn-sm fa-xmark" >Close</button>
      <div class="text-center">
        <div class="brand brand--insights p-1">
          <svg viewBox="0 0 600 130" preserveAspectRatio="xMinYMid meet">
            <title>iamproperty insights</title>
            ${this.oneInsightsSVG}
          </svg>
        </div>
      </div>
      <p class="strapline pb-3">
        Turn everyday data into smarter decisions. Win more instructions, retain customers, improve performance and grow
        your business.
      </p>
    </div>`;
  }

  get getAccessToken(): NavigationTokenProvider | undefined {
    return this.tokenProvider;
  }
  set getAccessToken(provider: NavigationTokenProvider | undefined) {
    this.tokenProvider = provider;
    if (this.isConnected) void this.refresh();
  }

  // Call on sign-out/account switch, even when the provider function itself is unchanged.
  async refresh(): Promise<void> {
    this.disconnectedCallback();
    const generation = this.generation;
    const current = (): boolean => this.isConnected && generation === this.generation;
    if (!current()) return;

    const nav = this.closest('iam-nav');
    const isSecondary = this.hasAttribute('slot') && this.getAttribute('slot') === 'secondary';
    const mode = this.getAttribute('data-mode');


    // #region Insights menu
    if (isSecondary) {
      const insightsData = await loadInsightsData(mode);
      if (!current()) return;

      if (insightsData.dashboards){;

        nav.shadowRoot.querySelector('.container')?.insertAdjacentHTML('beforeend', this.insightsMenuHTML);

        const insightsMenu = nav.shadowRoot.querySelector('#insights-menu');
        populateInsightsMenu(insightsMenu, insightsData.dashboards);
        insightsEvents(nav);
      }
    }
    // #endregion

    // #region If the component is in mock mode, skip the token provider check and user data loading. We then need to load a mock of the navigation data.
    if (this.getAttribute('data-mode') === 'mock') {

      try {
        const response = await fetch('/access-context.json', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
        if (!current()) return;

        const json = await response.json();
        if (!current()) return;
        const data = json.data ? json.data : json;

        const mockedUserData = data;

        setEnabledLinks(nav, mockedUserData);
        hideLinks(nav, mockedUserData);
        setInsightsLinks(nav, mockedUserData);

        this.restoreVariables.push(bindNavigationVariables(mockedUserData.attributes));

      } catch (error) {
        if (error?.name === 'AbortError') {
          return true;
        }
        console.log(error);
        return 'There has been a problem. Please try again in a few moments.';
      }

      return;
    }
    // #endregion

    // #region Code to maintain the lifecyle
    this.hidden = true; // Keep a lifecycle anchor; links remain direct children of iam-nav.
    this.setAttribute('data-access-context-status', 'loading');
    this.request = new AbortController();
    // #endregion

    // #region Authentication and user data loading
    try {

      if (typeof this.tokenProvider !== 'function') throw new Error('Navigation token provider unavailable');
      // Load the authenticated user data using the token provider and the current mode.
      const userData = await loadAuthenticatedUserData(
        mode,
        this.getAttribute('data-product'),
        this.tokenProvider,
        this.request.signal
      );

      if (!current()) return;

      setEnabledLinks(nav, userData);
      hideLinks(nav, userData);
      setInsightsLinks(nav, userData);

      this.restoreVariables.push(bindNavigationVariables(userData.attributes));
      this.setAttribute('data-access-context-status', 'loaded');
    } catch {
      if (current()) {
        this.setAttribute('data-access-context-status', 'error');
        // No token or provider errors are exposed in event details or logs.
        this.dispatchEvent(new CustomEvent('navigation-access-error', { bubbles: true }));
      }
    }
    // #endregion
  }

  async connectedCallback(): Promise<void> {

    const nav = this.closest('iam-nav');
    if (!nav) return;

    const isSecondary = this.hasAttribute('slot') && this.getAttribute('slot') === 'secondary';
    const mode = this.getAttribute('data-mode');

    // #region Add in the non-sso standard links then stop further processing for non-sso mode
    if (this.hasAttribute('data-non-sso')) {

      if(!isSecondary) return;

      const template = document.createElement('template');
      template.innerHTML = `<a href="${getEnvUrl(mode, 'iap')}" slot="secondary">iamproperty</a>
                            <a href="${getEnvUrl(mode, 'crm')}/MyDay" slot="secondary">CRM</a>
                            <a href="${getEnvUrl(mode, 'iap')}/ic/dashboard" slot="secondary">movebutler</a>
                            <a href="${getEnvUrl(mode, 'iap')}/auction" slot="secondary">iamsold</a>`;

      this.before(template.content);

      nav.querySelector(`a[href*='${window.location.hostname}'][slot="secondary"]`)?.classList.add('selected');

      return;
    }
    // #endregion

    // #region Update the logo and home url
    const brand = nav.querySelector('.brand');
    if (brand) brand.className = 'brand brand--one';

    brand?.setAttribute('title', 'iamproperty One');
    brand?.setAttribute('aria-label', 'iamproperty One');
    brand?.setAttribute('href', `${getNavigationEnvironment(mode).hub}/dashboard`);

    const brandSvg = brand?.querySelector('svg');
    if (brandSvg)
      brandSvg.outerHTML = `<svg viewBox="0 0 205 130" preserveAspectRatio="xMinYMid meet">
        <title>iamproperty One</title>
        ${this.oneSVG}
      </svg>`;
    // #endregion

    // #region Load in the navigation content
    const schema = await loadNavData(mode);
    if (!Array.isArray(schema)) throw new Error('Navigation schema unavailable');

    // Remove existing navigation elements that are not the standard navigation or branch selector.
    const selector = isSecondary
      ? ':scope > [slot="secondary"]:not(iam-std-nav):not(iam-branch-selector):not(#insights-button)'
      : ':scope > :not([slot]):not(iam-std-nav)';

    nav.querySelectorAll(selector).forEach(
      (element) => element.remove()
    );

    const template = document.createElement('template');
    template.innerHTML = populateNav(
      isSecondary ? schema : schema.filter((section) => section.attributes.title !== 'Learning and support'),
      isSecondary ? 'secondary' : ''
    );
    this.before(template.content);
    // #endregion

    // #region Insights - the menu will be created in the refresh function, also the below link will be disabled and a new event listener will be added for it
    if (isSecondary) {

      nav.insertAdjacentHTML('beforeend',
        /* HTML */ `<a href="https://iamproperty.com/insights" target="_blank" slot="secondary" class="btn btn-action ms-2" id="insights-button">
          <svg viewBox="0 0 130 130" preserveAspectRatio="xMinYMid meet">
            <title>iam property insights</title>
            ${this.oSVG}
          </svg>
          Insights
        </a>`
      );
    }
    // #endregion

    // Recover a property assigned before the custom element was registered.
    if (Object.prototype.hasOwnProperty.call(this, 'getAccessToken')) {
      const provider = this.getAccessToken;
      delete this.getAccessToken;
      this.tokenProvider = provider;
    }
    await this.refresh();
  }

  disconnectedCallback(): void {
    this.generation++;
    this.request?.abort();
    this.restoreVariables.forEach((restore) => restore());
    this.restoreVariables = [];
  }
}

export default iamSTDNav;
