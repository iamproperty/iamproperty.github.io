
<script setup>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Tab from '@/components/Tabs/Tab.vue';
  import WebReadme from '~/ts/components/nav/README.md';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Table from '@/components/Table/Table.vue';

  import Nav from '@/components/Nav/Nav.vue';
  import Readme from '@/components/Nav/README.md';

  
  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Navbar-secondary</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">Allow users to navigate across additional minor or lesser items.</p>
      <p>
        Our secondary navigational area can be used to house items of lesser importance to navigation of the site but
        offer a quick helpful support for example these areas could house items such as ‘Contact Us’ or within the
        iamproperty agent platform could it be used to house navigation for the other services a user has signed up for.
        This navbar area is completely optional, it can only be used as a supporting element to one of our navbars and
        it can be used on any of our navbars types. The navbar-secondary sits above the primary navbar on desktop, and
        is housed at the bottom of the expanded menu on tablet and mobile.
      </p>
    </div>

    <div class="demo visualtest position-relative">
      <Nav data-css="/assets/css/components/nav.docs.css">
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

    <div class="demo visualtest position-relative">
      <Nav class="bg-primary" data-css="/assets/css/components/nav.docs.css">
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

    <Integration component="nav" componentName="iam-nav">
      <template #web-component>
        <pre><code>{{`<nav>
<iam-nav>
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
</iam-nav>
</nav>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Nav from '@/components/nav/nav.vue</script>
        
<Nac>
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
`}}</code></pre>
      </template>

      <template #attr>
        <table>
          <thead>
            <tr>
              <th>Attributes</th>
              <th>Default</th>
              <th>Options/Type</th>
              <th>Required</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>data-search-open</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>Flag that opens the search bar on desktop on page load.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #slots>
        <table>
          <thead>
            <tr><th>Option</th><th>Default Value</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>default</td><td>-</td><td>Populates the main nav area</td></tr>
            <tr><td>logo</td><td>-</td><td>A place to add the logo to the site</td></tr>
            <tr><td>secondary</td><td>-</td><td>Moves the link upto the top of the navbar on desktop</td></tr>
            <tr><td>actions</td><td>-</td><td>A place to add buttons</td></tr>
            <tr><td>dual</td><td>-</td><td>Plave the link or list to the right of the nav, forcing the default slot to the left.</td></tr>
            <tr><td>search</td><td>-</td><td>A place to include a form with search functionality</td></tr>
          </tbody>
        </table>
      </template>
<template #classes>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>.bg-primary</th>
              <td>will change the background of the navbar without chaning the menu background.</td>
            </tr>
            <tr>
              <th>.nav-sticky</th>
              <td>will add etxra styling to make the navbar stick to the top of the page</td>
            </tr>
            <tr>
              <th>.nav-xs-sticky</th>
              <td>will add etxra styling to make the navbar stick to the top of the page BUT only on the mobile view.</td>
            </tr>
          </tbody>
        </table>
      </template>
      
    </Integration>
    <Versions pdf="/pdfs/navbar-duel.pdf">
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
    </Versions>

  </main>
</template>

<style lang="scss">
  @media screen and (max-width: 62em) {
    .demo {
      background-color: #f2f2f2;
      overflow: hidden;
      padding: 1rem 1rem 0 1rem;
      height: 100vh;
    }

    #visualtest:target ~ main > .demo {
      padding: 0 !important;
    }
  }
</style>
