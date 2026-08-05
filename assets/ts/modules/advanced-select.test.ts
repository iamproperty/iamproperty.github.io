import './test-globals.ts';
import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import advancedSelect from './advanced-select.ts';

installTestDom();

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
});
