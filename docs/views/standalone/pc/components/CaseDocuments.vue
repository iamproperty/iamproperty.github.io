<script lang="ts" setup>
  import { ref, onMounted } from 'vue'

let alert = "add-note";

let instruction = ref();

</script>
<template>
  
  <div class="admin-panel md-col-start-8">
    <h2 class="bg-light">Documents</h2>

    <div v-if="alert == 'add-note'" class="d-flex">

      <label class="tag tag--toggle"><input type="radio" name="tag" value="pre" v-model="instruction">Pre-instruction</label>
      <label class="tag tag--toggle"><input type="radio" name="tag" value="post" v-model="instruction">Post-instruction</label>
      <button data-modal="add-note" class="fa-plus btn btn-action btn-primary ms-auto">Upload document</button>
    
    </div>
    <div v-if="alert == 'add-note'" class="mh-md">

      <template v-if="instruction == 'pre' || !instruction">
        <span class="pe-1 pb-1 d-block"><strong>Title of note</strong></span>
        <span class="d-block mb-2">
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
        </span>
          
        <hr class="border-1 mb-3" />
      </template>

    </div>
    <div v-else class="d-flex flex-column align-items-center p-5 text-center">
      <span class="h3 d-block pb-3">No documents added</span>
      <button class="btn btn-secondary mx-auto mb-0" >Add document</button>
    </div>

  </div> 
</template>