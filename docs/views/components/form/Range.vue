<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>Form range input field</h1>
      <p>The range input is a simple input field with 'range' given as its type. There is only a tiny bit of JavaScript being used to display the value of the range within an output field.</p>
    </div>
    <div class="container visualtest">
      <Input id="test1" type="range" label="Label" min="0" max="50" value="15" step="5"></Input>
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