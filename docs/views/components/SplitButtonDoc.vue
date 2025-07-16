<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Split Buttons</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">
        Split buttons support a button with related actions. These actions open in an overflow menu when clicked
      </p>
      <h3>Primary</h3>
      <p>
        Use a primary split button to add related actions to the strongest call to action on a page. Primary split buttons
should only appear once per container (not including the application header or in a modal dialog). Not every
screen requires a primary button split button.
      </p>
      <p>
        A filter overlay of 85% brightness will be applied to the default states for the active state.
      </p>
      <p>
        The menu should open to the below and to the right by default but should change position depending on screen
space available. The menu should be able to be dismissed by clicking anywhere outside the menu.
      </p>
    </div>

    <SplitButton>
      <button>Hello</button>
    </SplitButton>
    

    

    

    

    

    

    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="html">{{`<!-- Primary button -->
<button class="btn btn-primary">Button text</button>
<a href="/" class="btn btn-primary">Button text</a>
<a href="/" class="btn btn-primary colour-primary">Button text</a><!-- change the colour -->

<!-- Primary button with icon to the left -->
<a href="/components/buttons" class="btn btn-primary fa-plus-large">Lorum ipsum</a>

<!-- Primary button with icon to the right -->
<a href="/components/buttons" class="btn btn-primary"><span>Lorum ipsum</span><i class="fa-plus-large"></i></a>


<!-- Primary button (with interactive prompt) -->
<a href="/components/buttons" class="btn btn-primary btn--prompt">Lorum ipsum</a>

<!-- Primary button (small) -->
<a href="/components/buttons" class="btn btn-primary btn-sm">Lorum ipsum</a>

<!-- Primary button (compact) -->
<a href="/components/buttons" class="btn btn-primary btn-compact fa-plus-large">Lorum ipsum</a>

<!-- Primary button (complete) -->
<a href="/components/buttons" class="btn btn-primary colour-success">Lorum ipsum</a>

<!-- Secondary button -->
<a href="/components/buttons" class="btn btn-secondary">Lorum ipsum</a>

<!-- Secondary button (opening filter dialog pop-over) -->
<div class="dialog__wrapper">
  <button class="btn btn-secondary"><i class="fa-light fa-user"></i>Individual</button>
  <dialog><p>Dialog content</p></dialog>
</div>

<!-- Secondary button (opening filter dialog modal) -->
<button class="btn btn-secondary btn-filter" data-model="example1">Filter by</button>
<dialog id="example1"><p>Dialog content</p></dialog>
        
<!-- Secondary button (form field acting as a button) -->
<div class="btn btn-secondary">
  <select>
    <option>Sort by</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>

<!-- Secondary button (compact) -->
<a href="/components/buttons" class="btn btn-secondary colour-secondary btn-compact fa-save">Lorum ipsum</a>
        
<!-- Tertiary -->
<a href="/components/buttons" class="btn btn-tertiary">Lorum ipsum</a>
`}}</code></pre>
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
              <td>20.02.2025</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/buttons-links.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<script>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Tab from '@/components/Tabs/Tab.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Table from '@/components/Table/Table.vue';
  import SplitButton from '@/components/SplitButton/SplitButton.vue';

  export default {
    components: {
      DSHeader,
      Table,
      Tabs,
      Tab,
      SplitButton,
    },
    data() {
      return {
        headerImg: headerImg,
      };
    },
  };
</script>
