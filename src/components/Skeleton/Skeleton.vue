<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    import(`../../../assets/js/components/skeleton/skeleton.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-skeleton`)) window.customElements.define(`iam-skeleton`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <iam-skeleton ref="wrapper">
    <slot></slot>
  </iam-skeleton>
</template>
