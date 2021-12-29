<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>Form input field</h1>
      <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
    </div>
    <div class="container visualtest">
      <Input id="test1" label="Label"></Input>

      <pre><code>&lt;div class="form-control__wrapper">
  &lt;label for="test1" class="form-label">Label&lt;/label>
  &lt;input name="test1" id="test1" type="text" class="form-control">
&lt;/div></code></pre>
    </div>
    <div class="container visualtest">
      <h2>Disabled field</h2>
      <p>Use disabled for values are not applicable currently, but could be enabled in a different state.</p>
      <Input id="test2" label="Label" disabled></Input>
      <h2>Readonly</h2>
      <p>Use readonly controls for values that cannot be changed by the user, but are still significant.</p>
      <Input id="test3" label="Label" readonly></Input>
      <p>Their are a number of <a href="https://www.w3.org/TR/html4/interact/forms.html#h-17.12">key differences between disabled and readonly</a> and they all should be taken into consideration before choosing which one to use.</p>
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
      <p>Using the <strong>.form-control-inline</strong>  a class can control the width of the field container a class can be given to the label to control its width. This is usefull if you want to have uniformed inline input fields.</p>
      
    </div>
    <div class="container visualtest">
      <Input id="test6" label="Form input" labelclass="col-5 col-sm-4" class="form-control-inline col-md-6"></Input>
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
import Input from '@/elements/Input/Input.vue'
import Readme from '@/elements/Input/README.md'

export default {
  components: {
    Input,
    Readme
  },
  data () {
    return {
      message:'input field value',
      htmlUsage: `...`,
    }
  }
}
</script>