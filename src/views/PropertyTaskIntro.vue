<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-2">
        <side-bar></side-bar>
      </div>
      <div class="col-sm-12 col-md-9">
        <section class="mb5">
              <h3>Property Task Intro</h3>
              <hr>
              <property-task-intro></property-task-intro>
          </section>
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from '@/components/SideBar.vue'
import PropertyTaskIntro from '@/components/PropertyTaskIntro.vue'

export default {
  components: {
    SideBar,
    PropertyTaskIntro
  }
}

</script>

<style scoped>
  .component-contents li {
    display:block;
    margin-bottom: 10px;
  }
</style>
