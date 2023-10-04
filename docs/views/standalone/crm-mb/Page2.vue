<template>
  <div>
    <MBNav></MBNav>
    <main class="template--form">
      
      <div class="container pt-4 text-center">

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
            {"in-list":"#addresses", "target":"#form", "if": "populate-form", "source": "/property.json"}
            ]' />
            <datalist id="addresses">
              <option value="5 Sunset Road, Leeds, West Yorkshire…"></option>
              <option value="5 Sunset Road, York, West Yorkshire, Y…"></option>
            </datalist>
            <button class="suffix fa-solid fa-search"><span class="visually-hidden">Search</span></button>
          </div>
        </div>

        <div class="form-panel js-hide" id="property-details">
          <hr/>
          <h3>Property details</h3>
          <form id="form" novalidate action="/standalone/crm-mb/page3">

            <strong class="text-primary d-block">Transation address</strong>
            <span id="property" class="d-block"></span>

            <hr/>
            <div>
              <label for="value">Input field label</label>
              <span class="prefix">£ <small>GBP</small></span>
              <input type="text" id="value" name="value" placeholder="Optional placheolder text" required="" />
            </div>

            <div>
              <span class="label">Tenure</span>
              <input type="radio" name="tenure" id="tenure1" tabindex="-1" value="freehold">
              <label for="tenure1" class="d-inline-block">Freehold</label>
              <input type="radio" name="tenure" id="tenure2" tabindex="-1" value="leasehold">
              <label for="tenure2" class="d-inline-block">Leasehold</label>
            </div>

            <div>
              <span class="label">Property type</span>
              <input type="radio" name="property-type" id="propertyType1" tabindex="-1" value="residential">
              <label for="propertyType1" class="d-inline-block">Residential</label>
              <input type="radio" name="property-type" id="propertyType2" tabindex="-1" value="commercial">
              <label for="propertyType2" class="d-inline-block">Commercial</label>
            </div>

            <div>
              <span class="label">Method of sale</span>
              <input type="radio" name="method-sale" id="methodSale1" tabindex="-1" value="private treaty" required>
              <label for="methodSale1" class="d-inline-block">Private treaty</label>
              <input type="radio" name="method-sale" id="methodSale2" tabindex="-1" value="auction" required>
              <label for="methodSale2" class="d-inline-block">Auction</label>
              <span class="invalid-feedback">This field is required</span>
            </div>


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
    MBFooter,
    Input,
    Logo,
    Notification
  },
}
</script>