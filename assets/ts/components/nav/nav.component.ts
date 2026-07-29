import {
  navTemplate,
  branchSelector,
  menuEvents,
  megaMenuTitles,
  megaMenusEvents,
  accountMenuEvents,
  backdropEvents,
} from '../../modules/nav';

class iamNav extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const navCSS = `@import "${assetLocation}/css/components/nav.component.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/components/nav.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */ `
      <style class="styles">
        ${navCSS}
      </style>

      <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous" />
      ${navTemplate}
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('navGlobal'))
      document.head.insertAdjacentHTML('beforeend', `<style id="navGlobal">${loadExtraCSS}</style>`);
  }

  connectedCallback(): void {
    const backdrop = this.shadowRoot.querySelector('.backdrop');

    const menuButton = this.shadowRoot.querySelector('#btn-menu');
    const menu = this.shadowRoot.querySelector('.menu');
    const accountMenuButton = this.shadowRoot.querySelector('#btn-menu-account');
    const accountMenu = this.shadowRoot.querySelector('.nav--menu');
    const accountBtnTitle = this.shadowRoot?.querySelector('#account-btn-title');

    // #region Add Helper classes
    // Has secondary link
    if (this.querySelector('[slot="secondary"]')) {
      this.classList.add('has-secondary');
    }
    // #endregion

    accountBtnTitle.innerHTML = this.hasAttribute('data-account-btn-title')
      ? this.getAttribute('data-account-btn-title')
      : 'My account';

    if (!this.querySelector('[slot="account"]')) {
      accountMenuButton?.remove();
      accountMenu?.remove();
      accountBtnTitle?.remove();
    }

    // Allow outside JS to close the menu
    this.addEventListener('request-close', () => {
      menuButton.removeAttribute('aria-expanded');
      menu.classList.remove('open');
      this.classList.remove('open');
    });

    menuEvents(this, menu, menuButton, accountMenu, accountMenuButton);
    megaMenuTitles(this);
    megaMenusEvents(this, menu, menuButton, accountMenu, accountMenuButton, backdrop);
    accountMenuEvents(this, menu, menuButton, accountMenu, accountMenuButton, backdrop);
    backdropEvents(this, menu, menuButton, accountMenu, accountMenuButton, backdrop);
    branchSelector(this);

    // #region Search
    if (this.querySelector('[slot="search"]')) {
      menu.classList.add('has-search');
      const searchWrapper = this.shadowRoot.querySelector('#search-wrapper');

      searchWrapper.classList.remove('d-none');
      searchWrapper.insertAdjacentHTML(
        'afterbegin',
        `<button class="btn btn-secondary btn-compact fa-search me-0 mb-0" id="search-button" aria-controls="search-dialog">Open Search field</button>
      <dialog id="search-dialog">
      <div class="container">
        <div class="row">
          <div class="col mb-0 ms-auto col-md-7">
            <slot name="search"></slot>
          </div>
          <div class="col d-none d-md-block mw-fit-content ms-3">
            <button class="btn btn-compact btn-secondary fa-xmark-large m-0 mb-0" type="button" id="search-close">Close search field</button>
          </div>
        </div>
      </div>
      </dialog>`
      );

      const searchButton = this.shadowRoot.querySelector('#search-button');
      const searchClose = this.shadowRoot.querySelector('#search-close');
      const searchDialog = this.shadowRoot.querySelector('#search-dialog');

      if (this.hasAttribute('data-search-open')) {
        searchDialog.setAttribute('open', 'open');
        this.classList.add('search-open');

        searchButton.setAttribute('aria-expanded', true);
      }

      searchButton.addEventListener('click', () => {
        searchDialog.setAttribute('open', 'open');
        this.classList.add('search-open');

        searchButton.setAttribute('aria-expanded', true);
      });

      searchClose.addEventListener('click', () => {
        searchDialog.removeAttribute('open');
        this.classList.remove('search-open');

        searchButton.removeAttribute('aria-expanded');
      });
    }
    // #endregion
  }
}

export default iamNav;
