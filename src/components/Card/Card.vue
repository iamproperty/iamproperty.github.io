<template>
  <iam-card>
    <slot></slot>
  </iam-card>
</template>

<script>
  export default {
    name: 'Card',
    created() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/card/card.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-card`)) window.customElements.define(`iam-card`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
