<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    import(`../../../assets/js/components/darkmode/darkmode.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-dark-mode`)) window.customElements.define(`iam-dark-mode`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <iam-dark-mode>
    <slot></slot>
  </iam-dark-mode>
</template>
