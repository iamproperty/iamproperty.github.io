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
      <h1>Standardised one platform menu</h1>
    </DSHeader>

    <p class="lead">
      The one platform menu allows user to navigate to other product features within our ecosystem seamlessly, whilst
      better surfacing upsell of products/features the user doesn’t have.
    </p>

    <p>
      This standardised component will use menu items coming from an API and will be delivered to the user view two
      views - one on the one platform hub and one within the products.
    </p>

    <h2>One platform menu on the hub</h2>
    <p>The one platform Hub view uses the <a href="/nav/nav-dual">navbar dual component</a>.</p>

    <a href="/prototypes/one-platform-hub" class="btn btn-secondary" target="_blank">One platform demo</a>

    <h2 class="mt-5">One platform menu within products</h2>

    <p>
      The product view of the one platform menu uses the <a href="/nav/nav-secondary">navbar secondary</a> with the inclusion of the <a href="/nav/branch-selector">branch selector component</a> as a slot. The One platform menu within the product also includes the One Insights action button which gives the user the ability to view and select an insight to view - upon selection of an insight the user is pointed to the One Insight page for with a pre-populated view of the relevant data.
    </p>

    <a href="/prototypes/one-platform-nav" class="btn btn-secondary" target="_blank">Product with One platform menu demo</a>



    <Integration component="std-nav" componentName="iam-nav">
      <template #details>

        <span class="h4 d-block">Authenticated navigation (v2)</span>
        <p>Pass a function that returns the current iamproperty One access token (or a Promise of it).
          The component sends it to POST /v2/navigation/access-context using the Authorization header.
          Do not pass an ID token or put tokens in HTML attributes. Deploy v2 in the target environment first.</p>
        <pre><code>{{`<STDNav ref="navigation" :get-access-token="getAgentOidcAccessToken"
      data-mode="dev" data-product="crm" />`}}</code></pre>
        <p>For product navigation, also add slot="secondary". Omit it for Hub navigation.
          data-mode="dev" selects development; data-mode="production" selects production.
          The values test, uat and pre-prod select pre-production. Omitted, empty or unrecognised values default to production. Token acquisition and refresh remain the product's responsibility.</p>
        <p>On logout or account switch, update your authentication state and call navigation.refresh()
          (navigation.value.refresh() for a Vue ref). This immediately removes the previously loaded links and
          ignores outstanding responses. A null token leaves personalised navigation unavailable.
          Unmounting the component also removes its generated links.</p>
        <pre><code>{{`// Plain web component: set the property before appending the element.
    const navigation = document.createElement('iam-std-nav');
    navigation.setAttribute('data-mode', 'dev');
    navigation.setAttribute('data-product', 'crm');
    navigation.getAccessToken = () => auth.getAccessToken();
    document.querySelector('iam-nav').append(navigation);`}}</code></pre>
        <p>For markup upgraded asynchronously, assign getAccessToken as a JavaScript property.
          A missing provider or token leaves personalised navigation unavailable. Listen for navigation-access-error
          on the element to show a retry or sign-in action; call refresh() to retry.</p>
        <p>This is a breaking component upgrade: data-sso-subject, data-access-context-version and the
          data-env fallback are no longer supported. All access requests use v2. Products that have not migrated
          should stay on their existing design-system release. The backend legacy endpoint remains available
          for those older releases.</p>



      </template>
      <template #web-component>
        <pre><code>{{`<iam-std-nav id="navigation" data-mode="dev" data-product="crm"></iam-std-nav>
// Assign the property from your application's authentication integration:
document.getElementById('navigation').getAccessToken = getAccessToken;`}}</code></pre>
      </template>
      <template #vue-component>
        <p class="pb-3">
          The Vue component will need to be added to the existing UI Nav component, the new standardised component will
          then transform into a series of link/details elements with the appropriate slot added. If the slot of
          secondary is added to the standadised component the elements created will also have the slot of secondary
          assigned to it.
        </p>
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
    <STDNav :get-access-token="getAccessToken" data-mode="dev" data-product="crm"></STDNav>

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
              <th class="text-nowrap">getAccessToken</th>
              <td></td>
              <td>Function (JavaScript property / Vue prop)</td>
              <td>Yes</td>
              <td>Returns the current One access token, or a Promise of it. Use get-access-token in Vue.</td>
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
              <td>production</td>
              <td>String</td>
              <td>No</td>
              <td>Use dev for development, or test, uat and pre-prod for pre-production. Production is the default for all other values, including an omitted or empty attribute. Applies to the API, navigation schema and logo destination.</td>
            </tr>
            <tr>
              <th>slot</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>
                Due to the component being added to an existing UI component a slot attribute can be added. The value of
                'secondary' should be used to have the nav created as a secondary bar.
              </td>
            </tr>
          </tbody>
        </table>
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
            <td>V1.1 added</td>
            <td>15.10.2026</td>
            <td>Inclusion of the One Insight action button into the product navigation</td>
          </tr>
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
