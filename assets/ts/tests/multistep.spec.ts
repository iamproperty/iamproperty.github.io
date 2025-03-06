// @ts-nocheck
import '@testing-library/jest-dom';
import { getChartData } from '../modules/chart.module';
import puppeteer from 'puppeteer';
import 'expect-puppeteer';

import iamMultiStep from '../components/multi-step/multi-step.component';


describe('The Multi-step component', () => {
  if (!window.customElements.get(`iam-multi-step`)) window.customElements.define(`iam-multi-step`, iamMultiStep);

  document.body.innerHTML = `
<iam-multi-step>
  <form>
    <span class="h3">Multi-step modal title</span>

    <fieldset data-title="Personal details">
      <div>
        <label for="input1">Name 1</label>
        <input type="text" id="input1" name="input1" placeholder="Optional placeholder text" required="" />
        <span class="invalid-feedback">This field is required</span>
      </div>
    </fieldset>
    <fieldset data-title="Property details">
      <div>
        <label for="input2">Name 2</label>
        <input type="text" id="input2" name="input2" placeholder="Optional placeholder text" required="" />
        <span class="invalid-feedback">This field is required</span>
      </div>
    </fieldset>
    <fieldset data-title="Location">
      <div>
        <label for="input3">Name 3</label>
        <input
          type="text"
          id="input3"
          name="input3"
          placeholder="Optional placeholder text"
          required=""
          class="is-invalid"
        />
        <span class="invalid-feedback">This field is required</span>
      </div>
    </fieldset>
    <fieldset data-title="Submit property">
      <div>
        <label for="input4">Name 4</label>
        <input type="text" id="input4" name="input4" placeholder="Optional placeholder text" required="" />
        <span class="invalid-feedback">This field is required</span>
      </div>
    </fieldset>
    <button class="btn btn-primary colour-success" type="submit">Register</button>
  </form>

</iam-multi-step>`;

  test('should add the active class to the first fieldset element', () => {

    let component = document.querySelector('iam-multi-step');
    let fieldset = component.querySelector('fieldset')


    expect(fieldset.classList).toContain('active');
  });

  test('should have a next button added to each fieldset element', () => {

    let component = document.querySelector('iam-multi-step');
    let fieldset = component.querySelector('fieldset')
    let button = fieldset.querySelector('.btn--wrapper button[data-next]')

    expect(button?.innerHTML).toContain('Next');
  });

  test('should have a steps list created using the data-title attributes for content', () => {

    let component = document.querySelector('iam-multi-step');
    let button = component?.shadowRoot.querySelector('.steps button');

    expect(button?.innerHTML).toContain('Personal details');
  });
});
