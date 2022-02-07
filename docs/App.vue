<template>
  <div id="app">
    <div id="visualtest"></div>
    <SVGLogo class="d-none" />
    <SVGIcons class="d-none" />

    <Nav logo="key" logoText="Design system<br/>&amp; framework">
      <ul class="list-unstyled">
        <li><router-link :class="{'router-link-sub-active': subIsActive('/principles')}" to="/principles">Principles</router-link></li>
        <li><router-link :class="{'router-link-sub-active': subIsActive('/foundations')}" to="/foundations">Foundations</router-link></li>
        <li><router-link :class="{'router-link-sub-active': subIsActive('/elements')}" to="/elements">Elements</router-link></li>
        <li><router-link :class="{'router-link-sub-active': subIsActive('/components')}" to="/components">Components</router-link></li>
      </ul>
    </Nav>
    <router-view />
    <footer class="bg-primary">

      <div class="container pt-4 d-print-none">
        <ul class="list-unstyled list-inline ms-auto d-block mb-0">
          <li class="list-inline-item me-4 ms-0 mb-2"><a :href="require('./assets/brand-guidelines.pdf')" target="_blank">Brand guidelines</a></li>
          <li class="list-inline-item me-4 ms-0 mb-2"><router-link :class="{'router-link-sub-active': subIsActive('/get-started')}" to="/get-started">Get started</router-link></li>
          <li class="list-inline-item me-4 ms-0 mb-2"><router-link :class="{'router-link-sub-active': subIsActive('/accessibility')}" to="/accessibility">Accessibility</router-link></li>
          <li class="list-inline-item me-4 ms-0 mb-2"><router-link :class="{'router-link-sub-active': subIsActive('/examples')}" to="/examples">Examples</router-link></li>
          <li class="list-inline-item me-4 ms-0 mb-2"><router-link :class="{'router-link-sub-active': subIsActive('/articles')}" to="/articles">Articles</router-link></li>
          <li class="list-inline-item me-4 ms-0 mb-2"><router-link :class="{'router-link-sub-active': subIsActive('/audit')}" to="/audit">Audit</router-link></li>
          <li class="list-inline-item me-4 ms-0 mb-2"><router-link :class="{'router-link-sub-active': subIsActive('/changelog')}" to="/changelog">Changelog</router-link></li>
        </ul>
      </div>
      <div class="container pt-3">
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
import * as helpers from '../assets/js/modules/helpers'
import form from '../assets/js/modules/form'

import Nav from '@/components/Nav/Nav.vue'

export default {
  data () {
    return {
      version: pkg.version
    }
  },
  components: {
    SVGLogo,
    SVGIcons,
    Logo,
    Nav
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

    // Remove weird markdown component behavior
    let element = document.querySelector('#app html');
    if(element){

      const fragment = document.createDocumentFragment();
      Array.from(element.querySelector('body').childNodes).forEach(child => fragment.appendChild(child));
      element.parentNode.insertBefore(fragment, element);
      element.parentNode.removeChild(element);
    }
    // end

    document.getElementById('showMenu').checked = false;

    if(document.querySelector('main'))
      helpers.checkElements(document.querySelector('main'));

    Array.from(document.querySelectorAll('form')).forEach((arrayElement, index) => {
      form(arrayElement);
    });

    hljs.highlightAll();
  }
}
</script>
<style lang="scss">
.nav .router-link-active:not(.text-decoration-none):not(.btn):before {
  width: 100%;
}
#visualtest:target ~ *:not(main),
#visualtest:target ~ main > *:not(.visualtest){
  display: none!important;
}

#visualtest:target ~ main > .d-none.visualtest{
  display: block!important;
}
#visualtest:target ~ main > .visualtest .visualtest-hide,
#visualtest:target ~ main > .visualtest pre {
  display: none!important;
}
</style>
