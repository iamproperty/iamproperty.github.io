<template>
  <iam-milestone class="milestone">
    <slot></slot>
  </iam-milestone>
</template>

<style lang="scss">
  //@import "../../../assets/sass/components/accordion.scss";
</style>

<script>
  export default {
    name: 'Milestone',
    props: {},
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/ts/components/milestone/milestone.component.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-milestone`))
              window.customElements.define(`iam-milestone`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
