
<script setup>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Tab from '@/components/Tabs/Tab.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Table from '@/components/Table/Table.vue';

  import Nav from '@/components/Nav/Nav.vue';

  import Versions from '../Versions.vue';
  import NavIntegration from './NavIntegration.vue';
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

    <div class="full-width visualtest pe-none position-relative">
      <Nav >
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

        <button class="btn btn-primary" slot="actions">Lorem ipsum</button>

        <a href="/" slot="secondary">Contact</a>
        <a href="/" slot="secondary">About us</a>
      </Nav>
    </div>

    <NavIntegration></NavIntegration>
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
