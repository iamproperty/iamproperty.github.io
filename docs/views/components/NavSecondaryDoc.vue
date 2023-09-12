<template>
  <main>

    
    <DSHeader :image="headerImg" section="components">
      <h1>Navbar-secondary</h1>
    </DSHeader>



    <div class="container pb-0">
      
      <p class="lead">Allow users to navigate across additional minor or lesser items.</p>
      <p>Our secondary navigational area can be used to house items of lesser importance to navigation of the site but offer a quick helpful support for example these areas could house items such as ‘Contact Us’ or within the iamproperty agent platform could it be used to house navigation for the other services a user has signed up for. This navbar area is completely optional, it can only be used as a supporting element to one of our navbars and it can be used on any of our navbars types. The navbar-secondary sits above the primary navbar on desktop, and is housed at the bottom of the expanded menu on tablet and mobile.</p>

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

      <a href="/" slot="secondary">Contact</a>
      <a href="/" slot="secondary">About us</a>

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

    <a href="/" slot="secondary">Contact</a>
      <a href="/" slot="secondary">About us</a>

    </Nav>
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
        <a href="/pdfs/navbar-secondary.pdf" download>Download latest designs</a>
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
  height: 100vh;
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
