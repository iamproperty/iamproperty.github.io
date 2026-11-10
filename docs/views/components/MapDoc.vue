<script setup>
  import TrackEvents from '../TrackEvents.vue';
  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import Map from '@/components/Map/Map.vue';

</script>
<template>
  <TrackEvents selector="iam-menu" :events="['open', 'closed']"></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Map</h1>
    </DSHeader>

    <p class="lead">This component uses a third party plugin called MapLibre. This document outlines styling guides for key customisable features within this plugin.</p>

    <p class="note mb-5"><strong>Note:</strong> This component currently only supports MapLibre GL JS, but may support other map libraries in the future.</p>

    <h2>Clusters</h2>

    <p><strong>Definition:</strong> A cluster is a visual grouping of multiple geographically related items displayed as a single
    representation on a map. Clustering is used to reduce visual congestion and make the distribution and density of
    items easier to understand, particularly when the map is viewed at a wider geographic scale.</p>

    <p>The composition and position of clusters are dynamic and dependent on the current map zoom level and
    viewport. As the user changes the zoom level, clusters should automatically recalculate and adjust to represent
    the appropriate level of geographic detail.</p>

    <h3 class="h4">Behaviour:</h3>

    <p><strong>Zoomed-out view:</strong> Items that are geographically close to one another are grouped into larger clusters. A cluster represents multiple underlying items and displays an item count or other appropriate summary information.</p>

    <p><strong>Zooming in:</strong> As the user zooms in, clusters should progressively break apart into smaller clusters. Items become more geographically distinct, allowing the user to understand their relative distribution with greater accuracy.</p>

    <p><strong>Further zooming:</strong> Continued zooming causes clusters to become smaller and contain fewer items. The position of each cluster should increasingly reflect the actual geographic location of the items it represents.</p>

    <p><strong>Street/road-level view:</strong> At a sufficiently detailed zoom level, clustering should no longer be necessary for items that can be displayed without significant visual overlap. The cluster should therefore break apart into individual item pins, with each pin positioned at the item's specific geographic location.</p>

    <p><strong>Zooming out:</strong> The behaviour works in reverse. Individual pins and smaller clusters should progressively combine into larger clusters as the available map area represents a wider geographic region.</p>

    <p><strong>Dynamic recalculation:</strong> Clusters should be recalculated whenever the map zoom level or viewport changes, ensuring that the displayed groupings remain relevant to the current level of geographic detail.</p>

    <p><strong>Cluster count:</strong> Where applicable, a cluster should communicate the number of items it represents, enabling users to understand the density of items without needing to zoom in.</p>

    <h3 class="h4">Cluster colour rules</h3>

    <p class="pb-3">100% or under of the total pin count uses the blue colour tint at 100% which is HEX code: <code>#1EBEE6</code></p>

    <Map class="mb-3" data-min-zoom="7" data-max-zoom="7" data-latitude="51.83329197768114" data-longitude="-1.8210078623922072">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Date listed</th>
            <th>Current list price</th>
            <th>Branch</th>
            <th>Weeks on market</th>
            <th>Latest fall through</th>
            <th>Latest price reduction</th>
            <th>Price reduction %</th>
            <th>Listed agent</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr data-latitude="51.5074" data-longitude="-0.1278" v-for="(index) in 130" :key="index">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>
        </tbody>
      </table>
    </Map>

    <p>50% or under of the total pin count uses the blue colour tint at 70% which is HEX code: <code>#62D2EE</code></p>

    <Map class="mb-3" data-min-zoom="9" data-max-zoom="9" data-latitude="51.39886759238951" data-longitude="0.19681409782481296" data-debug>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Date listed</th>
            <th>Current list price</th>
            <th>Branch</th>
            <th>Weeks on market</th>
            <th>Latest fall through</th>
            <th>Latest price reduction</th>
            <th>Price reduction %</th>
            <th>Listed agent</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr data-latitude="51.461045708412314" data-longitude="0.13943767971315424" v-for="(index) in 38" :key="index">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>
          <tr data-latitude="51.43433027431908" data-longitude="0.027298488085136796" v-for="(index) in 42" :key="index">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>
          <tr data-latitude="51.38379096888198" data-longitude="-0.038619480664863204" v-for="(index) in 10" :key="index">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>
          <tr data-latitude="51.39493154648372" data-longitude="0.17286733574016466" v-for="(index) in 40" :key="index">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>
        </tbody>
      </table>
    </Map>

    <p>25% or under of the total pin count uses the blue colour tint at 30% which is HEX code: <code>#BCECF8</code></p>

    <Map class="mb-3" data-min-zoom="14" data-max-zoom="14" data-latitude="51.4199752907065" data-longitude="0.015608965961405374" data-debug>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Date listed</th>
            <th>Current list price</th>
            <th>Branch</th>
            <th>Weeks on market</th>
            <th>Latest fall through</th>
            <th>Latest price reduction</th>
            <th>Price reduction %</th>
            <th>Listed agent</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr data-latitude="51.423097966054485" data-longitude="0.021120657929742492" v-for="(index) in 7" :key="index">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>

          <tr data-latitude="51.420849006631215" data-longitude="0.015587351482508893" v-for="(index) in 10" :key="index">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>

          <tr data-latitude="51.41977069916413" data-longitude="0.019342095143230154" v-for="(index) in 8" :key="index">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>

          <tr data-latitude="51.42089481780846" data-longitude="0.02503156623055247" v-for="(index) in 12" :key="index">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>

          <tr data-latitude="51.41771005566835" data-longitude="0.013573169319101908" v-for="(index) in 12" :key="index">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>

        </tbody>
      </table>
    </Map>

    <h2>Pin display</h2>

    <p>When the user zooms into the map to street-level detail, properties should transition from being represented within clusters to being displayed as individual map pins.</p>
    <p class="pb-1">At this level of zoom:</p>

    <ul class="pb-3">
      <li>Each property should be represented by a distinct pin indicator.</li>

      <li>The pin should be positioned at the property's specific geographic location.</li>

      <li>Where properties are sufficiently separated, each property should have its own visible pin.</li>

      <li>As the user zooms in and out, the map should dynamically transition between clustered representations and individual property pins.</li>

      <li>Individual pins provide a more precise representation of the property's location and allow the user to identify and interact with a specific property.</li>

      <li>Where multiple properties remain too close together to be displayed clearly at the current zoom level, they may continue to be represented as a smaller cluster until a sufficient level of zoom is reached.</li>

    </ul>

    <p>The pin icon will use the ‘location-dot’ icon from the Font Awesome library and will use the info blue colour which is HEX code: <code>#1EBEE6</code></p>

    <Map class="mb-3" data-min-zoom="16" data-max-zoom="16" data-latitude="51.46773128828943" data-longitude="-0.11645048851005413" data-debug>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Date listed</th>
            <th>Current list price</th>
            <th>Branch</th>
            <th>Weeks on market</th>
            <th>Latest fall through</th>
            <th>Latest price reduction</th>
            <th>Price reduction %</th>
            <th>Listed agent</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr data-latitude="51.46702877541017" data-longitude="-0.12037120753760178">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>
          <tr data-latitude="51.467336224030646" data-longitude="-0.11552177363870442">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>
          <tr data-latitude="51.46838554393864" data-longitude="-0.11286102229553308">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>

        </tbody>
      </table>
    </Map>


    <h2>Popover information display</h2>

    <p>Upon clicking one of the pin icons, information will show in the form of a popover. If the map view is used in conjunction with a table, the information populating the popover will be taken from the row data used in the table. The information used will always use the property address as the header and any following information will stack and the cut off for a new stack of information will be after four items of information is displayed (see example below).</p>



    <Map class="mb-3" data-min-zoom="16" data-max-zoom="16" data-latitude="51.46773128828943" data-longitude="-0.11645048851005413" data-debug>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Date listed</th>
            <th>Current list price</th>
            <th>Branch</th>
            <th>Weeks on market</th>
            <th>Latest fall through</th>
            <th>Latest price reduction</th>
            <th>Price reduction %</th>
            <th>Listed agent</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr data-latitude="51.46702877541017" data-longitude="-0.12037120753760178">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>
          <tr data-latitude="51.467336224030646" data-longitude="-0.11552177363870442" data-open-popup>
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>
          <tr data-latitude="51.46838554393864" data-longitude="-0.11286102229553308">
            <td data-popup-title>59 Glen Street, NE68 3LS</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>Heaton</td>
            <td>13 weeks</td>
            <td>22/09/26</td>
            <td>£300,000</td>
            <td>5%</td>
            <td>John Smith</td>
            <td><a href="/property" target="_blank">View property</a></td>
          </tr>

        </tbody>
      </table>
    </Map>




    <Integration component="map" componentName="map">
      <template #web-component>
        <pre><code>{{`<iam-map>
  <table>...</table>
</iam-map>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Map from '@/components/Map/Map.vue</script>

<Map class="mb-3 map--lg">
  <table>...</table>
</Map>
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
              <th class="text-nowrap">data-min-zoom</th>
              <td></td>
              <td>Integer</td>
              <td>No</td>
              <td></td>
            </tr>
            <tr>
              <th class="text-nowrap">data-max-zoom</th>
              <td></td>
              <td>Integer</td>
              <td>No</td>
              <td></td>
            </tr>
            <tr>
              <th class="text-nowrap">data-latitude</th>
              <td></td>
              <td>Float</td>
              <td>No</td>
              <td>Each table row needs to have one set for the pin to be added to the map. It can also be added to the main component to set the default center</td>
            </tr>
            <tr>
              <th class="text-nowrap">data-longitude</th>
              <td></td>
              <td>Float</td>
              <td>No</td>
              <td>Each table row needs to have one set for the pin to be added to the map. It can also be added to the main component to set the default center</td>
            </tr>
            <tr>
              <th class="text-nowrap">data-popup-title</th>
              <td></td>
              <td>Flag</td>
              <td>No</td>
              <td>Needs to be added to the table cell for each row to then be displayed in the popup as the title</td>
            </tr>
          </tbody>
        </table>
      </template>

    </Integration>
    <Versions pdf="/pdfs/maplibre.pdf">
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
            <td>22.09.2026</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>

<style lang="scss" scoped>

</style>
