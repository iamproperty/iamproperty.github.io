// @ts-nocheck
import '@testing-library/jest-dom'
import * as tableModule from "../modules/table";
import puppeteer from 'puppeteer';
import "expect-puppeteer";


import iamSlider from "../components/slider/slider.component";

if (!window.customElements.get(`iam-slider`))
    window.customElements.define(`iam-slider`, iamSlider);

describe('The slider component', () => {

  const table = document.createElement('table');
    table.innerHTML = basicTable;

  tableModule.addDataAttributes(table);

  test('should always show the minimum and maximum values that it can be set', () => {

    document.body.innerHTML = `<label>Input field label <iam-slider><input type="number" name="percent" min="0" max="100" value="15" step="1" /></iam-slider></label>`;

    let component = document.querySelector('iam-slider');

console.log(component.shadowRoot);


    expect(document.body.innerHTML).toContain('It works!')

  });

});
