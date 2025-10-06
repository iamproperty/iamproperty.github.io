<script setup>
  import Card from '@/components/Card/Card.vue';
  import routes from '../../routes.ts';

  const elements = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/elements') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/elements/' + route.path;
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

  const linkElements = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/links') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/links/' + route.path;
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

  const formElements = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/form') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/form/' + route.path;
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

  const dialogElements = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/dialogs') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/dialogs/' + route.path;
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

  const pages = elements;
  const formpages = formElements;
  const dialogpages = dialogElements;
  const linkPages = linkElements;
</script>

<template>
  <main>
    <div class="container">
      <h1>Elements</h1>

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

      <h2>Link and button Elements</h2>

      <div class="row row-cols-1 row-cols-md-3 mb-5">
        <div v-for="item in linkPages">
          <a :href="item.link">
            <Card>
              {{ item.title }}
              <span v-if="item.content" v-html="item.content"></span>
            </Card>
          </a>
        </div>
      </div>

      <h2>Form Elements</h2>

      <div class="row row-cols-1 row-cols-md-3 mb-5">
        <div v-for="item in formpages">
          <a :href="item.link">
            <Card>
              {{ item.title }}
              <span v-if="item.content" v-html="item.content"></span>
            </Card>
          </a>
        </div>
      </div>

      <h2>Dialog Elements</h2>

      <div class="row row-cols-1 row-cols-md-3 mb-5">
        <div v-for="item in dialogpages">
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
