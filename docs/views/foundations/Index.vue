<template>
  <div class="container">
    <h1>Foundations</h1>

    <nav>
      <ul>
        <li v-for="(page) in pages" :key="page.path"><router-link :to="'/foundations/'+page.path">{{page.name}}</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script>
import {routes} from '../../router/index.js';

const foundations = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/foundations") {
    arr = route.children;

    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        acc.push(route);
      }
      return acc
    }, [])

    arr = children
  }
  return arr
}, {})

export default {
  data () {
    return {
      pages: foundations
    }
  }
}
</script>
