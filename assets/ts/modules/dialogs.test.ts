import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { createDialog } from './dialogs.ts';

installTestDom();

describe('Dialogs module', () => {
  it('wraps dialog content and adds a close button', () => {
    const dialog = createElement('dialog');
    dialog.innerHTML = '<p>Body</p>';

    createDialog(dialog);

    expect(dialog.innerHTML.includes('mh-lg'));
    expect(dialog.innerHTML.includes('dialog__close'));
  });
});
