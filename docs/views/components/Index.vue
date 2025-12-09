<script setup>
  import Card from '@/components/Card/Card.vue';
  import routes from '../../routes.ts';

  const standardisedcomponents = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/standardised') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/standardised/' + route.path;
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

  const components = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/components') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/components/' + route.path;
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

  const cardComponents = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/cards') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/cards/' + route.path;
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

  const chartComponents = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/charts') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/charts/' + route.path;
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

  const navComponents = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/nav') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/nav/' + route.path;
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

  const notificationsComponents = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/notifications') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/notifications/' + route.path;
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

  const pages = components;
  const standardisedpages = standardisedcomponents;
  const navpages = navComponents;
  const notificationspages = notificationsComponents;
  const cardpages = cardComponents;
  const chartpages = chartComponents;
  const dialogpages = dialogElements;
</script>

<template>
  <main>
    <div class="container">
      <h1>Components</h1>

      <h2 class="pb-2">Standardised components</h2>
      <p>Our set of components with structured pre-defined content and options. While the UI components will be flexible and extendable these components will be a lot more defiend with far less options.</p>
      <div class="row row-cols-1 row-cols-md-3 mb-5">
        <div v-for="item in standardisedpages">
          <a :href="item.link">
            <Card>
              {{ item.title }}
              <span v-if="item.content" v-html="item.content"></span>
            </Card>
          </a>
        </div>
      </div>
      <h2>UI Components</h2>
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

      <h2>Chart components</h2>

      <div class="row row-cols-1 row-cols-md-3 mb-5">
        <div v-for="item in chartpages">
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
      
      <h2>Dialog components</h2>

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
