<template>
  <iam-actionbar>
    <slot></slot>
  </iam-actionbar>
</template>

<script>
export default {
  name: 'Actionbar',
  props: {
  },
  mounted(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/actionbar/actionbar.component${import.meta.env.DEV == "development" ? '.min' : ''}.js`).then(module => {

        if (!window.customElements.get(`iam-actionbar`))
          window.customElements.define(`iam-actionbar`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
