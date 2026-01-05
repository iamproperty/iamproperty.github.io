<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import PCNav from './components/PCNav.vue';
  import Table from '@/components/Table/TableAjax.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';

  
import AddressLookup from '@/components/AddressLookup/AddressLookup.vue';

import { useRoute } from 'vue-router'

const route = useRoute()
const onward = route.query['onward'] && route.query['onward'] == 'yes' ? true : false;
</script>

<template>
  <nav>
  <PCNav></PCNav>
  </nav>
  <main class="template--form">
    <div class="container text-center">
      <h1 class="mx-auto">Add opportunity</h1>
      <ol class="list--steps" data-mobile-text="Agency">
        <li class="step--complete">Transaction</li>
        <li class="step--complete">Client</li>
        <li class="step--current">Agency</li>
      </ol>
    </div>
    <div  class="container">
      <form class="form-panel" action="/standalone/premium-conveyancing/case">
          
        <h2 >Ranking component</h2>
        
        <input v-if="onward" type="hidden" name="onward" value="yes" />

        <label>
          Agency
          <select>
            <option value="vendor">Vendor</option>
          </select>
        </label>

        <label>
          Branch
          <select>
            <option value="vendor">Vendor</option>
          </select>
        </label>

        <label>
          Branch assignee
          <select>
            <option value="vendor">Vendor</option>
          </select>
        </label>
        
        

        <fieldset class="d-md-flex align-items-end pt-5">
          
          <button class="btn btn-secondary ms-auto">Cancel</button>
          <button class="btn btn-primary">Continue </button>
        </fieldset>
      </form>
    </div>
    
  </main>
</template>


