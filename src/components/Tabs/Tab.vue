<template>
  <div class="tab" v-if="show">
    <slot></slot>
  </div>
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
