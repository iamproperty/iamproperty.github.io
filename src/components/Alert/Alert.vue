<template>
  <div :class="`container alert pb-0 ${dismissible?'alert--dismissible fade show':''}`" ref="wrapper" :data-timeout="timeout" :style="timeout?`--animation-length: ${timeout}ms`:''">
    <div :class="`alert__inner bg-${colour}`" role="alert">
      <button v-if="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/components/alert.scss";
</style>

<script>
import alert from '../../../assets/js/modules/alert.js'

export default {
  name: 'Alert',
  props: {
    dismissible: {
      type: String|Boolean,
      required: false,
      default: false
    },
    colour: {
      type: String,
      required: false,
      default: 'primary'
    },
    timeout: {
      type: String|Number,
      required: false
    }
  },
  mounted(){
    alert(this.$refs.wrapper);
  }
}
</script>
