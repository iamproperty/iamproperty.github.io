// @ts-nocheck
import '@testing-library/jest-dom';
import { getChartData } from '../modules/chart.module';
import puppeteer from 'puppeteer';
import 'expect-puppeteer';

import iamFileupload from '../components/fileupload/fileupload.component';

describe('The Fileupload component', () => {
  if (!window.customElements.get(`iam-fileupload`)) window.customElements.define(`iam-fileupload`, iamFileupload);

  document.body.innerHTML = `
<iam-fileupload>
  <input type="file" name="files[]" accept=".pdf, .csv, .jpg, .png" multiple="multiple" />
</iam-fileupload>`;

  test('should have a title in its UI', () => {
    let component = document.querySelector('iam-fileupload');
    let title = component?.shadowRoot.querySelector('.file-upload__title');

    expect(title?.innerHTML).toContain('Upload file');
  });

  test('should have a button in its UI', () => {
    let component = document.querySelector('iam-fileupload');
    let button = component?.shadowRoot.querySelector('button');

    expect(button?.innerHTML).toContain('Upload file');
  });
});
