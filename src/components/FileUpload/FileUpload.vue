<script setup>
  import { ref, onMounted, defineEmits } from 'vue';

  const emit = defineEmits(['elementChange', 'empty', 'fileRemoved']);
  const $component = ref(null);

  const component = 'fileupload';

  const props = defineProps({
      maxfilesize: {
        type: Number,
        required: false,
      },
      maxfiles: {
        type: Number,
        required: false,
      },
    });

  onMounted(() => {


    import(`../../../assets/js/components/${component}/${component}.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-${component}`))
          window.customElements.define(`iam-${component}`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });


    $component.value.addEventListener('elementChange', function (event) {
      emit('elementChange', event);
    });
    $component.value.addEventListener('empty', function (event) {
      emit('empty', event);
    });
    $component.value.addEventListener('fileRemoved', function (event) {
      emit('fileRemoved', event);
    });
  });
</script>


<template>
  <iam-fileupload ref="$component"><slot></slot></iam-fileupload>
</template>
