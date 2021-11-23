<template>
  <main>
    <CardDeck :items="pages" cardtype="quick" :smcols="2">
      <h1>Form elements</h1>
    </CardDeck>
  </main>
</template>

<script>
import CardDeck from '@/components/CardDeck/CardDeck.vue'
import {routes} from '../../router/index.js';

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
        acc.push(route);
      }
      return acc
    }, [])

    arr = children
  }
  return arr
}, {})


const formElements = elements.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "form") {
    arr = route.children;

    console.log('array:' +arr)
    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        route.link = '/elements/form/'+route.path;
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
      pages: formElements
    }
  }
}
</script>
