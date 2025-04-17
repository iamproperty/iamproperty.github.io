<script setup lang="ts">
import { nextTick, onMounted } from 'vue'

onMounted(() => {
  nextTick(() => {
    import('../../../assets/js/components/epc/epc.component.min.js')
      .then((module) => {
        if (!window.customElements.get(`iam-epc`)) window.customElements.define(`iam-epc`, module.default)
      })
      .catch((err) => {
        console.log(err.message)
      });
  });
})

</script>

<template>
  <h2>EPC Component test</h2>
  <iam-epc ref="wrapper">
    <slot></slot>
  </iam-epc>
</template>