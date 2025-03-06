// @ts-nocheck
import '@testing-library/jest-dom';
import { getChartData } from '../modules/chart.module';
import puppeteer from 'puppeteer';
import 'expect-puppeteer';

import iamCard from '../components/card/card.component';

describe('The card component', () => {
  if (!window.customElements.get(`iam-card`)) window.customElements.define(`iam-card`, iamCard);

  document.body.innerHTML = `
<iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>`;

  test('should have the class of card added to it', () => {
    let component = document.querySelector('iam-card');
    expect(component.classList).toContain('card');
  });
});
