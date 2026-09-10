<script setup>

  import DSHeader from '../DSHeader.vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
</script>

<template>
  <main>
    <DSHeader :route="route"></DSHeader>

    <h2>Data formats</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Format</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>currency</td>
          <td>£0,000.00</td>
          <td>£123,456.78</td>
        </tr>
        <tr>
          <td>date</td>
          <td>DD/MM/YYYY</td>
          <td>31/12/2024</td>
        </tr>
        <tr>
          <td>datetime</td>
          <td>DD/MM/YYYY HH:MM</td>
          <td>31/12/2024 12:30</td>
        </tr>
        <tr>
          <td>Postcode</td>
          <td>XXXX XXX</td>
          <td>SW1A 1AA</td>
        </tr>
        <tr>
          <td>Address (inline)</td>
          <td>House number followed by street name, Postcode</td>
          <td>123 Main St, SW1A 1AA</td>
        </tr>

      </tbody>


    </table>
  </main>
</template>
