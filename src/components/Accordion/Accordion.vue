<template>
  <div class="container accordion" ref="wrapper">
    <slot></slot>
    <details class="accordion-item" v-for="(value,index) in items" :key="index" :open="value.open" :id="createID(value.summary)">
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
import { safeID } from '../../helpers/strings'
import accordion from '../../../assets/js/modules/accordion.js'

export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      required: true
    },
  },
  computed: {
    createID () {
      return (summary) => {
        return `${safeID(summary)}`
      }
    }
  },
  mounted(){
    
    accordion(this.$refs.wrapper);
  }
}
</script>
