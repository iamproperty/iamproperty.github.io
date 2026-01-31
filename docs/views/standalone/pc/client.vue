<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import PCNav from './components/PCNav.vue';
  import Table from '@/components/Table/TableAjax.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';

  
import AddressLookup from '@/components/AddressLookup/AddressLookup.vue';
import { useRoute } from 'vue-router'
import clientForm from './components/client-form.vue';

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
      <ol class="list--steps" data-mobile-text="Client details">
        <li class="step--complete">Transaction</li>
        <li class="step--current">Client</li>
        <li>Agency</li>
      </ol>
    </div>
    <div  class="container">
      
      <form class="form-panel" action="/standalone/premium-conveyancing/add-opportunity/agency">
        
        <h2>Eneter client details </h2>
        
        <input v-if="onward" type="hidden" name="onward" value="yes" />

        <clientForm></clientForm>
        

        <fieldset class="d-md-flex align-items-end pt-5">
          <a href="/standalone/premium-conveyancing/add-opportunity/client" class="me-5">Add another client </a>
          <button class="btn btn-secondary ms-auto">Cancel</button>
          <button class="btn btn-primary">Continue </button>
        </fieldset>
      </form>
    </div>
    
  </main>
</template>


