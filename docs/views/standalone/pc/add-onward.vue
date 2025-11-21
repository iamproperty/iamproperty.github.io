<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import PCNav from './components/PCNav.vue';

  
import AddressLookup from '@/components/AddressLookup/AddressLookup.vue';
</script>

<template>
  <nav>
  <PCNav></PCNav>
  </nav>
  <main class="template--form">
    <div class="container text-center">
      <h1 class="mx-auto">Add linked onward purchase</h1>

    </div>
    <div  class="container">
      
      <form class="form-panel" action="/standalone/premium-conveyancing/case">
        
        <h2 >Enter transaction details</h2>
        
        <p>You are adding a linked onward purchase case for the sales case: 22 Lynx Road, Tynemouth, Newcastle upon Tyne NE1 5LS. The client details used in the sale transaction will be applied to the onward purchase case.</p>
        
        <input type="hidden" name="alert" value="add-onward" />

        

        <AddressLookup data-url="/addressess2.json?search=">
          <label>Address line one <input type="text" name="address-line-1" data-name="address_1" data-name-alt="address_number_name" data-name-2="address_1" data-required=""></label><label>Address line two (Optional) <span class="optional-text"></span><input type="text" name="address-line-2" data-name="address_2"></label><label>Address line three (Optional) <span class="optional-text"></span><input type="text" name="address-line-3" data-name="address_3" id="address-line-3"></label><label>City <input type="text" name="city" data-name="city" id="city" data-required=""></label><label>County <select name="county" id="county" data-required=""><option value=""></option><option value="Tyne and Wear">Tyne and Wear</option><option value="Cleveland">Cleveland</option></select></label><div class="row"><label class="col-sm-4">Postcode <input type="text" name="postcode" data-name="address_1" data-required=""></label></div><label>Country <select name="country" id="country" data-required=""><option value=""></option><option value="England">England</option><option value="Scotland">Scotland</option><option value="Wales">Wales</option></select></label>
        </AddressLookup>

        


        <label>
          Asking price
          <span><span class="prefix">£</span><input type="text" name="price" /></span>
          
        </label>

        <label>
          Method of purchase
          <select>
            <option value="vendor" name="method">Vendor</option>
          </select>
        </label>

        
        <span class="label pt-3">Tenure</span>
        <label class="mb-0">
          <input type="radio" name="tenure" value="freehold" /> Freehold
        </label>
        <label>
          <input type="radio" name="tenure" value="leasehold" /> Leasehold
        </label>

        <span class="label pt-5">Property type</span>
        <label class="mb-0">
          <input type="radio" name="type" value="residential" /> Residential
        </label>
        <label>
          <input type="radio" name="type" value="commercial" /> Commercial/land
        </label>

        <fieldset class="text-end">
          <button class="btn btn-secondary">Cancel </button>
          <button class="btn btn-primary">Continue </button>
        </fieldset>
      </form>
    </div>
    
  </main>
</template>


