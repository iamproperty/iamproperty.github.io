import { populateNav, loadNavData, loadUserData, setEnabledLinks } from '../../modules/nav';

class iamSTDNav extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback(): void {
    const nav = this.closest('iam-nav');
    const mode = this.hasAttribute('data-mode') ? this.getAttribute('data-mode') : 'dev';

    // if not an sso use load default from component

    if (
      !this.hasAttribute('data-sso-subject') ||
      this.getAttribute('data-sso-subject') == 'false' ||
      this.getAttribute('data-sso-subject') == false ||
      this.getAttribute('data-sso-subject') == null
    ) {
      if (this.hasAttribute('slot') && this.getAttribute('slot') == 'secondary') {
        this.outerHTML = `<a href="https://my.iamproperty.com" slot="secondary">iamproperty</a>
<a href="https://crm.iamproperty.com/MyDay" slot="secondary">CRM</a>
<a href="https://my.iamproperty.com/ic/dashboard" slot="secondary">movebutler</a>
<a href="https://my.iamproperty.com/auction" slot="secondary">iamsold</a>`;

        nav.querySelector(`a[href*='${window.location.hostname}'][slot="secondary"]`)?.classList.add('selected');

        /* For local environments */
        if (this.hasAttribute('data-product') && this.getAttribute('data-product') == 'movebutler')
          nav
            .querySelector(`a[href='https://my.iamproperty.com/ic/dashboard'][slot="secondary"]`)
            ?.classList.add('selected');

        if (this.hasAttribute('data-product') && this.getAttribute('data-product') == 'crm')
          nav.querySelector(`a[href='https://crm.iamproperty.com/MyDay'][slot="secondary"]`)?.classList.add('selected');

        if (this.hasAttribute('data-product') && this.getAttribute('data-product') == 'iamsold')
          nav
            .querySelector(`a[href='https://my.iamproperty.com/auction'][slot="secondary"]`)
            ?.classList.add('selected');
      }
      return;
    }

    // Update the logo
    nav.querySelector('.brand')?.className = 'brand brand--one';
    nav.querySelector('.brand svg')?.outerHTML = `<svg viewBox="0 0 205 130" preserveAspectRatio="xMinYMid meet">
        <title>iam property one</title>
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

    const data = await loadNavData(mode).then((data) => {
      if (typeof data == 'string') {
        return data;
      }

      if (!this.hasAttribute('slot')) {
        // This is the nav on the hub page

        const filteredData = data.filter((section) => section.attributes.title != 'Learning and support'); // Not needed for the hub page
        this.closest('iam-nav')
          .querySelectorAll(`:scope > *:not([slot]):not(iam-std-nav)`)
          .forEach((element) => {
            element.remove(); // Remove the default links
          });

        this.outerHTML = populateNav(filteredData);
      } else {
        this.closest('iam-nav')
          .querySelectorAll(`:scope > *[slot="secondary"]:not(iam-std-nav):not(iam-branch-selector)`)
          .forEach((element) => {
            element.remove(); // Remove the default links
          });

        this.outerHTML = populateNav(data, 'secondary');
      }

      return true;
    });

    if (!this.hasAttribute('data-sso-subject') && !this.hasAttribute('data-product')) return;

    const subject = this.getAttribute('data-sso-subject');
    const product = this.getAttribute('data-product');

    const userData = await loadUserData(mode, subject, product).then((data) => {
      if (!data.attributes) return false;

      setEnabledLinks(nav, data);

      Array.from(document.querySelectorAll('[data-variable]')).forEach((element) => {
        if (data.attributes[element.getAttribute('data-variable')])
          element.innerHTML = data.attributes[element.getAttribute('data-variable')];
      });

      Array.from(document.querySelectorAll('[data-save-variable]')).forEach((element) => {
        if (data.attributes[element.getAttribute('data-save-variable')])
          element.setAttribute('data-variable-value', data.attributes[element.getAttribute('data-save-variable')]);
      });

      return true;
    });
  }
}

export default iamSTDNav;
