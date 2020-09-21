<template>
  <div>
    <div class="components">
      <h3>Component Library</h3>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-2">
        <side-bar></side-bar>
      </div>
      <div class="col-sm-12 col-md-9">
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
