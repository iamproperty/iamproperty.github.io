<template>
  <div>
    <MBNav></MBNav>
    <main class="main--marketplace">
      
      <div class="container pt-4">

      <h1 class="h2">Welcome to your movebutler dashboard</h1>

      </div>
      <div class="container pt-4">

        <div class="row">
          <div class="col-md-6">
            <div class="brand brand--property" >
              <svg>
                <title>iamproperty Movebutler</title>
                <use xlink:href="/svg/logo.svg#logo-property"></use>
              </svg>
            </div>
            <h2>Add a new property</h2>

            <a href="/standalone/crm-mb/page2" class="btn btn-primary" >Fetch property from CRM</a>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MBNav from './Nav.vue'
import Input from '@/components/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'

export default {
  components: {
    MBNav,
    Input,
    Logo
  },
}
</script>