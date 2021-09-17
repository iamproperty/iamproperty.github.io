<template>
  <main>
    
    <div class="container pb-0">
      
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>Select input field</h1>
      <p>The select field inherits alot of the text input field characteristics from the same styling to sharing the same modifiers (size, inline etc).</p>
    </div>
    <div class="container visualtest">

      <Input type="select" id="test1" label="Label" :options="[{display:'One',value:'1'},{display:'Two',value:'2'}]"></Input>
      
      <pre><code>&lt;div class="form-control__wrapper">
  &lt;label for="test1" class="form-label">Label&lt;/label>
  &lt;select type="select" name="test1" id="test1" class="form-select">
    &lt;option value="1">One&lt;/option>
    &lt;option value="2">Two&lt;/option>
  &lt;/select>
&lt;/div></code></pre>

      <h2>Inline input</h2>
      <Input type="select" id="test1" label="Label" :options="[{display:'One',value:'1'},{display:'Two',value:'2'}]" class="form-control-inline"></Input>
      
    </div>
    
    <div class="container">
      <h2>Vue Input component reference</h2>
      <p>The select input field using the same Vue component as the input field, the type just needs to be set to 'select' and options need to be passed.</p>
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