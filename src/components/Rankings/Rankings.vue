<template>
  <iam-rankings>
    <slot></slot>
  </iam-rankings>
</template>

<script>
  export default {
    name: 'Rankings',
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

        import(`../../../assets/js/components/rankings/rankings.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-rankings`))
              window.customElements.define(`iam-rankings`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
