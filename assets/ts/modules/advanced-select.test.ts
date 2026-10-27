import './test-globals.ts';
import { describe, expect, it } from './test.ts';
import { createElement, installTestDom, type TestElement } from './test-dom.ts';
import { append } from './test-utils.ts';
import advancedSelect from './advanced-select.ts';

installTestDom();

if (typeof globalThis.CustomEvent === 'undefined') {
  globalThis.CustomEvent = class extends Event {
    detail;

    constructor(type, options = {}) {
      super(type, options);
      this.detail = options.detail;
    }
  };
}

type SelectedField = {
  component: TestElement;
  originalInput: TestElement;
  input: TestElement;
  datalist: TestElement;
  lightClear: TestElement;
  shadowClear: TestElement;
  events: { type: string; detail?: { value: string; text: string } }[];
};

const createSelectedField = (tagName, clearButtonPlacement = 'none'): SelectedField => {
  const component = createElement(tagName);
  component.shadowRoot = createElement('shadow-root');
  const originalInput = createElement('input', { type: 'hidden', value: 'alpha-id' });
  const input = createElement('input', { list: 'choices', placeholder: 'Pick one', value: 'Alpha' });
  const datalist = createElement('datalist', { id: 'choices' });
  const selectedOption = createElement('option', { value: 'alpha-id', class: 'active' }, 'Alpha');
  const filteredOption = createElement('option', { value: 'beta-id', class: 'hide', style: 'display: none' }, 'Beta');
  append(datalist, selectedOption, filteredOption);
  append(component, originalInput, input, datalist);

  const lightClear = createElement('button', { class: 'clear-search' });
  const shadowClear = createElement('button', { class: 'clear-search' });
  if (clearButtonPlacement === 'light' || clearButtonPlacement === 'both') append(component, lightClear);
  if (clearButtonPlacement === 'shadow' || clearButtonPlacement === 'both') append(component.shadowRoot, shadowClear);

  const events = [];
  component.addEventListener('close-button-pressed', (event) => events.push({ type: event.type }));
  component.addEventListener('update-value', (event) => events.push({ type: event.type, detail: event.detail }));

  advancedSelect(component, input, datalist);
  input.setAttribute('data-value', 'Alpha');
  input.setAttribute('placeholder', 'Alpha');

  return { component, originalInput, input, datalist, lightClear, shadowClear, events };
};

const expectCleared = ({ component, originalInput, input, datalist, events }: SelectedField): void => {
  expect(originalInput.value === '');
  expect(originalInput.getAttribute('value') === '');
  expect(input.value === '');
  expect(!input.hasAttribute('data-value'));
  expect(input.getAttribute('placeholder') === 'Pick one');
  expect(input.classList.contains('empty'));
  expect(component.classList.contains('has-empty-input'));
  for (const option of datalist.options) {
    expect(!option.classList.contains('active'));
    expect(!option.classList.contains('hide'));
    expect(!option.hasAttribute('style'));
  }
  expect(events.length === 2);
  expect(events[0].type === 'close-button-pressed');
  expect(events[1].type === 'update-value');
  expect(events[1].detail.value === '');
  expect(events[1].detail.text === '');
};

describe('Advanced select module', () => {
  it('moves native datalist wiring onto component state', () => {
    const component = createElement('iam-advanced-select');
    component.shadowRoot = createElement('shadow-root');
    const shadowInputWrapper = createElement('div', { class: 'input__wrapper' });
    const shadowClear = createElement('button', { class: 'clear-search' });
    append(shadowInputWrapper, shadowClear);
    append(component.shadowRoot, shadowInputWrapper);

    const inputWrapper = createElement('div', { class: 'input__wrapper' });
    const input = createElement('input', { list: 'choices', placeholder: 'Pick one' });
    const datalist = createElement('datalist', { id: 'choices' });
    append(datalist, createElement('option', { value: 'A' }));
    append(inputWrapper, input);
    append(component, inputWrapper, datalist);

    advancedSelect(component, input, datalist);

    expect(input.getAttribute('data-list') === 'choices');
    expect(input.getAttribute('list') === '');
    expect(input.classList.contains('empty'));
    expect(component.classList.contains('has-empty-input'));
    expect(datalist.getAttribute('slot') === 'datalist');
  });

  for (const tagName of ['iam-address-lookup', 'iam-advanced-select']) {
    it(`initializes ${tagName} without a clear button and handles programmatic empty`, () => {
      const field = createSelectedField(tagName);

      expect(field.input.getAttribute('data-list') === 'choices');
      expect(field.input.getAttribute('list') === '');
      expect(field.datalist.getAttribute('slot') === 'datalist');
      expect(field.events.length === 0);

      field.component.dispatchEvent(new Event('empty'));

      expectCleared(field);
    });
  }

  for (const placement of ['light', 'shadow']) {
    it(`preserves clearing and notifications from a ${placement} DOM clear button`, () => {
      const field = createSelectedField('iam-advanced-select', placement);

      const clearButton = placement === 'light' ? field.lightClear : field.shadowClear;
      clearButton.dispatchEvent(new Event('click'));

      expectCleared(field);
    });
  }

  it('prefers the light DOM clear button when both roots contain one', () => {
    const field = createSelectedField('iam-advanced-select', 'both');

    field.shadowClear.dispatchEvent(new Event('click'));

    expect(field.input.value === 'Alpha');
    expect(field.originalInput.value === 'alpha-id');
    expect(field.events.length === 0);

    field.lightClear.dispatchEvent(new Event('click'));

    expectCleared(field);
  });
});
