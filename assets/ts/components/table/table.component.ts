// @ts-nocheck
import * as tableModule from "../../modules/table";
import createPaginationButttons from "../../modules/pagination";

class iamTable extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;

    const isCTA = this.classList.contains('table--cta');
    const isExportable = this.classList.contains('table--export');
    
    let classList = this.classList.toString();

    classList = classList.replace('table--cta','');
    classList = classList.replace('table--loading','');

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${coreCSS}";

    :host(.mh-sm){
      max-height: none!important;
    }
    :host(.mh-md){
      max-height: none!important;
    }
    :host(.mh-lg){
      max-height: none!important;
    }
    
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    ${isCTA ? '<div class="table--cta">' : ''}
    <div class="table__wrapper ${classList}">
      <slot></slot>
    </div>
    ${isCTA ? '</div>' : ''}
    ${isExportable ? '<button class="link" type="button" data-export>Export table as CSV</button>' : ''}
    <div class="table__pagination"></div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

  }

	connectedCallback() {

    const params = new URLSearchParams(window.location.search)
    // Set default attributes
    if(!this.hasAttribute('data-total'))
      this.setAttribute('data-total', this.querySelectorAll('table tbody tr').length);

    if(!this.hasAttribute('data-page'))
      this.setAttribute('data-page', (params.has('page') ? params.get('page') : 1));

    if(!this.hasAttribute('data-show'))
      this.setAttribute('data-show', 15);

    if(!this.hasAttribute('data-increment'))
      this.setAttribute('data-increment', 15);

    this.setAttribute('data-pages', Math.ceil(this.getAttribute('data-total') / this.getAttribute('data-show')));

    this.table = this.querySelector('table');
    this.savedTableBody = this.table.querySelector('tbody').cloneNode(true);
    this.pagination = this.shadowRoot.querySelector('.table__pagination');

    // Set events on the filter table
    this.form = document.createElement('form');
    if(this.hasAttribute('data-filterby')){

      this.form = document.querySelector(`#${this.getAttribute('data-filterby')}`);
    }
    else {
      
      this.table.parentNode.insertBefore(this.form, this.table.nextSibling);
    }

    // Set ajax class
    if(this.form.hasAttribute('data-ajax'))
      this.table.classList.add('table--ajax');

    // Create a data list if a search input is present
    tableModule.createSearchDataList(this.table, this.form);

    if(!this.form.querySelector('[data-page]')){
      this.form.innerHTML += `<input name="page" type="hidden" value="${this.getAttribute('data-page')}" data-pagination="true" />`
    }
    if(!this.form.querySelector('[data-show]')){
      this.form.innerHTML += `<input name="show" type="hidden" value="${this.getAttribute('data-show')}" data-show="true" />`
    }

    // Event listeners
    tableModule.addTableEventListeners(this.table);
    tableModule.addFilterEventListeners(this.table, this.form, this.pagination, this, this.savedTableBody);
    tableModule.addPaginationEventListeners(this.table, this.form, this.pagination, this);
    tableModule.addExportEventListeners(this.shadowRoot.querySelector('[data-export]'), this.table);

    if(this.form.getAttribute('data-ajax')){
      tableModule.loadAjaxTable(this.table, this.form, this.pagination, this);
    }
    else {
      tableModule.makeTableFunctional(this.table, this.form, this.pagination, this);
      tableModule.filterTable(this.table, this.form,this);
      createPaginationButttons(this,this.pagination);
      tableModule.populateDataQueries(this.table, this.form);
    }

    this.shadowRoot.querySelector('.table__wrapper').addEventListener("scroll", (event) => {

      if(this.table.querySelector('dialog[open]')){
        
        this.table.querySelector('dialog[open]').close();
        this.table.querySelector('.dialog__wrapper > button.active').classList.remove('active');
      }

    });
  }


  static get observedAttributes() {
    return ["data-total","data-pages","data-page","data-show"];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    /*
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

        tableModule.filterTable(this.table, this.form);
        createPaginationButttons(this,this.pagination);

        break;
      }
      case "data-page": {

        let paginationInput = this.form.querySelector('[data-pagination]');

        paginationInput.value = newVal;
        
        //tableModule.filterTable(this.table, this.form);

        break;
      }
    }
    */
  }
}

export default iamTable;