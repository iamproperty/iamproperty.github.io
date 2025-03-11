<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  import Table from '@/components/Table/Table.vue';
  import Chart from '@/components/Chart/Chart.vue';
  import BarChart from '@/components/BarChart/BarChart.vue';

  const route = useRoute();
  const dialog = ref<HTMLDialogElement>();
  const filters = ref<HTMLDialogElement>();

  // Makes the dialog work with vue
  const visible = ref(false);
  const showModal = () => {
    dialog.value?.showModal();
    visible.value = true;
  };

  defineExpose({
    show: showModal,
  });

  // Params
  const formTypes = route.query['form-type[]'];
  const status = route.query['status[]'];
  const sort = route.query['sort'];
  const view = route.query['view'];
  const search = route.query['search'];

</script>



<template>



  

  <main class="main">
    <h1 class="h4">Competitor Analysis</h1>


    <div class="admin-panel md-col-end-5 grid">
      <div class="admin-panel__heading bg-primary gradient-info">
        <h2>Properties currently listed</h2>
      </div>
      
      <div class="mh-md col-start-1 md-col-start-1 md-col-end-2">
        45th place
      
        <label data-percent="70"><strong>120</strong> Properties<progress max="100" value="70" class="progress--circular progress--sm " style="--progress:70%;"></progress></label>
      </div>

      <div class="mh-md col-start-1 md-col-start-3">
        <table class="mw-100">
        <thead class="visually-hidden">
          <tr>
            <th>Rank</th>
            <th>Company</th>
            <th>Listed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="mw-fit-content pe-1">1.</th>
            <td>Summit property Services</td>
            <td>180</td>
          </tr>
          <tr>
            <th class="mw-fit-content pe-1">1.</th>
            <td>Summit property Services</td>
            <td>180</td>
          </tr>
          <tr>
            <th class="mw-fit-content pe-1">1.</th>
            <td>Summit property Services</td>
            <td>180</td>
          </tr>
          <tr>
            <th class="mw-fit-content pe-1">4.</th>
            <td><strong>Beacon & Partners</strong></td>
            <td>180</td>
          </tr>
          <tr>
            <th class="mw-fit-content pe-1">1.</th>
            <td>Summit property Services</td>
            <td>180</td>
          </tr>
          <tr>
            <th class="mw-fit-content pe-1">1.</th>
            <td>Summit property Services</td>
            <td>180</td>
          </tr>
          <tr>
            <th class="mw-fit-content pe-1">1.</th>
            <td>Summit property Services</td>
            <td>180</td>
          </tr>
          <tr>
            <th class="mw-fit-content pe-1">1.</th>
            <td>Summit property Services</td>
            <td>180</td>
          </tr>
          <tr>
            <th class="mw-fit-content pe-1">1.</th>
            <td>Summit property Services</td>
            <td>180</td>
          </tr>
          <tr>
            <th class="mw-fit-content pe-1">1.</th>
            <td>Summit property Services</td>
            <td>180</td>
          </tr>
          <tr>
            <th class="mw-fit-content pe-1">1.</th>
            <td>Summit property Services</td>
            <td>180</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>


    <div class="admin-panel md-col-start-6">
      <h2 class="bg-light">Listing vs sale price</h2>
      <div class="mh-md md-col-start-3">
            
        <p>Average difference between original listing price and actual sale price</p>
        
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Avg. listing price</th>
              <th>Avg. sale price</th>
              <th>£ difference</th>
              <th>5 of listing</th>
            </tr>
        </thead>
        </table>

      </div>
    </div>

    <div class="admin-panel md-col-end-6">
      <h2 class="bg-light">Listing status</h2>

      
      <BarChart class="chart--horizontal chart--stacked chart--display-data chart--fit-content chart--no-scale">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sold</th>
              <th>Price reduced</th>
              <th>Cancelled</th>
              <th>Withdrawn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Azure Residential</td>
              <td>70 <a href="/">View properties</a></td>
              <td>35 <a href="/">View properties</a></td>
              <td>210 <a href="/">View properties</a></td>
              <td>15 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Willowstone & co</td>
              <td>60 <a href="/">View properties</a></td>
              <td>30 <a href="/">View properties</a></td>
              <td>200 <a href="/">View properties</a></td>
              <td>10 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Gold & co. Estate Agents</td>
              <td>60 <a href="/">View properties</a></td>
              <td>30 <a href="/">View properties</a></td>
              <td>200 <a href="/">View properties</a></td>
              <td>10 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Summit Property Services</td>
              <td>60 <a href="/">View properties</a></td>
              <td>30 <a href="/">View properties</a></td>
              <td>200 <a href="/">View properties</a></td>
              <td>10 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td><strong>Beacon & partners</strong></td>
              <td>60 <a href="/">View properties</a></td>
              <td>30 <a href="/">View properties</a></td>
              <td>200 <a href="/">View properties</a></td>
              <td>10 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Oak & Ivy Property Specialists</td>
              <td>60 <a href="/">View properties</a></td>
              <td>30 <a href="/">View properties</a></td>
              <td>200 <a href="/">View properties</a></td>
              <td>10 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Oak & Ivy Property Specialists</td>
              <td>60 <a href="/">View properties</a></td>
              <td>30 <a href="/">View properties</a></td>
              <td>200 <a href="/">View properties</a></td>
              <td>10 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Harbor & Hearth Homes</td>
              <td>60 <a href="/">View properties</a></td>
              <td>30 <a href="/">View properties</a></td>
              <td>200 <a href="/">View properties</a></td>
              <td>10 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Meadowbrook Estates</td>
              <td>60 <a href="/">View properties</a></td>
              <td>30 <a href="/">View properties</a></td>
              <td>200 <a href="/">View properties</a></td>
              <td>10 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Pinnacle Homes</td>
              <td>60 <a href="/">View properties</a></td>
              <td>30 <a href="/">View properties</a></td>
              <td>200 <a href="/">View properties</a></td>
              <td>10 <a href="/">View properties</a></td>
            </tr>
          </tbody>
        </table>
      </BarChart>
    </div>

    <div class="admin-panel md-col-start-7">
      <h2 class="bg-primary gradient-info">Days between listing and SSTC</h2>

      <span>5th</span>
      <p>Average number of days between property listing and being SSTC or under offer</p>
      
      <BarChart class="chart--horizontal chart--display-data chart--fit-content chart--no-scale">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Azure Residential</td>
              <td>70 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Willowstone & co</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Gold & co. Estate Agents</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Summit Property Services</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr data-colour-1="warning">
              <td><strong>Beacon & partners</strong></td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Oak & Ivy Property Specialists</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Oak & Ivy Property Specialists</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Harbor & Hearth Homes</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Meadowbrook Estates</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Pinnacle Homes</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
          </tbody>
        </table>
      </BarChart>
      
    </div>


    <div class="admin-panel md-col-end-4">
      <h2 class="bg-light">Cancelled sales</h2>

      <span>5th</span>
      <p>Average number of days between property listing and being SSTC or under offer</p>
      
      <BarChart class="chart--horizontal chart--display-data chart--fit-content chart--no-scale">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Azure Residential</td>
              <td>70 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Willowstone & co</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Gold & co. Estate Agents</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Summit Property Services</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr data-colour-1="warning">
              <td><strong>Beacon & partners</strong></td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Oak & Ivy Property Specialists</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Oak & Ivy Property Specialists</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Harbor & Hearth Homes</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Meadowbrook Estates</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Pinnacle Homes</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
          </tbody>
        </table>
      </BarChart>
      
    </div>


    <div class="admin-panel md-col-start-5 md-col-end-8">
      <h2 class="bg-light">Price reductions</h2>

      <span>5th</span>
      <p>Average number of days between property listing and being SSTC or under offer</p>
      
      <BarChart class="chart--horizontal chart--display-data chart--fit-content chart--no-scale">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Azure Residential</td>
              <td>70 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Willowstone & co</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Gold & co. Estate Agents</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Summit Property Services</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr data-colour-1="warning">
              <td><strong>Beacon & partners</strong></td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Oak & Ivy Property Specialists</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Oak & Ivy Property Specialists</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Harbor & Hearth Homes</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Meadowbrook Estates</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Pinnacle Homes</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
          </tbody>
        </table>
      </BarChart>
      
    </div>


    <div class="admin-panel md-col-start-9">
      <h2 class="bg-light">Withdrawn from sale</h2>

      <span>5th</span>
      <p>Average number of days between property listing and being SSTC or under offer</p>
      
      <BarChart class="chart--horizontal chart--display-data chart--fit-content chart--no-scale">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Azure Residential</td>
              <td>70 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Willowstone & co</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Gold & co. Estate Agents</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Summit Property Services</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr data-colour-1="warning">
              <td><strong>Beacon & partners</strong></td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Oak & Ivy Property Specialists</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Oak & Ivy Property Specialists</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Harbor & Hearth Homes</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Meadowbrook Estates</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
            <tr>
              <td>Pinnacle Homes</td>
              <td>60 <a href="/">View properties</a></td>
            </tr>
          </tbody>
        </table>
      </BarChart>
      
    </div>






  </main>
</template>

<style lang="scss">

body {
  --max-width: 120rem
}
</style>
