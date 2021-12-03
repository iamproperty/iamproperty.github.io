<template>
  <div class="container accordion" ref="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/accordion.scss";

</style>

<script>
import accordion from '../../../assets/js/modules/accordion.js'

export default {
  name: 'Accordion',
  props: {
  },
  mounted(){
    accordion(this.$refs.wrapper);
  }
}
</script>
