import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import createPaginationButtons from './pagination.ts';

installTestDom();

describe('Pagination module', () => {
  it('renders pagination controls from controller attributes', () => {
    const controller = createElement('iam-table', {
      dataPages: '3',
      dataPage: '2',
      dataTotal: '30',
      dataShow: '10',
      dataIncrement: '10',
    });
    const pagination = createElement('div');

    const result = createPaginationButtons(controller, pagination);

    expect(result === true);
    expect(pagination.innerHTML.includes('<option value="2" selected>2</option>'));
    expect(pagination.innerHTML.includes('data-page="1"'));
    expect(pagination.innerHTML.includes('data-page="3"'));
  });
});
