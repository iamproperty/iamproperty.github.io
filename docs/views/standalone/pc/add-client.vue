<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import PCNav from './components/PCNav.vue';

import clientForm from './components/client-form.vue';

</script>

<template>
  <nav>
  <PCNav></PCNav>
  </nav>
  <main class="template--form">
    <div class="container text-center">
      <h1 class="mx-auto">Add client</h1>

    </div>
    <div  class="container">
      
      <form class="form-panel" action="/standalone/premium-conveyancing/case">
        
        <h2>Enter client details </h2>
        <p>You are adding a client to the sale case: 22 Lynx Road, Tynemouth, Newcastle upon Tyne NE1 5LS</p>
        
        <input type="hidden" name="alert" value="add-client" />

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


