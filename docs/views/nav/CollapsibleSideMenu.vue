<script lang="ts" setup>
  import { ref } from 'vue';

  import DSHeader from '../DSHeader.vue';
  import Readme from '@/components/CollapsibleSideMenu/README.md';
  import WebReadme from '~/ts/components/collapsible-side/README.md';
  import Tabs from '@/components/Tabs/Tabs.vue';

  import CollapsibleSideMenu from '@/components/CollapsibleSideMenu/CollapsibleSideMenu.vue';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';

  const headerImg = ref<string>('/docs/img/type-header.png');
  const Anatomy = ref<string>('/docs/img/collapsible-side-menu/collapse-sidemenu-anatomy.png');
  const States = ref<string>('/docs/img/collapsible-side-menu/collapse-sidemenu-states.png');
  const DesktopExpanded = ref<string>('/docs/img/collapsible-side-menu/Desktop - Expanded State.png');
  const DesktopCollapsed = ref<string>('/docs/img/collapsible-side-menu/Desktop - Collapsed State.png');
  const DesktopCollapsedHover = ref<string>('/docs/img/collapsible-side-menu/Desktop - Collapsed Hover State.png');
  const TabletExpanded = ref<string>('/docs/img/collapsible-side-menu/Tablet - Expanded State.png');
  const TabletCollapsed = ref<string>('/docs/img/collapsible-side-menu/Tablet - Collapsed State.png');
  const MobileExpanded = ref<string>('/docs/img/collapsible-side-menu/Mobile - Expanded State.png');
  const MobileCollapsed = ref<string>('/docs/img/collapsible-side-menu/Mobile - Collapsed State.png');
  const DisableDesktopCollapse = ref<string>('/docs/img/collapsible-side-menu/Disable Collapse - Desktop.png');
  const DisableTabletCollapse = ref<string>('/docs/img/collapsible-side-menu/Disable Collapse - Tablet.png');
  const DisableMobileCollapse = ref<string>('/docs/img/collapsible-side-menu/Disable Collapse - Mobile.png');
  const InlineDesktopExpanded = ref<string>('/docs/img/collapsible-side-menu/Inline Desktop - Expanded State.png');
  const InlineDesktopCollapsed = ref<string>('/docs/img/collapsible-side-menu/Inline Desktop - Collapsed State.png');
  const InlineDesktopCollapsedHover = ref<string>(
    '/docs/img/collapsible-side-menu/Inline Desktop - Collapsed Hover State.png'
  );

  const message = ref<string>('input field value');
  const htmlUsage = ref<string>(`...`);
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Collapsible side menu</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">
        The collapsible side menu is a simple single-column list that can be expanded or collapsed within a page.
      </p>

      <h2>Introduction</h2>

      <p>
        Collapsible side menus should be aligned to the side of a page. They feature three states: expanded, collapsed,
        collapsed-hover. They are most useful for housing sub navigation items to linked pages. They can also include
        other relevant content such as a H3 header, quick filter options, and page summaries.
      </p>
    </div>

    <div class="container">
      <h2>Anatomy</h2>
      <img :src="Anatomy" class="mb-5" />

      <ol>
        <li>Expanded state container.</li>
        <li>H3 header (optional).</li>
        <li>Quick filter (optional).</li>
        <li>Sub navigation items (optional).</li>
        <li>
          'Collapse' button. On desktop this will only show when the user hovers over the 'Default state container'.
        </li>
        <li>
          'Collapsed state' container. On desktop, hovering on this area will open the 'Collapsed hover state'. On
          tablet and mobile, selecting this area will open the 'expanded' state.
        </li>
        <li>'Expand' button.</li>
        <li>
          'Desktop only - Collapsed hover state' container. If the user moves their pointer out of the container it will
          return to 'Collapsed state.
        </li>
      </ol>
    </div>

    <div class="container pt-5 pb-0">
      <h2>Example</h2>
    </div>
    <div class="demo visualtest">
      <CollapsibleSideMenu data-title="Configuration">
        <div slot="menu">
          <label for="test1">Active branch</label>
          <select id="test1" class="form-select" name="test1">
            <option value="1" selected>Newcastle</option>
            <option value="2">Two</option>
            <option value="2">Three</option>
            <option value="2">Four</option>
          </select>
        </div>

        <hr slot="menu" />

        <a slot="menu" href="/" class="link"><i class="fa-light fa-alien"></i>Control panel</a>
        <a slot="menu" href="/" class="link selected">Contact us</a>
        <a slot="menu" href="/" class="link active">Active Class</a>
        <a slot="menu" href="/" class="router-link-active router-link-exact-active">Vue's Active Class</a>
        <a slot="menu" href="/" class="link">Example link</a>
        <a slot="menu" href="/" class="link">Example link with a really long name in here for some reason</a>

        <ul slot="menu" class="parent">
          <li><a class="link">Parent link</a></li>
          <li>
            <a href="/" class="link"><i class="fa-light fa-house"></i>Example link</a>
          </li>
          <li><a href="/" class="link">Example link with a really long name in here for some reason</a></li>
          <li><a href="/" class="link">Sub link 1</a></li>
          <li><a href="/" class="link">Sub link 2</a></li>
          <li><a href="/" class="link active">Sub link (active)</a></li>
          <li><a href="/" class="router-link-active router-link-exact-active">Sub link (vue active)</a></li>
        </ul>
        <a slot="menu" href="/" class="link">Further sub links after group</a>

        <h1>Inspections</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </CollapsibleSideMenu>
    </div>

    <div class="container">
      <a href="/standalone/collapsible-side-menu-default" class="btn btn-secondary" target="_blank"
        >View standalone example</a
      >
    </div>

    <div class="container pt-5 pb-0">
      <h2>Behaviour</h2>

      <h3>Desktop</h3>
      <p>
        On desktop, the menu should default to the 'expanded' state with the 'expand' button hidden. It should be left
        or right aligned alongside page content.
      </p>
      <p>
        Hovering over the 'expanded' state container should show the 'collapse' button. Selecting the 'collapse' button
        should change the menu into the 'collapsed' state.
      </p>
      <p>
        Hovering over the 'collapsed' container area should open the 'collapsed - hover state'. Selecting the 'expand'
        button on either the 'collapsed' or 'collapsed - hover state' should return the menu to the 'expanded' state.
      </p>
      <p>
        The height of the menu should stretch to the full height of the (page - navbar). The menu can include any
        relevant content such as a optional H3 header, quick filter, and sub navigational items.
      </p>
      <p>
        The side menu should take up 25% of the screen on desktop when expanded. If the height of the content within the
        menu exceeds the menu height, the content should scroll within the menu.
      </p>

      <p>EXPANDED STATE</p>
      <img :src="DesktopExpanded" class="mb-4" />
      <p>COLLAPSED STATE</p>
      <img :src="DesktopCollapsed" class="mb-4" />
      <p>COLLAPSED HOVER STATE</p>
      <img :src="DesktopCollapsedHover" class="mb-4" />

      <h3>Tablet</h3>
      <p>
        On tablet, the menu should default to the 'collapsed' state with the 'expand' button visible. It should be left
        or right aligned alongside page content.
      </p>
      <p>
        Selecting the 'expand' button or 'collapsed' state container should change the menu into the 'expanded' state.
        If the user selects elsewhere whilst the side menu is open it should collapse the side menu and load the other
        content.
      </p>
      <p>
        The height of the menu should stretch to the full height of the (page - navbar). The menu can include any
        relevant content such as a optional H3 header, quick filter, and sub navigational items.
      </p>
      <p>
        The side menu should take up 50% of the screen on desktop when expanded. If the height of the content within the
        menu exceeds the menu height, the content should scroll within the menu.
      </p>

      <p>COLLAPSED STATE</p>
      <img :src="TabletCollapsed" class="mb-4" />
      <p>EXPANDED STATE</p>
      <img :src="TabletExpanded" class="mb-4" />

      <h3>Mobile</h3>
      <p>
        On mobile, the menu should default to the 'collapsed' state with the 'expand' button visible. It should be left
        aligned alongside page content.
      </p>
      <p>On mobile we should use the small compact secondary button for the expand and collapse function.</p>
      <p>
        Selecting the 'expand' button or 'collapsed' state container should change the menu into the 'expanded' state.
        If the user selects elsewhere whilst the side menu is open it should collapse the side menu and load the other
        content.
      </p>
      <p>
        The height of the menu should stretch to the full height of the (page - navbar). The menu has an optional H3
        header, quick filter, and sub navigational items.
      </p>
      <p>
        The side menu should take up the (full width - 1/2 small compact secondary button) of the screen on mobile when
        expanded. If the height of the content within the menu exceeds the menu height, the content should scroll within
        the menu.
      </p>

      <p>COLLAPSED STATE</p>
      <img :src="MobileCollapsed" class="mb-4" />
      <p>EXPANDED STATE</p>
      <img :src="MobileExpanded" class="mb-4" />
    </div>

    <div class="container pt-5 pb-0">
      <h2>Standalone: Inline & Menu right</h2>
      <p>The menu can be used inline and aligned to the left or right of the container.</p>
      <p>
        The menu will only alter the width of the main page content when the container the menu sits within is small
        enough that it can't house both the side menu and main page content.
      </p>
      <a href="/standalone/collapsible-side-menu-inline" class="btn btn-secondary" target="_blank"
        >View standalone example</a
      >
    </div>

    <div class="container pt-5 pb-0">
      <h2>Standalone: Disable collapse</h2>
      <p>We can disable collapse for desktop but retain it for mobile and tablet.</p>
      <a href="/standalone/collapsible-side-menu-disableCollapse" class="btn btn-secondary" target="_blank"
        >View standalone example</a
      >
    </div>

    <div class="container pt-5 pb-0">
      <h2>Vertical tabs</h2>
      <p>
        Vertical tabs are used to navigate to other pages linked to the one the user is accessing. For example. When on
        a record for a property in the CRM, vertical tabs could be used to link various pages relating to the property
        record together like overview, viewings, appraisals, marketing, compliance etc.
      </p>
      <p>They should primarily only be used within the collapsible side menu.</p>

      <h2>Scroll behaviour on vertical tabs</h2>
      <p>The list of tab should scroll vertically if they overflow the height of the side menu tab area.</p>
    </div>

    <Integration component="collapsible-side" componentName="iam-collapsible-side">
      <template #web-component>
        <pre><code>{{`
        <iam-collapsible-side>
          <div slot="menu">
            <h3 slot="menu">Menu</h3>
            <hr slot="menu" />
            <a slot="menu" href="/" class="link"><i class="fa-light fa-alien"></i>Link Text</a>

            <!-- Create a grouped menu with <ul> - The first <li> is the parent link which reveals the other <li>s when clicked -->
            <ul slot="menu" class="parent">
              <li><a class="link">Parent link</a></li>
              <li>
                <a href="/" class="link"><i class="fa-light fa-house"></i>Example link</a>
              </li>
            </ul>

            <!-- Anything without slot="menu" is within the main section -->
            <h1>Page Title</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </iam-collapsible-side>
        `}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`
        <script setup>import CollapsibleSideMenu from '@/components/CollapsibleSideMenu/CollapsibleSideMenu.vue'</script>
        <CollapsibleSideMenu>
          <div slot="menu">
            <h3 slot="menu">Menu</h3>
            <hr slot="menu" />
            <a slot="menu" href="/" class="link"><i class="fa-light fa-alien"></i>Link Text</a>

            <!-- Create a grouped menu with <ul> - The first <li> is the parent link which reveals the other <li>s when clicked -->
            <ul slot="menu" class="parent">
              <li><a class="link">Parent link</a></li>
              <li>
                <a href="/" class="link"><i class="fa-light fa-house"></i>Example link</a>
              </li>
            </ul>

            <!-- Anything without slot="menu" is within the main section -->
            <h1>Page Title</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </CollapsibleSideMenu>
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
              <th>open</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>Enables the menu to be open on default render</td>
            </tr>
            <tr>
              <th>open-always</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>Disables the collapse on sidebar menu</td>
            </tr>
            <tr>
              <th>inline</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>Wraps the whole component inline with the doc (within a container)</td>
            </tr>
            <tr>
              <th>menu-right</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>Positions the menu on the right</td>
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
              <th>container</th>
              <td>Overall container</td>
            </tr>
            <tr>
              <th>side-menu</th>
              <td>Side menu wrapper</td>
            </tr>
            <tr>
              <th>side-menu-content</th>
              <td>Inner side menu (the wrapper for the links and other slotted elements)</td>
            </tr>
            <tr>
              <th>btn</th>
              <td>Button (with padlock / arrow) which toggles the side menu</td>
            </tr>
            <tr>
              <th>main-content</th>
              <td>Full area for any non-slotted elements</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #vars>
        <p>None of note</p>
      </template>

      <template #dispatched-events>
        <p>None</p>
      </template>

      <template #criteria>
        <ul>
          <li>The arrow button should show on hover (as long as the disable collapse mode is not enabled).</li>
          <li>If a parent link is active it should reveal the other sub links without changing the page.</li>
        </ul>
      </template>

      <template #data-layer>
        <p>None</p>
      </template>
    </Integration>

    <Versions pdf="/pdfs/collapsible-side-menu-v2.pdf">
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
            <td>12.09.2023</td>
            <td><a href="/pdfs/collapsible-side-menu-v1.pdf" download>Initial version</a></td>
          </tr>
          <tr>
            <td>V2</td>
            <td>17.04.2024</td>
            <td>Updated UI and additional features</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>

<style lang="scss">
  .demo {
    background-color: #f2f2f2;
    padding: 1rem;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    iam-collapsible-side {
      background: var(--colour-canvas);
    }

    iam-collapsible-side::part(side-menu) {
      position: absolute;
      top: 0;
    }
  }
</style>
