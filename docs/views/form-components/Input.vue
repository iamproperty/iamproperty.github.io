<script setup lang="ts">
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import Input from '@/components/Input/Input.vue';
  import Integration from '../Integration.vue';

</script>


<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Input</h1>
    </DSHeader>


    <p class="lead">The Input component does not replace the standard HTML input field; it enhances it and adds extra features.</p>


    
    <div class="container visualtest">

      <label>
        Standard input field
        <Input><input type="text" name="input" placeholder="Optional placeholder text"/></Input>
      </label>
      <p class="note mb-5"><strong>Note:</strong> It is recommended that you add the HTML input field and the Input component inside of a label, reducing the need for adding an ID attribute and creates a larger clickable area. </p>

      <h2>Adding a prefix or suffix</h2>
      <p>You can add a prefix or suffix in two ways; firstly by adding an attribute of `data-prefix-icon` with an icon name from font awesome or by adding to the `prefix` slot.</p>


      <label>
        Input field label
        <Input data-prefix-icon="envelope"><input type="text" name="input" placeholder="Optional placeholder text" required /></Input>
      </label>

      <label>
        Input field label
        <Input data-suffix-icon="edit"><input type="text" name="input" placeholder="Optional placeholder text" required /></Input>
      </label>

      
      <label>Input with 'days' suffix
        <Input title="Input field label" >
          <span slot="suffix">days</span>
          <input type="text" name="webcomp" placeholder="placeholder" />
        </Input>
      </label>


      <h2 class="pt-3 pb-3">Enhancing the color type input field</h2>

      <p class="pb-3">The input component will create an output field that will show the actual value being saved in hex format.</p>
      <label>
        Colour input field
        <Input><input type="color" name="colour" /></Input>
      </label>
      

      <h2 class="pt-5 pb-3">Enhancing the date type input field</h2>
      <p class="pb-3">The input component will preset the icon to a calendar icon.</p>

      <label>
        Date input field
        <Input><input type="date" name="webcomp" placeholder="placeholder" /></Input>
      </label>
      
      <h3 class="pt-4">Set which days are valid</h3>
      <p>By setting the `data-allowed-days` attribute it creates some custom validation checking the day of the week. For example setting `1,2,3,4,5` would allow weekdays only and setting `0,6` allows only weekend days.</p>
      <div class="was-validated">
        <label data-error="Weekdays only">
          Date input field
          <Input data-allowed-days="1,2,3,4,5">
            <input type="date" name="webcomp" placeholder="Placeholder" value="2025-12-13" min="2025-12-08" max="2025-12-16" />
          </Input>
        </label>
      </div>

      <h2 class="pt-5 pb-3">Changing type</h2>

      <p class="pb-3">By adding a select with the data attribute of `data-change-type` we can create a dynamic input type switcher.</p>
      <label for="time">Input field label

        <Input>
          <select name="time-period" data-change-type="" slot="prefix">
            <option value="date">Date</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="time">Time</option>
          </select>
          <input type="date" step="0" name="date" required class="" />
        </Input>
      </label>

      
    </div>

    <Integration component="fileupload" componentName="iam-fileupload">
      <template #web-component>
        <pre><code>{{`<iam-input><input type="text" name="input" /></iam-input>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Input from '@/components/Inpuit/Inpuit.vue</script>
        
<iam-input><input type="text" name="input" /></iam-input>

`}}</code></pre>
      </template>

      <template #attr>
        <table>
          <thead>
            <tr>
              <th>Attributes</th>
              <th>Default</th>
              <th>Options/Type</th>
              <th>Required</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>data-prefix-icon</th>
              <td>-</td>
              <td>String</td>
              <td>No</td>
              <td>Adds an icon before the input</td>
            </tr>
            <tr>
              <th>data-prefix-weight</th>
              <td>regular</td>
              <td>String</td>
              <td>No</td>
              <td>Controls the weight of the prefix icon</td>
            </tr>
            <tr>
              <th>data-suffix-icon</th>
              <td>-</td>
              <td>String</td>
              <td>No</td>
              <td>Adds an icon after the input</td>
            </tr>
            <tr>
              <th>data-suffix-weight</th>
              <td>regular</td>
              <td>String</td>
              <td>No</td>
              <td>Controls the weight of the suffix icon</td>
            </tr>
            <tr>
              <th>data-duplicate</th>
              <td>-</td>
              <td>String</td>
              <td>No</td>
              <td>Add an id of another input field for this input to watch and duplicate its value when chnage event is triggered. Meant to be used with two checkboxes but can also be used on input fields with the type of text or hidden. </td>
            </tr>
          </tbody>
        </table>
      </template>


      <template #slots>
        <table>
          <thead>
            <tr>
              <th>Slot</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>prefix</th>
              <td>Adds content to the prefix space before the input</td>
            </tr>
            <tr>
              <th>suffix</th>
              <td>Adds content to the suffix space after the input</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #classes>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>input--sm</th>
              <td>Reduces the size of the input field, this needs to be applied to the HTML input field and not the component.</td>
            </tr>
            <tr>
              <th>input--lg</th>
              <td>Enlarges the size of the input field, this needs to be applied to the HTML input field and not the component.</td>
            </tr>
          </tbody>
        </table>
      </template>


      <template #parts>
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>wrapper</th>
              <td>The span which contains the label for the component e.g., Upload file</td>
            </tr>
            <tr>
              <th>prefix</th>
              <td>The button which prompts the system file explorer to open</td>
            </tr>
            <tr>
              <th>suffix</th>
              <td>The div which houses an item per file that has been selected.</td>
            </tr>
          </tbody>
        </table>
      </template>


    </Integration>

    
  </main>
</template>
