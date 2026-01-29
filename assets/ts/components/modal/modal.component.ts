import { trackComponent, trackComponentRegistered } from '../_global';
import { openModal, closeModal, closeButtonHtml } from '../../modules/modal';

trackComponentRegistered('iam-card');

class iamModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const assetLocation = document.body.hasAttribute('data-assets-location')
      ? document.body.getAttribute('data-assets-location')
      : '/assets';
    const loadCSS = `@import "${assetLocation}/css/components/modal.component.css";`;

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous" />
    <dialog>
      ${closeButtonHtml}
      <div class="scroll">
        <slot></slot>
        <div class="btn__group">
          <button class="btn btn-secondary" data-cancel>${this.hasAttribute('data-cancel-text') ? this.getAttribute('data-cancel-text') : 'Cancel'}</button>
          <slot name="agreed-button">
            <button class="btn btn-primary" data-agreed>${this.hasAttribute('data-agreed-text') ? this.getAttribute('data-agreed-text') : 'Submit'}</button>
          </slot>
        </div>
      </div>
    </dialog>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {

    const originalDialog = this.querySelector('dialog');

    const id = this.hasAttribute('id') ? this.getAttribute('id') : originalDialog?.getAttribute('id');
    const dialog = this.shadowRoot?.querySelector('dialog');
    const closeButton = this.shadowRoot?.querySelector('[data-close]');
    const cancelButton = this.shadowRoot?.querySelector('[data-cancel]');
    const agreedButton = this.querySelector('button[slot="agreed-button"]') ? this.querySelector('button[slot="agreed-button"]') : this.shadowRoot?.querySelector('[data-agreed]');
    const modalType = this.hasAttribute('data-type') ? this.getAttribute('data-type') : 'passive';

    const agreed = () => {
      const agreedEvent = new CustomEvent('agreed', {
        detail: { modalId: id },
      });

      this.dispatchEvent(agreedEvent);

      closeModal(id, this);
    }

    document.addEventListener('click', (e) => {
      
      if(e.target.matches(`[command="show-modal"][commandfor="${id}"]`) || e.target.matches(`[data-modal="${id}"]`)){
        openModal(id, this);
      }
    });

    document.addEventListener('click', (e) => {
      
      if(e.target.matches(`[command="close"][commandfor="${id}"]`)){
        closeModal(id, this);
      }
    });
    
    // Disable the original event 
    originalDialog?.addEventListener('command', (e) => {

      if (event.command == "show-modal") {
        e.preventDefault();
      }
    });

    originalDialog?.addEventListener('command', (e) => {

      e.preventDefault();

      if (event.command == "close") {
        closeModal(id, this);
      }
    });

    originalDialog?.addEventListener('close', (e) => {

      e.preventDefault();

      closeModal(id, this);
    });

    // Move the submit button so that the slot functionality works
    if(originalDialog) {
      Array.from(originalDialog?.querySelectorAll('[slot]')).forEach((element) => {
        this.moveBefore(element, originalDialog);
      });      
    }

    closeButton?.addEventListener('click', () => {
      closeModal(id, this);
    });

    cancelButton?.addEventListener('click', () => {
      closeModal(id, this);
    });

    agreedButton?.addEventListener('click', () => {

      agreed();
    });
    

    this.addEventListener('close-modal', () => {
      closeModal(id, this);
    });

    // Hijack the default form submission 
    originalDialog?.addEventListener('submit', (e) => {

      if(e.submitter && e.submitter.hasAttribute('formmethod') && e.submitter.getAttribute('formmethod') =="dialog"){
        
        closeModal(id, this);
      }
      else {
        agreed();
      }
    });

    Array.from(this.querySelectorAll('button[type="submit"]')).forEach((button)=> {

      button.addEventListener('click', (e) => {

        if(!button.closest('form') && !button.hasAttribute('formmethod')){
          
          agreed();
        }
      });
    });


    // Add click event on backdrop
    this.addEventListener('click', (event) => {

      // Small fix to make sure the dialog isn't a dialog inside of a dialog.
      const style = window.getComputedStyle(dialog);
      if (style.display === 'contents') dialog = dialog.parentNode.closest('dialog[open]');

      // Dont allow the backdrop to be clicked when transactional
      if (modalType != 'transactional' && modalType != 'acknowledgement') {
        const dialogDimensions = dialog.getBoundingClientRect();

        if (
          event.clientX < dialogDimensions.left ||
          event.clientX > dialogDimensions.right ||
          event.clientY < dialogDimensions.top ||
          event.clientY > dialogDimensions.bottom
        ) {
          if (!event.target.closest('dialog *'))
            closeModal(id, this); // Weird bug when interacting with radio input fields within dialogs cuases it to close
        }
      }
    });


    if (modalType == 'transactional'){
      this.shadowRoot?.querySelector('.scroll')?.insertAdjacentHTML('afterbegin',
        `<i class="fa-light fa-circle" aria-hidden="true">
          <i class="fa-regular fa-${this.hasAttribute('data-icon') ? this.getAttribute('data-icon') : 'info'}" aria-hidden="true"></i>
        </i>`
      );
    }
            
  }
}

export default iamModal;
