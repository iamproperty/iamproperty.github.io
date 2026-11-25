import { InsightsDataController, insightsMapDisabled, readInsightsSnapshot } from '../modules/insights-data';

class iamAppInsights extends HTMLElement {
  rowlimit = 500;
  private dataController: InsightsDataController | null = null;
  private dataSourceMarkup: string | null = null;
  private dataDetails: Parameters<InsightsDataController['configure']>[0] | null = null;

  private renderedInputMarkup: string | null = null;
  private renderedPreparedMarkup: string | null = null;
  private renderedTable: HTMLTableElement | null = null;
  private renderedBranches: string[] = [];
  private renderedRowLimit: number | undefined;
  private sourceObserver: MutationObserver | null = null;
  private componentEvents: AbortController | null = null;

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

    <div class="wrapper">


      <div class="insights-header pb-2">
        <strong class="d-block insight-count"><span id="count"></span> <span id="count-text"></span></strong>
        <div id="view-controls" class="d-none">

          <label class="tag tag--toggle"><input type="radio" name="view" value="split"><i class="fa-regular fa-table-columns"></i> Split</label>
          <label class="tag tag--toggle"><input type="radio" name="view" value="list"><i class="fa-regular fa-list"></i> List</label>
          <label class="tag tag--toggle"><input type="radio" name="view" value="map"><i class="fa-regular fa-map"></i> Map</label>
        </div>
      </div>


      <div id="branch-wrapper"></div>

      <div id="map-wrapper"></div>


      <iam-notification id="branch-notification" class="mt-2 mb-4 d-none" type="info" data-dismiss>
        <i class="fa-solid fa-circle-info text-info" slot="icon"></i>
        <strong>The print campaign action is unavailable for multiple branches</strong><br/>
        You can still select properties to create CRM tasks or export data. To create a print campaign, select a single branch.
      </iam-notification>
      <div id="table-wrapper">

      </div>
    </div>
    <div class="empty-state">
      <img src="/img/illustrations/estate-agents.png" alt="" loading="lazy" />
      <span class="lead text-heading">No results found</span>
    </div>`;

    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  createTableContent = (component: HTMLElement, table: HTMLTableElement): string => {

    // Newer visualisations supply rows as HTML on the body rather than mounted rows.
    // Assemble the markup without parsing every encoded row into a temporary DOM.
    // Shallow copies preserve table/body metadata and leave the Looker payload intact.
    let tableMarkup: string;
    if (table.querySelector('tbody[data-html]')) {
      const shell = table.cloneNode(false) as HTMLTableElement;
      const children = Array.from(table.children).map((child) => {
        if (child.tagName !== 'TBODY' || !child.hasAttribute('data-html')) return child.outerHTML;
        const body = child.cloneNode(false) as HTMLTableSectionElement;
        body.removeAttribute('data-html');
        return body.outerHTML.replace(/<\/tbody>$/, () => `${child.getAttribute('data-html') || ''}</tbody>`);
      });
      tableMarkup = shell.outerHTML.replace(/<\/table>$/, () => `${children.join('')}</table>`);
    } else {
      tableMarkup = table.outerHTML;
    }

    return /* HTML */`
    <p class="pb-2 d-none" id="criteria-match-key">
      <strong class="me-1">Criteria match key: </strong>
      <span class="text-heading me-1" id="full-match">Full match</span>
      <span class="text-heading me-1" id="partial-match">Partial match</span>
    </p>

    <iam-table-advanced data-selectall>
      <iam-actionbar slot="before" data-selectall data-disable-responsive>
        <div id="criteria-match-wrapper"></div>
      </iam-actionbar>
      ${tableMarkup}
      <iam-pagination slot="pagination" data-page-jump="true" data-per-page="true" data-item-count="true"></iam-pagination>
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
    const table = this.shadowRoot?.querySelector('iam-table-advanced table') as HTMLTableElement | null;
    const tableComponent = this.shadowRoot?.querySelector('iam-table-advanced') as HTMLElement | null;
    const actionbar = this.shadowRoot?.querySelector('iam-actionbar');
    const notification = this.shadowRoot?.getElementById('branch-notification');
    const countElement = this.shadowRoot?.querySelector('#count');
    const mapWrapper = this.shadowRoot?.querySelector('#map-wrapper');

    const initialCountOnload = tableComponent?.querySelector('table')?.querySelectorAll('tbody tr:not(.filtered)').length.toString() || '0';
    const needToReload = parseInt(initialCountOnload) >= this.rowlimit;

