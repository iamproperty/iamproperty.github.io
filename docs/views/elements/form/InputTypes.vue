<template>
  <main>
    
    <div class="container pb-0">
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>Basic input field types</h1>
      <p>The functionality of an input field can be increased by assigning a different type to it. This can change the keyboard on mobile devices to improve the user expereince. It also can add bits of functionality; for example a color input field comes with a popup window with a color picker.</p>
    </div>
    <div class="container visualtest">
      <h2>Number</h2>
      <Input type="number" id="numeric" label="Label" min="0" max="10"></Input>

      <p class="visualtest-hide">It is recommended to give the input a numeric minimum and maximum value. The minimum value will most commonly be 0 or 1 to prevent nagative values.</p>

      <h2>Email</h2>
      <Input type="email" id="email" label="Label"></Input>
      
      <h2>Colour</h2>
      <Input type="color" id="color" label="Label"></Input>


      <h2>Password</h2>
      <Input type="password" id="password" label="Label" value="password"></Input>

      <h2>Search</h2>
      <Input type="search" id="search" label="Label"></Input>

      <h2>URL</h2>
      <Input type="url" id="url" label="Label"></Input>

      <h2>Telephone</h2>
      <Input type="tel" id="tel" label="Label"></Input>
      
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