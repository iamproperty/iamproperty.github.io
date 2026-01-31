<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    //this.$nextTick(function () {

    import(`../../../assets/js/components/multi-step-modal/multi-step-modal.component.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-multi-step-modal`))
          window.customElements.define(`iam-multi-step-modal`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
    //})
  });
</script>

<template>
  <iam-multi-step-modal>
    <slot></slot>
  </iam-multi-step-modal>
</template>
