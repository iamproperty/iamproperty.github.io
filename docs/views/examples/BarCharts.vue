<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/examples">Examples</a></li>
      </ul>
      <h1>Charts</h1>
    </div>

    <div class="container">
      <span class="h4 pb-2">Lost overview</span>
      <span class="label pb-0 mb-1">Total lost: 18</span>

      <BarChart class="chart--horizontal chart--display-data" data-max="13" data-min="0" data-yaxis="13">
        <table>
          <thead>
            <tr>
              <th>Market type</th>
              <th>Lost leads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="/on-market" title="On market page">On market</a></td>
              <td>13</td>
            </tr>
            <tr>
              <td
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua."
              >
                Off market
              </td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </BarChart>

      <span class="label">Recommended service</span>
      <BarChart class="chart--horizontal chart--display-data chart-colour--danger">
        <table>
          <thead>
            <tr>
              <th>Recommended service</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>iamp recommended</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Included in proposal</td>
              <td class="chart-colour--success">12</td>
            </tr>
            <tr>
              <td>Won</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
      </BarChart>

      <BarChart
        class="chart--display-data"
        data-max="80"
        data-min="0"
        data-yaxis="0,20,40,60,80"
        data-guidelines="0,10,20,30,40,50,60,70,80"
      >
        <table>
          <thead>
            <tr>
              <th>Recommended service</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Won</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Booked</td>
              <td>58</td>
            </tr>
            <tr>
              <td>Cancelled</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Withdrawn</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Lost</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Standstill</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Pending</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </BarChart>

      <BarChart class="chart--fit-content chart--display-data chart--default-colours">
        <table>
          <thead>
            <tr>
              <th>Recommended service</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Won</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Booked</td>
              <td>58</td>
            </tr>
            <tr>
              <td>Cancelled</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Withdrawn</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Lost</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Standstill</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Pending</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </BarChart>

      <BarChart
        class="chart--default-colours"
        data-colour-2="danger"
        data-max="1800"
        data-min="0"
        data-yaxis="0,200,400,600,800,1000,1200,1400,1600,1800"
      >
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
              <td>Mar-20</td>
              <td>46</td>
              <td>55</td>
            </tr>
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
            <tr>
              <td>Mar-21</td>
              <td>190</td>
              <td>220</td>
            </tr>
            <tr>
              <td>Apr-21</td>
              <td>40</td>
              <td>50</td>
            </tr>
            <tr>
              <td>May-21</td>
              <td>20</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Jun-21</td>
              <td>5</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Jul-21</td>
              <td>50</td>
              <td>70</td>
            </tr>
            <tr>
              <td>Aug-21</td>
              <td>90</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Sep-21</td>
              <td>220</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Oct-21</td>
              <td>300</td>
              <td>350</td>
            </tr>
            <tr>
              <td>Nov-21</td>
              <td>320</td>
              <td>380</td>
            </tr>
            <tr>
              <td>Dec-21</td>
              <td>180</td>
              <td>205</td>
            </tr>
            <tr>
              <td>Jan-22</td>
              <td>215</td>
              <td>350</td>
            </tr>
            <tr>
              <td>Feb-22</td>
              <td>100</td>
              <td>180</td>
            </tr>
            <tr>
              <td>Mar-22</td>
              <td>130</td>
              <td>198</td>
            </tr>
            <tr>
              <td>Apr-22</td>
              <td>190</td>
              <td>270</td>
            </tr>
            <tr>
              <td>May-22</td>
              <td>60</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Jun-22</td>
              <td>40</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Jul-22</td>
              <td>110</td>
              <td>195</td>
            </tr>
            <tr>
              <td>Aug-22</td>
              <td>100</td>
              <td>150</td>
            </tr>
            <tr>
              <td>Sep-22</td>
              <td>90</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </BarChart>
    </div>
  </main>
</template>

<script>
  import BarChart from '@/components/BarChart/BarChart.vue';

  export default {
    components: {
      BarChart,
    },
  };
</script>
