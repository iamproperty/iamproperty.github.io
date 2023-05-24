<template>
  <main>
    <div class="container">

      <div class="row row-cols-1 row-cols-md-3">

        <div v-for="item in pages">
          <a :href="item.link">
            <Card>
              {{ item.title }}
              <span v-if="item.content" v-html="item.content"></span>
            </Card>
          </a>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
import Card from '@/components/Card/Card.vue'
import routes from '../../routes.ts';

const elements = routes.reduce(function (arr, route) {
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


const formElements = elements.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "form") {
    arr = route.children;

    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        route.link = '/components/form/'+route.path;
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
    Card
  },
  data () {
    return {
      pages: formElements
    }
  }
}
</script>
