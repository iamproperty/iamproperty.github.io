<template>
<main>
  <div class="container">
    <ul class="breadcrumb mb-0">
      <li><a href="/examples">Examples</a></li>
    </ul>
    <h1>Charts</h1>
    <ul>
      <li><a href="#different-min">Different minimum value</a></li>
      <li><a href="#negative-min">Negative values</a></li>
    </ul>
    
  </div>

  <Chart class="visualtest" id="different-min" :max="200" :min="100" 
    :fields="[
      { key: 'year' },
      { key: 'Value to date' }
    ]" 
    :items="[
      {
        year: '2011',
        value_to_date: '£150.0'
      },
      {
        year: '2012',
        value_to_date: '£175.00'
      },
      {
        year: '2013',
        value_to_date: '£145.00'
      },
      {
        year: '2014',
        value_to_date: '£135.00'
      }
    ]" 
    :yaxis="[
      { 
        value: 100,
        display: '£100'
      },
      { 
        value: 150,
        display: '£150'
      },
      { 
        value: 200,
        display: '£200'
      }
    ]"
  >
    <h2>Different minimum value</h2>
    <p>The minimum value does not have to be zero but it maye be useful to start from say £100 out of £200. If all of the value are between 100 and 200 not having to show the first 100 part of the bar means you can highlight the differences between the values better.</p>
  </Chart>



  <Chart class="visualtest" id="negative-min" :max="300" :min="-200" 
    type= "line"
    :fields="[
      { key: 'year' },
      { key: 'Value to date' }
    ]" 
    :items="[
      {
        year: '2011',
        value_to_date: '-£150.0'
      },
      {
        year: '2012',
        value_to_date: '-£175.00'
      },
      {
        year: '2013',
        value_to_date: '£145.00'
      },
      {
        year: '2014',
        value_to_date: '£135.00'
      }
    ]" 
    :yaxis="[
      { 
        value: -200,
        display: '£200 loss'
      },
      { 
        value: -100,
        display: '£100 loss'
      },
      { 
        value: 0,
        display: '£0'
      },
      { 
        value: 100,
        display: '£100'
      },
      { 
        value: 300,
        display: '£300'
      }
    ]"
  >
    <h2>Negative values</h2>
    <p>Negative values can also be used as we may want to demonstrate loss and not just the gains. It's recommended to use line charts for this but bar charts could also be used.</p>
  </Chart>

</main>

</template>

<script>
import Chart from '@/components/Chart/Chart.vue'

export default {
  components: {
    Chart
  }
}
</script>