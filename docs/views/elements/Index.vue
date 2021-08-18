<template>
  <div class="container">
    <h1>Elements</h1>
    <nav>
      <ul>
        <li v-for="(page) in pages" :key="page.path"><router-link :to="'/elements/'+page.path">{{page.name}}</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {routes} from '../../router/index.js';

const elements = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/elements") {
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
      pages: elements
    }
  }
}
</script>
