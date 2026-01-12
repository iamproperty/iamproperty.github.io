import Cookies from 'js-cookie';
import advancedSelect from '../../modules/advanced-select';
import {isValidPostcode} from '../../modules/helpers';

// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'Address Lookup',
});

class iamAddressLookup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    
    const loadCSS = `@import "${assetLocation}/css/components/address-lookup.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous" />
    <div class="wrapper">

      <div class="matched d-none">
        <div class="inner">
          <p><span class="matched-address"></span></p>
          <button class="link use-matched">Yes, use this address</button>
          <button class="link use-entered">No, use the address I entered</button>
        </div>
        <span class="invalid-feedback">We found a matching address based on the details you entered. Is this address correct?</span>
      </div>
      <div class="postcode-lookup was-validated">
        <div>
        <label class="mb-1"><span class="title text-lowercase"></span>
          <span>
          <input type="text" name="postcode" class="${this.hasAttribute('data-input-class') ? this.getAttribute('data-input-class') : ''}" list="address-lookup__addressess" autocomplete="one-time-code" aria-autocomplete="none" placeholder="${this?.hasAttribute('data-placeholder') ? this?.getAttribute('data-placeholder') : 'Postcode'}" value="${this.hasAttribute('data-postcode-value')? this.getAttribute('data-postcode-value') : ''}" part="input" />
          <button id="postcode__submit" class="suffix fa-regular fa-search" part="suffix"></button>
          </span>
        </label>
    
          <span class="invalid-feedback mb-2">${this.hasAttribute('data-error-msg') ? this.getAttribute('data-error-msg') : 'Required address fields'}</span>

          <div class="datalist__wrapper ${this.hasAttribute('data-list-class') ? this.getAttribute('data-list-class') : ''}" tabindex="0" part="list-wrapper">
            <slot name="beforeList"></slot>
            <slot name="preloadedList"></slot>
            <datalist id="address-lookup__addressess" class=""></datalist>
            <div id="paginationWrapper"></div>
            <slot name="afterList"></slot>
          </div>
        </div>
        <slot name="hint"></slot>
        <div class="actions">
          <button class="btn btn-tertiary switch-to-manual-btn" type="button" part="manualButton">Or enter address manually</button>
          <slot name="actions"></slot>
        </div>
      </div>

      <div class="manual-address pb-2 js-hide">
        <slot part="contents"></slot>
        <button class="btn btn-tertiary switch-to-lookup-btn" type="button" part="button">${this.hasAttribute('data-postcode-lookup-label')? this.getAttribute('data-postcode-lookup-label') : 'Use postcode lookup'}</button>
        <slot name="after"></slot>
      </div>
      <div class="pre-filled p-2 js-hide">
        <strong class="title text-primary d-block"></strong>
        <p><span class="pre-filled-address"></span>
        <button class="link m-0 text-primary ms-2 cursor-pointer" type="button" part="edit-button">
          <i class="fa-regular fa-pen-to-square m-0"></i> <span class="visually-hidden">Edit</span>
        </button>
        <button class="link m-0 text-primary ms-2 cursor-pointer" type="button" part="remove-button">
          <i class="fa-regular fa-trash m-0"></i> <span class="visually-hidden">Remove</span>
        </button>
        <slot name="prefilled"></slot></p>
      </div>
    </div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback(): void {
    const lookup = this.shadowRoot.querySelector('[name="postcode"]');
    const lookupWrapper = this.shadowRoot.querySelector('.postcode-lookup');
    const manualWrapper = this.shadowRoot.querySelector('.manual-address');
    const preFilledWrapper = this.shadowRoot.querySelector('.pre-filled');
    const list = this.querySelector('datalist[slot="preloadedList"]') ? this.querySelector('datalist[slot="preloadedList"]') : this.shadowRoot.querySelector('.datalist__wrapper datalist');
    const listWrapper = this.shadowRoot.querySelector('.datalist__wrapper');
    const switchManualBtn = this.shadowRoot.querySelector('.switch-to-manual-btn');
    const switchLookupBtn = this.shadowRoot.querySelector('.switch-to-lookup-btn');
    const title = this.hasAttribute('data-title') ? this.getAttribute('data-title') : 'Find an address';
    const preFilledAddressBtn = this.shadowRoot.querySelector('[part="edit-button"]');
    const preFilledAddressRemoveBtn = this.shadowRoot.querySelector('[part="remove-button"]');
    const dataDisplayText = this.hasAttribute('data-display-text');
    const postcodeSubmit = this.shadowRoot?.querySelector('#postcode__submit');
    const errorMsg = this.shadowRoot?.querySelector('.invalid-feedback');
    const paginationWrapper = this.shadowRoot?.querySelector('#paginationWrapper');
    const minChars = this.hasAttribute('data-min-chars') ? parseInt(this.getAttribute('data-min-chars')) : 3;
    let pageNumber = 1;
    const atleastone = this.querySelector('.atleastone');

    const matchedAddress = this.shadowRoot.querySelector('.matched-address');
    const matchedAddressWrapper = this.shadowRoot.querySelector('.matched');
    const matchedAddressUse = this.shadowRoot.querySelector('.matched .use-matched');
    const matchedAddressEntered = this.shadowRoot.querySelector('.matched .use-entered');

    Array.from(this.shadowRoot.querySelectorAll('.title')).forEach((titleElement) => {
      titleElement.innerHTML = title;
    });

    // #region functions
    function checkFilled(component): void {
      
      const preFilledAddress = component.shadowRoot.querySelector('.pre-filled-address');
      let preFilled = true;
      preFilledAddress.innerHTML = '';

      
      Array.from(
        component.querySelectorAll('input[required],input[data-required],select[required],select[data-required]')
      ).forEach((input) => {
        let value = input.hasAttribute('data-value') ? input.getAttribute('data-value') : input.value;

        if(input.tagName == "SELECT" && component.querySelector(`[value="${input.value}"][data-value]`))
          value = component.querySelector(`[value="${input.value}"][data-value]`).getAttribute('data-value');

        if (!value){

          if(input.closest('.atleastone')){

            if(!atleastone.querySelector('input:valid, input.is-valid')){
              preFilled = false;
            }
          }
          else {
            preFilled = false;
          }
          
        } 
        else {
          preFilledAddress.innerHTML += value + (/^-?\d+$/.test(value) ? ' ' : ', ');
        }
      });

      preFilledAddress.innerHTML = preFilledAddress.innerHTML.slice(0, -2);


      // If has label then use that

      if (preFilled) {

        if(component.querySelector('[name="label"]'))
          preFilledAddress.innerHTML = component.querySelector('[name="label"]').value;


        // If has label then use that

        preFilledWrapper.classList.remove('js-hide');
        lookupWrapper.classList.add('js-hide');
        manualWrapper.classList.add('js-hide');
      }
    }

    function openManualWrapper(): void {

      
      lookupWrapper.classList.add('js-hide');
      manualWrapper.classList.remove('js-hide');

      Array.from(manualWrapper.querySelectorAll('[data-required]')).forEach((input) => {

        input.setAttribute('required', 'true');
      });

      manualWrapper.scrollIntoView();
    }

    const atleastoneValidate = (): void => {

      if(atleastone.querySelector('input:valid, input.is-valid')){
        Array.from(atleastone.querySelectorAll('input')).forEach(element => {
          element.removeAttribute('required');
        });
      }
      else {
        Array.from(atleastone.querySelectorAll('input')).forEach((input) => {
          input.setAttribute('required', 'true');
        });
      }
    }


    const fillInputs = (values): void => {

      lookupWrapper.classList.add('js-hide');
      manualWrapper.classList.remove('js-hide');

      Object.keys(values).forEach((key) => {
        const value = values[key];
        let input = false;
        if (this.querySelector(`[data-name="${key}"]`))
          input = this.querySelector(`[data-name="${key}"]`);
        else if (this.querySelector(`[data-name-alt="${key}"]`))
          input = this.querySelector(`[data-name-alt="${key}"]`);
        else if (this.querySelector(`[name="${key}"]`))
          input = this.querySelector(`[name="${key}"]`);

        if(input && input.tagName == "SELECT" && value.id){
          input.value = value.id;
          
        }
        else if(input && value != ''){
          
          input.value = value;

          if(input.hasAttribute('data-readonly')){
            input.setAttribute('readonly', true);
            input.classList.add('is-valid');
          }
        }
        else if(value != ""){
          this.insertAdjacentHTML('beforeend',`<input type="hidden" class="inserted" data-hidden name="${key}" value="${value}" />`);
        }

        if (this.querySelector(`[data-name-2="${key}"]`))
          this.querySelector(`[data-name-2="${key}"]`).value += ' ' + value;
      });

      Array.from(this.querySelectorAll('[data-required]')).forEach((input) => {
        input.setAttribute('required', 'true');
      });
      lookup.removeAttribute('required');

      if(atleastone){

        atleastoneValidate();
      }

      if(!this.hasAttribute('data-force-manual'))
        checkFilled(this);
    }

    const search = async (searchValue, paginate = false): any => {

      // check if postcode is valid
      const limit = this.hasAttribute('data-limit') ? parseInt(this.getAttribute('data-limit')) : 100;
      
      if(paginate)
        pageNumber++;
      else
        pageNumber = 1;

      let ajaxURL = this.getAttribute('data-url');
      ajaxURL += `${encodeURI(searchValue)}&page_number=${pageNumber}&page_size=${limit}`;
      
      if(this.hasAttribute('data-url-2')){
        ajaxURL += this.getAttribute('data-url-2');
      }

      const postcode = searchValue; // TODO: remove when postcode comes from response

      if(this.hasAttribute('data-postcode')){
        
        if (!isValidPostcode(searchValue)){
          return "Invalid postcode, please enter a valid postcode";
        }
        else {
          if(!paginate)
            list.innerHTML = "";
          list?.classList.add('loading');
          list?.classList.remove('noresults');
          lookup?.classList.remove('is-invalid');
          errorMsg?.innerHTML = "";
          list?.classList.remove('show-welsh-banner');

          Array.from(this.querySelectorAll('[data-required]')).forEach((input) => {
            input.removeAttribute('required');
          });
          Array.from(this.querySelectorAll('[data-readonly]')).forEach((input) => {
            input.removeAttribute('readonly');
            input.classList.remove('is-valid');
          });
          Array.from(this.querySelectorAll('.inserted')).forEach((input) => {
            input.remove();
          });
        }
      }

      this.classList.add('searched');
      this.classList.add('was-validated');

      // Setup controller vars if not already set
      if (!window.controller) window.controller = [];

      // Abort if controller already present for this url
      if (window.controller[ajaxURL]) window.controller[ajaxURL].abort();

      // Create a new controller so it can be aborted if new fetch made
      window.controller[ajaxURL] = new AbortController();
      const { signal } = controller[ajaxURL];

      try {
        return await fetch(ajaxURL, {
          signal: signal,
          method: 'get',
          headers: new Headers({
            'Access-Control-Allow-Origin' : 'https://8mzh15wnrc.execute-api.eu-west-2.amazonaws.com/dev',
            'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
            'Content-Type': 'application/json',
            'Authorization': this.getAttribute('data-auth'),
            'X-Amz-Security-Token': this.getAttribute('data-token'),
            'X-Amz-Date': this.getAttribute('data-amz-date')
          }),
        })
          .then((response) => response.json())
          .then((response) => {
            // populate datalist
            let listString = '';

            const addresses = response['data'] ? response['data'] : response;

            addresses.forEach((address) => {
              
              // Deal with agent platform response
              if (typeof address.attributes == 'object' && address.attributes.label) {
                const values = JSON.stringify(address.attributes);
                listString += `<option data-values='${values}' >${address.attributes.label}</option>`;
              }
              else if (typeof address.value == 'object') {
                const values = JSON.stringify(address.value);
                listString += `<option data-values='${values}'>${address['label']}, ${postcode}</option>`;
              } else {
                const values = JSON.stringify(address);

                if (dataDisplayText) {
                  listString += `<option data-values='${values}'>${address[dataDisplayText]}, ${postcode}</option>`;
                } else {
                  let itemString = '';
                  for (const [key, value] of Object.entries(address)) {
                    if (key == 'address_number_name') itemString += `${value} `;
                    else if (key != 'postcode' && key != 'address_title' && key != 'group')
                      itemString += `${value}${/^-?\d+$/.test(value) ? '' : ','} `;
                  }

                  listString += `<option data-values='${values}'>${itemString}, ${postcode}</option>`; // TODO postcode should come from the response
                }
              }


            });

            if(paginate)
              list.innerHTML += listString;
            else
              list.innerHTML = listString;

            if(addresses.length){
              list?.classList.remove('loading');
              
            }
            else {
              
              list?.classList.remove('loading');
              list?.classList.add('noresults');
            }

            // pagination
            if(response.meta && response.meta.current_page && response.meta.total_pages && response.meta.total_pages > response.meta.current_page){

              paginationWrapper?.innerHTML = `<div class="bg-light text-center p-2"><p class="m-0">Showing 1-${response.meta.current_page * limit} of ${response.meta.total_results} addresses <br /><button type="button" data-next="${response.meta.current_page+1}" class="mt-1 mb-0 btn btn-action"><i class="fa-regular fa-eye me-1"></i>Show more addresses</button></p></div>`;
            }
            else {
              paginationWrapper?.innerHTML = '';
            }

            if(response.meta && response.meta.welsh_language){
                      
              list?.classList.add('show-welsh-banner');     
            }
            listWrapper?.focus();
            list?.querySelector('option')?.focus();

            return true;
          });
      } catch (error) {
        console.log(error)
        return "There has been a problem. Please try again in a few moments.";
      }
    };

    // #endregion

    // #region check attributes and trigger functions 
    if(!this.hasAttribute('data-force-manual'))
      checkFilled(this);

    this.addEventListener('filled', () => {
      if(!this.hasAttribute('data-force-manual'))
        checkFilled(this);
    });
    
    if (this.hasAttribute('data-use')) {
      const useLabel = this.hasAttribute('data-use-label') ? this.getAttribute('data-use-label') : 'Use saved address';
      const useCheckbox = `<div><input type="checkbox" name="use" id="use" value="yes"><label for="use">${useLabel}</label></div>`;

      lookupWrapper.insertAdjacentHTML('afterbegin', useCheckbox);

      this.shadowRoot.addEventListener('change', (event) => {
        if (event && event.target instanceof HTMLElement && event.target.closest('[name="use"]')) {
          const checkbox = event.target.closest('[name="use"]');

          if (checkbox.checked) {
            lookupWrapper.classList.add('js-hide');
            manualWrapper.classList.remove('js-hide');

            const values = JSON.parse(this.getAttribute('data-use'));
            
            Object.keys(values).forEach((key) => {
              const value = values[key];
              if (this.querySelector(`[data-name="${key}"]`)) this.querySelector(`[data-name="${key}"]`).value = value;
              else if (this.querySelector(`[name="${key}"]`)) this.querySelector(`[name="${key}"]`).value = value;
            });
          }
        }
      });


      if(this.hasAttribute('data-use-default')){
        lookupWrapper.querySelector('[name="use"]').checked = true;

        const values = JSON.parse(this.getAttribute('data-use'));
        fillInputs(values);
      }
    }

    if (this.hasAttribute('data-manual')) {
      fillInputs({});
    }

    if(this.classList.contains('show-pagination'))
      paginationWrapper?.innerHTML = `<div class="bg-light text-center p-2"><p class="m-0">Showing 1-500 of 585 addresses <br /><button type="button" data-next="2" class="mt-1 mb-0 btn btn-action"><i class="fa-regular fa-eye me-1"></i>Show more addresses</button></p></div>`;
      
    if(this.classList.contains('scroll-to-bottom-results'))
      paginationWrapper.scrollIntoView({container: 'nearest'});
    // #endregion
  
    // #region event listeners
    preFilledAddressBtn.addEventListener('click', () => {
      preFilledWrapper.classList.add('js-hide');
      openManualWrapper();
    });

    preFilledAddressRemoveBtn.addEventListener('click', () => {
      preFilledWrapper.classList.add('js-hide');
      lookupWrapper.classList.remove('js-hide');
      manualWrapper.classList.add('js-hide');

      list.innerHTML = "";
      list?.classList.remove('loading');
      list?.classList.remove('noresults');
      lookup?.classList.remove('is-invalid');
      errorMsg?.innerHTML = "";
      list?.classList.remove('show-welsh-banner');

      lookup.focus();
      lookup.value = "";

      if(lookup?.hasAttribute('data-placeholder'))
        lookup.setAttribute('placeholder',lookup?.getAttribute('data-placeholder'));

      const updateEvent = new CustomEvent('switch-to-lookup');
      this.dispatchEvent(updateEvent);

      lookupWrapper.scrollIntoView();
    });

    switchManualBtn.addEventListener('click', () => {
      openManualWrapper();
    });

    this.addEventListener('open-manual', () => {
      openManualWrapper();
    });

    switchLookupBtn.addEventListener('click', () => {
      lookupWrapper.classList.remove('js-hide');
      manualWrapper.classList.add('js-hide');

      const updateEvent = new CustomEvent('switch-to-lookup');
      this.dispatchEvent(updateEvent);

      lookupWrapper.scrollIntoView();
    });

    lookup.addEventListener('keyup', async (e) => {

      if (![40,38,13].includes(e.keyCode) && lookup.value.length >= minChars){
        const valid = await search(lookup.value);

        if(valid != true){
          lookup?.classList.add('is-invalid');
          errorMsg?.innerHTML = valid;
        }
      }
        
      if (e.keyCode == 13){
        const valid = await search(lookup.value);

        if(valid != true){
          lookup?.classList.add('is-invalid');
          errorMsg?.innerHTML = valid;
        }
      }
    });

    lookup.addEventListener('change', async () => {

      if (lookup.value.length >= minChars) {

        const valid = await search(lookup.value);

        if(valid != true){
          lookup?.classList.add('is-invalid');
          errorMsg?.innerHTML = valid;
        }
      }
    });

    list.addEventListener('click', (e) => {
      if(e.target.tagName == "OPTION"){

        const values = JSON.parse(e.target.getAttribute('data-values'));

        fillInputs(values);

        if (this.shadowRoot.querySelector('[name="use"]'))
          this.shadowRoot.querySelector('[name="use"]').checked = false;
      }
    });

    atleastone?.addEventListener('input', (e) => {

      Array.from(atleastone.querySelectorAll('[data-required]')).forEach((input) => {
        input.setAttribute('required', 'true');
      });
      

      atleastoneValidate();
    });

    postcodeSubmit?.addEventListener('click', async () => {
      const valid = await search(lookup.value);

      if(valid != true){
        lookup?.classList.add('is-invalid');
          errorMsg?.innerHTML = valid;
      }
    });

    this?.addEventListener('search', async () => {
      const valid = await search(lookup.value);

      if(valid != true){
        lookup?.classList.add('is-invalid');
          errorMsg?.innerHTML = valid;
      }
    });

    this?.addEventListener('close-button-pressed', () => {

      list.innerHTML = "";
      list?.classList.remove('loading');
      list?.classList.remove('noresults');
      lookup?.classList.remove('is-invalid');
      errorMsg?.innerHTML = "";
      list?.classList.remove('show-welsh-banner');

      lookup.focus();
    });
        
    paginationWrapper?.addEventListener('click', async (e) => {

      if(e.target.tagName == "BUTTON"){

        const valid = await search(lookup.value, true);

        if(valid != true){
          lookup?.classList.add('is-invalid');
            errorMsg?.innerHTML = valid;
        }
      }
    });
    // #endregion

    // #region Matched address

    if(this.hasAttribute('data-matched')){

      matchedAddressWrapper?.classList.remove('d-none');


      if(this.hasAttribute('data-matched-label'))
        matchedAddress?.innerHTML = this.getAttribute('data-matched-label');

      matchedAddressEntered?.addEventListener('click', () => {

        matchedAddressWrapper?.remove();

        const useCheckbox = this.shadowRoot?.querySelector('[name="use"]');
        useCheckbox.checked = true;

        lookupWrapper.classList.add('js-hide');
        manualWrapper.classList.remove('js-hide');

        const values = JSON.parse(this.getAttribute('data-use'));
        
        Object.keys(values).forEach((key) => {
          const value = values[key];
          if (this.querySelector(`[data-name="${key}"]`)) this.querySelector(`[data-name="${key}"]`).value = value;
          else if (this.querySelector(`[name="${key}"]`)) this.querySelector(`[name="${key}"]`).value = value;
        });
        
        checkFilled(this);
      });

      
      matchedAddressUse?.addEventListener('click', () => {

        matchedAddressWrapper?.remove();

        const values = JSON.parse(this.getAttribute('data-matched'));

        fillInputs(values);
        checkFilled(this);
      });
    }
    else {
      matchedAddressWrapper?.remove();
    }
    // #endregion

    advancedSelect(this, lookup, list, true);
  }
}

export default iamAddressLookup;
