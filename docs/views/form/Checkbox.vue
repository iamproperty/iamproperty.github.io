<script setup>
  import DSHeader from '../DSHeader.vue';
  import SelectionControl from '../selectionControls.vue';
  import headerImg from '../../img/type-header.png';
  import Input from '@/components/Input/Input.vue';
  import Readme from '@/components/Input/README.md';
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Card from '@/components/Card/Card.vue';

  const message = 'input field value';
  const htmlUsage = `...`;
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Form Checkboxes</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">
        Checkboxes allow the user to select one or multiple options from a set. Use checkboxes when the user needs to
        see all available options. If available options can be collapsed, consider using a dropdown menu because it uses
        less space.
      </p>
    </div>

    <SelectionControl></SelectionControl>

    <div class="container pb-0">
      <h2>Checkbox</h2>
      <p>
        Checkboxes feature a button alongside a label. The label should clearly explain the option that can be selected.
        The button should sit in a container of 2.5rem (40px) with 0.5rem (8px) of padding between the button and the
        label.
      </p>
    </div>

    <div class="container visualtest">
      <div class="row pe-none">
        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Unselected</h3>
          <input type="checkbox" name="radio1" id="radio1" />
          <label for="radio1">Checkbox</label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Selected</h3>
          <input type="checkbox" name="radio2" id="radio2" checked />
          <label for="radio2">Checkbox </label>
        </div>

        <div class="col-6 col-md-4 pb-3 was-validated">
          <h3 class="lead text-uppercase text-body pb-2">Error</h3>
          <input type="checkbox" name="radio2a" id="radio2a" required />
          <label for="radio2a">Checkbox </label>
          <span>Optional helper text</span>
          <span class="invalid-feedback">This field is required</span>
        </div>

        <hr />

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Hover/focus unselected</h3>
          <input type="checkbox" name="radio3" id="radio3" class="focus" />
          <label for="radio3">Checkbox </label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Hover/focus Selected</h3>
          <input type="checkbox" name="radio4" id="radio4" class="focus" checked />
          <label for="radio4">Checkbox </label>
        </div>

        <div class="col-6 col-md-4 pb-3 was-validated">
          <h3 class="lead text-uppercase text-body pb-2">Hover/focus error</h3>
          <input type="checkbox" name="radio2b" id="radio2b" class="focus" required />
          <label for="radio2b">Checkbox </label>
          <span>Optional helper text</span>
          <span class="invalid-feedback">This field is required</span>
        </div>

        <hr />

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Pressed unselected</h3>
          <input type="checkbox" name="radio5" id="radio5" class="active" />
          <label for="radio5">Checkbox </label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Pressed Selected</h3>
          <input type="checkbox" name="radio6" id="radio6" class="active" checked />
          <label for="radio6">Checkbox </label>
        </div>

        <div class="col-6 col-md-4 pb-3 was-validated">
          <h3 class="lead text-uppercase text-body pb-2">Pressed Error</h3>
          <input type="checkbox" name="radio2c" id="radio2c" class="active" required />
          <label for="radio2c">Checkbox </label>
          <span>Optional helper text</span>
          <span class="invalid-feedback">This field is required</span>
        </div>
      </div>
    </div>

    <div class="container pt-4 pb-0">
      <h2>Disabled Checkboxes</h2>
    </div>

    <div class="container visualtest">
      <div class="row">
        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Unselected</h3>
          <input type="checkbox" name="radio10" id="radio10" disabled />
          <label for="radio10">Checkbox</label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Selected</h3>
          <input type="checkbox" name="radio20" id="radio20" checked disabled />
          <label for="radio20">Checkbox </label>
        </div>

        <hr />

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Hover/focus unselected</h3>
          <input type="checkbox" name="radio30" id="radio30" class="focus" disabled />
          <label for="radio30">Checkbox </label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Hover/focus Selected</h3>
          <input type="checkbox" name="radio40" id="radio40" class="focus" checked disabled />
          <label for="radio40">Checkbox </label>
        </div>
      </div>
    </div>

    <div class="container pt-4 pb-0">
      <h2>Behaviour</h2>
    </div>

    <div class="container visualtest">
      <div class="row">
        <div class="col-12 col-sm-6">
          <div class="demo">
            <fieldset style="width: 15rem">
              <legend>Field Descriptor</legend>
              <input type="checkbox" name="check1" id="check1" class="focus" />
              <label for="check1">Option 1 </label>
              <input type="checkbox" name="check2" id="check2" class="focus" checked />
              <label for="check2">Option 2 </label>
              <input type="checkbox" name="check3" id="check3" class="focus" />
              <label for="check3">Option 3 </label>
              <span>Assistive text</span>
            </fieldset>
          </div>
          <p>
            Group together selection controls (e.g. for input, radio button and checkbox) in a fieldset, along with
            labels and assistive text. Add a field descriptor to the grouped elements to further clarify where needed.
          </p>
        </div>
        <div class="col-12 col-sm-6">
          <div class="demo">
            <fieldset style="max-width: 12rem">
              <input type="checkbox" name="check4" id="check4" class="focus" />
              <label for="check4">Label overflowing across multiple lines </label>
            </fieldset>
          </div>
          <p>When a Label is too long for the available horizontal space, it wraps to form another line.</p>
        </div>
        <div class="col-12 col-sm-6">
          <div class="demo">
            <div class="was-validated" style="width: 15rem">
              <fieldset>
                <legend>Field Descriptor</legend>
                <input type="checkbox" name="check5" id="check5" class="focus" required />
                <label for="check5">Label</label>
                <span class="invalid-feedback">You need to accept the terms and conditions</span>
              </fieldset>
              <button class="btn btn-primary">Submit</button>
            </div>
          </div>
          <p>Validation: Use the form to choose whether the checkbox validates on submit.</p>
        </div>
        <div class="col-12 col-sm-6">
          <div class="demo">
            <div class="was-validated" style="width: 15rem">
              <fieldset>
                <legend>Field Descriptor</legend>
                <input type="checkbox" name="check10" id="check10" class="focus" checked />
                <label for="check10">Option 1 </label>
                <input type="checkbox" name="check20" id="check20" class="focus" checked />
                <label for="check20">Option 2 </label>
                <input type="checkbox" name="check30" id="check30" class="focus" />
                <label for="check30">Option 3 </label>
                <span>Assistive text</span>
              </fieldset>
            </div>
          </div>
          <p>
            Use checkboxes either for selecting multiple options from a list, or to check or uncheck a control. If users
            can only select a single option, use the
            <a href="/components/radio">radio button</a> instead.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h2>HTML</h2></summary>

          <pre><code class="html">{{`<div>
  <input type="checkbox" id="checkbox" name="checkbox" />
  <label for="checkbox">Input field label</label>
</div>`}}</code></pre>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <p class="pb-3">
            The checkbox input field uses the same Vue component as the input field, the type just needs to be set to
            'checkbox'. The name attribute is required for the checkbox input field.
          </p>
          <Readme></Readme>
        </details>
      </Tabs>
    </div>

    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>V1 added</td>
              <td>05.09.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/checkboxes.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
  .demo {
    background-color: #f2f2f2;

    border: 1px solid #707070;
    padding: 1rem;
    display: flex;

    justify-content: center;
    align-items: center;

    margin-bottom: 1rem;

    height: 20rem;
  }

  .demo > .was-validated {
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
