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

    <div class="container pb-5">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Primary state</p>
          <SplitButton>
            <button class="btn btn-primary"><i class="fa-solid fa-reply"></i> Primary action</button>
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
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Small version</p>
          <SplitButton>
            <button class="btn btn-primary btn-sm">Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
      </div>
    </div>

    <div class="container pb-0">
      <h3>Secondary</h3>
      <p>
        Use a secondary split button to add related actions to a secondary action on a page. It can either be paired
        alongside a primary button on used on it’s own to support a secondary actions for the user.
      </p>

      <p>
        A filter overlay of 85% brightness will be applied to the default states for the active state.
      </p>

      <p>
        The menu should open to the below and to the right by default but should change position depending on screen
        space available. The menu should be able to be dismissed by clicking anywhere outside the menu
      </p>

      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Secondary state</p>
          <SplitButton variant="secondary">
            <button class="btn btn-secondary">Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative action 2</button>
          </SplitButton>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Disabled state</p>
          <SplitButton variant="secondary">
            <button class="btn btn-secondary" disabled>Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Small version</p>
          <SplitButton variant="secondary">
            <button class="btn btn-secondary btn-sm">Primary action</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
            <button class="split-menu-btn" slot="menu-item">Alternative</button>
          </SplitButton>
        </div>
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
      SplitButton,
    },
    data() {
      return {
        headerImg: headerImg,
      };
    },
  };
</script>
