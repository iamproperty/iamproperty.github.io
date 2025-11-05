<script lang="ts" setup>


  
</script>
<template>
  
  <div id="notes" class="admin-panel md-col-end-7">
      <h2 class="bg-light">Notes</h2>

      <div v-if="alert == 'add-note'" class="text-end"><button data-modal="add-note" class="fa-plus btn btn-action btn-primary">Add note</button></div>
      <div v-if="alert == 'add-note'" class="mh-md">
        <span class="d-block pb-1">Most recent</span>

        <span class="pe-1 pb-1 d-block"><strong>Title of note</strong></span>
        <span class="d-block mb-2">
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
          <span class="pe-3 pb-1 d-inline-block"><strong>Email:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
        </span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        <hr class="border-1 mb-3" />

        
        <span class="pe-1 pb-1 d-block"><strong>Title of note</strong></span>
        <span class="d-block mb-2">
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
          <span class="pe-3 pb-1 d-inline-block"><strong>Email:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
        </span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


      </div>
      <div  v-else class="d-flex flex-column align-items-center p-5 text-center">
        <span class="h3 d-block pb-3">No notes added</span>
        <button  data-modal="add-note" class="btn btn-secondary mx-auto mb-0" >Add note</button>
        
      </div>
    </div>
</template>