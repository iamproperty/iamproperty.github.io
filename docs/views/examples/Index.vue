<template>
  <main>
    <div class="container">
      <h1>Examples</h1>
      <p>A series of examples of how the components can be used and integrated into apps.</p>
      <h2 id="tables">Tables</h2>
      <ul class="mb-5">
        <li><a href="/examples/basic-table">Tables</a></li>
        <li><a href="/examples/no-submit-table">No Submit Tables</a></li>
        <li><a href="/examples/submit-table">Submit Tables</a></li>
        <li><a href="/examples/ajax-table">Ajax Tables</a></li>
        <li><a href="/examples/full-table">full Tables</a></li>
      </ul>
      <h2 id="tables">Actionbars</h2>
      <ul>
        <li><a href="/examples/actionbar-table">Actionbar in table</a></li>
        <li><a href="/examples/actionbar-top">Actionbar at top</a></li>
        <li><a href="/examples/actionbar-panel">Actionbar in a panel</a></li>
      </ul>
      <h2 id="tables">Pagination</h2>
      <ul>
        <li><a href="/examples/pagination">Pagination</a></li>
      </ul>
      <h2 id="charts">Charts</h2>
      <ul>
        <li><a href="/examples/barcharts">Bar Charts</a></li>
      </ul>
    </div>
    <div class="container">
      <h2 class="h1">Full page examples</h2>
      <ul>
        <li v-for="(value, index) in standalonepages" :key="index">
          <a :href="value.link" target="_blank">{{ value.title }}</a>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
  import routes from '../../routes.ts';

  const standalonepages = routes.reduce(function (arr, route) {
    // Find the correct group
    if (route.path === '/standalone') {
      arr = route.children;

      const children = route.children.reduce(function (acc, route) {
        // Remove the index
        if (route.path) {
          route.link = '/standalone/' + route.path;
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

  export default {
    data() {
      return {
        standalonepages: standalonepages,
      };
    },
  };
</script>