    if (actionbar && notification) {
      // Example event listener
      actionbar.addEventListener('selected', () => {

        const createPrintCampaignButton = actionbar.querySelector('[data-action="create-print-campaign"]');

        setTimeout(() => {
          // #region Create print campaign button / branch notification
          if(createPrintCampaignButton && this.isMultiBranchSelected(this,table)) {
            notification?.classList.remove('d-none');
            //createPrintCampaignButton.setAttribute('disabled', 'true');
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
        //event.target?.setAttribute('disabled', 'true');

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
        detail: { ...event.detail, reload: needToReload }
      });

      this.dispatchEvent(tableFilteredEvent);

      // Update the height
      setTimeout(() => {
        const dispatchedEvent = new CustomEvent('update-height', {
          detail: {
            height: this.offsetHeight
          },
        });
        this.dispatchEvent(dispatchedEvent);
      }, 300);
    });
  };


  createMapContent = (): string => {

    console.log('createMapContent called');

    console.log('insightsMapDisabled:', insightsMapDisabled(this));

    if (insightsMapDisabled(this)) return '';

    // Load the table from the shadow root so the table formatting is correct and CTA's created
    const table = this.shadowRoot?.querySelector('table');
    table.setAttribute('id','properties-table');

    if(!table.querySelector('tr[data-latitude][data-longitude]'))
      return '';

    this.setAttribute('data-view', 'split');

    return `<iam-map data-for="properties-table"></iam-map>`;
  };

  createBranchContent = (): string => {

    const options = Array.from(this.querySelectorAll('table th[data-label="Branch"]')).map(th => th.innerText);


    return `<iam-branch-selector data-for="properties-table"></iam-branch-selector>`;
  };

  createComponent = (component, table, trigger = 'initial'): void => {

    // Adapt the existing HTML transport by default; retain an explicit HTML rollback.
    const dataMode = this.getAttribute('data-renderer') !== 'html';

    if (dataMode) {
      const started = performance.now();
      const markup = this.createTableContent(component, table);
      if (this.dataController && markup === this.dataSourceMarkup) {
        this.dataController.ready();
        if ((window as Window & { __iamInsightsProfile?: boolean }).__iamInsightsProfile) {
          console.info('[iam Insights data renderer]', JSON.stringify({ reused: true, records: this.dataController.snapshot.records.length, mountedRows: this.dataController.host.querySelectorAll('tbody tr[data-row-id]').length }));
        }
        return;
      }
      let snapshot: ReturnType<typeof readInsightsSnapshot> | null = null;
      try {
        snapshot = readInsightsSnapshot(markup);
      } catch (error) {
        console.warn('[iam Insights data renderer] Using HTML renderer:', error instanceof Error ? error.message : String(error));
      }
      this.dataController?.disconnect();
      this.dataController = null;
      this.dataSourceMarkup = null;
      if (snapshot) {

        if(!insightsMapDisabled(this))
          this.setAttribute('data-view', 'split');

        this.dataController = new InsightsDataController(this, snapshot);
        this.dataSourceMarkup = markup;
        if (this.dataDetails) this.dataController.configure(this.dataDetails);
        this.dataController.ready();
        if ((window as Window & { __iamInsightsProfile?: boolean }).__iamInsightsProfile) console.info('[iam Insights data renderer]', JSON.stringify({
          records: snapshot.records.length,
          mountedRows: this.dataController.host.querySelectorAll('tbody tr[data-row-id]').length,
          setupMs: Math.round(performance.now() - started),
          mapEnabled: !insightsMapDisabled(this),
          reused: false,
        }));
        return;
      }
    }

    const profileWindow = window as Window & {
      __iamInsightsProfile?: boolean;
      __iamInsightsBuildSequence?: number;
      __iamInsightsPreviousSource?: { owner: HTMLElement; rows: string; header: string };
    };
    const profile = profileWindow.__iamInsightsProfile;
    const build = profile ? (profileWindow.__iamInsightsBuildSequence = (profileWindow.__iamInsightsBuildSequence || 0) + 1) : 0;
    const setupStarted = performance.now();
    let sourceProfile: {
      trigger: string;
      sameComponentAsPreviousBuild: boolean;
      inputRowsUnchanged: boolean;
      inputHeaderUnchanged: boolean;
    } | undefined;
    if (profile) {
      const previous = profileWindow.__iamInsightsPreviousSource;
      const rows = Array.from(table.tBodies as HTMLCollectionOf<HTMLTableSectionElement>)
        .map((body) => body.getAttribute('data-html') ?? body.innerHTML).join('\n');
      const header = table.querySelector('thead')?.outerHTML || '';
      sourceProfile = {
        trigger,
        sameComponentAsPreviousBuild: previous?.owner === this,
        inputRowsUnchanged: previous?.rows === rows,
        inputHeaderUnchanged: previous?.header === header,
      };
      profileWindow.__iamInsightsPreviousSource = { owner: this, rows, header };
    }
    const logLifecycle = (reused: boolean): void => {
      if (!profile) return;
      const ready = performance.now();
      console.info('[iam Insights lifecycle]', JSON.stringify({
        build,
        ...sourceProfile,
        reused,
        frameStartEpochMs: Math.round(performance.timeOrigin),
        setupStartEpochMs: Math.round(performance.timeOrigin + setupStarted),
        readyEpochMs: Math.round(performance.timeOrigin + ready),
        setupMs: Math.round(ready - setupStarted),
      }));
    };
    const timings: Array<{ stage: string; elapsedMs: number }> = [];
    const measure = (stage: string, started: number): void => {
      if (profile) timings.push({ stage, elapsedMs: Math.round(performance.now() - started) });
    };

    const tableWrapper = this.shadowRoot?.querySelector('#table-wrapper');
    const mapWrapper = this.shadowRoot?.querySelector('#map-wrapper');
    const branchWrapper = this.shadowRoot?.querySelector('#branch-wrapper');
    const countElement = this.shadowRoot?.querySelector('#count');
    const viewControls = this.shadowRoot?.querySelector('#view-controls');

    const inputMarkup = this.createTableContent(component, table);
    if (trigger === 'source-update' && this.renderedTable &&
      tableWrapper?.querySelector('table') === this.renderedTable &&
      this.renderedRowLimit === this.rowlimit &&
      (inputMarkup === this.renderedInputMarkup || inputMarkup === this.renderedPreparedMarkup)) {
      // Keep the existing selection, filters, view and listeners when Looker repeats
      // the same source. Acknowledge readiness so the update protocol still completes.
      if (profile) console.info('[iam Insights profile] Unchanged source reused');
      const height = component.offsetHeight;
      logLifecycle(true);
      component.dispatchEvent(new CustomEvent('component-loaded', {
        detail: { height, branches: [...this.renderedBranches], reused: true },
      }));
      setTimeout(() => component.dispatchEvent(new CustomEvent('update-height', {
        detail: { height: component.offsetHeight },
      })), 300);
      return;
    }

    // #region fix original table
    // table.setAttribute('id','properties-table');

    if(table.querySelector('tbody tr td:last-child a:first-child:last-child')){

      const CTAHeading = table.querySelector('thead tr th:last-child');
      CTAHeading.classList.add('th--fixed');
      CTAHeading.innerHTML = '';

      table.querySelectorAll('tbody tr td:last-child a:first-child:last-child').forEach(cta => {
        cta.closest('td').classList.add('td--fixed', 'text-nowrap');
      });
    }

    // Give the table formatting info
    table.querySelectorAll('th[data-field-type="date_date"],th[data-field-type="date"]').forEach(th => th.setAttribute('data-format', 'date'));
    table.querySelectorAll('th[data-field-type="number"]').forEach(th => th.setAttribute('data-format', 'number'));
    table.querySelectorAll('th[data-value-format-name="gbp_0"]').forEach(th => th.setAttribute('data-format', 'price'));
    // #endregion fix original table

    const markupStarted = performance.now();
    const tableMarkup = this.createTableContent(component, table);
    measure('table-markup', markupStarted);
    const tableStarted = performance.now();
    tableWrapper.innerHTML = tableMarkup;
    measure('table-mount-and-setup', tableStarted);
    const mapStarted = performance.now();
    mapWrapper.innerHTML = this.createMapContent();
    measure('map-mount-and-setup', mapStarted);

    // #region set the view controls

    if (insightsMapDisabled(this)) {
      viewControls?.classList.add('d-none');
      this.setAttribute('data-view', 'list');
    } else if(tableWrapper.querySelector('table tr[data-latitude][data-longitude]')) {
      viewControls?.classList.remove('d-none');
      viewControls?.querySelector('[name="view"][value="split"]')?.setAttribute('checked', 'true');
      this.setAttribute('data-view', 'split');
    } else {
      viewControls?.classList.add('d-none');
      this.setAttribute('data-view', 'list');
    }


    viewControls?.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      if(target?.name === 'view') {

        this.setAttribute('data-view', target.value);

        setTimeout(() => {

          const dispatchedEvent = new CustomEvent('update-height', {
            detail: {
              height: this.offsetHeight
            },
          });
          this.dispatchEvent(dispatchedEvent);
        }, 300);
      }
    });

