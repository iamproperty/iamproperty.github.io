import { trackComponent, trackComponentRegistered } from '../_global';

trackComponentRegistered('iam-iamPrefix');
class iamInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/input.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous">
    <div class="wrapper" part="wrapper">
      <span part="prefix"><slot name="prefix"></slot></span>
      <slot></slot>
      <slot part="suffix"><slot name="suffix"></slot></slot>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    
    const component = this;
    const input = this.querySelector('input');
    const inputType = input?.hasAttribute('type') ? input?.getAttribute('type') : 'text';
    const prefixIcon = this.shadowRoot?.querySelector('[part="prefix"]');
    const suffixIcon = this.shadowRoot?.querySelector('[part="suffix"]');

    
    if(this.closest('label'))
      this.classList.add('mb-0');


    const setIcon = (inputType) => {
        
      // Pre set the icons
      switch (inputType) {
        case "date":
        case "datetime-local":
        case "year":
        case "month":
        case "week":
          this.setAttribute('data-suffix-icon','calendar') ;
          suffixIcon?.setAttribute('role','button');
          break;
        case "time":
          this.setAttribute('data-suffix-icon','clock') ;
          suffixIcon?.setAttribute('role','button');
          break;
        default:
          this.removeAttribute('data-suffix-icon') ;
          suffixIcon?.removeAttribute('role');
          break;
      }
    }
    setIcon(inputType);

    // Colour input field
    if(input?.matches('[type="color"]')){
      this.insertAdjacentHTML('beforeend', `<output></output>`);

      input.addEventListener('input', () => {

        input.nextElementSibling.value = input.value;
      });
    }


    if(this.hasAttribute('data-prefix-icon')){
      prefixIcon?.className = `prefix fa-${this.hasAttribute('data-prefix-weight') ? this.getAttribute('data-prefix-weight') : 'regular'} fa-${this.getAttribute('data-prefix-icon')}`;
      this.querySelector('input')?.classList.add('has-prefix');
    }
    if(this.hasAttribute('data-suffix-icon')){
      suffixIcon?.className = `suffix fa-${this.hasAttribute('data-suffix-weight') ? this.getAttribute('data-suffix-weight') : 'regular'} fa-${this.getAttribute('data-suffix-icon')}`;
      this.querySelector('input')?.classList.add('has-suffix');
    }

    if(this.shadowRoot.querySelector('[name="prefix"]')?.assignedElements().length){
      this.shadowRoot.querySelector('[name="prefix"]')?.classList.add('prefix');
      this.querySelector('input')?.classList.add('has-prefix');
    }

    if(this.shadowRoot.querySelector('[name="suffix"]')?.assignedElements().length){
      this.shadowRoot.querySelector('[name="suffix"]')?.classList.add('suffix');
      this.querySelector('input')?.classList.add('has-suffix');
    }


    // Change type

    if(this.querySelector('[data-change-type]')){
      const select = this.querySelector('[data-change-type]');

      select.addEventListener('change', () => {
        
        input.setAttribute('type', select.value);

        setIcon(select.value);
        if(this.getAttribute('data-suffix-icon')){
            
          suffixIcon?.className = `suffix fa-${this.hasAttribute('data-suffix-weight') ? this.getAttribute('data-suffix-weight') : 'regular'} fa-${this.getAttribute('data-suffix-icon')}`;
          input?.classList.add('has-suffix');
        }
        else {
          suffixIcon?.removeAttribute('class');
          input?.classList.remove('has-suffix');
        }
      });
    }
    

    
    // #region Date restrictions
      const today = new Date();

      function formatDate(date, type = "date"): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        if(type == "datetime-local")
          return `${year}-${month}-${day}T00:00:00`;

        return `${year}-${month}-${day}`;
      }

      const checkDayAllowed = (input,allowedDays) => {

        const day = new Date(input.value).getUTCDay();

        if (allowedDays.includes(day)) input.setCustomValidity('');
        else input.setCustomValidity('That day of the week is not allowed');
      }

      if(input?.matches('[type="date"], [type="datetime-local"]') && this.hasAttribute('data-allowed-days')){
        const allowedDays = JSON.parse(`[${this.getAttribute('data-allowed-days')}]`);
        
        checkDayAllowed(input,allowedDays);
        input.addEventListener('input', () => { checkDayAllowed(input,allowedDays); });
      }
    // #endregion

    suffixIcon.addEventListener('click', function () {
      
      if(!component?.querySelector('select[data-change-type][slot="suffix"]'))
        input.showPicker();
    });
    
    prefixIcon.addEventListener('click', function () {
      
      if(!component?.querySelector('select[data-change-type][slot="prefix"]'))
        input.showPicker();
    });
    

  }
}

export default iamInput;
