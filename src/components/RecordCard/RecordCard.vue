<template>
  <iam-record-card>
    <slot></slot>
  </iam-record-card>
</template>

<script>
  export default {
    name: 'Card',
    created() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/record-card/record-card.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-record-card`))
              window.customElements.define(`iam-record-card`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
