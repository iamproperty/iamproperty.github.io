import { trackComponent, trackComponentRegistered } from '../_global';
import { searchAjax, filterList, setTag, addKeyboardEvents } from '../../modules/dropdown';

trackComponentRegistered('iam-tag');

class iamTag extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/tag.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>

    ${loadCSS}
    </style>
    <div class="wrapper">
      <input type="text" name="search" autocomplete="off" />
      <slot name="checked"></slot>
      <div class="admin-panel dropdown" part="dropdown">
        <slot></slot>
      </div>
    </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

    const search = this.shadowRoot.querySelector('input');

    const input = this.querySelector(':checked');
    const inputName = input?.getAttribute('name');
    let tag = this.querySelector('label:has(:checked)');
    setTag(tag);

    // Make sure the dropdown options are set
    Array.from(this.querySelectorAll(':scope > label')).forEach((label) => {
      label.classList.add('dropdown__option');
    });

    
    this.addEventListener('click',()=>{
      if (event && event.target instanceof HTMLElement && event.target.closest('label:has(:checked)')) {
        
        search.focus();
      }
      
    });

    search.addEventListener('input', () => {

      if (this.hasAttribute('data-url')) {
      
        if (search.value.length == 3) {
          searchAjax(this, search, filterList);
        }
      } else {
        filterList(this, search);
      }
    });



    this.addEventListener('change', (event) => {
      if (event && event.target instanceof HTMLElement && event.target.closest('input[type="radio"],input[type="checkbox"]')) {
        const checkbox = event.target.closest('input[type="radio"],input[type="checkbox"]');

        
        tag.checked = false;
        tag.removeAttribute('slot');

        // Set the new tag
        tag = this.querySelector('label:has(:checked)');
        setTag(tag);

        search?.blur();
        search?.value = '';
        filterList(this, search);

        
        // dispatch event

        const changeEvent = new CustomEvent('tag-changed', { 
          detail: {
            value: tag?.querySelector(':checked').value,
            title: tag?.textContent
          } 
        });

        this?.dispatchEvent(changeEvent);
      }
    });

    // TODO Add keyboard actions
    search.addEventListener('keydown', (event) => {

      switch ( event.keyCode ) {
        case 40: // down
          
          console.log('down')
          this.querySelector('label:not([slot="checked"]) input')?.focus();

          break;
      }



    });
    

    addKeyboardEvents(this);
  }
}

export default iamTag;
