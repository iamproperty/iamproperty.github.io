<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/spacing-header.png';

</script>

<template>
  <main>
    <DSHeader :image="headerImg">
      <h1>Spacing and Layout</h1>
    </DSHeader>

    <div class="container">
      <h2>8px baseline grid</h2>

      <p class="lead">
        In order to create a consistent UI, all of sizing and spacing derives from multiples of 8px. This is our
        baseline grid, which allows us to space our typography and elements out in a uniform manner.
      </p>

      <p>
        All dimensions, line heights, margins and padding use this baseline. This helps give the content hierarchy and
        aids the readability of text as it gives the screen a vertical rhythm. We are using rems as our unit of
        measurement, which is a relative unit based on the root font size.
      </p>

      <p>
        We have set this to 16px by default, meaning we can use increments of 0.5rem to ensure that all elements sit on
        the 8px baseline.
      </p>

      <p class="mb-0">Here is a handy conversion chart for pixel and rem values:</p>

      <div class="row">
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example">
            <span class="before" style="height: 0.5rem; width: 100%"></span>
          </div>
          <p>
            <span class="strong">0.5rem</span><br />
            8px
          </p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example">
            <span class="before" style="height: 1rem; width: 100%"></span>
          </div>
          <p>
            <span class="strong">1rem</span><br />
            16px
          </p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example">
            <span class="before" style="height: 1.5rem; width: 100%"></span>
          </div>
          <p>
            <span class="strong">1.5rem</span><br />
            24px
          </p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example">
            <span class="before" style="height: 2rem; width: 100%"></span>
          </div>
          <p>
            <span class="strong">2rem</span><br />
            32px
          </p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example">
            <span class="before" style="height: 2.5rem; width: 100%"></span>
          </div>
          <p>
            <span class="strong">2.5rem</span><br />
            40px
          </p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example">
            <span class="before" style="height: 3rem; width: 100%"></span>
          </div>
          <p>
            <span class="strong">3rem</span><br />
            48px
          </p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example">
            <span class="before" style="height: 3.5rem; width: 100%"></span>
          </div>
          <p>
            <span class="strong">3.5rem</span><br />
            56px
          </p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example">
            <span class="before" style="height: 4rem; width: 100%"></span>
          </div>
          <p>
            <span class="strong">4rem</span><br />
            64px
          </p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example">
            <span class="before" style="height: 4.5rem; width: 100%"></span>
          </div>
          <p>
            <span class="strong">4.5rem</span><br />
            72px
          </p>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <div class="spacing-example">
            <span class="before" style="height: 5rem; width: 100%"></span>
          </div>
          <p>
            <span class="strong">5rem</span><br />
            80px
          </p>
        </div>
      </div>

      <p>
        In order to aid the vertical rhythm of the screen, spacing is only applied to the bottom of each element (using
        margin-bottom). This gives us a lot of flexibility when removing or re-ordering elements on the screen, as they
        will maintain the same vertical rhythm.
      </p>
      <p>
        As well as vertical spacing, we also have some horizontal spacing applied to our typography styles, where we
        apply a max-width of 51.25rem (820px). This is make it more comfortable for users to read the content on the
        screen as it keeps eye movement to a minimum. This equates to around 8 columns in our 12-column grid on the
        desktop (md) breakpoint.
      </p>
    </div>
    <div class="container">
      <h2>Spacing utilities</h2>

      <p>
        For greater control over the spacing around elements and styles, Bootstrap's spacing utilites can be used to
        overwrite the default spacing applied to an element. These values can be applied as both margin or padding, and
        are written in shorthand format, where the first letter of the direction of which it is used as a suffix (e.g
        .mr-3 = marginright-3).
      </p>
      <p>We have adapted the default spacing variables to suit the spacing applied to our designs:</p>

      <div class="row">
        <div class="col-6 col-sm-4 col-md-2">
          <p class="mb-1">
            <span class="strong">.mb-1</span><br />
            0.5rem (8px)
          </p>
          <div class="spacing-example"><span class="after pb-1 ps-1"></span></div>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <p class="mb-1">
            <span class="strong">.mb-2</span><br />
            1rem (16px)
          </p>
          <div class="spacing-example"><span class="after pb-2 ps-2"></span></div>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <p class="mb-1">
            <span class="strong">.mb-3</span><br />
            1.5rem (24px)
          </p>
          <div class="spacing-example"><span class="after pb-3 ps-3"></span></div>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <p class="mb-1">
            <span class="strong">.mb-4</span><br />
            2rem (32px)
          </p>
          <div class="spacing-example"><span class="after pb-4 ps-4"></span></div>
        </div>
        <div class="col-6 col-sm-4 col-md-2">
          <p class="mb-1">
            <span class="strong">.mb-5</span><br />
            3rem (48px)
          </p>
          <div class="spacing-example"><span class="after pb-5 ps-5"></span></div>
        </div>
      </div>

      <p>
        Alongside this we created some extra functionality to easily use the defined values. The preferred method would
        be to use a CSS custom property as this more controllable and custonisable. We do also have a spacing function
        in sass that can be used.
      </p>

      <h3>Sass</h3>
      <pre><code lang="scss">margin-top: spacing(1);</code></pre>
      <h3>CSS custom property</h3>
      <pre><code lang="css">margin-top: var(--spacing-2);</code></pre>
    </div>

    <div class="bg-light version-control mb-0">
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

