<script setup>
import pkg from '../package.json'
import Nav from '../src/components/Nav/Nav.vue'

const version = pkg.version;
</script>

<template>

  <div id="visualtest"></div>

  <nav>
  <Nav logo="key" logotext="Design system<br/>&amp; framework" data-search="/search" data-list="searchterms">

    <a href="/" class="brand brand--key" slot="logo">

      <svg><title>iam key</title><use xlink:href="/svg/logo.svg#logo-key"></use></svg>
      <span>Design system<br>&amp; framework</span>
    </a>

    <router-link to="/principles">Principles</router-link>
    <router-link to="/foundations">Foundations</router-link>
    <router-link to="/elements">Elements</router-link>
    <router-link to="/components">Components</router-link>
    <router-link to="/templates">Templates</router-link>
    <router-link to="/best-practice">Best practice</router-link>

    <datalist id="searchterms" ref="list">
      <option v-for="item in refinedResults" :value="item"></option>
    </datalist>

  </Nav>
  </nav>

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
@use '../assets/sass/_func.scss' as *;
@import "./assets/styles.scss";

@media screen and (max-width: 62em){
  .nav__inner {
    display: none;
  }
  #showMenu:checked ~ .nav__inner {
    display: block;
  }

}

mark {
  padding-inline: 0;
}

a.router-link-active:not(.text-decoration-none):not(.btn):before {
  width: 100%;
}


//@media screen and (max-width: 62em) {
  iam-nav > a.router-link-active:not([slot=logo]){
    text-decoration: underline;
    text-underline-offset: 0.3em;
    text-decoration-thickness: 2px;
    text-decoration-color: var(--colour-info) !important;
  }
//}

@include media-breakpoint-up(md) {


}

.nav {
  overflow-x: visible;
}

.nav:has(#showMenu:checked) {
  min-height: unset;
}


footer .router-link-active {
  text-decoration: none;
}

#visualtest:target ~ *:not(main),
#visualtest:target ~ main > *:not(.visualtest){
  display: none!important;
}
@layer utilities {
#visualtest:target ~ main > .d-none.visualtest{
  display: block!important;
}
}
#visualtest:target ~ main > .visualtest .visualtest-hide,
#visualtest:target ~ main > .visualtest pre {
  display: none!important;
}

#app {

  display: contents;
  > div {
    display: contents;
  }
}

.markdown-body {
  overflow: auto;
}


</style>


<script>
import Card from '@/components/Card/Card.vue'
import routes from './routes.ts';


import extendInputs from '../assets/ts/modules/inputs';



var urlParams = new URLSearchParams(window.location.search);
let results = [];
let searchTerm = urlParams.get('search');

searchTerm = searchTerm ? searchTerm.toLowerCase().trim() : '';

routes.forEach((route) => {
  
  let name = route.name ? route.name : '';

  if(name != '' && name != "Search" && name != "Home")
    results.push(name);

  if(route.searchterms){

    const array = Array.from(route.searchterms.split(','));

    for (let [key, term] of Object.entries(array)) {

      term = term.trim();
      results.push(term);
    }
  }

  if (route.children) {

    for (const [key, value] of Object.entries(route.children)) {
      let childName = value.name ? value.name : '';

      if(childName != '')
        results.push(childName);

      if(value.searchterms){

        const array = Array.from(value.searchterms.split(','));

        for (let [key, term] of Object.entries(array)) {

          term = term.trim();
          results.push(term);
        }

      }
    }
  }
});

const refinedResults = [...new Set(results)];

export default {
  components: {
    Card
  },
  methods: {

  },
  mounted () {
    var urlParams = new URLSearchParams(window.location.search);
    let searchTerm = urlParams.get('searchterm');
    
    let searched = searchTerm ? searchTerm.trim() : '';

    if (searched !== "") {
      const myTimeout = setTimeout(function(){

        let main = document.querySelector('main');

        Array.from(main.querySelectorAll('p,li,h1,h2,h3,h4,h5,h6,span')).forEach((textBlock) => {
          
          let text = textBlock.innerHTML;
        
          const regex = new RegExp(`(${searched})`, 'gi');
          let newText = text.replace(regex, "<mark>$1</mark>");
          textBlock.innerHTML = newText;
        
        });

        if(document.querySelector('mark')){
          document.querySelector('mark').scrollIntoView();
        }
      }, 1000);
    }


    this.$nextTick(function () {

      extendInputs(document.body);


    });

  },
  data () {
    return {
      searchTerm: searchTerm,
      refinedResults: refinedResults
    }
  }
}
</script>