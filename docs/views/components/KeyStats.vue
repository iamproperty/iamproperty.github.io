<template>
  <section class="mb5">
    <h3>Key Fact Group</h3>
    <hr />
    <div class="paragraph-wrap">
      <p>
        The key fact group component comprises of a maximum 6 key fact components. If the
        key fact component count is equal to 0 the colour of that item will be red.
      </p>
      <p>

      </p>
    </div>
    <br>
    <key-fact-group></key-fact-group>
    <br>
    <br>
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
            <code class="text-nowrap" translate="no">keyfacts</code>
          </td>
          <td>Object</td>
          <td>
            Up to 6 keyfact objects can be displayed.
          </td>
        </tr>
        <tr>
          <td>
            <code class="text-nowrap" translate="no">value</code>
          </td>
          <td>Number</td>
          <td>
            This value is passed into the key fact component from the <code>keyfacts</code> object
          </td>
        </tr>
        <tr>
          <td>
            <code class="text-nowrap" translate="no">label</code>
          </td>
          <td>String</td>
          <td>
            This value is passed into the key fact component from the <code>keyfacts</code> object
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import KeyFactGroup from '@/components/KeyFactGroup.vue'

export default {
  components: {
    KeyFactGroup
  }
}
</script>
