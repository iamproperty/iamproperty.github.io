import { it, expect } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { applySavedNavigationVariables, bindNavigationVariables } from './navigation-variables.ts';

it('restores deferred user bindings on logout and account switching', () => {
  const { document } = installTestDom();
  const source = createElement('div', { dataSaveVariable: 'shortname' });
  document.body.append(source);
  const cleanup = bindNavigationVariables({ shortname: 'Jamie' });

  // Content arrives after navigation has saved the current user's value.
  const late = createElement('span', { dataVariable: 'shortname' });
  const placeholder = createElement('span', {}, 'Guest');
  late.append(placeholder);
  Object.defineProperty(late, 'childNodes', { get: () => late.children });
  late.replaceChildren = (...nodes): void => {
    late.innerHTML = '';
    late.append(...nodes);
  };
  document.body.append(late);
  applySavedNavigationVariables();
  expect(late.textContent === 'Jamie');
  // Repeated content loads must not capture Jamie as the original value.
  applySavedNavigationVariables();
  cleanup();
  expect(late.textContent === 'Guest');
  expect(late.firstChild === placeholder);
  expect(!source.hasAttribute('data-variable-value'));
  applySavedNavigationVariables();
  expect(late.textContent === 'Guest');

  const cleanupNext = bindNavigationVariables({ shortname: 'Alex' });
  applySavedNavigationVariables();
  expect(late.textContent === 'Alex');
  cleanupNext();
  expect(late.textContent === 'Guest');
  expect(late.firstChild === placeholder);
});
