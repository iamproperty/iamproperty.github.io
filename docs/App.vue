<template>
  <div id="app">

    <SVGLogo class="d-none" />

    <nav class="pt-3 pb-3">
      <div class="container">
        <div class="row">
          <div class="col mw-fit-content">
            <router-link :class="{'text-decoration-none router-link-sub-active': subIsActive('/')}" to="/">
              <Logo id="key" desc="Design system<br/>&amp; framework"></Logo>
            </router-link>
          </div>

          <div class="col mw-fit-content ms-auto d-none d-sm-flex flex-row align-items-center">
            <ul class="list-unstyled list-inline ms-auto d-block mb-0">
              <li class="list-inline-item"><router-link :class="{'router-link-sub-active': subIsActive('/foundations')}" to="/foundations">Foundations</router-link></li>
              <li class="list-inline-item"><router-link :class="{'router-link-sub-active': subIsActive('/elements')}" to="/elements">Elements</router-link></li>
              <li class="list-inline-item"><router-link :class="{'router-link-sub-active': subIsActive('/components')}" to="/components">Components</router-link></li>
              <li class="list-inline-item"><router-link :class="{'router-link-sub-active': subIsActive('/patterns')}" to="/patterns">Patterns</router-link></li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="bg-dark">
      <div class="container pt-4">
        <p>Version: {{version}}</p>
      </div>
    </footer>
  </div>
</template>
<script>
import SVGLogo from '../assets/svg/logo.svg?inline'
import Logo from '@/foundations/Logo/Logo.vue'
import pkg from '../package.json'

import sassVars from './assets/styles.scss'

export default {
  data () {
    return {
      version: pkg.version,
      sassVars: sassVars
    }
  },
  components: {
    SVGLogo,
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
@import "@/assets/scss/_variables.scss";

#app {
  font-family: 'qanelasmedium', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000;
}

#nav a.router-link-exact-active, #nav .router-link-sub-active {
  color: $punchy-mustard;
}
</style>
