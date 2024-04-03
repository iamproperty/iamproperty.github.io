<template>
  <iam-multiselect><slot></slot></iam-multiselect>
</template>

<script>
export default {
  name: 'Multiselect',
  mounted(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/multiselect/multiselect.component.min.js`).then(module => {

        if (!window.customElements.get(`iam-multiselect`))
          window.customElements.define(`iam-multiselect`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })

  }
}
</script>
