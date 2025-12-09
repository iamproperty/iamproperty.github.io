<template>
  <iam-text-editor >
    <slot></slot>
  </iam-text-editor>
</template>

<script>
  export default {
    name: 'text-editor',
    props: {},
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/text-editor/text-editor.component.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-text-editor`))
              window.customElements.define(`iam-text-editor`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
