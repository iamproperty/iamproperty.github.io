// @ts-nocheck

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "nav"
});

class iamNav extends HTMLElement {

  constructor(){
    super();
    const shadowRoot = this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/nav.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style class="styles">
    @import "${coreCSS}";
    ${loadCSS}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous">
    <div class="container">
      <slot name="logo"></slot>
      <slot name="btn"></slot>
      <button class="btn-menu">Menu<i class="fa-regular fa-bars"></i><i class="fa-regular fa-xmark"></i></button>

      <div class="menu__outer">
        <div class="menu">
            
          <div class="menu__primary">
            <slot></slot>
          </div>
          <div class="dialog__wrapper d-none" id="search-wrapper"></div>
          <slot name="actions"></slot>
          <div class="menu__secondary">
            <div class="container">
            <slot name="secondary"></slot>
            </div>
          </div>
        </div>
      </div>      
    </div>
    <div class="lists"></div>
    <div class="backdrop" part="backdrop"></div>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    // Load external CSS if needed
    if(this.hasAttribute('data-css'))
      this.shadowRoot.querySelector('.styles').insertAdjacentHTML('beforeend', `@import "${this.getAttribute('data-css')}";`);
    
    const menuButton = this.shadowRoot.querySelector('.btn-menu');
    const menu = this.shadowRoot.querySelector('.menu');
    const iamNav = this;
    const container = this.shadowRoot.querySelector('.container');
    const backdrop = this.shadowRoot.querySelector('.backdrop');

    // Check the content 
    this.querySelectorAll(':scope > *').forEach(function(element){
      let tagname = element.tagName;

      switch(tagname){
        case "BUTTON":
          element.setAttribute('slot','actions');
          menu.classList.add('has-actions')
          break;
      }
    });
    
    // Has secondary link
    if(this.querySelector('a[slot="secondary"]')){
      menu.classList.add('has-secondary');
    }

    // Create a scroll width variable to help with the sizing of the menu with in the CSS
    document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.offsetWidth) + 'px');

    // Open and close the menu
    menuButton.addEventListener('click', function(e){
      
      e.preventDefault();
      menuButton.classList.toggle('selected');
      menu.classList.toggle('open');
      iamNav.classList.toggle('open');
    }, false);

    // Allow outside JS to close the menu
    this.addEventListener("request-close", (event) => {

      menuButton.classList.remove('selected');
      menu.classList.remove('open');
      iamNav.classList.remove('open');
    });

    // Close the menu on the click of the backdrop
    backdrop.addEventListener("click", (event) => {

      let openMenu = this.querySelector(':scope > details[open] summary');
      openMenu.click();
    });

    // On desktop close other menu's (details) when one is clicked
    this.addEventListener("click", (event) => {

      if (event && event.target instanceof HTMLElement && event.target.closest('summary')){

        if(window.innerWidth > 992){

          let summary = event.target.closest('summary');
          let details = summary.closest('details');
          let wrapper = details.parentNode;

          if(details.hasAttribute('open'))
            details.removeAttribute('open');
          else
            details.setAttribute('open','true');

          Array.from(wrapper.querySelectorAll(':scope > details')).forEach((detailsArrayElement, index) => {
            
            if(detailsArrayElement != details)
              detailsArrayElement.removeAttribute('open')
          });

          if(this.querySelectorAll(':scope > details[open]').length){
            backdrop.classList.add('show');
            iamNav.classList.add('open');
          }
          else {
            backdrop.classList.remove('show');
            iamNav.classList.remove('open');
          }

          event.preventDefault();
        }
      };
    });

    // Mega menu title
    this.querySelectorAll('details').forEach((detailsElement) => {

      let summary = detailsElement.querySelector('summary');
      let containerDiv = detailsElement.querySelector(':Scope > div');

      containerDiv.setAttribute('data-title', summary.textContent);
    });

    // Search 
    if(this.hasAttribute('data-search')){
      menu.classList.add('has-search');
      let searchWrapper = this.shadowRoot.querySelector('#search-wrapper');

      searchWrapper.classList.remove('d-none');
      searchWrapper.insertAdjacentHTML('afterbegin',`<button class="btn btn-secondary btn-compact fa-search me-0 mb-0" id="search-button">Open Search field</button>
      <dialog id="search-dialog">
      <div class="container">
        <form action="${this.hasAttribute('data-search') ? this.getAttribute('data-search') : ''}" class="row" id="search-form">
          <div class="col mb-0 ms-auto col-md-7">
            <label for="search" class="visually-hidden">Search</label>
            <button class="suffix me-0 mb-0"><i class="fa-regular fa-search"></i></button>
            <input type="search" class="" id="search" name="search" required="" autocomplete="off" data-list="${this.hasAttribute('data-list') ? this.getAttribute('data-list') : ''}" />
          </div>
          <div class="col d-none d-md-block mw-fit-content ms-3">
            <button class="btn btn-compact btn-secondary fa-xmark-large m-0 mb-0" type="button" id="search-close"></button>
          </div>
        </form>
      </div>
      </dialog>`);
      
      let searchButton = this.shadowRoot.querySelector('#search-button');
      let searchClose = this.shadowRoot.querySelector('#search-close');
      let searchDialog = this.shadowRoot.querySelector('#search-dialog');
      let searchInput = this.shadowRoot.querySelector('#search');
      let searchForm = this.shadowRoot.querySelector('#search-form');

      if(this.hasAttribute('data-search-open')){
        
        searchDialog.setAttribute('open','open');
        this.classList.add('search-open');
      }

      searchButton.addEventListener("click", (event) => {

        searchDialog.setAttribute('open','open');
        this.classList.add('search-open');
      });

      searchClose.addEventListener("click", (event) => {

        searchDialog.removeAttribute('open');
        this.classList.remove('search-open');
      });

      // Search events
      searchInput.addEventListener('keydown', (event) => {

        const keyupEvent = new CustomEvent("search-keydown", { detail: { search: searchInput.value } });
        this.dispatchEvent(keyupEvent);
      });

      searchInput.addEventListener('keyup', (event) => {

        if (searchInput.value.length >= 3 && searchInput.hasAttribute('data-list')) 
          searchInput.setAttribute("list", searchInput.getAttribute('data-list'));
        else
          searchInput.removeAttribute("list");

        const keyupEvent = new CustomEvent("search-keyup", { detail: { search: searchInput.value } });
        this.dispatchEvent(keyupEvent);
      });
  
      searchInput.addEventListener('change', (event) => {
  
        const changeEvent = new CustomEvent("search-change", { detail: { search: searchInput.value } });
        this.dispatchEvent(changeEvent);
      });

      searchForm.addEventListener('submit', (event) => {
        
        if(this.hasAttribute('data-prevent-search'))
          event.preventDefault();

        const submitEvent = new CustomEvent("search-submit", { detail: { search: searchInput.value } });
        this.dispatchEvent(submitEvent);
      });

      // Make sure any child lists are available to the search input
      this.querySelectorAll('datalist').forEach((list) => {

        iamNav.shadowRoot.querySelector('.lists').insertAdjacentElement('beforeend',list);
      });
    }
  }
}

export default iamNav;