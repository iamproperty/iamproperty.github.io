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
              <property-task-intro
              v-for="property in properties"
              :key="property.id"
              :property="property"
            />
        </section>

        <table
            class="b-table table table-bordered table-striped bv-docs-table"
          >
            <thead class="thead-default">
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code class="text-nowrap" translate="no">property</code>
                </td>
                <td>Object</td>
                <td>
                  Requires a property object to output view data
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from '@/components/SideBar.vue'
import PropertyTaskIntro from '@/components/PropertyTaskIntro.vue'
import { fetchProperty } from '@/api'

export default {
  components: {
    SideBar,
    PropertyTaskIntro
  },
  data () {
    return {
      properties: {}
    }
  },
  created () {
    this.properties = fetchProperty()
  }
}

</script>

<style scoped>
  .component-contents li {
    display:block;
    margin-bottom: 10px;
  }
</style>
