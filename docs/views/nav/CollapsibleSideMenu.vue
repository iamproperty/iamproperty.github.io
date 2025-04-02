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
          ‘Collapse’ button. On desktop this will only show when the user hovers over the ‘Default state container’.
        </li>
        <li>
          ‘Collapsed state’ container. On desktop, hovering on this area will open the ‘Collapsed hover state’. On
          tablet and mobile, selecting this area will open the ‘expanded’ state.
        </li>
        <li>‘Expand’ button.</li>
        <li>
          ‘Desktop only - Collapsed hover state’ container. If the user moves their pointer out of the container it will
          return to ‘Collapsed state.
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
          <select class="form-select" name="test1" id="test1">
            <option value="1" selected>Newcastle</option>
            <option value="2">Two</option>
            <option value="2">Three</option>
            <option value="2">Four</option>
          </select>
        </div>

        <hr slot="menu" />
        <a href="/" slot="menu">Agency settings</a>
        <a href="/" slot="menu">Control panel</a>
        <a href="/" slot="menu" class="selected">Contact us</a>

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
      <a href="/standalone/collapsible-side-menu" class="btn btn-secondary" target="_blank">View standalone example</a>
    </div>

    <div class="container pt-5 pb-0">
      <h2>Behaviour</h2>
      <h3>Desktop</h3>

      <p>
        On desktop, the menu should default to the ‘expanded’ state with the ‘expand’ button hidden. It should be left
        aligned alongside page content.
      </p>
      <p>
        Hovering over the ‘expanded’ state container should show the ‘collapse’ button. Selecting the ‘collapse’ button
        should change the menu into the ‘collapsed’ state.
      </p>
      <p>
        Hovering over the ‘collapsed’ container area should open the ‘collapsed - hover state’. Selecting the ‘expand’
        button on either the ‘collapsed’ or ‘collapsed - hover state’ should return the menu to the ‘expanded’ state.
      </p>
      <p>
        The height of the menu should stretch to the full height of the (page - navbar). The menu has an optional H3
        header, quick filter, and sub navigational items.
      </p>
      <p>
        The side menu should take up 50% of the screen on tablet when expanded. If the height of the content within the
        menu exceeds the menu height, the content should scroll within the menu.
      </p>

      <h3>Tablet</h3>
      <p>
        On tablet, the menu should default to the ‘collapsed’ state with the ‘expand’ button visible. It should be left
        aligned alongside page content.
      </p>
      <p>
        Selecting the ‘expand’ button or ‘collapsed’ state container should change the menu into the ‘expanded’ state.
        If the user selects elsewhere whilst the side menu is open it should collapse the side menu and load the other
        content.
      </p>
      <p>
        The height of the menu should stretch to the full height of the (page - navbar). The menu has an optional H3
        header, quick filter, and sub navigational items.
      </p>
      <p>
        The side menu has a max width of 21.8rem (350px) on desktop when expanded. If the height of the content within
        the menu exceeds the menu height, the content should scroll within the menu.
      </p>

      <h3>Mobile</h3>

      <p>
        On mobile, the menu should default to the ‘collapsed’ state with the ‘expand’ button visible. It should be left
        aligned alongside page content.
      </p>
      <p>On mobile we should use the small compact secondary button for the expand and collapse function.</p>
      <p>
        Selecting the ‘expand’ button or ‘collapsed’ state container should change the menu into the ‘expanded’ state.
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
    </div>

    <div class="container pt-5 pb-0">
      <h2>Sub navigational items</h2>

      <p>
        Sub-navigational items are used to navigate to other pages linked to the one the user is accessing. For example.
        When on a record for a property in the CRM, sub navigational items could be used to link various pages relating
        to the property record together like overview, viewings, appraisals, marketing, compliance etc. They should only
        be used within the collapsible side menu.
      </p>

      <h3>States</h3>

      <img :src="States" class="mb-4" />
      <h3>Scroll behaviour on sub navigational items</h3>

      <p>The list of items should scroll vertically if they overflow the height of the side menu tab area.</p>
    </div>

    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h3>Web component</h3></summary>
          <WebReadme></WebReadme>
        </details>
        <!--
        <details>
          <summary><h2>HTML</h2></summary>
          
          <pre><code class="html">{{`<div>
  <input type="checkbox" id="checkbox" name="checkbox" />
  <label for="checkbox">Input field label</label>
</div>`}}</code></pre>
        </details>
      -->
        <details>
          <summary><h2>Vue component</h2></summary>
          <Readme></Readme>
        </details>
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
              <td>V1 added</td>
              <td>12.09.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/collapsible-side-menu.pdf" download>Download latest designs</a>
      </div>
    </div>
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

<script>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Readme from '@/components/CollapsibleSideMenu/README.md';
  import WebReadme from '~/ts/components/collapsible-side/README.md';
  import Tabs from '@/components/Tabs/Tabs.vue';

  import CollapsibleSideMenu from '@/components/CollapsibleSideMenu/CollapsibleSideMenu.vue';

  import Anatomy from '../../img/collapse-sidemenu-anatomy.png';
  import States from '../../img/collapse-sidemenu-states.png';

  export default {
    components: {
      DSHeader,
      Readme,
      Tabs,
      Anatomy,
      CollapsibleSideMenu,
      States,
      WebReadme,
    },
    data() {
      return {
        headerImg: headerImg,
        Anatomy: Anatomy,
        States: States,
        message: 'input field value',
        htmlUsage: `...`,
      };
    },
  };
</script>
