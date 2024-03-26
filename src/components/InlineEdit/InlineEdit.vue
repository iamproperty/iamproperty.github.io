<template>
  <iam-inline-edit><slot></slot></iam-inline-edit>
</template>

<script>
export default {
  components: {
  },
  name: 'Inline Edit',
  mounted(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/inline-edit/inline-edit.component.js`).then(module => {

        if (!window.customElements.get(`iam-inline-edit`))
          window.customElements.define(`iam-inline-edit`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
