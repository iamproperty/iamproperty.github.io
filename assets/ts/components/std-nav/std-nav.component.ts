import Cookies from '../../../../node_modules/js-cookie/dist/js.cookie.mjs';
import {populateNav,loadNavData,loadUserData,setEnabledLinks} from '../../modules/nav';
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

  defaultToNav = ():void => {

    const defaultContent = this.innerHTML;
    this.innerHTML = `<iam-nav ${(this.hasAttribute('class') ? `class="${this.getAttribute('class')}"`:'')}>
    ${defaultContent}
    </iam-nav>`;
  }

  transformToNav = (data):void => {

    const navElement = this.querySelector('iam-nav') ?? this;

    // Remove current links
    navElement.querySelectorAll(`:scope > *`).forEach((element) => {

      if(!element.hasAttribute('slot'))
        element.remove();
    });

    const defaultContent = navElement.innerHTML;

    navElement.innerHTML = `${defaultContent}${populateNav(data)}`;

    const customEvent = new CustomEvent('rebuilt');
    navElement.dispatchEvent(customEvent);
  }

  defaultToSecondary = (): void => {

    // Set links and details to secondary slot
    Array.from(this.querySelectorAll(':scope > a, :scope > details')).forEach((element) => {

      element.setAttribute('slot','secondary');
    });

    const defaultContent = this.innerHTML;
    this.outerHTML = `${defaultContent}`;
  }

  transformToSecondary = (data):void => {

    this.innerHTML = populateNav(data);

    // Set links and details to secondary slot
    Array.from(this.querySelectorAll(':scope > a, :scope > details')).forEach((element) => {

      element.setAttribute('slot','secondary');
    });

    const defaultContent = this.innerHTML;
    this.outerHTML = `${defaultContent}`;
  }

  async connectedCallback(): void {

    const component = this;
    this.wrapper = this.shadowRoot?.querySelector('.wrapper');

    if (!window.customElements.get(`iam-nav`))
        window.customElements.define(`iam-nav`, iamNav);

    if(this.hasAttribute('data-hub')){
      this.defaultToNav();

      this.querySelector('.nav--menu.js-show')?.classList.remove('js-show');
    }
    else {
      //this.defaultToSecondary(); TODO: change this to show default content but still be able to update
    }


    const data = await loadNavData(Cookies).then(
      (data) => {

        if(typeof data == 'string'){

          return data;
        }

        //console.log(data);
        if(this.hasAttribute('data-hub')){

          const filteredData = data.filter(section => section.attributes.title != "Learning and support");

          this.transformToNav(filteredData);
        }
        else {
          this.transformToSecondary(data);
        }

        return true;
      }
    );


    const userData = await loadUserData(Cookies).then(
      (data) => {

        setEnabledLinks(component,data);

        Array.from(document.querySelectorAll('[data-variable]')).forEach((element) => {

          if(data.attributes[element.getAttribute('data-variable')])
            element.innerHTML = data.attributes[element.getAttribute('data-variable')];
        });

        Array.from(document.querySelectorAll('[data-save-variable]')).forEach((element) => {

          //console.log(element);
          if(data.attributes[element.getAttribute('data-save-variable')])
            element.setAttribute('data-variable-value', data.attributes[element.getAttribute('data-save-variable')]);
        });

        return true;
      }
    );


  }

}

export default iamSTDNav;
