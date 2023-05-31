// @ts-nocheck
import createPaginationButttons from "../../modules/pagination";

class iamPagination extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import "${assetLocation}/css/core.min.css";
    </style>
    <div class="pagination__wrapper d-none">
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Set default attributes
    const params = new URLSearchParams(window.location.search);

    if(!this.hasAttribute('data-total'))
      this.setAttribute('data-total', this.querySelectorAll('table tbody tr').length);

    if(!this.hasAttribute('data-page'))
      this.setAttribute('data-page', (params.has('page') ? params.get('page') : 1));

    if(!this.hasAttribute('data-show'))
      this.setAttribute('data-show', (params.has('show') ? params.get('show') : 15));

    if(!this.hasAttribute('data-increment'))
        this.setAttribute('data-increment', 15);

    this.setAttribute('data-pages', Math.ceil(this.getAttribute('data-total') / this.getAttribute('data-show')));
    createPaginationButttons(this,this.shadowRoot.querySelector('.pagination__wrapper'));
  }

	connectedCallback() {
    this.shadowRoot.querySelector('.pagination__wrapper').classList.remove('d-none');
  }
}

export default iamPagination;