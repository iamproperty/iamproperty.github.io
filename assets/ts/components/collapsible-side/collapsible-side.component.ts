// @ts-nocheck
// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "collapsible side menu"
});

class iamCollapsibleSideMenu extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    
    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets'
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/collapsible-side.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style class="styles">
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous">
    <div class="container">

      <div class="side-menu">
        <button class="btn btn-compact fa-chevron-right btn-secondary btn-sm">Open or close Collapsible menu</button>
        <div class="side-menu-content closed">
          <slot name="menu"></slot>
        </div>
      </div>

      <div class="main-content">
        <slot></slot>
      </div>

    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    const sideMenu = this.shadowRoot.querySelector('.side-menu');
    const sideMenuContent = this.shadowRoot.querySelector('.side-menu-content');
    const mainContent = this.shadowRoot.querySelector('.main-content')
    const button = this.shadowRoot.querySelector('.side-menu > .btn');

    // Load external CSS if needed
    if(this.hasAttribute('data-css'))
      this.shadowRoot.querySelector('.styles').insertAdjacentHTML('beforeend', `@import "${this.getAttribute('data-css')}";`);

    // Set sde nav title
    if(!this.hasAttribute('data-title'))
      this.setAttribute('data-title','configuration')

    sideMenuContent.insertAdjacentHTML('afterbegin',`<span class="h3">${this.getAttribute('data-title')}</span>`);
    mainContent.insertAdjacentHTML('afterbegin',`<span class="h3">${this.getAttribute('data-title')}</span>`);
    

    if(this.querySelector(':scope > :is(h1,h2,h3,h4,h5,h6)')){
      this.querySelector(':scope > :is(h1,h2,h3,h4,h5,h6)').classList.add('h4');
      this.querySelector(':scope > :is(h1,h2,h3,h4,h5,h6)').classList.add('main-content__title');
    }
      
    // Open the menu
    button.addEventListener('click', (event) => {


      if(!sideMenu.classList.contains('open')){

        sideMenuContent.classList.remove('closed');

        setTimeout(function(){ 
          sideMenu.classList.add('open'); 
          button.setAttribute('aria-expanded', true);
        }, 100);


      }
      else {
          
        sideMenu.classList.remove('open');
        button.removeAttribute('aria-expanded');

        setTimeout(function(){ sideMenuContent.classList.add('closed') }, 1000); // Delay until its close so the animation is broken
      
        // While the menu is closing dont allow the hover to re-open it until its fully closed.
        sideMenu.classList.add('pe-none');
        setTimeout(function(){ sideMenu.classList.remove('pe-none')}, 1000);
      }
    });

    // Mimic hover event on desktop so that we can control when classes are set and which order
    sideMenu.addEventListener('mouseenter', (event) => {

      if(window.innerWidth > 992){

        if(!sideMenu.classList.contains('open'))
          sideMenuContent.classList.remove('closed');

        sideMenu.classList.add('hover');
        
      }
    });

    sideMenu.addEventListener('mousemove', (event) => {

      if(window.innerWidth > 992){

        if(!sideMenu.classList.contains('open'))
          sideMenuContent.classList.remove('closed');
      }
    });

    sideMenu.addEventListener('mouseleave', (event) => {

      if(window.innerWidth > 992){

        sideMenu.classList.remove('hover');

        if(!sideMenu.classList.contains('open'))
          setTimeout(function(){ sideMenuContent.classList.add('closed') }, 1000); // Delay until its close so the animation is broken
      }
    });



  }

}

export default iamCollapsibleSideMenu;