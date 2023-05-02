<template>
  <details class="tab">
    <summary v-html="title"></summary>
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
    }
  },
  data() {
    return {
      show: this.lazy ? false : true
    }
  },
  watch: {

    show(newVal, oldVal) {
      console.log(newVal)
    }
  }
}
</script>