    // #endregion set the view controls


    // #region add titles to the table cells



    tableWrapper.querySelectorAll('thead tr th').forEach(th => {
      const label = th.getAttribute('data-label');
      switch(label) {
        case 'Property':
          th.setAttribute('title', 'Property address');
          break;
        case 'Listing Agent':
          th.setAttribute('title', 'Agent the property is currently listed with');
          break;
        case 'Current Price':
          th.setAttribute('title', 'Current price of the property');
          break;
        case 'Listed Date':
          th.setAttribute('title', 'Date the property was listed');
          break;
        case 'Original Price':
          th.setAttribute('title', 'Original price of the property');
          break;
        case 'Price Reduction':
          th.setAttribute('title', 'Date of the latest price reduction');
          break;
        case 'Days on Market':
          th.setAttribute('title', 'Number of days the property has been on the market');
          break;
        case 'Fall Through':
          th.setAttribute('title', 'Date of the latest fall through');
          break;
      }
    });

    tableWrapper.querySelectorAll('tbody tr td:not([data-label="Property"])').forEach(td => {
      const label = td.getAttribute('data-label');
      if(label) {
        td.setAttribute('title', label);
      }
    });

    // #endregion

    if(table.querySelector('th[data-label="Branch"]')) {
      //branchWrapper?.innerHTML = this.createBranchContent();
    }

