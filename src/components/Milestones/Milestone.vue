<script setup>
  import { onMounted } from 'vue';

  const component = 'milestone';

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
  <iam-milestone class="milestone">
    <slot></slot>
  </iam-milestone>
</template>
