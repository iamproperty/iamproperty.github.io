<template>
  <iam-collapsible-side>
    <slot></slot>
  </iam-collapsible-side>
</template>

<script>
import iamCollapsibleSideMenu from '../../../assets/js/components/collapsible-side/collapsible-side.component.min.js'

if (!window.customElements.get('iam-collapsible-side'))
  window.customElements.define('iam-collapsible-side', iamCollapsibleSideMenu);

export default {
  name: 'CollapsibleSideMenu',
  props: {
  },
  mounted(){
  }
}
</script>
