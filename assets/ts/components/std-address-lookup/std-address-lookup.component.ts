import iamAddressLookup from '../../../js/components/address-lookup/address-lookup.component.min.js';

// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'STD Address Lookup',
});

class iamSTDAddressLookup extends HTMLElement {
  constructor() {
    super();
    /*
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    
    </style>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    */
  }

  connectedCallback(): void {

    if (!window.customElements.get(`iam-address-lookup`)) window.customElements.define(`iam-address-lookup`, iamAddressLookup);

    this.innerHTML = `<iam-address-lookup data-url="/standardaddress.json?search_query=" data-postcode="true" data-min-chars="5" ${this.hasAttribute('data-manual') ? 'data-manual' : ''} ${this.hasAttribute('data-allow-manual') ? 'data-allow-manual' : ''} ${this.hasAttribute('data-use') ? 'data-use' : ''} data-postcode-lookup-label="Back to UK postcode lookup">

    <p class="hint pb-2 d-block" slot="hint">Unsure of the postcode? Check with the <a href="https://www.royalmail.com/find-a-postcode" target="_blank"><i class="fa-regular fa-arrow-up-right-from-square"></i>Royal Mail address finder</a></p>
    <span class="h3 pb-2">Street address</span>

    <fieldset class="atleastone">
      <span class="invalid-feedback">You must complete at least one of the highlighted fields.</span>

      <label>Flat number <input name="sub_building_name" type="text" data-required /></label>
      <label>Building name <input name="building_name" type="text" data-required maxlength="50"/></label>
      <label>House Number <input name="building_number" type="text" data-required maxlength="50"/></label>

      <label>Street 1 <input name="dependent_thoroughfare" type="text" data-required maxlength="81"/></label>
      <label>Street 2 <input name="thoroughfare" type="text" data-required maxlength="81"/></label>
    </fieldset>

    <span class="h3 pb-2">Locality details</span>
    <label>Area${!this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="dependent_locality" type="text" maxlength="35"/></label>
    <label>Village${!this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="locality" type="text" maxlength="35"/></label>
    <label>Town / City${!this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="post_town" type="text" maxlength="30"/></label>
    <label>County${this.hasAttribute('data-show-required') && this.hasAttribute('data-county-required') ? '*' : (!this.hasAttribute('data-show-required') ? '' : ' (optional)')} 
    <select name="postal_county" ${this.hasAttribute('data-county-required') ?'data-required':''}>
      <option></option>  
      <option value="urn:als:county:a72ndjIq" data-value="Tyne and Wear">Tyne and Wear</option>
      <option value="urn:als:county:a72ndjI3" data-value="Durham">Durham</option>
    </select></label>
    <label>Postcode${this.hasAttribute('data-show-required') ? '*' : ''} <input name="postcode" type="text" data-required data-readonly maxlength="8"/></label>
    <label>Country${this.hasAttribute('data-show-required') && this.hasAttribute('data-country-required') ? '*' : (!this.hasAttribute('data-show-required') ? '' : ' (optional)')} 
      <select name="region" ${this.hasAttribute('data-country-required') ?'data-required':''}>
        <option value=""></option>
        <option value="England">England</option>
        <option value="Wales">Wales</option>
        <option value="Scotland">Scotland</option>
        <option value="Northern Ireland">Northern Ireland</option>
      </select>
    </label>

    ${this.hasAttribute('data-allow-overseas') ?
    `<fieldset class="overseas">

      <span class="h3 pb-2">Street address</span>

      <fieldset class="overseas-atleastone">
        <span class="invalid-feedback">You must complete at least one of the highlighted fields.</span>
        <label class="mb-1">Flat number${this.hasAttribute('data-show-required') ? '*' : ''} <input name="overseas[sub_building_name]" type="text" data-overseas-required /></label>
        <span class="hint d-block mb-2">Flat, unit or floor number (e.g. Flat 5, or Floor 6)</span>

        <label class="mb-1">Building name${this.hasAttribute('data-show-required') ? '*' : ''} <input name="overseas[building_name]" type="text" data-overseas-required maxlength="50" /></label>
        <span class="hint d-block mb-2">Name of the house or building</span>

        <label class="mb-1">House number${this.hasAttribute('data-show-required') ? '*' : ''} <input name="overseas[building_number]" type="text" data-overseas-required maxlength="50" /></label>
        <span class="hint d-block mb-2">House or street number (e.g. 42)</span>

        <label class="mb-2">Street name${this.hasAttribute('data-show-required') ? '*' : ''} <input name="overseas[thoroughfare]" type="text" data-overseas-required maxlength="81" /></label>
      </fieldset>
      <span class="h3 pb-2">Locality details</span>



      <label class="mb-1">Locality${!this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="overseas[dependent_locality]" type="text" /></label>
      <span class="hint d-block mb-2">Main locality, such as the village, suburb, or district</span>


      <label class="mb-1">Town / City${!this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="overseas[post_town]" type="text" maxlength="30" /></label>
      
      <label class="mb-1">State / Province / Region${!this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="overseas[double_dependent_locality]" type="text" /></label>
      
      <label class="mb-1">Postcode / ZIP code${!this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="overseas[zip_code]" type="text" /></label>
      
      
      <label>Country <select name="overseas[country_code]" data-overseas-required>
        <option value=""></option>
        <option value="urn:als:country:ndjIqa72" data-value="Poland">Poland</option>
      </select></label>
    </fieldset>

    <button slot="actions" type="button" id="overseasToggle" class="link toggleOverseas">Use overseas address</button>` : ''}

    <div class="bg-light text-center px-3" slot="afterList">
      <p class="p-2">Can't find an address? Check details with the <br/><a href="" class="fa-new"><i class="fa-regular fa-arrow-up-right-from-square"></i>Royal mail address finder</a></p>
      ${this.hasAttribute('data-allow-overseas') ? `<hr/><p class="p-2">If the address doesn’t exist you can enter manually <br /><button type="button" id="overseasToggleInline" class="mt-1 mb-0 btn btn-action"><i class="fa-regular fa-edit me-1"></i>Enter address manually</button></p>`: ''}
    </div>
    <div class="bg-light text-center px-3" slot="beforeList">
      <p class="p-2"><span class="default">Welsh</span><span class="alt">English</span> language addresses are available <br /><button type="button" id="languageToggle" class="mt-1 mb-0 btn btn-action"><i class="fa-regular fa-globe me-1"></i>Show addreesses in <span class="default">Welsh</span><span class="alt">English</span></button></p>
    </div>
    </iam-address-lookup>`;

    const addressComponent = this.querySelector('iam-address-lookup');
    const overseasToggle = this.querySelector('#overseasToggle');
    const overseasToggleInline = this.querySelector('#overseasToggleInline');
    const languageToggle = this.querySelector('#languageToggle');
    const atleastone = this.querySelector('.overseas-atleastone');
    const overseasFields = this.querySelector('.overseas');


    const openOverseas = () => {
      const updateEvent = new CustomEvent('open-manual');
      addressComponent.dispatchEvent(updateEvent);
      this.classList.add('show-overseas');

      Array.from(addressComponent.querySelectorAll('[data-required]')).forEach((input) => {
        input.removeAttribute('required');
      });
      Array.from(overseasFields.querySelectorAll('[data-overseas-required]')).forEach((input) => {
        input.setAttribute('required', 'true');
      });
    }

    overseasToggle?.addEventListener('click', () => {

      if(!this.classList.contains('show-overseas')){
        openOverseas();
      }
    });

    overseasToggleInline?.addEventListener('click', () => {

      if(!this.classList.contains('show-overseas')){
        openOverseas();
      }
    });

    addressComponent?.addEventListener('switch-to-lookup', () => {
      this.classList.remove('show-overseas');

      
      Array.from(overseasFields.querySelectorAll('[data-overseas-required]')).forEach((input) => {
        input.setAttribute('required', 'true');
      });
    });

    languageToggle?.addEventListener('click', () => {

      if(!addressComponent.classList.contains('show-welsh')){
        addressComponent.classList.add('show-welsh');
        addressComponent?.setAttribute('data-url-2','&welsh_language=true');
      }
      else {
        addressComponent.classList.remove('show-welsh');
        addressComponent?.setAttribute('data-url-2','&welsh_language=false');
      }
    
      const updateEvent = new CustomEvent('search');
      addressComponent.dispatchEvent(updateEvent);

      languageToggle.focus();
    });


    atleastone?.addEventListener('input', (e) => {

      Array.from(atleastone.querySelectorAll('[data-overseas-required]')).forEach((input) => {
        input.setAttribute('required', 'true');
      });
      

      if(atleastone.querySelector('input:valid')){
        Array.from(atleastone.querySelectorAll('input')).forEach(element => {
          element.removeAttribute('required');
        });
      }
      else {
        Array.from(atleastone.querySelectorAll('input')).forEach((input) => {
          input.setAttribute('required', 'true');
        });
      }
    });



  }
}

export default iamSTDAddressLookup;
