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
          <h2 class="h3">Select your client type</h2>


          <form id="form" novalidate action="/standalone/crm-mb/page5">

            <div data-change-events='[{"matches":"vendor","if":"setAttribute","else":"removeAttribute","attribute":"required", "value":"true","target":"#vendor"},{"matches":"buyer","if":"setAttribute","else":"removeAttribute","attribute":"required", "value":"true","target":"#buyer"}]'>
              <span class="label">Client type</span>
              <input type="radio" name="client-type" id="client-type" tabindex="-1" value="vendor" required data-change-events>
              <label for="client-type" class="d-inline-block">Vendor</label>
              <input type="radio" name="client-type" id="client-type2" tabindex="-1" value="buyer" required data-change-events>
              <label for="client-type2" class="d-inline-block">Buyer</label>

              <hr/>
              <div class="conditional conditional-1 pt-3">
                
                <label for="vendor">Select existing vendor from CRM
                  <select type="select" name="vendor" id="vendor">
                    <option value=""></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </label>

              </div>
              <div class="conditional conditional-2 pt-3">
                <label for="buyer">Select existing buyer from CRM
                  <select type="select" name="buyer" id="buyer">
                    <option value=""></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </label>
              </div>
            </div>

            <div class="row pt-3">
              <div class="col-md-4 d-flex align-items-center">
                <a href="/standalone/crm-mb/page3" class="btn btn-tertiary mb-0">Back</a>
              </div>
              <div class="col-md-8 text-end">
                <button type="submit" class="btn btn-primary mb-0 me-0">Continue</button>
              </div>
            </div>

          </form>  
        </div>

        <hr/>
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