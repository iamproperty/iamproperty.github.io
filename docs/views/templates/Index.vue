<template>
  <main>
    <CardDeck :items="pages" cardtype="quick" :smcols="2">
      <h1>Templates</h1>
    </CardDeck>
  </main>
</template>
<script>
import CardDeck from '@/components/CardDeck/CardDeck.vue'
import {routes} from '../../router/index.js';

const templates = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/templates") {
    arr = route.children;

    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        route.link = '/templates/'+route.path;
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
  components: {
    CardDeck
  },
  data () {
    return {
      pages: templates
    }
  }
}
</script>
