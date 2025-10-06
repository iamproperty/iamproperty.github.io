<script setup>
  import { onMounted } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  });

  const component = 'header';

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
  <!-- Custom element -->
  <iam-header :image="image">
    <slot name="breadcrumb"></slot>
    <h1 v-if="title" v-html="title"></h1>
    <slot></slot>
  </iam-header>
</template>
