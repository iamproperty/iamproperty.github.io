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

    <div class="demo visualtest">
      <Nav class="nav--sticky bg-primary demo-open">
        <a href="/" class="brand brand--property" slot="logo">
          <svg>
            <title>iamproperty</title>
            <use xlink:href="/svg/logo.svg#logo-property"></use>
          </svg>
        </a>

        <a href="/">Dashboard</a>

        <details>
          <summary>Client onboarding</summary>
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
          <summary>Propertyaudit</summary>
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
          <summary>Compliance</summary>
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

                <a href="/"
                  ><Card :data-image="cardImg"
                    >Financial preparation <span>Here would be the top level description of the task</span></Card
                  ></a
                >
              </div>
            </details>
          </div>
        </details>

        <a href="/">Conveyancing</a>

        <div class="nav--menu open" data-title="My account" data-open-title="John Jones" data-icon="fa-user fa-solid">
          <div>
            <label for="test1">Active branch</label>
            <select class="form-select" name="test1" id="test1">
              <option value="1" selected>Newcastle</option>
              <option value="2">Two</option>
              <option value="2">Three</option>
              <option value="2">Four</option>
            </select>
          </div>

          <hr class="mt-3" />

          <a href="/">Agency settings</a>
          <a href="/">Control panel</a>
          <a href="/" class="mb-4">Contact us</a>
        </div>

        <a href="/" slot="secondary">iamproperty</a>
        <a href="/" slot="secondary">openview</a>
        <a href="/" slot="secondary">movebutler</a>
        <a href="/" slot="secondary">iamsold</a>
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

    <div class="container pt-4">
      <h2>Implementation</h2>
      <Tabs>
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
        <a href="/pdfs/navbar-menus.pdf" download>Download latest designs</a>
      </div>
    </div>
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
</style>

<script>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Tab from '@/components/Tabs/Tab.vue';
  import WebReadme from '~/ts/components/nav/README.md';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Table from '@/components/Table/Table.vue';

  import Nav from '@/components/Nav/Nav.vue';
  import Readme from '@/components/Nav/README.md';
  import anatomy from '../../img/navbar-mega-anatomy.png';

  export default {
    components: {
      Nav,
      Readme,
      DSHeader,
      Table,
      WebReadme,
      Tabs,
      Tab,
      anatomy,
    },
    data() {
      return {
        headerImg: headerImg,
        anatomy: anatomy,
      };
    },
  };
</script>
