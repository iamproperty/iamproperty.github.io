import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { transformButtons } from './content.ts';

const { document } = installTestDom();

describe('Content module', () => {
  it('transforms WordPress button wrappers into direct links', () => {
    const parent = createElement('div');
    const buttons = createElement('div', { class: 'wp-block-buttons' });
    const button = createElement('div', { class: 'btn btn-primary wp-block-button' });
    const link = createElement('a', { href: '/test' }, 'Open');
    append(button, link);
    append(buttons, button);
    append(parent, buttons);
    append(document.body, parent);

    transformButtons();

    expect(link.getAttribute('class') === 'btn btn-primary wp-block-button');
    expect(parent.children[0].localName === 'fragment');
  });
});
