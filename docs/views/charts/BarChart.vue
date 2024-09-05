<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Bar chart</h1>
      <p>Provides a list of items that can be expanded individually to provide more information.</p>
    </div>
    <div class="visualtest container">
 
      
      <BarChart data-max="1800" data-min="0" data-yaxis="0,200,400,600,800,1000,1200,1400,1600,1800">
        <table>
          <thead>
              <tr>
                <th>Month</th>
                <th>Deaths due to Covid</th>
                <th>Deaths involving Covid</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apr-20</td>
              <td>1320</td>
              <td>1450</td>
            </tr>
            <tr>
              <td>May-20</td>
              <td>600</td>
              <td>680</td>
            </tr>
            <tr>
                  <td>Jun-20</td>
                  <td>195</td>
                  <td>225</td>
            </tr>
            <tr>
                  <td>Jul-20</td>
                  <td>40</td>
                  <td>50</td>
            </tr>
            <tr>
                  <td>Aug-20</td>
                  <td>33</td>
                  <td>60</td>
            </tr>
            <tr>
                  <td>Sep-20</td>
                  <td>40</td>
                  <td>50</td>
            </tr>
            <tr>
                  <td>Oct-20</td>
                  <td>230</td>
                  <td>300</td>
            </tr>
            <tr>
                  <td>Nov-20</td>
                  <td>720</td>
                  <td>850</td>
            </tr>
            <tr>
                  <td>Dec-20</td>
                  <td>1100</td>
                  <td>1220</td>
            </tr>
            <tr>
                  <td>Jan-21</td>
                  <td>1580</td>
                  <td>1730</td>
            </tr>
            <tr>
                  <td>Feb-21</td>
                  <td>740</td>
                  <td>850</td>
            </tr>
          </tbody>
        </table>
      </BarChart>

    </div>
    
    <Tabs class="container">
      <details>
        <summary><h2>HTML</h2></summary>
        <pre><code class="javascript">{{htmlUsage}}</code></pre>
      </details>
      <details>
        <summary><h2>Web component</h2></summary>
      </details>
      <details>
        <summary><h2>Vue component</h2></summary>
      </details>
    </Tabs>

  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import BarChart from '@/components/BarChart/BarChart.vue'

export default {
  components: {
    Tabs,
    BarChart
  },
  data () {
    return {
    }
  }
}
</script>