import { uniqueID } from "../../modules/helpers";

class iamTableCustomisation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';

    const loadCSS = `@import "${assetLocation}/css/components/table-customisation.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */`
    <style>
    ${loadCSS}

    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="wrapper">
      <button id="customisation-button" class="btn btn-action" type="button" popovertarget="dialog" ${this.hasAttribute('data-open') ? 'aria-expanded="true"' : 'aria-expanded="false"'}>
        <slot name="icon"></slot>
        <span id="title">Customise</span>
        <slot name="icon-after"></slot>
      </button>
      <dialog id="dialog" popover>
        <div class="spinner" id="spinner"></div>
        <span class="h4" id="fetching-data">Fetching data</span>

        <div id="options"></div>
        <div id="dialog-actions" >
          <button id="reset-button" class="btn btn-action border-0" type="button">Reset to default</button>
          <button id="cancel-button" class="btn btn-action" type="button">Cancel</button>
          <button id="save-button" class="btn btn-action btn-primary" type="button">Save</button>
        </div>
      </dialog>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

    // Component only works when it is placed inside a table component
    const tableComponent = this.closest('iam-table, iam-table-advanced, iam-table-ajax');
    const tableElement = tableComponent?.querySelector('table');

    if (!tableComponent || !tableElement) {
      console.error('No table component found');
      this.shadowRoot.innerHTML = '';
      return;
    }

    const titleElement = this.shadowRoot.querySelector('#title');
    const dialog = this.shadowRoot.querySelector('dialog');
    const cancelButton = this.shadowRoot.querySelector('#cancel-button');
    const resetButton = this.shadowRoot.querySelector('#reset-button');
    const saveButton = this.shadowRoot.querySelector('#save-button');
    const optionsContainer = this.shadowRoot.querySelector('#options');

    // Force the dialog to be open
    if(this.hasAttribute('data-open')) {
      dialog?.setAttribute('open', '');
      dialog?.setAttribute('popover-open', '');
      dialog?.showPopover();
    }

    const setDataLabel = ():void => {
      tableElement.querySelectorAll('thead th').forEach((header, index) => {
        const columnHeader = header.querySelector('.th__content') ? header.querySelector('.th__content')!.textContent || '' : header.textContent || '';
        const columnId = header.getAttribute('data-column-id') || `column-${index}`;

        const cells = tableElement.querySelectorAll(`tbody td:nth-child(${index + 1})`);
        cells.forEach(cell => {
          cell.setAttribute('data-column-id', columnId);
          cell.setAttribute('data-label', columnHeader);
        });

        header.setAttribute('data-column-id', columnId);
        header.setAttribute('data-label', columnHeader);
      });
    }

    const hideColumns = (customisation) => {
      customisation.forEach(column => {
        const columnLabel = column.label;

        let isVisible = true;
        if(column.isVisible !== undefined) {
          isVisible = column.isVisible;
        }
        const header = tableElement.querySelector(`thead th[data-label="${columnLabel}"]`);
        const cells = tableElement.querySelectorAll(`tbody td[data-label="${columnLabel}"]`);
        if(header) header.classList.toggle('d-none', !isVisible);
        cells.forEach(cell => cell.classList.toggle('d-none', !isVisible));
      });
    }

    const getColumnsWithCustomisation = (tableElement, customisation): Array<{label: string, order: number, isVisible: boolean, isDisabled: boolean}> => {

      const headers = tableElement.querySelectorAll('thead th:not(.selectrow-heading)');


      // Add customisation data for each column based on the headers
      const columns = Array.from(headers).map(header => {

        const columnCustomisation = customisation.find(col => col.label === header.getAttribute('data-label')) || {};

        const isVisible = columnCustomisation.isVisible !== undefined ? columnCustomisation.isVisible : true; // True by default if not specified
        let isDisabled = columnCustomisation.isDisabled !== undefined ? columnCustomisation.isDisabled : false; // False by default if not specified
        if(header.classList.contains('th--fixed')) {
          isDisabled = true;
        }

        let order = columnCustomisation.order !== undefined ? columnCustomisation.order : 0;

        // Make sure the last column stays at the end if it is fixed and has no specific order
        if(order === 0 && header.classList.contains('th--fixed') && header.matches(':last-child')) {
          order = 999;
        }

        return {
          label: header.getAttribute('data-label'),
          order: order,
          isVisible: isVisible,
          isDisabled: isDisabled
        };
      });

      columns.sort((a, b) => a.order - b.order);
      return columns;
    }

    const createOrderButtons = (columnHeader: string): string => {
      const upButton = document.createElement('button');
      upButton.type = 'button';
      upButton.className = 'btn btn-secondary btn-compact btn-sm btn-up';
      upButton.textContent = 'Up';

      const downButton = document.createElement('button');
      downButton.type = 'button';
      downButton.className = 'btn btn-secondary btn-compact btn-sm btn-down';
      downButton.textContent = 'Down';

      const container = document.createElement('div');
      container.appendChild(upButton);
      container.appendChild(downButton);

      return container.outerHTML;
    }

    const createDialogOptions = (tableElement, customisation):string => {
      const columns = getColumnsWithCustomisation(tableElement, customisation);

      let returnString = '';

      columns.forEach((column, index) => {
        const columnHeader = column.label;
        const isVisible = column.isVisible;
        const isDisabled = column.isDisabled;

        if(columnHeader) {

          const option = document.createElement('div');
          option.className = 'customisation-option';

          // Create a label with a checkbox for the column customisation option
          const label = document.createElement('label');
          label.innerHTML = /*HTML*/`<input type="checkbox" data-for="${columnHeader}" ${isVisible ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>${columnHeader}`;
          option.appendChild(label);

          // Create up and down buttons for reordering columns
          if(this.hasAttribute('data-orderable')) {
            const orderButtonsHTML = createOrderButtons(columnHeader);
            option.innerHTML += orderButtonsHTML;
          }

          returnString += option.outerHTML;
        }
      });
      return returnString;
    }

    const updateColumnOrder = (customisation): void => {

      tableElement.classList.add('table--ordered');

      const gridTemplateColumns = Array.from(tableElement.querySelectorAll('thead tr th:not(.d-none,.expand-button-heading)')).map((heading) =>
        {
          if (heading.classList.contains('th--fixed')) {
            return 'min-content';
          }
          return 'auto';
        }
      ).join(' ');

      tableElement.style.setProperty('--grid-template-columns', gridTemplateColumns);
      let columnCount = tableElement.querySelectorAll('thead tr th:not(.d-none,.expand-button-heading)').length;
      // Make sure the selectall column is counted even if it hasn't been added yet
      if (tableComponent.querySelector('iam-actionbar[data-selectall]') && !tableElement.querySelector('thead tr th.selectrow-heading')) {
        columnCount += 1;
      }
      tableElement.style.setProperty('--column-count', columnCount);

      tableElement.querySelectorAll('tbody tr').forEach((row, index) => {
        row.style.setProperty('--grid-row', index+2);
      });

      const columns = getColumnsWithCustomisation(tableElement, customisation);

      columns.forEach((column, index) => {

        if (column && typeof column.order !== 'undefined') {
          const cells = tableElement.querySelectorAll(`:is(th,td)[data-label="${column.label}"]`);
          cells.forEach(cell => {
            cell.style.setProperty('--order', column.order.toString());
          });
        }
      });
    }

    // #region set the title if attribute is provided
    if (this.hasAttribute('data-title') && titleElement) {
      titleElement.textContent = this.getAttribute('data-title') || '';
    }
    // #endregion

    // #region Create icons for the table customisation button
    if (!this.querySelector('[slot="icon"]')) {
      const icon = document.createElement('i');
      icon.className = 'fa-regular fa-cog';
      icon.slot = 'icon';
      this.appendChild(icon);
    }
    if (!this.querySelector('[slot="icon-after"]')) {
      const iconAfter = document.createElement('i');
      iconAfter.className = 'fa-regular fa-chevron-down';
      iconAfter.slot = 'icon-after';
      this.appendChild(iconAfter);
    }
    // #endregion


    // #region load customisation settings from data attribute so we can set initial customisation or load customisation settings from local storage if available
    let customisation = [];
    if(this.hasAttribute('data-customisation')) {
      customisation = JSON.parse(this.getAttribute('data-customisation'));
    }

    if(this.hasAttribute('data-save')) {

      // generate a selector for the table customisation
      if(tableElement && tableElement.id) {
        this.setAttribute('data-for', tableElement.id.replace('table-', ''));
      }
      // Else, if the table element does not have an ID, rely on the data-index attribute for identification
      document.querySelectorAll('iam-table-customisation').forEach((customisationElement, index) => {
        customisationElement.setAttribute('data-index', index.toString());
      });

      const tableCustomisationSelector = this.getAttribute('data-for') ? `iam-table-customisation[data-for="${this.getAttribute('data-for')}"]` : `${this.getAttribute('data-index') ? `iam-table-customisation[data-index="${this.getAttribute('data-index')}"]` : ''}`;

      this.setAttribute('data-selector', tableCustomisationSelector);

      const localStorageKey = `${this.getAttribute('data-selector') || ''}@${window.location.pathname}`;
      const savedCustomisation = localStorage.getItem(localStorageKey) || '[]';

      if(savedCustomisation) {
        customisation = JSON.parse(savedCustomisation);
      }
    }
    // #endregion

    // #region setup the component
    // Make sure the data labels are set correctly so we can connect the things together easier
    setDataLabel();

    // Generate the customisation options based on the table headers
    optionsContainer?.innerHTML = createDialogOptions(tableElement,customisation);

    // Apply the customisation to the table
    hideColumns(customisation);

    // Update the table layout based on the current customisation
    updateColumnOrder(customisation);
    // #endregion

    // #region Option reordering event listeners
    optionsContainer.addEventListener('click', (event) => {

      if (event.target.matches('.btn-up')) {
        const optionElement = (event.target as HTMLElement).closest('.customisation-option');
        //console.log(optionElement);
        if (optionElement && optionElement.previousElementSibling) {
          const previousOption = optionElement.previousElementSibling;
          if(previousOption.querySelector('input[type="checkbox"]:not(:disabled)')) {
            optionElement.parentNode.insertBefore(optionElement, previousOption);
          }
        }
      }

      if (event.target.matches('.btn-down')) {
        const optionElement = (event.target as HTMLElement).closest('.customisation-option');
        if (optionElement && optionElement.nextElementSibling) {
          const nextOption = optionElement.nextElementSibling;
          if(nextOption.querySelector('input[type="checkbox"]:not(:disabled)')) {
            optionElement.parentNode.insertBefore(nextOption, optionElement);
          }
        }
      }
    });
    // #endregion

    // #region Actions and events
    cancelButton.addEventListener('click', () => {

      this.dispatchEvent(new CustomEvent('table-customisation-cancelled'));
      // Reload the original customisation options
      optionsContainer?.innerHTML = createDialogOptions(tableElement,customisation);

      dialog.hidePopover();
    });

    resetButton.addEventListener('click', () => {
      // Reset the customisation settings by either removing the settings from local storage or updating the data attribute on the component itself
      if(this.hasAttribute('data-customisation')) {
        this.setAttribute('data-customisation', '[]');
      }

      localStorage.removeItem(localStorageKey);
      this.dispatchEvent(new CustomEvent('table-customisation-reset'));


      optionsContainer?.innerHTML = createDialogOptions(tableElement,[]);
      dialog.hidePopover();
    });

    const saveCustomisation = ():void => {
      const newCustomisation: Array<{ label: string, isVisible: boolean, isDisabled: boolean, order: number }> = [];
      // Save the current customisation settings
      const checkboxes = optionsContainer.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox, index) => {
        newCustomisation.push({ label: checkbox.getAttribute('data-for') || '', isVisible: (checkbox as HTMLInputElement).checked, isDisabled: (checkbox as HTMLInputElement).disabled, order: index });
      });

      customisation = newCustomisation;
      // Save the new customisation settings to either local storage or the data attribute on the component itself
      if(this.hasAttribute('data-customisation')) {
        this.setAttribute('data-customisation', JSON.stringify(newCustomisation));
      }
      else {
        localStorage.setItem(localStorageKey, JSON.stringify(newCustomisation));
      }

      const saveEvent = new CustomEvent('table-customisation-saved', { detail: newCustomisation });
      this.dispatchEvent(saveEvent);
    }

    saveButton.addEventListener('click', () => {
      saveCustomisation();
      optionsContainer?.innerHTML = createDialogOptions(tableElement, customisation);
      hideColumns(customisation);
      updateColumnOrder(customisation);
      dialog.hidePopover();
    });
    // #endregion

    // #region update the table on change
    // If the component does not have the 'data-save' attribute, update the table immediately
    // We want the saving of the customisation to have a visual change so the user knows something has been done
    if(!this.hasAttribute('data-save')) {
      optionsContainer?.addEventListener('change', () => {
        const checkboxes = optionsContainer.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
          const label = checkbox.getAttribute('data-for') || '';
          const customisationItem = customisation.find(item => item.label === label);
          if(customisationItem) {
            customisationItem.isVisible = (checkbox as HTMLInputElement).checked;
          }
        });
        hideColumns(customisation);
        updateColumnOrder(customisation);
      });
    }
    // #endregion
  }
}

export default iamTableCustomisation;
