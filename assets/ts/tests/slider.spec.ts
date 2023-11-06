// @ts-nocheck
import '@testing-library/jest-dom'
import * as tableModule from "../modules/table";
import puppeteer from 'puppeteer';
import "expect-puppeteer";


import iamSlider from "../components/slider/slider.component";

describe('The slider component', () => {

  if (!window.customElements.get(`iam-slider`))
    window.customElements.define(`iam-slider`, iamSlider);

  test('should always show the minimum and maximum values that it can be set', () => {

    document.body.innerHTML = `<label>Input field label <iam-slider><input type="number" name="percent" min="0" max="100" value="15" step="1" /></iam-slider></label>`;
    let component = document.querySelector('iam-slider');

    expect(component.shadowRoot.innerHTML).toContain('<div class="col min pe-2">0</div>')
    expect(component.shadowRoot.innerHTML).toContain('<div class="col max ps-2">100</div>')
  });

  test('should always have a secondary way of inputing the value i.e. a number input field', () => {

    document.body.innerHTML = `<label>Input field label <iam-slider><input type="number" name="percent" min="0" max="100" value="15" step="1" /></iam-slider></label>`;
    let component = document.querySelector('iam-slider');

    expect(component.querySelectorAll('input[type="number"]').length).toEqual(1)
    expect(component.shadowRoot.querySelectorAll('input[type="range"]').length).toEqual(1)
  });
    
});
