<script setup>
  import { ref, onMounted, defineEmits } from 'vue';

  const emit = defineEmits(['save', 'autosave']);
  const $component = ref(null);

  const component = 'inline-edit';

  onMounted(() => {
    import(`../../../assets/js/components/${component}/${component}.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-${component}`))
          window.customElements.define(`iam-${component}`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });

    $component.value.addEventListener('inline-edit-save', function (event) {
      emit('save', event);
    });

    $component.value.addEventListener('inline-edit-autosave', function (event) {
      emit('autosave', event);
    });
  });
</script>

<template>
  <iam-inline-edit ref="$component"><slot></slot></iam-inline-edit>
</template>
