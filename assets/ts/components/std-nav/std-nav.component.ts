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
    this.innerHTML = `<iam-nav>
    ${defaultContent}
    </iam-nav>`;
  }

  transformToNav = (data):void => {
    
    // Remove current links
    this.querySelector('iam-nav').querySelectorAll(`:scope > *`).forEach((element) => {

      if(!element.hasAttribute('slot'))
        element.remove();
    });

    const defaultContent = this.querySelector('iam-nav').innerHTML;

    this.innerHTML = `<iam-nav ${(this.hasAttribute('class') ? `class="${this.getAttribute('class')}"`:'')}>
    ${defaultContent}
    ${populateNav(data)}
    </iam-nav>`;
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
          this.transformToNav(data);
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
        return true;
      }
    );

  }

}

export default iamSTDNav;
