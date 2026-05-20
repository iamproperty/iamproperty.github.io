import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import orderlist from './orderablelist.ts';

installTestDom();

describe('Orderable list module', () => {
  it('sets sortable list semantics', () => {
    const list = createElement('ol');
    append(list, createElement('li', {}, 'First'), createElement('li', {}, 'Second'));

    orderlist(list);

    expect(list.getAttribute('role') === 'list');
    expect(list.children[0].getAttribute('draggable') === 'true');
    expect(list.children[1].getAttribute('data-order') === '2');
  });
});
