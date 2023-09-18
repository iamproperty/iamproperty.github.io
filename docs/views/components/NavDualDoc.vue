<template>
  <main>

    
    <DSHeader :image="headerImg" section="components">
      <h1>Navbar-dual</h1>
    </DSHeader>

    <div class="container pb-0">
      
      <p class="lead">Allow users to navigate across the key views within the platform</p>
      <p>Our navigation bar provides users with consistent links to the main sections of the site or platform. The dual variant presents the key navigation items across two horizontal lists on desktop, which are collapsed into a list behind a menu icon on tablet and mobile. Just like the Navbar, the Navbar-dual can be added in default or deep slate variant.</p>
      <p>The primary list navigation items are dropdown which displays the mega menu, whilst the secondary list of items are standard navigation links. The primary list is appended with a button (usually primary) and can also include a compact button if needed. On desktop this is positioned at the end of the list to stand out from the rest of the list, on tablet and mobile it is housed within the collapsed list behind the menu icon. </p>
    </div>

    <div class="demo visualtest">
    
      <Nav data-css="/assets/css/components/nav.docs.css">

        <a href="/" class="brand brand--property" slot="logo">
          <svg>
            <title>iamproperty</title>
            <use xlink:href="/svg/logo.svg#logo-property"></use>
          </svg>
        </a>

        <details>
          <summary>Why iamproperty</summary>
          <div>
            <details>
              <summary>Our solutions</summary>
              <div data-title="Our solutions">
                <a href="/">Win more instructions</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
              </div>
            </details>
            <details>
              <summary>By job role</summary>
              <div>
                <a href="/">Win more instructions1</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
              </div>
            </details>
            <details>
              <summary>By objective</summary>
              <div>
                <a href="/">Win more instructions2</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
              </div>
            </details>
            <details>
              <summary>By product</summary>
              <div>
                <a href="/">Win more instructions3</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
                
                <a href="/"><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></a>
              </div>
            </details>
          </div>
        </details>

        <details>
          <summary>Solution finder</summary>
          <div>
            <details>
              <summary>Our solutions</summary>
              <div data-title="Our solutions">
                <a href="/">Win more instructions</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
              </div>
            </details>
            <details>
              <summary>By job role</summary>
              <div>
                <a href="/">Win more instructions1</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
              </div>
            </details>
            <details>
              <summary>By objective</summary>
              <div>
                <a href="/">Win more instructions2</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
              </div>
            </details>
            <details>
              <summary>By product</summary>
              <div>
                <a href="/">Win more instructions3</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
                
                <a href="/"><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></a>
              </div>
            </details>
          </div>
        </details>

        <details>
          <summary>Insights</summary>
          <div>
            <details>
              <summary>Our solutions</summary>
              <div data-title="Our solutions">
                <a href="/">Win more instructions</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
              </div>
            </details>
            <details>
              <summary>By job role</summary>
              <div>
                <a href="/">Win more instructions1</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
              </div>
            </details>
            <details>
              <summary>By objective</summary>
              <div>
                <a href="/">Win more instructions2</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
              </div>
            </details>
            <details>
              <summary>By product</summary>
              <div>
                <a href="/">Win more instructions3</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>
                
                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>
                
                <a href="/"><Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card></a>
              </div>
            </details>
          </div>
        </details>

        <a href="/" slot="dual">Tech of a life</a>

        <button class="btn btn-primary">Lorem ipsum</button>

      </Nav>
    </div>

    
    <div class="container pt-4 pb-0">
      
      <h2>Usage notes</h2>
      <p>There should be no more than 6 navigation items (not including the button) in the primary navbar before the secondary navigation lists.</p>
      <p>On tablet and mobile, all menu items are hidden behind a menu icon. This icon has a label with it on tablet, which then becomes hidden on mobile devices to avoid spatial constraints.</p>
      <p>Buttons used within the action area of the primary navbar can be used to direct user to a page, modal or trigger the menu (see ‘Menu’ style guide)</p>

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
        <a href="/pdfs/navbar-dual.pdf" download>Download latest designs</a>
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


  iam-nav {
    position: relative;
    z-index: 1;
  }

  iam-nav:after{

    content: "";
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    height: calc(100vh - 6rem);
    width: 100%;
    z-index: -1;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(2px);
  }
}

#visualtest:target ~ main > .demo {
  padding: 0!important;
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
import anatomy from '../../img/navbar-mega-anatomy.png'

export default {
  components: {
    Nav,
    Readme,
    DSHeader,
    Table,
    WebReadme,
    Tabs,
    Tab,
    anatomy
  },
  data () {
    return {
      headerImg: headerImg,
      anatomy: anatomy
    }
  }
}
</script>
