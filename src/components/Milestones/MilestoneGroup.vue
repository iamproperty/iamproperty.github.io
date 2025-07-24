<template>
  <iam-milestone-group>
    <slot></slot>
  </iam-milestone-group>
</template>

<style lang="scss">
  //@import "../../../assets/sass/components/accordion.scss";
</style>

<script>
  export default {
    name: 'MilestoneGroup',
    props: {},
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/ts/components/milestone-group/milestone-group.component.ts`)
          .then((module) => {
            if (!window.customElements.get(`iam-milestone-group`))
              window.customElements.define(`iam-milestone-group`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
