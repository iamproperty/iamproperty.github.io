<template>
  <div>
    <MBNav></MBNav>
    <main class="main--marketplace">
      
      <div class="container">
        <div class="row">
          <div class="col-12 col-md">
            <h1 class="h2">Welcome, Tom</h1>
          </div>
          <div class="col-md-4 text-md-end">
            
            <a href="/standalone/crm-mb/page2" class="btn btn-primary me-0 " >Add property from CRM</a>
          </div>
        </div>
      </div>

      <div class="container">

        <div class="row">
          <div class="col-md-8">

            <div class="admin-panel">
              <h2><i class="fa-regular fa-calendar"></i>My key tasks (last 30 days)</h2>
              <div class="row pt-2">
                <div class="col-sm-6">
                  <a href="/">
                    <Card>Due diligence requires approval <span>Number of tasks: 24</span></Card>
                  </a>
                </div>
                <div class="col-sm-6">
                  <a href="/">
                    <Card>Due diligence incomplete <hr class="d-none d-sm-block mb-3"/><span>Number of tasks: 24</span></Card>
                  </a>
                </div>
                <div class="col-sm-6">
                  <a href="/">
                    <Card>Compliance payment outstanding <span>Number of tasks: 32</span></Card>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div class="col-md-4">

            <a href="/">
              <Card data-illustration="/svg/illustrations/table.svg">Client onboarding</Card>
            </a>
            <a href="/">
              <Card data-illustration="/svg/illustrations/table.svg">Conveyancing opportunities</Card>
            </a>
          </div>

        </div>

      </div>


      <div class="container">
        <small>The Conveyancing Partnership Ltd (t/a movebutler) is a registered company in England & Wales. Registered office: Floor 6, Arden House, Regent Centre, Newcastle upon Tyne, NE3 3LU. Company Number: 09662389. VAT Reg: 319 1600 25. All rights reserved, designated trademarks and brands are the property of their respective owners. Telephone: 0191 731 9216  Email: enquiries@iamproperty.com. All prices, unless otherwise stated, exclude VAT. Please note that all calls made to and from The Conveyancing Partnership are recorded for training and monitoring purposes.</small>
      </div>

    </main>
  </div>
</template>

<script>
import MBNav from './Nav.vue'
import Input from '@/components/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'
import Card from '@/components/Card/Card.vue'

export default {
  components: {
    MBNav,
    Input,
    Logo,
    Card
  },
}
</script>