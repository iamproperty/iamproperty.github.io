<template>

  <div class="container bg-admin">
    <h2>We're here to help</h2>
    <p class="fs-4">Our Support team can help guide you through the forms within your dashboard.</p>


    <div class="row">
      <div class="col-12 mw-sm-fit-content pe-4">
        <div class="row">
          <div class="col mw-fit-content p-0">
            <Icon id="phone" class="fs-4"></Icon>
          </div>
          <div class="col">
            <p class="mb-2">Call: <br class="d-sm-none"/>0191 731 9216</p>
          </div>
        </div>
      </div>
      <div class="col-12 mw-sm-fit-content pe-4">
        <div class="row">
          <div class="col mw-fit-content p-0">
            <Icon id="email" class="fs-4"></Icon>
          </div>
          <div class="col">
            <p class="mb-2">Email: <br class="d-sm-none"/>productsupport@iamproperty.com</p>
          </div>
        </div>
      </div>
      <div class="col-12 mw-sm-fit-content pe-4">
        <div class="row">
          <div class="col mw-fit-content p-0">
            <Icon id="chat" class="fs-4"></Icon>
          </div>
          <div class="col">
            <p class="mb-2">Livechat</p>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import Icon from '@/foundations/Icon/Icon.vue'

export default {
  components: {
    Icon
  },
}
</script>
