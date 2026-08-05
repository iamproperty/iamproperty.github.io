import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { closeModal, openModal } from './modal.ts';

const { window } = installTestDom();

describe('Modal module', () => {
  it('opens and closes modal dialogs with data layer events', () => {
    window.dataLayer = [];
    const dialog = createElement('dialog');
    const modal = createElement('iam-modal', { id: 'confirm' });
    append(dialog, modal);

    openModal(modal);
    closeModal(modal);

    expect(dialog.open === false);
    expect(window.dataLayer[0].event === 'openModal');
    expect(window.dataLayer[1].event === 'closeModal');
  });
});
