<template>
  <main>
    
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/components/form">Form components</a></li>
      </ul>
      <h1>Textarea</h1>
      <p>We re-use the same component as the input field and just change the input field for a textarea.</p>
    </div>
    <div class="container visualtest">
      <Input type="textarea" id="test18" label="Form input" rows="10"></Input>
    </div>
    <div class="container">
      <h2>HTML</h2>
      <pre><code>&lt;div class="form-control__wrapper" rows="10">
    &lt;label for="test18" class="form-label">Form input&lt;/label>
    &lt;textarea type="textarea" name="test18" id="test18" rows="10" class="form-control">&lt;/textarea>
  &lt;/div></code></pre>
      <h2>Vue component</h2>
      <pre><code>&lt;Input type="textarea" id="test18" label="Form input" rows="10">&lt;/Input></code></pre>
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