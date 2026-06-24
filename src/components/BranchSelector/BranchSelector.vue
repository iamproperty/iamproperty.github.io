<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    import(`../../../assets/js/components/branch-selector/branch-selector.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-branch-selector`))
          window.customElements.define(`iam-branch-selector`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <iam-branch-selector ref="wrapper">
    <slot></slot>
  </iam-branch-selector>
</template>
