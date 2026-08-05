import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { closeNotification } from './notification.ts';

installTestDom();

describe('Notification module', () => {
  it('hides notifications', () => {
    const notification = createElement('div');

    closeNotification(notification);

    expect(notification.classList.contains('d-none'));
  });
});
