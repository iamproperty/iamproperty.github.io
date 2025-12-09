<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import sliderAnatomy from '../../img/slider-anatomy.png';
  import sliderUsage1 from '../../img/slider-usage-1.png';
  import sliderUsage2 from '../../img/slider-usage-2.png';
  import sliderUsage3 from '../../img/slider-usage-3.png';
  import sliderBehaviour1 from '../../img/slider-behaviour-1.png';
  import sliderBehaviour2 from '../../img/slider-behaviour-2.png';
  import sliderBehaviour3 from '../../img/slider-behaviour-3.png';
  import sliderBehaviour4 from '../../img/slider-behaviour-4.png';

  import Slider from '@/components/Slider/Slider.vue';

  import Readme from '@/components/Slider/README.md';
  import WebReadme from '~/ts/components/slider/README.md';
  import Tabs from '@/components/Tabs/Tabs.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Slider</h1>
    </DSHeader>

    <div class="container pb-5">
      <p class="lead">The slider component allows users to make selections from a range of values.</p>
      <h2>Introduction</h2>
      <p>
        The slider component allows users to view and select a value (or range) from the range along a bar. They’re
        ideal for adjusting settings on an interface or for updating fields on forms.
      </p>
      <h2>Anatomy</h2>
      <img :src="sliderAnatomy" />
      <ol>
        <li>Input field label</li>
        <li>Indicator</li>
        <li>Thumb</li>
        <li>Feedback</li>
        <li>Track</li>
        <li>Text input</li>
        <li>Min label</li>
        <li>Max label</li>
        <li>Minumum text input</li>
        <li>Divider</li>
        <li>Maximum text input</li>
      </ol>
    </div>

    <div class="container pb-5">
      <h2>Form Range Field variants</h2>
      <p>
        The choice of form range field variant depends on the specific design requirements, user interactions, and the
        overall aesthetic of the user interface. Different variants can offer more intuitive and engaging ways for users
        to interact with and select values within a given range.
      </p>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Use case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              The default form range fieldhas a draggable thumb that users can slide along a track to select a single
              value within a specified range.
            </td>
          </tr>
          <tr>
            <td>Dual</td>
            <td>
              A dual form range field allows users to select a range of values, typically by using two thumbs. It’s
              commonly used for selecting a minimum and maximum value, such as setting a price range or a date range.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="container pb-0">
      <h3>Default</h3>
      <p>
        The default form range field is useful for when you need to oer users a dynamic and visually intuitive way to
        select a single value within a defined range, i.e. Bedrooms, bathrooms, etc.
      </p>
    </div>

    <div class="container visualtest">
      <label
        >Input field label <Slider><input type="number" min="0" max="100" value="15" step="1" /></Slider
      ></label>
    </div>

    <div class="container pb-0">
      <h3>Dual</h3>
      <p>
        The dual form range field is useful for when you want to give users control over a specific numeric range or
        interval, enabling them to define the parameters for their search, filtering, or selection requirements.
      </p>
    </div>

    <div class="container visualtest">
      <label
        >Input field label
        <Slider>
          <input type="range" min="0" max="100" value="20" step="10" name="min" />
          <input type="range" min="0" max="100" value="50" step="10" name="max" />
        </Slider>
      </label>
    </div>

    <div class="container pt-5">
      <h2>Usage</h2>
      <div class="row">
        <div class="col-sm-6">
          <img :src="sliderUsage1" class="mb-2" />
          <p class="text-center">
            The min and max values of the form range field can be customised. You can also add additional values to the
            slider.
          </p>
        </div>
        <div class="col-sm-6">
          <img :src="sliderUsage2" class="mb-2" />
          <p class="text-center">
            When a form range field is in use, a tool tip should display the value in a text input and update the value
            as the Thumb is moved along the track.
          </p>
        </div>
        <div class="col-sm-6">
          <img :src="sliderUsage3" class="mb-2" />
          <p class="text-center">
            The form range field step distance can be adjusted to increase or decrease the number of steps when the
            thumb is dragged along the track.
          </p>
        </div>
      </div>
    </div>

    <div class="container pt-5 pb-5">
      <h2>Behaviours</h2>
      <div class="row">
        <div class="col-sm-6">
          <img :src="sliderBehaviour1" class="mb-2" />
          <p class="text-center">
            <strong>Click and drag</strong><br />The form range field is controlled by clicking the thumb and dragging
            it.
          </p>
        </div>
        <div class="col-sm-6">
          <img :src="sliderBehaviour2" class="mb-2" />
          <p class="text-center">
            <strong>Click jump</strong><br />The form range field is controlled by clicking the track.
          </p>
        </div>
        <div class="col-sm-6">
          <img :src="sliderBehaviour3" class="mb-2" />
          <p class="text-center">
            <strong>Click and arrow</strong><br />The form range field is controlled by clicking the thumb, then using
            arrow keys to move it.
          </p>
        </div>
        <div class="col-sm-6">
          <img :src="sliderBehaviour4" class="mb-2" />
          <p class="text-center">
            <strong>Tab and arrow</strong><br />The form range field is controlled by using the tab key to select the
            thumb of the desired slider, then using arrow keys to move it.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h2>Web component</h2></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <Readme></Readme>
        </details>
        <details>
          <summary><h2>Acceptance Criteria</h2></summary>
          <ul>
            <li>The slider should always show the minimum and maximum values that it can be set</li>
            <li>The slider should always have a secondary way of inputing the value i.e. a number input field</li>
            <li>The track of the slider should be clickable and update the value of the field</li>
            <li>The thumb should be draggable and it will update the value of the field</li>
            <li>The value should go up in amounts set via the step attribute</li>
            <li>
              The slider should still be usable via a users keyboard via tabbing to enable focus and the direction
              buttons to increase/decrease the value.
            </li>
            <li>Only one or two input values are supported in the slider component</li>
          </ul>
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
              <td>V1</td>
              <td>13.09.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/slider.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>
