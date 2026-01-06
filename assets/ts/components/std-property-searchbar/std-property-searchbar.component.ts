import { setMinMax } from '../../modules/input';

// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'STD Property searchbar',
});

class iamSTDPropertySearchbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/std-property-searchbar.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div class="property-searchbar">
      <fieldset>
        <slot name="search-term_label"></slot>
        <slot name="search-term"></slot>
        <slot name="search-range"></slot>
      </fieldset>
      <fieldset>
        
        <slot name="price-range_label"></slot>
        
        <span>
          <slot name="price-range-min"></slot>
          <slot name="price-range-max"></slot>
        </span>
      </fieldset>
      <fieldset>
        
        <slot name="beds-min-label"></slot>
        <span>
          <slot name="beds-min"></slot>
          <slot name="beds-max"></slot>
        </span>

      </fieldset>
      <fieldset>

      
        <slot name="property-style-label"></slot>
        <slot name="property-style"></slot>

      </fieldset>
      <fieldset>
        <button id="search-button" class="btn btn-${this.classList.contains('searchbar--inline') ? 'primary' : 'secondary'} m-0" >Search</button>
      </fieldset>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

    // #region Create input fields
    // TODO add check for existing input fields
    this.insertAdjacentHTML('beforeend','<label for="search-term" slot="search-term_label">Location</label>');
    this.insertAdjacentHTML('beforeend','<input type="text" name="search_term" id="search-term" placeholder="Town or postcode" slot="search-term" autocomplete="off" required />');
    
    this.insertAdjacentHTML('beforeend',`<select id="search_range" name="search_range" slot="search-range">
      <option value="1">+1 mile</option>
      <option value="3">+3 miles</option>
      <option value="5">+5 miles</option>
      <option value="10">+10 miles</option>
      <option value="15">+15 miles</option>
      <option value="20">+20 miles</option>
      <option value="30">+30 miles</option>
      <option value="40">+40 miles</option>
      <option value="50">+50 miles</option>
      <option value="100">+100 miles</option>
      <option value="1000">National</option>
    </select>`);

    this.insertAdjacentHTML('beforeend','<label for="budget_min" slot="price-range_label">Price range</label>');
    this.insertAdjacentHTML('beforeend',`<select id="budget_min" name="budget_min" class="min" slot="price-range-min">
      <option value="0">No min</option>
      <option data-input="£50k" value="50000">£50,000</option>
      <option data-input="£75k" value="75000">£75,000</option>
      <option data-input="£100k" value="100000">£100,000</option>
      <option data-input="£150k" value="150000">£150,000</option>
      <option data-input="£200k" value="200000">£200,000</option>
      <option data-input="£250k" value="250000">£250,000</option>
      <option data-input="£500k" value="500000">£500,000</option>
      <option data-input="£750k" value="750000">£750,000</option>
      <option data-input="£1m" value="1000000">£1,000,000</option>
    </select>`);
    
    this.insertAdjacentHTML('beforeend',`<select id="budget_max" name="budget_max" class="max" slot="price-range-max">
      <option value="99999999">No max</option>
      <option data-input="£50k" value="50000">£50,000</option>
      <option data-input="£75k" value="75000">£75,000</option>
      <option data-input="£100k" value="100000">£100,000</option>
      <option data-input="£150k" value="150000">£150,000</option>
      <option data-input="£200k" value="200000">£200,000</option>
      <option data-input="£250k" value="250000">£250,000</option>
      <option data-input="£500k" value="500000">£500,000</option>
      <option data-input="£750k" value="750000">£750,000</option>
      <option data-input="£1m" value="1000000">£1,000,000</option>
    </select>`);
        



    this.insertAdjacentHTML('beforeend',`<label for="bedrooms_min" slot="beds-min-label">No. of beds</label>`);
    this.insertAdjacentHTML('beforeend',`<select id="bedrooms_min" name="bedrooms_min" class="min" slot="beds-min">
      <option value="0">No min</option>
      <option data-input="1 bed" value="1">1</option>
      <option data-input="2 bed" value="2">2</option>
      <option data-input="3 bed" value="3">3</option>
      <option data-input="4 bed" value="4">4</option>
      <option data-input="5 bed" value="5">5</option>
      <option data-input="6 bed" value="6">6</option>
    </select>`);
    this.insertAdjacentHTML('beforeend',`<select id="bedrooms_max" name="bedrooms_max" class="max" slot="beds-max">
      <option value="99">No max</option>
      <option data-input="1 bed" value="1">1</option>
      <option data-input="2 bed" value="2">2</option>
      <option data-input="3 bed" value="3">3</option>
      <option data-input="4 bed" value="4">4</option>
      <option data-input="5 bed" value="5">5</option>
      <option data-input="6 bed" value="6">6</option>
    </select>`);


    this.insertAdjacentHTML('beforeend',`<label for="property_style" slot="property-style-label">Property type</label>`);
    this.insertAdjacentHTML('beforeend',`<select id="property_style" name="property_style" slot="property-style-label">
      <option value="" data-select2-id="select2-data-2-fdrl">Show All</option>
      <option>Bungalow</option>
      <option>Character Property</option>
      <option>Commercial Property</option>
      <option>Flat/Apartment</option>
      <option>Garage/Parking</option>
      <option>Guest House/Hotel</option>
      <option>House</option>
      <option>House/Flat Share</option>
      <option>Land</option>
      <option>Mobile/Park Home</option>
      <option>Private Halls</option>
      <option>Retirement Property</option>
    </select>`);
        
        















    // #endregion

    // #region Pre-populdate input fields from query string

    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);

    if(this.getAttribute("data-search-term"))
      this.querySelector(`[name="search_term"]`).value = this.getAttribute("data-search-term");
    else if(searchParams.get("search_term"))
      this.querySelector(`[name="search_term"]`).value = searchParams.get("search_term");

    if(this.getAttribute("data-bedrooms-max"))
      this.querySelector(`[name="bedrooms_max"]`).value = this.getAttribute("data-bedrooms-max");
    else if(searchParams.get("bedrooms_max"))
      this.querySelector(`[name="bedrooms_max"]`).value = searchParams.get("bedrooms_max");


// #endregion









    const searchInput = this.querySelector('#search-term');
    const searchButton = this.shadowRoot.querySelector('#search-button');

    const priceInputs = this.querySelectorAll(`[name="budget_min"], [name="budget_max"]`);
    const bedroomsInputs = this.querySelectorAll(`[name="bedrooms_min"], [name="bedrooms_max"]`);
    

    setMinMax(priceInputs);
    setMinMax(bedroomsInputs);

    this.addEventListener('change', () => {

      setMinMax(priceInputs);
      setMinMax(bedroomsInputs);
    });






















    searchButton?.addEventListener('click', () => {

      const form = this.closest('form');
      const submitEvent = new Event('submit');

      // todo add validation

      if(form)
        form.submit();
      else 
        this.dispatchEvent(submitEvent);
      
    });

  }
}

export default iamSTDPropertySearchbar;
