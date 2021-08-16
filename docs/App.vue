<template>
  <div id="app">
    <div id="visualtest"></div>
    <SVGLogo class="d-none" />
    <SVGIcons class="d-none" />

    <nav class="navbar">
      <div class="container">
        <div class="row">
          <div class="col col-sm-4 mw-fit-content">
            <router-link :class="{'text-decoration-none router-link-sub-active': subIsActive('/')}" to="/">
              <Logo id="key" desc="Design system<br/>&amp; framework"></Logo>
            </router-link>
          </div>

          <div class="col mw-fit-content ms-auto d-none d-sm-flex flex-row align-items-center">
            <ul class="list-unstyled list-inline ms-auto d-block mb-0">
              <li class="list-inline-item ms-4 me-0"><router-link :class="{'router-link-sub-active': subIsActive('/foundations')}" to="/foundations">Foundations</router-link></li>
              <li class="list-inline-item ms-4 me-0"><router-link :class="{'router-link-sub-active': subIsActive('/elements')}" to="/elements">Elements</router-link></li>
              <li class="list-inline-item ms-4 me-0"><router-link :class="{'router-link-sub-active': subIsActive('/components')}" to="/components">Components</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="bg-primary">

      <div class="container pt-4">
        <ul class="list-unstyled list-inline ms-auto d-block mb-0">
          <li class="list-inline-item me-4 ms-0"><router-link :class="{'router-link-sub-active': subIsActive('/audit')}" to="/audit">Audit</router-link></li>
          <li class="list-inline-item me-4 ms-0"><router-link :class="{'router-link-sub-active': subIsActive('/changelog')}" to="/changelog">Changelog</router-link></li>
        </ul>
      </div>
      <div class="container pt-4">
        <p>Version: {{version}}</p>
      </div>
    </footer>
  </div>
</template>
<script>
import SVGLogo from '../assets/svg/logo.svg?inline'
import SVGIcons from '../assets/svg/icons.svg?inline'
import Logo from '@/foundations/Logo/Logo.vue'
import pkg from '../package.json'

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
  }
}
</script>
<style lang="scss">
.navbar .router-link-active:after {
  width: 100%;
}
#visualtest:target ~ *:not(main),
#visualtest:target ~ main > *:not(.visualtest){
  display: none!important;
}
</style>
