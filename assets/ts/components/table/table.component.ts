// @ts-nocheck
import * as tableModule from "../../modules/table";

class iamTable extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';

    const isSticky = this.classList.contains('table--sticky');
    let classList = this.classList.toString();

    classList = classList.replace('table--sticky','');

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${assetLocation}/css/core.min.css";
    </style>
    ${isSticky ? '<div class="table--sticky">' : ''}
    <div class="table__wrapper ${classList}">
      <slot></slot>
    </div>
    ${isSticky ? '</div>' : ''}
    <button class="link" type="button" data-export>Export table as CSV</button>
    <div class="table__pagination"></div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const params = new URLSearchParams(window.location.search)
    // Set default attributes
    if(!this.hasAttribute('data-total'))
      this.setAttribute('data-total', this.querySelectorAll('table tbody tr').length);

    
    console.log(params.get('page'))

    if(!this.hasAttribute('data-page'))
      this.setAttribute('data-page', (params.has('page') ? params.get('page') : 1));

    if(!this.hasAttribute('data-show'))
      this.setAttribute('data-show', 15);

    this.setAttribute('data-pages', Math.ceil(this.getAttribute('data-total') / this.getAttribute('data-show')));
  }

	connectedCallback() {

    this.table = this.querySelector('table');
    this.savedTableBody = this.querySelector('tbody').cloneNode(true);
    this.pagination = this.shadowRoot.querySelector('.table__pagination');
    this.pagination.setAttribute('data-page',this.getAttribute('data-page'));
    this.pagination.setAttribute('data-pages',this.getAttribute('data-pages'));
    this.pagination.setAttribute('data-show',this.getAttribute('data-show'));
    this.pagination.setAttribute('data-total',this.getAttribute('data-total'));
    this.pagination.setAttribute('data-increment',this.getAttribute('data-show'));

    // Create a button in the first column
    tableModule.createMobileButton(this.table);

    tableModule.addTableEventListeners(this.table);

    tableModule.addExportEventListeners(this.shadowRoot.querySelector('[data-export]'), this.table);

    // Setup the mobile titles
    tableModule.addDataAttributes(this.table);

    // Work out the largest width of the CTA's in the last column
    if(this.classList.contains('table--sticky')){

      const largestWidth = tableModule.getLargestLastColWidth(this.table);
      this.style.setProperty("--cta-width", `${largestWidth}rem`);
    }

    // Set events on the filter table
    this.form = document.createElement('form');
    if(this.hasAttribute('data-filterby')){

      this.form = document.querySelector(`#${this.getAttribute('data-filterby')}`);
      let searchInput = this.form.querySelector('[data-search]');

      if(searchInput)
        tableModule.createSearchDataList(this.table, this.form, searchInput);

        if(!this.form.querySelector('[data-page]')){
          this.form.innerHTML += `<input name="page" type="hidden" value="${this.getAttribute('data-page')}" data-pagination="true" />`
        }
        if(!this.form.querySelector('[data-show]')){
          this.form.innerHTML += `<input name="show" type="hidden" value="${this.getAttribute('data-show')}" data-show="true" />`
        }
    }


    tableModule.addFilterEventListeners(this.table, this.form, this.pagination, this.savedTableBody);
    
    tableModule.filterTable(this.table, this.form);

    tableModule.createPaginationButttons(this.table, this.form, this.pagination);
    tableModule.addPaginationEventListeners(this.table, this.form, this.pagination);

    tableModule.populateDataQueries(this.table, this.form);


  }


  static get observedAttributes() {
    return ["data-total","data-pages","data-page","data-show"];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "data-total": {
        this.setAttribute('data-pages', Math.ceil(newVal / this.getAttribute('data-show')));
        break;
      }
      case "data-show": {
        this.setAttribute('data-pages', Math.ceil(this.getAttribute('data-total') / newVal));
        break;
      }
      case "data-pages": {
        console.log('create pagination');

            
        this.pagination.setAttribute('data-pages',this.getAttribute('data-pages'));
        this.pagination.setAttribute('data-show',this.getAttribute('data-show'));
        this.pagination.setAttribute('data-total',this.getAttribute('data-total'));

        tableModule.filterTable(this.table, this.form);
        tableModule.createPaginationButttons(this.table, this.form, this.pagination);

        break;
      }
      case "data-page": {

        let paginationInput = this.form.querySelector('[data-pagination]');

        paginationInput.value = newVal;
        
        //tableModule.filterTable(this.table, this.form);

        break;
      }
    }

  }
}

export default iamTable;