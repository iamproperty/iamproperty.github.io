<template>
  <iam-accordion ref="wrapper">
    <slot></slot>
  </iam-accordion>
</template>

<style lang="scss">
//@import "../../../assets/sass/components/accordion.scss";
</style>

<script>
import iamAccordion from '../../../assets/ts/components/accordion/accordion.component'

if (!window.customElements.get('iam-accordion'))
  window.customElements.define('iam-accordion', iamAccordion);

export default {
  name: 'Accordion',
  props: {
  },
  mounted(){
  }
}
</script>
