import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import milestone from './milestone.ts';

installTestDom();

describe('Milestone module', () => {
  it('adds milestone status and task details', () => {
    const milestoneElement = createElement('iam-milestone', {
      dataStatus: 'Current',
      dataItems: JSON.stringify([
        {
          name: 'Checks',
          description: 'Run checks',
          date_completed: '2026-01-01',
          actions: [{ action: 'One', date_completed: '2026-01-01' }, { action: 'Two' }],
        },
      ]),
    });
    milestoneElement.shadowRoot = createElement('shadow-root');
    const wrap = createElement('div', { class: 'milestone-wrap' });
    const tasks = createElement('div', { class: 'task-wrap' });
    append(milestoneElement.shadowRoot, wrap, tasks);

    milestone(milestoneElement);

    expect(milestoneElement.classList.contains('current'));
    expect(wrap.children[0].innerHTML === 'Current Step');
    expect(tasks.children[0].querySelector('summary').innerHTML.includes('(1/2)'));
  });
});
