<template>
  
  <main class="min-vh-100 row">
    

    <div class="col-md-4 p-5 d-flex flex-column justify-content-center">
      <ClientLogo class="mb-5"></ClientLogo>

      <div class="my-auto">
      <h1>Welcome to your dashboard, vendor name</h1>
      
      <span class="d-block">THE SALE OF </span>
      <span class="h4 d-block mb-4">Testing Dalvey Way, New Whittington, S43 2QD</span>

      <p>Thank you for registering with iamproperty, you're one step closer to selling your property!</p>

      </div>

      <p class="small mb-1 mt-auto">Powered by</p>
      <Logo id="property" class="fs-1 p-0"></Logo>
    
    </div>

    <div class="col-md bg-admin p-5 d-flex flex-column overflow-hidden position-relative">
      
<span class="circle circle-3 circle--stripe text-danger opacity-25"></span>

      <nav class="ms-auto mb-4 position-relative">

<span class="circle circle-1 text-warning bg-secondary"></span>
<span class="circle circle-2 circle--cross text-info"></span>

        <ul class="list-unstyled list-inline">
            <li class="list-inline-item"><a href="https://iamproperty.testing.iamproperty.group/client/transactions" class="font-bold text-grey me-4">My Transactions</a></li>
            <li class="list-inline-item"><a href="https://iamproperty.testing.iamproperty.group/logout" class="font-bold text-grey">Log out</a></li>
        </ul>
      </nav>
      
      <div class="my-auto pb-5">
        <p class="mb-3"><a href="/back" class=""><i class="me-2 icon fal fa-arrow-left text-warning"></i>Back to dashboard</a></p>
        <h2>Your financial tracker</h2>

<div class="row">
  <div class="col-md-6 me-auto">
    <h3>Mortgage milestones</h3>
    <span class="h6 d-inline-block bg-secondary p-2 rounded-3 me-2">Ref: XXXXX</span>
    <span class="h6 d-inline-block bg-secondary p-2 rounded-3 me-2">Status: Appointment booked</span>
    
    <div class="bg-white rounded-3 p-3 mb-4 mt-4">
      <ul class="tick-list mb-0">
        <li class="d-flex">Information <span class="ms-auto ps-3">(XX/XX/XXXX)</span></li>
        <li class="d-flex">Information <span class="ms-auto ps-3">(XX/XX/XXXX)</span></li>
        <li class="d-flex">Information <span class="ms-auto ps-3">(XX/XX/XXXX)</span></li>
        <li class="d-flex">Information <span class="ms-auto ps-3">(XX/XX/XXXX)</span></li>
        <li class="d-flex">Information <span class="ms-auto ps-3">(XX/XX/XXXX)</span></li>
        <li class="d-flex">Information <span class="ms-auto ps-3">(XX/XX/XXXX)</span></li>
      </ul>
    </div>


  </div> 
  <div class="col-md-5">
    <h3>Mortgage</h3>
    <ul class="list-unstyled mb-5">
      <li class="mb-2"><strong>Eligibility:</strong> Completed 01/02/22</li>
      <li class="mb-2"><strong>A mortgage in principle has been generated</strong><br><a href="/download" download>Download<i class="icon fa-download"></i></a></li>
      <li class="mb-2"><strong>Proof and source of funds report</strong><br><a href="/download" download>Download<i class="icon fa-download"></i></a></li>
    </ul>
    <h3>Deposit</h3>
    <ul class="list-unstyled">
      <li class="mb-2"><strong>Deposit amount:</strong> £xxxxx</li>
      <li class="mb-2"><strong>Deposit proof:</strong> Uploaded<br><a href="/download" download>Download<i class="icon fa-download"></i></a></li>
      <li class="mb-2"><strong>Appointment:</strong> Booked</a></li>
    </ul>
  </div>
</div>

       


      </div>
      
    </div>
    
        
  </main>
</template>

<style lang="scss" scoped>

.circle-1,
.circle-2,
.circle-3 {
  position: absolute;
}

.circle-1 {
  top: 0%;
  right: 100%;
  font-size: 8rem;
  margin-top: -7rem;
  margin-right: 10rem;
  z-index: 1;
}
.circle-2 {
  top: 0%;
  right: 100%;
  font-size: 12rem;
  margin-top: -10rem;
  margin-right: 1rem;
}

.circle-3 {
  top: 100%;
  left: 20%;
  font-size: 10rem;
  margin-top: -4rem;
}
</style>

<script>
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionItem from '@/components/Accordion/AccordionItem.vue'
import NoteFeed from '@/components/NoteFeed/NoteFeed.vue'
import Stepper from '@/components/Stepper/Stepper.vue'
import Step from '@/components/Stepper/Step.vue'
import Nav from '@/components/Nav/Nav.vue'
import Input from '@/elements/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'
import ClientLogo from './clientLogo.vue'
import Icon from '@/foundations/Icon/Icon.vue'

export default {
  components: {
    AccordionItem,
    Accordion,
    NoteFeed,
    Stepper,
    Step,
    Nav,
    Input,
    Logo,
    ClientLogo,
    Icon
  },
  data () {
    return {
    }
  }
}
</script>


