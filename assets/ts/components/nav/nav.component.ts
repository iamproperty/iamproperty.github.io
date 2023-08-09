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
    const loadCSS = `@import "${assetLocation}/css/components/nav.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    

    <slot name="logo"></slot>
    <slot name="btn"></slot>

    <div class="menu">
      <div class="menu--top">
        <slot name="logo2"></slot>
        <a href="#menu" class="btn-close" slot="btn">Menu</a>
      </div>
      <hr/>
      <slot></slot>
      <slot name="secondary"></slot>
      <slot name="actions"></slot>
    </div>
    <div class="backdrop"></div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {
    
    
    const menuButton = this.querySelector('.btn-menu');
    const logo = this.querySelector('.brand');
    const logo2 = logo.cloneNode(true);
    logo2.setAttribute('slot','logo2');

    const menu = this.shadowRoot.querySelector('.menu');
    const closeButton = this.shadowRoot.querySelector('.btn-close');

    document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.offsetWidth) + 'px');

    this.append(logo2);

    menuButton.addEventListener('click', function(e){
      
      e.preventDefault();

      menu.classList.add('open');
      
    }, false);


    closeButton.addEventListener('click', function(e){
      
      e.preventDefault();

      menu.classList.remove('open');
      
    }, false);


  }


}

export default iamNav;