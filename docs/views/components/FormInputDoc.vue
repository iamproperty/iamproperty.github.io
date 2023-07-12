<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Form input field</h1>
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
    </div>



    <div class="container">
      
      <h2>Input field</h2>

      <h3 class="h6">Standard input field</h3>

      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>
      <label :for="`input${i}`">Input field label</label>
      <input type="text" :id="`input${i}`" :name="`input${i++}`" placeholder="Optional placeholder text" required />

      <h4 class="lead text-body text-uppercase pb-2">Focus state</h4>
      <label :for="`input${i}`">Input field label</label>
      <input type="text" :id="`input${i}`" :name="`input${i++}`" placeholder="Optional placeholder text" class="focus" required/>

    </div>


    <div class="container">
      
      <h3 class="h6">Optional input field</h3>

      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>
      <label :for="`input${i}`">Input field label</label>
      <input type="text" :id="`input${i}`" :name="`input${i++}`" placeholder="Optional placeholder text" />

      <h4 class="lead text-body text-uppercase pb-2">Focus state</h4>
      <label :for="`input${i}`">Input field label</label>
      <input type="text" :id="`input${i}`" :name="`input${i++}`" placeholder="Optional placeholder text" class="focus" />

    </div>


    <div class="container">
      
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

      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>

      <label :for="`input${i}`">Input field label</label>
      <input type="text" :id="`input${i}`" :name="`input${i++}`" disabled />

      <h4 class="lead text-body text-uppercase pb-2">Focus state</h4>
      <label :for="`input${i}`">Input field label</label>
      <input type="text" :id="`input${i}`" :name="`input${i++}`" class="focus" disabled />
    </div>

    <div class="container">
      
      <h3 class="h6">Readonly</h3>
      <p class="pb-2">Use readonly controls for values that cannot be changed by the user, but are still significant. When set, the readonly attribute has the following effects on an element:</p>
      <ul>
        <li>Read-only elements receive focus but cannot be modified by the user.</li>
        <li>Read-only elements are included in tabbing navigation.</li>
        <li>Read-only elements may be successful.</li>
      </ul>

      <h4 class="lead text-body text-uppercase pb-2">Default state</h4>

      <div>
        <label :for="`input${i}`">Input field label</label>
        <input type="text" :id="`input${i}`" :name="`input${i++}`" readonly value="Input field value" />
      </div>
      <h4 class="lead text-body text-uppercase pb-2">Focus state</h4>
      <div>
        <label :for="`input${i}`">Input field label</label>
        <input type="text" :id="`input${i}`" :name="`input${i++}`" class="focus" readonly value="Input field value" />
      </div>

      <p class="note mb-4"><strong>Note:</strong> Whenever and input field requires an icon like in the above example the label and input field need to be wrapped inside of a div. This div doesn't require a class or any other attributes.</p>
      
      <p class="note mb-4"><strong>Note:</strong> Their are a number of <a href="https://www.w3.org/TR/html4/interact/forms.html#h-17.12">key differences between disabled and readonly</a> and they all should be taken into consideration before choosing which one to use.</p>
    </div>

    <div class="container">


      <h3 class="h6">Prefix and suffix</h3>
      <p class="pb-2">Both can be added to an input field to give it about of extra contextual meaning. Highlighting that the value inside needs to be in pounds or in inches for example.</p>

      
      <div>
        <label :for="`input${i}`">Input field label</label>
        <input type="text" :id="`input${i}`" :name="`input${i++}`" placeholder="Input field value" />
      </div>

    </div>



    <div class="container pb-0">

    <h2>Prefix and suffix</h2>
    <p>Both can be added to an input field to give it about of exta contexual meaning. Highlighting that the value inside needs to be in pounds or in inches for example.</p>

    </div>
    <div class="container visualtest">
    <Input id="test7" label="Form input" class="" prefix="£"></Input>
    <Input id="test8" label="Form input" class="" suffix="ins"></Input>

    <p class="pt-3 mb-2">Can be used of inline input fields with the use of extra classes to define its offset which should match the width of the label.</p>
    <Input id="test9" label="Form input" labelclass="col-5 col-sm-4" class="form-control-inline col-md-6" prefix="#" prefixClass="offset-5 offset-sm-4"></Input>
    </div>





    <div class="container bg-dark d-none visualtest">
      
      <Input id="test1dark" label="Form input" value="some value"></Input>

    </div>
    <div class="container pb-0">
      <h2>Sizes</h2>
      <p>The size of the input fields can be modified by adding the class of <strong>.form-control-sm</strong> or <strong>.form-control-sm</strong> to the input field.</p>
      
    </div>
    <div class="container visualtest">
      
      <Input id="test3" label="Small input field" size="sm"></Input>
      <Input id="test4" label="Large input field" size="lg"></Input>
    </div>
    <div class="container pb-0">
      <h2>Widths</h2>
      <p>Column classes can be used to control the width of the input fields by being added to the <strong>.form-control__wrapper</strong> element.</p>
    </div>
    <div class="container visualtest">
      <Input id="test5" label="Title" class="col-6 col-sm-2 col-md-1"></Input>

    </div>
    <div class="container pb-0">

      <h2>Inline</h2>
      <p>Using the <strong>.form-control-inline</strong> a class can control the width of the field container a class can be given to the label to control its width. This is usefull if you want to have uniformed inline input fields.</p>
      
    </div>
    <div class="container visualtest">
      <Input id="test6" label="Form input" labelclass="col-5 col-sm-4" class="form-control-inline col-md-6"></Input>
    </div>


    <div class="container pb-0">

      <h2>Tooltips and hints</h2>
      <p>A tooltip or hint text can be added to the label to help explain the purpose of the input field.</p>
      
    </div>
    <div class="container visualtest">
      <Input id="test10" label="Form input" class="" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Input>
      
      <Input id="test10b" label="Form input" class="" hint="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Input>
      
    </div>


    <div class="container">
      <h2>Data binding</h2>

      <p>The data binding within Vue JS can still be used even though we are using a bespoke component and not the default input element.</p> 
      <p>Input field value: {{message}}</p>
      <Input id="test11" label="Form input" v-model="message"></Input>

    </div>
    
    <div class="container">
      <h2>Vue Input component reference</h2>
      <Readme></Readme>
    </div>

  </main>
</template>

<script>
import DSHeader from '../DSHeader.vue';
import headerImg from '../../img/type-header.png';
import Input from '@/components/Input/Input.vue';
import Readme from '@/components/Input/README.md';

export default {
  components: {
    DSHeader,
    Input,
    Readme
  },
  data () {
    return {
      headerImg: headerImg,
      message:'input field value',
      htmlUsage: `...`,
      i: 0,
    }
  }
}
</script>