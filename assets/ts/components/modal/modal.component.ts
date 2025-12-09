import { trackComponent, trackComponentRegistered } from '../_global';
import { cardHTML, setupCard } from '../../modules/card.module';
import iamMenu from '../menu/menu.component';
import Modal from '../../../../src/components/Modal/Modal.vue';

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
      <button class="btn btn-compact btn-secondary fa-xmark-large" data-close>Close</button>
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
    const id = this.getAttribute('id');
    const dialog = this.shadowRoot?.querySelector('dialog');
    const button = document.querySelector(`[data-modal="${id}"]`);
    const closeButton = this.shadowRoot?.querySelector('[data-close]');
    const cancelButton = this.shadowRoot?.querySelector('[data-cancel]');
    const agreedButton = this.shadowRoot?.querySelector('[data-agreed]');
    const modalType = this.hasAttribute('data-type') ? this.getAttribute('data-type') : 'passive';

    button?.addEventListener('click', () => {
      dialog?.showModal();
      dialog?.focus();

      const closeEvent = new CustomEvent('modal-opened', {
        bubbles: true,
        cancelable: true,
        detail: { modalId: id },
      });

      this.dispatchEvent(closeEvent);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'openModal',
        id: id,
      });
    });

    const closeModal = () => {
      dialog?.close();
      
      const closeEvent = new CustomEvent('modal-closed', {
        bubbles: true,
        cancelable: true,
        detail: { modalId: id },
      });

      this.dispatchEvent(closeEvent);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'closeModal',
        id: id,
      });
    }

    closeButton?.addEventListener('click', () => {
      closeModal();
    });

    cancelButton?.addEventListener('click', () => {
      closeModal();
    });

    agreedButton?.addEventListener('click', () => {

      const agreedEvent = new CustomEvent('agreed', {
        detail: { modalId: id },
      });

      this.dispatchEvent(agreedEvent);

      closeModal();
    });

    this.addEventListener('close-modal', () => {
      closeModal();
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
            closeModal(); // Weird bug when interacting with radio input fields within dialogs cuases it to close
        }
      }
    });
  }
}

export default iamModal;
