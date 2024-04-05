<template>
  <!-- Custom element -->
  <iam-applied-filters>
    <slot></slot>
  </iam-applied-filters>
</template>

<script>
export default {
  name: 'Applied Filter',
  mounted(){

    this.$nextTick(function () {

      import(`../../../assets/js/components/applied-filters/applied-filters.component.js`).then(module => {
        
        if (!window.customElements.get(`iam-applied-filters`))
          window.customElements.define(`iam-applied-filters`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
