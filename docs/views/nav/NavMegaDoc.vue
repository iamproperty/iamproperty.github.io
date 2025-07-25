<script setup>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Tab from '@/components/Tabs/Tab.vue';
  import WebReadme from '~/ts/components/nav/README.md';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Table from '@/components/Table/Table.vue';

  import Nav from '@/components/Nav/Nav.vue';
  import Readme from '@/components/Nav/README.md';
  import anatomy from '../../img/navbar-mega-anatomy.png';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';

</script>


<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Navbar-mega menu</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">
        Allows users to navigate deeper into any section of the site or platform as long as the user has the relevant
        permissions.
      </p>
      <p>
        Our navbar-mega menu is triggered initially by selecting an item from the dropdown menu within the navbar. Upon
        doing so, a sub-menu appears which displays each of the sub sections across the columns of equal width.
        Selecting one of these items can either expand the section menu or navigate directly to a page depending on the
        rule applied.
      </p>
      <p>
        The section menu can contain up to 10 navigational links and also has an area on the right in which card
        components can used as promotional links, these cards only display on desktop and can display up to two cards
        maximum stacked on top of each other on the right hand side of the section menu.
      </p>
    </div>

    <div class="demo visualtest pe-none">
      <Nav data-css="/assets/css/components/nav.docs.css">
        <a href="/" class="brand brand--property" slot="logo">
          <svg>
            <title>iamproperty</title>
            <use xlink:href="/svg/logo.svg#logo-property"></use>
          </svg>
        </a>

        <details open="true">
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
            <details open>
              <summary>By objective</summary>
              <div>
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
              <summary>By product</summary>
              <div>
                <a href="/">Win more instructions</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>

                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>

                <a href="/"
                  ><Card :data-image="cardImg"
                    >Financial preparation <span>Here would be the top level description of the task</span></Card
                  ></a
                >
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
              <summary>By objective</summary>
              <div>
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
              <summary>By product</summary>
              <div>
                <a href="/">Win more instructions</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>

                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>

                <a href="/"
                  ><Card :data-image="cardImg"
                    >Financial preparation <span>Here would be the top level description of the task</span></Card
                  ></a
                >
              </div>
            </details>
          </div>
        </details>

        <details>
          <summary>Insights and resources</summary>
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
              <summary>By objective</summary>
              <div>
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
              <summary>By product</summary>
              <div>
                <a href="/">Win more instructions</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>

                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>

                <a href="/"
                  ><Card :data-image="cardImg"
                    >Financial preparation <span>Here would be the top level description of the task</span></Card
                  ></a
                >
              </div>
            </details>
          </div>
        </details>

        <a href="/">Tech of a life</a>

        <button class="btn btn-primary">Lorem ipsum</button>
      </Nav>
    </div>

    <div class="container pt-4 pb-0">
      <h2>Adaptive search display</h2>
      <p>
        Search is a secondary state, it only appears when the user clicks the ‘search’ secondary compact button,
        overlapping the Default state and presenting an input field.
      </p>

      <p>
        Dismissal: On Desktop and Tablet, you can exit the Search state by pressing the ‘X’ icon or anywhere on the page
        outside the search bar. On Mobile, You can exit the Search state by pressing anywhere on the page outside the
        search bar. When dismissed, the Search state will be hidden and return to the Default state.
      </p>
    </div>

    <div class="demo visualtest pe-none">
      <Nav
        class=""
        data-search="/search"
        data-prevent-search
        data-search-open
        data-css="/assets/css/components/nav.docs.css"
      >
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
              <summary>By objective</summary>
              <div>
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
              <summary>By product</summary>
              <div>
                <a href="/">Win more instructions</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>

                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>

                <a href="/"
                  ><Card :data-image="cardImg"
                    >Financial preparation <span>Here would be the top level description of the task</span></Card
                  ></a
                >
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
              <summary>By objective</summary>
              <div>
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
              <summary>By product</summary>
              <div>
                <a href="/">Win more instructions</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>

                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>

                <a href="/"
                  ><Card :data-image="cardImg"
                    >Financial preparation <span>Here would be the top level description of the task</span></Card
                  ></a
                >
              </div>
            </details>
          </div>
        </details>

        <details>
          <summary>Insights and resources</summary>
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
              <summary>By objective</summary>
              <div>
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
              <summary>By product</summary>
              <div>
                <a href="/">Win more instructions</a>
                <a href="/">Secure sales pipeline</a>
                <a href="/">Increase revenue</a>
                <a href="/">Material information</a>
                <a href="/">Smoother client onboarding</a>

                <a href="/">Enhance my proposition</a>
                <a href="/">AML compliance management</a>
                <a href="/">Learn more about auction</a>

                <a href="/"
                  ><Card :data-image="cardImg"
                    >Financial preparation <span>Here would be the top level description of the task</span></Card
                  ></a
                >
              </div>
            </details>
          </div>
        </details>

        <a href="/">Tech of a life</a>

        <button class="btn btn-primary">Lorem ipsum</button>
      </Nav>
    </div>

    <div class="container pt-4 pb-0">
      <h2>Anatomy</h2>
      <ol>
        <li>Logo slot (width 144px on desktop)</li>
        <li>Primary menu slot (width 696px on desktop)</li>
        <li>Action slot</li>
        <li>Sub-menu Secondary slot (width 1144px on desktop)</li>
        <li>Section menu primary slot</li>
        <li>Section menu secondary slot</li>
        <li>
          Section menu tertiary slot (please note this slot if available on tablet and mobile if links are displayed
          like 5 & 6)
        </li>
      </ol>

      <img :src="anatomy" class="mb-4" />

      <h2>Usage notes</h2>
      <p>The mega menu can only be triggered from a nav-link-dropdown menu link</p>
      <p>
        On mobile and tablet, an addition plus icon is displayed on the left of each sub-menu item to indicate that
        clicking the item reveals more content. If the item does not contain the plus icon it indicates that this is a
        navigational link.
      </p>
      <p>
        The title of each section menu (text within the gradient section) is H3 styling and provides a context to the
        section menu displayed.
      </p>
      <p>
        On desktop, the tertiary slot of the section menu can house cards or can be used for further text navigational
        links (displayed in the styling of the primary and secondary slots of the section menu)
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
  //@media screen and (max-width: 62em) {
  .demo {
    background-color: #f2f2f2;
    overflow: hidden;
    padding: 1rem 1rem 0 1rem;
    height: 100vh;

    iam-nav {
      position: relative;
      z-index: 1;
    }

    iam-nav:after {
      content: '';
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      height: calc(100vh - 6rem);
      width: 100%;
      z-index: -1;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(2px);
    }
  }

  #visualtest:target ~ main > .demo {
    padding: 0 !important;
  }

  //}

  @media screen and (max-width: 62em) {
    .demo-xs {
      background-color: #f2f2f2;
      overflow: hidden;
      padding: 1rem 1rem 0 1rem;
      height: 100vh;
    }

    #visualtest:target ~ main > .demo-xs {
      padding: 0 !important;
    }
  }
</style>
