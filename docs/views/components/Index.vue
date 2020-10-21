<template>
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
      <li>
        <router-link to="/components/vendor-table">Vendor Table</router-link>
        - Flexible table component for displaying vendor information
      </li>
    </ul>
  </section>
</template>

<style scoped>
.component-contents li {
  display: block;
  margin-bottom: 10px;
}
</style>
