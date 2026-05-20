import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { append } from './test-utils.ts';
import { addClasses } from './chart.module.ts';

installTestDom();

describe('Chart module', () => {
  it('reads chart data and applies configured colour variables', () => {
    const chartElement = createElement('iam-chart', {
      dataMin: '0',
      dataMax: '100',
      dataYaxis: '0,50,100',
      dataGuidelines: '25,75',
      'data-colour-1': 'success',
    });
    const chartOuter = createElement('div');
    const coloured = createElement('span', { 'data-colour-2': 'warning' });
    append(chartOuter, coloured);

    addClasses(chartElement, chartOuter);

    expect(chartElement.style.getPropertyValue('--chart-colour-1') === 'var(--chart-colour-success)');
    expect(coloured.style.getPropertyValue('--chart-colour-2-hover') === 'var(--chart-colour-warning-hover)');
  });
});
