<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Tables (BETA)</h1>
    </DSHeader>

    <div class="container">
      <h2>Tables component</h2>
      <p>The basic styles and behaviour of tables can be upgraded by using the design system table component.</p>
      <a href="/components/tables" class="btn btn-primary">Tables component</a>
    </div>
  </main>
</template>

<script>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import mobileImg from '../../img/mobile.png';
  import tabletDesktopImg from '../../img/tablet-desktop.png';
  import Tabs from '../../../src/components/Tabs/Tabs.vue';
  import Tab from '../../../src/components/Tabs/Tab.vue';

  export default {
    name: 'TypeDoc',
    components: {
      DSHeader,
      Tabs,
      Tab,
    },
    data: function () {
      return {
        headerImg: headerImg,
        mobileImg: mobileImg,
        tabletDesktopImg: tabletDesktopImg,
      };
    },
  };
</script>
