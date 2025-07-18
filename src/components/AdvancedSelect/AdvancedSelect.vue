<template>
  <iam-advanced-select>
    <slot></slot>
  </iam-advanced-select>
</template>

<script>
  export default {
    name: 'AdvancedSelect',
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/advanced-select/advanced-select.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-advanced-select`)) window.customElements.define(`iam-advanced-select`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
