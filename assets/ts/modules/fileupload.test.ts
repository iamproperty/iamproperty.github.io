import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import fileupload from './fileupload.ts';

installTestDom();

describe('File upload module', () => {
  it('renders an existing uploaded filename', () => {
    const component = createElement('iam-fileupload', { dataFilename: 'contract.pdf' });
    const input = createElement('input', { type: 'file' });
    const wrapper = createElement('div');
    append(wrapper, createElement('div', { class: 'files' }), createElement('div', { class: 'drop-area' }));
    append(
      wrapper,
      createElement('div', { class: 'invalid-feedback size' }),
      createElement('div', { class: 'invalid-feedback ext' })
    );
    append(component, input);

    fileupload(component, wrapper);

    expect(wrapper.querySelector('.files').innerHTML.includes('contract.pdf'));
  });
});
