<template>
  <main>
    <div class="container">
      
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>Date and time pickers</h1>
      <p>There is no need to use a bespoke JavaScript based datepicker as the browser support is very good for the default HTML5 date and time input types. For browsers that dont support them they revert back to text input fields and we can supply a validation pattern to make sure the format is correct.</p>
      <p>It is worth noting that date and time input fields still support min, max and step attributes to improve usability and accurency.</p>
    </div>
    <div class="container visualtest">
      <h2>Date only</h2>
      <Input type="date" id="test17" label="Date"></Input>
      <h2>Time only</h2>
      <Input type="time" id="test15" label="Time"></Input>
      
      <p class="note visualtest-hide"><strong>Note:</strong> The datetime-local, month and week input types should not be used due to limited support on the firefox browser. The user expereince of these input fields are not as good as the above fields and the above date and time inputs are much easier to understand.</p>

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