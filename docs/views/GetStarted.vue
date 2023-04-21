<template>
  <main>
    <div class="container">
      <Readme></Readme>
      <h2>Workflow</h2>
      <img :src="workflow" alt=""/>
    </div>
  </main>
</template>

<script>
import Readme from '../../README.md'
import workflow from '../img/development-workflow.png'

export default {
  components: {
    Readme
  },
  data: function () {
    return {
      workflow: workflow
    }
  }
}
</script>