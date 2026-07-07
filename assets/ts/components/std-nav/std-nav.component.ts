import {populateNav,loadNavData,loadUserData,setEnabledLinks} from '../../modules/nav';

class iamSTDNav extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback(): void {


    const nav = this.closest('iam-nav');
    const mode = this.hasAttribute('data-mode') ? this.getAttribute('data-mode') : 'dev';

    // if not an sso use load default from component

    if(!this.hasAttribute('data-sso-subject') || this.getAttribute('data-sso-subject') == 'false' || this.getAttribute('data-sso-subject') == false || this.getAttribute('data-sso-subject') == null){

      if(this.hasAttribute('slot') && this.getAttribute('slot') == "secondary"){

        this.outerHTML = `<a href="https://my.iamproperty.com" slot="secondary">iamproperty</a>
<a href="https://crm.iamproperty.com/MyDay" slot="secondary">CRM</a>
<a href="https://my.iamproperty.com/ic/dashboard" slot="secondary">movebutler</a>
<a href="https://my.iamproperty.com/auction" slot="secondary">iamsold</a>`;

        nav.querySelector(`a[href*='${window.location.hostname}'][slot="secondary"]`)?.classList.add('selected');

        /* For local environments */
        if(this.hasAttribute('data-product') && this.getAttribute('data-product') == "movebutler")
          nav.querySelector(`a[href='https://my.iamproperty.com/ic/dashboard'][slot="secondary"]`)?.classList.add('selected');

        if(this.hasAttribute('data-product') && this.getAttribute('data-product') == "crm")
          nav.querySelector(`a[href='https://crm.iamproperty.com/MyDay'][slot="secondary"]`)?.classList.add('selected');

        if(this.hasAttribute('data-product') && this.getAttribute('data-product') == "iamsold")
          nav.querySelector(`a[href='https://my.iamproperty.com/auction'][slot="secondary"]`)?.classList.add('selected');

      }
      return;
    }

    const data = await loadNavData(mode).then(

      (data) => {

        if(typeof data == 'string'){

          return data;
        }

        if(!this.hasAttribute('slot')){ // This is the nav on the hub page

          const filteredData = data.filter(section => section.attributes.title != "Learning and support"); // Not needed for the hub page
          this.closest('iam-nav').querySelectorAll(`:scope > *:not([slot]):not(iam-std-nav)`).forEach((element) => {
            element.remove(); // Remove the default links
          });

          this.outerHTML = populateNav(filteredData);
        }
        else {

          this.closest('iam-nav').querySelectorAll(`:scope > *[slot="secondary"]:not(iam-std-nav):not(iam-branch-selector)`).forEach((element) => {
            element.remove(); // Remove the default links
          });

          this.outerHTML = populateNav(data, 'secondary');
        }

        return true;
      }
    );

    if(!this.hasAttribute('data-sso-subject') && !this.hasAttribute('data-product'))
      return;

    const subject = this.getAttribute('data-sso-subject');
    const product = this.getAttribute('data-product');

    const userData = await loadUserData(mode, subject, product).then(
      (data) => {

        if(!data.attributes)
          return false;

        setEnabledLinks(nav,data);

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
