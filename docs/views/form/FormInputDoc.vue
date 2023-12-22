<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Form input fields</h1>
    </DSHeader>


    <div class="container pb-0">

      <p class="lead">Use forms input fields when user need to provide and submit relevant information such as new data entries.</p>

      <h2>Best practice</h2>

      <h3 class="h6">Layout</h3>
      <ul class="mb-5">
        <li>Group related sections into logical sets to allow users to understand the information they need to enter.</li>
        <li>Use one form column to enable fast field comprehension where possible. If the fields are tightly connected, they can be added to the same row. Research shows users still perceive this as a one-column.</li>
        <li>Max-width: 800px, In other cases, assume that the width typically follows where the form lives in (Modal, focused task, page, etc.)</li>
      </ul>
      
      <h3 class="h6">Fields and labels</h3>
      <ul class="mb-5">
        <li>Reduce the number of input fields in your form to avoid a large cognitive load on users (or to help users submit the form faster).</li>
        <li>Avoid optional input fields by only asking users for relevant information.</li>
        <li>Avoid using default selections, or, instead, use smart defaults (e.g. preselect user’s country based on location data).</li>
        <li>Always include a visual label outside an input field. Don’t use placeholder text in place of labels. (The only exception to this is for search fields, which often have icons or other indicators of purpose.)</li>
        <li>Use input masks to auto insert the correct format in the field. This is particularly useful when entering phone numbers and card details.</li>
        <li>Only use placeholder text when relevant. If it’s clear from the field name what needs to be entered then don’t use one, for example ‘First Name’. If the field name is more ambiguous like ‘Name’ or ‘Address’ then the placeholder text can be more specific about what the user should enter such as ‘Street address and postcode’ or ‘First name’/‘Last name’.</li>
      </ul>

      <h3 class="h6">Fields inside labels</h3>
      <ul class="mb-5">
        <li>A common practice is to include the form input field inside of the label, this is a usefull practice as it reduces the need of providing unique ID's for each field.</li>
        <li>The design system CSS is setup to support inputs inside of labels aswell as labels above the input fields.</li>
      </ul>
    </div>



    <div class="container pb-0">
      
      <h2>Input field</h2>

      <h3 class="h6">Standard input field</h3>
    </div>

    <div class="container visualtest">
      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>
      <label :for="`input1`">Input field label</label>
      <input type="text" :id="`input1`" :name="`input1`" placeholder="Optional placeholder text" required />

    
      <h4 class="lead text-body text-uppercase pb-2">Focus state</h4>
      <label :for="`input2`">Input field label</label>
      <input type="text" :id="`input2`" :name="`input2`" placeholder="Optional placeholder text" class="focus" required/>

    </div>


    <div class="container pb-0">
      
      <h3 class="h6">Optional input field</h3>
    </div>

    <div class="container visualtest">
      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>
      <label>Input field label
        <input type="text" :name="`input3`" placeholder="Optional placeholder text" />
      </label>

      <h4 class="lead text-body text-uppercase pb-2">Focus state</h4>
      <label :for="`input4`">Input field label</label>
      <input type="text" :id="`input4`" :name="`input4`" placeholder="Optional placeholder text" class="focus" />

    </div>


    <div class="container pb-0">
      
      <h3 class="h6">Disabled input field</h3>
      <p class="pb-2">Use disabled for values are not applicable currently, but could be enabled in a different state. When set, the disabled attribute has the following effects on an element:</p>
      <ul>
        <li>Disabled controls do not receive focus.</li>
        <li>Disabled controls are skipped in tabbing navigation.</li>
        <li>Disabled controls cannot be successful.</li>
      </ul>
      <p class="pb-2">The style of the disabled state should include:</p>
      <ul>
        <li>Reducing the opacity of the input field to 40%</li>
        <li>Add a fill of #CCD6D8 to the form field input</li>
        <li>Add a native browser ‘blocked’ symbol when the user hovers over the button</li>
      </ul>
    </div>

    <div class="container visualtest">
      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>

      <label :for="`input5`">Input field label</label>
      <input type="text" :id="`input5`" :name="`input5`" disabled />

      <h4 class="lead text-body text-uppercase pb-2">Focus state</h4>
      <label :for="`input6`">Input field label</label>
      <input type="text" :id="`input$6`" :name="`input6`" class="focus" disabled />
    </div>

    <div class="container pb-0">
      
      <h3 class="h6">Readonly</h3>
      <p class="pb-2">Use readonly controls for values that cannot be changed by the user, but are still significant. When set, the readonly attribute has the following effects on an element:</p>
      <ul>
        <li>Read-only elements receive focus but cannot be modified by the user.</li>
        <li>Read-only elements are included in tabbing navigation.</li>
        <li>Read-only elements may be successful.</li>
      </ul>
    </div>

    <div class="container visualtest">
      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>

      <div>
        <label :for="`input7`">Input field label</label>
        <input type="text" :id="`input7`" :name="`input7`" readonly value="Input field value" />
      </div>
      <h4 class="lead text-body text-uppercase pb-2">Focus state</h4>
      <div>
        <label :for="`input8`">Input field label</label>
        <input type="text" :id="`input8`" :name="`input8`" class="focus" readonly value="Input field value" />
      </div>
    </div>

    <div class="container">
      <p class="note mb-4"><strong>Note:</strong> Whenever and input field requires an icon like in the above example the label and input field need to be wrapped inside of a div. This div doesn't require a class or any other attributes.</p>
      
      <p class="note mb-4"><strong>Note:</strong> Their are a number of <a href="https://www.w3.org/TR/html4/interact/forms.html#h-17.12">key differences between disabled and readonly</a> and they all should be taken into consideration before choosing which one to use.</p>
    </div>

    <div class="container pb-0">


      <h3 class="h6">Prefix and suffix</h3>
      <p class="pb-2">Both can be added to an input field to give it about of extra contextual meaning. Highlighting that the value inside needs to be in pounds or in inches for example.</p>

      
      <h3 class="h6">Prefix</h3>
    </div>

    <div class="container visualtest">
      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>
      <div>
        <label :for="`input9`">Input field label</label>
        <span class="prefix fa-solid fa-envelope"></span>
        <input type="text" :id="`input9`" :name="`input9`" placeholder="Optional placheolder text" required />
      </div>
 
      <h4 class="lead text-body text-uppercase pb-2">Focus state</h4>
      <div>
        <label :for="`input10`">Input field label</label>
        <span class="prefix fa-solid fa-envelope"></span>
        <input type="text" :id="`input10`" :name="`input10`" class="focus" placeholder="Optional placheolder text" required />
      </div>

      <p>When we use an icon as a prefix or suffix it should be solid and 1 rem (16px) in size with 1rem (16px) padding around the icon.</p>

      
      <h3 class="h6">Suffix</h3>

      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>
      <div>
        <label :for="`input11`">Input field label</label>
        <span class="suffix">days</span>
        <input type="text" :id="`input11`" :name="`input11`" placeholder="Optional placheolder text" required />
      </div>
 
      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>

      <div>
        <label :for="`input12`">Input field label</label>
        <span class="suffix">days</span>
        <input type="text" :id="`input12`" :name="`input12`" placeholder="Optional placheolder text" required class="focus" />
      </div>

      <p>When we use text we should keep it to a minimum. For example, using for units of measurement. The text should be 1rem (16px) within a container height of 1.5rem (24px) and a max width of 5rem (80px). The padding around the container should be 1rem (16px) left and right and 0.75rem (12px) top and bottom.</p>

    </div>




    <div class="container pb-0">
      <h2>Input masks</h2>
      <p>We can add input masks to fields to ensure the data is entered correctly.</p>


      <h3 class="h6">Currency</h3>
    </div>

    <div class="container visualtest">
      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>

      <div>
        <label :for="`input13`">Input field label</label>

        <span class="prefix">
          <select name="currency">
            <option value="GBP">Pound sterling</option>
            <option value="USD">US Dollars</option>
            <option value="EUR">Euro</option>
          </select>
          <span>£ <small>(GBP)</small></span>
          <span>$ <small>(USD)</small></span>
          <span>€ <small>(EUR)</small></span>
        </span>
        <input type="number" step="0" :id="`input13`" :name="`input13`" required class="" />
      </div>
      
      <h3 class="pt-4 h6 visualtest-hide">Time period</h3>
      <div>
        <label for="time">Input field label</label>

        <span class="suffix">
          <select name="time-period" data-change-type="" data-input="time">
            <option value="time">Time</option>
            <option value="date">Date</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
          <span>time</span>
          <span>date</span>
          <span>week</span>
          <span>month</span>
        </span>
        <input type="time" step="0" id="time" name="time" required class="" />
      </div>
      

    </div>


    <div class="container pb-0">
      <h2>Sizes</h2>
      <p>The size of the input fields can be modified by adding the class of <strong>.form-control-sm</strong> or <strong>.form-control-lg</strong> to the input field.</p>
    </div>
    <div class="container visualtest">
      
      <h3 class="h6">.form-control-sm, .input--sm</h3>
      <div>
        <label :for="`input14`">Input field label</label>
        <input type="text" :id="`input14`" :name="`input14`" required class="form-control-sm" />
      </div>

      <h3 class="h6">.form-control-lg, .input--lg</h3>
      <div>
        <label :for="`input15`">Input field label</label>
        <input type="text" :id="`input15`" :name="`input15`" required class="form-control-lg" />
      </div>
    </div>


    <div class="container pb-0">
      <h2>Helper text</h2>
      <p>Helper text provides additional guidance about the input field, such as how it will be used. The text should be concise and only take up 1 line when possible.</p>
    </div>
    <div class="container visualtest">
      <div>
        <label :for="`input16`">Input field label</label>
        <span class="suffix">days</span>
        <input type="text" :id="`input16`" :name="`input16`" placeholder="Optional placheolder text" required />
        <span>Optional helper text</span>
      </div>
    </div>

    <div class="container pb-0">
      <h2>Character/wordcounter</h2>
      <p>Character or word counters should be used if there is a character or word limit. They display the ratio of characters used and the total character limit.</p>
    </div>
    <div class="container visualtest">
      <div>
        <label :for="`input17`">Input field label</label>
        <input type="text" :id="`input17`" :name="`input17`" placeholder="Optional placheolder text" required maxlength="100" />
        <span>Optional helper text</span>
        
      </div>
    </div>




    <div class="container pb-0">

      <h2>Inline</h2>
      <p>Using the <strong>.form-control-inline or .input--inline</strong> class can control the width of the field container a class can be given to the label to control its width. This is usefull if you want to have uniformed inline input fields.</p>
    </div>
    <div class="container visualtest">
      <div class="row">
          
        <div class="col-2">
          <label :for="`input18`">Title</label>
          <input type="text" :id="`input18`" :name="`input18`" required class="form-control-inline" />
        </div>
      </div>
    </div>


    <div class="container pb-0">

      <h2>Widths</h2>
      <p>Column classes can be used to control the width of the input fields by being added to the wrapper div element.</p>
    </div>


    <div class="container visualtest">
      <div class="row">
        <div class="col-4 col-sm-2 col-md-1">
          <label :for="`input19`">Title</label>
          <input type="text" :id="`input19`" :name="`input19`" required />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3">
          <label :for="`input20`">Surname</label>
          <input type="text" :id="`input20`" :name="`input20`" required />
        </div>
      </div>
      
    </div>


    <div class="container pb-0">

      <h2>Heights</h2>
      <p class="pb-2">Form input fields can display user input in the following ways:</p>
      <ul>
        <li>Single line fields display only one line of text</li>
        <li>Text areas are fixed-height fields</li>
      </ul>
    </div>

    <div class="container visualtest">
      <h3 class="h6">Single line</h3>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3">
          <label :for="`input21`">Address</label>
          <input type="text" :id="`input21`" :name="`input21`" required />
        </div>
      </div>
    </div>

    <div class="container visualtest">
      <h3 class="h6">Textarea</h3>
      <div>
          <label :for="`input22`">Address</label>
          <textarea type="text" :id="`input22`" :name="`input22`" required></textarea>
      </div>
    </div>


    <div class="container pb-0">

      <h2>Input field types</h2>
      <p >The functionality of an input field can be increased by assigning a different type to it. This can change the keyboard on mobile devices to improve the user expereince. It also can add bits of functionality; for example a color input field comes with a popup window with a color picker.</p>

      <h3 class="h6">Number</h3>
      <p class="pb-3">Number fields will only allow numeric values to be entered. These can be entered via the arrows on the field or by typing. It is recommended that the to give the input a numeric minimum and maximum value. The minimum value will most commonly be 0 or 1 to prevent negative values.</p>
    </div>

    <div class="container visualtest">
      <div>
        <label :for="`input23`">Input field label</label>
        <input type="number" :id="`input23`" :name="`input23`" required />
      </div>
    </div>
    <div class="container pb-0">
      <h3 class="h6">Email</h3>
      <p class="pb-3">Email fields will trigger a native browser auto-fill dialog to show with all previous emails you’ve inputed.</p>
    </div>
    <div class="container visualtest">
      <div>
        <label for="email">Input field label</label>
        <input type="email" id="email" name="email" required autocomplete="on"/>
      </div>
    </div>
    <div class="container pb-0">
      <p class="note mb-4"><strong>Note:</strong> For the auto-fill dialog to show the autocomplete attribute needs to be added to either the form or the individual input field.</p>

      <h3 class="h6">Search</h3>
      <p class="pb-3">Search fields will trigger a native browser auto-fill dialog to show with all previous search terms you’ve inputed.</p>
    </div>

    <div class="container visualtest">
      <div>
        <label for="search">Input field label</label>
        <input type="search" id="search" name="search" required autocomplete="on"/>
      </div>
    </div>
    <div class="container pb-0">
      <h3 class="h6">URL</h3>
      <p class="pb-3">URL fields will trigger a native browser auto-fill dialog to show with all previous search terms you’ve inputed.</p>
    </div>
    <div class="container visualtest">
      <div>
        <label for="url">Input field label</label>
        <input type="url" id="url" name="url" required autocomplete="on"/>
      </div>
    </div>
    <div class="container pb-0">
      <h3 class="h6">Telephone</h3>
      <p class="pb-3">Telephone fields will trigger a native browser auto-fill dialog to show with all previous telephone numbers you’ve inputed. Input should be limited to numbers and symbols only.</p>
    </div>
    <div class="container visualtest">
      <div>
        <label for="phone">Input field label</label>
        <input type="tel" id="phone" name="phone" required autocomplete="on"/>
      </div>
    </div>
    <div class="container pb-0">
      <h3 class="h6">Password</h3>
      <p class="pb-3">Password fields hide the field value for security. We can add an optional hide/show button after the field.</p>
    </div>
    <div class="container visualtest"> 
      <label>Password
        <span>
          <input type="password" id="password" name="password" required autocomplete="on" minlength="8" data-strength-checker="pwdchecker1" />
          <button type="button" class="suffix fa-solid fa-eye-slash" data-alt-class="suffix fa-solid fa-eye" data-change-type="text" data-input="password"><span class="visually-hidden">Show password</span></button>
        </span>
        <span id="pwdchecker1" class="pwd-checker"></span>
      </label>
      
    </div>



    <div class="container pb-0">
      <h3 class="h6">Colour</h3>
      <p class="pb-3">Colour fields allow the user to either enter the hex colour code in the field or select a colour from the colour picker. The colour picker should default to hex code input.</p>
    </div>
    <div class="container visualtest"> 
      <div>
        <label for="color">Input field label</label>
        <input type="color" id="color" name="color" required="" autocomplete="on" />
        <output></output>
      </div>

    </div>

    <div class="container pt-4 pb-0">
      <h2>Vue component</h2>
    </div>

    <div class="container pb-0 visualtest">
      <Input id="vuecomp" label="Input field label" :value="message" v-model="message" maxlength="100"><span></span></Input>
    </div>

    <div class="container pb-4">
      <h3 class="h6 pb-3">Data binding</h3>

      <p>The data binding within Vue JS can still be used even though we are using a bespoke component and not the default input element.</p> 
      <p>Input field value: <strong>{{message}}</strong></p>

    </div>


    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="html">{{`<div>
  <label for="input">Input field label</label>
  <span class="prefix fa-solid fa-envelope"></span>
  <input type="text" id="input" name="input" placeholder="Optional placheolder text" required="" />
</div>

<label>
  Input field label
  <div><span class="prefix fa-solid fa-envelope"></span><input type="text" name="input" placeholder="Optional placheolder text" required="" /></div>
</label>`}}</code></pre>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <Readme></Readme>
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

<script>
import {setMaxlengthVars} from '../../../assets/ts/modules/inputs';

import DSHeader from '../DSHeader.vue';
import headerImg from '../../img/type-header.png';
import Input from '@/components/Input/Input.vue';
import Readme from '@/components/Input/README.md';
import Tabs from '@/components/Tabs/Tabs.vue'

export default {
  components: {
    DSHeader,
    Input,
    Readme,
    Tabs
  },
  data () {
    return {
      headerImg: headerImg,
      message:'input field value',
      htmlUsage: `...`,
    }
  },
  mounted (){
    this.$nextTick(function () {

      Array.from(document.querySelectorAll('label input')).forEach((input,index) => {
        if(!input.closest('label').querySelector('.optional-text') && !input.hasAttribute('required'))
          input.insertAdjacentHTML("beforebegin", `<span class="optional-text"></span>`);
      });

      // maxlength counter init
      Array.from(document.querySelectorAll('input[maxlength]')).forEach((input,index) => {
        setMaxlengthVars(input);
      });
    })
  }
}
</script>