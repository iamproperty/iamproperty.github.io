import iamTableAdvanced from '../../js/components/table-advanced/table-advanced.component.min.js';
import iamPagination from '../../js/components/pagination/pagination.component.min.js';
import iamMap from '../../js/components/map/map.component.min.js';

class iamVisProperties extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/visualisations/properties.visualisation.css";`;
    const loadExtraCSS = `@import "${assetLocation}/css/visualisations/properties.global.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */`
    <style>
    ${loadCSS}
    </style>

    <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous">
    <link rel="preload" href="https://iamproperty.github.io/assets/fonts/qanelas-medium-webfont.woff2" as="font" type="font/woff2" />
    <link rel="preload" href="https://iamproperty.github.io/assets/fonts/qanelas-bold-webfont.woff2" as="font" type="font/woff2" />

    <span class="h4"><span id="count"></span> Properties most likely to switch</span>

    <div id="map-wrapper">Map here</div>

    <div id="table-wrapper">Table here</div>

    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

    document.head.insertAdjacentHTML('beforeend', `<style id="tableAdvancedExtras">/* Empty */</style>`);


    const table = this.querySelector('table');
    const tableWrapper = this.shadowRoot?.querySelector('#table-wrapper');
    const mapWrapper = this.shadowRoot?.querySelector('#map-wrapper');
    const countElement = this.shadowRoot?.querySelector('#count');

    countElement?.innerHTML = table?.querySelectorAll('tbody tr').length.toString() || '0';

    table?.setAttribute('id','properties-table');

    if (tableWrapper && table)
      tableWrapper.innerHTML = `<iam-table-advanced>${table.outerHTML}</iam-table-advanced>`;

    if(mapWrapper)
      mapWrapper.innerHTML = `<iam-map data-for="properties-table"></iam-map>`;

    const tableAdvanced = this.shadowRoot?.querySelector('iam-table-advanced');
    const map = this.shadowRoot?.querySelector('iam-map');
  }
}


document.addEventListener('DOMContentLoaded', (): void => {

  if (!window.customElements.get(`iam-vis-properties`))
    window.customElements.define(`iam-vis-properties`, iamVisProperties);

  if (!window.customElements.get(`iam-pagination`) && iamPagination)
    window.customElements.define(`iam-pagination`, iamPagination);

  if (!window.customElements.get(`iam-table-advanced`) && iamTableAdvanced)
    window.customElements.define(`iam-table-advanced`, iamTableAdvanced);

  if (!window.customElements.get(`iam-map`) && iamMap)
    window.customElements.define(`iam-map`, iamMap);

});

