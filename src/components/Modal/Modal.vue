<template>
  <div class="modal" :id="id" role="dialog" modal="true" ref="modal">
    <a :href="`#${returnID?returnID:''}`" tabindex="-1"><span class="visually-hidden">Close</span></a>
    <div class="modal__outer">
      <a :href="`#${returnID?returnID:''}`" class="btn btn-tertiary py-1 px-2"><span class="visually-hidden">Close</span>✕</a>
      <div class="modal__inner">
        <slot></slot>
      </div>
    </div>
    <button class="modal__dock--left btn btn-prev" tabindex="-1">Left</button>
    <button class="modal__dock--right btn btn-next" tabindex="-1">Right</button>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/modal.scss";
</style>

<script>
import modal from '../../../assets/js/modules/modal.js'

export default {
  name: 'Modal',
  props: {
    id: {
      type: String,
      required: true
    },
    returnID: {
      type: String,
      default: 'close',
      required: false
    }
  },
  mounted(){

    this.$nextTick(function () {
      
      modal(this.$refs.modal);
    })
  }
}
</script>
