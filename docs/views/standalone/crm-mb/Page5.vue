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
      
        <form novalidate action="/standalone/crm-mb/page6">
          <div class="form-panel" >
            <hr/>
            <h2 class="h3">Client type</h2>

              <div data-change-events='[
              {"matches":"vendor-buying","if":"show","else":"hide","target":"#vendor-buying"},
              {"matches":"vendor","if":"hide","target":"#onward-purchase"},
              {"matches":"vendor","if":"show","target":"#first-button"}
              ]'>
                <span class="label">Vendor type</span>
                <input type="radio" name="client-type" id="client-type" value="vendor" required data-change-events>

                <label for="client-type" class="d-inline-block">Vendor</label>
                <input type="radio" name="client-type" id="client-type2" value="vendor-buying" required data-change-events>
                <label for="client-type2" class="d-inline-block">Vendor buying on</label>  
              </div>

              <div  data-change-events='[
              {"matches":"individual","if":"show","else":"hide", "target":"#individual"},{"matches":"company","if":"show","else":"hide","target":"#company"},
              {"matches":"individual","if":"show","target":"#main-form"},{"matches":"company","if":"show","target":"#main-form"}
              ]'>
                <span class="label">Legal type</span>
                <input type="radio" name="legal-type" id="legal-type" value="individual" required data-change-events>
                <label for="legal-type" class="d-inline-block">Individual</label>

                <input type="radio" name="legal-type" id="legal-type2" value="company" required data-change-events>
                <label for="legal-type2" class="d-inline-block">Company</label>
              </div>
          </div>

          <hr/>
          <div class="js-hide" id="main-form">

            <div class="form-panel">

              
              <div class=" js-hide" id="individual">
                <h2 class="h3">Client details</h2>

                <strong class="text-primary d-block">Residential address</strong>
                <p>5 Sunset Road, Leeds, West Yorkshire, England, LS6 4LS <a href="/" class="text-decoration-none ms-1"><i class="fa-regular fa-pen-to-square"></i><span class="visually-hidden">Edit</span></a></p>

                <div class="row">

                  <label class="col-6 col-sm-4 col-md-2">Title <input type="text" name="title" data-required="" /></label>
                </div>
                  
                <label>First name <input type="text" name="first-name" data-required="" /></label>
                  
                <label>Last name <input type="text" name="last-name" data-required="" /></label>

                <label>Email <input type="email" name="email" data-required="" /></label>
                
                <label>Last name <input type="text" name="last-name" data-required="" /></label>

                <label>Telephone <input type="tel" name="telephone" data-required="" /></label>
                  
              </div>

              <hr/>

              <div class=" js-hide" id="company">
                <h2>Company details</h2>

                <strong class="text-primary d-block">Residential address</strong>
                <p>5 Sunset Road, Leeds, West Yorkshire, England, LS6 4LS <a href="/" class="text-decoration-none ms-1"><i class="fa-regular fa-pen-to-square"></i><span class="visually-hidden">Edit</span></a></p>

                
                <label>Legal company name <input type="text" name="company-name" data-required="" /></label>
                
                <label for="reg-number">Company registration number <input type="text" id="reg-number" name="reg-number" data-required="" /></label>

                <label for="reg-country">Country of registration
                  <select type="select" name="reg-country" id="reg-country" data-required>
                    <option value=""></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </label>

              </div>

              <label for="capacity">Capacity
                <select type="select" name="capacity" id="capacity" data-required>
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
              </label>

              <fieldset id="vendor-buying" class="js-hide">
                
                <label for="method">Method of purchase
                  <select type="select" name="method" id="method" data-required>
                    <option value=""></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </label>

                <fieldset>
                  <span class="label">Is the onward purchase being sold through your branch?</span>
                  <input type="radio" name="through-branch" id="through-branch1" value="yes" data-required data-change-events>
                  <label for="through-branch1" class="d-inline-block">Yes</label>
                  <input type="radio" name="through-branch" id="through-branch2" value="no" data-required data-change-events>
                  <label for="through-branch2" class="d-inline-block">No</label>  
                </fieldset>
                <fieldset data-change-events='[
                {"matches":"yes","if":"show","else":"hide","target":"#onward-purchase"},
                {"matches":"yes","if":"hide","else":"show","target":"#first-button"}]'>
                  <span class="label">Do you know the address of the onward purchase?</span>
                  <input type="radio" name="onward-purchase" id="onward-purchase1" value="yes" data-required data-change-events>
                  <label for="onward-purchase1" class="d-inline-block">Yes</label>
                  <input type="radio" name="onward-purchase" id="onward-purchase2" value="no" data-required data-change-events>
                  <label for="onward-purchase2" class="d-inline-block">No</label>  
                </fieldset>
              </fieldset>

              <hr/>
              
              <div id="first-button" class="pt-2">
                
              <Notification class="">
                <strong>Please ensure the details from your CRM are correct: </strong> If they are not correct, please go to the property details within the CRM to update.
              </Notification>

                  
                <div class="row pt-3">
                  <div class="col-md-4 d-flex align-items-center">
                    <a href="/standalone/crm-mb/page4" class="btn btn-tertiary mb-0">Back</a>
                  </div>
                  <div class="col-md-8 text-end">
                    <button type="submit" class="btn btn-primary mb-0 me-0">Save and continue</button>
                  </div>
                </div>

              </div>

            </div>
            
            <div class="form-panel js-hide" id="onward-purchase">
              <hr/>
              <h3>Related sale details</h3>
              <AddressLookup data-url="/addressess.json?search=">
                        
                <label>Address line one <input type="text" name="address-line-1" data-name="address_1" data-required /></label>
                
                <label>Address line two (Optional) <input type="text" name="address-line-2" data-name="address_2" /></label>
                  
                <label>Address line three (Optional) <input type="text" name="address-line-3" data-name="address_3" id="address-line-3"/></label>
                
                  <label>City <input type="text" name="city" data-name="city" id="city" data-required /></label>
                
                  <label>County
                    <select type="select" name="county" id="county" data-required>
                      <option value=""></option>
                      <option value="Tyne and Wear">Tyne and Wear</option>
                      <option value="Cleveland">Cleveland</option>
                    </select>
                  </label>
                
                  <div class="row"><label class="col-sm-4">Postcode <input type="text" name="postcode" data-name="address_1" id="postcode" data-required /></label></div>
                  
                
                  <label>Country
                    <select type="select" name="country" id="country" data-required>
                      <option value=""></option>
                      <option value="England">England</option>
                      <option value="Scotland">Scotland</option>
                      <option value="Wales">Wales</option>
                    </select>
                  </label>
              </AddressLookup>

              <div class="row pt-3">
                  <div class="col-md-4 d-flex align-items-center">
                    <a href="/standalone/crm-mb/page4" class="btn btn-tertiary mb-0">Back</a>
                  </div>
                  <div class="col-md-8 text-end">
                    <button type="submit" class="btn btn-primary mb-0 me-0">Save and continue</button>
                  </div>
                </div>

            </div>
          </div>

        </form>





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