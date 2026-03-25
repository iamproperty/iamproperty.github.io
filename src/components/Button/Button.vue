<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    import(`../../../assets/js/components/button/button.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-button`))
          window.customElements.define(`iam-button`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <iam-button ref="wrapper">
    <slot></slot>
  </iam-button>
</template>
