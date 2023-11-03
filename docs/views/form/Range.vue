<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/components/form">Form components</a></li>
      </ul>
      <h1>Form range input field</h1>
      <p>The range input is a simple input field with 'range' given as its type. There is only a tiny bit of JavaScript being used to display the value of the range within an output field.</p>
    </div>
    <div class="container visualtest">
      <label>Input field label <input type="range" min="0" max="100" value="15" step="5" /></label>
    </div>

    <br/>
    <br/>
    <div class="container visualtest">
      <label>Input field label <input type="number" min="0" max="100" value="15" step="5" /></label>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <div class="container visualtest">
      <label>Input field label <Slider><input type="number" min="0" max="100" value="15" step="1" /></Slider></label>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="container visualtest">
      <label>Input field label <Slider><input type="range" min="0" max="100" value="15" step="10" name="min" /><input type="range" min="0" max="100" value="50" step="10" name="max" /></Slider></label>
    </div>
  </main>
</template>


<script>
import Input from '@/components/Input/Input.vue'
import Readme from '@/components/Input/README.md'
import Slider from '@/components/Slider/Slider.vue'

export default {
  components: {
    Input,
    Readme,
    Slider
  },
  data () {
    return {
      message:'input field value',
      htmlUsage: `...`,
    }
  }
}
</script>