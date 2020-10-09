<template>
  <div>
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
</template>

<script>
import { fetchProperty } from '~/api'
import PropertyTaskIntro from '@/components/PropertyTaskIntro/PropertyTaskIntro.vue'

export default {
  components: {
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
