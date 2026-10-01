<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {

    // Make sure the components we need for the insights app are loaded and defined as custom elements.
    const components = [
      'pagination',
      'actionbar',
      'table-advanced',
      'menu',
      'notification',
      'map',
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

    // Import the app insights component dynamically and define it if it hasn't been defined yet.
    import(`../../../assets/js/apps/insights.app.js`)
      .then((module) => {
        if (!window.customElements.get(`iam-app-insights`))
          window.customElements.define(`iam-app-insights`, module.default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
</script>

<template>
  <iam-app-insights>
    <slot></slot>
  </iam-app-insights>
</template>
