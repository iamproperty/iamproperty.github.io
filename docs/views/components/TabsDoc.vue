<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Tab from '@/components/Tabs/Tab.vue';
  import Table from '@/components/Table/Table.vue';
  import Integration from '../Integration.vue';
  import tabSpacing from '../../img/tabs/individual-tab-spacing.png';
  import desktopTabsSpacing from '../../img/tabs/desktop-tabs-spacing.png';
  import mobileTabsSpacing from '../../img/tabs/mobile-tabs-spacing.png';
  import mobileUi from '../../img/tabs/mobile-ui-example.png';

  import { ref } from 'vue';

  const disabledBoolean = ref(true);

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Tabs</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">
        Tabs group together content and display one at a time, they should not be used for important content as it may not be visible on page load.
      </p>

      <h2>Horizontal tabs</h2>
      <p>This tab type should be presented horizontally and above content. They are best used when there are less than 5 tab items.</p>

      <div class="container visualtest">
        <Tabs>
          <Tab title="The benefits of auction">
            <h2>Content 1</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </Tab>
          <Tab title="The types of auctions we offer">
            <h2>Content 2</h2>
            <a href="/link">a link</a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </Tab>
          <Tab title="Online auctions" lazy>
            <h2>Content 3</h2>
            <p>Lazy loaded table</p>
            <Table
              :fields="[{ key: 'column_1' }, { key: 'column_2' }, { key: 'column_3' }]"
              :items="[
                {
                  column_1: 'row 1',
                  column_2: 'row 1',
                  column_4: 'row 1',
                },
              ]"
            ></Table>
          </Tab>
          <Tab title="Another auction link">
            <h2>Content 4</h2>
            <p>Tab paragraph</p>
          </Tab>
        </Tabs>
      </div>

      <section>
        <div>
          <h3>Desktop/Tablet</h3>
          <ul class="states-wrap list-unstyled d-flex flex-wrap">
            <li>
            <p class="lead pb-1">Default</p>
            <button class="link fake-tab">The benefits of auction</button>
          </li>
          <li>
            <p class="lead pb-1">Hover/Focus</p>
            <button class="link fake-tab hover">The benefits of auction</button>
          </li>
          <li>
            <p class="lead pb-1">Pressed</p>
            <button class="link fake-tab" aria-pressed="true">The benefits of auction</button>
          </li>
          <li>
            <p class="lead pb-1">Selected</p>
            <button class="link fake-tab current">The benefits of auction</button>
          </li>
          <li>
            <p class="lead pb-1">Disabled</p>
            <button class="link fake-tab disabled" disabled>The benefits of auction</button>
          </li>
          </ul>
        </div>
        <div>
          <h3>Mobile</h3>
          <ul class="states-wrap list-unstyled d-flex flex-wrap">
            <li>
            <p class="lead pb-1">Default</p>
            <button class="link fake-tab">The benefits of auction</button>
          </li>
          <li>
            <p class="lead pb-1">Hover/Focus</p>
            <button class="link fake-tab hover">The benefits of auction</button>
          </li>
          <li>
            <p class="lead pb-1">Pressed</p>
            <button class="link fake-tab" aria-pressed="true">The benefits of auction</button>
          </li>
          <li>
            <p class="lead pb-1">Selected</p>
            <button class="link fake-tab current">The benefits of auction</button>
          </li>
          <li>
            <p class="lead pb-1">Disabled</p>
            <button class="link fake-tab disabled" disabled>The benefits of auction</button>
          </li>
          </ul>
        </div>
      </section>
      <section>
        <h3>Spacing</h3>
        <img :src="tabSpacing" class="mb-3" />
        <img :src="desktopTabsSpacing" class="mb-3" />
        <img :src="mobileTabsSpacing" class="mb-3" />

      </section>

      <section>
        <h3>Mobile Behaviour</h3>
        <h4>Scroll horizontally</h4>

        <p>If the total width of the tab items exceeds the screen width on mobile, the tab list should be scrollable horizontally.</p>

        <div>
          <div class="mobile-ui">
            <img :src="mobileUi"/>
            <Tabs>
              <Tab title="The benefits of auction">
                <h2>Content 1</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>
              </Tab>
              <Tab title="The types of auctions we offer">
                <h2>Content 2</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>
              </Tab>
              <Tab title="Online auctions" lazy>
                <h2>Content 3</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>
              </Tab>
              <Tab title="Another auction link">
                <h2>Content 4</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>


    </div>

    <div class="container visualtest">
      <Tabs>
        <a href="/link" class="active">A link</a>
        <a href="/link">A another link</a>
      </Tabs>

      <p>Fake content that is served up via the serverside</p>
    </div>

    <div class="container visualtest">
      <Tabs>
        <Tab title="The benefits of auction">
          <p class="lead">Tab content 1</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
        <Tab title="The types of auctions we offer">
          <p class="lead">Tab content 2</p>
          <a href="/link">a link</a>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
        <Tab title="Online auctions" lazy>
          <p class="lead">Tab content 3</p>
          <p>Lazy loaded table</p>
          <Table
            :fields="[{ key: 'column_1' }, { key: 'column_2' }, { key: 'column_3' }]"
            :items="[
              {
                column_1: 'row 1',
                column_2: 'row 1',
                column_4: 'row 1',
              },
            ]"
          ></Table>
        </Tab>
        <Tab title="Disabled tab example" :disabled="disabledBoolean">
          <p class="lead">Tab content (disabled tab)</p>
          <p>Tab paragraph (disabled tab)</p>
        </Tab>
      </Tabs>
    </div>

    <div class="container">
      <h2 class="mt-5">Admin panel</h2>
      <p>
        The tabs component display changes when its held within an admin panel, this is to make it fit into the admin
        panel styles.
      </p>
    </div>

    <div class="container visualtest">
      <Tabs class="admin-panel">
        <Tab title="The benefits of auction">
          <p class="lead">Tab content 1</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
        <Tab title="The types of auctions we offer">
          <p class="lead">Tab content 2</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
        <Tab title="Online auctions" lazy>
          <p class="lead">Tab content 3</p>
          <p>Lazy loaded table</p>
          <Table
            :fields="[{ key: 'column_1' }, { key: 'column_2' }, { key: 'column_3' }]"
            :items="[
              {
                column_1: 'row 1',
                column_2: 'row 1',
                column_4: 'row 1',
              },
            ]"
          ></Table>
        </Tab>
        <Tab title="Disabled tab example" :disabled="disabledBoolean">
          <p class="lead">Tab content (disabled tab)</p>
        </Tab>
      </Tabs>
    </div>

    <div class="container">
      <h2 class="mt-5">Guided tabs</h2>
      <p>
        Adding a <code>.tabs--guided</code> class adds an extra layer of swiping functinality on the tabs content.
        Alongside this a button is displayed on desktop to navigate it to the next tab with the idea that the user is
        being guided through the tab content.
      </p>
    </div>

    <div class="container visualtest">
      <Tabs class="tabs--guided">
        <Tab title="Tab 1">
          <p class="lead">Tab content 1</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
        <Tab title="Tab 2">
          <p class="lead">Tab content 2</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
        <Tab title="Tab 3">
          <p class="lead">Tab content 3</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
        <Tab title="Tab 4">
          <p class="lead">Tab content 4</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
        <Tab title="Tab 5">
          <p class="lead">Tab content 5</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
        <Tab title="Tab 6">
          <p class="lead">Tab content 6</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
        <Tab title="Tab 7">
          <p class="lead">Tab content 7</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Tab>
      </Tabs>
    </div>

    <Integration component="tabs" componentName="iam-tabs">
      <template #web-component>
        <pre><code>{{`<iam-tabs class="container">
  <details>
    <summary>Tab one</summary>
    <p>Content one... Any element after summary is within content. First tab is active by default.</p>
  </details>
  <details>
    <summary>Tab two</summary>
    <p>Content two... </p>
  </details>
</iam-tabs>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Tabs from '@/components/Tabs/Tabs.vue</script>
        
  <Tabs>
    <Tab title="Tab one">
      <p>Content one... Any element after summary is within content. First tab is active by default.</p>
    </Tab>
    <Tab title="Tab two">
      <p>Content two...</p>
    </Tab>
  </Tabs>
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
              <th>title</th>
              <td>-</td>
              <td>String</td>
              <td>No</td>
              <td>This is a property on the individual tab component. It is used for the heading of the tab</td>
            </tr>
            <tr>
              <th>lazy</th>
              <td>-</td>
              <td>Boolean</td>
              <td>No</td>
              <td>This is a property on the individual tab component. It is used to set whether the content of the tab will not loaded intially and will be loaded after the user has clicked on the tab link.</td>
            </tr>
            <tr>
              <th>disabled</th>
              <td>-</td>
              <td>Boolean</td>
              <td>No</td>
              <td>This is a property on the individual tab component. It is used to apply disabled state for a tab (tab content will not be reachable)</td>
            </tr>
          </tbody>
        </table>
        
      </template>

      <template #slots>
        <table>
          <thead>
            <tr>
              <th>Slot</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default (tabs)</th>
              <td>The default slot is where the individual tab links or tab components are added.</td>
            </tr>
            <tr>
              <th>Default (tab)</th>
              <td>In the individual tab component, the default slot is where the tab content should be added.</td>
            </tr>
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
              <th>tabs--guided</th>
              <td>Adds an extra layer of swiping functinality on the tabs content, showing a 'next' button.</td>
            </tr>
            <tr>
              <th>admin-panel</th>
              <td>When this class is added to the component, each tab button gets a gradient background colour when selected, instead of an underline.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #parts>
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>tabs</th>
              <td>The wrapper around all of the tabs and their content</td>
            </tr>
            <tr>
              <th>wrapper</th>
              <td>The div which contains the tab links</td>
            </tr>
            <tr>
              <th>tab-links</th>
              <td>The inner wrapper for the div with horizontally scrolls when necessary.</td>
            </tr>
            <tr>
              <th>next-button</th>
              <td>The next button used in conjunction with the tabs--guided class.</td>
            </tr>
            <tr>
              <th>tab-link</th>
              <td>The individual button elements to trigger tabs.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #vars>
        <table>
          <thead>
            <tr>
              <th>Var</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>--colour-tab-underline</th>
              <td>
                The colour used for the underline when hovering over a tab, or when the tab is active.
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #criteria>
        <ul>
          <li>Hovering over a tab should show an underline colour 60% of it's width.</li>
          <li>Selecting a tab should show an underline colour 100% of it's width.</li>
          <li>Selecting a tab should show the appropriate content for that tab</li>
          <li>If the tabs are too wide to fit on a mobile screen, a user should be able to swipe left and right to scroll them.</li>
        </ul>
      </template>
      <template #data-layer>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>pip-clicked</th>
              <td>When a user clicks on a pip</td>
              <td>{ "event": "pip-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
            </tr>
            <tr>
              <th>next-clicked</th>
              <td>When a user clicks on the next button</td>
              <td>{ "event": "next-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
            </tr>
            <tr>
              <th>prev-clicked</th>
              <td>When a user clicks on the previous button</td>
              <td>{ "event": "prev-clicked", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}</td>
            </tr>
            <tr>
              <th>slider-changed</th>
              <td>The slider element is used to update the carousel</td>
              <td>
                { "event": "slider-changed", "element": "iam-carousel", "target": "iam-carousel", "data-slide":"2"}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration>
    
    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Design System Version</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>V1 added</td>
              <td>28.09.2023</td>
              <td>v4.0.1</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/tabs.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

  .states-wrap {
    border: 2px dashed #9747FF; 
    padding: 1rem;
    border-radius: 5px;

    li {
      width: 33.33%;
      padding: 1rem;
    }
  }

  .fake-tab {
    font-weight: bold;
    font-family: var(--font-heading);
    font-size: 1.125rem;
    cursor: pointer;
    margin: 0;
    padding: 1.5rem 1.5rem .5rem 1.5rem;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 50%;
      height: 3px;
      width: 100%;
      transform: translate(-50%, 0) scale(0, 0);
      background: var(--colour-info);
      transition: transform .4s;
    } 

    &:not(.disabled):is([aria-pressed=true],:active,.current):after {
        transform: translate(-50%, 0) scale(1, 1);
    }

    &:not(.disabled).hover {
      &:after {
        transform: translate(-50%, 0) scale(0.6, 1);
      }
    }

  }
</style>