    /* Set the property column to fixed */
    tableWrapper?.querySelector('table th[data-label="Property"]')?.classList.add('th--fixed');
    tableWrapper?.querySelectorAll('table td[data-label="Property"]')?.forEach(element => {
      element.classList.add('td--fixed');
    });

    this.setEvents();

    // Absence of rows is only an empty result once the table is constructed.
    // This also keeps the loading message visible while AJAX supplies the table.
    //this.shadowRoot?.querySelector('.wrapper')?.setAttribute('aria-busy', 'false');

    // List all of the branches present in the table, make sure they are unique
    const listBranches = [...new Set(Array.from(tableWrapper.querySelectorAll('tr[data-branch]')).map(el => el.getAttribute('data-branch') || ''))];

    this.renderedInputMarkup = inputMarkup;
    this.renderedPreparedMarkup = tableMarkup;
    this.renderedTable = tableWrapper.querySelector('table');
    this.renderedBranches = listBranches;
    this.renderedRowLimit = this.rowlimit;

    const dispatchedEvent = new CustomEvent('component-loaded', {
      detail: {
        height: component.offsetHeight,
        branches: listBranches
      },
    });

    measure('component-setup-total', setupStarted);
    if (profile) {
      console.info('[iam Insights profile] Component setup complete');
      console.table(timings);
    }
    logLifecycle(false);
    component.dispatchEvent(dispatchedEvent);

    const initialCount = tableWrapper?.querySelector('table')?.querySelectorAll('tbody tr:not(.filtered)').length.toString() || '0';
    countElement?.innerHTML = `${parseInt(initialCount) > 0 ? 'Showing' : ''} ${initialCount}`;

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



