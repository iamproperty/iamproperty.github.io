<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Dashboard from '@/components/Dashboard/Dashboard.vue'
import Card from '@/components/Card/Card.vue'


const dashboardElement = ref<HTMLElement | null>(null);
const layout = ref('layout1');

</script>
<template>
  <nav>

  </nav>
  <select v-model="layout" class="mt-2">
    <option value="layout1">Layout 1</option>
    <option value="layout2">Layout 2</option>
  </select>
  <hr class="mb-5"/>

  <Dashboard role="main" :data-layout="layout" data-widget-template='50/50' data-widgets='[{"name": "admin 1"}]'>
    <h1 slot="title">Welcome, James</h1>
    <button slot="button" class="btn btn-primary">Add new record</button>
    <Card slot="insight">
      Card content
    </Card>
    <Card slot="insight">
      Card content
    </Card>
    <Card slot="insight">
      Card content
    </Card>

    <div class="admin-panel" slot="widget">
      <h2>Admin Panel 1</h2>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>

    </div>
    <div class="admin-panel" slot="widget">
      <h2>Admin Panel 2</h2>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>

    </div>
    <div class="admin-panel" slot="widget">
      <h2>Admin Panel 3</h2>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>

    </div>
    <div class="admin-panel" slot="widget">
      <h2>Admin Panel 4</h2>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>

    </div>
    <div class="admin-panel" slot="widget">
      <h2>Admin Panel 4</h2>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>

    </div>
    <div class="admin-panel" slot="widget">
      <h2>Admin Panel 4</h2>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>

    </div>


    <hr slot="widget" />
    <h2>Smart leads</h2>
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
      </tbody>
    </table>
  </Dashboard>
</template>
