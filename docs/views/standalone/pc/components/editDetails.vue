<script lang="ts" setup>
import clientForm from './client-form.vue';
</script>
<template>
  <dialog id="edit-details" class="dialog--transactional hide-icon text-start">
    <button class="dialog__close">Close</button>
    <span class="h3">Edit details</span>
    <p>You are editing a client for the sale case: 22 Lynx Road, Tynemouth, Newcastle upon Tyne, NE1 5LS</p>
    <div class="mh-lg">
        
      <form>
        
        <input type="hidden" name="alert" value="edit-client" /> 
        
         
        <clientForm></clientForm>
        
          
        <div class="text-nowrap text-end">
          <button class="btn btn-secondary" formmethod="dialog">Cancel</button>
          <button class="btn btn-primary">Save note</button>
      
        </div>   
      </form>
    </div>
  </dialog>
</template>