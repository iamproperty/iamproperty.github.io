<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';
  import Notification from '@/components/Notification/Notification.vue';
  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';


  let urlParams = new URLSearchParams(window.location.search);
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Standardised one platform menu  </h1>
    </DSHeader>

    <p class="lead">The one platform menu allows user to navigate to other product features within our ecosystem seamlessly, whilst better surfacing upsell of products/features the user doesn’t have.</p>

    <p>This standardised component will use menu items coming from an API and will be delivered to the user view two views - one on the one platform hub and one within the products.</p>

    <h2>One platform menu on the hub</h2>
    <p>The one platform Hub view uses the <a href="/nav/nav-dual">navbar dual component</a>.</p>


    <a href="/standalone/hub" class="btn btn-secondary" target="_blank">Eco hub demo</a>

    <h2 class="mt-5">One platform menu within products</h2>

    <p>The product view of the one platform menu uses the <a href="/nav/nav-secondary">navbar secondary</a> with the inclusion of the <a href="http://localhost:5173/nav/branch-selector">branch selector component</a> as a slotted item.</p>

    <a href="/standalone/eco-product" class="btn btn-secondary" target="_blank">Product with One platform menu demo</a>

    <Integration component="std-nav" componentName="iam-nav">

      <template #web-component>
        <pre><code>{{`<iam-std-nav data-sso-subject="2692b2f4-f051-70e3-d71e-15a7dffc3f29" data-product="crm"></iam-std-nav>`}}</code></pre>
      </template>
      <template #vue-component>
        <p class="pb-3">The Vue component will need to be added to the existing UI Nav component, the new standardised component will then transform into a series of link/details elements with the appropriate slot added. If the slot of secondary is added to the standadised component the elements created will also have the slot of secondary assigned to it.</p>
        <pre><code>{{`<script setup>import Nav from '@/components/Nav/Nav.vue</script>
<script setup>import STDNav from '@/components/STDNav/STDNav.vue</script>
<script setup>import BranchSelector from '@/components/BranchSelector/BranchSelector.vue</script>

<nav>
  <Nav>

    <a href="/" class="brand brand--property" slot="logo">
      <svg>
        <title>iam key</title>
        <use xlink:href="/svg/logo.svg#logo-property"></use>
      </svg>
    </a>

    <a href="/">Lead generation</a>
    <a href="/">Market Appraisals</a>
    <a href="/">Insights</a>
    <a href="/">Onboarding</a>
    <a href="/">CRM</a>
    <a href="/">Action</a>
    <a href="/">Conveyancing</a>

    <hr class="mt-3" slot="account">
    <a href="/" slot="account">Agency settings</a>
    <a href="/" slot="account">Control panel</a>
    <a href="/" class="mb-4" slot="account">Contact us</a>

    <BranchSelector data-indicator="4" slot="account">
      <label>
        <input type="checkbox" name="branch" value="gosforth" />
        Gosforth Agent & Co
      </label>
      <label>
        <input type="checkbox" name="branch" value="heaton" />
        Heaton Agent & Co
      </label>
      <label>
        <input type="checkbox" name="branch" value="newcastle" />
        Newcastle Agent & Co
      </label>
    </BranchSelector>

    <!-- The below element will load data from an API and create links  -->
    <STDNav data-sso-subject="2692b2f4-f051-70e3-d71e-15a7dffc3f29" data-product="crm"></STDNav>

  </Nav>
</nav>
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
              <th class="text-nowrap">data-sso-subject</th>
              <td></td>
              <td>String</td>
              <td>Yes</td>
              <td></td>
            </tr>
            <tr>
              <th>data-product</th>
              <td></td>
              <td>String</td>
              <td>Yes</td>
              <td>The product identifier i.e. CRM</td>
            </tr>
            <tr>
              <th>data-mode</th>
              <td>Dev</td>
              <td>String</td>
              <td>No</td>
              <td>This will change the endpoint used by default the endpoint is a 'dev' environment.</td>
            </tr>
            <tr>
              <th>slot</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>Due to the component being added to an existing UI component a slot attribute can be added. The value of 'secondary' should be used to have the nav created as a secondary bar.</td>
            </tr>

          </tbody>
        </table>

        <p>* If the SSO subject and product is not set then the navigation items will still load but not user context will be given and all the links will be marketing links that open in a new window.</p>

      </template>

      <template #examples>
        <ul>
          <li><a href="/standalone/hub">Eco hub</a></li>
          <li><a href="/standalone/eco-product">product with eco secondary nav</a></li>
          <li><a href="/standalone/eco-product-standalone">product with eco secondary nav (Standalone version)</a></li>
        </ul>
      </template>

    </Integration>
    <Versions pdf="/pdfs/one-platform-menu.pdf">
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
            <td>V1 added</td>
            <td>17.07.2025</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>

  </main>
</template>
