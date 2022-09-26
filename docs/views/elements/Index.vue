<template>
  <main>
    <CardDeck :items="pages" cardtype="quick" :smcols="2">
      <h1>Elements</h1>
    </CardDeck>
  </main>
</template>

<script>
import CardDeck from '@/components/CardDeck/CardDeck.vue'
import routes from '../../routes.ts';

const elements = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/elements") {
    arr = route.children;

    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        route.link = '/elements/'+route.path;
        route.title = route.name;
        route.content = '';
        delete route.children;
        delete route.component;
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
      pages: elements
    }
  }
}
</script>
