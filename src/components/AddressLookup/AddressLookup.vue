<template>
  <iam-address-lookup>
    <slot></slot>
  </iam-address-lookup>
</template>

<script>
export default {
  name: 'Address Lookup',
  mounted(){

    console.log(process.env.NODE_ENV);

    this.$nextTick(function () {

      import(`../../../assets/js/components/address-lookup/address-lookup.component${import.meta.env.DEV ? '.min' : ''}.js`).then(module => {
        
        if (!window.customElements.get(`iam-address-lookup`))
          window.customElements.define(`iam-address-lookup`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
