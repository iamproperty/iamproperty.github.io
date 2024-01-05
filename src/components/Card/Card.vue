<template>
  <iam-card>
    <slot></slot>
  </iam-card>
</template>

<script>
export default {
  name: 'Card',
  mounted(){

    this.$nextTick(function () {
      const assetLocation = document.body.hasAttribute('data-assets-location') ? document.body.getAttribute('data-assets-location') : '/assets';
        
      import(/* @vite-ignore */`${assetLocation}/js/components/card/card.component.min.js`).then(module => {

        if (!window.customElements.get(`iam-card`))
          window.customElements.define(`iam-card`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
