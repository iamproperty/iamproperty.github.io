<template>
  <!-- Custom element -->
  <iam-header :image="image">
    <slot name="breadcrumb"></slot>
    <h1 v-if="title" v-html="title"></h1>
    <slot></slot>
  </iam-header>
</template>

<script>
  // Load web components

  export default {
    name: 'Header',
    props: {
      title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
    },
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/header/header.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-header`)) window.customElements.define(`iam-header`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
