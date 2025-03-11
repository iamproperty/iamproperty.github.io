<script setup>
  import DoughnutChart from '@/components/DoughnutChart/DoughnutChart.vue';
  import DSHeader from '../DSHeader.vue';
  import Integration from '../Integration.vue';
  import TrackEvents from '../TrackEvents.vue';
  import Versions from '../Versions.vue';
  import headerImg from '../../img/cards-header.png';

  const arrColours = ['3', '4', '5', '6', '7', '8', '9', '11', '12'];
</script>

<template>
  <TrackEvents selector="iam-doughnutchart" :events="['view-change']"></TrackEvents>

  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Doughnut Charts</h1>
    </DSHeader>

    <h2>Usage</h2>
    <p>
      Doughnut charts help show proportions of categorical data and are widely used in dashboards and reports. They’re
      best uses are for showing percentages of a whole, useful for data consumption and what best with small data sets
      (10 categories max.).
    </p>

    <p>
      Doughnut charts are not ideal for large data sets as small slices can be hard to see, they are also limited to
      single category tracking so if you need to show composition across multiple categories, consider a stacked bar
      chart instead.
    </p>

    <h2>Doughnut chart anatomy</h2>

    <div class="container bg-light mb-5 visualtest">
      <div class="md-col-end-6">
        <strong class="mb-3 d-block">Vertical donut chart</strong>
        <DoughnutChart>
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Slice 1</th>
                <th>Slice 2</th>
                <th>Slice 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Properties</td>
                <td>300</td>
                <td>250</td>
                <td>250</td>
              </tr>
            </tbody>
          </table>
        </DoughnutChart>
      </div>
      <div class="md-col-start-7">
        <strong class="mb-3 d-block">Horizontal donut chart</strong>

        <DoughnutChart class="chart--horizontal chart--show-totals">
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Slice 1</th>
                <th>Slice 2</th>
                <th>Slice 3</th>
                <th>Slice 4</th>
                <th>Slice 5</th>
                <th>Slice 6</th>
                <th>Slice 7</th>
                <th>Slice 8</th>
                <th>Slice 9</th>
                <th>Slice 10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Properties</td>
                <td>300<button>Click here</button></td>
                <td>250</td>
                <td>250</td>
                <td>250</td>
                <td>50</td>
                <td>25</td>
                <td>25</td>
                <td>25</td>
                <td>25</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </DoughnutChart>
      </div>
    </div>

    <ol class="mb-5">
      <li>
        <strong>Item description:</strong> Each item description has an optional clickable function which navigates to a
        relevant page. Using the vertical version it is recommended 4 item descriptions max. With the horizontal chart
        the items will start from the centre of their contain and expand out - for example is only 2 items they will
        appear to align with the centre on the doughnut.
      </li>
      <li><strong>Slice visualisation:</strong> Slices start from the 12 o’clock position growing clockwise.</li>
      <li>
        <strong>Numerical total and label:</strong> This is an optional addition to the chart to give further context to
        the data.
      </li>
      <li>
        <strong>Item numerical amounts:</strong> This is an optional addition which can be used to communicate item
        amounts.
      </li>
    </ol>

    <h2>Layouts</h2>

    <p>
      Doughnut charts follow a 12 o’clock position which grows clockwise for a familiar reading experience. By default
      slices are sorted by value largest to smallest to make data analysis easier. There’s is a limit of 10 slices
      maximum to ensure readability - any more than that will run the risk of being too thinly sliced to see.
    </p>

    <h2>Dimensions</h2>

    <p>
      Each variant of the doughnut charts has a small, medium and large sizing at a 20% size reduction to the doughnut
      ring with each size decrease. This gives the flexibility to present data in the best way possible with various
      data sets and page layouts.
    </p>

    <h3>Large</h3>

    <div class="container visualtest">
      <div class="md-col-end-5">
        <DoughnutChart class="chart--lg">
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Slice 1</th>
                <th>Slice 2</th>
                <th>Slice 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Properties</td>
                <td>300</td>
                <td>250</td>
                <td>250</td>
              </tr>
            </tbody>
          </table>
        </DoughnutChart>
      </div>
      <div class="md-col-start-6">
        <DoughnutChart class="chart--lg chart--horizontal">
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Segment 1</th>
                <th>Segment 2</th>
                <th>Segment 3</th>
                <th>Segment 4</th>
                <th>Segment 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Properties</td>
                <td>300</td>
                <td>250</td>
                <td>250</td>
                <td>250</td>
                <td>250</td>
              </tr>
            </tbody>
          </table>
        </DoughnutChart>
      </div>
    </div>

    <h3>Medium</h3>
    <div class="container visualtest">
      <div class="md-col-end-4">
        <DoughnutChart>
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Slice 1</th>
                <th>Slice 2</th>
                <th>Slice 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Properties</td>
                <td>300</td>
                <td>250</td>
                <td>250</td>
              </tr>
            </tbody>
          </table>
        </DoughnutChart>
      </div>

      <div class="md-col-start-5">
        <DoughnutChart class="chart--horizontal">
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Segment 1</th>
                <th>Segment 2</th>
                <th>Segment 3</th>
                <th>Segment 4</th>
                <th>Segment 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Properties</td>
                <td>300</td>
                <td>250</td>
                <td>250</td>
                <td>250</td>
                <td>250</td>
              </tr>
            </tbody>
          </table>
        </DoughnutChart>
      </div>
    </div>

    <h3>Small</h3>

    <div class="container visualtest">
      <div class="md-col-end-3">
        <DoughnutChart class="chart--sm">
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Slice 1</th>
                <th>Slice 2</th>
                <th>Slice 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Properties</td>
                <td>300</td>
                <td>250</td>
                <td>250</td>
              </tr>
            </tbody>
          </table>
        </DoughnutChart>
      </div>

      <div class="md-col-start-4">
        <DoughnutChart class="chart--sm chart--horizontal">
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Segment 1</th>
                <th>Segment 2</th>
                <th>Segment 3</th>
                <th>Segment 4</th>
                <th>Segment 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Properties</td>
                <td>300</td>
                <td>250</td>
                <td>250</td>
                <td>250</td>
                <td>250</td>
              </tr>
            </tbody>
          </table>
        </DoughnutChart>
      </div>
    </div>

    <h2>Doughnut chart hover and disabled state behaviour</h2>
    <p>
      The hoverable state on all doughnut charts includes a 25% colour darken on the slice and displays key information
      regarding that particular data set. The hoverable information must line up line centrally to the width of of the
      slice but there is no fix height position of the hoverable information, it simply appears in the same position the
      user has pointed to the item with their cursor.
    </p>

    <Integration component="doughnutchart" componentName="iam-doughnutchart">
      <template #web-component>
        <pre><code>{{`<iam-doughnutchart>
  <table>
    <thead>
      <tr>
        <th>Items</th> <!-- Not visible when component loaded -->
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Item 1</td> <!-- Column/row title -->
        <td>440</td><!-- Dataset item 1 value - Value numeric, currency value and percentage  -->
        <!-- Add more cells here to represent more datasets -->
      </tr>
      <tr>
        <td>Item 2</td>
        <td>190</td>
      </tr>
      <tr>
        <td>Item 3</td>
        <td>130</td>
      </tr>
    </tbody>
  </table>
</iam-doughnutchart>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import DoughnutChart from '@/components/DoughnutChart/DoughnutChart.vue</script>
        
<DoughnutChart>
  <table>
    <thead>
      ...
    </thead>
    <tbody>
      ...
    </tbody>
  </table>
</DoughnutChart>
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
              <th>data-min</th>
              <td>0</td>
              <td>Numeric</td>
              <td>No</td>
              <td>
                The minimum value 95% of time will be 0 which is the default value. But can be overwritten with both a
                positive and negative value.
              </td>
            </tr>
            <tr>
              <th>data-max</th>
              <td>Max value of column</td>
              <td>Numeric</td>
              <td>No</td>
              <td>
                This value is not set will be calculated to be the largest individual value within the chart. Stacked
                bar charts will use the largest collective value from the groups.
              </td>
            </tr>
            <tr>
              <th>data-colour-{1-10}</th>
              <td>-</td>
              <td>warning | success | danger | {1-10}</td>
              <td>No</td>
              <td>
                The colours can be overwritten with meaningfull colours, i.e. danger for values that can be seen as a
                negative like number of bad reviews.
              </td>
            </tr>
          </tbody>
        </table>

        <p>A tooltip can be added to the xaxis label by giving it a title attribute.</p>
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
              <th>.chart--horizontal</th>
              <td>Changes the direction from vertical to horizontal</td>
            </tr>
            <tr>
              <th>.chart--show-totals</th>
              <td>displays the value of each segment within the chart key.</td>
            </tr>
            <tr>
              <th>.chart--success</th>
              <td>Changes the colour of all the bars to the global success colour.</td>
            </tr>
            <tr>
              <th>.chart--wraning</th>
              <td>Changes the colour of all the bars to the global warning colour.</td>
            </tr>
            <tr>
              <th>.chart--danger</th>
              <td>Changes the colour of all the bars to the global danger colour.</td>
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
              <th>outer</th>
              <td>
                This is the first parent div inside of the shadow dom and contains all of the chart items including key,
                y axis, x axis and the chart itself.
              </td>
            </tr>
            <tr>
              <th>wrapper</th>
              <td>
                This div is used to create a responsive aspect ratio for the chart when there is more than 10 bars.
              </td>
            </tr>
            <tr>
              <th>chart</th>
              <td>Another warpper layour which holds the chart table and the guidelines.</td>
            </tr>
            <tr>
              <th>chart-key</th>
              <td>A collection of checkboxes which are used to show or hide datasets.</td>
            </tr>
            <tr>
              <th>key</th>
              <td>The button like label for the checkbox used to show or hide the dataset.</td>
            </tr>
            <tr>
              <th>axis-label</th>
              <td>The x axis has been split out into different x-axis labels.</td>
            </tr>
            <tr>
              <th>spacer</th>
              <td>
                This is used to create extra space at the bottom via javascript which looks at the absolutely position
                x-axis labels and decides how much space needs to be created.
              </td>
            </tr>
            <tr>
              <th>popover</th>
              <td>This is the actual displayed value when the bar is hovered over.</td>
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
              <th>--chart-height</th>
              <td>The aspect ratio converted into percentage for the smaller view of the chart</td>
            </tr>
            <tr>
              <th>--chart-height-lg</th>
              <td>The aspect ratio converted into percentage for the larger view of the chart</td>
            </tr>
            <tr>
              <th>--single-key-display</th>
              <td>
                By default the chart key is only displayed when there is more than one dataset present but this can be
                overwriten by giving the this variable the value of dsiplay.
              </td>
            </tr>
          </tbody>
        </table>
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
              <th>view-change</th>
              <td>When a user changes the view of the chart by clicking on a chart key item.</td>
              <td>
                This would be possibly useful for when supplementary content is on the page which may not the relevant
                for the new view and can be hidden away.
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #observers>
        <p>
          There are two observers set; one is set on the attributes changing on the component the other is on the
          content and children of the table inside the component. So if the table content is updated the component will
          re-render to reflect the changes. Allowing for the chart to be dynamic and updated via the pages javascript
          since this content is in the light dom.
        </p>
      </template>

      <template #criteria>
        <ul>
          <li>The chart should always stay in sync with the HTML table held within the component</li>
          <li>The chart key should only show when there is more than 1 dataset</li>
          <li>Vertical barcharts should use fixed widths if there is less than 10 bars</li>
          <li>A popover should be displayed with the complete value data on hover of the bars in the chart.</li>
          <li>The chart should be configurable via CSS or attributes on the component</li>
        </ul>
      </template>
      <template #data-layer>
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
              <th>view-change</th>
              <td>When a user changes the view of the chart by clicking on a chart key item.</td>
              <td>
                { "event": "view-change", "element": "iam-barchart", "target": "iam-barchart",
                "data-dataset":"3","label":"Subcat 3","checked":true}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration>
    <Versions pdf="/pdfs/doughnutchart.pdf">
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
            <td>06.03.2025</td>
            <td>Inclusion of the doughnut chart.</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>

<style scoped>
  tr > th:first-child {
    white-space: nowrap;
  }
</style>
