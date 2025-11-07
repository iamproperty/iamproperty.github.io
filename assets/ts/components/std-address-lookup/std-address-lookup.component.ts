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
    <iam-address-lookup>
      <slot></slot>
    </iam-address-lookup>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    */
  }

  connectedCallback(): void {

    if (!window.customElements.get(`iam-address-lookup`)) window.customElements.define(`iam-address-lookup`, iamAddressLookup);

    this.innerHTML = `<iam-address-lookup data-url="/addressess2.json?search" data-postcode="true">

    <label>Address line 1 <input name="address" type="text" readonly /></label>
    <label>Address line 2 <input name="address" type="text" data-required /></label>
    <label>Address line 3 <input name="address" type="text" data-required /></label>

    <fieldset class="overseas">
    <label class="mb-1">Address line 1 <input name="address" type="text" readonly /></label>
    <span class="hint d-block nb-2">Street address, P.O. box, company name, c/o</span>
    </fieldset>

    <button slot="actions" id="welshToggle" class="link toggleWelsh">Welsh version</button>
    <button slot="actions" id="overseasToggle" class="link toggleOverseas">Use overseas address</button>


    <div class="bg-light text-center" slot="before-list">
    <p>Can't find an address? Check details with the <a href="" class="fa-new">Royal mail address finder</a></p>
    </div>
    </iam-address-lookup>
    `
    const addressComponent = this.querySelector('iam-address-lookup');
    const welshToggle = this.querySelector('#welshToggle');
    const overseasToggle = this.querySelector('#overseasToggle');

    welshToggle?.addEventListener('click', () => {

      if(welshToggle.classList.contains('toggleWelsh')){

        addressComponent?.setAttribute('data-url','/welsh.json?search=');
        welshToggle.classList.remove('toggleWelsh');
        welshToggle.classList.add('toggleEnglish');
        welshToggle.innerHTML = "English version";
      }
      else {

        addressComponent?.setAttribute('data-url','/addressess2.json?search=');
        welshToggle.classList.remove('toggleEnglish');
        welshToggle.classList.add('toggleWelsh');
        welshToggle.innerHTML = "Welsh version";
      }
    });

    overseasToggle?.addEventListener('click', () => {

      
        console.log(overseasToggle.classList)

      if(overseasToggle.classList.contains('toggleOverseas')){

        console.log('hi')
        
        const updateEvent = new CustomEvent('open-manual');
        addressComponent.dispatchEvent(updateEvent);
        this.classList.add('show-overseas');
      }
      
    });






    






  }
}

export default iamSTDAddressLookup;
