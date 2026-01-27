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
        <i class="fa-light fa-circle" aria-hidden="true">
          <i class="fa-regular fa-${this.hasAttribute('data-icon') ? this.getAttribute('data-icon') : 'info'}" aria-hidden="true"></i>
        </i>
        <slot></slot>
        <div class="btn-group">
          <button class="btn btn-secondary" data-cancel>Cancel</button>
          <slot name="agreed-button">
            <button class="btn btn-primary" data-agreed>${this.hasAttribute('data-agreed-text') ? this.getAttribute('data-agreed-text') : 'Ok'}</button>
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
    const agreedButton = this.shadowRoot?.querySelector('[data-agreed]');
    const slottedAgreedButton = this.querySelector('button[slot="agreed-button"]');
    const modalType = this.hasAttribute('data-type') ? this.getAttribute('data-type') : 'passive';


    document.addEventListener('click', (e) => {
      
      if(e.target.matches(`[command="show-modal"][commandfor="${id}"]`) || e.target.matches(`[data-modal="${id}"]`)){
        openModal(id, this);
      }
    });
    
    // Disable the original event 
    originalDialog?.addEventListener('command', (e) => {

      if (event.command == "show-modal") {
        e.preventDefault();
      }
    });

    originalDialog?.addEventListener('command', (e) => {

      if (event.command == "close") {
        closeModal(id, this);
      }
    });

    originalDialog?.addEventListener('close', (e) => {

      closeModal(id, this);
    });

    // Move the submit button so that the slot functionality works
    Array.from(originalDialog?.querySelectorAll('[slot]')).forEach((element) => {
      this.moveBefore(element, originalDialog);
    });

    closeButton?.addEventListener('click', () => {
      closeModal(id, this);
    });

    cancelButton?.addEventListener('click', () => {
      closeModal(id, this);
    });

    agreedButton?.addEventListener('click', () => {

      const agreedEvent = new CustomEvent('agreed', {
        detail: { modalId: id },
      });

      this.dispatchEvent(agreedEvent);

      closeModal(id, this);
    });
    
    slottedAgreedButton?.addEventListener('click', () => {

      const agreedEvent = new CustomEvent('agreed', {
        detail: { modalId: id },
      });

      this.dispatchEvent(agreedEvent);

      closeModal(id, this);
    });

    this.addEventListener('close-modal', () => {
      closeModal(id, this);
    });

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
  }
}

export default iamModal;
