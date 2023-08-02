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

    <div class="dialog__wrapper dialog__wrapper--right">
        <button class="btn btn-primary colour-primary btn-compact fa-search me-0 mb-0">Open Popover</button>
        <dialog id="search-dialog">
          <form action="/search" class="row">
            <div class="col mb-0">
              <label for="search" class="visually-hidden">Search</label>
              <input type="search" class="" id="search" name="search" required="" autocomplete="off" list="searchterms" @keydown="removelist" @keyup="addlist" />
            </div>
            <div class="col mw-fit-content">
            <button class="btn btn-primary colour-primary mb-0 me-0">Search</button>
            </div>

  <datalist data-id="searchterms" ref="list">
    <option v-for="item in refinedResults" :value="item"></option>
  </datalist>

          </form>
        </dialog>
      </div>
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

.nav .list-unstyled li a.router-link-active:not(.text-decoration-none):not(.btn):before {
  width: 100%;
}

.nav {
  overflow-x: visible;
}

.nav:has(#showMenu:checked) {
  min-height: unset;
}

@media screen and (max-width: 62em) {

  .nav .dialog__wrapper {
    padding-top: 2rem;
    width: 100%;
  }
  .nav .dialog__wrapper > .btn {
    display: none;
  }
  .nav .dialog__wrapper dialog {
    display: contents;
  }
}

#search-dialog {
  min-width: 30rem;
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

#app {

  display: contents;
  > div {
    display: contents;
  }
}
</style>


<script>
import Card from '@/components/Card/Card.vue'
import routes from './routes.ts';

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

console.log(results);
console.log(refinedResults);

export default {
  components: {
    Card
  },
  methods: {
    removelist: function(e){

      let datalist = this.$refs.list;

      if (e.target.value.length < 3) 
        datalist.setAttribute("id", "");
    },
    addlist: function(e){

      let datalist = this.$refs.list;

      if (e.target.value.length >= 2) 
        datalist.setAttribute("id", "searchterms");
    }
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
  },
  data () {
    return {
      searchTerm: searchTerm,
      refinedResults: refinedResults
    }
  }
}
</script>