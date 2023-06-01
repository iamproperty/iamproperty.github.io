<template>
  <!-- Custom element -->
  <iam-filterlist>
    <slot></slot>
  </iam-filterlist>
</template>

<script>
// Load web components
import iamFilterlist from '../../../assets/ts/components/filterlist/filterlist.component'

// Register components
if (!window.customElements.get('iam-filterlist'))
  window.customElements.define('iam-filterlist', iamFilterlist);


export default {
  name: 'Filter list',
}
</script>
