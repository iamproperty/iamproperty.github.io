import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { openFirstTab, toggleTab } from './tabs.ts';

installTestDom();

describe('Tabs module', () => {
  it('toggles tabs and opens the first tab by default', () => {
    const tabs = createElement('iam-tabs');
    const first = createElement('details');
    const second = createElement('details');
    const buttonOne = createElement('button', { dataIndex: '0' });
    const buttonTwo = createElement('button', { dataIndex: '1' });
    tabs.shadowRoot = createElement('shadow-root');
    const links = createElement('div', { class: 'tabs__links' });
    append(links, buttonOne, buttonTwo);
    append(tabs.shadowRoot, links);
    append(tabs, first, second);

    toggleTab([first, second], buttonTwo);
    openFirstTab(tabs);

    expect(!first.hasAttribute('open'));
    expect(second.hasAttribute('open'));
  });
});
