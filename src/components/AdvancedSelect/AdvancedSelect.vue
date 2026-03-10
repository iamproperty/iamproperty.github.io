<script setup>
  import { onMounted } from 'vue';

  defineProps({
    value: {
      type: String,
      default: '',
    },
  });

  const component = 'advanced-select';

  onMounted(() => {
    import(`../../../assets/js/components/${component}/${component}.component.min.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-${component}`))
          window.customElements.define(`iam-${component}`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <iam-advanced-select :value="value">
    <slot></slot>
  </iam-advanced-select>
</template>