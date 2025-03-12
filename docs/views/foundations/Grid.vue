<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/spacing-header.png';
  import Tabs from '../../../src/components/Tabs/Tabs.vue';
  import Tab from '../../../src/components/Tabs/Tab.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg">
      <h1>Grid</h1>
    </DSHeader>

    <p>
      Our current grid system is based upon
      <a href="https://getbootstrap.com/docs/5.2/layout/grid/" rel="nofollow" target="_blank">bootstraps grid system</a>
      When designing page layouts in Adobe XD or Figma, please refer to the grid template supplied to match the design
      at the ‘100%’ size for each viewport (375px, 768px, 1280px).
    </p>

    <Tabs class="mb-5">
      <Tab title="Mobile">
        <div class="row row-example row--mobile">
          <div class="col-12">
            <span class="grid-example">.col-12</span>
          </div>
          <div class="col-6">
            <span class="grid-example">.col-6</span>
          </div>
          <div class="col-6">
            <span class="grid-example">.col-6</span>
          </div>
          <div class="col-3">
            <span class="grid-example">.col-3</span>
          </div>
          <div class="col-3">
            <span class="grid-example">.col-3</span>
          </div>
          <div class="col-3">
            <span class="grid-example">.col-3</span>
          </div>
          <div class="col-3">
            <span class="grid-example">.col-3</span>
          </div>
        </div>
      </Tab>
      <Tab title="Tablet">
        <div class="row row-example row--tablet">
          <div class="col-12">
            <span class="grid-example">.col-sm-12</span>
          </div>
          <div class="col-6">
            <span class="grid-example">.col-sm-6</span>
          </div>
          <div class="col-6">
            <span class="grid-example">.col-sm-6</span>
          </div>
          <div class="col-4">
            <span class="grid-example">.col-sm-4</span>
          </div>
          <div class="col-4">
            <span class="grid-example">.col-sm-4</span>
          </div>
          <div class="col-4">
            <span class="grid-example">.col-sm-4</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-sm-2</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-sm-2</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-sm-2</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-sm-2</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-sm-2</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-sm-2</span>
          </div>
        </div>
      </Tab>
      <Tab title="Desktop">
        <div class="row row-example row--desktop">
          <div class="col-12">
            <span class="grid-example">.col-md-12</span>
          </div>
          <div class="col-6">
            <span class="grid-example">.col-md-6</span>
          </div>
          <div class="col-6">
            <span class="grid-example">.col-md-6</span>
          </div>
          <div class="col-4">
            <span class="grid-example">.col-md-4</span>
          </div>
          <div class="col-4">
            <span class="grid-example">.col-md-4</span>
          </div>
          <div class="col-4">
            <span class="grid-example">.col-md-4</span>
          </div>
          <div class="col-3">
            <span class="grid-example">.col-md-3</span>
          </div>
          <div class="col-3">
            <span class="grid-example">.col-md-3</span>
          </div>
          <div class="col-3">
            <span class="grid-example">.col-md-3</span>
          </div>
          <div class="col-3">
            <span class="grid-example">.col-md-3</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-md-2</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-md-2</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-md-2</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-md-2</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-md-2</span>
          </div>
          <div class="col-2">
            <span class="grid-example">.col-md-2</span>
          </div>
        </div>
      </Tab>
    </Tabs>

    <h2>New Grid based Layout system</h2>

    <p>
      Moving towards a new CSS grid based system to help reduce our dom size and increase its functionality with modern
      capabilities. Still based on a 12 point grid thats set on the pages boday and then inherited across the whole
      page.
    </p>

    <h3>Grid Columns</h3>
    <table>
      <thead>
        <tr>
          <th>Grid column</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Full width</th>
          <td>Full width of the screen</td>
        </tr>
        <tr>
          <th>Container</th>
          <td>Full width of the screen upto the max width of the size</td>
        </tr>
        <tr>
          <th>Content</th>
          <td>Full width of the screen upto the max width of the size minus the side gutters of the container</td>
        </tr>
        <tr>
          <th>col-{1-12}</th>
          <td>Twelve columns equally sized from the middle of the container column</td>
        </tr>
      </tbody>
    </table>

    <h4>Classes</h4>

    <p>
      <strong>.full-width</strong> sets the grid column to full-width and makes the element stretch the full width of
      the screen.
    </p>
    <p>
      <strong>.{br}-col-start-{1-12}</strong> sets the start column the element aligns too and sets a default end at the
      end of col 12.
    </p>
    <p>
      <strong>.{br}-col-end-{1-12}</strong> sets the end column the element aligns too and sets a default start at the
      start of col 1.
    </p>
    <p><strong>.{br}-col-span-{1-12}</strong> sets out how many columns the element spans across.</p>
    <p>
      <strong>.{br}-col-auto-{1-12}</strong> sets the start column the element aligns too as the next column of the end
      the previous element in the Dom. This allows us to create multi column rows.
    </p>

    <div class="col-end-6">
      <span class="grid-example">.col-end-6</span>
    </div>
    <div class="col-start-7">
      <span class="grid-example">.col-start-7</span>
    </div>

    <div class="col-end-4">
      <span class="grid-example">.col-end-4</span>
    </div>
    <div class="col-span-4 col-start-auto">
      <span class="grid-example">.col-span-4</span>
    </div>

    <div class="col-span-4 col-start-auto">
      <span class="grid-example">.col-span-4</span>
    </div>

    <h3>Grid Rows</h3>
    <p>
      Grid rows are set to auto to allow for a natural order of elements. The classes setup for the rows are designed to
      allow for the changing of the elements order and to allow for elements to span across multiple rows.
    </p>

    <h4>Classes</h4>

    <p><strong>.{br}-row-start-{1-12}</strong> sets the start row the element aligns too and.</p>
    <p><strong>.{br}-row-span-{1-12}</strong> sets out how many rows the element spans across.</p>

    <div class="">
      <div class="col-span-6 order-1">
        <span class="grid-example">.col-span-6</span>
      </div>

      <div class="col-span-6 order-3 col-start-auto">
        <span class="grid-example">.col-span-6</span>
      </div>

      <div class="col-span-6 row-span-2 col-start-auto order-2">
        <span class="grid-example" style="height: calc(100% - 2rem)">.row-span-3</span>
      </div>
    </div>

    <h3>Grid Columns with wrapper</h3>
    <p>Wrappers with certain classes can be used to assign grid columns to its children.</p>

    <h4>Classes</h4>

    <p><strong>.{br}-cols-{1-6}</strong> sets each child to span that many columns.</p>

    <div class="cols-3">
      <div class="">
        <span class="grid-example">.cols-3</span>
      </div>
      <div class="">
        <span class="grid-example">.cols-3</span>
      </div>
      <div class="">
        <span class="grid-example">.cols-3</span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .grid-example {
    display: block;
    height: 5rem;
    background: var(--colour-secondary);
    margin-bottom: 2rem;
    text-align: center;
    padding-top: 1rem;
    position: relative;

    @media (forced-colors: active) {
      forced-color-adjust: none;
    }
  }

  $colWidth: 25%;
  .row-example {
    padding-top: 1rem;
    background-image: linear-gradient(
      180deg,
      #ffdfdf 25%,
      #ffeeee 25%,
      #ffeeee 50%,
      #ffdfdf 50%,
      #ffdfdf 75%,
      #ffeeee 75%,
      #ffeeee 100%
    );
    background-size: 100% 2rem;
    position: relative;

    @media (forced-colors: active) {
      forced-color-adjust: none;
    }

    &.row--mobile {
      max-width: 23.5rem;
    }
    &.row--tablet {
      max-width: 35.5rem;
    }

    &:before {
      position: absolute;
      background-image: linear-gradient(
        90deg,
        transparent 0.5rem,
        var(--colour-info) 0.5rem,
        /* Column 1 */ var(--colour-info) calc(#{$colWidth * 1} - 0.5rem),
        transparent calc(#{$colWidth * 1} - 0.5rem),
        transparent calc(#{$colWidth * 1} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 1} + 0.5rem),
        /* Column 2 */ var(--colour-info) calc(#{$colWidth * 2} - 0.5rem),
        transparent calc(#{$colWidth * 2} - 0.5rem),
        transparent calc(#{$colWidth * 2} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 2} + 0.5rem),
        /* Column 3 */ var(--colour-info) calc(#{$colWidth * 3} - 0.5rem),
        transparent calc(#{$colWidth * 3} - 0.5rem),
        transparent calc(#{$colWidth * 3} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 3} + 0.5rem),
        /* Column 4 */ var(--colour-info) calc(#{$colWidth * 4} - 0.5rem),
        transparent calc(#{$colWidth * 4} - 0.5rem),
        transparent calc(#{$colWidth * 4} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 4} + 0.5rem),
        /* gutter */ var(--colour-info) calc(100% - 0.5rem),
        transparent calc(100% - 0.5rem)
      );
      content: '';
      display: block;
      height: 100%;
      width: calc(100%);
      top: 0;
      z-index: 1;
      left: 0rem;
      opacity: 0.25;
    }
  }

  .row--tablet {
    $colWidth: 16.66666667%;

    &:before {
      background-image: linear-gradient(
        90deg,
        transparent 0.5rem,
        var(--colour-info) 0.5rem,
        /* Column 1 */ var(--colour-info) calc(#{$colWidth * 1} - 0.5rem),
        transparent calc(#{$colWidth * 1} - 0.5rem),
        transparent calc(#{$colWidth * 1} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 1} + 0.5rem),
        /* Column 2 */ var(--colour-info) calc(#{$colWidth * 2} - 0.5rem),
        transparent calc(#{$colWidth * 2} - 0.5rem),
        transparent calc(#{$colWidth * 2} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 2} + 0.5rem),
        /* Column 3 */ var(--colour-info) calc(#{$colWidth * 3} - 0.5rem),
        transparent calc(#{$colWidth * 3} - 0.5rem),
        transparent calc(#{$colWidth * 3} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 3} + 0.5rem),
        /* Column 4 */ var(--colour-info) calc(#{$colWidth * 4} - 0.5rem),
        transparent calc(#{$colWidth * 4} - 0.5rem),
        transparent calc(#{$colWidth * 4} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 4} + 0.5rem),
        /* Column 5 */ var(--colour-info) calc(#{$colWidth * 5} - 0.5rem),
        transparent calc(#{$colWidth * 5} - 0.5rem),
        transparent calc(#{$colWidth * 5} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 5} + 0.5rem),
        /* Column 6 */ var(--colour-info) calc(#{$colWidth * 6} - 0.5rem),
        transparent calc(#{$colWidth * 6} - 0.5rem),
        transparent calc(#{$colWidth * 6} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 6} + 0.5rem),
        /* gutter */ var(--colour-info) calc(100% - 0.5rem),
        transparent calc(100% - 0.5rem)
      );
    }
  }

  .row--desktop {
    $colWidth: 8.33333333%;

    &:before {
      background-image: linear-gradient(
        90deg,
        transparent 0.5rem,
        var(--colour-info) 0.5rem,
        /* Column 1 */ var(--colour-info) calc(#{$colWidth * 1} - 0.5rem),
        transparent calc(#{$colWidth * 1} - 0.5rem),
        transparent calc(#{$colWidth * 1} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 1} + 0.5rem),
        /* Column 2 */ var(--colour-info) calc(#{$colWidth * 2} - 0.5rem),
        transparent calc(#{$colWidth * 2} - 0.5rem),
        transparent calc(#{$colWidth * 2} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 2} + 0.5rem),
        /* Column 3 */ var(--colour-info) calc(#{$colWidth * 3} - 0.5rem),
        transparent calc(#{$colWidth * 3} - 0.5rem),
        transparent calc(#{$colWidth * 3} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 3} + 0.5rem),
        /* Column 4 */ var(--colour-info) calc(#{$colWidth * 4} - 0.5rem),
        transparent calc(#{$colWidth * 4} - 0.5rem),
        transparent calc(#{$colWidth * 4} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 4} + 0.5rem),
        /* Column 5 */ var(--colour-info) calc(#{$colWidth * 5} - 0.5rem),
        transparent calc(#{$colWidth * 5} - 0.5rem),
        transparent calc(#{$colWidth * 5} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 5} + 0.5rem),
        /* Column 6 */ var(--colour-info) calc(#{$colWidth * 6} - 0.5rem),
        transparent calc(#{$colWidth * 6} - 0.5rem),
        transparent calc(#{$colWidth * 6} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 6} + 0.5rem),
        /* Column 7 */ var(--colour-info) calc(#{$colWidth * 7} - 0.5rem),
        transparent calc(#{$colWidth * 7} - 0.5rem),
        transparent calc(#{$colWidth * 7} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 7} + 0.5rem),
        /* Column 8 */ var(--colour-info) calc(#{$colWidth * 8} - 0.5rem),
        transparent calc(#{$colWidth * 8} - 0.5rem),
        transparent calc(#{$colWidth * 8} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 8} + 0.5rem),
        /* Column 9 */ var(--colour-info) calc(#{$colWidth * 9} - 0.5rem),
        transparent calc(#{$colWidth * 9} - 0.5rem),
        transparent calc(#{$colWidth * 9} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 9} + 0.5rem),
        /* Column 10 */ var(--colour-info) calc(#{$colWidth * 10} - 0.5rem),
        transparent calc(#{$colWidth * 10} - 0.5rem),
        transparent calc(#{$colWidth * 10} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 10} + 0.5rem),
        /* Column 11 */ var(--colour-info) calc(#{$colWidth * 11} - 0.5rem),
        transparent calc(#{$colWidth * 11} - 0.5rem),
        transparent calc(#{$colWidth * 11} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 11} + 0.5rem),
        /* Column 12 */ var(--colour-info) calc(#{$colWidth * 12} - 0.5rem),
        transparent calc(#{$colWidth * 12} - 0.5rem),
        transparent calc(#{$colWidth * 12} + 0.5rem),
        var(--colour-info) calc(#{$colWidth * 12} + 0.5rem),
        /* gutter */ var(--colour-info) calc(100% - 0.5rem),
        transparent calc(100% - 0.5rem)
      );
    }
  }
</style>
