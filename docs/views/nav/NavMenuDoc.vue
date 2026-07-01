
<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import Nav from '@/components/Nav/Nav.vue';
  import BranchSelector from '@/components/BranchSelector/BranchSelector.vue';
  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Navbar-menu</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">Surfacing sub menu items allows users to navigate into a section.</p>

      <p>
        The navbar menu is a simple single-column list that is used for items such as my account, sign in and can also
        be used as an overflow menu. It is triggered by a button (compact or full styling) within navbar action slot or
        a navigational item within the primary nav or secondary navbar. Once triggered then the menu expands. The menu
        has an optional H3 header which can be displayed at the top of the menu list if needed.
      </p>
      <p>
        On desktop and tablet, the menu will slide in from the right hand side and fill the full height of the screen. A
        max width is applied on desktop, will take up 50% of the screen on tablet and will be full width on mobile. If
        the items listed within the menu are longer than the viewport height, then the menu will scroll within the
        container.
      </p>
    </div>

    <div class="demo visualtest pe-none">
      <Nav class="demo-open" style="--modifier:2rem;">
        <a href="/" class="brand brand--property" slot="logo">
          <svg>
            <title>iamproperty</title>
            <use xlink:href="/svg/logo.svg#logo-property"></use>
          </svg>
        </a>

        <a href="/">Lorem ipsum</a>
        <a href="/">Lorem ipsum</a>
        <a href="/">Lorem ipsum</a>
        <a href="/">Lorem ipsum</a>

        <span class="h3 title" slot="account">John Jones</span>

        <a href="/" slot="account">Agency settings</a>
        <a href="/" slot="account">Control panel</a>
        <a href="/" class="mb-4" slot="account">Contact us</a>


      </Nav>
    </div>

    <div class="container pt-4 pb-0">
      <h2>Usage notes</h2>
      <p>
        The menu should slide in from the right edge of the screen on desktop and tablet, and should slide down from the
        top on mobile.
      </p>
      <p>Items within the menu list can include text links, form fields or buttons.</p>
      <p>There are no limits on the number of items within the menu as the panel will be scrollable.</p>
      <p>The scrolling of the main page should be locked whilst the menu is active.</p>
      <p>
        To dismiss the menu on desktop, the user can click anywhere that isn’t the menu, click the action button that
        initiated the menu UI or click any other item in the primary navbar. To dismiss the menu on tablet, the user can
        click anywhere that isn’t the menu, click the close icon or any other item in the primary navbar. To dismiss the
        menu on mobile, the user can click the close icon or click another item in the primary navbar.
      </p>
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

  @media screen and (max-width: 36em) {
    body:has(:is(iam-nav,.iam-nav).nav-open) {
        max-height: unset!important;
        overflow: unset!important;
    }
  }

  @media screen and (min-width: 36em) {
    body:has(:is(iam-nav,.iam-nav).nav-open) {
      max-height: unset!important;
      overflow: unset!important;
    }
  }

  @media screen and (min-width: 62em) {
    html:has(:is(iam-nav,.iam-nav).nav-open) {
      overflow: unset!important;
    }

    nav:has(:is(iam-nav,.iam-nav).nav-open) {
      min-height: 100vh !important;
      max-height: 100vh!important;
      overflow: visible!important;

      margin-bottom: calc((100vh - var(--nav-height)) * -1)!important;
    }

  }
</style>

<style lang="scss" scoped>



  .demo {
    background-color: #f2f2f2;
    overflow: hidden;
    padding: 2rem;
    height: calc(100vh + 4rem);
    grid-column: container;
    margin-inline: -2rem;
    overflow-x: clip;

    iam-nav {
      position: relative;
      z-index: 1;
      overflow-x: clip;
    }
  }

  main {
    max-width: 100vw;
    overflow-x: hidden;
  }

  @media screen and (max-width: 62em) {
    .demo iam-nav::part(menu__outer) {
      background: rgba(0, 0, 0, .2);
      backdrop-filter: blur(2px);
    }

    .demo iam-nav::part(nav--menu) {
      width: calc(23.4375rem - var(--modifier, 0px));
      left: calc(100% - (23.4375rem - var(--modifier, 0px)));
      -webkit-box-shadow: 0 12px 12px 0px rgba(0, 0, 0, .2);
      box-shadow: 0 12px 12px 0px rgba(0, 0, 0, .2);
      pointer-events: all;
    }
  }


  @media screen and (min-width: 62em) {
    :is(iam-nav,.iam-nav) details:not([slot=secondary])[open] > div {
      max-width: 80rem;
    }

    .demo iam-nav::part(nav--menu) {
      width: calc(23.4375rem - var(--modifier, 0px));
      left: calc(100% - (23.4375rem - var(--modifier, 0px)));
      -webkit-box-shadow: 0 12px 12px 0px rgba(0, 0, 0, .2);
      box-shadow: 0 12px 12px 0px rgba(0, 0, 0, .2);
      pointer-events: all;
    }

  }
</style>
