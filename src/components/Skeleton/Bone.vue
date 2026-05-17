<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    import(`../../../assets/js/components/bone/bone.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-bone`)) window.customElements.define(`iam-bone`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <iam-bone ref="wrapper">
    <slot></slot>
  </iam-bone>
</template>
