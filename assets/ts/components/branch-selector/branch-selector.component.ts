class iamBranchSelector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/branch-selector.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = /* HTML */ `
      <style>
        ${loadCSS}
      </style>
      <link rel="stylesheet" href="https://kit.fontawesome.com/8bd0fca975.css" crossorigin="anonymous" />
      <div class="wrapper">
        <button
          id="menuButton"
          class="btn btn-action"
          popovertarget="dropdown"
          aria-haspopup="true"
          aria-controls="dropdown"
          style="anchor-name: --dropdown;"
        >
          <i class="fa-regular fa-building-circle-check"></i>
          <span class="indicator"></span>
          <span class="selected">Branch</span>
        </button>
        <div
          class="dropdown"
          part="dropdown"
          id="dropdown"
          style="position-anchor: --dropdown;"
          role="menu"
          popover="auto"
        >
          <slot></slot>
        </div>
      </div>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {


    const wrapper = this.shadowRoot?.querySelector('.wrapper');

    if(this.querySelector('button:first-child:last-child')){

      wrapper.innerHTML = '<i class="fa-regular fa-building-circle-check"></i><span class="indicator"></span><slot></slot>';

      if (this.hasAttribute('data-indicator'))
        wrapper?.querySelector('span.indicator').setAttribute('data-indicator', this.getAttribute('data-indicator'));

      return false;
    }


    const menuButton = this.shadowRoot?.querySelector('#menuButton');
    const dropdown = this.shadowRoot?.querySelector('#dropdown');

    let selected = this.querySelector('input:checked')
      ? this.querySelector('input:checked')
      : this.querySelector('input'); // By default the first input is checked if an input hasn't been checked on load
    selected.checked = true;

    menuButton?.querySelector('span.selected').textContent = selected?.closest('label').textContent;
    menuButton?.setAttribute('data-checked-count', this.querySelectorAll('input:checked').length - 1);

    if (this.hasAttribute('data-indicator'))
      menuButton?.querySelector('span.indicator').setAttribute('data-indicator', this.getAttribute('data-indicator'));

    // Make sure the correct classes and attributes are set on each item
    Array.from(this.querySelectorAll(':scope > label:has(input)')).forEach((item) => {
      item.classList.add('dropdown__option');
      item.setAttribute('title', item.textContent); // Set a title on all labels
    });

    // If all of the inputs are disabled then disable the button
    if (this.querySelectorAll('input:disabled').length && !this.querySelectorAll('input:not(:disabled)').length)
      menuButton?.setAttribute('disabled', 'disabled');

    this.addEventListener('change', (): void => {
      selected = this.querySelector('input:checked')
        ? this.querySelector('input:checked')
        : this.querySelector('input');
      selected.checked = true;

      menuButton?.querySelector('span.selected').innerHTML = selected?.closest('label').textContent;
      menuButton?.setAttribute('data-checked-count', this.querySelectorAll('input:checked').length - 1);

      if (this.querySelectorAll('input[type="checkbox"]:checked').length == 1) {
        selected?.closest('label').classList.add('pe-none');
      } else if (this.querySelectorAll('input[type="checkbox"]:checked').length > 1) {
        this.querySelector('label.pe-none')?.classList.remove('pe-none');
      }
    });

    // Desktop menu button
    menuButton?.addEventListener('click', (e) => {
      if (this.hasAttribute('slot') && this.getAttribute('slot') == 'account') {
        e.preventDefault();
        this.classList.toggle('branch-selector-inline');
      }
    });

    // Make the component focusable

    this.addEventListener('keydown', (event) => {
      switch (
        event.key // change to event.key to key to use the above variable
      ) {
        case 'ArrowUp':
          // Up pressed
          event.preventDefault();

          if (!dropdown?.matches(':popover-open')) {
            menuButton.click();
            this.querySelector('input').focus();
          }

          break;
        case 'ArrowDown':
          // Down pressed
          event.preventDefault();

          if (!dropdown?.matches(':popover-open')) {
            menuButton.click();
            this.querySelector('input').focus();
          }

          break;
      }
    });
  }
}

export default iamBranchSelector;
