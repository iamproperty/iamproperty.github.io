import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { setupCard } from './card.module.ts';

installTestDom();

describe('Card module', () => {
  it('hydrates image, total and empty badge state', () => {
    const card = createElement('iam-card', { dataImage: '/test.jpg', dataTotal: '42' });
    card.shadowRoot = createElement('shadow-root');
    const head = createElement('div', { class: 'card__head' });
    const body = createElement('div', { class: 'card__body' });
    const badges = createElement('div', { class: 'card__badges' });
    append(card.shadowRoot, head, badges, body);

    setupCard(card);

    expect(card.classList.contains('card'));
    expect(head.innerHTML.includes('/test.jpg'));
    expect(body.innerHTML.includes('42'));
    expect(badges.classList.contains('empty'));
  });
});
