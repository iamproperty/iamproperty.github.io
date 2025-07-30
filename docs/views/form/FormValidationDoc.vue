<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Input from '@/components/Input/Input.vue';
  import Readme from '@/components/Input/README.md';


  const message = 'input field value';
  const htmlUsage = `...`;
  const i = 0;

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Form validation</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">
        Form validation on an input field can be triggered by either using the default form validation api and the
        supported CSS rules. Or set classes (.is-valid and .is-invalid) can be used so that server side validation can
        be used.
      </p>
    </div>

    <div class="container pb-5">
      <h2 class="h6">Error</h2>

      <p>
        When the field value is incorrect or empty when required we should show an error state for the field with an
        appropriate error message
      </p>

      <div class="was-validated">
        <label :for="`input1`">Input field label</label>
        <input type="text" :id="`input1`" :name="`input1`" placeholder="Optional placeholder text" required />
        <span>Optional helper text</span>
        <span class="invalid-feedback">This field is required</span>
      </div>

      <h2 class="h6 pt-3">Success</h2>

      <p>When the value in the field is valid we can choose to show a success state</p>

      <div class="was-validated">
        <label :for="`input2`">Input field label</label>
        <input
          type="text"
          :id="`input2`"
          :name="`input2`"
          placeholder="Optional placeholder text"
          required
          value="Correct value"
        />
        <span>Optional helper text</span>
        <span class="invalid-feedback">This field is required</span>
      </div>
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
              <td>12.07.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/inputs.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

