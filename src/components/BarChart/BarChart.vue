<template>
  <iam-barchart>
    <slot></slot>
  </iam-barchart>
</template>

<script>
export default {
  name: 'Card',
  created(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/barchart/barchart.component.js`).then(module => {

        if (!window.customElements.get(`iam-barchart`))
          window.customElements.define(`iam-barchart`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
