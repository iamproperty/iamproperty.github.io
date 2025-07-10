<template>
  <iam-milestones>
    <slot></slot>
  </iam-milestones>
</template>

<style lang="scss">
  //@import "../../../assets/sass/components/accordion.scss";
</style>

<script>
  export default {
    name: 'Milestones',
    props: {},
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/ts/components/milestones/milestones.component.ts`)
          .then((module) => {
            if (!window.customElements.get(`iam-milestones`))
              window.customElements.define(`iam-milestones`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
