import './test-globals.ts';
import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append, silenceConsole } from './test-utils.ts';
import createDynamicEvents from './dynamicEvents.ts';

const { document, window } = installTestDom();

describe('Dynamic events module', () => {
  it('runs configured dynamic show and hide events', () => {
    const target = createElement('div', { id: 'target', class: 'js-hide' });
    const input = createElement('input', {
      dataChangeEvents: JSON.stringify([{ matches: 'yes', if: 'show', else: 'hide', target: '#target' }]),
      value: 'yes',
    });
    append(document.body, target, input);

    createDynamicEvents();
    silenceConsole(() => window.triggerDynamicEvent(input));

    expect(!target.classList.contains('js-hide'));
  });
});
