<template>
<div>

  <!-- Custom element -->
  <iam-header class="bg-secondary" :image="image">
    <slot name="breadcrumb"></slot>
    <h1 v-if="title" v-html="title"></h1>
    <slot></slot>
  </iam-header>

</div>
</template>

<style lang="scss">
//@import "../../../assets/sass/components/header.scss";
</style>

<script>
// Load web components
import iamHeader from '../../../assets/ts/components/header.component'

// Register components
if (!window.customElements.get('iam-header'))
  window.customElements.define('iam-header', iamHeader);


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
  }
}
</script>
