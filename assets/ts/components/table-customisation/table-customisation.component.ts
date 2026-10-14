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
      <button class="btn btn-action" type="button" popovertarget="dialog">Customise</button>
      <dialog id="dialog" popover>
        <div id="options"></div>

        <div id="dialog-actions">
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

    if (!tableComponent) {
      console.error('No table component found');
      this.shadowRoot.innerHTML = '';
      return;
    }

    const dialog = this.shadowRoot.querySelector('dialog');
    const cancelButton = this.shadowRoot.querySelector('#cancel-button');
    const resetButton = this.shadowRoot.querySelector('#reset-button');
    const saveButton = this.shadowRoot.querySelector('#save-button');
    const optionsContainer = this.shadowRoot.querySelector('#options');
    // Load the data from the saved customisation settings if available
    const savedCustomisation = tableComponent.getAttribute('data-customisation') || '{}';
    const customisation = JSON.parse(savedCustomisation);


    // Review the table header to create the customisation options for each column


    // Generate the customisation options based on the table headers
    optionsContainer?.innerHTML = '';
    const headers = tableComponent.querySelectorAll('thead th');
    headers.forEach((header, index) => {
      const columnId = header.getAttribute('data-column-id') || `column-${index}`;
      const isVisible = customisation[columnId] !== undefined ? customisation[columnId] : true;

      const columnHeader = header.querySelector('.th__content') ? header.querySelector('.th__content')!.textContent || '' : header.textContent || '';

      if(columnHeader) {
        const option = document.createElement('label');
        option.innerHTML = `
          <input type="checkbox" data-column-id="${columnId}" ${isVisible ? 'checked' : ''}>
            ${columnHeader}
        `;
        optionsContainer.appendChild(option);
      }
    });


    // Actions and events
    cancelButton.addEventListener('click', () => dialog.close());
    resetButton.addEventListener('click', () => dialog.close());
    saveButton.addEventListener('click', () => dialog.close());
  }
}

export default iamTableCustomisation;
