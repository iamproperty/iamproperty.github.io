import {populateNav,loadNavData,loadUserData,setEnabledLinks} from '../../modules/nav';
import Cookies from '../../../../node_modules/js-cookie/dist/js.cookie.mjs';

// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}

class iamSTDNavStandalone extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    

    const loadCSS = `@import "${assetLocation}/css/components/std-nav-standalone.component.css";`;
    
    const template = document.createElement('template');
    template.innerHTML = `
    <style id="styles">
    ${loadCSS}

    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="wrapper">
      <slot></slot>
    </div>
    <div class="backdrop" part="backdrop"></div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  defaultToStandalone = ():void => {
    const defaultContent = this.innerHTML;
    this.wrapper.innerHTML = `<div class="container">${defaultContent}</div>`;
  }

  transformToStandalone = (data):void => {

    this.wrapper.innerHTML = `<div class="container"><details><summary>Products</summary><div class="iam-nav">${populateNav(data)}</div></details></div>`;
  
    // Set links and details to secondary slot
    Array.from(this.wrapper.querySelectorAll('.iam-nav > a, .iam-nav > details')).forEach((element) => {

      element.setAttribute('slot','secondary');
    });

  }

  async connectedCallback(): void {
    
    const component = this;
    this.wrapper = this.shadowRoot?.querySelector('.wrapper');
    this.defaultToStandalone();
    
    const data = await loadNavData(Cookies).then(
      (data) => {
        if(typeof data == 'string'){
          
          return data;
        }

        this.transformToStandalone(data);

        return true;
      }
    );

    const userData = await loadUserData(Cookies).then(
      (data) => {

        setEnabledLinks(component,data);

        Array.from(document.querySelectorAll('[data-user-data]')).forEach((element) => {

          const dataVar = element.getAttribute('data-user-data');

          if(data.attributes[dataVar])
            element.innerHTML = data.attributes[dataVar];
        });

        return true;
      }
    );
  }
}

export default iamSTDNavStandalone;
