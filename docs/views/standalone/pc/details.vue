<script lang="ts" setup>
  import { ref } from 'vue'
  import PCNav from './components/PCNav.vue';
  import Table from '@/components/Table/TableAjax.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Rating from '@/components/Rating/Rating.vue';

  const quote = ref(0);

  const handleRating = (event:any) => {

    console.log(event)
  };
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
            <Rating class="colour-complete rating--sm"><input type="number" step="1" value="3" min="0" max="5" disabled @input="handleRating"></Rating>
          </td>
        </tr>
      </tbody>
    </table>
    
    
  </main>
</template>