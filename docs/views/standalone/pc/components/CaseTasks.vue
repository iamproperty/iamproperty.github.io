<script lang="ts" setup>

import { addColour } from '../functions.ts';

  import InlineEdit from '@/components/InlineEdit/InlineEdit.vue';
  import Multiselect from '@/components/Multiselect/Multiselect.vue';
  
</script>
<template>
  
  <div class="admin-panel">
      <h2 class="bg-light">Tasks</h2>

      <div class="d-flex align-items-start">
        <!--<span class="lead d-block p-0 me-1"><i class="fa-regular fa-dash p-1"></i></span>-->
        <span class="d-block p-0 me-1"><i class="fa-regular fa-check rounded-circle bg-success p-1 text-center"></i></span>
        <div>
          <strong class="lead d-block pb-1">Chase prospect</strong>
        
          <span class="d-block mb-2">
            <span class="pe-3 pb-1 d-inline-block"><strong>Task created:</strong> 21.09.25</span>
            <span class="pe-3 pb-1 d-inline-block"><strong>Time:</strong> 11:00</span> 
            <span class="pe-3 pb-1 d-inline-block"><strong>Assignee:</strong> <span class="d-inline-block text-start" data-value="Amanda Knight"><InlineEdit @inline-edit-save="addColour(tags)" >
                <Multiselect data-label="" data-name="users2" data-url="/users.json?search=" class="mb-0" data-single>
                  <label class="tag"><input type="checkbox" name="user" value="1234" checked/>Amanda Knight</label>
                </Multiselect>
                </InlineEdit></span></span>
          </span>
        </div>
      </div>
      <div class="d-flex align-items-start">
        <span class="d-block p-0 me-1"><i class="fa-regular fa-dash p-1 text-center"></i></span>
        <div>
          <strong class="lead d-block pb-1">New prospect</strong>
        
          <span class="d-block mb-2">
            <span class="pe-3 pb-1 d-inline-block"><strong>Task created:</strong> 21.09.25</span>
            <span class="pe-3 pb-1 d-inline-block"><strong>Time:</strong> 11:00</span> 
            <span class="pe-3 pb-1 d-inline-block"><strong>Assignee:</strong> <span class="d-inline-block text-start" data-value="James Lambert"><InlineEdit @inline-edit-save="addColour(tags)" >
                <Multiselect data-label="" data-name="users2" data-url="/users.json?search=" class="mb-0" data-single>
                  <label class="tag"><input type="checkbox" name="user" value="1234" checked/>James Lambert</label>
                </Multiselect>
                </InlineEdit></span></span>
          </span>
        </div>
      </div>
        
    </div>
</template>