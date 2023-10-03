<template>
  <details class="tab">
    <summary v-html="title" :class="{ disabled: isDisabled }"></summary>
    <slot></slot>
  </details>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    title: {
      type: String,
      required: true
    },
    lazy: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      show: this.lazy ? false : true,
      isDisabled: this.disabled ? true : false
    }
  }
}
</script>
