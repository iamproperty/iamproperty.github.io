<script setup>
import BarChart from '@/components/BarChart/BarChart.vue'
import Notification from '@/components/Notification/Notification.vue'
import DSHeader from '../DSHeader.vue'
import Integration from '../Integration.vue'
import Versions from '../Versions.vue'
import headerImg from '../../img/cards-header.png'
import { onMounted, ref } from 'vue';

const arrColours= ["3", "4","5","6","7","8","9","11","12"];
const $toast = ref();
const toastInterval = ref();

onMounted(async () => {
  
  Array.from(document.querySelectorAll('iam-barchart')).forEach((chart, index) => {
          
    chart.addEventListener('view-change', (event) => {

      clearInterval(toastInterval.value);

      $toast.value.$el.classList.remove('d-none');
      let msgElement = $toast.value.$el.querySelector('.msg');
      msgElement.innerHTML = `${event.type} event has been dispatched<br/>${JSON.stringify(event.detail)}`;

      toastInterval.value = setInterval(function(){

        $toast.value.$el.classList.add('d-none');
      }, 5000);
    });
  });
});




</script>

<template>


  <div class="container notification__holder bottom"><Notification data-type="toast" data-dismiss ref="$toast" class="d-none"><strong>Event</strong><br/> <span class="msg"></span> {{ eventMsg }}</Notification></div>

  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Bar Charts (Beta)</h1>
    </DSHeader>

    


    <h2>Bar chart varients</h2>
    <p>Provides a list of items that can be expanded individually to provide more information.</p>
  
    <table>
      <thead>
        <tr>
          <th>Variant</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>Simple bar</td>
          <td>Simple bars use vertical or horizontal bars to represent and compare individual values.</td>
        </tr>
        <tr>
          <td>Grouped bar</td>
          <td>A grouped bar chart use is to compare values across multiple categories</td>
        </tr>
        <tr>
          <td>Stacked bar</td>
          <td>Stacked bars are effective for comparing the promotional contributions within a category. They display the relative value each data series adds to the overall total.
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Simple bar anatomy</h3>

    <div class="container bg-light mb-5 visualtest">

      <div class="row align-items-center">
        <div class="col-sm-6 pe-5">

          <BarChart class="chart--horizontal chart--display-data">
          <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr data-colour-1="warning">
              <td>Item 1</td>
              <td>300</td>
            </tr>
            <tr data-colour-1="success">
              <td>Item 2</td>
              <td>150</td>
            </tr>
            <tr data-colour-1="danger">
              <td>Item 3</td>
              <td>100</td>
            </tr>
          </tbody>
          </table>
          </BarChart>
        </div>
        <div class="col-sm-6 ps-5">

          <BarChart>
          <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr data-colour-1="warning">
              <td>Item 1</td>
              <td>300</td>
            </tr>
            <tr data-colour-1="success">
              <td>Item 2</td>
              <td>150</td>
            </tr>
            <tr data-colour-1="danger">
              <td>Item 3</td>
              <td>100</td>
            </tr>
          </tbody>
          </table>
          </BarChart>
        </div>
      </div>
    </div>

    <h3>Grouped bar anatomy</h3>

    <div class="container bg-light mb-5 visualtest">

      <div class="row align-items-center">
        <div class="col-sm-6 pe-5">

          <BarChart class="chart--horizontal chart--display-data" data-colour-2="danger">
          <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Subcat 1</th>
              <th>Subcat 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>300</td>
              <td>250</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>300</td>
              <td>250</td>
            </tr>
            <tr>
              <td>Item 3</td>
              <td>300</td>
              <td>250</td>
            </tr>
          </tbody>
          </table>
          </BarChart>
        </div>
        <div class="col-sm-6 ps-5">

          <BarChart data-colour-2="danger">
          <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Subcat 1</th>
              <th>Subcat 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>300</td>
              <td>250</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>300</td>
              <td>250</td>
            </tr>
            <tr>
              <td>Item 3</td>
              <td>300</td>
              <td>250</td>
            </tr>
          </tbody>
          </table>
          </BarChart>
        </div>
      </div>
    </div>


    <ol>
      <li><strong>Item description.</strong> Each item description has an optional clickable function which navigates to a relevant page.</li>
      <li><strong>Statistic and bar visualisation.</strong> The numeric element is optional and can represent numbers or percentages. The width of the bar on the horizontal simple bar and the hight of the vertical simple bar can be flexible to suit design but the scale must stay consistent with the other items in the chart to ensure data is represented accurately.</li>
      <li><strong>Key detail</strong> (optional) - placement can be at the top or bottom of the bar chart.</li>
    </ol>
    
    <h3>Stacked bar anatomy</h3>


    <div class="container bg-light mb-5 visualtest">

      <div class="row align-items-center">
        <div class="col-sm-6 mx-auto">

          <BarChart class="chart--horizontal chart--stacked chart--display-data">
          <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Subcat 1</th>
              <th>Subcat 2</th>
              <th>Subcat 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>100</td>
              <td>150</td>
              <td>150</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>50</td>
              <td>50</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Item 3</td>
              <td>100</td>
              <td>50</td>
              <td>200</td>
            </tr>
          </tbody>
          </table>
          </BarChart>
        </div>
        
      </div>
    </div>

    <ol class="mb-5">
      <li><strong>Item description.</strong> Each item description has an optional clickable function which navigates to a relevant page.</li>
      <li><strong>Bar visualisation.</strong>  The item total value will be captured like the simple bar but will also include percentage contributions with a figure displaying each percentage contribution upon hover. The bar container width is flexible and each of the percentage contribution must collectively equal 100% of that items total value. Each subcategory will have their own percentage contribution, scale must stay consistent with the other items in the chart to ensure data is represented accurately.</li>
      <li><strong>Key detail</strong> (optional) - placement can be at the top or bottom of the bar chart.</li>
    </ol>


    <h3>Bar chart hover state behaviour</h3>
    <p>The hoverable state on all bar charts includes a 25% colour darken on the bar and displays key information regarding that particular data set. The hoverable information must line up line centrally to the height of the bar but there is no fix width position of the hoverable information, it simply appears in the same position the user has pointed to the item with their cursor.</p>

    <h3>Axis</h3>
    <p>The X and Y axis are optional with each bar chart in use and can display increments applicable to it’s use. Individual X axis values on horizontal bars and Y axis on vertical bars can be hidden if needed (see example below)</p>


    <div class="row aligns-items-center">
      <div class="col-sm-6 col-md-4">
        
        <BarChart class="chart--horizontal" data-yaxis="0,50,100,150,200,250,300,350,400,450">
          <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr data-colour-1="warning">
              <td>Item 1</td>
              <td>440</td>
            </tr>
            <tr data-colour-1="success">
              <td>Item 2</td>
              <td>190</td>
            </tr>
            <tr data-colour-1="danger">
              <td>Item 3</td>
              <td>130</td>
            </tr>
          </tbody>
          </table>
        </BarChart>
      </div>
      <div class="col-sm-6 col-md-4 px-5">
        
        <BarChart data-yaxis="0,50,100,150,200,250,300,350,400,450">
          <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr data-colour-1="warning">
              <td>Item 1</td>
              <td>440</td>
            </tr>
            <tr data-colour-1="success">
              <td>Item 2</td>
              <td>190</td>
            </tr>
            <tr data-colour-1="danger">
              <td>Item 3</td>
              <td>130</td>
            </tr>
          </tbody>
          </table>
        </BarChart>
      </div>
      <div class="col-sm-6 col-md-4">

        <BarChart class="chart--horizontal" data-yaxis="0,100,200,300,400" data-guidelines="0,50,100,150,200,250,300,350,400,450">
          <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr data-colour-1="warning">
              <td>Item 1</td>
              <td>440</td>
            </tr>
            <tr data-colour-1="success">
              <td>Item 2</td>
              <td>190</td>
            </tr>
            <tr data-colour-1="danger">
              <td>Item 3</td>
              <td>130</td>
            </tr>
          </tbody>
          </table>
        </BarChart>

      </div>
    </div>
    

    <h3>Colour</h3>

    <p>The only time colours are bound to a particular item is when including singular items which align to the values of ‘in progress/warning’, ‘incomplete/negative’ and ‘complete/positive’. To use those colours in that way, you must have the need to use at least two of those values, for example showing a chart with incomplete and complete items. Aside from this, please use the applied colours listed below.</p>

    <table class="border-0 mb-1">

      <thead>
        <tr>
          <th>Hex code</th>
          <th>Ref*</th>
          <th>Colour</th>
        </tr>
      </thead>
      <tbody>
        <tr class="mb-1">
          <td>#D2F0C9 - Complete/positive</td>
          <td>success</td>
          <td class="bg-success" style="min-width: 5rem;"></td>
        </tr>
        <tr class="mb-1">
          <td>#FFD280 - In progress/warning</td>
          <td>warning</td>
          <td class="bg-warning" style="min-width: 5rem;"></td>
        </tr>
        <tr>
          <td>#F5C2C7 - Incomplete/negative</td>
          <td>danger</td>
          <td class="bg-danger" style="min-width: 5rem;"></td>
        </tr>
      </tbody>
    </table>
    <p>* Use this reference for when adding to the data-colour-{i} attributes.</p>

    <div class="row row-cols-2 row-cols-sm-4 d-none d-sm-flex">
        
        <div class="col pb-2" >
          
          <span class="label">Chart colour</span>
        </div>
        <div class="col pb-2" >
          
          <span class="label">Wider colour</span>
        </div>
      </div>
      <template v-for="(colour, name) in $shared.widerColours" :key="name">
      <div class="row row-cols-3 row-cols-sm-4" v-if="arrColours.includes(name)">
        
        <div class="col-12 col-sm pb-2">
          <span >Chart colour {{parseInt(name) - 2}}</span>
        </div>
        <div class="col-12 col-sm pb-2">
          <span >Wider colour {{name}}</span>
        </div>
        <div class="col pb-2" >
          <div :class="`tag wider-colour-${name}`">{{colour}}</div>
        </div>
      </div>
      </template>

    <Integration component="barchart">
      <template #web-component>

        <pre><code>{{`<iam-barchart>
  <table>
    <thead>
      <tr>
        <th>Items</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Item 1</td>
        <td>440</td>
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
</iam-barchart>`}}</code></pre>
      </template>
      <template #vue-component>

        <pre><code>{{`<script setup>import BarChart from '@/components/BarChart/BarChart.vue</script>
        
<BarChart>
  <table>
    <thead>
      <tr>
        <th>Items</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Item 1</td>
        <td>440</td>
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
</BarChart>
`}}</code></pre>
      </template>

      <template #attr>

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Default</th>
      <th>Options/Type</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data-min</td>
      <td>0</td>
      <td>Numeric</td>
      <td></td>
    </tr>
    <tr>
      <td>data-max</td>
      <td>Max value of column</td>
      <td>Numeric</td>
      <td></td>
    </tr>
    <tr>
      <td>data-yaxis</td>
      <td>-</td>
      <td>Array of numbers</td>
      <td></td>
    </tr>
    <tr>
      <td>data-guidelines</td>
      <td>-</td>
      <td>Array of numbers</td>
      <td></td>
    </tr>
    <tr>
      <td>data-colour-{1-10}</td>
      <td>-</td>
      <td>warning | success | danger | {1-10}</td>
      <td>The colours can be overwritten with meaningfull colours, i.e. danger for values that can be seen as a negative like number of bad reviews.</td>
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
            <td>chart--horizontal</td>
            <td></td>
          </tr>
          <tr>
            <td>chart--display-data</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      </template>
      <template #parts>

      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>chart--horizontal</td>
            <td></td>
          </tr>
          <tr>
            <td>chart--display-data</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      </template>

      <template #vars>

      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>chart--horizontal</td>
            <td></td>
          </tr>
          <tr>
            <td>chart--display-data</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      </template>


      <template #events>

        <h5>Dispatched events</h5>


        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Description</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>view-change</td>
              <td>Is dispatched when a user changes the view of the chart by clicking on a chart item</td>
              <td></td>
            </tr>
          </tbody>
        </table>


        <h5>Mutation observers</h5>
      
      </template>

      <template #criteria>

      <ul>
        <li>The chart should always stay in sync with the HTML table held with the component</li>
        <li>The chart key should only show when there is more than 1 dataset</li>
        <li>Vertical barcharts should use fixed widths if there is less than 10 bars</li>
      </ul>

      </template>

    </Integration>
    <Versions pdf="/pdfs/barchart.pdf">
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
              <td>10.09.2024</td>
              <td>Inclusion of the simple bar, group bar and stacked bar charts.</td>
            </tr>
          </tbody>
        </table>
    </Versions>
  </main>
</template>

