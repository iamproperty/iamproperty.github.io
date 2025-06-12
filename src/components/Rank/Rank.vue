<template>
  <iam-rank>
    <slot></slot>
  </iam-rank>
</template>

<script>
  export default {
    name: 'Rank',
    props: {},
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/rank/rank.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-rank`)) window.customElements.define(`iam-rank`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
