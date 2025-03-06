// @ts-nocheck
import '@testing-library/jest-dom';
import { getChartData } from '../modules/chart.module';
import puppeteer from 'puppeteer';
import 'expect-puppeteer';

import iamCarousel from '../components/carousel/carousel.component';
import iamCard from '../components/card/card.component';

import {getProgressMax} from '../modules/carousel'

describe('The carousel component', () => {
  if (!window.customElements.get(`iam-carousel`)) window.customElements.define(`iam-carousel`, iamCarousel);
  if (!window.customElements.get(`iam-card`)) window.customElements.define(`iam-card`, iamCard);

  document.body.innerHTML = `
<iam-carousel>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
  <div>
    <iam-card>Financial preparation <span>Here would be the top level description of the task</span></iam-card>
  </div>
</iam-carousel>`;

  test('should have a pip for each item', () => {

    let component = document.querySelector('iam-carousel');
    let value = component?.shadowRoot?.querySelectorAll('.carousel__controls button').length;
    
    expect(value).toEqual(12);
  });

  test('should set the max value of the range input to the number of items divided by the visible items', () => {

    expect(getProgressMax(9, 3)).toEqual(7);
  });
});
