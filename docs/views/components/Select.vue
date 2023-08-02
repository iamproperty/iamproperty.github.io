<template>
  <main>
    
    <div class="container pb-0">
      
      <ul class="breadcrumb mb-0">
        <li><a href="/components/form">Form components</a></li>
      </ul>
      <h1>Select input field</h1>
      <p>The select field inherits alot of the text input field characteristics from the same styling to sharing the same modifiers (size, inline etc).</p>
    </div>
    <div class="container visualtest">

      <Input type="select" id="test1" label="Label" :options="[{display:'One',value:'1'},{display:'Two',value:'2'}]" ></Input>
      
      <pre><code>&lt;div class="form-control__wrapper">
  &lt;label for="test1" class="form-label">Label&lt;/label>
  &lt;select type="select" name="test1" id="test1" class="form-select">
    &lt;option value="1">One&lt;/option>
    &lt;option value="2">Two&lt;/option>
  &lt;/select>
&lt;/div></code></pre>

      <h2>Inline select</h2>
      <Input type="select" id="test2" label="Label" :options="[{display:'One',value:'1'},{display:'Two',value:'2'}]" class="form-control-inline"></Input>
      
      <h2>Multi select</h2>
      <Input type="select" id="test3" label="Label" :options="[{display:'One',value:'1'},{display:'Two',value:'2'},{display:'Three',value:'3'},{display:'Four',value:'4'},{display:'Five',value:'5'},{display:'Six',value:'6'},{display:'Seven',value:'7'},{display:'Eight',value:'8'},{display:'Nine',value:'9'},{display:'Ten',value:'10'}]" multiple="multiple"></Input>
      


      <h2>Inline-text select</h2>
      <span class="h4"><span data-query="total"></span> <div class="form-control__wrapper form-control--inline-text"><label for="clients-added">Clients added </label><select id="clients-added" class="form-select"><option>in total</option></select></div></span>

    </div>
    
    <div class="container">
      <h2>Vue Input component reference</h2>
      <p>The select input field using the same Vue component as the input field, the type just needs to be set to 'select' and options need to be passed.</p>
      <Readme></Readme>
    </div>
  </main>
</template>


<script>
import Input from '@/components/Input/Input.vue'
import Readme from '@/components/Input/README.md'

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