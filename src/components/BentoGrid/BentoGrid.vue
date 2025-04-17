<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    import(`../../../assets/js/components/bento-grid/bento-grid.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-bento-grid`))
          window.customElements.define(`iam-bento-grid`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <iam-bento-grid ref="wrapper">
    <slot></slot>
  </iam-bento-grid>
</template>
