import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import {
  checkConditions,
  disabledIf,
  emptyIf,
  enabledIf,
  getCheckboxLimit,
  hideIf,
  isFormValid,
  limitCheckboxes,
  readonlyIf,
  requiredIf,
  showIf,
  writeIf,
} from './form.ts';

const { window } = installTestDom();

if (typeof globalThis.CustomEvent === 'undefined') {
  globalThis.CustomEvent = class extends Event {
    detail;

    constructor(type, options = {}) {
      super(type, options);
      this.detail = options.detail;
    }
  };
}

const condition = (id, equals) => JSON.stringify([{ if: id, equals }]);

const createChangeEvent = (target) => {
  const event = new Event('change', { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'target', { value: target });

  return event;
};

describe('Form module', () => {
  it('checks form validity against invalid fields, weak passwords and required multiselects', () => {
    const form = createElement('form');
    const originalQuerySelector = form.querySelector.bind(form);

    form.querySelector = (selector) =>
      selector === ':invalid' ? createElement('input') : originalQuerySelector(selector);

    expect(!isFormValid(form));

    form.querySelector = originalQuerySelector;
    append(form, createElement('div', { class: 'pwd-checker', dataStrength: '1' }));

    expect(!isFormValid(form));

    form.children = [];
    append(form, createElement('iam-multiselect', { dataError: 'true', dataIsRequired: 'true' }));

    expect(!isFormValid(form));

    form.children = [];

    expect(isFormValid(form));
  });

  it('evaluates JSON conditions against form control values', () => {
    const form = createElement('form');
    append(form, createElement('input', { id: 'status', value: 'active' }));

    expect(checkConditions(condition('status', 'active'), form));
    expect(!checkConditions(condition('status', 'archived'), form));
  });

  it('applies visibility conditional helpers', () => {
    const form = createElement('form');
    const status = createElement('input', { id: 'status', value: 'active' });
    const shown = createElement('div', { dataShowIf: condition('status', 'active') });
    const hidden = createElement('div', { dataHideIf: condition('status', 'active') });
    append(form, status, shown, hidden);

    showIf(form);
    hideIf(form);

    expect(!shown.classList.contains('d-none'));
    expect(hidden.classList.contains('d-none'));

    status.value = 'archived';
    showIf(form);
    hideIf(form);

    expect(shown.classList.contains('d-none'));
    expect(!hidden.classList.contains('d-none'));
  });

  it('applies enabled, disabled, required and readonly conditional helpers', () => {
    const form = createElement('form');
    const status = createElement('input', { id: 'status', value: 'active' });
    const disabled = createElement('input', { dataDisabledIf: condition('status', 'active') });
    const enabled = createElement('input', { dataEnabledIf: condition('status', 'active') });
    const required = createElement('input', { dataRequiredIf: condition('status', 'active') });
    const readonly = createElement('input', { dataReadonlyIf: condition('status', 'active') });
    const writable = createElement('input', { dataWriteIf: condition('status', 'active') });
    append(form, status, disabled, enabled, required, readonly, writable);

    disabledIf(form);
    enabledIf(form);
    requiredIf(form);
    readonlyIf(form);
    writeIf(form);

    expect(disabled.hasAttribute('disabled'));
    expect(!enabled.hasAttribute('disabled'));
    expect(required.hasAttribute('required'));
    expect(readonly.hasAttribute('readonly'));
    expect(!writable.hasAttribute('readonly'));

    status.value = 'archived';
    disabledIf(form);
    enabledIf(form);
    requiredIf(form);
    readonlyIf(form);
    writeIf(form);

    expect(!disabled.hasAttribute('disabled'));
    expect(enabled.hasAttribute('disabled'));
    expect(!required.hasAttribute('required'));
    expect(!readonly.hasAttribute('readonly'));
    expect(writable.hasAttribute('readonly'));
  });

  it('empties form controls when conditions match', () => {
    const form = createElement('form');
    const status = createElement('input', { id: 'status', value: 'clear' });
    const target = createElement('input', { dataEmptyIf: condition('status', 'clear'), value: 'remove me' });
    append(form, status, target);

    emptyIf(form);

    expect(target.value === '');
  });

  it('resolves checkbox limits with a valid positive fallback', () => {
    expect(getCheckboxLimit(createElement('div', { dataCheckboxLimit: '2' })) === 2);
    expect(getCheckboxLimit(createElement('div', { dataCheckboxLimit: '0' })) === 10);
    expect(getCheckboxLimit(createElement('div', { dataCheckboxLimit: 'nope' })) === 10);
  });

  it('disables unchecked checkboxes and emits analytics when a limit is reached', () => {
    window.dataLayer = [];
    const form = createElement('form');
    const group = createElement('fieldset', { dataCheckboxLimit: '2', id: 'topics' });
    const first = createElement('input', { checked: true, type: 'checkbox' });
    const second = createElement('input', { checked: true, type: 'checkbox' });
    const third = createElement('input', { type: 'checkbox' });
    let eventDetail;
    form.addEventListener('checkbox-limit-reached', (event) => {
      eventDetail = event.detail;
    });
    append(group, first, second, third);
    append(form, group);

    limitCheckboxes(createChangeEvent(second), form);

    expect(third.hasAttribute('disabled'));
    expect(eventDetail.element === '#topics');
    expect(eventDetail.limit === 2);
    expect(window.dataLayer[0].event === 'checkbox-limit-reached');
    expect(window.dataLayer[0].element === '#topics');
  });

  it('prevents checking beyond the configured checkbox limit', () => {
    const form = createElement('form');
    const group = createElement('fieldset', { dataCheckboxLimit: '1' });
    const first = createElement('input', { checked: true, type: 'checkbox' });
    const second = createElement('input', { checked: true, type: 'checkbox' });
    append(group, first, second);
    append(form, group);

    limitCheckboxes(createChangeEvent(second), form);

    expect(first.checked);
    expect(!second.checked);
  });
});
