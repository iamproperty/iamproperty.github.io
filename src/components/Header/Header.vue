<template>
  <!-- Custom element -->
  <iam-header class="bg-secondary" :image="image">
    <slot name="breadcrumb"></slot>
    <h1 v-if="title" v-html="title"></h1>
    <slot></slot>
  </iam-header>
</template>

<script>
// Load web components
import iamHeader from '../../../assets/js/components/header/header.component.min.js'


export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  },
  mounted(){
    this.$nextTick(function () {

      // Register components
      if (!window.customElements.get('iam-header'))
        window.customElements.define('iam-header', iamHeader);
    })
  }
}
</script>
