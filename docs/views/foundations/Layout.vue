<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/spacing-header.png';
  import Tabs from '../../../src/components/Tabs/Tabs.vue';
  import Tab from '../../../src/components/Tabs/Tab.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg">
      <h1>Spacing and Layout</h1>
    </DSHeader>

    <h2>Viewports</h2>

    <table>
      <thead>
        <tr>
          <th>Viewport</th>
          <th>Device type</th>
          <th>Width</th>
          <th>Grid Breakpoint</th>
          <th>Scaled to</th>
          <th>Max width</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XS</td>
          <td>Mobile</td>
          <td>0px-576px</td>
          <td>-</td>
          <td>375px</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>SM</td>
          <td>Tablet</td>
          <td class="text-nowrap">576px-992px</td>
          <td>576px <br/>(use the grid classes prefixed with sm-)</td>
          <td>768px</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>MD</td>
          <td>Laptop</td>
          <td class="text-nowrap">992px-1680px</td>
          <td>992px <br/>(use the grid classes prefixed with md-)</td>
          <td>1280px</td>
          <td>1280px</td>
          <td>At 1440px the scaling is stopped and the layout becomes flexible</td>
        </tr>
        <tr>
          <td>LG</td>
          <td>Desktop</td>
          <td class="text-nowrap">1680px-1920px</td>
          <td>1680px <br/>(use the grid classes prefixed with lg-)</td>
          <td>1920px</td>
          <td>1920px</td>
          <td>This viewport is only enabled when the class of <code>.enable-lg-breakpoint</code> is applied to the body or main element</td>
        </tr>
      </tbody>
    </table>

      <h2>Grid</h2>
      <p>
        Our grid system is based upon bootstraps gird system. When designing page layouts in Adobe XD or Figma,
        pleaserefer to the grid template supplied to match the design at the ‘100%’ size for each breakpoint (375px,
        768px, 1280px).
      </p>

      <Tabs class="mb-5">
        <Tab title="Mobile">
          <div class="row row-example row--mobile">
            <div class="col-12">
              <span class="grid-example"></span>
            </div>
            <div class="col-6">
              <span class="grid-example"></span>
            </div>
            <div class="col-6">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
          </div>
        </Tab>
        <Tab title="Tablet">
          <div class="row row-example row--tablet">
            <div class="col-12">
              <span class="grid-example"></span>
            </div>
            <div class="col-6">
              <span class="grid-example"></span>
            </div>
            <div class="col-6">
              <span class="grid-example"></span>
            </div>
            <div class="col-4">
              <span class="grid-example"></span>
            </div>
            <div class="col-4">
              <span class="grid-example"></span>
            </div>
            <div class="col-4">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
          </div>
        </Tab>
        <Tab title="Laptop">
          <div class="row row-example row--laptop">
            <div class="col-12">
              <span class="grid-example"></span>
            </div>
            <div class="col-6">
              <span class="grid-example"></span>
            </div>
            <div class="col-6">
              <span class="grid-example"></span>
            </div>
            <div class="col-4">
              <span class="grid-example"></span>
            </div>
            <div class="col-4">
              <span class="grid-example"></span>
            </div>
            <div class="col-4">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
          </div>
        </Tab>
        <Tab title="Desktop">
          <div class="row row-example row--desktop">
            <div class="col-12">
              <span class="grid-example"></span>
            </div>
            <div class="col-6">
              <span class="grid-example"></span>
            </div>
            <div class="col-6">
              <span class="grid-example"></span>
            </div>
            <div class="col-4">
              <span class="grid-example"></span>
            </div>
            <div class="col-4">
              <span class="grid-example"></span>
            </div>
            <div class="col-4">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-3">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
            <div class="col-2">
              <span class="grid-example"></span>
            </div>
          </div>
        </Tab>
      </Tabs>

    <div class="bg-light version-control mb-0 mt-5">
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
              <td>21.04.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/spacing.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .spacing-example {
    display: block;
    height: 5rem;
    position: relative;

    @media (forced-colors: active) {
      forced-color-adjust: none;
    }

    :is(.before, .after) {
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      width: 0;
      background: var(--colour-secondary);
    }

    .after {
      top: 0;
      bottom: auto;
      background-color: var(--colour-secondary);
    }
  }
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

  .row--laptop {
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
