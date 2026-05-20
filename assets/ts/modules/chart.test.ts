import { describe, expect, it } from './test.ts';
import { createElement, installTestDom } from './test-dom.ts';
import { createTypeSwitcher } from './chart.ts';

installTestDom();

describe('Legacy chart module', () => {
  it('creates chart option controls for legacy charts', () => {
    const chartElement = createElement('iam-chart', { dataTypes: 'bar,line', dataType: 'line' });
    const chartKey = createElement('div', { class: 'chart__key' });
    const chartOptions = createElement('div', { class: 'chart__options' });

    createTypeSwitcher(chartElement, chartKey, chartOptions);

    expect(chartOptions.innerHTML.includes('for="chart-'));
    expect(chartOptions.innerHTML.includes('bar'));
    expect(chartOptions.innerHTML.includes('line'));
  });
});
