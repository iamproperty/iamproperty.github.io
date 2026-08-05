import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { filterList, setTag } from './dropdown.ts';

const { localStorage } = installTestDom();

describe('Dropdown module', () => {
  it('filters unchecked dropdown labels by input value', () => {
    const dropdown = createElement('div');
    const search = createElement('input', { value: 'alp' });
    const alpha = createElement('label', {}, 'Alpha');
    append(alpha, createElement('input', { value: 'alpha' }));
    const beta = createElement('label', {}, 'Beta');
    append(beta, createElement('input', { value: 'beta' }));
    append(dropdown, alpha, beta);

    filterList(dropdown, search);

    expect(!alpha.hasAttribute('slot'));
    expect(beta.getAttribute('slot') === 'notmatched');
  });

  it('stores selected tag text and assigns a stable colour class', () => {
    localStorage.clear();
    const tag = createElement('label');
    tag.textContent = 'Leasehold';
    const input = createElement('input', { name: 'tenure' });
    input.checked = true;
    append(tag, input);

    setTag(tag);

    expect(tag.getAttribute('slot') === 'checked');
    expect(localStorage.getItem('tags-tenure').includes('Leasehold'));
    expect(tag.className.includes('wider-colour-'));
  });
});
