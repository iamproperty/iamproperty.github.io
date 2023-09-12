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
    this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/nav.css";`;

    console.log(this.hasAttribute('data-css'))
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
            <slot name="actions"></slot>
          </div>

          <div class="menu__secondary">
            <div class="container">
            <slot name="secondary"></slot>
            </div>
          </div>
        </div>
      </div>      
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    // Load external CSS if needed
    if(this.hasAttribute('data-css'))
      this.shadowRoot.querySelector('.styles').insertAdjacentHTML('beforeend', `@import "${this.getAttribute('data-css')}";`);
    
    const menuButton = this.shadowRoot.querySelector('.btn-menu');
    const menu = this.shadowRoot.querySelector('.menu');
    const iamNav = this;
    const container = this.shadowRoot.querySelector('.container');

    // Create a scroll wdith variable to help with the sizing of the menu with in the CSS
    document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.offsetWidth) + 'px');

    // Open and close the menu
    menuButton.addEventListener('click', function(e){
      
      e.preventDefault();
      menuButton.classList.toggle('current');
      menu.classList.toggle('open');
      iamNav.classList.toggle('open');
      
    }, false);

    // Allow outside JS to close the menu
    this.addEventListener("request-close", (event) => {

      menuButton.classList.remove('current');
      menu.classList.remove('open');
      iamNav.classList.remove('open');
    });

    // Has secondary link
    if(this.querySelector('a[slot="secondary"]')){
      container.classList.add('has-secondary');
    }
  }
}

export default iamNav;