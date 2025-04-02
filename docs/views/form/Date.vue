<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/components/form">Form components</a></li>
      </ul>
      <h1>Date and time pickers</h1>
      <p>
        There is no need to use a bespoke JavaScript based datepicker as the browser support is very good for the
        default HTML5 date and time input types. For browsers that dont support them they revert back to text input
        fields and we can supply a validation pattern to make sure the format is correct.
      </p>
      <p>
        It is worth noting that date and time input fields still support min, max and step attributes to improve
        usability and accurency.
      </p>
    </div>
    <div class="container visualtest">
      <h2>Date only</h2>

      <form class="was-validated">
        <label data-error="Only weekday dates upto 7 days in the future are accepted">
          Date
          <span
            ><input type="date" data-start="1" data-period="7" data-allowed-days="1,2,3,4,5" /><span
              class="suffix fa-regular fa-calendar"
            ></span
          ></span>
          <span>Weekdays only</span>
        </label>
      </form>
    </div>
    <div class="container">
      <h3 class="pt-3">Modifying data-attributes</h3>
      <table class="mb-5">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Allowed values</th>
            <th>What it does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data-start</td>
            <td>positive or negative integer</td>
            <td>
              Updates the min attribute on the input to be the current date plus the integer passed. Negative values can
              be passed
            </td>
          </tr>
          <tr>
            <td>data-period</td>
            <td>positive integer</td>
            <td>Updates the max attribute on the input to be the start date plus the integer passed.</td>
          </tr>
          <tr>
            <td>data-allowed-days</td>
            <td>Comma delimetered array of integers</td>
            <td>Updates the max attribute on the input to be the start date plus the integer passed.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container visualtest">
      <form class="was-validated">
        <h2>Time only</h2>

        <label>
          Time
          <span
            ><input type="time" name="appt" min="09:00" max="17:00" /><span class="suffix fa-regular fa-clock"></span
          ></span>
        </label>

        <p class="note visualtest-hide">
          <strong>Note:</strong> The datetime-local, month and week input types should not be used due to limited
          support on the firefox browser. The user expereince of these input fields are not as good as the above fields
          and the above date and time inputs are much easier to understand.
        </p>
      </form>
    </div>
  </main>
</template>

<script>
  import Input from '@/components/Input/Input.vue';
  import Readme from '@/components/Input/README.md';

  export default {
    components: {
      Input,
      Readme,
    },
    data() {
      return {
        message: 'input field value',
        htmlUsage: `...`,
      };
    },
  };
</script>
