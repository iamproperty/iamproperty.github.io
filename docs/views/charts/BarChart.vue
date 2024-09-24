<template>
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

    <h2 class="pb-0 pt-5">Integration</h2>
    <Tabs class="container">
      <details>
        <summary><h3>Install</h3></summary>

        
      <h4>Web component</h4>
        <strong class="label">Add the below to your initialise script</strong>

<pre class="mb-5"><code>import('../node_modules/@iamproperty/components/assets/js/components/accordion/accordion.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-accordion`))
    window.customElements.define(`iam-accordion`, module.default);

}).catch((err) => {
  console.log(err.message);
});</code></pre>

<strong class="label">Add the below HTML code to where you want the component to live.</strong>

<pre><code>{{`<iam-accordion class="container">
  <details id="question1" class="accordion-item">
    <summary class="accordion-header accordion-button h4">Question 1</summary>
    <p>Answer </p>
  </details>
  <details class="accordion-item">
    <summary class="accordion-header accordion-button h4">Question 2</summary>
    <p>Answer </p>
  </details>
</iam-accordion>
`}}</code></pre>

      <h4>Vue component</h4>

        <pre><code>{{ `import BarChart from '@/components/BarChart/BarChart.vue'

<Accordion>
  <AccordionItem title="Question 1">
    <p>Accordion item content</p>
  </AccordionItem>
  <AccordionItem title="Question 2">
    <p>Accordion item content</p>
  </AccordionItem>
</Accordion>`}}</code></pre>
      </details>
      <details>
        <summary><h2>Layout</h2></summary>
        
        <h3>Slots</h3>
        <table>
          <thead>
            <tr>
              <th>Slot</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </details>
      <details>
        <summary><h2>Modify</h2></summary>
        <h3>Attributes</h3>
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
      </details>
      <details>
        <summary><h2>Style</h2></summary>
        <h3>Classes</h3>
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

        <h3>Parts</h3>


        <h3>CSS variables</h3>

      </details>
      <details>
        <summary><h2>Extend</h2></summary>
        <h3>Events</h3>
      </details>
    </Tabs>

  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import BarChart from '@/components/BarChart/BarChart.vue'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'

export default {
  components: {
    DSHeader,
    Tabs,
    BarChart
  },
  data () {
    return {
      headerImg:headerImg,
      arrColours: ["3", "4","5","6","7","8","9","11","12"]
    }
  }
}
</script>