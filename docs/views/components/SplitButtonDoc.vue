<script setup lang="ts">
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import SplitButton from '@/components/SplitButton/SplitButton.vue';
  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Split Buttons</h1>
    </DSHeader>

    <p class="lead">
      Split buttons support a button with related actions. These actions open in an overflow menu when clicked
    </p>
    <h2>Primary</h2>
    <p>
      Use a primary split button to add related actions to the strongest call to action on a page. Primary split buttons
      should only appear once per container (not including the application header or in a modal dialog). Not every
      screen requires a primary button split button.
    </p>
    <p>A filter overlay of 85% brightness will be applied to the default states for the active state.</p>
    <p>
      The menu should open to the below and to the right by default but should change position depending on screen space
      available. The menu should be able to be dismissed by clicking anywhere outside the menu.
    </p>

    <div class="container pb-5 visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Primary state</p>
          <SplitButton>
            <button class="btn btn-primary">Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Disabled state</p>
          <SplitButton>
            <button class="btn btn-primary" disabled>Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
      </div>
    </div>

    <h3>Primary split button (with icon)</h3>
    <p>
      Use an icon to support a primary split button. See example below where an arrow icon is used to highlight that the
      button action is to reply. The icon can be added before or after the button copy. Whichever is most relevant.
    </p>

    <div class="container pb-5 visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <SplitButton>
            <button class="btn btn-primary"><i class="fa-solid fa-reply"></i> Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
      </div>
    </div>

    <h3>Primary split button (small)</h3>
    <p>When there is limited space a small primary split button variant can be used.</p>

    <div class="container pb-5 visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <SplitButton>
            <button class="btn btn-primary btn-sm">Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
      </div>
    </div>

    <h3>Primary split button (small with icon)</h3>

    <p>
      Use an icon to support a primary split button (small). See example below where an arrow icon is used to highlight
      that the button action is to reply. The icon can be added before or after the button copy. Whichever is most
      relevant.
    </p>

    <div class="container pb-5 visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <SplitButton>
            <button class="btn btn-primary btn-sm"><i class="fa-solid fa-reply"></i> Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
      </div>
    </div>

    <h2>Secondary</h2>
    <p>
      Use a secondary split button to add related actions to a secondary action on a page. It can either be paired
      alongside a primary button on used on it’s own to support a secondary actions for the user.
    </p>

    <p>A filter overlay of 85% brightness will be applied to the default states for the active state.</p>

    <p>
      The menu should open to the below and to the right by default but should change position depending on screen space
      available. The menu should be able to be dismissed by clicking anywhere outside the menu
    </p>

    <div class="container pb-5 visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Secondary state</p>
          <SplitButton>
            <button class="btn btn-secondary">Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative action 2</button>
          </SplitButton>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Disabled state</p>
          <SplitButton>
            <button class="btn btn-secondary" disabled>Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
      </div>
    </div>

    <h3>Secondary split button (with icon)</h3>

    <p>
      Use an icon to support a secondary split button. See example below where an arrow icon is used to highlight that
      the button action is to reply. The icon can be added before or after the button copy. Whichever is most relevant.
    </p>

    <div class="container pb-5 visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Secondary state</p>
          <SplitButton>
            <button class="btn btn-secondary"><i class="fa-solid fa-reply"></i> Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative action 2</button>
          </SplitButton>
        </div>
      </div>
    </div>

    <h3>Secondary split button (small)</h3>

    <p>When there is limited space a small secondary split button variant can be used.</p>

    <div class="container pb-5 visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Small version</p>
          <SplitButton>
            <button class="btn btn-secondary btn-sm">Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
      </div>
    </div>

    <h3>Secondary split button (small with icon)</h3>
    <p>
      Use an icon to support a secondary split button (small). See example below where an arrow icon is used to
      highlight that the button action is to reply. The icon can be added before or after the button copy. Whichever is
      most relevant.
    </p>

    <div class="container pb-5 visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Small version</p>
          <SplitButton>
            <button class="btn btn-secondary btn-sm"><i class="fa-solid fa-reply"></i> Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
      </div>
    </div>

    <h2>Disabled button state</h2>
    <p class="pb-2">When any of the buttons above are disabled we should:</p>
    <ul class="pb-4">
      <li>Disable the normal hover state for that button</li>
      <li>Reduce the opacity of the button to 40%</li>
      <li>Add a native browser blocked symbol when the user hovers over the button.</li>
    </ul>

    <div class="container pb-5 visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <SplitButton>
            <button class="btn btn-primary" disabled>Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
      </div>
    </div>

    <h2>Mobile and dialog button padding</h2>

    <p>
      Due to the small real estate of mobile screens and dialogs we can reduce the minimum padding around buttons from
      24px (1.5rem) to 16px (1rem).
    </p>

    <p>
      This reduced padding provides more flexibility when designing for mobile as more content can be displayed on the
      screen at once. The minimum padding does however ensure that the screen doesn t become too cluttered and that
      there is adequate spacing around the button to maintain a suitable touch target size to avoid accidental taps
    </p>

    <Integration component="split-button" componentName="split-button">
      <template #web-component>
        <pre><code>{{`<iam-split-button>
  <button class="btn btn-primary">Primary action</button>
  <button class="split-menu-btn" slot="menu-item">Alternative</button>
  <button class="split-menu-btn" slot="menu-item">Alternative</button>
</iam-split-button>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import SplitButton from '@/components/SplitButton/SplitButton.vue</script>
        
<splitButton>
  <button class="btn btn-primary">Primary action</button>
  <button class="split-menu-btn" slot="menu-item">Alternative</button>
  <button class="split-menu-btn" slot="menu-item">Alternative</button>
</splitButton>
`}}</code></pre>
      </template>

      <template #classes>
        <p class="note mb-3"><strong>Note: </strong>See the button classes.</p>
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
              <th>dropdown</th>
              <td>The arrowed button that opens the menu</td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration>
    <Versions pdf="/pdfs/split-buttons.pdf">
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
            <td>18.12.2025</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>
