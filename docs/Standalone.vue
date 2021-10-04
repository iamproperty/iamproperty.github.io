<template>
  <div id="app">
    <div id="visualtest"></div>
    <SVGLogo class="d-none" />
    <SVGIcons class="d-none" />

    <router-view />
    
    
  </div>
</template>
<script>
import SVGLogo from '../assets/svg/logo.svg?inline'
import SVGIcons from '../assets/svg/icons.svg?inline'
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
    SVGLogo,
    SVGIcons,
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
  updated(){
    if(document.querySelector('main'))
      helpers.checkElements(document.querySelector('main'));

    Array.from(document.querySelectorAll('form')).forEach((arrayElement, index) => {
      form(arrayElement);
    });

    hljs.highlightAll();
  }
}
</script>