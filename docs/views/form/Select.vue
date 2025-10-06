<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import mobileImg from '../../img/mobile.png';
  import Anatomy from '../../img/selects-anatomy.png';
  import tabletDesktopImg from '../../img/tablet-desktop.png';
  import Tabs from '../../../src/components/Tabs/Tabs.vue';
  import Tab from '../../../src/components/Tabs/Tab.vue';
  import Table from '../../../src/components/Table/Table.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Selects</h1>
    </DSHeader>

    <p>Selects allow users to select one or multiple options from a list of options.</p>
    <p>
      A selected option can represent a value in a form, or can be used as an action to filter or sort existing content.
    </p>

    <h2>Select types</h2>

    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#standard">Standard</a></td>
          <td>
            - Select one option from a predefined set of options.<br />- Suitable when there are too many options for
            radio buttons.
          </td>
        </tr>
        <tr>
          <td><a href="#multiselect">multiselect</a></td>
          <td>
            - Select multiple options from a predefined set of options.<br />- Suitable when you need to select more
            than one option but checkboxes take up too much space.
          </td>
        </tr>
        <tr>
          <td><a href="#advancedselect" class="text-nowrap">Advanced select</a></td>
          <td>
            - Search and select one option from a predefined set of options.<br />- Suitable when there are a lot of
            options in the list. The search functionality makes it simpler for the user to find the desired option
            quicker than a standard select.
          </td>
        </tr>
      </tbody>
    </table>
    <!-- #region standard -->
    <h2 id="standard">Standard select</h2>
    <p>
      The standard select field is an interactive element typically used in forms to allow users to choose one option
      from a predefined set of options.
    </p>

    <p>The options are presented in a browser default drop-down menu when the field is clicked or tapped.</p>

    <p>
      Selects are useful when there are several options to choose from. If there are only a few options, consider using
      <a href="/form/radio">radio buttons</a> to present options instead.
    </p>

    <label class="md-col-end-4 mb-5">
      Property type
      <select name="select" required>
        <option value="">Select property address</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>
    </label>

    <h3>Anatomy</h3>
    <p>Selects are composed of 4 required sections and 5 optional sections.</p>

    <img :src="Anatomy" />

    <ol class="mb-5">
      <li>Field label (optional).</li>
      <li>Field.</li>
      <li>Placeholder text (optional).</li>
      <li>Validation icon (optional).</li>
      <li>Dropdown button</li>
      <li>Helper text (optional).</li>
      <li>Validation message (optional)</li>
      <li>Field value.</li>
      <li>Dropdown (browser default)</li>
    </ol>

    <h3>Behaviour</h3>

    <ul class="mb-5">
      <li>Selecting the field or chevron should activate the dropdown and set the field to active.</li>
      <li>All values from the list should be shown in the dropdown.</li>
      <li>Selecting an option should add that value to the field and close the dropdown.</li>
    </ul>

    <h3>States</h3>
    <div class="container visualtest">
      <div class="md-col-end-5 pb-5">
        <p class="lead pb-2">Inactive state</p>
        <label>
          Property type
          <select name="select" required>
            <option value="">Select property address</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </label>
      </div>
      <div class="md-col-start-6 md-col-end-10 pb-5">
        <p class="lead pb-2">Active state</p>
        <label>
          Property type
          <select name="select" required>
            <option value="">Select property address</option>
            <option selected>Bungalow</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </label>
      </div>
      <div class="md-col-end-5 pb-5">
        <p class="lead pb-2">Inactive state</p>
        <label>
          Property type
          <select name="select" required>
            <option value="">Select property address</option>
            <option>Option 1</option>
            <option selected>12 Oak Road, Newcastle upon Tyne, NE3 4Q</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </label>
      </div>
      <div class="md-col-start-6 md-col-end-10 pb-5">
        <p class="lead pb-2">Inactive - error state</p>
        <form class="was-validated">
          <label>
            Property type
            <select name="select" required>
              <option value="">Select property address</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </label>
        </form>
      </div>
    </div>
    <h3 class="mt-3">Implementation</h3>
    <pre><code>{{ `<label>
  Property type
  <select name="select" required>
    <option value="">Select property address</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
  </select>
</label>` }}</code></pre>

    <!-- #endregion -->

    <h2 class="mt-4" id="multiselect">Multiselect</h2>
    <p>
      The multiselect field is an interactive element typically used in forms to allow users to choose multiple options
      from a predefined set of options.
    </p>

    <p>
      The options are presented in a scrollable menu (which has a max height). The field can also be used to type and
      filter options in the scrollable menu
    </p>

    <a href="/components/multiselect" class="btn btn-primary">See multiselect component</a>

    <h2 class="mt-4" id="advancedselect">Advanced select</h2>

    <p>
      The search select field is an interactive element typically used in forms to allow users to filter a list of
      predefined options and select one of those options.
    </p>

    <p>
      Advanced selects are useful when there are a lot of options in the list. The search functionality makes it simpler
      for the user to find the desired option quicker than a standard select
    </p>

    <a href="/components/advanced-select" class="btn btn-primary">See advanced select component</a>

    <!--
  <div class="container">

    <p>Lorem ipsum dolor sirw amet, </p>
    <label>View: <select class="select--minimal"><option>Action 1</option><option>Action 2</option></select></label>
    
    <span class="dialog__wrapper"><label>View: <select class="select--minimal" data-click-events='[{"event": "setAttribute","target":"#dateFilter", "attribute": "open", "value":"true"},{"event": "focus","target":"#dateFilter"}]'><option>Action 1</option></select></label><dialog id="dateFilter"><select ><option>Action 1</option><option>Action 2</option></select></dialog></span>

  </div>
-->

    <div class="bg-light version-control mt-5">
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
              <td>18.03.2024</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/select.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>
