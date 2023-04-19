<template>
  <div class="bg-admin" style="min-height: 100vh;">
    <Nav logo="property">
      
    </Nav>
    <main>
      
      <div class="container">

        <div class="row pt-3 grid">
          <div class="col-md-5 me-auto grid-col-1">
            <h1>Hello</h1>
            <p class="strapline">Please create an account to get started or login to track the progress of your property sale or purchase</p>
            <div class="d-none d-md-block">
            <p class="small mb-1">Powered by</p>
            <Logo id="property" class="fs-1"></Logo>
          </div>
          </div>

          <div class="col-md-6">

            <form class="admin-panel">
              <div class="admin-panel__links">
                <a href="/components/panel" class="current">New customer</a>
                <a href="/components/panel">Log in</a>
              </div>

              <Input id="email" label="Email" required></Input>
              <Input type="password" id="email" label="Create password" required></Input>
              <Input type="password" id="email" label="Confirm password" required></Input>

              <Input type="checkbox" id="terms" :label="`<a href='/terms' target='_blank'>I agree to the Movebutler Terms</a>`" required></Input>
              <hr />
              <Input type="checkbox" id="privacy" :label="`<a href='/terms' target='_blank'>I agree to the Movebutler Privacy Policy</a>`" required></Input>
              <hr />


              <button class="btn btn-primary">Start now</button>
            </form>


          </div>
          <div class="col-md-5 me-auto d-md-none">
            <p class="small mb-1">Powered by</p>
            <Logo id="property" class="fs-1"></Logo>
          </div>
          
        </div>

      </div>





    </main>
  </div>
</template>


<script>
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionItem from '@/components/Accordion/AccordionItem.vue'
import NoteFeed from '@/components/NoteFeed/NoteFeed.vue'
import Stepper from '@/components/Stepper/Stepper.vue'
import Step from '@/components/Stepper/Step.vue'
import Nav from '@/components/Nav/Nav.vue'
import Input from '@/components/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'
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
    Icon
  },
  data () {
    return {
    }
  }
}
</script>