<script setup>
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Table from '@/components/Table/Table.vue';
  import BasicTable from '@/components/Table/TableBasic.vue';

</script>


<template>
  <main>
    <h1>Tables with fixed columns</h1>
    <h2 class="h4">Default table with actionbar</h2>
    <div class="visualtest container mb-5 bg-light">
      <BasicTable>
        <table>
          <thead>
            <tr>
              <th class="th--fixed">Client</th>
              <th class="text-nowrap">Date added</th>
              <th class="text-nowrap">Lorum ipsum</th>
              <th class="text-nowrap">Fourth column</th>
              <th class="text-nowrap">Fifth column</th>
              <th class="text-nowrap">Sixth column</th>
              <th class="th--fixed"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td>Fourth column</td>
              <td>Fifth column</td>
              <td>Sixth column</td>
              <td><a href="/">Manage client</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td>Fourth column</td>
              <td>Fifth column</td>
              <td>Sixth column</td>
              <td><a href="/">Manage client</a></td>
            </tr>
          </tbody>
        </table>
      </BasicTable>
    </div>


  </main>
</template>

