<template>
  <main>
    <div class="container">
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Readme from '../../README.md'

export default {
  components: {
    Readme
  },
  mounted(){

    hljs.highlightAll();
  }
}
</script>