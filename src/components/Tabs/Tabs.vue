<template>
  <iam-tabs ref="wrapper">
    <slot></slot>
  </iam-tabs>
</template>

<style lang="scss">
@import "../../../assets/sass/components/tabs.scss";
</style>

<script>
import iamTabs from '../../../assets/js/components/tabs/tabs.component.js'

if (!window.customElements.get('iam-tabs'))
  window.customElements.define('iam-tabs', iamTabs);

export default {
  name: 'Tabs'
}
</script>
