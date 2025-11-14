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

    this.innerHTML = `<iam-address-lookup data-url="/standardaddress.json?search_query=" data-postcode="true" data-min-chars="5" ${this.hasAttribute('data-manual') ? 'data-manual' : ''} ${this.hasAttribute('data-allow-manual') ? 'data-allow-manual' : ''} ${this.hasAttribute('data-use') ? 'data-use' : ''}>

    <p class="hint pb-2 d-block" slot="hint">Unsure of the postcode? Check with the <a href="https://www.royalmail.com/find-a-postcode" target="_blank"><i class="fa-regular fa-arrow-up-right-from-square"></i>Royal Mail address finder</a></p>
    <span class="h3 pb-2">Street address</span>

    
    <fieldset class="atleastone">
      <span class="invalid-feedback">You must complete at least one of the highlighted fields.</span>

      <label >Flat number <input name="flat_number" type="text" data-required /></label>
      <label >Building name <input name="building_name" type="text" data-required /></label>
      <label >House Number <input name="building_number" type="text" data-required /></label>

      <label >Street 1 <input name="street_1" type="text" data-required /></label>
      <label >Street 2 <input name="street_2" type="text" data-required /></label>
    </fieldset>

    <span class="h3 pb-2">Locality details</span>
    <label>Area <input name="dependent_locality" type="text" /></label>
    <label>Village <input name="village" type="text" /></label>
    <label>Town / City <input name="post_town" type="text" /></label>
    <label>County${this.hasAttribute('data-show-required') && this.hasAttribute('data-county-required') ? '*' : (!this.hasAttribute('data-show-required') ? '' : ' (optional)')} 
    <select name="postal_county" ${this.hasAttribute('data-county-required') ?'data-required':''}>
      <option></option>  
      <option value="urn:als:county:a72ndjIq">Tyne and Wear</option>
      <option value="urn:als:county:a72ndjI3" >Durham</option>
    </select></label>
    <label>Postcode <input name="postcode" type="text" data-required data-readonly /></label>
    <label>Country <select name="country">
      <option>England</option>
      <option>Wales</option>
      <option>Scotland</option>
      <option>Northern Ireland</option>
    </select></label>



    ${this.hasAttribute('data-allow-overseas') ?
    `<fieldset class="overseas">

      <label class="mb-1">Address line 1 <input name="address_l1" type="text"  /></label>
      <span class="hint d-block mb-2">Apartment, suite, unit, building, floor, etc</span>

      <label class="mb-1">Address line 2 <input name="address_l2" type="text"  /></label>
      <span class="hint d-block mb-2">Street address, P.O. box, c/o</span>

      <label class="">Town / City <input name="town" type="text"  /></label>
      
      <label class="">State / Province / Region <input name="state" type="text"  /></label>
      <label class="">Post / ZIP code <input name="code" type="text"  /></label>
      <label>Country <select name="country">
        <option>England</option>
        <option>Wales</option>
        <option>Scotland</option>
        <option>Northern Ireland</option>
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
    const atleastone = this.querySelector('.atleastone');

    overseasToggle?.addEventListener('click', () => {

      if(!this.classList.contains('show-overseas')){
        const updateEvent = new CustomEvent('open-manual');
        addressComponent.dispatchEvent(updateEvent);
        this.classList.add('show-overseas');
      }
    });

    overseasToggleInline?.addEventListener('click', () => {

      if(!this.classList.contains('show-overseas')){
        const updateEvent = new CustomEvent('open-manual');
        addressComponent.dispatchEvent(updateEvent);
        this.classList.add('show-overseas');
      }
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
    });


    atleastone?.addEventListener('input', (e) => {


      Array.from(atleastone.querySelectorAll('[data-required]')).forEach((input) => {
        input.setAttribute('required', 'true');
      });
      

      if(atleastone.querySelector('input:valid')){
        Array.from(atleastone.querySelectorAll('input')).forEach(element => {
          element.removeAttribute('required');
        });
      }
      else {
        Array.from(atleastone.querySelectorAll('[data-required]')).forEach((input) => {
          input.setAttribute('required', 'true');
        });
      }
    });




















  }
}

export default iamSTDAddressLookup;
