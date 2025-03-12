<template>
  <iam-filter-card>
    <slot></slot>
  </iam-filter-card>
</template>

<script>
  export default {
    name: 'Card',
    created() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/filter-card/filter-card.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-filter-card`))
              window.customElements.define(`iam-filter-card`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
