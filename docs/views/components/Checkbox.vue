<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Form checkbox fields (Beta)</h1>
    </DSHeader>

    <div class="container pb-0">
      
      <p class="lead">...</p>
    </div>

    <SelectionControl></SelectionControl>

    <div class="container pb-0">
      <h2>Standard checkboxes</h2>
      <p>...</p>
    </div>

    <div class="container visualtest">

      <div class="row pe-none">

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Unselected</h3>
          <input type="checkbox" name="radio1" id="radio1" />
          <label for="radio1">Radio button copy</label>
        </div>

        <div class="col-6 col-md-4 pb-3">

          <h3 class="lead text-uppercase text-body pb-2">Selected</h3>
          <input type="checkbox" name="radio2" id="radio2" checked />
          <label for="radio2">Radio button copy </label>
        </div>

        <hr/>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Hover/focus unselected</h3>
        <input type="checkbox" name="radio3" id="radio3" class="focus" />
        <label for="radio3">Radio button copy </label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Hover/focus Selected</h3>
          <input type="checkbox" name="radio4" id="radio4" class="focus" checked />
          <label for="radio4">Radio button copy </label>
        </div>

        <hr/>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Pressed unselected</h3>
        <input type="checkbox" name="radio5" id="radio5" class="active" />
        <label for="radio5">Radio button copy </label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Pressed Selected</h3>
        <input type="checkbox" name="radio6" id="radio6" class="active" checked />
        <label for="radio6">Radio button copy </label>
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
          <label for="radio10">Radio button copy</label>
        </div>

        <div class="col-6 col-md-4 pb-3">

          <h3 class="lead text-uppercase text-body pb-2">Disabled Selected</h3>
          <input type="checkbox" name="radio20" id="radio20" checked disabled />
          <label for="radio20">Radio button copy </label>
        </div>

        <hr/>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Hover/focus unselected</h3>
          <input type="checkbox" name="radio30" id="radio30" class="focus" disabled />
          <label for="radio30">Radio button copy </label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Hover/focus Selected</h3>
          <input type="checkbox" name="radio40" id="radio40" class="focus" checked disabled />
          <label for="radio40">Radio button copy </label>
        </div>
      </div>
    </div>

    
    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h2>HTML</h2></summary>
          
          <pre><code class="html">{{`<input type="checkbox" id="checkbox" name="checkbox"  />
<label for="checkbox">Input field label</label>`}}</code></pre>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <p class="pb-3">The checkbox input field uses the same Vue component as the input field, the type just needs to be set to 'checkbox'. The name attribute is required for the checkbox input field.</p>
          <Readme></Readme>
        </details>
      </Tabs>
    </div>
    
    <!--
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
              <td>13.07.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/radio-buttons.pdf" download>Download latest designs</a>
      </div>
    </div>
    -->
  </main>
</template>


<script>

import DSHeader from '../DSHeader.vue';
import SelectionControl from '../selectionControls.vue';
import headerImg from '../../img/type-header.png';
import Input from '@/components/Input/Input.vue';
import Readme from '@/components/Input/README.md';
import Tabs from '@/components/Tabs/Tabs.vue'
import Card from '@/components/Card/Card.vue'

export default {
  components: {
    DSHeader,
    SelectionControl,
    Input,
    Readme,
    Tabs,
    Card
  },
  data () {
    return {
      headerImg: headerImg,
      message:'input field value',
      htmlUsage: `...`,
    }
  }
}
</script>