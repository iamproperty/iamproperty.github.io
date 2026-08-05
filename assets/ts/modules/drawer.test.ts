import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import drawer from './drawer.ts';

const { document } = installTestDom();

describe('Drawer module', () => {
  it('marks the drawer end as in-view and closes the drawer toggle', () => {
    const toggle = createElement('input', { id: 'showDrawer' });
    toggle.checked = true;
    const drawerEnd = createElement('div', { id: 'drawer-end' });
    append(document.body, toggle, drawerEnd);

    drawer();

    expect(drawerEnd.classList.contains('in-view'));
    expect(toggle.checked === false);
  });
});
