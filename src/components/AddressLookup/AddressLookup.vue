<template>
  <iam-address-lookup>
    <slot></slot>
  </iam-address-lookup>
</template>

<script>
export default {
  name: 'Address Lookup',
  mounted(){

    this.$nextTick(function () {

      import(`../../../assets/js/components/address-lookup/address-lookup.component.min.js`).then(module => {
        
        if (!window.customElements.get(`iam-address-lookup`))
          window.customElements.define(`iam-address-lookup`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
