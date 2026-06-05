import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { createTabsLinks, openFirstTab, setTabsEventHandlers, toggleTab } from './tabs.ts';

const { window } = installTestDom();

const createDetail = (id, title, isOpen = false) => {
  const detail = createElement('details', { id });
  const summary = createElement('summary', {}, title);

  if (isOpen) detail.setAttribute('open', 'true');

  append(detail, summary, createElement('p', {}, `${title} content`));

  return detail;
};

describe('Tabs module', () => {
  it('creates tab buttons and dropdown options from direct details', () => {
    const tabs = createElement('iam-tabs', { class: 'tabs--toggle-tags' });
    const first = createDetail('first', 'First tab', true);
    const second = createDetail('second', 'Second tab');
    append(tabs, first, second);

    createTabsLinks(tabs);

    const buttons = tabs.querySelectorAll('.tabs__links > button');
    const options = tabs.querySelectorAll('.tabs__dropdown > option');

    expect(buttons.length === 2);
    expect(buttons[0].textContent === 'First tab');
    expect(buttons[0].getAttribute('aria-pressed') === 'true');
    expect(buttons[0].classList.contains('tag'));
    expect(buttons[0].getAttribute('data-id') === 'first');
    expect(first.getAttribute('tabindex') === '-1');
    expect(first.querySelector('summary').classList.contains('visually-hidden'));
    expect(options[0].value === 'first-tab');
  });

  it('toggles matching detail panels and records tab open events', () => {
    window.dataLayer = [];
    const tabs = createElement('iam-tabs');
    const first = createDetail('first', 'First tab', true);
    const second = createDetail('second', 'Second tab');
    const linksWrapper = createElement('div');
    const links = createElement('div', { class: 'tabs__links' });
    const dropdownWrapper = createElement('div');
    const dropdown = createElement('select', { class: 'tabs__dropdown' });
    append(links, createElement('button', { ariaPressed: 'true', dataIndex: '0' }, 'First tab'));
    append(links, createElement('button', { dataIndex: '1' }, 'Second tab'));
    append(linksWrapper, links);
    append(dropdownWrapper, dropdown);
    append(tabs, linksWrapper, dropdownWrapper, first, second);

    setTabsEventHandlers(tabs);

    const buttons = tabs.querySelectorAll('.tabs__links > button');
    buttons[1].click();

    expect(!first.hasAttribute('open'));
    expect(second.getAttribute('open') === 'true');
    expect(buttons[1].getAttribute('aria-pressed') === 'true');
    expect(window.dataLayer[0].event === 'openTab');
    expect(window.dataLayer[0].tabTitle === 'Second tab');
  });

  it('opens the tab matching the current location hash', () => {
    const tabs = createElement('iam-tabs');
    tabs.shadowRoot = createElement('shadow-root');
    const links = createElement('div', { class: 'tabs__links' });
    append(links, createElement('button', { dataId: 'first' }), createElement('button', { dataId: 'second' }));
    append(tabs.shadowRoot, links);
    append(tabs, createDetail('first', 'First tab'), createDetail('second', 'Second tab'));
    window.location.hash = '#second';

    openFirstTab(tabs);

    expect(tabs.querySelector('details[id="second"]').getAttribute('open') === 'true');
    expect(tabs.shadowRoot.querySelector('[data-id="second"]').getAttribute('aria-pressed') === 'true');

    window.location.hash = '';
  });

  it('toggles detail panels directly from a selected tab button', () => {
    const details = [createDetail('first', 'First tab'), createDetail('second', 'Second tab')];
    const button = createElement('button', { dataIndex: '1' });

    toggleTab(details, button);

    expect(!details[0].hasAttribute('open'));
    expect(details[1].getAttribute('open') === 'true');
  });
});
