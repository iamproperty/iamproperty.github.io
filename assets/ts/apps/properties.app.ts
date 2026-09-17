import iamTableAdvanced from '../../js/components/table-advanced/table-advanced.component.min.js';
import iamPagination from '../../js/components/pagination/pagination.component.min.js';
import iamActionbar from '../../js/components/actionbar/actionbar.component.min.js';
import iamMenu from '../../js/components/menu/menu.component.min.js';
import iamMap from '../../js/components/map/map.component.min.js';

class iamAppProperties extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/apps/properties.app.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */`
    <style>
    ${loadCSS}
    </style>

    <span class="h4"><span id="count"></span> Properties most likely to switch</span>

    <div id="map-wrapper">Map here</div>

    <p class="pb-1">
      <strong class="me-1">Criteria match key: </strong>
      <span class="text-heading me-1"><i class="fa-solid fa-circle text-complete"></i> Full match</span>
      <span class="text-heading me-1"><i class="fa-solid fa-circle text-warning"></i> Partial match</span>
    </p>
    <div id="table-wrapper">Table here</div>`;

    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  createTableContent = (table: HTMLTableElement): string => {


    const criteriaMatch = `<button class="btn btn-action" popovertarget="criteria-match" style="anchor-name: --criteria-match;">Criteria match</button>
      <iam-menu id="criteria-match" popover style="position-anchor: --criteria-match;">
        <fieldset data-filters='[{"operator": "equals", "type": "text"}]' data-column="Criteria match">
          <label>
            All Criteria <input type="radio" name="criteria" value="" checked/>
          </label>
          <label>
            Full match <input type="radio" name="criteria" value="full" />
          </label>
          <label>
            Partial match <input type="radio" name="criteria" value="partial" />
          </label>
        </fieldset>
      </iam-menu>`;

    return `<iam-table-advanced data-selectall>
      <iam-actionbar slot="before" data-selectall>
        ${criteriaMatch}
        <button data-v-7d119115="" class="btn btn-action fa-box-archive show" slot="selected">Archive</button>
      </iam-actionbar>
      ${table.outerHTML}
      <iam-pagination slot="pagination"></iam-pagination>
    </iam-table-advanced>`;
  };

  createMapContent = (): string => {
    return `<iam-map data-for="properties-table"></iam-map>`;
  };

  connectedCallback(): void {

    const table = this.querySelector('table');
    const tableWrapper = this.shadowRoot?.querySelector('#table-wrapper');
    const mapWrapper = this.shadowRoot?.querySelector('#map-wrapper');
    const countElement = this.shadowRoot?.querySelector('#count');

    countElement?.innerHTML = table?.querySelectorAll('tbody tr').length.toString() || '0';

    if (table){

      table.setAttribute('id','properties-table');
      tableWrapper.innerHTML = this.createTableContent(table);
      mapWrapper.innerHTML = this.createMapContent();

      const dispatchedEvent = new CustomEvent('component-loaded', {
        detail: {
          height: this.offsetHeight
        },
      });
      this.dispatchEvent(dispatchedEvent);
    }


    //const tableAdvanced = this.shadowRoot?.querySelector('iam-table-advanced');
    //const map = this.shadowRoot?.querySelector('iam-map');

    // HTML Observer
    const htmlUpdated = (mutationList: any, observer: any): void => {
      observer.disconnect();

      console.log(mutationList);

      for (const mutation of mutationList) {
        if (
          mutation.type == 'characterData' ||
          (mutation.type == 'childList' && mutation.addedNodes.length) ||
          mutation.type === 'attributes'
        ) {

          if (this.querySelector('table') && tableWrapper.querySelector('iam-table-advanced') === null) {

            const table = this.querySelector('table');
            table.setAttribute('id','properties-table');
            tableWrapper.innerHTML = this.createTableContent(table);
            mapWrapper.innerHTML = this.createMapContent();

            const dispatchedEvent = new CustomEvent('component-loaded', {
              detail: {
                height: this.offsetHeight
              },
            });
            this.dispatchEvent(dispatchedEvent);
          }

        }
      }


      observer.observe(this, { childList: true, characterData: true, subtree: true, attributes: true });
    };

    const observer = new MutationObserver(htmlUpdated);
    observer.observe(this, { childList: true, characterData: true, subtree: true, attributes: true });
  }
}

document.addEventListener('DOMContentLoaded', (): void => {

  if (!window.customElements.get(`iam-properties-insights`) && iamAppProperties)
    window.customElements.define(`iam-properties-insights`, iamAppProperties);

  if (!window.customElements.get(`iam-pagination`) && iamPagination)
    window.customElements.define(`iam-pagination`, iamPagination);

  if (!window.customElements.get(`iam-actionbar`) && iamActionbar)
    window.customElements.define(`iam-actionbar`, iamActionbar);

  if (!window.customElements.get(`iam-table-advanced`) && iamTableAdvanced)
    window.customElements.define(`iam-table-advanced`, iamTableAdvanced);

  if (!window.customElements.get(`iam-menu`) && iamMenu)
    window.customElements.define(`iam-menu`, iamMenu);

  if (!window.customElements.get(`iam-map`) && iamMap)
    window.customElements.define(`iam-map`, iamMap);

});



