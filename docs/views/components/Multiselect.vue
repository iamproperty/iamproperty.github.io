<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Multiselect</h1>
    </DSHeader>


    <p class="lead">The multiselect field is an interactive element typically used in forms to allow users to choose multiple options from a predefined set of options.</p>

    <p>The options are presented in a scrollable dropdown list (which has a max height). The field can also be used to type and filter options in the scrollable dropdown list.</p>


    <Multiselect>
      <span class="label" slot="label">Users</span>
      <label class="tag"><input type="checkbox" name="tags" value="James Lambert" />James Lambert</label>
      <label class="tag"><input type="checkbox" name="tags" value="Amanda Knight"/>Amanda Knight</label>
      <label class="tag"><input type="checkbox" name="tags" value="Brian Lord"/>Brian Lord</label>
      <label class="tag"><input type="checkbox" name="tags" value="Claire Lane"/>Claire Lane</label>
      <label class="tag"><input type="checkbox" name="tags" value="John Smith"/>John Smith</label>
      <label class="tag"><input type="checkbox" name="tags" value="James Brown"/>James Brown</label>
      <label class="tag"><input type="checkbox" name="tags" value="Sarah Brown"/>Sarah Brown</label>
    </Multiselect>
  
    <h2 class="mt-5">Behaviour</h2>
    <ul>
      <li>Selecting the field should open the dropdown with all the items in the list.</li>
      <li>Selecting an item from the list should add a tag in the field.</li>
      <li>The user should also be able to type to filter the list.</li>
      <li>When the item is selected the item should be removed from the list.</li>
      <li>The tag should have an option to remove it.</li>
      <li>When the tag is removed it should add the option back to the list.</li>
      <li>If the user types an invalid value and presses enter it should wipe that value from the field.</li>
    </ul>

    <h2>States</h2>

    <p class="lead pb-2 mt-4">Default</p>
    <Multiselect data-is-required data-error="">
      <span class="label" slot="label">Users</span>
      <label class="tag"><input type="checkbox" name="tags" value="James Lambert" />James Lambert</label>
      <label class="tag"><input type="checkbox" name="tags" value="Amanda Knight"/>Amanda Knight</label>
      <label class="tag"><input type="checkbox" name="tags" value="Brian Lord"/>Brian Lord</label>
      <label class="tag"><input type="checkbox" name="tags" value="Claire Lane"/>Claire Lane</label>
      <label class="tag"><input type="checkbox" name="tags" value="John Smith"/>John Smith</label>
      <label class="tag"><input type="checkbox" name="tags" value="James Brown"/>James Brown</label>
      <label class="tag"><input type="checkbox" name="tags" value="Sarah Brown"/>Sarah Brown</label>
    </Multiselect>

    <p class="lead pb-2 mt-4">Selected</p>
    <Multiselect data-is-required data-error="">
      <span class="label" slot="label">Users</span>
      <label class="tag"><input type="checkbox" name="tags" value="James Lambert" />James Lambert</label>
      <label class="tag"><input type="checkbox" name="tags" value="Amanda Knight" checked/>Amanda Knight</label>
      <label class="tag"><input type="checkbox" name="tags" value="Brian Lord"/>Brian Lord</label>
      <label class="tag"><input type="checkbox" name="tags" value="Claire Lane"/>Claire Lane</label>
      <label class="tag"><input type="checkbox" name="tags" value="John Smith"/>John Smith</label>
      <label class="tag"><input type="checkbox" name="tags" value="James Brown"/>James Brown</label>
      <label class="tag"><input type="checkbox" name="tags" value="Sarah Brown"/>Sarah Brown</label>
    </Multiselect>

    <p class="lead pb-2 mt-4">Error</p>
    <form novalidate class="was-validated">
      
      <Multiselect data-is-required data-error="">
        <span class="label" slot="label">Users</span>
        <label class="tag"><input type="checkbox" name="tags" value="James Lambert" />James Lambert</label>
        <label class="tag"><input type="checkbox" name="tags" value="Amanda Knight"/>Amanda Knight</label>
        <label class="tag"><input type="checkbox" name="tags" value="Brian Lord"/>Brian Lord</label>
        <label class="tag"><input type="checkbox" name="tags" value="Claire Lane"/>Claire Lane</label>
        <label class="tag"><input type="checkbox" name="tags" value="John Smith"/>John Smith</label>
        <label class="tag"><input type="checkbox" name="tags" value="James Brown"/>James Brown</label>
        <label class="tag"><input type="checkbox" name="tags" value="Sarah Brown"/>Sarah Brown</label>
      </Multiselect>

    </form>
  

    <Tabs class="container">
      <details>
        <summary><h2>Web component</h2></summary>
        <WebReadme></WebReadme>
      </details>
      <details>
        <summary><h2>Vue component</h2></summary>
        <VueReadme></VueReadme>
      </details>
    </Tabs>


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
import DSHeader from '../DSHeader.vue';
import headerImg from '../../img/type-header.png';
import anatomy from '../../img/file-upload-anatomy.png';
import Tabs from '@/components/Tabs/Tabs.vue'

import Input from '@/components/Input/Input.vue'
import Multiselect from '@/components/Multiselect/Multiselect.vue'
import VueReadme from '@/components/Multiselect/README.md'
import WebReadme from '~/ts/components/multiselect/README.md'

export default {
  components: {
    DSHeader,
    Input,
    Multiselect,
    VueReadme,
    Tabs,
    WebReadme
  },
  data () {
    return {
      headerImg: headerImg,
      anatomy: anatomy,
      message:'input field value',
      htmlUsage: `...`,
    }
  }
}
</script>
