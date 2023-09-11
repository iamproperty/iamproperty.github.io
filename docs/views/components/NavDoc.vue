<template>
  <main>

    
    <DSHeader :image="headerImg" section="components">
      <h1>Navbar</h1>
    </DSHeader>



    <div class="container pb-0">
      
      <p class="lead">Allow users to navigate across the key views within the platform </p>
      <p>Our navigation bar provides users with consistent links to the main sections of the site or platform. The items presented in the navbar are key navigation items which display on desktop as a horizontal list, on tablet and mobile it appears collapsed into a list behind the menu icon.</p>
      <p>The list navigation items is appended with a button (usually primary) and can also include a compact button if needed. On desktop this is positioned at the end of the list to stand out from the rest of the list, on tablet and mobile it is housed within the collapsed list behind the menu icon.</p>

    </div>

    <div class="demo">
    <Nav class="visualtest" data-css="/assets/css/components/nav.docs.css">

      <a href="/" class="brand brand--property" slot="logo">
        <svg>
          <title>iamproperty</title>
          <use xlink:href="/svg/logo.svg#logo-property"></use>
        </svg>
      </a>

      <a href="/" class="selected">Lorem ipsum</a>
      <a href="/">Lorem ipsum</a>
      <a href="/">Lorem ipsum</a>
      <a href="/">Lorem ipsum</a>

      <button class="btn btn-primary">Lorem ipsum</button>

    </Nav>
    </div>

    <div class="container pt-4 pb-0">
      <span class="lead text-body pb-3 d-block">VARIATION (DEEP SLATE)</span>
    </div>

    <div class="demo">
    <Nav class="visualtest bg-primary" data-css="/assets/css/components/nav.docs.css">

    <a href="/" class="brand brand--property" slot="logo">
      <svg>
        <title>iamproperty</title>
        <use xlink:href="/svg/logo.svg#logo-property"></use>
      </svg>
    </a>

    <a href="/" class="selected">Lorem ipsum</a>
    <a href="/">Lorem ipsum</a>
    <a href="/">Lorem ipsum</a>
    <a href="/">Lorem ipsum</a>

    <button class="btn btn-primary">Lorem ipsum</button>

    </Nav>
    </div>

    <div class="container pt-5 ">
      
      <h2 class="h4">Usage notes</h2>
      <p>There should be no more than 6 navigation items (not including the button) in the navbar</p>

      <p>On tablet, all menu items are hidden behind the ‘menu + hamburger), once activated the menu slides in from the right hand side and displays fully expanded at a width of 21.5rem ( 344px).</p>

      <p>All menu items are hidden behind the hamburger menu on mobile, once activated the menu slides in from the right hand side and should occupy the full width and height on mobile device.</p>

      <p>This navbar can be stick or not depending on ruling - it will be none-sticky by default.</p>
    </div>

    
    <div class="container pt-4">
      
      <h2>Implementation</h2>
      <Tabs >
        <details>
          <summary><h2>Web component</h2></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <Readme></Readme>
        </details>
        <!--
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="javascript">{{`<nav></nav>`}}</code></pre>
        </details>
      -->
      </Tabs>
    </div>
    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>V0.1</td>
              <td>25.08.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/navbar.pdf" download>Download latest designs</a>
      </div>
    </div>

  </main>
</template>

<style lang="scss">




@media screen and (max-width: 62em) {
.demo {
  background-color: #F2F2F2;
  overflow: hidden;
  padding: 1rem 1rem 0 1rem;
}
}


</style>

<script>

import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import WebReadme from '~/ts/components/nav/README.md'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Table from '@/components/Table/Table.vue'


import Nav from '@/components/Nav/Nav.vue'
import Readme from '@/components/Nav/README.md'

export default {
  components: {
    Nav,
    Readme,
    DSHeader,
    Table,
    WebReadme,
    Tabs,
    Tab
  },
  data () {
    return {
      headerImg: headerImg
    }
  }
}
</script>
