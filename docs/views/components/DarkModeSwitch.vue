<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import DarkMode from '../../../src/components/DarkMode/DarkMode.vue'

</script>

<template>
  <main>
    <DSHeader :image="headerImg">
      <h1>Dark mode switch</h1>
    </DSHeader>

    <h2>Switch as an element</h2>
    <p>This option uses just the pages CSS to swap out the colour variables. The main positive here is the lack of JavaScript and quickness to add. This option is good when combined with other logic to maintain the preferences.</p>
    <label class="toggle"><input type="checkbox" name="dark-mode" />Dark mode</label>


    <h2 class="mt-5">Upgrade to a component</h2>

    <p>The benefits of upgrading to component is the ability to take advantage of local storage to remember the user preferences. There is also the chance to add extra CSS and JS to expand the features of the switch.</p>

    <div class="visualtest"><DarkMode class="mb-4"><label class="toggle"><input type="checkbox" name="dark-mode" />Dark mode</label></DarkMode></div>

  </main>
</template>

<style lang="scss">
  @use '../../../assets/sass/_func' as *;

  @layer utilities {
    @for $i from 1 through 10 {
      .bg-primary.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($primary, $tint) !important;
      }
    }
    @for $i from 1 through 10 {
      .bg-warning.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($warning, $tint) !important;
      }
    }

    @for $i from 1 through 10 {
      .bg-info.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($info, $tint) !important;
      }
    }

    @for $i from 1 through 10 {
      .bg-danger.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($danger, $tint) !important;
      }
    }
    @for $i from 1 through 10 {
      .bg-success.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($success, $tint) !important;
      }
    }
    @for $i from 1 through 10 {
      .bg-dark.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($dark, $tint) !important;
      }
    }
    @for $i from 1 through 10 {
      .bg-pink.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint(#ffd2d2, $tint) !important;
      }
    }
    .bg-pink {
      background-color: #ffd2d2 !important;
    }
  }
  .colour-blocks {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: 2rem;
  }
  .colour-block {
    width: 100%;
    padding-top: 50%;
    display: block;
    position: relative;
    margin-bottom: 0.5rem;

    span {
      position: absolute;
      bottom: 0.5rem;
      left: 0.5rem;
    }
  }

  .colour-circle {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    display: block;
  }
  .colour-tints {
    padding: 0;
    box-shadow: none;
    background: transparent;

    table {
      --hover-background: transparent;
      th,
      td {
        min-width: 0;
        padding-right: 1rem;
      }
    }
  }

  @media (forced-colors: active) {
    .colour-block,
    .colour-circle,
    .colour-tints {
      forced-color-adjust: none;
    }
  }

  .semantic-colours {
    padding: 0;
    box-shadow: none;
    background: transparent;
    table {
      background: transparent;
      --hover-background: transparent;
      --row-bg: transparent;

      th,
      td {
        min-width: 0;
        padding-right: 1rem;
      }
    }
  }

  .semantic-colours td {
    padding-left: 0 !important;
  }

  .semantic-colours td::after {
    display: none !important;
  }

  // Dark/Light mode themes

  @media screen and (prefers-color-scheme: light) {
    .dark-theme {

      --theme: dark;

      
    }

    html #visualtest:target ~ main > .light-mode:not(.visualtest) {
      display: block !important;

      > *:not(.visualtest) {
        display: none !important;
      }
    }
  }

  @media screen and (prefers-color-scheme: dark) {
    .light-theme {
      @each $color, $value in $theme-colors {
        --colour-#{$color}: #{$value};
      }
      @include reset-colours();

      // Reset the colours of lighter backgrounds to make sure they aren't over written by dark mode. Some other tweaks to colours are applied
      [class*='bg-']:not(.bg-primary):not(.bg-dark):not(.bg-danger):not(.bg-white):not(.bg-canvas):not(
          .bg-canvas-2
        ):not(.invert-colours) {
        @each $color, $value in $theme-colors {
          --colour-#{$color}: #{$value};
        }
        @include reset-colours();
        --colour-body: var(--colour-primary);
        color: var(--colour-body);
      }

      // Override the colours when on a dark background, similiar to dark mode but on a module level
      [class*='bg-']:not(.bg-info):not(.bg-success):not(.bg-light):not(.bg-white):not(.bg-canvas):not(.bg-canvas-2):not(
          .prevent-invert
        ),
      .invert-colours {
        @include invert-colours();

        color: #{$colour-inverted};
      }
    }

    html #visualtest:target ~ main > .dark-mode:not(.visualtest) {
      display: block !important;

      > *:not(.visualtest) {
        display: none !important;
      }
    }
  }

  .dark-theme .dark-mode {
    display: block;
  }

  .light-theme .light-mode {
    display: block;
  }

  .dark-theme .light-mode {
    display: none;
  }

  .light-theme .dark-mode,
  .dark-theme .colour-tints .bg-dark.tint-100,
  .dark-theme .colour-tints .bg-dark.tint-90 {
    display: none;
  }

  [for='light-mode']:before,
  [for='dark-mode']:before {
    display: none;
  }
</style>

