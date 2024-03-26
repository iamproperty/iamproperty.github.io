// @ts-nocheck

// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  "event": "customElementRegistered",
  "element": "inline edit"
});

class iamInlineEdit extends HTMLElement {

  constructor(){
    super();
    const shadowRoot = this.attachShadow({ mode: 'open'});

    const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
    const coreCSS = document.body.hasAttribute('data-core-css') ? document.body.getAttribute('data-core-css') : `${assetLocation}/css/core.min.css`;
    const loadCSS = `@import "${assetLocation}/css/components/inline-edit.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style class="styles">
    @import "${coreCSS}";
    ${loadCSS}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous">
    
    <slot></slot>
    <div class="btns">
    <button class="btn btn-action" id="save"><i class="fa-regular fa-save m-0"></i> Save</button><button class="btn btn-action" id="cancel">Cancel</button>
    </div>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

	connectedCallback() {

    let inlineEdit = this;
    let saveButton = this.shadowRoot.querySelector('#save');
    let cancelButton = this.shadowRoot.querySelector('#cancel');
    
    let label = this.querySelector('label');
    let input = this.querySelector('input');

    // Save the original value for later
    let originalValue = input.value;

    // cancel
    cancelButton.addEventListener('click', (event) => {

      input.value = originalValue;
      input.blur();
      inlineEdit.blur();

      
      const cancelEvent = new CustomEvent("inline-edit-cancel", { detail: { name: input.getAttribute('name')} });
      inlineEdit.dispatchEvent(cancelEvent);
    });

    // Save
    saveButton.addEventListener('click', (event) => {

      originalValue = input.value;

      // check validation

      // dispatch event autosave


      // dispatch save event
      const saveEvent = new CustomEvent("inline-edit-save", { detail: { name: input.getAttribute('name'), value: input.value } });
      inlineEdit.dispatchEvent(saveEvent);

      inlineEdit.setAttribute('data-saving','true');
      input.disabled = true;

      input.blur();
      inlineEdit.blur();
      saveButton.innerHTML = '<i class="fa-regular fa-spinner fa-spin m-0"></i> Saving...';
      saveButton.disabled = true;
      
    });

    // Saved
    inlineEdit.addEventListener('inline-edit-saved', (event) => {

      setTimeout(() => {

        saveButton.innerHTML = '<i class="fa-regular fa-check m-0"></i> Saved';

        if(inlineEdit.querySelector('.unsaved'))
          inlineEdit.querySelector('.unsaved').innerHTML = '(Saved)';
      }, 100);

      // Reset to normal
      setTimeout(() => {

        input.disabled = false;
        saveButton.disabled = false;
        inlineEdit.removeAttribute('data-saving');
        saveButton.innerHTML = '<i class="fa-regular fa-save m-0"></i> Save';

        if(inlineEdit.querySelector('.unsaved'))
          inlineEdit.querySelector('.unsaved').remove();

      }, 1000);

      console.log(saveButton)

    });

    // enter key saves


    //blur it should autosave


    input.addEventListener('blur',(event) => {

      if(input.value != originalValue){

        let feedbackText = '(Unsaved)';

        if(inlineEdit.hasAttribute('data-autosave')) {

          input.value = originalValue;
          
          const saveEvent = new CustomEvent("inline-edit-autosave", { detail: { name: input.getAttribute('name'), value: input.value } });
          inlineEdit.dispatchEvent(saveEvent);

          feedbackText = '(Auto-saving)';
        }

        let labelText = label.textContent;
        if(!inlineEdit.querySelector('.unsaved'))
          input.insertAdjacentHTML('beforebegin', `<span class="unsaved">${feedbackText}</span>`);
      }

    })
  }
}

export default iamInlineEdit;