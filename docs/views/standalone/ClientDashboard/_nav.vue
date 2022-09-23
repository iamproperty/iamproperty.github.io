<template>
    <Nav logo="property" class="nav--just-account">


      <template v-slot:account>

<span class="row">
    <span class="col mw-fit-content"><Icon id="account" class="fs-2 p-2 m-0"></Icon></span>
    <span class="col d-flex align-items-center">
      <span Class="h5 mb-1">Johny Smith</span>
    </span>
  <form class="mt-2">
  <Input type="select" id="test1" label="Today, you're at" :options="[{display:'Branch 1',value:'1'},{display:'Branch Two',value:'2'},{display:'Create new branch',value:'new'}]" data-value-if="new" data-redirect="/cp/company/branches/create"></Input>
  </form>
</span>


  <span class="row">
    <span class="col mw-fit-content"><Icon id="auction" class="fs-2 p-2 m-0"></Icon></span>
    <span class="col">
      <span Class="h5 mb-1">Services</span>
      <span class="small">
        <ul class="list-unstyled services text-primary">
          <li>iamproperty <span class="service service--active">Active</span></li>
          <li>iamsold <span class="service service--active">Active</span></li>
          <li>movebutler <span class="service service--active">Active</span></li>
        </ul>
      </span>
    </span>
  </span>

<a href="/" class="nav__featured-link text-decoration-none pb-5 d-block mb-0">
  <span class="row">
    <span class="col mw-fit-content"><Icon id="account-settings" class="fs-2 m-0"></Icon></span>
    <span class="col">
      <span Class="h5 mb-1">Control panel</span>
      <span class="small">
        Manage your iamproperty account, branches, staff, billing and invoices.
      </span>
    </span>
  </span>
</a>

<div class="credits">

  <span Class="h5 mb-1">Your credits</span>
  <span class="small">
    <ul class="list-unstyled text-primary">
      <li class="d-flex">Credits user <span class="ms-auto">1000</span></li>
      <li class="d-flex">Credits Remaining <span class="ms-auto">0</span></li>
    </ul>
  </span>
    <a href="/credits" class="btn d-block me-0">Buy credits</a>
</div>

<p class="logout-button"><a href="/logout">Logout</a></p>


</template>

    </Nav>
</template>

<script>
import Nav from '@/components/Nav/Nav.vue'
import Icon from '@/foundations/Icon/Icon.vue'

export default {
  components: {
    Nav,
    Icon
  }
}
</script>
