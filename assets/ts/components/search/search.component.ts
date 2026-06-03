import Cookies from '../../../../node_modules/js-cookie/dist/js.cookie.mjs';
import { safeID, resolvePath, isTraversable } from '../../modules/helpers';
import search, { filterDatalist, datalistSelectOption } from '../../modules/search';

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'Search',
});

class iamSearch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/search.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */ `
    <style>
    ${loadCSS}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous" />
    <span class="wrapper">
      <span class="input__wrapper">
        <slot></slot>
        <button class="clear-search btn btn-action" type="button"><i class="fa-light fa-times me-0"></i></button>
      </span>
      <button class="suffix ${this.getAttribute('data-icon') || 'fa-regular fa-search'}"></button>
    </span>
    <slot name="datalist"></slot>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback(): void {

    let datalistElement = this.querySelector('datalist') as HTMLDataListElement | null; 
    const inputElement = this.querySelector('input') as HTMLInputElement | null; 
    const suffixElement = this.shadowRoot.querySelector('.suffix') as HTMLElement | null;
    const clearBtn = this.shadowRoot.querySelector('.clear-search');

    let minLength = this.hasAttribute('data-min-length') ? parseInt(this.getAttribute('data-min-length')) : 1;

    if (this.hasAttribute('data-url') && !this.hasAttribute('data-min-length')) {

      minLength = 3;
    }

    if(!inputElement || !suffixElement) return;

    // #region maintain the original placeholder value in a data attribute to allow for it to be reset when the field is emptied
    if(inputElement.hasAttribute('placeholder'))
      this.setAttribute('data-original-placeholder', inputElement.getAttribute('placeholder'));
    // #endregion


    // #region transform datalist into dropdown
    
    // Turn off the browser's default datalist functionality to allow for a custom implementation
    inputElement.setAttribute('autocomplete', 'off');
    inputElement.setAttribute('aria-autocomplete', 'none');

    if(inputElement && inputElement.hasAttribute('list')){
      
      inputElement.setAttribute('data-list', inputElement.getAttribute('list'));
      inputElement.setAttribute('list', '');
    }
      
    if (!datalistElement) {
      datalistElement = document.createElement('datalist');
      const listID = `${inputElement?.getAttribute('name')}-list`;
      datalistElement.setAttribute('id', listID);
      inputElement?.setAttribute('data-list', listID);
      this.appendChild(datalistElement);
    }
    datalistElement.setAttribute('slot', 'datalist');

    datalistElement.querySelectorAll('option').forEach((option) => {

      option.setAttribute('tabindex', '0');

      if(option.textContent == '' && option.hasAttribute('value')){
        option.textContent = option.getAttribute('value');
      }

    });

    datalistElement.addEventListener('click', (event) => {
      if (event && event.target instanceof HTMLElement && event.target.closest('option')) {
      
        event.stopPropagation();
        event.preventDefault();

        document.activeElement?.blur();
        this.classList.remove('js-show-datalist');
        datalistSelectOption(this, inputElement, event.target.closest('option'));
      }
    });
    // #endregion 

    // #region control input field 
    inputElement.addEventListener('input', () => {

      if(inputElement.value.length >= 1){
        this.classList.add('has-value');
      }
      else{
        this.classList.remove('has-value');
      }

      if(inputElement.value.length >= minLength){
        //inputElement.removeAttribute('data-value');
        this.classList.add('js-show-datalist');


        if(this.hasAttribute('data-url')){
          search(this, datalistElement, inputElement.value)
        }
        else {
          filterDatalist(datalistElement, inputElement.value);
        }
      }
      else {
        this.classList.remove('js-show-datalist');
      }

    });
    inputElement.addEventListener('focus', () => {

      if(inputElement.value == inputElement.getAttribute('data-value')){

        inputElement.value = '';
        inputElement.setAttribute('placeholder', inputElement.getAttribute('data-value'));
        this.classList.remove('js-show-datalist');
      }
      else if(inputElement.value.length >= minLength){
        this.classList.add('js-show-datalist');
      }
    });

    inputElement.addEventListener('blur', () => {

      if(!inputElement.value && inputElement.getAttribute('data-value')){

        inputElement.value = inputElement.getAttribute('data-value');
        //inputElement.setAttribute('placeholder', inputElement.getAttribute('data-value'));
        //this.classList.remove('js-show-datalist');
      }
      // Set timeout to allow click event to fire on options before hiding the list again
      
      setTimeout(() => {
        this.classList.remove('js-force-show-datalist');
        this.classList.remove('js-show-datalist');
      }, 200);

      if(inputElement.hasAttribute('data-placeholder'))
        inputElement.setAttribute('placeholder',inputElement.getAttribute('data-placeholder'));
    });

    // #endregion

    // #region control suffix button 
    suffixElement.addEventListener('click', () => {

      if(this.closest('form') && !this.hasAttribute('data-prevent-submit')){

        this.closest('form')?.requestSubmit();
      }
      else {
        inputElement.focus();
        this.classList.add('js-force-show-datalist');
      }
    });
    // #endregion

    // #region keyboard navigation

    this.addEventListener('keydown', (event) => {

      console.log(event.target);

      switch (event.keyCode) {

        case 40: // down
          //event.stopPropagation();
          //event.preventDefault();

          if(event && event.target instanceof HTMLElement && event.target == inputElement){
            this.querySelector('datalist option:not(.js-hide)')?.focus();
          }

          break;

      }
        
      /*
      if (event && event.target instanceof HTMLElement && event.target.closest('a, button, summary')) {
        const activeItem = document.activeElement;
        const prevIndex = Array.from(topLevelmenuItems).indexOf(activeItem) - 1;
        const nextIndex = Array.from(topLevelmenuItems).indexOf(activeItem) + 1;

        switch (
          event.keyCode // change to event.key to key to use the above variable
        ) {
          case 27: // Esc
            if (activeItem.closest('details')) {
              event.stopPropagation();
              event.preventDefault();
              activeItem.closest('details').removeAttribute('open');
              activeItem.closest('details').querySelector(':scope summary').focus();
            } else {
              event.stopPropagation();
              menuButton.focus();
            }

            break;
          case 32: // Space
          case 13: // Enter
            break;
          case 35: // end
            event.stopPropagation();
            event.preventDefault();

            this.querySelector('details[open]').removeAttribute('open');
            Array.from(menuItems)[menuItems.length - 1].focus();

            break;
          case 36: // home
            event.stopPropagation();
            event.preventDefault();

            this.querySelector('details[open]').removeAttribute('open');
            Array.from(menuItems)[0].focus();

            break;
          case 38: // up
            event.stopPropagation();
            event.preventDefault();

            if (Array.from(topLevelmenuItems).indexOf(activeItem) > -1) {
              if (Array.from(topLevelmenuItems)[prevIndex] != undefined)
                Array.from(topLevelmenuItems)[prevIndex].focus();
              else Array.from(topLevelmenuItems)[topLevelmenuItems.length - 1].focus();
            } else if (activeItem.closest('details')) {
              const subMenuItems = activeItem
                .closest('details')
                .querySelectorAll('a, button, :scope details > summary');
              subPrevIndex = Array.from(subMenuItems).indexOf(activeItem) - 1;

              if (Array.from(subMenuItems)[subPrevIndex] != undefined) Array.from(subMenuItems)[subPrevIndex].focus();
              else Array.from(subMenuItems)[subMenuItems.length - 1].focus();
            }

            break;
          case 40: // down
            event.stopPropagation();
            event.preventDefault();

            if (Array.from(topLevelmenuItems).indexOf(activeItem) > -1) {
              if (Array.from(topLevelmenuItems)[nextIndex] != undefined)
                Array.from(topLevelmenuItems)[nextIndex].focus();
              else Array.from(topLevelmenuItems)[0].focus();
            } else if (activeItem.closest('details')) {
              const subMenuItems = activeItem
                .closest('details')
                .querySelectorAll('a, button, :scope details > summary');
              subNextIndex = Array.from(subMenuItems).indexOf(activeItem) + 1;

              if (Array.from(subMenuItems)[subNextIndex] != undefined) Array.from(subMenuItems)[subNextIndex].focus();
              else Array.from(subMenuItems)[0].focus();
            }

            break;
        }
      }

      */
    });

    // #endregion
  
    // #region empty button
    clearBtn?.addEventListener('click', (event) => {

      this.classList.remove('js-show-datalist');
      inputElement.value = '';
      inputElement.removeAttribute('data-value');
      inputElement.focus();
      this.classList.remove('has-value');
      
      inputElement.setAttribute('placeholder', this.getAttribute('data-original-placeholder') || '');

      datalistElement.querySelectorAll('option').forEach((option) => {

        option.classList.remove('active');
      });
    });

  }
}

export default iamSearch;
