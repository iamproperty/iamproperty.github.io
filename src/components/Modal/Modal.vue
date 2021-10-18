<template>
  <div class="modal" :id="id">
    <a :href="`#${returnID?returnID:''}`"><span class="visually-hidden">Close</span></a>
    <div class="modal__outer">
      <a :href="`#${returnID?returnID:''}`" class="btn btn-tertiary py-1 px-2"><span class="visually-hidden">Close</span>✕</a>
      <div class="modal__inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";
@import "../../../assets/sass/components/modal.scss";
</style>

<script>
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
  }
}
</script>
