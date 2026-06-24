
<script setup>
  import BranchSelector from '@/components/BranchSelector/BranchSelector.vue';
  import Tab from '@/components/Tabs/Tab.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Table from '@/components/Table/Table.vue';

  import Nav from '@/components/Nav/Nav.vue';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';

  import branchSelectorDesktopImg from '../../img/branch-selector-desktop.png';
  import branchSelectorMobileImg from '../../img/branch-selector-mobile.png';

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Branch selector</h1>
    </DSHeader>

    <p>The branch selector allow users to select the branch they want to use within our iamproperty products. This component is accompanied by the dialog popover menu if 9 or less branches are available or the dialog popover with search is 10 or more branches and appears upon the user clicking the branch select ‘Active’ state. </p>


    <p>It will be situated within the secondary menu navigation on desktop and in the ‘my account’ side menu of the mobile and tablet views. All branch selector variants will truncate after 32 characters at default view, they will show ‘...’ after 32 characters, upon hover it will reveal the full branch name in a browser default tooltip. The full branch name will be shown in the dialog popover menu.</p>


    <h2>Default</h2>


    <div class="container visualtest mb-5">

      <div class="col-end-6 md-col-end-3">

        <span class="small d-block pb-3 mb-0">DEFAULT</span>
        <BranchSelector>

          <label>
            <input type="radio" name="branch" value="gosforth" />
            Gosforth Agent & Co
          </label>
          <label>
            <input type="radio" name="branch" value="heaton"/>
            Heaton Agent & Co
          </label>
          <label>
            <input type="radio" name="branch" value="newcastle"/>
            Newcastle Agent & Co
          </label>
        </BranchSelector>
      </div>
      <div class="col-start-7 md-col-start-4">

        <span class="small d-block pb-3 mb-0">DISABLED</span>
        <BranchSelector>

          <label>
            <input type="radio" name="branch2" value="gosforth" disabled/>
            Gosforth Agent & Co
          </label>
          <label>
            <input type="radio" name="branch2" value="heaton" disabled/>
            Heaton Agent & Co
          </label>
          <label>
            <input type="radio" name="branch2" value="newcastle" disabled/>
            Newcastle Agent & Co
          </label>
        </BranchSelector>
      </div>
    </div>

    <h2>Counter included</h2>
    <p>The counter is an optional addition to the branch selector component and is used to highlight the amount of branches available to the user without having to click into the active state to reveal the number of branches.</p>


    <div class="container visualtest mb-5">

      <BranchSelector data-indicator="3">

        <label>
          <input type="radio" name="branch3" value="gosforth" />
          Gosforth Agent & Co
        </label>
        <label>
          <input type="radio" name="branch3" value="heaton"/>
          Heaton Agent & Co
        </label>
        <label>
          <input type="radio" name="branch3" value="newcastle"/>
          Newcastle Agent & Co
        </label>
      </BranchSelector>
    </div>

    <h2>Multi branches active at once</h2>
    <p>This option is only available to the products which allow for two or more branches to be active at once. The ‘+ number’ only shows if the user has selected two or more branches. </p>
    <div class="container visualtest mb-5">

      <BranchSelector>

        <label>
          <input type="checkbox" name="branch4" value="gosforth" checked/>
          Gosforth Agent & Co
        </label>
        <label>
          <input type="checkbox" name="branch4" value="heaton" checked/>
          Heaton Agent & Co
        </label>
        <label>
          <input type="checkbox" name="branch4" value="newcastle"/>
          Newcastle Agent & Co
        </label>
      </BranchSelector>
    </div>

    <h2>Placement</h2>
    <span class="small d-block pb-3 mb-0">DESKTOP</span>
    <img :src="branchSelectorDesktopImg" class="mb-5" />

    <span class="small d-block pb-3 mb-0">MOBILE/TABLET</span>
    <img :src="branchSelectorMobileImg" class="mb-5" />

    <Integration component="branch-selector" componentName="iam-branch-selector">
      <template #web-component>
        <pre class="mb-5"><code>{{`<iam-branch-selector>
  <label>
    <input type="checkbox" name="branch4" value="gosforth" checked/>
    Gosforth Agent & Co
  </label>
  <label>
    <input type="checkbox" name="branch4" value="heaton" checked/>
    Heaton Agent & Co
  </label>
  <label>
    <input type="checkbox" name="branch4" value="newcastle"/>
    Newcastle Agent & Co
  </label>
</iam-branch-selector>`}}</code></pre>

        <p class="pb-3">To have the branch selector as part of the nav, the element needs to be a child of the `iam-nav` component with the slot of account. This slot is already setup to be updated to the secondary slot when on desktop.</p>
        <pre><code>{{`<iam-nav>
  <iam-branch-selector slot="account">
    <label>
      <input type="checkbox" name="branch4" value="gosforth" checked/>
      Gosforth Agent & Co
    </label>
    <label>
      <input type="checkbox" name="branch4" value="heaton" checked/>
      Heaton Agent & Co
    </label>
    <label>
      <input type="checkbox" name="branch4" value="newcastle"/>
      Newcastle Agent & Co
    </label>
  </iam-branch-selector>
</iam-nav>`}}</code></pre>



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
              <th>data-indicator</th>
              <td></td>
              <td>Number</td>
              <td>No</td>
              <td>Displays an orange indicator with the number passed to it.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #examples>

        <ul>
          <li><a href="/standalone/eco-product" target="_blank">Eco hub product view</a></li>
        </ul>
      </template>


    </Integration>
    <Versions pdf="/pdfs/branch-selector.pdf">
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
              <td>22.06.2026</td>
              <td>N/A</td>
            </tr>
        </tbody>
      </table>
    </Versions>

  </main>
</template>

<style lang="scss">
  @media screen and (max-width: 62em) {
    .demo {
      background-color: #f2f2f2;
      overflow: hidden;
      padding: 1rem 1rem 0 1rem;
      height: 100vh;
    }

    #visualtest:target ~ main > .demo {
      padding: 0 !important;
    }
  }
</style>