    const tooltip = this.shadowRoot?.querySelector('iam-tooltip');
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
    }, 300);
  };

  createActionButtons = (component, actions): void => {
    const actionbar = this.shadowRoot?.querySelector('iam-actionbar');

    actions.forEach(action => {

      const icon = action.action == "export-table-data" ? `<i class="fa-regular fa-file-export"></i>` : ``;
      if(!actionbar?.querySelector('#' + action.action + '-btn')) {
        actionbar?.insertAdjacentHTML('beforeend', /* HTML */`<button class="btn btn-action" data-action="${action.action}" id="${action.action}-btn" slot="selected">${icon}${action.label}</button>`);
        actionbar?.insertAdjacentHTML('beforeend', /* HTML */`<button class="btn btn-action" disabled title="Select items from the table to use this action.">${icon}${action.label}</button>`);
      }

    });


  };

  createCustomisationButton = (component, customisation): void => {

    if(!customisation) customisation = [];

    const actionbar = this.shadowRoot?.querySelector('iam-actionbar');

    if(!actionbar?.querySelector('iam-table-customisation')) {
      const tableCustomisation = document.createElement('iam-table-customisation');
      tableCustomisation.setAttribute('data-orderable', true);
      tableCustomisation.setAttribute('data-save', true);

      if(customisation && customisation.length > 0)
        tableCustomisation.setAttribute('data-customisation', JSON.stringify(customisation));

      actionbar?.insertAdjacentElement('beforeend', tableCustomisation);

      // Listen for the table customisation saved event and re-dispatch it from the parent component
      tableCustomisation.addEventListener('table-customisation-saved', (event) => {
        this.dispatchEvent(new CustomEvent('table-customisation-saved', { detail: event.detail }));
      });
      tableCustomisation.addEventListener('table-customisation-reset', (event) => {
        this.dispatchEvent(new CustomEvent('table-customisation-reset'));
      });
    }
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

  showCriteriaMatchKey = (component, matchCriteriaColumn): void => {

    if(!matchCriteriaColumn) return;
    const criteriaMatchKey = this.shadowRoot?.querySelector('#criteria-match-key');
    if(criteriaMatchKey) {
      criteriaMatchKey.classList.remove('d-none');
    }
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

  createCTAs = (component, ctaUrlStructure, ctaText, suppliedTable?: HTMLTableElement): void => {
    if(!ctaUrlStructure) return;
    const shadowTable = suppliedTable || this.shadowRoot?.querySelector('table');
    if (!shadowTable || shadowTable.querySelector('[data-cta-heading]')) return;

    const url = ctaUrlStructure.toLowerCase();
    const searches = [
      ['udprn', 'data-udprn'],
      ['umrrn', 'data-umrrn'],
      ['appraisalid', 'data-appraisal-id'],
      ['transactionid', 'data-transaction-id'],
      ['transaction', 'data-mb-transaction-id'],
    ].filter(([token]) => url.includes(`:${token}`));
    const heading = document.createElement('th');
    heading.className = 'th--fixed text-nowrap';
    heading.setAttribute('data-cta-heading', '');
    shadowTable.querySelector('thead tr')?.appendChild(heading);

    // Parse the common label and URL template once; retain rich HTML labels.
    const template = document.createElement('td');
    template.className = 'td--fixed';
    template.innerHTML = `<a href="${url}" class="link text-nowrap" target="_blank" data-cta>${ctaText ?? 'View details'}</a>`;
    const baseUrl = template.firstElementChild.getAttribute('href') || '';
    shadowTable.querySelectorAll('tbody tr').forEach((row) => {
      if (row.querySelector('[data-cta]')) return;
      let href = baseUrl;
      searches.forEach(([token, attribute]) => {
        const value = row.getAttribute(attribute);
        // Keep the existing replacement order and casing behaviour.
        if (value !== null && value !== '') href = href.toLowerCase().replace(`:${token}`, value);
      });
      const cell = template.cloneNode(true) as HTMLTableCellElement;
      cell.firstElementChild.setAttribute('href', href);
      row.appendChild(cell);
    });
  };

  hideNullValues(): void {
    const shadowTable = this.shadowRoot?.querySelector('table');
    shadowTable?.querySelectorAll('tbody tr td[data-original-value="∅"]').forEach((td) => {
      if (td.firstChild) td.textContent = '';
    });
  }

  disconnectedCallback(): void {
    this.sourceObserver?.disconnect();
    this.sourceObserver = null;
    this.componentEvents?.abort();
    this.componentEvents = null;
    this.dataController?.disconnect();
    this.dataController = null;
    this.dataSourceMarkup = null;
  }

  connectedCallback(): void {
    this.componentEvents?.abort();
    this.componentEvents = new AbortController();
    const eventOptions = { signal: this.componentEvents.signal };

    const tableWrapper = this.shadowRoot?.querySelector('#table-wrapper');

    const createComponent = this.createComponent;

    // The top window will give details about the insight, including the actions that should be available and the criteria match for the properties in the table. This is sent from the top window to this component via a postMessage event.
    this.addEventListener('top-window-details', (event: CustomEvent) => {
      this.dataDetails = event.detail;
      if (this.dataController) {
        this.dataController.configure(event.detail || {});
        return;
      }


      const profile = (window as Window & { __iamInsightsProfile?: boolean }).__iamInsightsProfile;
      const started = performance.now();
      const steps: Array<{ stage: string; elapsedMs: number }> = [];
      const configure = (stage: string, action: () => void): void => {
        const stepStarted = performance.now();
        action();
        if (profile) steps.push({ stage, elapsedMs: Math.round(performance.now() - stepStarted) });
      };

      if(event.detail && event.detail.properties && event.detail.properties.class)
        this.classList.add(event.detail.properties.class);

      //this.setCounterText(this, event.detail.properties['counter-text']);
      configure('null-values', () => this.hideNullValues());
      configure('action-buttons', () => this.createActionButtons(this, event.detail.actions));
      configure('customisation-controls', () => this.createCustomisationButton(this, event.detail.customisation));
      //this.createMatchCriteriaFilter(this, event.detail.properties['match-criteria-column'],event.detail.properties['title-column']);
      //this.showCriteriaMatchKey(this, event.detail.properties['match-criteria-column']);
      configure('popup-titles-and-map', () => this.createPopupTitles(this, event.detail.properties['title-column']));
      configure('action-titles', () => this.createActionTitles(this, event.detail.properties['title-column']));
      configure('branch-metadata', () => this.createMultibranchFlag(this, event.detail.properties['branch-column']));
      configure('row-links', () => this.createCTAs(this, event.detail.properties['cta-url-structure'], event.detail.properties['cta-text']));
      if (profile) console.info('[iam Insights configuration profile]', JSON.stringify({
        elapsedMs: Math.round(performance.now() - started),
        steps,
        atEpochMs: Math.round(performance.timeOrigin + performance.now()),
      }));

    }, eventOptions);

    // When the insight action has been completed, re-enable the button that was clicked
    this.addEventListener('insight-action-completed', (event: CustomEvent) => {
      this.shadowRoot?.querySelector(`[data-action="${event.detail.action}"]`)?.removeAttribute('disabled');
      //this.shadowRoot?.querySelector('iam-actionbar')?.setAttribute('data-selected', '0'); // This also clears the seleted items in the table
    }, eventOptions);

    this.addEventListener('table-customisation-saved', (event: CustomEvent) => {
      // Handle table customisation changes here if needed

      this.dispatchEvent(new CustomEvent('insight-action', {
        detail: {
          action: 'table-customisation-saved',
          customisation: event.detail
        },
        bubbles: true,
        composed: true
      }));

      setTimeout(() => {

          const dispatchedEvent = new CustomEvent('update-height', {
            detail: {
              height: this.offsetHeight
            },
          });
          this.dispatchEvent(dispatchedEvent);
        }, 1000);
    }, eventOptions);

    this.addEventListener('table-customisation-reset', (event: CustomEvent) => {
      // Handle table customisation changes here if needed

      this.dispatchEvent(new CustomEvent('insight-action', {
        detail: {
          action: 'table-customisation-reset'
        },
        bubbles: true,
        composed: true
      }));

      setTimeout(() => {

        const dispatchedEvent = new CustomEvent('update-height', {
          detail: {
            height: this.offsetHeight
          },
        });
        this.dispatchEvent(dispatchedEvent);
      }, 1000);
    }, eventOptions);

    const table = this.querySelector('table');
    if (table){

      createComponent(this, table);
    }

    // HTML Observer - needed for when the table is loaded via AJAX or other means after the component has been initialized
    const htmlUpdated = (mutationList: MutationRecord[], observer: MutationObserver): void => {
      observer.disconnect();
      try {
        // A batch can contain several additions for the same final table.
        // Build that final state once, including updates to encoded row payloads.
        const shouldRender = mutationList.some((mutation) =>
          (mutation.type === 'childList' && mutation.addedNodes.length > 0) ||
          (mutation.type === 'attributes' && mutation.attributeName === 'data-html' &&
            (mutation.target as Element).tagName === 'TBODY')
        );
        const table = this.querySelector('table');
        if (table && shouldRender) {
          createComponent(this, table, 'source-update');
        }
      } finally {
        if (this.isConnected) observer.observe(this, { childList: true, characterData: true, subtree: true, attributes: true });
      }
    };

    this.sourceObserver?.disconnect();
    const observer = new MutationObserver(htmlUpdated);
    this.sourceObserver = observer;
    observer.observe(this, { childList: true, characterData: true, subtree: true, attributes: true });

  }
}

export default iamAppInsights;
