<script setup>
  import DSHeader from '../DSHeader.vue';
  import Nav from '@/components/Nav/Nav.vue';
  import BranchSelector from '@/components/BranchSelector/BranchSelector.vue';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
</script>

<template>
  <main>
    <DSHeader section="components">
      <h1>Switching account</h1>
    </DSHeader>

    <p class="lead">
      Within the our products, we have many users who have multiple accounts so we have provided a way for those users
      to switch their accounts right from the my account navbar menu. The switch account button will only appear if the
      user has more than one account.
    </p>

    <p>
      Below documents where that switch account is positioned in the navbar menu and the page template required to
      perform the switch.
    </p>

    <h2>Account switcher placement in navbar menu</h2>

    <div class="demo visualtest mb-5">
      <Nav class="open nav-open">
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

        <span class="h3 title pb-1" slot="account">John Jones</span>
        <a href="/standalone/switch-account" class="btn btn-tertiary switch-account" slot="account"
          ><i class="fa-regular fa-arrow-up-arrow-down me-1"></i>Switch account</a
        >
        <hr class="mb-5" slot="account" />

        <a href="/" slot="account">Agency settings</a>
        <a href="/" slot="account">Control panel</a>
        <a href="/" slot="account">Contact us</a>
      </Nav>
    </div>

    <h2>Switch account page</h2>

    <p>
      Upon clicking the Switch account tertiary button within the My account menu, the user will be brought to a Switch
      account page, with the card pre selected at the account they are currently using (example shows John Jones NE
      selected).
    </p>

    <p>
      Upon hovering over a card the branch names will display within a tooltip to give the user further detail on the
      exact branches an account covers. This is on desktop only, on mobile the user will rely on the number of branches
      as a numeric figure, which is displayed in the default view.
    </p>

    <p>
      Upon selecting an account and hitting Confirm the user will be brought back to the page they where originally on
      when the navbar menu was triggered. A toast notification will display to confirm to the user that the account has
      been switched. If the user presses Cancel from the Switch account page then the user is taken back to the page the
      where originally on when the navbar menu was triggered and no toast notification appears due to the account
      remaining the same.
    </p>

    <a href="/standalone/switch-account" class="btn btn-secondary mb-5" target="_blank">Switch accounts page</a>

    <Versions pdf="/pdfs/switch-account.pdf">
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
            <td>V1</td>
            <td>29.06.2026</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>

<style lang="scss">
  @media screen and (max-width: 36em) {
    body:has(:is(iam-nav, .iam-nav).nav-open) {
      max-height: unset !important;
      overflow: unset !important;
    }
  }

  @media screen and (min-width: 36em) {
    body:has(:is(iam-nav, .iam-nav).nav-open) {
      max-height: unset !important;
      overflow: unset !important;
    }
  }

  @media screen and (min-width: 62em) {
    html:has(:is(iam-nav, .iam-nav).nav-open) {
      overflow: unset !important;
    }

    nav:has(:is(iam-nav, .iam-nav).nav-open) {
      min-height: 100vh !important;
      max-height: 100vh !important;
      overflow: visible !important;

      margin-bottom: calc((100vh - var(--nav-height)) * -1) !important;
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
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(2px);
    }

    .demo iam-nav::part(menu) {
      left: calc(100% - 23.4375rem);
      -webkit-box-shadow: 0 6px 12px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0 6px 12px 0px rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (min-width: 62em) {
    :is(iam-nav, .iam-nav) details:not([slot='secondary'])[open] > div {
      max-width: 80rem;
    }
  }

  .demo iam-nav::part(btn-menu-account),
  .demo iam-nav *:not([slot='account']) {
    pointer-events: none;
  }

  .demo iam-nav::part(nav--menu) {
    width: calc(23.4375rem - var(--modifier, 0px));
    left: calc(100% - (23.4375rem - var(--modifier, 0px)));
    -webkit-box-shadow: 0 6px 12px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0 6px 12px 0px rgba(0, 0, 0, 0.2);
    pointer-events: all;
  }
</style>
