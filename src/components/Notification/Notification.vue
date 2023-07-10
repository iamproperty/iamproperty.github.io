<template>
  <iam-notification>
    <slot></slot>
  </iam-notification>
</template>

<script>
import iamNotification from '../../../assets/js/components/notification/notification.component.js'

export default {
  name: 'Notification',
  props: {

  },
  created(){

    this.$nextTick(function () {
      
      if (!window.customElements.get('iam-notification'))
        window.customElements.define('iam-notification', iamNotification);
    })
  }
}
</script>
