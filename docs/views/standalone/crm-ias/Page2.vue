<template>
  <div>
    <MBNav></MBNav>
    <main class="template--form">
      
      <div class="container pt-4 text-center">

        <h1 class="mx-auto">You have successfully added a property lead!</h1>
        
        <a href="/agent-platform" class="btn btn-primary mx-auto">Return to agent platform</a>
      </div>
      
        
      <div class="form-panel">
          
        <h2>What happens on the call with your client</h2>
        <p class="lead">Depending on the conversation with your client, we will discuss a variety of options, which may include the following payment and auction routes:</p>

        <h3 class="h4">Payment routes</h3>
        <div class="row">
          <div class="col-3"><img src="/img/illustrations/estate-agents.png" alt="" class="mb-3"/></div>
          <div class="col">
            <p><strong>Buyer paid route</strong><br/> Upon successful sale, the buyer will be charged a fee of: 4.20% to a minimum of £6,000.00 (This fee covers the auction and estate agent contract.)</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3"><img src="/img/illustrations/estate-agents.png" alt="" class="mb-3"/></div>
          <div class="col">
            <p><strong>Vendor paid route</strong><br/> Upon successful sale, the vendor will be charged a fee of: 4.20% to a minimum of £6,000.00.<br/><br/>The buyer is charged a deposit, which is taken from as part-payment of the final negotiated selling price and will be deducted from the balance of the final selling price upon completion of contracts.</p>
          </div>
        </div>

        
        <h3 class="h4">Auction routes</h3>
        <div class="row">
          <div class="col-3"><img src="/img/illustrations/estate-agents.png" alt="" class="mb-3"/></div>
          <div class="col">
            <p><strong>Modern method</strong><br/> Buyer will pay the reservation fee or deposit on the property.<br/><br/> Agree to exchange contracts and complete within 56 days of receiving draft contracts.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3"><img src="/img/illustrations/estate-agents.png" alt="" class="mb-3"/></div>
          <div class="col">
            <p><strong>Traditional method</strong><br/> Buyer will pay a 10% deposit against the property.<br/><br/> Immediate exchange of contracts. Complete within 28 days from exchange.</p>
          </div>
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
import FileUpload from '@/components/FileUpload/FileUpload.vue'


export default {
  components: {
    MBNav,
    MBFooter,
    Input,
    Logo,
    Notification,
    FileUpload
  },
  data () {
    return {
    }
  }
}
</script>