<script setup>
  import Card from '@/components/Card/Card.vue';
  import routes from '../../routes.ts';

  const patterns = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/patterns') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/patterns/' + route.path;
          route.title = route.name;
          route.content = '';
          acc.push(route);
        }
        return acc;
      }, []);

      arr = children;
    }
    return arr;

  }, {});
  const templates = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/templates') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/templates/' + route.path;
          route.title = route.name;
          route.content = '';
          acc.push(route);
        }
        return acc;
      }, []);

      arr = children;
    }
    return arr;
  }, {});

</script>

<template>
  <main>

    <h1 class="visually-hidden">Pattens and templates</h1>

    <h2 class="pt-4 h1">Patterns</h2>
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="item in patterns">
          <a :href="item.link">
            <Card>
              {{ item.title }}
              <span v-if="item.content" v-html="item.content"></span>
            </Card>
          </a>
        </div>
      </div>

    <h2 class="pt-4 h1">Templates</h2>
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="item in templates">
          <a :href="item.link">
            <Card>
              {{ item.title }}
              <span v-if="item.content" v-html="item.content"></span>
            </Card>
          </a>
        </div>
      </div>

  </main>
</template>
