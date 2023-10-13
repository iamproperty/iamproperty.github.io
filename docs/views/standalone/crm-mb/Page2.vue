<template>
  <div>
    <MBNav></MBNav>
    <main class="template--form">
      
      <div class="container text-center">

      <h1 class="mx-auto">Fetch property from CRM</h1>
      <ol class="list--steps" data-mobile-text="Client details">
        <li class="step--current">Property details</li>
        <li>Client details</li>
        <li>Onboarding route</li>
      </ol>

      </div>
      <div class="container">
        <div class="form-panel">
          <hr/>
            
          <h2 class="h3">Find existing property from CRM database</h2>
          <div>
            <label for="input11">Search property sales address</label>
            <input type="text" id="input11" name="input11" placeholder="Optional placheolder text" required="" list="addresses" data-change-events='[
            {"in-list":"#addresses", "target":"#property-details", "if": "show", "else": "hide"},
            {"in-list":"#addresses", "target":"#form", "if": "populate-form"}
            ]' />
            <datalist id="addresses">
              <option value="5 Sunset Road, Leeds, West Yorkshire…" data-values='{ "property": "5 Sunset Road, Leeds, West Yorkshire…", "value": "2000,010", "tenure": "freehold", "property-type": "residential", "method-of-sale": ""}'></option>
              <option value="5 Sunset Road, York, West Yorkshire, Y…" data-values='{ "property": "5 Sunset Road, York, West Yorkshire…", "value": "2000,010", "tenure": "freehold", "property-type": "residential", "method-of-sale": ""}'></option>
            </datalist>
            <button class="suffix fa-solid fa-search"><span class="visually-hidden">Search</span></button>
          </div>
        </div>

        <div class="form-panel js-hide" id="property-details">
          <hr/>
          <h3>Property details</h3>
          <form id="form" novalidate action="/standalone/crm-mb/page3">

            <strong class="text-primary d-block">Transation address</strong>
            <div class="pb-5"><span id="property" class="d-inline-block"></span> <i role="button" class="fa-solid fa-trash text-primary ms-3" data-click-events='[
              {"target":"#input11","event":"updateValue","value":""},
              {"target":"#property-details","event":"hide"}
              ]'></i></div>

            <hr/>
            <label for="value">Property value
              <span>
              <span class="prefix">£ <small>GBP</small></span>
              <input type="text"  name="value" placeholder="Optional placheolder text" required="" />
              </span>
            </label>

            <fieldset>
              <span class="label">Tenure</span>
              <input type="radio" name="tenure" id="tenure1" tabindex="-1" value="freehold" required>
              <label for="tenure1" class="d-inline-block">Freehold</label>
              <input type="radio" name="tenure" id="tenure2" tabindex="-1" value="leasehold" required>
              <label for="tenure2" class="d-inline-block">Leasehold</label>
              
              <span class="invalid-feedback">This field is required</span>
            </fieldset>

            <fieldset>
              <span class="label">Property type</span>
              <input type="radio" name="property-type" id="propertyType1" tabindex="-1" value="residential" required>
              <label for="propertyType1" class="d-inline-block">Residential</label>
              <input type="radio" name="property-type" id="propertyType2" tabindex="-1" value="commercial" required>
              <label for="propertyType2" class="d-inline-block">Commercial</label>
              
              <span class="invalid-feedback">This field is required</span>
            </fieldset>

            <fieldset class="pb-3">
              <span class="label">Method of sale</span>
              <input type="radio" name="method-sale" id="methodSale1" tabindex="-1" value="private treaty" required>
              <label for="methodSale1" class="d-inline-block">Private treaty</label>
              <input type="radio" name="method-sale" id="methodSale2" tabindex="-1" value="auction" required>
              <label for="methodSale2" class="d-inline-block">Auction</label>
              <span class="invalid-feedback">This field is required</span>
            </fieldset>


            <Notification >
            <strong>Please ensure the details from your CRM are correct: </strong> If they are not correct, please go to the property details within the CRM to update.
            </Notification>

            <div class="text-end pt-3"><button type="submit" class="btn btn-primary me-auto">Continue</button></div>
          </form>  
        </div>

        <hr/>
      </div>
        
      <MBFooter></MBFooter>
    </main>
  </div>
</template>

<script>
import MBFooter from './Footer.vue'
import MBNav from './Nav.vue'
import Input from '@/components/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'
import Notification from '@/components/Notification/Notification.vue'

export default {
  components: {
    MBNav,
    MBFooter,
    Input,
    Logo,
    Notification
  },
}
</script>