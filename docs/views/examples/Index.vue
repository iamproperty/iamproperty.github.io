<template>
  <main>
    <div class="container">
      <h1>Examples</h1>
      <p>A series of examples of how the components can be used and integrated into apps.</p>
      <h2 id="tables">Advanced Tables</h2>
      <ul>
        <li><a href="/examples/filter-by-age">Filter by age</a></li>
        <li><a href="/examples/charts">Charts</a></li>
      </ul>
      <h2 id="card-decks">Card decks</h2>
      <ul>
        <li><a href="/examples/related-cards">Related cards</a></li>
        <li><a href="/examples/insight-cards">Featured insights</a></li>
        <li><a href="/examples/news-promo-cards">News promo cards</a></li>
      </ul>
      <h2 id="carousels">Carousels</h2>
      <ul>
        <li><a href="/examples/news-promo-cards">News promo cards</a></li>
        <li><a href="/examples/logo-carousel">Logo carousel</a></li>
        <li><a href="/examples/stats-carousel">Stats carousel</a></li>
      </ul>
    </div>
    <div class="container">
      <h2 class="h1">Full page examples</h2>
      <ul>
        <li v-for="(value,index) in standalonepages" :key="index"><a :href="value.link" target="_blank">{{value.title}}</a></li>
      </ul>
    </div>
  </main>
</template>

<script>
import routes from '../../routes.ts';

const standalonepages = routes.reduce(function (arr, route) {
  // Find the correct group
  if (route.path === "/standalone") {
    arr = route.children;

    const children = route.children.reduce(function (acc, route) {
      // Remove the index
      if (route.path) {
        route.link = '/standalone/'+route.path;
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
  data () {
    return {
      standalonepages: standalonepages
    }
  }
}
</script>
