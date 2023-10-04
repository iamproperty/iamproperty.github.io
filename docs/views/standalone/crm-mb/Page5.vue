<template>
  <div>
    <MBNav></MBNav>
    <main class="template--form">
      
      <div class="container pt-4 text-center">

      <h1 class="mx-auto">Fetch property from CRM</h1>
      <ol class="list--steps" data-mobile-text="Client details">
        <li class="step--complete">Property details</li>
        <li class="step--current">Client details</li>
        <li>Onboarding route</li>
      </ol>

      </div>
      <div class="container">

        <div class="form-panel" >
          <hr/>
          <h2>Client type</h2>


          <form id="form">

            <div data-change-events='[{"matches":"vendor-buying","if":"show","else":"hide","target":"#vendor-buying"}]'>
              <span class="label">Vendor type</span>
              <input type="radio" name="client-type" id="client-type" tabindex="-1" value="vendor" required data-change-events>

              <label for="client-type" class="d-inline-block">Vendor</label>
              <input type="radio" name="client-type" id="client-type2" tabindex="-1" value="vendor-buying" required data-change-events>
              <label for="client-type2" class="d-inline-block">Vendor buying on</label>  
            </div>

            <div data-change-events='[{"matches":"individual","if":"show","else":"hide", "target":"#individual"},{"matches":"company","if":"show","else":"hide","target":"#company"},{"matches":"individual","if":"show","else":"hide", "target":"#individual"},{"matches":"company","if":"show","else":"hide","target":"#company"}]'>
              <span class="label">Legal type</span>
              <input type="radio" name="legal-type" id="legal-type" tabindex="-1" value="individual" required data-change-events>
              <label for="legal-type" class="d-inline-block">Individual</label>


              <input type="radio" name="legal-type" id="legal-type2" tabindex="-1" value="company" required data-change-events>
              <label for="legal-type2" class="d-inline-block">Company</label>

            </div>
            <!--<div class="text-end pt-3 js-hide"><button type="submit" class="btn btn-primary mb-0">Continue</button></div>-->
          </form>
        </div>

        <hr/>
        <form class="js-hide" id="individual" novalidate action="/standalone/crm-mb/page6">
        <div class="form-panel">
          <hr/>
          <h2>Client details</h2>

          individual

          <fieldset id="vendor-buying" class="js-hide">
            
            <div>
              <label for="vendor">Select existing vendor from CRM</label>
              <select type="select" name="vendor" id="vendor" data-required>
                <option value=""></option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </div>
            <div data-change-events='[
            {"matches":"yes","if":"show","else":"hide","target":"#onward-purchase"},
            {"matches":"yes","if":"hide","else":"show","target":"#first-button"}]'>
              <span class="label">Do you know the address of the onward purchase?</span>
              <input type="radio" name="onward-purchase" id="onward-purchase1" tabindex="-1" value="yes" data-required data-change-events>
              <label for="onward-purchase1" class="d-inline-block">Yes</label>
              <input type="radio" name="onward-purchase" id="onward-purchase2" tabindex="-1" value="no" data-required data-change-events>
              <label for="onward-purchase2" class="d-inline-block">No</label>  
            </div>
          </fieldset>
          <div id="first-button">
              
            <button class="btn btn-primary" type="submit">Save and continue</button>
          </div>
        </div>
        
        <div class="form-panel js-hide" id="onward-purchase">
          <hr/>
          <h3>Related sale details</h3>
          <AddressLookup data-url="/addressess.json?search=">
                    
            <div>
              <label for="address-line-1">Address line one</label>
              <input type="text" name="address-line-1" data-name="address_1" id="address-line-1" data-required />
              <span class="invalid-feedback">This field is required</span>
            </div>
            <div>
              <label for="address-line-2">Address line two</label>
              <input type="text" name="address-line-2" data-name="address_2" id="address-line-2"/>
            </div>
            <div>
              <label for="address-line-3">Address line three</label>
              <input type="text" name="address-line-3" data-name="address_3" id="address-line-3"/>
            </div>
            <div>
              <label for="city">City</label>
              <input type="text" name="city" data-name="city" id="city" data-required />
              <span class="invalid-feedback">This field is required</span>
            </div>
            <div>
              <label for="county">County</label>
              <select type="select" name="county" id="county" data-required>
                <option value=""></option>
                <option value="Tyne and Wear">Tyne and Wear</option>
                <option value="Cleveland">Cleveland</option>
              </select>
              <span class="invalid-feedback">This field is required</span>
            </div>
            <div>
              <label for="postcode">Postcode</label>
              <input type="text" name="postcode" data-name="address_1" id="postcode" data-required  />
              <span class="invalid-feedback">This field is required</span>
            </div>
            <div>
              <label for="country">Country</label>
              <select type="select" name="country" id="country" data-required>
                <option value=""></option>
                <option value="England">England</option>
                <option value="Scotland">Scotland</option>
                <option value="Wales">Wales</option>
              </select>
              <span class="invalid-feedback">This field is required</span>
            </div>
          </AddressLookup>

          <button class="btn btn-primary" type="submit" id="second-button">Save and continue</button>
        </div>
      </form>



        <div class="form-panel js-hide" id="company">
          <hr/>
          <h2>Client details</h2>

          company

          
        </div>










      </div>














      <MBFooter></MBFooter>
    </main>
  </div>
</template>

<script>
import MBNav from './Nav.vue'
import MBFooter from './Footer.vue'
import Input from '@/components/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'
import Notification from '@/components/Notification/Notification.vue'
import AddressLookup from '@/components/AddressLookup/AddressLookup.vue'

export default {
  components: {
    MBNav,
    MBFooter,
    Input,
    Logo,
    Notification,
    AddressLookup
  },
}
</script>