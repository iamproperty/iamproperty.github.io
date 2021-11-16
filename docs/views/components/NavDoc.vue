<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Site navigation</h1>
      <p>The main site navigation needs to be clear and easy to use without distraction.</p>
    </div>
    
    
    <Nav class="mb-5 visualtest" btnLink="/account" btnText="Account">
      <ul class="list-unstyled">
        <li><a href="/">Link 1</a></li>
        <li><a href="/">Link 2</a></li>
        <li><a href="/">Link 3</a></li>
      </ul>
    </Nav>

    <div class="container pb-0">
      <h2>Secondary navigation</h2>
      <p>A secondary navigation can be added to include links that are not as important to the main user journeys but are relevant to the user. See the <a href="/standalone/iamsold-homepage" target="_blank">iamsold example page</a> to see it better in action.</p>
    </div>
    
    <Nav class="visualtest mb-5" btnLink="/account" btnText="Signout">
      <ul class="list-unstyled">
        <li><a href="/">Link 1</a></li>
        <li><a href="/">Link 2</a></li>
        <li><a href="/">Link 3</a></li>
      </ul>
      <template v-slot:secondary>
        <ul class="list-unstyled">
        <li class=""><a href="/props">Secondary link 1</a></li>
        <li class=""><a href="/props">Secondary link 2</a></li>
        <li class=""><a href="/props">Secondary link 3</a></li>
        <li class=""><a href="tel:01234567890">0123 456 7890</a></li>
      </ul>
      </template>
    </Nav>

    <div class="container pb-0">
      <h2>Admin navigation</h2>
      <p>To transform the navigation to look more like an admin bar with the classes <strong>.bg-primary</strong> and <strong>.nav--admin</strong> can be added. These will change the background colour, condense it down and move the optional secondary nav to the bottom on desktop. See the <a href="/standalone/iamsold-admin" target="_blank">iamsold admin dashboard example page</a> to see it better in action.</p>
    </div>
    
    <Nav class="visualtest mb-5 bg-primary nav--admin" btnLink="/account" btnText="Signout">
      <ul class="list-unstyled">
        <li><a href="/">Link 1</a></li>
        <li><a href="/">Link 2</a></li>
        <li><a href="/">Link 3</a></li>
      </ul>
      <template v-slot:secondary>
        <ul class="list-unstyled">
        <li class=""><a href="/props">Secondary link 1</a></li>
        <li class=""><a href="/props">Secondary link 2</a></li>
        <li class=""><a href="/props">Secondary link 3</a></li>
      </ul>
      </template>
    </Nav>

    <div class="container">
      <h2>Sub navigation</h2>
      <p>Allow for sublinks to be shown within the navigation so that users don't have to navigate to a landing page. See the <a href="/standalone/navbar" target="_blank">navbvar example page</a> to see it better in action.</p>
      <h3>Mega menu</h3>
      <p>Add a class of <strong>.nav__mega-menu</strong> to the details element to really highlight the section and have additional supportive content. See the <a href="/standalone/iamsold-homepage" target="_blank">iamsold example page</a> to see it better in action.</p>
    </div>

    <div class="container pb-0">
      <h2>Add search form</h2>
      <p>Integrate search functionality by adding a form to the nav and add the class <strong>.nav--inline-search</strong> to the nav. See the <a href="/standalone/iamsold-admin" target="_blank">iamsold admin dashboard example page</a> to see it better in action.</p>
 
      <h3>Featured search area</h3>
      <p>Or create a real feature by adding a div with the class of <strong>.nav__menu--search</strong> and a search button wrappped in a div with the class <strong>.nav__search-btn</strong>. See the <a href="/standalone/iamsold-homepage" target="_blank">iamsold example page</a> to see it better in action.</p>
    </div>
    
    <div class="container">
      <h2>Vue Nav component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<style lang="scss">
main .nav {
  position: relative;
  z-index: 99;
}

.nav.has-secondary {
  top: 0rem!important;
}

main label[for="showMenu"]{
  pointer-events: none;
}
</style>

<script>
import Nav from '@/components/Nav/Nav.vue'
import Readme from '@/components/Nav/README.md'

export default {
  components: {
    Nav,
    Readme
  },
  data () {
    return {
      htmlUsage: `<header class="header">
  <div class="container">
    <ul class="breadcrumb">
      <li><a href="/">Home</a></li>
      <li><a href="/top">Top level</a></li>
    </ul>
    <div class="header__inner">
      <h1>Page title</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  </div>
  <picture>
    <source srcset="/img/shutterstock_1229155495.f3b0401e.webp" media="(min-width: 62em)" />
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
  </picture>
</header>`
    }
  }
}
</script>