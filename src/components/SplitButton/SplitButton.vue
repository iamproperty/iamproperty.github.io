<template>
  <!-- Custom element -->
  <iam-splitbutton>
    <slot></slot>

  </iam-splitbutton>
</template>

<script>
  // Load web components

  export default {
    name: 'SplitButton',
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/splitbutton/splitbutton.component.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-splitbutton`)) window.customElements.define(`iam-splitbutton`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
