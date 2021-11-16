<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>Form validation</h1>
      <p>Form validation on an input field can be triggered by either using the default form validation api and the supported CSS rules. Or set classes (.is-valid and .is-invalid) can be used so that server side validation can be used.</p>
    </div>

    <div class="container visualtest">
      <Input id="test8" label="Label" required errorMsg="This field is required"></Input>
      <Input id="test9" label="Label" required inputClass="is-invalid" errorMsg="This field is required"></Input>
      <Input id="test10" label="Label" required inputClass="is-valid" value="Some value" errorMsg="This field is required"></Input>
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