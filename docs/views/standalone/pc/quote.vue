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
    <h1>Quote: 22 Lynx Road, Tynemouth, Newcastle Upon Tyne NE1 5LS</h1>
      <div  class="admin-panel md-col-end-5">
        <h2 data-v-c2a3d511="" class="bg-light">Ranking component</h2>
        
      </div>
      
    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>

    <h2>Quote summary: <span>{{ quote }}</span></h2>
    <button class="link">Clear quote</button>
  </main>
</template>