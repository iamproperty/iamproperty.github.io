export const openModal = (id, modal): void => {

  const dialog = modal.shadowRoot?.querySelector('dialog');

  dialog?.showModal();
  dialog?.focus();

  const closeEvent = new CustomEvent('modal-opened', {
    bubbles: true,
    cancelable: true,
    detail: { modalId: id },
  });

  modal.dispatchEvent(closeEvent);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'openModal',
    id: id,
  });
}

export const closeModal = (id, modal): void => {

  const dialog = modal.shadowRoot?.querySelector('dialog');

  dialog?.close();
  
  const closeEvent = new CustomEvent('modal-closed', {
    bubbles: true,
    cancelable: true,
    detail: { modalId: id },
  });

  modal.dispatchEvent(closeEvent);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'closeModal',
    id: id,
  });
}

export const closeButtonHtml = `<button class="btn btn-compact btn-secondary fa-xmark-large" data-close>Close</button>`;