<template>
  <div id="app">
    <div id="visualtest"></div>

    <router-view />

  </div>
</template>
<script>
import Logo from '@/foundations/Logo/Logo.vue'
import pkg from '../package.json'
import * as helpers from '../assets/js/modules/helpers'
import form from '../assets/js/modules/form'

export default {
  data () {
    return {
      version: pkg.version
    }
  },
  components: {
    Logo
  },
  methods: {
    subIsActive (input) {
      const paths = Array.isArray(input) ? input : [input]
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0 // current path starts with this path string
      })
    }
  },
  mounted(){
    if(document.querySelector('main'))
      helpers.checkElements(document.querySelector('main'));

    Array.from(document.querySelectorAll('form')).forEach((arrayElement, index) => {
      form(arrayElement);
    });
  }
}
</script>
