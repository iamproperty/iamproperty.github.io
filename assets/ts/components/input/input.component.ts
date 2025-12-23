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
      <slot part="input-wrapper"></slot>
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


    const setCurrencyRules = () => {
      
      input.setAttribute('type','text');
      input?.setAttribute('data-value',input.value);
      input.value = new Intl.NumberFormat("en-GB", { 
        style: "currency", 
        currency: "GBP",
        minimumFractionDigits: Number.isInteger(input.value) ? 0 : 2,
        maximumFractionDigits: Number.isInteger(input.value) ? 0 : 2,
        trailingZeroDisplay: 'stripIfInteger' // Strip zeros if it's an integer
      }).format(input.value).replace("£", "");
    }


    // Currency type
    if(component?.hasAttribute('data-currency')) {

      // Pre set the icons
      switch (component?.hasAttribute('data-currency')) {
        case "dollar":
          component.setAttribute('data-prefix-icon','dollar-sign') ;
          break;
        case "euro":
          component.setAttribute('data-prefix-icon','euro-sign') ;
          break;
        default:
          component.setAttribute('data-prefix-icon','sterling-sign') ;
          break;
      }

      setCurrencyRules();


      input?.addEventListener('focus',(event) => {

        input.setAttribute('type', 'number')

        input.value = input.getAttribute('data-value');
        input.setAttribute('value', input.getAttribute('data-value'));
      });

      input?.addEventListener('input',(event) => {

        input?.setAttribute('data-value',input.value);
      });

      input?.addEventListener('blur',(event) => {

        setCurrencyRules();
      });
    }



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
    
    // Duplicate input watches
    if(component.hasAttribute('data-duplicate')){

      const id = component.getAttribute('data-duplicate');
      const watchedInputs = document.querySelectorAll(`[name="${id}"], [id="${id}"]`);

      input.addEventListener('change', (event) => {
        
        if(input.closest('iam-modal'))
          return false;

        if(input?.matches('[type="checkbox"]') && watchedInput?.matches('[type="checkbox"]')){
          watchedInput.checked = event.target.checked;

          if(!event.detail && !event.detail?.triggered){
            const changeEvent = new CustomEvent('change', { detail: {triggered: true} });
            watchedInput?.dispatchEvent(changeEvent);
          }
        }
      });

      Array.from(watchedInputs).forEach((watchedInput) => {

        watchedInput?.addEventListener('change', (event) => {

          // If both the duplicate input and the watched input are checkboxes
          if(input?.matches('[type="checkbox"]') && watchedInput?.matches('[type="checkbox"]')){
            input.checked = event.target.checked;

            if(!event.detail && !event.detail?.triggered){
              const changeEvent = new CustomEvent('change', { detail: {triggered: true} });
              input?.dispatchEvent(changeEvent);
            }
          }

          // if input is not a checkbox BUT the watched input is
          // Then we need to create the input's value
          if(!input?.matches('[type="checkbox"]') && watchedInput?.matches('[type="checkbox"]')){
            
            let computedValue = '';
            Array.from(document.querySelectorAll(`[name="${id}"]:checked`)).forEach((loopInput) => {

              computedValue += (computedValue == '' ? '' : ',') + loopInput.value;
            });
            input.value = computedValue;

            if(!event.detail && !event.detail?.triggered){
              const changeEvent = new CustomEvent('change', { detail: {triggered: true} });
              input?.dispatchEvent(changeEvent);
            }
          }
        });
      });
    }
  }
}

export default iamInput;
