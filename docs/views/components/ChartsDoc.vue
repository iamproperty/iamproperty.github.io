<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Charts</h1>
      <p>Show individual values of a data set so users can compare the values to each other.</p>
      <p class="note"><strong>Note: </strong>The data is added to the page using a table element which is then converted into a chart by using a combination of CSS and supporting SVG's.</p>
    </div>
    
    <Chart class="visualtest" :max="max" :min="min" :fields="fields" :items="items" :yaxis="yaxis" type="none">
      <h2>No chart</h2>
      <p>An example of chart data not converted into a chart. The first column of the table is used to create the x-axis of the chart. With the following columns added to the chart as a piece of data (bar or point). </p>
    </Chart>
    
    <Chart class="visualtest" :max="max" :min="min" :fields="fields" :items="items" :yaxis="yaxis" caption="An example of a bar chart.">
      <h2>Bar chart</h2>
    </Chart>

    <Chart class="visualtest" :max="150" :min="0" :fields="fields" :items="items" :yaxis="yaxis2" type="stacked" caption="An example of a stacked bar chart.">
      <h2>Stacked bar chart</h2>
    </Chart>

    <Chart class="visualtest" :max="max" :min="min" :fields="fields" :items="items" :yaxis="yaxis" type="line" caption="An example of a line chart."><h2>Line chart</h2></Chart>
   
    <Chart class="visualtest" :max="max" :min="min" :fields="fields" :items="items" :yaxis="yaxis" type="pie" caption="An example of a pie chart."><h2>Pie chart</h2></Chart>


    <div class="container">
      <h2>More examples</h2>
      <a href="/examples/charts" class="btn btn-primary">Chart examples</a>
    </div>
    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="language-html">{{htmlUsage}}</code></pre>
    </div>


    
    <div class="container">
      <h2>Vue Charts component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Chart from '@/components/Chart/Chart.vue'
import Readme from '@/components/Chart/README.md'


