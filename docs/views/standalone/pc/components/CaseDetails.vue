<script setup>
  
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
</script>
<template>
  
  <div  class="admin-panel ">


      <label class="btn btn-primary">
        <select>
          <button><selectedcontent></selectedcontent></button>
          <option>Unkown</option>
          <option>Required</option>
          <hr />
          <option>Not Required</option>
        </select>
      </label>





    <h2 class="lead text-heading d-block pb-1">Client details</h2>

    <div class="d-flex align-items-baseline">
      <span><Tooltip title="Hidden text">All party consent: </Tooltip></span>
      <label class="btn btn-action ms-1">
        <select>
          <button><selectedcontent></selectedcontent></button>
          <option>Unkown</option>
          <option>Required</option>
          <option>Not Required</option>
        </select>
      </label>
      <span class="lead m-0 p-0">Lead client: </span>
      <label class="btn btn-action ms-1">
        <select>
          <option>John Smith</option>
          <option value="Amy Smith" data-email="email@email.co.uk">Amy Smith</option>
        </select>
      </label>
    </div>


    <div class="d-flex hover-light p-2 mb-1 rounded mx-minus-2">
      <div class="d-block">
        <span class="d-block pb-1"><strong>Lead client:</strong> John Smith</span>
        <span class="d-block ">
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
          <span class="pe-3 pb-1 d-inline-block"><strong>Email:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
        </span>
      </div>
      <button class="btn btn-secondary btn-compact fa-edit ms-auto mb-0" data-modal="edit-details">Edit</button>
    </div>

    <hr class="border-1 mb-1"/>

    <div class="d-flex hover-light p-2 mb-1 rounded mx-minus-2">
      <div class="d-block">
        <h2 class="lead text-heading d-block pb-3">Transaction details</h2>

        <span class="d-block">
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
          <span class="pe-3 pb-1 d-inline-block"><strong>Email:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
        </span>
      </div>
      
        <button class="btn btn-secondary btn-compact fa-edit ms-auto mb-0" data-modal="edit-details">Edit</button>
    </div>


    <hr class="border-1 mb-1"/>

    
    <div class="d-flex hover-light p-2 rounded mx-minus-2">
      <div class="d-block">
      <h2 class="lead text-heading d-block pb-3">Agency details</h2>


    <span class="d-block">
      <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
      <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
      <span class="pe-3 pb-1 d-inline-block"><strong>Email:</strong> Vendor</span>
      <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
      <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
    </span>
    </div>
      <button class="btn btn-secondary btn-compact fa-edit ms-auto mb-0" data-modal="edit-details">Edit</button>
    </div>

  </div>
</template>