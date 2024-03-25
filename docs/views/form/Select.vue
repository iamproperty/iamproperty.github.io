<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Selects</h1>
    </DSHeader>


    <h2>Introduction</h2>
    <p>Selects allow users to select one or multiple options from a list of options. A selected option can represent a value in a form, or can be used as an action to filter or sort existing content.</p>


    <h2>Anatomy</h2>
    <p>Selects are composed of 4 required sections and 6 optional sections.</p>
    
    <img :src="Anatomy" />

    <ol>
      <li>Field label (optional).</li>
      <li>Field.</li>
      <li>Placeholder text (optional).</li>
      <li>Validation icon (optional).</li>
      <li>Dropdown button</li>
      <li>Helper text (optional).</li>
      <li>Validation message (optional)</li>
      <li>Field value.</li>
      <li>Clear field button (only for search select)</li>
      <li>Dropdown (browser default)</li>
    </ol>

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
          <td>- Select one option from a predefined set of options.<br/>- Suitable when there are too many options for radio buttons.</td>
        </tr>
        <tr>
          <td><a href="#multiselect">multiselect</a></td>
          <td>- Select multiple options from a predefined set of options.<br/>- Suitable when you need to select more than one option but checkboxes take up too much space.</td>
        </tr>
        <tr>
          <td><a href="#searchselect" class="text-nowrap">Search select</a></td>
          <td>- Search and select one option from a predefined set of options.<br/>- Suitable when there are a lot of options in the list. The search functionality makes it simpler for the user to find the desired option quicker than a standard select.</td>
        </tr>
      </tbody>
    </table>


    <h2 id="standard">Standard select</h2>
    <!-- #region standard -->

    <p>The standard select field is an interactive element typically used in forms to allow users to choose one option from a predefined set of options.</p>

    <p>The options are presented in a browser default drop-down menu when the field is clicked or tapped.</p>

    <p>Selects are useful when there are several options to choose from. If there are only a few options, consider using radio buttons to present options instead.</p>
    
    <h3>States</h3>

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
    <p class="lead pb-2 mt-4">Active state</p>
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

    <p class="lead pb-2 mt-4">Inactive - error state</p>
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
    <p>The multiselect field is an interactive element typically used in forms to allow users to choose multiple options from a predefined set of options.</p>

    <p>The options are presented in a scrollable dropdown list (which has a max height). The field can also be used to type and filter options in the scrollable dropdown list.</p>

    <a href="/components/multiselect" class="btn btn-primary">See multiselect component</a>

    <h2 class="mt-4" id="searchselect">Search select</h2>

    <p>The search select field is an interactive element typically used in forms to allow users to filter a list of predefined options and select one of those options.</p>

    <p>The options are presented in a browser default drop-down menu when the field clicked or tapped.</p>

    <p>Search selects are useful when there are a lot of options in the list. The search functionality makes it simpler for the user to find the desired option quicker than a standard select.</p>


    <a href="/components/search" class="btn btn-primary">See search component</a>


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

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import mobileImg from '../../img/mobile.png'
import Anatomy from '../../img/selects-anatomy.png'
import tabletDesktopImg from '../../img/tablet-desktop.png'
import Tabs from '../../../src/components/Tabs/Tabs.vue'
import Tab from '../../../src/components/Tabs/Tab.vue'
import Table from '../../../src/components/Table/Table.vue'

export default {
  name: 'TypeDoc',
  components: {
    DSHeader,
    Tabs,
    Tab,
    Table
  },
  data: function () {
    return {
      headerImg: headerImg,
      Anatomy: Anatomy,
      tabletDesktopImg: tabletDesktopImg
    }
  }
}
</script>
