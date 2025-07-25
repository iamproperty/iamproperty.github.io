<template>
  <iam-milestone-group>
    <slot></slot>
  </iam-milestone-group>
</template>

<style lang="scss">
</style>

<script>
  export default {
    name: 'MilestoneGroup',
    props: {},
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/milestone-group/milestone-group.component.min.js`)
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
