
class iamAppInsights extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/apps/insights.app.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */`
    <style>
    ${loadCSS}
    </style>

    <strong class="d-block pb-3"><span id="count"></span> <span id="count-text"></span></strong>

    <div id="map-wrapper"></div>

    <div id="table-wrapper">Loading table...</div>`;

    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  createTableContent = (component: HTMLElement, table: HTMLTableElement): string => {

    return /* HTML */`
    <p class="pb-2" id="criteria-match-key">
      <strong class="me-1">Criteria match key: </strong>
      <span class="text-heading me-1" id="full-match">Full match</span>
      <span class="text-heading me-1" id="partial-match">Partial match</span>
    </p>

    <iam-notification id="branch-notification" class="mt-2 mb-4 d-none" type="info" data-dismiss>
      <i class="fa-solid fa-circle text-info" slot="icon"></i>
      <span class="text-heading">Some bulk actions are disabled</span>
      Some actions are disabled because they require the items to be from the same branch. If you wish to apply these actions, please filter on a specific branch or select items for the same branch in the table below..
    </iam-notification>

    <iam-table-advanced data-selectall>
      <iam-actionbar slot="before" data-selectall data-disable-responsive>
        <div id="criteria-match-wrapper"></div>
      </iam-actionbar>
      ${table.outerHTML}
      <iam-pagination slot="pagination"></iam-pagination>
    </iam-table-advanced>`;
  };

  getBranch = (row: HTMLTableRowElement, branchColumn: string | null): string | null => {
    if (!row) return null;

    // Check the rows dataset
    if(branchColumn && row.hasAttribute(`data-${branchColumn}`)) return row.getAttribute(`data-${branchColumn}`);

    // If not in the dataset, check the cell with the branch column label
    if(branchColumn && row.querySelector(`td[data-label="${branchColumn}"]`)) return row.querySelector(`td[data-label="${branchColumn}"]`)?.textContent?.trim() || null;

    return null;
  };

  isMultiBranchSelected = (component: HTMLElement, table: HTMLTableElement | null): boolean => {
    if (!table) return false;

    const selectedRows = table.querySelectorAll('tbody tr:has(.selectrow input:checked):not(.filtered)');

    const branchColumn = component.getAttribute('data-branch-column');
    const branchArray = Array.from(selectedRows).map(row => this.getBranch(row as HTMLTableRowElement, branchColumn)).filter(branch => branch !== null);

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

        setTimeout(() => {
          // #region Create print campaign button / branch notification
          if(createPrintCampaignButton && this.isMultiBranchSelected(this,table)) {
            notification?.classList.remove('d-none');
            createPrintCampaignButton.setAttribute('disabled', 'true');
          }
          else {
            notification?.classList.add('d-none');
            createPrintCampaignButton?.removeAttribute('disabled');
          }
          // #endregion
        }, 100);


        setTimeout(() => {

          const dispatchedEvent = new CustomEvent('update-height', {
            detail: {
              height: this.offsetHeight
            },
          });
          this.dispatchEvent(dispatchedEvent);
        }, 1000);
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

            dataKeyValueObject.columns = {};
            for (const cell of Array.from(row.cells)) {
              const columnLabel = cell.getAttribute('data-label');
              if (columnLabel) dataKeyValueObject.columns[columnLabel] = cell.innerText.trim();
            }

            properties.push(dataKeyValueObject);
          }
        }
        event.target?.setAttribute('disabled', 'true');

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

    if(!this.querySelector('table tr[data-latitude][data-longitude]'))
      return '';

    return `<iam-map data-for="properties-table"></iam-map>`;
  };

  fixOriginalTable = (table: HTMLTableElement): HTMLTableElement => {

    if (!table) return table;

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

    tableWrapper.innerHTML = this.createTableContent(component, table);
    mapWrapper.innerHTML = this.createMapContent();

    this.setEvents();

    const dispatchedEvent = new CustomEvent('component-loaded', {
      detail: {
        height: component.offsetHeight
      },
    });

    component.dispatchEvent(dispatchedEvent);

    setTimeout(() => {

      const dispatchedEvent = new CustomEvent('update-height', {
        detail: {
          height: component.offsetHeight
        },
      });
      component.dispatchEvent(dispatchedEvent);
    }, 1000);
  };

  setCounterText = (component, text): void => {
    const counterText = this.shadowRoot?.querySelector('#count-text');
    if(counterText) {
      counterText.innerHTML = text || '';
    }
  };

  createActionButtons = (component, actions): void => {
    const actionbar = this.shadowRoot?.querySelector('iam-actionbar');

    actions.forEach(action => {

      actionbar?.insertAdjacentHTML('beforeend', /* HTML */`<button class="btn btn-action" data-action="${action.action}" id="${action.action}-btn" slot="selected">${action.label}</button>`);
    });
  };

  createMatchCriteriaFilter = (component, matchCriteriaColumn, matchCriteriaIndicatorColumn): void => {

    if(!matchCriteriaColumn) return;

    const table = this.shadowRoot?.querySelector('table');

    table?.querySelector('thead tr').insertAdjacentHTML('afterbegin', /* HTML */`<th data-label="Match criteria" class="d-none">Match criteria</th>`);

    table?.querySelectorAll('tbody tr').forEach(row => {
      const criteriaMatch = row.getAttribute(`data-${matchCriteriaColumn}`);
      const criteriaMatchValue = criteriaMatch?.toLocaleLowerCase().replace('match', '').trim() || '';
      row.insertAdjacentHTML('afterbegin', /* HTML */`<td data-label="Match criteria" class="d-none" data-value="${criteriaMatchValue}">${criteriaMatchValue}</td>`);

      // Highlight the match criteria indicator column, the CSS will then create the circle indicator based on the data-value attribute of the match criteria column
      const indicatorCell = row.querySelector(`td[data-label="${matchCriteriaIndicatorColumn}"]`);
      if(indicatorCell) {
        indicatorCell.innerHTML = `<i class="criteria-match-indicator" data-value="${criteriaMatchValue}"></i>${indicatorCell.innerHTML}`;
      }
    });

    const criteriaMatchWrapper = this.shadowRoot?.querySelector('#criteria-match-wrapper');
    criteriaMatchWrapper?.innerHTML = /* HTML */`<button class="btn btn-action" popovertarget="criteria-match" style="anchor-name: --criteria-match;">Criteria match</button>
      <iam-menu id="criteria-match" popover style="position-anchor: --criteria-match;">
        <fieldset data-filters='[{"operator": "equals", "type": "text"}]' data-column="Match criteria">
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
  };

  createPopupTitles = (component, popupTitleColumn): void => {
    if(!popupTitleColumn) return;

    const shadowTable = this.shadowRoot?.querySelector('table');

    shadowTable?.querySelectorAll(`tbody tr td[data-label="${popupTitleColumn}"]`).forEach(cell => {
      cell.setAttribute('data-popup-title', 'true');
    });

    // We have to recreate the map at this point because the popup titles are used in the map component to show the title of the popup when a marker is clicked. The map component is created before the popup titles are set, so we need to recreate the map component to ensure that the popup titles are set correctly.
    const mapWrapper = component.shadowRoot?.querySelector('#map-wrapper');
    mapWrapper.innerHTML = this.createMapContent();
  };

  createActionTitles = (component, actionTitleColumn): void => {
    if(!actionTitleColumn) return;

    console.log(actionTitleColumn);

    const shadowTable = this.shadowRoot?.querySelector('table');

    shadowTable?.querySelectorAll(`tbody tr td[data-label="${actionTitleColumn}"]`).forEach(cell => {
      const row = cell.closest('tr');
      row.setAttribute('data-action-title', cell.querySelector('.td__content') ? cell.querySelector('.td__content').textContent : cell.textContent);
    });

  };

  createMultibranchFlag = (component, branchColumn): void => {
    if(!branchColumn) return;

    component.setAttribute('data-branch-column', branchColumn);
  };

  createCTAs = (component, ctaIdColumn, ctaUrlStructure, ctaText): void => {
    if(!ctaIdColumn || !ctaUrlStructure) return;

    const shadowTable = this.shadowRoot?.querySelector('table');

    shadowTable?.querySelector('thead tr')?.insertAdjacentHTML('beforeend', `<th class="th__fixed text-nowrap"></th>`);

    shadowTable?.querySelectorAll(`tbody tr`).forEach(row => {

      //if(row?.querySelector(`td[data-label="${ctaIdColumn}"]`)) {
        //const ctaCell = row.querySelector(`td[data-label="${ctaIdColumn}"]`);
        //const ctaId = ctaCell?.querySelector('.td__content') ? ctaCell.querySelector('.td__content').textContent : ctaCell?.textContent;
        const ctaId = ':id'; //temporary placeholder for CTA ID

        row?.insertAdjacentHTML('beforeend', `<td class="td__fixed"><a href="${ctaUrlStructure.replace('{ctaId}', ctaId)}" class="text-nowrap">${ctaText ?? 'View property'}</a></td>`);
      //}
    });
  };

  connectedCallback(): void {

    const tableWrapper = this.shadowRoot?.querySelector('#table-wrapper');
    const table = this.querySelector('table');
    const createComponent = this.createComponent;

    // The top window will give details about the insight, including the actions that should be available and the criteria match for the properties in the table. This is sent from the top window to this component via a postMessage event.
    this.addEventListener('top-window-details', (event: CustomEvent) => {

      if(event.detail && event.detail.properties && event.detail.properties.class)
        this.classList.add(event.detail.properties.class);

      this.setCounterText(this, event.detail.properties['counter-text']);
      this.createActionButtons(this, event.detail.actions);
      this.createMatchCriteriaFilter(this, event.detail.properties['match-criteria-column'],event.detail.properties['title-column']);
      this.createPopupTitles(this, event.detail.properties['title-column']);
      this.createActionTitles(this, event.detail.properties['title-column']);
      this.createMultibranchFlag(this, event.detail.properties['branch-column']);
      this.createCTAs(this, event.detail.properties['cta-id-column'], event.detail.properties['cta-url-structure'], event.detail.properties['cta-text']);
    });

    // When the insight action has been completed, re-enable the button that was clicked
    this.addEventListener('insight-action-completed', (event: CustomEvent) => {
      this.shadowRoot?.querySelector(`[data-action="${event.detail.action}"]`)?.removeAttribute('disabled');
      this.shadowRoot?.querySelector('iam-actionbar')?.setAttribute('data-selected', '0');
    });

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

  }
}

export default iamAppInsights;
