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

  <TrackEvents
    selector="iam-nav"
    :events="[]"
  ></TrackEvents>

  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Navbar</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">Allow users to navigate across the key views within the platform</p>
      <p>
        Our navigation bar provides users with consistent links to the main sections of the site or platform. The items
        presented in the navbar are key navigation items which display on desktop as a horizontal list, on tablet and
        mobile it appears collapsed into a list behind the menu icon.
      </p>
      <p>
        The list navigation items is appended with a button (usually primary) and can also include a compact button if
        needed. On desktop this is positioned at the end of the list to stand out from the rest of the list, on tablet
        and mobile it is housed within the collapsed list behind the menu icon.
      </p>
    </div>

    <div class="demo visualtest">
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
      </Nav>
    </div>

    <div class="container pt-4 pb-0">
      <span class="lead text-body pb-3 d-block">VARIATION (DEEP SLATE)</span>
    </div>

    <div class="demo visualtest">
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
      </Nav>
    </div>

    <div class="container pt-5">
      <h2 class="h4">Usage notes</h2>
      <p>There should be no more than 6 navigation items (not including the button) in the navbar</p>

      <p>
        On tablet, all menu items are hidden behind the ‘menu + hamburger), once activated the menu slides in from the
        right hand side and displays fully expanded at a width of 21.5rem ( 344px).
      </p>

      <p>
        All menu items are hidden behind the hamburger menu on mobile, once activated the menu slides in from the right
        hand side and should occupy the full width and height on mobile device.
      </p>

      <p>This navbar can be stick or not depending on ruling - it will be none-sticky by default.</p>
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
    <Versions pdf="/pdfs/navbar.pdf">
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
