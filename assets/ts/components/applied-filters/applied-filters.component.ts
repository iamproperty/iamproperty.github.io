import createAppliedFilters from '../../modules/applied-filters';

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'Applied Filters',
});

class iamAppliedFilters extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/applied-filters.css";`;

    const classList = this.classList.toString();
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    
    ${loadCSS}
    
    </style>
    <div class="applied-filters ${classList}"></div>
    <slot></slot>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    createAppliedFilters(this, this.shadowRoot.querySelector('.applied-filters'));
  }
}

export default iamAppliedFilters;
