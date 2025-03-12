<template>
  <iam-accordion ref="wrapper">
    <slot></slot>
  </iam-accordion>
</template>

<style lang="scss">
  //@import "../../../assets/sass/components/accordion.scss";
</style>

<script>
  export default {
    name: 'Accordion',
    props: {},
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/accordion/accordion.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-accordion`))
              window.customElements.define(`iam-accordion`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
