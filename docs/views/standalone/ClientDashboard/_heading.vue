<template>
<div class="container pb-0">
  <div class="row align-items-center mb-4">
    <div class="col-12 col-md mw-md-fit-content me-auto">
      <h1>Welcome, Tom</h1>
    </div>
    <div class="col mw-fit-content">
      <div class="row">
        <div class="col mw-fit-content pe-0">
          <Icon id="house" class="bg-primary rounded-circle fs-4"></Icon>
        </div>
        <div class="col">
          <p class="mb-0">For the sale of: <strong class="d-block d-md-inline-block">12 Acacia Avenue, NE63 8UN</strong></p>
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
    }
  }
  </script>
