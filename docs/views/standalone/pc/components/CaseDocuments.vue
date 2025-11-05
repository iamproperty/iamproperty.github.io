<script lang="ts" setup>


</script>
<template>
  
  <div class="admin-panel md-col-start-8">
      <h2 class="bg-light">Documents</h2>
      <div v-if="alert == 'add-note'" class="text-end"><button data-modal="add-note" class="fa-plus btn btn-action btn-primary">Upload document</button></div>
      <div v-if="alert == 'add-note'" class="mh-md">

      </div>
      <div v-else class="d-flex flex-column align-items-center p-5 text-center">
        <span class="h3 d-block pb-3">No documents added</span>
        <button class="btn btn-secondary mx-auto mb-0" >Add document</button>
      </div>
 
    </div> 
</template>