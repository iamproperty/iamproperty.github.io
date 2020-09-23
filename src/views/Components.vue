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
