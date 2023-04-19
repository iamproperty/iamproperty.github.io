<template>
  <div class="container accordion" ref="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/components/accordion.scss";
</style>

<script>
import accordion from '../../../assets/ts/modules/accordion'

export default {
  name: 'Accordion',
  props: {
  },
  mounted(){
    accordion(this.$refs.wrapper);
  }
}
</script>
