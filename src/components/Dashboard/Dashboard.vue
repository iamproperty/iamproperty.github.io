<script setup>
  import { onMounted } from 'vue';


  // Make sure the components we need for the insights app are loaded and defined as custom elements.
  const components = [
    'carousel'
  ];

  components.forEach((component) => {
    if (!window.customElements.get(`iam-${component}`)) {
      import(`../../../assets/js/components/${component}/${component}.component.min.js`)
        .then((module) => {
          if (!window.customElements.get(`iam-${component}`))
            window.customElements.define(`iam-${component}`, module.default);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  });


  const component = 'dashboard';

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
  <iam-dashboard>
    <slot></slot>
  </iam-dashboard>
</template>
