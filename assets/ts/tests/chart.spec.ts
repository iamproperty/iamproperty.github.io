// @ts-nocheck
import '@testing-library/jest-dom';
import { getChartData } from '../modules/chart.module';
import puppeteer from 'puppeteer';
import 'expect-puppeteer';

import iamBarChart from '../components/barchart/barchart.component';

describe('The bar chart component', () => {
  if (!window.customElements.get(`iam-barchart`)) window.customElements.define(`iam-barchart`, iamBarChart);

  document.body.innerHTML = `
<iam-barchart>
<table>
  <thead>
    <tr>
      <th>Items</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item 1</td>
      <td>300</td>
    </tr>
    <tr>
      <td>Item 2</td>
      <td>150</td>
    </tr>
    <tr>
      <td>Item 3</td>
      <td>100</td>
    </tr>
  </tbody>
</table>
</iam-barchart>`;

  test('should create the min attribute as 0', () => {
    let component = document.querySelector('iam-barchart');
    let { min } = getChartData(component);

    expect(min).toEqual(0);
  });

  test('should equal the largest single value', () => {
    let component = document.querySelector('iam-barchart');
    let { max } = getChartData(component);

    expect(max).toEqual(300);
  });

  test('should equal the largest single value', () => {
    let component = document.querySelector('iam-barchart');
    let { max } = getChartData(component);

    expect(max).toEqual(300);
  });

  test('should have the class of .chart--fit-content added as there is less than 10 bars', () => {
    let component = document.querySelector('iam-barchart');
    expect(component.classList).toContain('chart--fit-content');
  });

  test('should have the class of .chart--no-scale added as there is less than 5 bars', () => {
    let component = document.querySelector('iam-barchart');
    expect(component.classList).toContain('chart--no-scale');
  });
});
