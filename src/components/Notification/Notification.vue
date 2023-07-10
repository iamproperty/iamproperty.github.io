<template>
  <iam-notification role="alert">
    <slot></slot>
    <button v-if="dismissible" type="button" class="btn-close" aria-label="Close"></button>
  </iam-notification>
</template>

<script>
import iamNotification from '../../../assets/js/components/notification/notification.component.js'

export default {
  name: 'Notification',
  props: {
    dismissible: {
      type: [String,Boolean],
      required: false,
      default: false
    },
    colour: {
      type: String,
      required: false,
      default: 'primary'
    },
    timeout: {
      type: [String,Number],
      required: false
    }
  },
  created(){

    this.$nextTick(function () {
      
      if (!window.customElements.get('iam-notification'))
        window.customElements.define('iam-notification', iamNotification);
    })
  }
}
</script>
