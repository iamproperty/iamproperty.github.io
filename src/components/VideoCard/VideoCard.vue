<template>
  <iam-video-card>
    <slot></slot>
  </iam-video-card>
</template>

<script>
export default {
  name: 'Video card',
  created(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/video-card/video-card.component.min.js`).then(module => {

        if (!window.customElements.get(`iam-video-card`))
          window.customElements.define(`iam-video-card`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
