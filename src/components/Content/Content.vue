<template>
  <iam-content >
    <slot></slot>
  </iam-content>
</template>

<script>
  export default {
    name: 'Content',
    props: {},
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/content/content.component.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-content`))
              window.customElements.define(`iam-content`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
