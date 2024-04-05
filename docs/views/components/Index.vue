<template>
  <main>
    <div class="container">

      <h1>Components</h1>
      
      <div class="row row-cols-1 row-cols-md-3 mb-5">

        <div v-for="item in pages">
          <a :href="item.link">
            <Card>
              {{ item.title }}
              <span v-if="item.content" v-html="item.content"></span>
            </Card>
          </a>
        </div>
      </div>


      <h2>Card components</h2>
      
      <div class="row row-cols-1 row-cols-md-3 mb-5">

        <div v-for="item in cardpages">
          <a :href="item.link">
            <Card>
              {{ item.title }}
              <span v-if="item.content" v-html="item.content"></span>
            </Card>
          </a>
        </div>
      </div>

      <h2>Navigation components</h2>

      <div class="row row-cols-1 row-cols-md-3 mb-5">

        <div v-for="item in navpages">
          <a :href="item.link">
            <Card>
              {{ item.title }}
              <span v-if="item.content" v-html="item.content"></span>
            </Card>
          </a>
        </div>
      </div>

      <h2>Notification components</h2>

      <div class="row row-cols-1 row-cols-md-3 mb-5">

        <div v-for="item in notificationspages">
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

const cardComponents = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/cards") {
    arr = route.children;

    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        route.link = '/cards/'+route.path;
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

const navComponents = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/nav") {
    arr = route.children;

    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        route.link = '/nav/'+route.path;
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

const notificationsComponents = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/notifications") {
    arr = route.children;

    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        route.link = '/notifications/'+route.path;
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
      pages: components,
      navpages: navComponents,
      notificationspages: notificationsComponents,
      cardpages: cardComponents
    }
  }
}
</script>
