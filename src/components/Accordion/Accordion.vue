<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    import(`../../../assets/js/components/accordion/accordion.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-accordion`)) window.customElements.define(`iam-accordion`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <iam-accordion ref="wrapper">
    <slot></slot>
  </iam-accordion>
</template>
