<script setup lang="ts">

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  
  import AdvancedSelect from '@/components/AdvancedSelect/AdvancedSelect.vue';
  import VueReadme from '@/components/Multiselect/README.md';
  import WebReadme from '~/ts/components/multiselect/README.md';
  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';
  import selectAnatomy from '../../img/advanced-select-anatomy.png';

</script>

<template>

  <TrackEvents
    selector="iam-carousel"
    :events="['pip-clicked', 'next-clicked', 'prev-clicked', 'slider-changed']"
  ></TrackEvents>
  <main>


    <DSHeader :image="headerImg" section="components">
      <h1>Advanced select</h1>
    </DSHeader>



    <p class="lead">
      The advanced select field is an interactive element typically used in forms to allow users to filter a list of predefined options and select one of those options.
    </p>

    <p>Advanced selects are useful when there are a lot of options in the list. The search functionality makes it simpler for the user to find the desired option quicker than a standard select.</p>

    <h2>Anatomy</h2>

    <p>Advanced selects contain 2 required parts (an input field (with suffix) and a menu).</p>

    <p>The valid values for the select are presented in a drop-down menu when the field clicked or tapped.</p>

    <p>When a value has been selected from the dropdown it will show in the field and set the fields state to default.</p>

    <img :src="selectAnatomy" class="mb-5" />

    <ul class="mb-5">
      <li>Input field (with suffix)</li>
      <li>Menu</li>
      <li>Clear field button - compact quiet action button</li>
    </ul>


    <h2>Behaviour</h2>



    <ul class="mb-5">
      <li>Selecting the field or chevron should activate the dropdown and set the field to active so the user can begin typing</li>
      <li>NOTE: selecting the field or chevron on mobile should show both the dropdown and keyboard.</li>
      <li>All valid options from the pre-defined list should be shown in the dropdown below</li>
      <li>Typing in the field should begin filtering options that match the term in the dropdownÆ</li>
      <li>Selecting an option should add that value to the field and close the dropdownÆ</li>
      <li>When the user re-opens the field once a value has been selected it should show all options with the current value shown as placeholder text and with that value highlighted in the dropdown as selected. Once the user starts typing the placeholder text should disappear</li>
      <li>If the field is empty and an invalid value is typed and enter is pressed then the field should revert back to empty</li>
      <li>If the field already has a value and the user tries to edit the value with a non-valid value then after press enter, the chevron, or clicks away from the field, the value should return to the last valid value.</li>

    </ul>

    <h2>State</h2>

    <div class="container visualtest">

      <div class="md-col-end-5 mb-4">
        <span class="d-block pb-2">DEFAULT</span>
        <AdvancedSelect class="">
          <label
            >Property address
            <span>
              <input type="text" name="client" autocomplete="off" aria-autocomplete="none" list="properties" />
              <span class="suffix fa-regular fa-chevron-down"></span>
            </span>
          </label>
          <datalist id="properties">
            <option value="1 Oak Road, Newcastle upon Tyne, NE2 6TY"></option>
            <option value="4 Beach Avenue, Newcastle upon Tyne, NE6 9PO"></option>
            <option value="4 Main Street, Newcastle upon Tyne, NE4 9JK"></option>
            <option value="6 Oak Ridge, Newcastle upon Tyne, NE1 1DU"></option>
            <option value="13 Oak Lane, Newcastle upon Tyne, NE3 6GH"></option>
            <option value="14 Main Road, Newcastle upon Tyne, NE1 6TU"></option>
          </datalist>
        </AdvancedSelect>
      </div>
        

    </div>



    <Integration component="advanced-select" componentName="advanced-select">
      <template #web-component>
        <pre><code>{{`<iam-advanced-select class="">
          <label
            >Property address
            <span>
              <input type="text" name="client" autocomplete="off" aria-autocomplete="none" list="properties" />
              <span class="suffix fa-regular fa-chevron-down"></span>
            </span>
          </label>
          <datalist id="properties">
            <option value="1 Oak Road, Newcastle upon Tyne, NE2 6TY"></option>
            <option value="4 Beach Avenue, Newcastle upon Tyne, NE6 9PO"></option>
            <option value="4 Main Street, Newcastle upon Tyne, NE4 9JK"></option>
            <option value="6 Oak Ridge, Newcastle upon Tyne, NE1 1DU"></option>
            <option value="13 Oak Lane, Newcastle upon Tyne, NE3 6GH"></option>
            <option value="14 Main Road, Newcastle upon Tyne, NE1 6TU"></option>
          </datalist>
        </iam-advanced-select>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import AdvancedSelect from '@/components/AdvancedSelect/AdvancedSelect.vue</script>

<AdvancedSelect class="">
  <label
    >Property address
    <span>
      <input type="text" name="client" autocomplete="off" aria-autocomplete="none" list="properties" />
      <span class="suffix fa-regular fa-chevron-down"></span>
    </span>
  </label>
  <datalist id="properties">
    <option value="1 Oak Road, Newcastle upon Tyne, NE2 6TY"></option>
    <option value="4 Beach Avenue, Newcastle upon Tyne, NE6 9PO"></option>
    <option value="4 Main Street, Newcastle upon Tyne, NE4 9JK"></option>
    <option value="6 Oak Ridge, Newcastle upon Tyne, NE1 1DU"></option>
    <option value="13 Oak Lane, Newcastle upon Tyne, NE3 6GH"></option>
    <option value="14 Main Road, Newcastle upon Tyne, NE1 6TU"></option>
  </datalist>
</AdvancedSelect>
`}}</code></pre>
      </template>

      
    </Integration>

    <Versions pdf="/pdfs/advanced-select.pdf">
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
            <td>21.05.2025</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>

<style lang="scss" scoped>
  @use '../../../assets/sass/func' as *;
</style>

