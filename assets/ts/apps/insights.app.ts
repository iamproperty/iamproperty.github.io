import { filterAdvancedTable } from '../modules/table';

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
    <style>.empty-state { display: none; }</style>
    <style>
    ${loadCSS}
    </style>

    <div class="wrapper" aria-busy="true">
      <strong class="d-block pb-3 insight-count">Showing <span id="count"></span> <span id="count-text"></span></strong>


      <div id="map-wrapper"></div>

      <div id="table-wrapper">Loading table...</div>
    </div>
    <div class="empty-state">
      <img src="/img/illustrations/estate-agents.png" alt="" loading="lazy" />
      <span class="lead text-heading">No results found</span>
    </div>`;

    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    this.rowlimit = 500;
  }



  createTableContent = (component: HTMLElement, table: HTMLTableElement): string => {

    const tempTbody = document.createElement('tbody') as HTMLTableSectionElement;
    table.querySelectorAll('tbody tr:not(.filtered)').forEach((row, index)=> {

      if (index >= 15) return;

      tempTbody.appendChild(row.cloneNode(true));
    });

    const tempTable = document.createElement('table') as HTMLTableElement;
    tempTable.innerHTML = `<thead>${table.querySelector('thead')?.innerHTML || ''}</thead><tbody>${tempTbody.innerHTML}</tbody>`;


    return /* HTML */`
    <p class="pb-2 d-none" id="criteria-match-key">
      <strong class="me-1">Criteria match key: </strong>
      <span class="text-heading me-1" id="full-match">Full match</span>
      <span class="text-heading me-1" id="partial-match">Partial match</span>
    </p>

    <iam-notification id="branch-notification" class="mt-2 mb-4 d-none" type="info">
      <i class="fa-solid fa-circle-info text-info" slot="icon"></i>
      <span class="text-heading">Some bulk actions are disabled</span>
      Some actions are disabled because they require the items to be from the same branch. If you wish to apply these actions, please filter on a specific branch or select items for the same branch in the table below..
    </iam-notification>

    <iam-table-advanced data-selectall>
      <iam-actionbar slot="before" data-selectall data-disable-responsive>
        <div id="criteria-match-wrapper"></div>
      </iam-actionbar>
      ${tempTable.outerHTML}
    </iam-table-advanced>
    <iam-pagination data-page-jump="true" data-per-page="true" data-item-count="true"></iam-pagination>
    `;
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
    const table = this.shadowRoot?.querySelector('iam-table-advanced table') as HTMLTableElement | null;
    const originalTable = this.querySelector('table') as HTMLTableElement | null;
    const tableComponent = this.shadowRoot?.querySelector('iam-table-advanced') as HTMLElement | null;
    const actionbar = this.shadowRoot?.querySelector('iam-actionbar');
    const pagination = this.shadowRoot?.querySelector('iam-pagination');
    const notification = this.shadowRoot?.getElementById('branch-notification');
    const countElement = this.shadowRoot?.querySelector('#count');
    const mapWrapper = this.shadowRoot?.querySelector('#map-wrapper');

    if (actionbar && notification) {
      // Example event listener
      actionbar.addEventListener('selected', () => {

        const createPrintCampaignButton = actionbar.querySelector('[data-action="create-print-campaign"]');

        setTimeout(() => {
          // #region Create print campaign button / branch notification
          if(actionbar.hasAttribute('data-selected') && actionbar.getAttribute('data-selected') === 'all') {
            // TODO: make this smarter and actually check if more than one branch is selected in the original table
            notification?.classList.remove('d-none');
            createPrintCampaignButton.setAttribute('disabled', 'true');
          }
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


        let selectedRows = table?.querySelectorAll('tbody tr:has(.selectrow input:checked):not(.filtered)');

        // When selecting all rows we need to collect the row data from the orininal table instead of the shadow dom table
        // We will need to do some fixing of the table so we can pass the correct data to the action handler
        if(actionbar?.hasAttribute('data-selected') && actionbar.getAttribute('data-selected') === 'all') {

          const colHeadings = Array.from(originalTable.querySelectorAll('thead th'));

          originalTable?.querySelectorAll('tbody tr').forEach(row => {

            const cells = Array.from(row.querySelectorAll('th, td'));
            cells.forEach((cell, cellIndex) => {
              const heading = colHeadings[cellIndex];
              if (typeof heading != 'undefined') {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = heading.querySelector('.th__content')?.innerHTML ? heading.querySelector('.th__content')?.innerHTML : heading.innerHTML;
                const headingText = tempDiv.textContent || tempDiv.innerText || '';
                cell.setAttribute('data-label', headingText);
              }
            });
          });
          selectedRows = originalTable?.querySelectorAll('tbody tr:not(.filtered)');
        }

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

        console.log(properties);

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

    tableComponent.addEventListener('table-filtered', (event) => {

      const initialCount = tableComponent?.querySelector('table')?.querySelectorAll('tbody tr:not(.filtered)').length.toString() || '0';
      countElement?.innerHTML = initialCount;

      const countTextElement = this.shadowRoot?.querySelector('#count-text');

      if(parseInt(initialCount) == 1) {

        countTextElement?.innerHTML = /* HTML */`property`;
      }
      else if(parseInt(initialCount) < this.rowlimit) {

        countTextElement?.innerHTML = /* HTML */`properties`;
      }
      else {

        countTextElement?.innerHTML = /* HTML */`of properties available <iam-tooltip title="Some properties may not be in your initial view and we recommend filtering to reveal them."><i class="fa-solid fa-circle-info" slot="icon"></i></iam-tooltip>`;
      }

      mapWrapper.innerHTML = this.createMapContent();

      const tableFilteredEvent = new CustomEvent('table-filtered', {
        detail: event.detail
      });


      // Apply advanced table filtering to original table based on the current state of the table component

      filterAdvancedTable(tableComponent, originalTable, actionbar, pagination, false);

      //this.dispatchEvent(tableFilteredEvent);
    });
  };

  createMapContent = (): string => {

    if(!this.querySelector('table tr[data-latitude][data-longitude]'))
      return '';

    return `<iam-map data-for="properties-table"></iam-map>`;
  };

  fixOriginalTable = (table: HTMLTableElement): HTMLTableElement => {

    if (!table) return table;

    // Add data-label attributes to table headings and corresponding cells
    // data-label is used for cross referencing between original table and the shadow table
    table.querySelectorAll('th').forEach((heading, index) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = heading.querySelector('.th__content')?.innerHTML ? heading.querySelector('.th__content')?.innerHTML : heading.innerHTML;
      const headingText = tempDiv.textContent || tempDiv.innerText || '';
      heading.setAttribute('data-label', headingText);
    });
    // Give the table formatting info
    table.querySelectorAll('th[data-field-type="date_date"]').forEach(th => th.setAttribute('data-format', 'date'));
    table.querySelectorAll('th[data-value-format-name="gbp_0"]').forEach(th => th.setAttribute('data-format', 'price'));

    return table;
  };

  createComponent = (component, table): void => {

    const tableWrapper = component.shadowRoot?.querySelector('#table-wrapper');
    const mapWrapper = component.shadowRoot?.querySelector('#map-wrapper');
    const countElement = component.shadowRoot?.querySelector('#count');

    table.setAttribute('id','properties-table');
    table = this.fixOriginalTable(table);

    tableWrapper.innerHTML = this.createTableContent(component, table);
    mapWrapper.innerHTML = this.createMapContent();


    /* Set the property column to fixed */
    tableWrapper?.querySelector('table th[data-label="Property"]')?.classList.add('th--fixed');
    tableWrapper?.querySelectorAll('table td[data-label="Property"]')?.forEach(element => {
      element.classList.add('td--fixed');
    });

    this.setEvents();

    // Absence of rows is only an empty result once the table is constructed.
    // This also keeps the loading message visible while AJAX supplies the table.
    this.shadowRoot?.querySelector('.wrapper')?.setAttribute('aria-busy', 'false');

    const dispatchedEvent = new CustomEvent('component-loaded', {
      detail: {
        height: component.offsetHeight
      },
    });

    component.dispatchEvent(dispatchedEvent);

    const initialCount = table?.querySelectorAll('tbody tr:not(.filtered)').length.toString() || '0';



    /* #region Pagination */
    const paginationElement = component.shadowRoot?.querySelector('iam-pagination');
    console.log(paginationElement);
    paginationElement?.setAttribute('data-total', initialCount);
    paginationElement?.setAttribute('data-page', '1');
    let newShow = 15;

    const uniqueID = (index = 1): number => {
      const ID = Math.floor(Math.random() * Date.now() * (index + 1));

      return ID;
    };



    const updatePagination = (newPage: number, newShow: number):void => {
      const tempTbody = document.createElement('tbody') as HTMLTableSectionElement;
      table.querySelectorAll('tbody tr:not(.filtered)').forEach((row, index)=> {

        if (index < newShow * (newPage - 1) || index >= newShow * (newPage - 1) + newShow) return;

        const newRow = row.cloneNode(true) as HTMLTableRowElement;
        const rowID = uniqueID(index);

        newRow.insertAdjacentHTML('afterbegin', `<td class="td--fixed td--expand" data-label="" data-previous-col-widths="0" style="--left-offset: 0px;"><button class="btn btn-compact btn-secondary btn-sm fa-chevron-down" data-expand-button="" data-index="0">Expand</button></td>`);

        newRow.insertAdjacentHTML(
            'afterbegin',
            `<td class="td--fixed selectrow selected"><input type="checkbox" name="row" id="row${rowID}" ${row.hasAttribute('data-selected') ? `checked="true"` : ''}/><label for="row${rowID}"><span class="visually-hidden">Select row</span></label></td>`
          );

        tempTbody.appendChild(newRow);
      });

      const tempTable = document.createElement('table') as HTMLTableElement;
      tempTable.innerHTML = `<thead>${table.querySelector('thead')?.innerHTML || ''}</thead><tbody>${tempTbody.innerHTML}</tbody>`;

      tableWrapper?.querySelector('table tbody').innerHTML = tempTbody.innerHTML;
      tableWrapper?.querySelector('table tbody')?.querySelectorAll('td[data-label="Property"]')?.forEach(element => {
        element.classList.add('td--fixed');
      });

      this.createCTAs(component, component.getAttribute('data-cta-url-structure'), component.getAttribute('data-cta-text'));
      this.hideNullValues();
      this.updateMatchCriteriaIndicators(component, component.getAttribute('data-match-criteria-column'), component.getAttribute('data-match-criteria-indicator-column'));
      this.createPopupTitles(component, component.getAttribute('data-popup-title-column'));
      this.createActionTitles(component, component.getAttribute('data-action-title-column'));
    }

    paginationElement.addEventListener('update-page', (event: Event) => {
      const customEvent = event as CustomEvent;
      const newPage = customEvent.detail.page;

      updatePagination(newPage, parseInt(paginationElement.getAttribute('data-show') || '15', 10));
    });

    paginationElement.addEventListener('update-show', (event: Event) => {
      const customEvent = event as CustomEvent;
      newShow = customEvent.detail.show;

      updatePagination(1, newShow);
    });


    /* #endregion Pagination */



    countElement?.innerHTML = initialCount;

    const countTextElement = component.shadowRoot?.querySelector('#count-text');

    if(parseInt(initialCount) == 1) {

      countTextElement?.innerHTML = /* HTML */`property`;
    }
    else if(parseInt(initialCount) < this.rowlimit) {

      countTextElement?.innerHTML = /* HTML */`properties`;
    }
    else {

      countTextElement?.innerHTML = /* HTML */`of properties available <iam-tooltip title="Some properties may not be in your initial view and we recommend filtering to reveal them."><i class="fa-solid fa-circle-info" slot="icon"></i></iam-tooltip>`;
    }

    const tooltip = component.shadowRoot?.querySelector('iam-tooltip');
    if(tooltip) {
      tooltip.setAttribute('title', 'Some properties may not be in your initial view and we recommend filtering to reveal them.');
    }


    setTimeout(() => {

      const dispatchedEvent = new CustomEvent('update-height', {
        detail: {
          height: component.offsetHeight
        },
      });
      component.dispatchEvent(dispatchedEvent);
    }, 1000);
  };

  createActionButtons = (component, actions): void => {
    const actionbar = this.shadowRoot?.querySelector('iam-actionbar');

    actions.forEach(action => {

      const icon = action.action == "export-table-data" ? `<i class="fa-regular fa-file-export"></i>` : ``;
      actionbar?.insertAdjacentHTML('beforeend', /* HTML */`<button class="btn btn-action" data-action="${action.action}" id="${action.action}-btn" slot="selected">${icon}${action.label}</button>`);
    });
  };

  createMatchCriteriaFilter = (component, matchCriteriaColumn, matchCriteriaIndicatorColumn): void => {

    if(!matchCriteriaColumn) return;

    if(!component.hasAttribute('data-match-criteria-column'))
      component.setAttribute('data-match-criteria-column', matchCriteriaColumn);
    if(!component.hasAttribute('data-match-criteria-indicator-column'))
      component.setAttribute('data-match-criteria-indicator-column', matchCriteriaIndicatorColumn);

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

  showCriteriaMatchKey = (component, matchCriteriaColumn): void => {

    if(!matchCriteriaColumn) return;
    const criteriaMatchKey = this.shadowRoot?.querySelector('#criteria-match-key');
    if(criteriaMatchKey) {
      criteriaMatchKey.classList.remove('d-none');
    }
  };

  createPopupTitles = (component, popupTitleColumn): void => {
    if(!popupTitleColumn) return;

    if(!component.hasAttribute('data-popup-title-column'))
      component.setAttribute('data-popup-title-column', popupTitleColumn);

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

    if(!component.hasAttribute('data-action-title-column'))
      component.setAttribute('data-action-title-column', actionTitleColumn);

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

  createCTAs = (component, ctaUrlStructure, ctaText): void => {
    if(!ctaUrlStructure) return;

    if(!component.hasAttribute('data-cta-url-structure'))
      component.setAttribute('data-cta-url-structure', ctaUrlStructure);
    if(!component.hasAttribute('data-cta-text') && ctaText)
      component.setAttribute('data-cta-text', ctaText);


    const searches = [];
    let ctaLink = ctaUrlStructure;
    let areSearchesMet = true;

    if(ctaUrlStructure.toLowerCase().includes(':udprn'))
      searches.push('udprn');
    if(ctaUrlStructure.toLowerCase().includes(':umrrn'))
      searches.push('umrrn');
    if(ctaUrlStructure.toLowerCase().includes(':appraisalid'))
      searches.push('appraisalid');
    if(ctaUrlStructure.toLowerCase().includes(':transactionid'))
      searches.push('transactionid');
    if(ctaUrlStructure.toLowerCase().includes(':transaction'))
      searches.push('transaction');

    const shadowTable = this.shadowRoot?.querySelector('table');

    if(!shadowTable?.querySelector('thead tr th.cta-link-container'))
      shadowTable?.querySelector('thead tr')?.insertAdjacentHTML('beforeend', `<th class="th--fixed text-nowrap cta-link-container"></th>`);

    shadowTable?.querySelectorAll(`tbody tr`).forEach(row => {

      ctaLink = ctaUrlStructure.toLowerCase();

      searches.forEach(search => {
        let datasetSearch = search;

        // Update the datasearch to match looker columns
        if(search == "appraisalid")
          datasetSearch = 'appraisal-id';
        else if(search == "transactionid")
          datasetSearch = 'transaction-id';
        else if(search == "transaction")
          datasetSearch = 'mb-transaction-id';


        if(row.hasAttribute('data-' + datasetSearch.toLowerCase()) && row.getAttribute('data-' + datasetSearch.toLowerCase()) !== '') {
          ctaLink = ctaLink.toLowerCase().replace(`:${search.toLowerCase()}`, row.getAttribute('data-' + datasetSearch.toLowerCase()));
        } else {
          areSearchesMet = false;
        }
      });

      //if(areSearchesMet)
        row?.insertAdjacentHTML('beforeend', `<td class="td--fixed text-nowrap"><a href="${ctaLink}" class="link text-nowrap" target="_blank">${ctaText ?? 'View details'}</a></td>`);
      //else
      //  row?.insertAdjacentHTML('beforeend', `<td class="td--fixed"><button class="link text-nowrap" disabled title="Required data not available">${ctaText ?? 'View details'}</button></td>`);
    });
  };

  hideNullValues(): void {
    const shadowTable = this.shadowRoot?.querySelector('table');
    shadowTable?.querySelectorAll('tbody tr td[data-original-value="∅"]').forEach(td => td.innerText = '');
  }

  connectedCallback(): void {

    const tableWrapper = this.shadowRoot?.querySelector('#table-wrapper');
    const table = this.querySelector('table');
    const createComponent = this.createComponent;

    // The top window will give details about the insight, including the actions that should be available and the criteria match for the properties in the table. This is sent from the top window to this component via a postMessage event.
    this.addEventListener('top-window-details', (event: CustomEvent) => {

      if(event.detail && event.detail.properties && event.detail.properties.class)
        this.classList.add(event.detail.properties.class);

      //this.setCounterText(this, event.detail.properties['counter-text']);
      this.hideNullValues();
      this.createActionButtons(this, event.detail.actions);
      this.createMatchCriteriaFilter(this, event.detail.properties['match-criteria-column'],event.detail.properties['title-column']);
      this.showCriteriaMatchKey(this, event.detail.properties['match-criteria-column']);
      this.createPopupTitles(this, event.detail.properties['title-column']);
      this.createActionTitles(this, event.detail.properties['title-column']);
      this.createMultibranchFlag(this, event.detail.properties['branch-column']);
      this.createCTAs(this, event.detail.properties['cta-url-structure'], event.detail.properties['cta-text']);
    });

    // When the insight action has been completed, re-enable the button that was clicked
    this.addEventListener('insight-action-completed', (event: CustomEvent) => {
      this.shadowRoot?.querySelector(`[data-action="${event.detail.action}"]`)?.removeAttribute('disabled');
      //this.shadowRoot?.querySelector('iam-actionbar')?.setAttribute('data-selected', '0'); // This also clears the seleted items in the table
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

          console.log('hi3');

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
