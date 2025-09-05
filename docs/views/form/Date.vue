<script setup>
  import Input from '@/components/Input/Input.vue';
  import Readme from '@/components/Input/README.md';

  import Integration from '../Integration.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import anatomyImg from '../../img/date-time-anatomy.png';
  import dateStatesImg from '../../img/date-time-date-states.png';
  import timeStatesImg from '../../img/date-time-time-states.png';

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Date and time pickers</h1>
    </DSHeader>

      <ul class="breadcrumb">
        <li><a href="/components/form">Form components</a></li>
      </ul>
      
      <p class="lead md-col-end-7">
        Use date and time pickers when users need to select specific dates, times, or date ranges as part of a form or workflow. These components provide a visual and intuitive way to input temporal data, ensuring consistency in formatting and reducing manual entry errors.
      </p>

      <h2>Anatomy</h2>

      <img :src="anatomyImg" class="mb-3" />

      <div class="mb-3">
        <ol>
          <li>
            Input field (with suffix)
          </li>
          <li>
            Help text (optional)
          </li>
          <li>
            Date picker (browser-native)
          </li>
          <li>
            Time picker (browser-native)
          </li>
        </ol>
      </div>

      <h2>Date Picker</h2>

      <h3>Behaviour</h3>
      
      <p class="md-col-end-7">
        Use a date picker when users need to select a specific calendar date, such as for bookings, filtering, deadlines, or event scheduling.
      </p> 

      <ul>
        <li>
          Selecting the field will set the field to active so the user can begin typing.
        </li>
        <li>
          Depending on restrictions the user can type a day, month and year in DD/MM/YYYY numerical format.
        </li>
        <li>
          Selecting the suffix will display a native date picker.
        </li>
        <li>
          Choosing a date from the date picker will populate the field with the chosen date and close the picker.
        </li>
        <li>
          If the field is empty and an invalid value is typed and enter is pressed then the field should revert back to empty.
        </li>
        <li>
          If the field already has a value and the user tries to edit the value with a non-valid value then after press enter, the suffix, or clicks away from the field, the value should return to the last valid value.
        </li>
      </ul>

      <h3>States</h3>

      <img :src="dateStatesImg" class="mb-3" />
      
      <h2>Time Picker</h2>

      <h3>Behaviour</h3>

      <p>
        Use a time picker when users need to select a specific time of day, such as for appointments, scheduling reminders, or configuring time-based settings.
      </p>

      <ul>
        <li>
          Selecting the field will set the field to active so the user can begin typing.
        </li>
        <li>
          Depending on restrictions the user can type minute and hour values in 24 hour numerical format.
        </li>
        <li>
          Selecting the suffix will display a native time picker.
        </li>
        <li>
          Choosing a minute value from the date picker will populate the field with the chosen minute value.
        </li>
        <li>
          Choosing an hour value from the date picker will populate the field with the chosen hour value.
        </li>
        <li>
          Clicking away from the time picker will close the picker.
        </li>
        <li>
          If the field is empty and an invalid value is typed and enter is pressed then the field should revert back to empty.
        </li>
        <li>
          If the field already has a value and the user tries to edit the value with a non-valid value then after press enter, the suffix, or clicks away from the field, the value should return to the last valid value.
        </li>
      </ul>

      <h3>States</h3>
     
      <img :src="timeStatesImg" class="mb-3" />

      <Integration component="input" componentName="input">
      <template #web-component>
        <pre><code>{{`<input type="date"/>
<span class="suffix fa-regular fa-calendar">
        `}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Input from '@/components/Input/Input.vue';</script>
        
<input type="date"/>
<span class="suffix fa-regular fa-calendar">
`}}</code></pre>
      </template>

      <template #dispatched-events>
        <span v-html="events"></span>
      </template>

      <template #criteria>
      </template>
      <template #data-layer>
        <span v-html="events"></span>
      </template>
    </Integration>
  </main>
</template>
