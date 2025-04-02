<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    //this.$nextTick(function () {

    import(`../../../assets/js/components/multi-step/multi-step.component.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-multi-step`))
          window.customElements.define(`iam-multi-step`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
    //})
  });
</script>

<template>
  <iam-multi-step>
    <slot></slot>
  </iam-multi-step>
</template>
