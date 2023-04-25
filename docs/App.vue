<script setup>
import pkg from '../package.json'
import Nav from '../src/components/Nav/Nav.vue'

const version = pkg.version;
</script>

<template>

  <div id="visualtest"></div>

  <Nav logo="key" logotext="Design system<br/>&amp; framework">
    <ul class="list-unstyled">
      <li><router-link to="/principles">Principles</router-link></li>
      <li><router-link to="/foundations">Foundations</router-link></li>
      <li><router-link to="/components">Components</router-link></li>
      <li><router-link to="/templates">Templates</router-link></li>
      <li><router-link to="/best-practice">Best practice</router-link></li>
    </ul>
  </Nav>

  <router-view></router-view>

  <footer class="bg-primary">
    <div class="container pt-4 d-print-none">
      <ul class="list-unstyled list-inline ms-auto d-block mb-0">
        <li class="list-inline-item me-4 ms-0 mb-2"><a href="/brand-guidelines.pdf" target="_blank" download>Brand guidelines</a></li>
        <li class="list-inline-item me-4 ms-0 mb-2"><router-link to="/information">Information</router-link></li>
        <li class="list-inline-item me-4 ms-0 mb-2"><router-link to="/get-started">Get started</router-link></li>
        <li class="list-inline-item me-4 ms-0 mb-2"><router-link to="/examples">Examples</router-link></li>
        <li class="list-inline-item me-4 ms-0 mb-2"><router-link to="/audit">Audit</router-link></li>
        <li class="list-inline-item me-4 ms-0 mb-2"><router-link to="/changelog">Changelog</router-link></li>
      </ul>
    </div>
    <div class="container pt-3">
      <p>Version: {{version}}</p>
    </div>
  </footer>

</template>

<style lang="scss">

@import "./assets/styles.scss";

.nav .list-unstyled li a.router-link-active:not(.text-decoration-none):not(.btn):before {
  width: 100%;
}

footer .router-link-active {
  text-decoration: none;
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
<script>
import * as helpers from '../assets/ts/modules/helpers'


export default {
  props: {
  },
  created(){
    console.log('hi');
    
    // Global stuff
    helpers.addBodyClasses(document.body);
    helpers.addGlobalEvents(document.body);
    helpers.checkElements(document.body);
  }
}
</script>
