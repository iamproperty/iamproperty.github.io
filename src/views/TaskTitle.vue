<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-2">
        <side-bar></side-bar>
      </div>
      <div class="col-sm-12 col-md-9">
        <section class="mb5">
              <h3>Task Title</h3>
              <hr>
              <div class="paragraph-wrap">
              <p>A reusable Task Title component with various combinations of brand colours to choose from.
              </p>
              </div>
              <task-title variant="punchy-mustard-bg" title="I am an even bigger heading"></task-title>
              <task-title variant="homely-aubergine" title="I Am A Heading"></task-title>
              <task-title variant="fresh-blue" title="Vendor Contact Task"></task-title>
              <task-title variant="deep-slate" title="Vendor contact task"></task-title>
              <div class="row">
                <div class="col-md-6">
                  <task-title variant="soft-green" title="Vendor contact task"></task-title>
                  <task-title variant="soft-pink" title="Vendor contact task"></task-title>
                </div>
                <div class="col-md-6">
                  <task-title variant="grey-50" title="Vendor contact task"></task-title>
                  <task-title variant="grey-70" title="Vendor contact task"></task-title>
                </div>
              </div>
              <br>
              <h4>Usage</h4>
<pre v-highlightjs><code class="javascript">&lt;task-title variant="punchy-mustard" title="I am an even bigger heading">&lt;/task-title>
&lt;task-title variant="grey-50" title="Vendor contact task">&lt;/task-title></code></pre>

          </section> <!-- End Task Title component -->
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from '@/components/SideBar.vue'
import TaskTitle from '@/components/TaskTitle.vue'

export default {
  components: {
    SideBar, TaskTitle
  }
}

</script>
