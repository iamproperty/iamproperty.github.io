<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0">
        <li><a href="/components/form">Form components</a></li>
      </ul>
      <h1>Form validation</h1>
      <p>Form validation on an input field can be triggered by either using the default form validation api and the supported CSS rules. Or set classes (.is-valid and .is-invalid) can be used so that server side validation can be used.</p>
    
    </div>

    <div class="container visualtest">
      <Input id="test8" label="Label" required errormsg="This field is required"></Input>
      <Input id="test9" label="Label" required inputclass="is-invalid" errormsg="This field is required"></Input>
      <Input id="test10" label="Label" required inputclass="is-valid" value="Some value" errormsg="This field is required"></Input>
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