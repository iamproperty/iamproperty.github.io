<template>
  <iam-accordion class="container accordion" ref="wrapper">
    <slot></slot>
  </iam-accordion>
</template>

<style lang="scss">
//@import "../../../assets/sass/components/accordion.scss";
</style>

<script>



import accordionComponent from '../../../assets/ts/components/accordion'
accordionComponent


//import accordion from '../../../assets/js/modules/accordion.js'

export default {
  name: 'Accordion',
  props: {
  },
  mounted(){
    //accordion(this.$refs.wrapper);
  }
}
</script>
