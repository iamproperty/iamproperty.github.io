<template>
  <iam-menu ref="wrapper">
    <slot></slot>
  </iam-menu>
</template>

<script>
  export default {
    name: 'Menu',
    created() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/menu/menu.component.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-menu`)) window.customElements.define(`iam-menu`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
