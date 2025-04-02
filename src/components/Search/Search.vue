<template>
  <iam-search>
    <slot></slot>
  </iam-search>
</template>

<script>
  export default {
    name: 'Search',
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/search/search.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-search`)) window.customElements.define(`iam-search`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
