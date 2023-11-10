<template>
  <iam-accordion ref="wrapper">
    <slot></slot>
  </iam-accordion>
</template>

<style lang="scss">
//@import "../../../assets/sass/components/accordion.scss";
</style>

<script>

let devMode = process.env.NODE_ENV == "development" ? true : false;

export default {
  name: 'Accordion',
  props: {
  },
  mounted(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/accordion/accordion.component${devMode ? '.min' : ''}.js`).then(module => {

        if (!window.customElements.get(`iam-accordion`))
          window.customElements.define(`iam-accordion`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
