<script lang="ts" setup>
  import { ref } from 'vue'
  import PCNav from './components/PCNav.vue';
  import Table from '@/components/Table/TableAjax.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Rankings from '@/components/Rankings/Rankings.vue';

  const quote = ref(0);
</script>

<template>
  <nav>
  <PCNav></PCNav>
  </nav>
  <main>
    <h1>Details: 22 Lynx Road, Tynemouth, Newcastle Upon Tyne NE1 5LS</h1>

    <h2 class="h3">Details</h2>
 
    <h3 class="h4">Summary of comparison conveyancing quotation</h3>
    <table>
      <tbody>
        <tr>
          <td>Average completion time</td>
          <td class="text-end">days</td>
        </tr>
        <tr>
          <td>Customer rating</td>
          <td class="text-end">
            <label><input type="range" step="1" min="5" max="10" class="rating"></label>
          </td>
        </tr>
      </tbody>
    </table>
    
    
  </main>
</template>