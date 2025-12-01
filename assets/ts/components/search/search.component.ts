import Cookies from 'js-cookie';
import { safeID, resolvePath, isTraversable } from '../../modules/helpers';
import advancedSelect from '../../modules/advanced-select';

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

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    input {
      background: red;
    }
    input:not(.is-invalid):not(:invalid) {
      background: none!important;
    }
    .optional-text {
      display: none;
    } 
    .js-hide {
      display: none !important;
    }
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous" />
    <slot></slot>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const searchWrapper = this;
    const inputField = this.querySelector('input');
    const valueSchema = this.hasAttribute('data-value-schema') ? this.getAttribute('data-value-schema') : 'value';
    const displaySchema = this.hasAttribute('data-display-schema') ? this.getAttribute('data-display-schema') : 'label';
    const loopSchema = this.hasAttribute('data-schema') ? this.getAttribute('data-schema') : '';
    let datalist = this.querySelector('datalist');
    let minLength = 0;

    if (searchWrapper.hasAttribute('data-url')) {

      minLength = 3;
    }

    // Clone original input field, re-name and use for display purposes
    const displayInputField = inputField.cloneNode();
    displayInputField.setAttribute('name', `${inputField.getAttribute('name')}Alt`);
    inputField.removeAttribute('data-change-events');
    displayInputField.removeAttribute('id');

    inputField.after(displayInputField);

    // Hide original input field
    inputField.setAttribute('type', 'hidden');

    // if data list does not exist then create one and append
    if (!datalist) {
      datalist = document.createElement('datalist');
      const listID = safeID('list');
      datalist.setAttribute('id', listID);
      searchWrapper.appendChild(datalist);

      displayInputField.setAttribute('list', listID);
    }

    advancedSelect(this, displayInputField, datalist, false);


    function checkMatch(): void {
      const match = datalist.querySelector(`option[value="${displayInputField.value}" i]`);
      const subMatch = datalist.querySelector(`option[value*="${displayInputField.value}" i]`);

      if (match) {
        inputField.value = match.getAttribute('data-actual-value');
        console.log(inputField)
        displayInputField.value = match.getAttribute('data-actual-value');

        displayInputField.classList.remove('is-invalid');
        displayInputField.closest('label').removeAttribute('data-error');
      } 
      else if (displayInputField.value.length >= minLength && !subMatch) {
        displayInputField.classList.add('is-invalid');
        displayInputField.closest('label').setAttribute('data-error', 'No results returned');
        datalist.innerHTML = '';
      } 
      else {
        displayInputField.classList.remove('is-invalid');
        displayInputField.closest('label').removeAttribute('data-error');
      }
    }

    
    const search = async (searchterm): any => {
      
      let ajaxURL = this.getAttribute('data-url');
      ajaxURL += `${encodeURI(searchterm)}`;

      // Setup controller vars if not already set
      if (!window.controller) window.controller = [];

      // Abort if controller already present for this url
      if (window.controller[ajaxURL]) window.controller[ajaxURL].abort();

      // Create a new controller so it can be aborted if new fetch made
      window.controller[ajaxURL] = new AbortController();
      const { signal } = controller[ajaxURL];

      try {
        await fetch(ajaxURL, {
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
            const loopValues = resolvePath(response, loopSchema, '');

            if (isTraversable(loopValues) && typeof loopValues.forEach == 'function') {
              loopValues.forEach((item) => {
                const actualValue = resolvePath(item, valueSchema, '');
                const displayValue = resolvePath(item, displaySchema, '').replace('\n', ', ');

                if (!datalist.querySelector(`option[data-actual-value="${actualValue}"]`))
                  listString += `<option value="${displayValue}" data-actual-value="${actualValue}">${displayValue}</option>`;
              });
            } else if (typeof loopValues == 'object') {
              for (const [key, value] of Object.entries(loopValues)) {
                if (isTraversable(value) && typeof value.forEach == 'function') {
                  value.forEach((item) => {
                    const actualValue = resolvePath(item, valueSchema, '');
                    const displayValue = resolvePath(item, displaySchema, '').replace('\n', ', ');

                    if (!datalist.querySelector(`option[data-actual-value="${actualValue}"]`))
                      listString += `<option value="${key}: ${displayValue}" data-actual-value='${actualValue}'>${key}: ${displayValue}</option>`;
                  });
                }
              }
            }

            datalist.innerHTML += listString;

            // filter the list on the client side just in case
            const text = searchterm.toUpperCase();
            for (const option of datalist.options) {
              if (option.value.toUpperCase().indexOf(text) > -1) {
                option.style.display = 'block';
                option.classList.remove('hide');
              } else {
                option.style.display = 'none';
                option.classList.add('hide');
              }
            }

            searchWrapper.classList.add('was-validated');
            checkMatch();

            return response;
          });
      } catch (error) {
        console.log(error);
      }
    };


    datalist.addEventListener('click', function (event) {

      if (event && event.target instanceof HTMLElement && event.target.closest('option')) {
        
        const option = event.target.closest('option');
        const value = option?.hasAttribute('data-actual-value') ? option?.getAttribute('data-actual-value') : option?.getAttribute('data-value');
        inputField.value = value;

        const changeEvent = new CustomEvent('value-change', {
          detail: { value: value },
        });
        searchWrapper.dispatchEvent(changeEvent);
      }
    });

    this.addEventListener('close-button-pressed', function (event) {

      datalist.innerHTML = '';
      inputField?.value = '';
      
      displayInputField.classList.remove('is-invalid');
      displayInputField.closest('label').removeAttribute('data-error');
    });


    // Search the endpoint when 3 characters has been added
    if (searchWrapper.hasAttribute('data-url')) {

      displayInputField.addEventListener('input', () => {

        if(displayInputField.value.length < minLength){
          datalist.innerHTML = '';
        }

        if (displayInputField.value.length == minLength) {
          search(displayInputField.value);
        }
      });
    }
    else {
            // on change update oringinal field with the actual value and use displayed input for the nice display text
      displayInputField.addEventListener('input', () => {
        checkMatch();
      });
    }

    if (searchWrapper.hasAttribute('data-prevent-submit')) {
      const form = searchWrapper.closest('form');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
      });
    }
  }
}

export default iamSearch;
