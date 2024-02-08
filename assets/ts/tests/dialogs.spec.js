// @ts-nocheck
import '@testing-library/jest-dom'
import { createMultiFormDialog } from "../modules/dialogs";


describe('createMultiFormDialog', () => {
  let dialog;

  beforeEach(() => {
    // Create a fresh dialog element before each test
    dialog = document.createElement('dialog');
    dialog.innerHTML = `
      <fieldset data-title="fieldset1">
        <input type="text" >
      </fieldset>
      <fieldset data-title="fieldset2">
        <input type="text" >
      </fieldset>
    `;
  });

  test('it initializes buttons and fieldsets', () => {
    createMultiFormDialog(dialog);

    expect(dialog.querySelectorAll('.steps').length).toEqual(1);
  });

  test('it validates fieldsets and updates classes', () => {
    createMultiFormDialog(dialog);

    // Simulate a button click to trigger validation
    const button = dialog.querySelector('button[data-title="fieldset1"]');
    button.click();

    // Add your assertions here to check if validation and class updates are working as expected
    expect(dialog.querySelectorAll('fieldset[data-title="fieldset1"].active').length).toEqual(1);
  });

  test('it navigates to the next fieldset', () => {
    createMultiFormDialog(dialog);

    // Simulate a button click to navigate to the next fieldset
    const button = dialog.querySelector('button[data-title="fieldset2"]');
    button.click();

    // Add your assertions here to check if navigation to the next fieldset is working
    expect(dialog.querySelectorAll('fieldset[data-title="fieldset2"].active').length).toEqual(1);
  });

});