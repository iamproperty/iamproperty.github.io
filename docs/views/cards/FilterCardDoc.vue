<script setup>
  import FilterCard from '@/components/FilterCard/FilterCard.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';

  import { filtercard as events } from '../../events.js';
</script>
<template>
  <TrackEvents selector="iam-filter-card" :events="['select-card', 'unselect-card']"></TrackEvents>

  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Filter Cards</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">
        Filter cards can be used to better display key data sets or information that when selected will provide the user
        with a outcome or set of results.
      </p>

      <h2>Numerical filter card</h2>
      <p>
        Numerical filter card display a figure on left and text applying to that numerical value next to it. The
        coloured block on the left of the card can have a primary or a status colour (red, amber, green), the ‘active’
        state outline needs to apply the same colour used on the left of the card.
      </p>
    </div>
    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-non/e">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <button>
            <FilterCard data-total="14">Due diligence incomplete</FilterCard>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <button>
            <FilterCard class="card--filter hover" data-total="14">Due diligence incomplete</FilterCard>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <button>
            <FilterCard class="card--filter active" data-total="14">Due diligence incomplete</FilterCard>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Selected State</span>
          <button>
            <FilterCard class="card--filter checked" data-total="14">Due diligence incomplete</FilterCard>
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Text and icon filter card</h2>
      <p>
        This filter card provides user with a visual aid (icon) as well as a text label to ensure the user gains a
        quicker understanding of the filter card subject. This card can also apply a drop shadow with a default colour
        of HEX #000000, 6px Y-axis and 12px blur with an opacity of 15%.
      </p>
    </div>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <button class="d-inline-block">
            <FilterCard><i class="fa fa-house"></i>Character property</FilterCard>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <button class="d-inline-block">
            <FilterCard class="hover"><i class="fa fa-house"></i>Character property</FilterCard>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <button class="d-inline-block">
            <FilterCard class="active"><i class="fa fa-house"></i>Character property</FilterCard>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Checked State</span>
          <button class="d-inline-block">
            <FilterCard class="checked"><i class="fa fa-house"></i>Character property</FilterCard>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Checked State</span>
          <label class="d-inline-block">
            <input type="checkbox" name="property" />
            <FilterCard><i class="fa fa-house"></i>Character property</FilterCard>
          </label>
        </div>
      </div>
    </div>

    <h2>Coloured filter cards with flags</h2>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <button>
            <FilterCard data-total="14" class="colour-danger card--flag">Due/Overdue</FilterCard>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <button>
            <FilterCard data-total="7" class="colour-warning card--flag">Upcoming</FilterCard>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <button>
            <FilterCard data-total="14" class="colour-success card--flag">On track</FilterCard>
          </button>
        </div>
      </div>
    </div>

    <Integration component="FilterCard" componentName="iam-filter-card">
      <template #web-component>
        <pre><code>{{`<button><iam-filter-card data-total="14">Due diligence incomplete</iam-filter-card></button>
        
<label>
  <input type="checkbox" value="on" name="test" />
  <iam-filter-card data-total="14">Due diligence incomplete</iam-filter-card>
</label>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import FilterCard from '@/components/FilterCard/FilterCard.vue</script>
        
<button><FilterCard data-total="14">Due diligence incomplete</FilterCard></button>
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
              <th>data-img</th>
              <td>-</td>
              <td>String (file location)</td>
              <td>No</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #slots>
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default (body)</th>
              <td>The default slot adds content to the body of the card.</td>
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
              <th>.colour-{var}</th>
              <td>To create the status card look a clour needs to be defined via a colour class.</td>
            </tr>
            <tr>
              <th>.card--flag</th>
              <td>Adds a flag to the right hand corner of the flag</td>
            </tr>
          </tbody>
        </table>
      </template>
      <template #parts>
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>body</th>
              <td>The main content of the card</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #vars>
        <table>
          <thead>
            <tr>
              <th>Var</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>--card-left-padding</th>
              <td>Controls the padding of all the parts, the card head image ignores this.</td>
            </tr>
            <tr>
              <th>--card-right-padding</th>
              <td>Controls the padding of all the parts, the card head image ignores this.</td>
            </tr>
            <tr>
              <th>--card-head-height</th>
              <td>Controls the height of the head.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #dispatched-events>
        <span v-html="events"></span>
      </template>

      <template #criteria>
        <ul>
          <li>On click the active state needs to be toggled</li>
        </ul>
      </template>
      <template #data-layer>
        
        <span v-html="events"></span>
      </template>
    </Integration>
    <Versions pdf="/pdfs/cards.pdf">
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
            <td>14.06.2023</td>
            <td>
              Inclusion of a Features card<br />
              Inclusion of Status navigation card<br />
              Inclusion of card ‘modes’ - light mode, dark mode and high contrast
            </td>
          </tr>
          <tr>
            <td>V1 added</td>
            <td>19.05.2023</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>
