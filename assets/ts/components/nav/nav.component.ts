class iamNav extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/nav.component.css";`;
    //const loadExtraCSS = `@import "${assetLocation}/css/components/nav.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */`
    <style class="styles">
    ${loadCSS}
    </style>

    <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous">
    <div class="container">
      <slot name="logo"></slot>

      <div class="buttons-holder">
        <button class="btn-menu" part="btn-menu-account" id="btn-menu-account"><span class="btn btn-primary"><span id="account-btn-title"></span><i class="fa-user fa-solid"></i><i class="fa-regular fa-xmark-large"></i></span></button>
        <button class="btn-menu" part="btn-menu" id="btn-menu">Menu<i class="fa-regular fa-bars"></i><i class="fa-regular fa-xmark-large"></i></button>
      </div>

      <div class="menu__outer">
        <div class="menu closed">

          <div class="menu__primary">
            <slot></slot>
            <slot name="dual"></slot>
          </div>
          <div class="dialog__wrapper d-none" id="search-wrapper"></div>

          <slot name="actions"></slot>

          <div class="menu__secondary bg-light">
            <div class="container">

              <slot name="secondary"></slot>
            </div>
          </div>
        </div>
        <div class="nav--menu" data-btn-class="btn-compact" data-title="My account" data-icon="fa-user fa-solid" slot="menus">
          <slot name="account"></slot>
        </div>
      </div>
    </div>
    <div class="backdrop" part="backdrop"></div>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));

    // insert extra CSS
    if (!document.getElementById('navGlobal'))
      document.head.insertAdjacentHTML('beforeend', `<style id="navGlobal">${loadExtraCSS}</style>`);
  }

  connectedCallback(): void {

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const iamNav = this;
    const backdrop = this.shadowRoot.querySelector('.backdrop');
    const buttonsHolder = this.shadowRoot.querySelector('.buttons-holder');


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


    // #region Menu

     // Open and close the menu
    menuButton.addEventListener ('click', (e) => {
      e.preventDefault();

      menu.classList.toggle('open');
      accountMenu.classList.remove('open');


      if (menu.classList.contains('open')) {
        iamNav.classList.add('open');
      } else {
        iamNav.classList.remove('open');
      }

      accountMenuButton?.querySelector('.btn-primary').classList.remove('active');

      this.querySelector(':scope > details[open]')?.removeAttribute('open');

    }, false);

    // Allow outside JS to close the menu
    this.addEventListener('request-close', () => {
      menuButton.removeAttribute('aria-expanded');
      menu.classList.remove('open');
      iamNav.classList.remove('open');
    });

    // #endregion

    // #region Mega menus
    // Mega menu title
    this.querySelectorAll(':Scope > details:not([slot="account"])').forEach((detailsElement) => {
      const summary = detailsElement.querySelector('summary');
      const containerDiv = detailsElement.querySelector(':Scope > div');

      containerDiv.setAttribute('data-title', summary.textContent);
    });

    // On desktop close other menu's (details) when one is clicked
    this.addEventListener('click', (event) => {
      if (event && event.target instanceof HTMLElement && event.target.closest('summary')) {

        //event.preventDefault();
        console.log('hi')

        const summary = event.target.closest('summary');
        const details = summary.closest('details');


        if (window.innerWidth > 992 && !event.target.closest('.nav--menu')) {


          if (details?.hasAttribute('open')) { // Is open before the user clicks on the details summary

            backdrop.classList.remove('show');
            iamNav.classList.remove('open');
            iamNav.classList.remove('open-secondary');
          } else {
            backdrop.classList.add('show');
            iamNav.classList.add('open');

            if(details?.hasAttribute('slot') && details?.getAttribute('slot') == "secondary")
              iamNav.classList.add('open-secondary');
          }

          menu.classList.remove('open');
          accountMenu.classList.remove('open');
          accountMenuButton?.querySelector('.btn-primary').classList.remove('active');
        }
      }
    });
    // #endregion

    // #region Account menu

    if(!this.querySelector('[slot="account"]')){
      accountMenuButton?.remove();
      accountMenu?.remove();
      accountBtnTitle?.remove();

    }



    // Add menu button title
    if(this.hasAttribute('data-account-btn-title'))
      accountBtnTitle?.innerHTML = this.getAttribute('data-account-btn-title');

    accountMenuButton.addEventListener ('click', () => {

      // Close the main menu
      menu.classList.remove('open');
      accountMenu.classList.toggle('open');

      if (accountMenu.classList.contains('open')) {
        iamNav.classList.add('open');
        accountMenuButton?.querySelector('.btn-primary').classList.add('active');
      } else {
        iamNav.classList.remove('open');
        accountMenuButton?.querySelector('.btn-primary').classList.remove('active');
      }

      this.querySelector(':scope > details[open]')?.removeAttribute('open');
    });

    // #endregion


    // Allow outside JS to close the menu
    this.addEventListener('request-close', () => {
      menu.classList.remove('open');
      iamNav.classList.remove('open');
      accountMenu.classList.remove('open');
    });

    // Close the menu on the click of the backdrop on desktop
    backdrop.addEventListener('click', () => {
      const openMenu = this.querySelector(':scope > details[open]');

      if (openMenu) openMenu.removeAttribute('open');

      iamNav.classList.remove('open');
      menu.classList.remove('open');
      accountMenu.classList.remove('open');
      accountMenuButton?.querySelector('.btn-primary').classList.remove('active');

      backdrop.classList.remove('show');
    });



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

    // #region Branch selecto update of slot
    const branchSelector = this.querySelector("iam-branch-selector");
    const mql = window.matchMedia("(width > 62em)");

    if (mql.matches)
      branchSelector?.setAttribute('slot','secondary');

    mql.addEventListener("change", (e) => {

      if (e.matches && this.classList.contains('has-secondary'))
        branchSelector?.setAttribute('slot','secondary');
      else
        branchSelector?.setAttribute('slot','account');
    });
    // #endregion
  }
}


export default iamNav;
