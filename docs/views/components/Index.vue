<template>
  <div class="container">
    <h1>Components</h1>
    <p>Configurable re-usable parts that build up a page.</p>
    <nav>
      <ul>
        <li v-for="(page) in pages" :key="page.path"><router-link :to="'/components/'+page.path">{{page.name}}</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {routes} from '../../router/index.js';

const components = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/components") {
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
      pages: components
    }
  }
}
</script>
