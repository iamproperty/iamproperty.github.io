import Cookies from '../../../../node_modules/js-cookie/dist/js.cookie.mjs';
import iamNav from '../nav/nav.component';

// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}


class iamSTDNav extends HTMLElement {
  constructor() {
    super();
  }

  loadNavData = async(): any => {

    const ajaxURL = '/nav.json';

    // Setup controller vars if not already set
    if (!window.controller) window.controller = [];

    // Abort if controller already present for this url
    if (window.controller[ajaxURL]) window.controller[ajaxURL].abort();

    // Create a new controller so it can be aborted if new fetch made
    window.controller[ajaxURL] = new AbortController();
    const { signal } = window.controller[ajaxURL];

    try {
      return await fetch(ajaxURL, {
        signal: signal,
        method: 'get',
        credentials: 'same-origin',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
        }),
      })
      .then((response) => response.json())
      .then((response) => {
        // populate datalist
        let listString = '';

        const data = response['data'] ? response['data'] : response;


        return data;
      });
    } catch (error) {
      if (error?.name === 'AbortError') {
        return true;
      }
      console.log(error);
      return 'There has been a problem. Please try again in a few moments.';
    }
  }

  defaultToSecondary = (): void => {

    // Set links and details to secondary slot
    Array.from(this.querySelectorAll(':scope > a, :scope > details')).forEach((element) => {

      element.setAttribute('slot','secondary');
    });

    const defaultContent = this.innerHTML;
    this.outerHTML = `${defaultContent}`;
  }

  defaultToNav = ():void => {

    const defaultContent = this.innerHTML;
    this.innerHTML = `<iam-nav>
    ${defaultContent} 
    </iam-nav>`;
  }

  defaultToStandalone = ():void => {
    const defaultContent = this.innerHTML;
    this.wrapper.innerHTML = `<div class="container">${defaultContent}</div>`;
  }

  populateLinks = (data):void => {

    let html = ``;

    data.forEach((link) => {

    html += `
      <a href="${link.url}">${link.title}</a>`;

    });

    return html;
  }

  populateSections = (data):void => {

    let html = ``;

    data.forEach((section) => {

      html += `<span class="section ${section.class}">
        <span class="lead text-heading d-block">${section.enabled == "false" && section.marketing ? section.marketing : section.title}</span>
        ${this.populateLinks(section.links)}
      </span>`;
    });




    return html;
  }

  populateNav = (data):void => {

    let html = ``;

    data.forEach((feature) => {

      if(feature.attributes.sections)
        html += `<details name="megamenu"><summary>${feature.attributes.title}</summary><div data-title="${feature.attributes.title}">${this.populateSections(feature.attributes.sections)}</div></details>`;
      else if(feature.attributes.links)
        html += `<details name="megamenu"><summary>${feature.attributes.title}</summary><div data-title="${feature.attributes.title}">${this.populateLinks(feature.attributes.links)}</div></details>`;
      else 
        html += `<a href="/">${feature.attributes.title}</a>`;
    });

    return html;
  }

  transformToSecondary = (data):void => {

    this.innerHTML = this.populateNav(data);

    // Set links and details to secondary slot
    Array.from(this.querySelectorAll(':scope > a, :scope > details')).forEach((element) => {

      element.setAttribute('slot','secondary');
    });

    const defaultContent = this.innerHTML;
    this.outerHTML = `${defaultContent}`;
  }

  transformToStandalone = (data):void => {

    this.wrapper.innerHTML = `<div class="container"><details><summary>Products</summary><div class="iam-nav">${this.populateNav(data)}</div></details></div>`;
  
    // Set links and details to secondary slot
    Array.from(this.wrapper.querySelectorAll('.iam-nav > a, .iam-nav > details')).forEach((element) => {

      element.setAttribute('slot','secondary');
    });

  }

  transformToNav = (data):void => {
    this.innerHTML = `<iam-nav>
    <a href="/" class="brand brand--property" slot="logo">
      <svg>
        <title>iam key</title>
        <use xlink:href="/svg/logo.svg#logo-property"></use>
      </svg>
    </a>
    ${this.populateNav(data)}
    </iam-nav>`;
  }

  async connectedCallback(): void {
    
    this.wrapper = this.shadowRoot?.querySelector('.wrapper');

    if (!window.customElements.get(`iam-nav`))
        window.customElements.define(`iam-nav`, iamNav);


    if(this.hasAttribute('data-hub')){
      this.defaultToNav();
    }
    else if (!this.closest('iam-nav')){
      this.defaultToStandalone();
    }
    else {
      //this.defaultToSecondary(); TODO: change this to show default content but still be able to update
    }

    const data = await this.loadNavData().then(
      (data) => {
        if(typeof data == 'string'){
          
          return data;
        }

        //console.log(data);
        if(this.hasAttribute('data-hub')){
          this.transformToNav(data);
        }
        else if(!this.closest('iam-nav')){
          this.transformToStandalone(data);
        }
        else {
          this.transformToSecondary(data);
          //this.transformToNav(data);
        }

        return true;
      }
    );

  }

  static get observedAttributes(): any {
    return [];
  }

  attributeChangedCallback(attrName, oldVal, newVal): void {
    const addressComponent = this.querySelector('iam-address-lookup');

    switch (attrName) {
      case 'data-url': {
        if (oldVal != newVal && addressComponent) {
          addressComponent.setAttribute('data-url', newVal + '?search_string=');
        }
        break;
      }
    }
  }
}

export default iamSTDNav;
