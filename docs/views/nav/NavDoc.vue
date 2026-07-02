<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import Nav from '@/components/Nav/Nav.vue';


  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';

  import NavIntegration from './NavIntegration.vue';
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

    <div class="full-width visualtest pe-none">
      <Nav data-css="/assets/css/components/nav.docs.css">
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

        <button class="btn btn-primary">Lorem ipsum</button>
      </Nav>
    </div>

    <h2 class="pt-5">Navigation item behaviour</h2>

    <div class="col-end-6 md-col-end-2">
      <span class="d-block pb-2">DEFAULT</span>
      <a href="/">Lorum ipsum</a>
    </div>
    <div class="col-start-7 md-col-start-3">
      <span class="d-block pb-2">SELECTED</span>
      <a href="/" class="selected">Lorum ipsum</a>
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



    <NavIntegration></NavIntegration>
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


