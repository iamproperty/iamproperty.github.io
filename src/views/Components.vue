<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-2">
        <side-bar></side-bar>
      </div>
      <div class="col-sm-12 col-md-9">
        <section class="mb5">
              <h3>Component table of contents</h3>
              <hr>
              <ul class="component-contents">
                <li>
                  <router-link to="/components/task-title">Task Title</router-link>
                  - The task title component has a number of choices for background colours
                </li>
                <li>
                  <router-link to="/components/key-stats">Key Fact Group</router-link>
                  - Group a series of key facts together in a responsive grid
                </li>
                <li>
                  <router-link to="/components/property-task-intro">Property Task Intro</router-link>
                  - Group of property data including: address, starting bid, auction start, auction end date
                  and branch details
                </li>
              </ul>
          </section>
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    SideBar
  }
}

</script>

<style scoped>
  .component-contents li {
    display:block;
    margin-bottom: 10px;
  }
</style>
