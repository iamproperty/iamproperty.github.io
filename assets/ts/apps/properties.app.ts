import iamTableAdvanced from '../../js/components/table-advanced/table-advanced.component.min.js';
import iamPagination from '../../js/components/pagination/pagination.component.min.js';
import iamActionbar from '../../js/components/actionbar/actionbar.component.min.js';
import iamMenu from '../../js/components/menu/menu.component.min.js';
import iamMap from '../../js/components/map/map.component.min.js';
import iamNotification from '../../js/components/notification/notification.component.min.js';

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

    <div id="map-wrapper"></div>

    <div id="table-wrapper">Loading table...</div>`;

    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  createTableContent = (table: HTMLTableElement): string => {

    const criteriaMatch = /* HTML */`<button class="btn btn-action" popovertarget="criteria-match" style="anchor-name: --criteria-match;">Criteria match</button>
      <iam-menu id="criteria-match" popover style="position-anchor: --criteria-match;">
        <fieldset data-filters='[{"operator": "equals", "type": "text"}]' data-column="Match criteria">
          <label>
            All Criteria <input type="radio" name="criteria" value="" checked/>
          </label>
          <label>
            Full match <input type="radio" name="criteria" value="Full" />
          </label>
          <label>
            Partial match <input type="radio" name="criteria" value="Partial" />
          </label>
        </fieldset>
      </iam-menu>`;

    return /* HTML */`
    <p class="pb-1" id="criteria-match-key">
      <strong class="me-1">Criteria match key: </strong>
      <span class="text-heading me-1"><i class="fa-solid fa-circle text-complete"></i> Full match</span>
      <span class="text-heading me-1"><i class="fa-solid fa-circle text-warning"></i> Partial match</span>
    </p>

    <iam-notification id="branch-notification" class="mt-2 mb-4 d-none" type="info" data-dismiss>
      <i class="fa-solid fa-circle text-info" slot="icon"></i>
      <span class="text-heading">Some bulk actions are disabled</span>
      Some actions are disabled because they require the items to be from the same branch. If you wish to apply these actions, please filter on a specific branch or select items for the same branch in the table below..
    </iam-notification>

    <iam-table-advanced data-selectall>
      <iam-actionbar slot="before" data-selectall>
        ${criteriaMatch}
      </iam-actionbar>
      ${table.outerHTML}
      <iam-pagination slot="pagination"></iam-pagination>
    </iam-table-advanced>`;
  };

  getBranchID = (row: HTMLTableRowElement): string | null => {
    if (!row) return null;

    // TODO update this to the correct data attribute for branch ID when available
    if(row.hasAttribute('data-branch')) return row.getAttribute('data-branch');

    return null;
  };

  isMultiBranchSelected = (table: HTMLTableElement | null): boolean => {
    if (!table) return false;

    const selectedRows = table.querySelectorAll('tbody tr:has(.selectrow input:checked):not(.filtered)');
    const branchArray = Array.from(selectedRows).map(row => this.getBranchID(row as HTMLTableRowElement)).filter(branch => branch !== null);

    return [...new Set(branchArray)].length > 1;
  };

  setEvents = (): void => {
    const table = this.shadowRoot?.querySelector('iam-table-advanced table');
    const actionbar = this.shadowRoot?.querySelector('iam-actionbar');
    const notification = this.shadowRoot?.getElementById('branch-notification');

    if (actionbar && notification) {
      // Example event listener
      actionbar.addEventListener('selected', () => {

        const createPrintCampaignButton = actionbar.querySelector('[data-action="create-print-campaign"]');

        // #region Create print campaign button / branch notification
        if(createPrintCampaignButton && this.isMultiBranchSelected(table)) {
          notification?.classList.remove('d-none');
          createPrintCampaignButton.setAttribute('disabled', 'true');
        }
        else {
          notification?.classList.add('d-none');
          createPrintCampaignButton?.removeAttribute('disabled');
        }
        // #endregion
      });

      actionbar.addEventListener('none-selected', () => {
        const createPrintCampaignButton = actionbar.querySelector('[data-action="create-print-campaign"]');

        notification?.classList.add('d-none');
        createPrintCampaignButton?.removeAttribute('disabled');
      });
    }



    // #region actionbar button events
    actionbar.addEventListener('click', (event) => {



      if (event.target && event.target instanceof HTMLElement && event.target.hasAttribute('data-action')) {
        const action = event.target.getAttribute('data-action');


        const selectedRows = table?.querySelectorAll('tbody tr:has(.selectrow input:checked):not(.filtered)');
        const properties = [];

        if (selectedRows) {
          for (const row of Array.from(selectedRows)) {

            const dataKeyValueObject = {};
            for (const item in row.dataset) { dataKeyValueObject[item] = row.dataset[item]; }
            properties.push(dataKeyValueObject);
          }
        }
        event.target?.setAttribute('disabled', 'true');

        console.log(this);

        this.dispatchEvent(new CustomEvent('insight-action', {
          detail: {
            action: action,
            properties: properties
          },
          bubbles: true,
          composed: true
        }));

      }
    });

    // #endregion

  };

  createMapContent = (): string => {
    return `<iam-map data-for="properties-table"></iam-map>`;
  };


  fixOriginalTable = (table: HTMLTableElement): HTMLTableElement => {

    if (!table) return table;

    if(table.querySelector('tbody tr td[data-match-criteria]')){

      table.querySelector('thead tr').insertAdjacentHTML('afterbegin', /* HTML */`<th data-label="Match criteria" class="d-none">Match criteria</th>`);

      table.querySelectorAll('tbody tr').forEach(row => {
        const criteriaMatch = row.getAttribute('data-match-criteria');

        if(criteriaMatch)
          row.insertAdjacentHTML('afterbegin', /* HTML */`<td data-label="Match criteria" class="d-none">${criteriaMatch}</td>`);
      });
    }

    if(table.querySelector('tbody tr td:last-child a:first-child:last-child')){

      const CTAHeading = table.querySelector('thead tr th:last-child');
      CTAHeading.classList.add('th--fixed');
      CTAHeading.innerHTML = '';

      table.querySelectorAll('tbody tr td:last-child a:first-child:last-child').forEach(cta => {
        cta.closest('td').classList.add('td--fixed', 'text-nowrap');
      });
    }

    return table;
  };

  createComponent = (component, table): void => {

    const tableWrapper = this.shadowRoot?.querySelector('#table-wrapper');
    const mapWrapper = this.shadowRoot?.querySelector('#map-wrapper');
    const countElement = this.shadowRoot?.querySelector('#count');

    countElement?.innerHTML = table?.querySelectorAll('tbody tr').length.toString() || '0';
    table.setAttribute('id','properties-table');



    table = this.fixOriginalTable(table);

    tableWrapper.innerHTML = this.createTableContent(table);
    mapWrapper.innerHTML = this.createMapContent();

    //this.checkTopWindow();
    this.setEvents();

    const dispatchedEvent = new CustomEvent('component-loaded', {
      detail: {
        height: component.offsetHeight
      },
    });
    component.dispatchEvent(dispatchedEvent);
  };

  createActionButtons = (component, actions, criteria): void => {
    const actionbar = this.shadowRoot?.querySelector('iam-actionbar');

    actions.forEach(action => {

      actionbar?.insertAdjacentHTML('beforeend', /* HTML */`<button class="btn btn-action" data-action="${action.action}" id="${action.action}-btn" slot="selected">${action.label}</button>`);
    });


  };

  connectedCallback(): void {

    const tableWrapper = this.shadowRoot?.querySelector('#table-wrapper');
    const table = this.querySelector('table');
    const createComponent = this.createComponent;

    if (table){

      createComponent(this, table);
    }

    // HTML Observer - needed for when the table is loaded via AJAX or other means after the component has been initialized
    const htmlUpdated = (mutationList: any, observer: any): void => {
      observer.disconnect();

      for (const mutation of mutationList) {
        if (
          mutation.type == 'characterData' ||
          (mutation.type == 'childList' && mutation.addedNodes.length) ||
          mutation.type === 'attributes'
        ) {

          if (this.querySelector('table') && tableWrapper.querySelector('iam-table-advanced') === null) {

            const table = this.querySelector('table');
            createComponent(this, table);
          }
        }
      }

      observer.observe(this, { childList: true, characterData: true, subtree: true, attributes: true });
    };

    const observer = new MutationObserver(htmlUpdated);
    observer.observe(this, { childList: true, characterData: true, subtree: true, attributes: true });



    // The top window will give details about the insight, including the actions that should be available and the criteria match for the properties in the table. This is sent from the top window to this component via a postMessage event.
    this.addEventListener('top-window-details', (event: CustomEvent) => {

      if(event.detail.class)
        this.classList.add(event.detail.class);

      this.createActionButtons(this, event.detail.actions, event.detail.criteria);
    });

    // When the insight action has been completed, re-enable the button that was clicked
    this.addEventListener('insight-action-completed', (event: CustomEvent) => {
      this.shadowRoot?.querySelector(`[data-action="${event.detail.action}"]`)?.removeAttribute('disabled');
    });

  }
}

document.addEventListener('DOMContentLoaded', (): void => {

  if (!window.customElements.get(`iam-properties-insight`) && iamAppProperties)
    window.customElements.define(`iam-properties-insight`, iamAppProperties);

  if (!window.customElements.get(`iam-pagination`) && iamPagination)
    window.customElements.define(`iam-pagination`, iamPagination);

  if (!window.customElements.get(`iam-actionbar`) && iamActionbar)
    window.customElements.define(`iam-actionbar`, iamActionbar);

  if (!window.customElements.get(`iam-table-advanced`) && iamTableAdvanced)
    window.customElements.define(`iam-table-advanced`, iamTableAdvanced);

  if (!window.customElements.get(`iam-menu`) && iamMenu)
    window.customElements.define(`iam-menu`, iamMenu);

  if (!window.customElements.get(`iam-notification`) && iamNotification)
    window.customElements.define(`iam-notification`, iamNotification);

  if (!window.customElements.get(`iam-map`) && iamMap)
    window.customElements.define(`iam-map`, iamMap);

});



