<template>
  <!-- Custom element -->
  <iam-split-button>
    <slot></slot>
  </iam-split-button>
</template>

<script>
  // Load web components

  export default {
    name: 'SplitButton',
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/split-button/split-button.component.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-split-button`))
              window.customElements.define(`iam-split-button`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
