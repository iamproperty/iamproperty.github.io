<template>
  <main>
    <div class="container">
      <h1>Search results</h1>
      <p class="lead">Found {{ results.length }} results for the term '{{ searchTerm }}'</p>

      <div class="row" id="search-results">
        <div v-for="item in results">
          <a :href="`${item.path}?searchterm=${searchTerm.replace(' ', '_')}`">
            <Card>
              {{ item.name }}
              <span v-if="item.searchterms"
                ><i>{{ item.searchterms }}</i></span
              >
            </Card>
          </a>
        </div>
      </div>

      <hr />
      <p class="note mb-5 mt-3">
        <strong>Note:</strong> The search functionality works from the page titles and pre-defined search terms. If you
        feel that any search terms are missing please provide feedback to one of the Front End Guild members.
      </p>
    </div>
  </main>
</template>

<style scoped>
  a:has(iam-card) {
    min-height: calc(100% - 1.5rem);
  }

  @media screen and (min-width: 36em) {
    #search-results:has(> div:nth-child(2)) > * {
      flex: 0 0 auto;
      width: 50%;
    }
  }

  @media screen and (min-width: 62em) {
    #search-results:has(> div:nth-child(3)) > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    #search-results:has(> div:nth-child(4):last-child) > * {
      flex: 0 0 auto;
      width: 50%;
    }

    #search-results:has(> div:nth-child(6):last-child) > * {
      flex: 0 0 auto;
      width: 50%;
    }
    #search-results:has(> div:nth-child(8):last-child) > * {
      flex: 0 0 auto;
      width: 50%;
    }
  }
</style>

<script>
  import Card from '@/components/Card/Card.vue';
  import routes from '../routes.ts';

  var urlParams = new URLSearchParams(window.location.search);
  let results = [];
  let searchTerm = urlParams.get('search');
  searchTerm = searchTerm ? searchTerm.toLowerCase().trim() : '';

  routes.forEach((route) => {
    let name = route.name ? route.name : '';

    if (
      name &&
      name.toLowerCase().trim().includes(searchTerm) &&
      name != 'Search' &&
      name != 'Home' &&
      name != 'NotFound'
    )
      results.push(route);
    else if (route.searchterms && route.searchterms.includes(searchTerm)) results.push(route);

    if (route.children) {
      for (const [key, value] of Object.entries(route.children)) {
        let childName = value.name ? value.name : '';

        if (childName && childName.toLowerCase().trim().includes(searchTerm)) {
          value.path = route.path + '/' + value.path;
          results.push(value);
        } else if (value.searchterms && value.searchterms.includes(searchTerm)) {
          value.path = route.path + '/' + value.path;
          results.push(value);
        }
      }
    }
  });

  export default {
    components: {
      Card,
    },
    data() {
      return {
        searchTerm: searchTerm,
        results: results,
      };
    },
  };
</script>