export default {
  components: {
    Chart,
    Readme
  },
  data () {
    return {
      max: 100,
      min: 0,
      yaxis: [
        { 
          value: 0,
          display: '£0'
        },
        { 
          value: 50,
          display: '£50'
        },
        { 
          value: 100,
          display: '£100'
        }
      ],
      yaxis2: [
        { 
          value: 0,
          display: '£0'
        },
        { 
          value: 50,
          display: '£50'
        },
        { 
          value: 100,
          display: '£100'
        },
        { 
          value: 150,
          display: '£150'
        }
      ],
      fields: [
        { key: 'year' },
        { key: 'Growth' },
        { key: 'Growth2' }
      ],
      items: [
        {
          year: '2011',
          growth: '£50.0',
          growth2: '£50.10'
        },
        {
          year: '2012',
          growth: '£75.00',
          growth2: '£50.10'
        },
        {
          year: '2013',
          growth: '£45.00',
          growth2: '£57.10'
        },
        {
          year: '2014',
          growth: '£35.00',
          growth2: '£80.10'
        }
      ],
      htmlUsage: `<div class="container">
   <div role="presentation" class="chart__key chart__key--bar h5">
      <div class="key">year</div>
      <div class="key">Growth</div>
      <div class="key">Growth2</div>
   </div>
   <div class="chart chart--bar">
      <div role="presentation" class="chart__yaxis">
         <div class="axis__point" style="--percent:0%;"><span>£0</span></div>
         <div class="axis__point" style="--percent:50%;"><span>£50</span></div>
         <div class="axis__point" style="--percent:100%;"><span>£100</span></div>
      </div>
      <div role="presentation" class="chart__guidelines">
         <div class="guideline" style="--percent:0%;"></div>
         <div class="guideline" style="--percent:50%;"></div>
         <div class="guideline" style="--percent:100%;"></div>
      </div>
      <div class="table__wrapper" type="bar" max="100" min="0" yaxis="[object Object],[object Object],[object Object]" id="tabe_n8nmo3gz8">
         <table>
            <thead>
               <tr>
                  <th>Year</th>
                  <th>Growth</th>
                  <th>Growth2</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td data-label="Year" data-numeric="2011">2011</td>
                  <td data-label="Growth" data-numeric="50" style="--percent:50%;"><span data-group="2011" data-label="Growth">£50</span></td>
                  <td data-label="Growth2" data-numeric="10.1" style="--percent:10.1%;"><span data-group="2011" data-label="Growth2">£10.10</span></td>
               </tr>
               <tr>
                  <td data-label="Year" data-numeric="2012">2012</td>
                  <td data-label="Growth" data-numeric="75" style="--percent:75%;"><span data-group="2012" data-label="Growth">£75.00</span></td>
                  <td data-label="Growth2" data-numeric="50.1" style="--percent:50.1%;"><span data-group="2012" data-label="Growth2">£50.10</span></td>
               </tr>
               <tr>
                  <td data-label="Year" data-numeric="2013">2013</td>
                  <td data-label="Growth" data-numeric="45" style="--percent:45%;"><span data-group="2013" data-label="Growth">£45.00</span></td>
                  <td data-label="Growth2" data-numeric="57.1" style="--percent:57.10000000000001%;"><span data-group="2013" data-label="Growth2">£57.10</span></td>
               </tr>
               <tr>
                  <td data-label="Year" data-numeric="2014">2014</td>
                  <td data-label="Growth" data-numeric="35" style="--percent:35%;"><span data-group="2014" data-label="Growth">£35.00</span></td>
                  <td data-label="Growth2" data-numeric="80.1" style="--percent:80.1%;"><span data-group="2014" data-label="Growth2">£80.10</span></td>
               </tr>
            </tbody>
         </table>
         <!-- only visible on line charts -->
         <span class="lines">
            <svg viewBox="0 0 200 100" class="line" preserveAspectRatio="none">
               <path fill="none" d="M 0 50 L 66.66666666666667 25 L 133.33333333333334 55 L 200 65 "></path>
            </svg>
            <svg viewBox="0 0 200 100" class="line" preserveAspectRatio="none">
               <path fill="none" d="M 0 89.9 L 66.66666666666667 49.9 L 133.33333333333334 42.89999999999999 L 200 19.900000000000006 "></path>
            </svg>
         </span>
      </div>
      <!-- only visible on pie charts -->
      <div class="pies">
         <div class="pie">
            <svg viewBox="-105 -105 210 210" style="transform: rotate(-90deg)" preserveAspectRatio="none">
               <path d="M 100 0 A 100 100 0 1 1 50.000000000000014 -86.60254037844386 L 0 0"></path>
               <path d="M 50.000000000000014 -86.60254037844386 A 100 100 0 0 1 100 -2.4492935982947064e-14 L 0 0"></path>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2011</span></div>
               </foreignObject>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2011<br> Growth<br> £50</span></div>
               </foreignObject>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2011<br> Growth2<br> £10.10</span></div>
               </foreignObject>
            </svg>
         </div>
         <div class="pie">
            <svg viewBox="-105 -105 210 210" style="transform: rotate(-90deg)" preserveAspectRatio="none">
               <path d="M 100 0 A 100 100 0 1 1 -80.90169943749474 -58.7785252292473 L 0 0"></path>
               <path d="M -80.90169943749474 -58.7785252292473 A 100 100 0 0 1 100 -2.4492935982947064e-14 L 0 0"></path>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2012</span></div>
               </foreignObject>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2012<br> Growth<br> £75.00</span></div>
               </foreignObject>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2012<br> Growth2<br> £50.10</span></div>
               </foreignObject>
            </svg>
         </div>
         <div class="pie">
            <svg viewBox="-105 -105 210 210" style="transform: rotate(-90deg)" preserveAspectRatio="none">
               <path d="M 100 0 A 100 100 0 0 1 -93.24722294043556 36.12416661871533 L 0 0"></path>
               <path d="M -93.24722294043556 36.12416661871533 A 100 100 0 1 1 100 -2.4492935982947064e-14 L 0 0"></path>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2013</span></div>
               </foreignObject>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2013<br> Growth<br> £45.00</span></div>
               </foreignObject>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2013<br> Growth2<br> £57.10</span></div>
               </foreignObject>
            </svg>
         </div>
         <div class="pie">
            <svg viewBox="-105 -105 210 210" style="transform: rotate(-90deg)" preserveAspectRatio="none">
               <path d="M 100 0 A 100 100 0 0 1 -33.487961217098615 94.22609221188205 L 0 0"></path>
               <path d="M -33.487961217098615 94.22609221188205 A 100 100 0 1 1 100 -2.4492935982947064e-14 L 0 0"></path>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2014</span></div>
               </foreignObject>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2014<br> Growth<br> £35.00</span></div>
               </foreignObject>
               <foreignObject x="-70" y="-70" width="140" height="140" style="transform: rotate(90deg)">
                  <div><span class="h5 mb-0">2014<br> Growth2<br> £80.10</span></div>
               </foreignObject>
            </svg>
         </div>
      </div>
   </div>
</div>`
    }
  }
}
</script>