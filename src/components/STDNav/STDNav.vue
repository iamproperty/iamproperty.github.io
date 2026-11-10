<script setup>
  import { onMounted, ref } from 'vue';

  const props = defineProps({ getAccessToken: { type: Function, required: true } });
  const element = ref(null);
  defineExpose({ refresh: () => element.value?.refresh?.() });
  const component = 'std-nav';

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
  <iam-std-nav
    ref="element"
    :getAccessToken.prop="props.getAccessToken"
  >
    <slot></slot>
  </iam-std-nav>
</template>
