<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    import(`../../../assets/js/components/banner/banner.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-banner`)) window.customElements.define(`iam-banner`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <iam-banner ref="wrapper">
    <slot></slot>
  </iam-banner>
</template>
