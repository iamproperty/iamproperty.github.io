<template>
  <div class="container pt-3">
    <h1>Prototypes</h1>
    <ul>
      <li v-for="(value,index) in pages" :key="index"><a :href="value.link">{{value.title}}</a></li>
    </ul>
  </div>
</template>
<script>
import routes from '../../routes.ts';

const prototypepages = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/prototype") {
    arr = route.children;

    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        route.link = '/prototype/'+route.path;
        route.title = route.name;
        route.content = '';
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
      pages: prototypepages
    }
  }
}
</script>
