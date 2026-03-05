<script setup lang="ts">
  import Table from '@/components/Table/Table.vue';
</script>

<template>

  <main>
    <h1>Highlighted row</h1>

  </main>
  <Table>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Client name</th>
          <th>Date added</th>
          <th>Lorum ipsum</th>
          <th>Lorum ipsum</th>
          <th>Lorum ipsum</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <label for="row1647601537697"><input type="checkbox" name="row" id="row1647601537697"><span class="visually-hidden">Select row</span></label>
          </td>
          <td>Tom Smith</td>
          <td>10.05.23</td>
          <td>
            Lorem Ipsum 
          </td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td><a href="/manage">Manage</a></td>
        </tr>
        <tr data-highlight="Recommended based on sale quote selection">
          <td>
            <label for="row1647601537697"><input type="checkbox" name="row" id="row164760153769"><span class="visually-hidden">Select row</span></label>
          </td>
          <td>Tom Smith <span></span></td>
          <td>10.05.23</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td><a href="/manage">Manage</a></td>
        </tr>
        <tr data-highlight="Recommended based on sale quote selection. Recommended based on sale quote selection Recommended based on sale quote selection Recommended based on sale quote selection Recommended based on sale quote selection Recommended based on sale quote selection Recommended based on sale quote selection Recommended based on sale quote selection">
          <td>
            <label for="row1647601537697"><input type="checkbox" name="row" id="row16476015376"><span class="visually-hidden">Select row</span></label>
          </td>
          <td>Tom Smith <span></span></td>
          <td>10.05.23</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td><a href="/manage">Manage</a></td>
        </tr>
        <tr>
          <td>
            <label for="row1647601537697"><input type="checkbox" name="row" id="row16476"><span class="visually-hidden">Select row</span></label>
          </td>
          <td>Tom Smith</td>
          <td>10.05.23</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td><a href="/manage">Manage</a></td>
        </tr>
      </tbody>
    </table>
  </Table>
</template>