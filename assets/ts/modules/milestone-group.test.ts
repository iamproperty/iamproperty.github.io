import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import milestoneGroup from './milestone-group.ts';

installTestDom();

describe('Milestone group module', () => {
  it('toggles future milestone visibility', () => {
    const group = createElement('iam-milestone-group', { dataShowAllToggle: 'true' });
    let opened = false;
    group.addEventListener('show-future-items', () => {
      opened = true;
    });

    milestoneGroup(group);
    group.children[0].click();

    expect(group.classList.contains('show-all'));
    expect(group.children[0].innerHTML === 'Hide next steps');
    expect(opened);
  });
});
