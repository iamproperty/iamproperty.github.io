<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Search</h1>
    </DSHeader>

    <p class="lead">
      The search select field is an interactive element typically used in forms to allow users to filter a list of
      predefined options and select one of those options.
    </p>

    <p>The options are presented in a browser default drop-down menu when the field clicked or tapped.</p>

    <p>
      Search selects are useful when there are a lot of options in the list. The search functionality makes it simpler
      for the user to find the desired option quicker than a standard select.
    </p>

    <div class="container visualtest">
      <Search>
        <label
          >Property address
          <span>
            <input type="text" name="client" autocomplete="off" aria-autocomplete="none" list="properties" />
            <span class="suffix fa-regular fa-chevron-down"></span>
          </span>
        </label>
        <datalist id="properties">
          <option value="1 Oak Road, Newcastle upon Tyne, NE2 6TY"></option>
          <option value="4 Beach Avenue, Newcastle upon Tyne, NE6 9PO"></option>
          <option value="4 Main Street, Newcastle upon Tyne, NE4 9JK"></option>
          <option value="6 Oak Ridge, Newcastle upon Tyne, NE1 1DU"></option>
          <option value="13 Oak Lane, Newcastle upon Tyne, NE3 6GH"></option>
          <option value="14 Main Road, Newcastle upon Tyne, NE1 6TU"></option>
        </datalist>
      </Search>
    </div>

    <h2 class="mt-4">Behaviour</h2>
    <ul>
      <li>
        Selecting the field should activate the dropdown and set the field to active so the user can begin typing.
      </li>
      <li>Selecting the field on mobile should show both the dropdown and keyboard.</li>
      <li>All valid options from the pre-defined list should be shown in the dropdown below.</li>
      <li>Typing in the field should begin filtering options that match the term in the dropdown.</li>
      <li>Selecting an option should add that value to the field and close the dropdown.</li>
      <li>[data-url] is used for the endpoint address</li>
      <li>A datalist can be added to provide search values before calling the endpoint</li>
      <li>
        Dynamic events can be added to enhance functionalitity i.e. triggering the parent form to submit when a datalist
        value is selected
      </li>
      <li>
        [data-schema] & [data-value-schema] & [data-display-schema] can be used to change the values used from the
        endpoint
      </li>
      <li>Typing in 3 characters will trigger an ajax call, the same call can't be made twice</li>
      <li>The ajax call will populate the datalist with new items and will not remove existing items</li>
      <li>A second hidden input field is created to hide values like ID's</li>
      <li>We should be allowed to submit the form unless data-prevent-submit is set.</li>
    </ul>

    <h2 class="mt-5">Ajax example</h2>

    <div class="container visualtest">
      <form novalidate method="GET" id="search-property">
        <Search data-url="/existing.json?search=" data-prevent-submit>
          <label
            >Search existing transactions
            <span>
              <input type="text" name="client" autocomplete="off" aria-autocomplete="none" required />
              <span class="suffix fa-regular fa-search"></span>
            </span>
          </label>
          <datalist id="properties"></datalist>
        </Search>
        <button class="d-none btn btn-primary">Submit</button>
      </form>
    </div>

    <h2 class="mt-5">Grouped results</h2>
    <p>
      If the API JSON values are returned as a key value pair object instead of an array the keys are then used as a
      prefix for the results. This gives the user some more context for the results.
    </p>
    <div class="container visualtest">
      <form novalidate method="GET" id="search-iamsold">
        <Search
          data-url="/iamsold.json?search="
          data-value-schema="url"
          data-display-schema="title"
          data-schema="data.results"
        >
          <label
            >Search existing transactions
            <span>
              <input
                type="text"
                name="url"
                id="search-url"
                autocomplete="off"
                aria-autocomplete="none"
                required
                data-change-events='[
                  {"in-list":"#iamsold-pages", "target": "#search-url", "if": "openLink"}
                  ]'
                list="iamsold-pages"
              />
              <button class="suffix me-0 mb-0"><i class="fa-regular fa-search"></i></button>
            </span>
          </label>

          <datalist id="iamsold-pages"></datalist>
        </Search>
      </form>
    </div>

    <div class="container pt-5">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h3>Web component</h3></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h3>Vue component</h3></summary>
          <VueReadme></VueReadme>
        </details>
      </Tabs>
    </div>

    <div class="bg-light version-control mt-5">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>V1 added</td>
              <td>18.03.2024</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/select.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @use '../../../assets/sass/func' as *;
</style>

<script>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Table from '@/components/Table/Table.vue';
  import Search from '@/components/Search/Search.vue';
  import VueReadme from '@/components/Multiselect/README.md';
  import WebReadme from '~/ts/components/multiselect/README.md';

  export default {
    components: {
      DSHeader,
      headerImg,
      Tabs,
      Table,
      Search,
      VueReadme,
      WebReadme,
    },
    data() {
      return {
        headerImg: headerImg,
      };
    },
    mounted() {
      this.$nextTick(function () {});
    },
  };
</script>
