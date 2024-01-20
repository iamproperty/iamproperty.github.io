<template>
  <iam-nav ref="wrapper">

    <slot></slot>

  </iam-nav>
</template>

<script>
export default {
  components: {
  },
  name: 'Nav',
  mounted(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/nav/nav.component.min.js`).then(module => {

        if (!window.customElements.get(`iam-nav`))
          window.customElements.define(`iam-nav`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });



    })


  },
  methods: {

  }
}

</script>
