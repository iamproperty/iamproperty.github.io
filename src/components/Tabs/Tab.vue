<template>
  <div class="tab">
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
    }
  }
}
</script>
