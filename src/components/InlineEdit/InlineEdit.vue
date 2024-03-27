<script setup >
import { ref, onMounted, defineEmits} from "vue";

const emit = defineEmits(['save','autosave']);
const $component = ref(null);

onMounted(() => {

  $component.value.addEventListener('inline-edit-save',function(event){

    emit('save', event)
  });

  $component.value.addEventListener('inline-edit-autosave',function(event){

    emit('autosave', event)
  });
});
</script>

<template>
  <iam-inline-edit ref="$component"><slot></slot></iam-inline-edit>
</template>

<script>
export default {
  components: {
  },
  name: 'Inline Edit',
  mounted(){

    this.$nextTick(function () {
      
      import(`../../../assets/js/components/inline-edit/inline-edit.component.min.js`).then(module => {

        if (!window.customElements.get(`iam-inline-edit`))
          window.customElements.define(`iam-inline-edit`, module.default);

      }).catch((err) => {
        console.log(err.message);
      });
    })
  }
}
</script>
