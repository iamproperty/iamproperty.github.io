<template>
  <main>
    
    <div class="container">
      
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>File upload</h1>

    </div>
    <div class="container visualtest">

      <Input type="file" id="test16" label="Label"></Input>
      
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