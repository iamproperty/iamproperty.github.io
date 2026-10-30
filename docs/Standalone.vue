<template>
  <router-view />
</template>
<script>
  import Logo from '@/foundations/Logo/Logo.vue';
  import pkg from '../package.json';

  export default {
    data() {
      return {
        version: pkg.version,
      };
    },
    components: {
      Logo,
    },
    methods: {
      subIsActive(input) {
        const paths = Array.isArray(input) ? input : [input];
        return paths.some((path) => {
          return this.$route.path.indexOf(path) === 0; // current path starts with this path string
        });
      },
    },
  };
</script>
