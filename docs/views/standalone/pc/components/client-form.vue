<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
import AddressLookup from '@/components/AddressLookup/AddressLookup.vue';

</script>

<template>
  <label>
    Client type
    <select>
      <option value="vendor">Vendor</option>
    </select>
  </label>
  <label>
    First name
    <input type="text" name="name" />
  </label>
  <label>
    Last name
    <input type="text" name="name" />
  </label>
  <label>
    Phone number
    <input type="text" name="name" />
  </label>
  
  <label>
    Email address
    <input type="email" name="name" />
  </label>

  
  <AddressLookup data-url="/addressess2.json?search=" data-title="Correspondence address">
    <label>Address line one <input type="text" name="address-line-1" data-name="address_1" data-name-alt="address_number_name" data-name-2="address_1" data-required=""></label><label>Address line two (Optional) <span class="optional-text"></span><input type="text" name="address-line-2" data-name="address_2"></label><label>Address line three (Optional) <span class="optional-text"></span><input type="text" name="address-line-3" data-name="address_3" id="address-line-3"></label><label>City <input type="text" name="city" data-name="city" id="city" data-required=""></label><label>County <select name="county" id="county" data-required=""><option value=""></option><option value="Tyne and Wear">Tyne and Wear</option><option value="Cleveland">Cleveland</option></select></label><div class="row"><label class="col-sm-4">Postcode <input type="text" name="postcode" data-name="address_1" data-required=""></label></div><label>Country <select name="country" id="country" data-required=""><option value=""></option><option value="England">England</option><option value="Scotland">Scotland</option><option value="Wales">Wales</option></select></label>
  </AddressLookup>


  <span class="label pt-3">Client status</span>
  <label class="mb-0">
    <input type="radio" name="lead" value="lead" /> Lead client
  </label>
  <label >
    <input type="radio" name="lead" value="standard" /> Standard client
  </label>
</template>