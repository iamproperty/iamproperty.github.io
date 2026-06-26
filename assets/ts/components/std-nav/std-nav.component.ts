import Cookies from '../../../../node_modules/js-cookie/dist/js.cookie.mjs';
import {populateNav,loadNavData,loadUserData,setEnabledLinks} from '../../modules/nav';
//import iamNav from '../nav/nav.component';

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

    const data = await loadNavData(Cookies).then(
      (data) => {

        if(typeof data == 'string'){

          return data;
        }

        //console.log(data);
        if(!this.hasAttribute('slot')){

          const filteredData = data.filter(section => section.attributes.title != "Learning and support");


          this.closest('iam-nav').querySelectorAll(`:scope > *:not([slot]):not(iam-std-nav)`).forEach((element) => {

            element.remove();
          });

          this.outerHTML = populateNav(filteredData);
        }
        else {

          this.outerHTML = populateNav(data, 'secondary');

        }

        return true;
      }
    );

    const userData = await loadUserData(Cookies).then(
      (data) => {

        setEnabledLinks(this,data);

        Array.from(document.querySelectorAll('[data-variable]')).forEach((element) => {

          if(data.attributes[element.getAttribute('data-variable')])
            element.innerHTML = data.attributes[element.getAttribute('data-variable')];
        });

        Array.from(document.querySelectorAll('[data-save-variable]')).forEach((element) => {

          if(data.attributes[element.getAttribute('data-save-variable')])
            element.setAttribute('data-variable-value', data.attributes[element.getAttribute('data-save-variable')]);
        });

        return true;
      }
    );

  }

}

export default iamSTDNav;
