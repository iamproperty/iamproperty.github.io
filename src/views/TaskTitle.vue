<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-2">
        <side-bar></side-bar>
      </div>
      <div class="col-sm-12 col-md-9">
        <section class="colour-section mb5" id="color-section">
              <h3>Task Title</h3>
              <hr>
              <div class="paragraph-wrap">
              <p>Our colour palette will help us create a distinctive identity and plays an
                  important part in building brand recognition. It should be used within all
                  designs and communications.
              </p>
              <p>A combination of these colours should be used on every application although
                  it is not necessary for all colours to appear on every piece of communication.
              </p>
              <p>
                  White is an important part of our palette too. it creates the space for our
                  communications to breathe and a canvas where our colours come to life.
              </p>
              </div>
          </section> <!-- End Task Title component -->
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from '@/components/SideBar.vue'

export default {
  name: 'task-title',
  components: {
    SideBar
  }
}

</script>
