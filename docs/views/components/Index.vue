<template>
  <main>
    <CardDeck :items="pages" cardtype="quick" :smcols="2">
      <h1>Components</h1>
      <p>Configurable re-usable parts that build up a page.</p>
    </CardDeck>
  </main>
</template>

<script>
import CardDeck from '@/components/CardDeck/CardDeck.vue'
import routes from '../../routes.ts';

const components = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/components") {
    arr = route.children;

    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        route.link = '/components/'+route.path;
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
      pages: components
    }
  }
}
</script>
