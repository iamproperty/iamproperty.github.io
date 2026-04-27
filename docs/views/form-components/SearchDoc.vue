<script setup lang="ts">
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import Tabs from '@/components/Tabs/Tabs.vue';

  import Search from '@/components/Search/Search.vue';
  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';
  import searchAnatomy from '../../img/search-anatomy.png';
  import styleisedSearchAnatomy from '../../img/stylised-search-anatomy.png';
</script>

<template>
  <TrackEvents
    selector="iam-carousel"
    :events="['pip-clicked', 'next-clicked', 'prev-clicked', 'slider-changed']"
  ></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Search</h1>
    </DSHeader>

    <h2>Standard search</h2>
    <p class="lead">The search field is an element typically used in forms, tables to filter data.</p>

    <h3>Anatomy</h3>

    <p>Search uses an the existing input field (with suffix) with two optional features.</p>

    <img :src="searchAnatomy" class="mb-5" />

    <ul class="mb-5">
      <li>Input field (with suffix)</li>
      <li>Browser default popover</li>
      <li>Clear field button - compact quiet action button</li>
    </ul>

    <h3>Behaviour</h3>

    <p>The field should be able to trigger the search in one of three ways:</p>
    <ul class="mb-3">
      <li><strong>Automatically:</strong> typing automatically triggers the search and updates the results</li>
      <li><strong>Manually:</strong> pressing enter/clicking search icon, or tabbing away from search</li>
      <li>
        <strong>After delay:</strong> after a certain amount of characters have been entered or after a specified amount
        of time
      </li>
    </ul>

    <p>The user should be able to clear the field via the clear field icon.</p>

    <p>
      There is an optional feature of searches to include a browser default popover that presents any valid or suggested
      values that the user can click to fill the search field.
    </p>

    <div class="container visualtest">
      <div class="md-col-end-5 mb-4">
        <span class="d-block pb-2">DEFAULT</span>
        
          <label
            >Property address
            <Search class="">
              <input type="text" name="client" autocomplete="off" aria-autocomplete="none" list="properties" />
              <datalist id="properties">
                <option value="1 Oak Road, Newcastle upon Tyne, NE2 6TY"></option>
                <option value="4 Beach Avenue, Newcastle upon Tyne, NE6 9PO"></option>
                <option value="4 Main Street, Newcastle upon Tyne, NE4 9JK"></option>
                <option value="6 Oak Ridge, Newcastle upon Tyne, NE1 1DU"></option>
                <option value="13 Oak Lane, Newcastle upon Tyne, NE3 6GH"></option>
                <option value="14 Main Road, Newcastle upon Tyne, NE1 6TU"></option>
              </datalist>
            </Search>
          </label>
      </div>

      <div class="md-col-end-5 mb-4">
        <span class="d-block pb-2">DEFAULT</span>
        
          <label
            >Property address
            <Search class="">
              <input type="text" name="client" autocomplete="off" aria-autocomplete="none" list="properties" />
              <datalist id="properties">
                <option value="1 Oak Road, Newcastle upon Tyne, NE2 6TY"></option>
                <option value="4 Beach Avenue, Newcastle upon Tyne, NE6 9PO"></option>
                <option value="4 Main Street, Newcastle upon Tyne, NE4 9JK"></option>
                <option value="6 Oak Ridge, Newcastle upon Tyne, NE1 1DU"></option>
                <option value="13 Oak Lane, Newcastle upon Tyne, NE3 6GH"></option>
                <option value="14 Main Road, Newcastle upon Tyne, NE1 6TU"></option>
              </datalist>
            </Search>
          </label>
      </div>
    </div>

    <h2 class="mt-5">Ajax example</h2>

    <div class="container visualtest">
      <form novalidate method="GET" id="search-property">
          <label
            >Search existing transactions
            <Search data-url="/existing.json?search=" data-prevent-submit>
              <input type="text" name="client" autocomplete="off" aria-autocomplete="none" list="properties3" />
              <datalist id="properties3"></datalist>
            </Search>
            <span class="hint-text">Enter 3 or more characters</span>
          </label>
        <button class="d-none btn btn-primary">Submit</button>
      </form>
    </div>

    <h2 class="mt-5">Grouped results</h2>
    <p>
      If the API JSON values are returned as a key value pair object instead of an array the keys are then used as a
      prefix for the results. This gives the user some more context for the results.
    </p>
    <div class="container visualtest mb-5">
      <form novalidate method="GET" id="search-iamsold">
        
          <label
            >Search existing transactions
            
            <Search
              data-url="/iamsold.json?search="
              data-value-schema="url"
              data-display-schema="title"
              data-schema="data.results"
            >
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
              <button class="suffix me-0 mb-0 fa-regular fa-search" title="Search"></button>
                
              <datalist id="iamsold-pages"></datalist>
            </Search>
          </label>

      </form>
    </div>

    <h2 class="pt-5">Stylised search</h2>

    <p>The stylised search field is an element typically used in admin panels, navigation menus and as a standalone field within a page.</p>

    <label><span class="visually-hidden">Search existing transactions</span>
            
      <Search class="search--stylised mt-0">
        <input
          type="text"
          name="url"
          id="style-url"
          autocomplete="off"
          aria-autocomplete="none"
          list="style-pages"
          placeholder="Search all learning articles"
          class="input--sm box-shadow"
        />
        <button class="suffix me-0 mb-0 fa-regular fa-search" title="Search"></button>
          
        <datalist id="style-pages">
          <option value="1 Lake Avenue, Newcastle upon Tyne, NE2 2TB"></option>
          <option value="12 Oak Road, Newcastle upon Tyne, NE3 4QT"></option>
          <option value="3 Peach Avenue, Newcastle upon Tyne, NE1 1PO"></option>
        </datalist>
      </Search>
    </label>

    <h3 class="pt-5">Anatomy</h3>

    <p>Stylised search uses the same behaviours as the standard search but is styled in a more visually appealing way. The stylised search also comes with the option to include a drop shadow into the field.</p>
    
    <img :src="styleisedSearchAnatomy" class="mb-5" />

    <ol class="mb-5">
      <li>Input field (with optional drop shadow )</li>
      <li>Browser default popover</li>
      <li>Clear field button - compact quiet action button</li>
    </ol>

    <h3>Behaviour</h3>

    <p>The field should be able to trigger the search in one of three ways:</p>

    <ul class="mb-5">
      <li><strong>Automatically:</strong> typing automatically triggers the search and updates the results</li>
      <li><strong>Manually:</strong> pressing enter/clicking search icon, or tabbing away from search</li>
      <li><strong>After delay:</strong> after a certain amount of characters have been entered or after a specified amount of time</li>
    </ul>

    <p>The user should be able to clear the field via the clear field icon.</p>

    <p>There is an optional feature of searches to include a browser default popover that presents any valid or suggested values that the user can click to fill the search field.</p>

    <h3>Sizes</h3>

    <p>The field is available in three different sizes:</p>

    <ul class="mb-5">
      <li><strong>Default:</strong> this has the field height of 48px (3rem)</li>
      <li><strong>Small:</strong> this has the field height of 40px (2.5rem)</li>
      <li><strong>Compact:</strong> this follows the same height and sizing of the compact buttons with the ability to show the full field upon pressed.</li>
    </ul>

    

    <Integration component="search" componentName="search">
      <template #web-component>
        <pre><code>{{`<iam-search data-url="/existing.json?search=" data-prevent-submit="">
  <label>Search existing transactions <span><input type="hidden" name="client" autocomplete="off" aria-autocomplete="none" required=""><input type="text" name="clientAlt" autocomplete="off" aria-autocomplete="none" required=""><span class="suffix fa-regular fa-search" aria-hidden="true"></span></span></label>
  <datalist id="properties"></datalist>
</iam-search>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Search from '@/components/Search/Search.vue</script>

<Search data-url="/existing.json?search=" data-prevent-submit="">
  <label>Search existing transactions <span><input type="hidden" name="client" autocomplete="off" aria-autocomplete="none" required=""><input type="text" name="clientAlt" autocomplete="off" aria-autocomplete="none" required=""><span class="suffix fa-regular fa-search" aria-hidden="true"></span></span></label>
  <datalist id="properties"></datalist>
</Search>
`}}</code></pre>
      </template>

      <template #attr>
        <table>
          <thead>
            <tr>
              <th>Attributes</th>
              <th>Default</th>
              <th>Options/Type</th>
              <th>Required</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>data-url</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>The URL endpoint used to populate the the datalist</td>
            </tr>
            <tr>
              <th>data-schema</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>How the endpoint should be read</td>
            </tr>
            <tr>
              <th>data-value-schema</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>How the endpoint should save the data as a value</td>
            </tr>
            <tr>
              <th>data-display-schema</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>How the endpoint should display the data</td>
            </tr>
            <tr>
              <th>data-prevent-submit</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>Stop the form from submitting so the Ajax can be used instead</td>
            </tr>
          </tbody>
        </table>
      </template>

      
      <template #classes>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>.search--stylised</th>
              <td>Turns the search component into the stylised varient.</td>
            </tr>
            <tr>
              <th>.input--sm</th>
              <td>Add class straight to the input element. This will reduce the size of the input field.</td>
            </tr>
            <tr>
              <th>.box-shadow</th>
              <td>Add class straight to the input element. Adds a box-shadow to the input.</td>
            </tr>
          </tbody>
        </table>
      </template>


      <template #criteria>
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
            Dynamic events can be added to enhance functionalitity i.e. triggering the parent form to submit when a
            datalist value is selected
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
      </template>

      <template #dispatched-events>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>value-change</th>
              <td>When a user selects an option from the filtered dropdown</td>
              <td>{ detail: { value: 'input value' } }</td>
            </tr>
          </tbody>
        </table>
      </template>

    </Integration>

    <Versions pdf="/pdfs/search.pdf">
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
            <td>V2 added</td>
            <td>16.04.2026</td>
            <td>Inclusion of stylised search field - giving an option for displaying search in none data entry settings</td>
          </tr>
          <tr>
            <td>V1 added</td>
            <td>21.05.2025</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>

<style lang="scss" scoped>
  @use '../../../assets/sass/func' as *;
</style>
