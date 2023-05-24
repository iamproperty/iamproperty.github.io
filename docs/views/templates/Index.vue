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
    Card
  },
  data () {
    return {
      pages: templates
    }
  }
}
</script>
