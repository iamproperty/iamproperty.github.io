<template>
  <div class="container accordion" ref="wrapper">
    <slot></slot>
    <details class="accordion-item" v-for="(value,index) in items" :key="index">
      <summary><span class="accordion-header accordion-button h4">{{value.summary}}</span></summary>
      <div class="accordion-body" v-html="value.detail"></div>
    </details>
    <slot name="after"></slot>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/accordion.scss";

</style>

<script>
import { ucfirst, unsnake } from '../../helpers/strings'
import accordion from '../../../assets/js/modules/accordion.js'

export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      required: true
    },
  },
  mounted(){
    
    accordion(this.$refs.wrapper);
  }
}
</script>
