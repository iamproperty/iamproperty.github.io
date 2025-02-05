<template>
  <main>

    <DSHeader :image="headerImg">
      <h1>Breakpoints & scaling</h1>
    </DSHeader>

    <p><a href="https://getbootstrap.com/docs/5.2/layout/breakpoints/" rel="nofollow" target="_blank">Bootstrap offers 5 breakpoints</a> as part of its grid system and uses a t-shirt sizing naming convention that are mapped against various device types (extra-small, small, medium, large and extra-large). This seemed a little excessive given the simplicity of our latest design style, so we have adjusted and reduced the default Bootstrap breakpoints. To maintain the composition of the brekapoints, responsive scaling has been added to scale the content proportionally based upon the width.</p>

    <p><strong>Default – up to 576px</strong> <br>Scales to/from <strong>375px</strong> <br>This is the default breakpoint that will be visible on mobile devices.</p>
    <p><strong>Small (sm) – 576px and over</strong> <br>Scales to/from <strong>768px</strong> <br>This will be visible on landscape mobile and tablet devices.</p>
    <p><strong>Medium (md) – 992px and over</strong> <br>Scales upto <strong>1280px</strong> <br>This will be visible on landscape tablet and desktop devices.</p>


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

  :is(.before,.after) {
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
  background-image: linear-gradient(180deg, #FFDFDF 25%, #FFEEEE 25%, #FFEEEE 50%, #FFDFDF 50%, #FFDFDF 75%, #FFEEEE 75%, #FFEEEE 100%);
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
    background-image: linear-gradient(90deg, 
    transparent 0.5rem, var(--colour-info) 0.5rem,
    /* Column 1 */
    var(--colour-info) calc(#{$colWidth*1} - 0.5rem), transparent calc(#{$colWidth*1} - 0.5rem), 
    transparent calc(#{$colWidth*1} + 0.5rem), var(--colour-info) calc(#{$colWidth*1} + 0.5rem),
    /* Column 2 */
    var(--colour-info) calc(#{$colWidth*2} - 0.5rem), transparent calc(#{$colWidth*2} - 0.5rem), 
    transparent calc(#{$colWidth*2} + 0.5rem), var(--colour-info) calc(#{$colWidth*2} + 0.5rem),
    /* Column 3 */
    var(--colour-info) calc(#{$colWidth*3} - 0.5rem), transparent calc(#{$colWidth*3} - 0.5rem), 
    transparent calc(#{$colWidth*3} + 0.5rem), var(--colour-info) calc(#{$colWidth*3} + 0.5rem),
    /* Column 4 */
    var(--colour-info) calc(#{$colWidth*4} - 0.5rem), transparent calc(#{$colWidth*4} - 0.5rem), 
    transparent calc(#{$colWidth*4} + 0.5rem), var(--colour-info) calc(#{$colWidth*4} + 0.5rem),
    /* gutter */
    var(--colour-info) calc(100% - 0.5rem), transparent calc(100% - 0.5rem),
    );
    content: "";
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
      background-image: linear-gradient(90deg, 
      transparent 0.5rem, var(--colour-info) 0.5rem,
      /* Column 1 */
      var(--colour-info) calc(#{$colWidth*1} - 0.5rem), transparent calc(#{$colWidth*1} - 0.5rem), 
      transparent calc(#{$colWidth*1} + 0.5rem), var(--colour-info) calc(#{$colWidth*1} + 0.5rem),
      /* Column 2 */
      var(--colour-info) calc(#{$colWidth*2} - 0.5rem), transparent calc(#{$colWidth*2} - 0.5rem), 
      transparent calc(#{$colWidth*2} + 0.5rem), var(--colour-info) calc(#{$colWidth*2} + 0.5rem),
      /* Column 3 */
      var(--colour-info) calc(#{$colWidth*3} - 0.5rem), transparent calc(#{$colWidth*3} - 0.5rem), 
      transparent calc(#{$colWidth*3} + 0.5rem), var(--colour-info) calc(#{$colWidth*3} + 0.5rem),
      /* Column 4 */
      var(--colour-info) calc(#{$colWidth*4} - 0.5rem), transparent calc(#{$colWidth*4} - 0.5rem), 
      transparent calc(#{$colWidth*4} + 0.5rem), var(--colour-info) calc(#{$colWidth*4} + 0.5rem),
      /* Column 5 */
      var(--colour-info) calc(#{$colWidth*5} - 0.5rem), transparent calc(#{$colWidth*5} - 0.5rem), 
      transparent calc(#{$colWidth*5} + 0.5rem), var(--colour-info) calc(#{$colWidth*5} + 0.5rem),
      /* Column 6 */
      var(--colour-info) calc(#{$colWidth*6} - 0.5rem), transparent calc(#{$colWidth*6} - 0.5rem), 
      transparent calc(#{$colWidth*6} + 0.5rem), var(--colour-info) calc(#{$colWidth*6} + 0.5rem),
      /* gutter */
      var(--colour-info) calc(100% - 0.5rem), transparent calc(100% - 0.5rem)
      );
    
  }
}

.row--desktop {

  $colWidth: 8.33333333%;
  
    &:before {
      background-image: linear-gradient(90deg, 
      transparent 0.5rem, var(--colour-info) 0.5rem,
      /* Column 1 */
      var(--colour-info) calc(#{$colWidth*1} - 0.5rem), transparent calc(#{$colWidth*1} - 0.5rem), 
      transparent calc(#{$colWidth*1} + 0.5rem), var(--colour-info) calc(#{$colWidth*1} + 0.5rem),
      /* Column 2 */
      var(--colour-info) calc(#{$colWidth*2} - 0.5rem), transparent calc(#{$colWidth*2} - 0.5rem), 
      transparent calc(#{$colWidth*2} + 0.5rem), var(--colour-info) calc(#{$colWidth*2} + 0.5rem),
      /* Column 3 */
      var(--colour-info) calc(#{$colWidth*3} - 0.5rem), transparent calc(#{$colWidth*3} - 0.5rem), 
      transparent calc(#{$colWidth*3} + 0.5rem), var(--colour-info) calc(#{$colWidth*3} + 0.5rem),
      /* Column 4 */
      var(--colour-info) calc(#{$colWidth*4} - 0.5rem), transparent calc(#{$colWidth*4} - 0.5rem), 
      transparent calc(#{$colWidth*4} + 0.5rem), var(--colour-info) calc(#{$colWidth*4} + 0.5rem),
      /* Column 5 */
      var(--colour-info) calc(#{$colWidth*5} - 0.5rem), transparent calc(#{$colWidth*5} - 0.5rem), 
      transparent calc(#{$colWidth*5} + 0.5rem), var(--colour-info) calc(#{$colWidth*5} + 0.5rem),
      /* Column 6 */
      var(--colour-info) calc(#{$colWidth*6} - 0.5rem), transparent calc(#{$colWidth*6} - 0.5rem), 
      transparent calc(#{$colWidth*6} + 0.5rem), var(--colour-info) calc(#{$colWidth*6} + 0.5rem),
      /* Column 7 */
      var(--colour-info) calc(#{$colWidth*7} - 0.5rem), transparent calc(#{$colWidth*7} - 0.5rem), 
      transparent calc(#{$colWidth*7} + 0.5rem), var(--colour-info) calc(#{$colWidth*7} + 0.5rem),
      /* Column 8 */
      var(--colour-info) calc(#{$colWidth*8} - 0.5rem), transparent calc(#{$colWidth*8} - 0.5rem), 
      transparent calc(#{$colWidth*8} + 0.5rem), var(--colour-info) calc(#{$colWidth*8} + 0.5rem),
      /* Column 9 */
      var(--colour-info) calc(#{$colWidth*9} - 0.5rem), transparent calc(#{$colWidth*9} - 0.5rem), 
      transparent calc(#{$colWidth*9} + 0.5rem), var(--colour-info) calc(#{$colWidth*9} + 0.5rem),
      /* Column 10 */
      var(--colour-info) calc(#{$colWidth*10} - 0.5rem), transparent calc(#{$colWidth*10} - 0.5rem), 
      transparent calc(#{$colWidth*10} + 0.5rem), var(--colour-info) calc(#{$colWidth*10} + 0.5rem),
      /* Column 11 */
      var(--colour-info) calc(#{$colWidth*11} - 0.5rem), transparent calc(#{$colWidth*11} - 0.5rem), 
      transparent calc(#{$colWidth*11} + 0.5rem), var(--colour-info) calc(#{$colWidth*11} + 0.5rem),
      /* Column 12 */
      var(--colour-info) calc(#{$colWidth*12} - 0.5rem), transparent calc(#{$colWidth*12} - 0.5rem), 
      transparent calc(#{$colWidth*12} + 0.5rem), var(--colour-info) calc(#{$colWidth*12} + 0.5rem),
      /* gutter */
      var(--colour-info) calc(100% - 0.5rem), transparent calc(100% - 0.5rem)
      );
    }
  
}
</style>

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/spacing-header.png'
import Tabs from '../../../src/components/Tabs/Tabs.vue'
import Tab from '../../../src/components/Tabs/Tab.vue'

export default {
  components: {
    DSHeader,
    Tabs,
    Tab
  },
  data: function () {
    return {
      headerImg: headerImg
    }
  }
}
</script>
