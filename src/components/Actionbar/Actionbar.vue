<template>
  <iam-actionbar>
    <slot></slot>
  </iam-actionbar>
</template>

<script>
import iamActionbar from '../../../assets/js/components/actionbar/actionbar.component.js'

if (!window.customElements.get('iam-actionbar'))
  window.customElements.define('iam-actionbar', iamActionbar);

export default {
  name: 'Actionbar',
  props: {
  },
  mounted(){
  }
}
</script>
