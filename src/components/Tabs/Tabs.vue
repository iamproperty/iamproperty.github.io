<template>
  <iam-tabs ref="wrapper">
    <slot></slot>
  </iam-tabs>
</template>

<style lang="scss">
@import "../../../assets/sass/components/tabs.scss";
</style>

<script>
export default {
  name: 'Tabs',
  created(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/tabs/tabs.component.js`).then(module => {

        if (!window.customElements.get(`iam-tabs`))
          window.customElements.define(`iam-tabs`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
