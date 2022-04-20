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
        <h2 class="h5">Please complete and submit your onboarding with iamproperty</h2>

        <ul class="tick-list tick-list--featured">
          <li class="bg-primary">
            <div class="d-flex align-items-center flex-wrap">
              <span class="min-fit-content me-auto">
                <span class="h5 mb-0">Compliance and ID</span>
                <span class="mb-0">Submitted</span>
              </span>
              <span class="">Completed</span>
            </div>
          </li>
          <li class="bg-primary">
            <div class="d-flex align-items-center flex-wrap">
              <span class="min-100 min-sm-fit-content me-auto">
                <span class="h5 mb-0">Legal verification</span>
                <span class="mb-0">TBI Solicitors</span>
              </span>
              <a href="/continue">Track progress<i class="ms-2 icon fal fa-arrow-right text-warning"></i></a>
            </div>
          </li>
          <li class="bg-primary">
            <div class="d-flex align-items-center flex-wrap">
              <span class="min-fit-content me-auto">
                <span class="h5 mb-0">Financial verification</span>
                <span class="mb-0">Appointment booked</span>
              </span>
              <a href="/continue">Track progress<i class="ms-2 icon fal fa-arrow-right text-warning"></i></a>
            </div>
          </li>
          <li class="bg-primary">
            <div class="d-flex align-items-center flex-wrap">
              <span class="min-fit-content me-auto">
                <span class="h5 mb-0">Property survey</span>
                <span class="mb-0">Call requested</span>
              </span>
              <a href="/continue">Track progress<i class="ms-2 icon fal fa-arrow-right text-warning"></i></a>
            </div>
          </li>
          
        </ul>


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