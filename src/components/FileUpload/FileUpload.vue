<script setup>
import { ref, onMounted, defineEmits} from "vue";

const emit = defineEmits(['elementChange','empty']);
const $component = ref(null);

onMounted(() => {

  $component.value.addEventListener('elementChange',function(event){

    emit('elementChange', event)
  });
  $component.value.addEventListener('empty',function(event){

    emit('empty', event)
  });
});
</script>

<template>
  <iam-fileupload ref="$component"><slot></slot></iam-fileupload>
</template>

<script>
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
  created(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/fileupload/fileupload.component.min.js`).then(module => {

        if (!window.customElements.get(`iam-fileupload`))
          window.customElements.define(`iam-fileupload`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
