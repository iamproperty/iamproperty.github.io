<template>
  <iam-fileupload><slot></slot></iam-fileupload>
</template>

<script>
import iamFileupload from '../../../assets/js/components/fileupload/fileupload.component.js'

export default {
  name: 'FileUpload',
  props: {
    maxfilesize: {
      type: Number,
      required: false
    },
    maxfiles: {
      type: Number,
      required: false
    }
  },
  mounted(){

    this.$nextTick(function () {
      
      if (!window.customElements.get('iam-fileupload'))
        window.customElements.define('iam-fileupload', iamFileupload);
    })
  }
}
</script>
