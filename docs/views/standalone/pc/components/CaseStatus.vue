<script lang="ts" setup>

import { addColour } from '../functions.ts';

  import InlineEdit from '@/components/InlineEdit/InlineEdit.vue';
  import Multiselect from '@/components/Multiselect/Multiselect.vue';
  
</script>
<template>
  <h1 v-if="alert == 'add-onward'" class="h2" >Onward purchase: 22 Lynx Road, Tynemouth, Newcastle Upon Tyne NE1 5LS</h1>
  <h1 v-else>Sale: 22 Lynx Road, Tynemouth, Newcastle Upon Tyne NE1 5LS</h1>

  <div class="md-col-end-6">
    <span class="badge wider-colour-3 me-3 mb-3">Status: Opportunity</span> ID: <strong class="me-3">56930</strong> <a v-if="alert == 'add-onward'" href="/standalone/premium-conveyancing/case" target="_blank"><i class="fa-regular fa-file"></i>View related sale</a>
  </div>

  <div class="md-col-start-8 text-md-end">
      
      <strong>Case assignee: </strong><span class="d-inline-block text-start" data-value="James Lambert"><InlineEdit @inline-edit-save="addColour(tags)" >
                
        
                <Multiselect data-label="" data-name="users2" data-url="/users.json?search=" class="mb-0" data-single>
                  <label class="tag"><input type="checkbox" name="user" value="1234" checked/>James Lambert</label>
                </Multiselect>
                  
                </InlineEdit></span>
    </div>
</template>