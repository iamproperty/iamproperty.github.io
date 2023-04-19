<template>
    <Nav logo="property" class="nav--just-account">


      <template v-slot:account>

<span class="row">
    <span class="col mw-fit-content"><Icon id="account" class="fs-2 p-2 m-0"></Icon></span>
    <span class="col d-flex align-items-center">
      <span Class="h5 mb-1">Johny Smith</span>
    </span>
  <form class="mt-2">
  <Input type="select" id="test1" label="My transactions" :options="[{display:'Transaction 1',value:'/transaction1'},{display:'Transaction Two',value:'/transaction1'},{display:'Create new transaction',value:'/new'}]" data-redirect="/cp/company/branches/create"></Input>
  </form>
</span>


<span class="row">
    <span class="col mw-fit-content"><Icon id="auction" class="fs-2 p-2 m-0"></Icon></span>
    <span class="col">
      <span Class="h5 mb-1">My onbaording</span>
      <span class="small">
        <ul class="list-unstyled text-primary">
          <li><a href="/risk">Risk assessment and ID</a></li>
          <li><a href="/risk">Legal preparation</a></li>
          <li><a href="/risk">Property information</a></li>
          <li><a href="/risk">Method of sale audit</a></li>
          <li><a href="/risk">Title registration</a></li>
        </ul>
      </span>
    </span>
  </span>

  <span class="row">
    <span class="col-12 bg-admin p-4 rounded mb-3">
      <h2 class="h4">We're here to help</h2>
      <small>
      <div class="row">
        <div class="col-12 mw-sm-fit-content pe-4">
          <div class="row">
            <div class="col mw-fit-content p-0">
              <svg class="icon fs-4"><title>phone</title><use xlink:href="/svg/icons.svg#icon-phone"></use></svg>
            </div>
            <div class="col">
              <p class="mb-2">Call: <br class="d-sm-none">0191 731 9216</p>
            </div>
          </div>
        </div>
        <div class="col-12 mw-sm-fit-content pe-4">
          <div class="row"><div class="col mw-fit-content p-0">
            <svg class="icon fs-4"><title>email</title><use xlink:href="/svg/icons.svg#icon-email"></use></svg>
          </div>
          <div class="col">
            <p class="mb-2">Email: <br class="d-sm-none">productsupport@iamproperty.com</p>
          </div>
        </div>
      </div>
      <div class="col-12 mw-sm-fit-content pe-4">
        <div class="row">
          <div class="col mw-fit-content p-0">
            <svg class="icon fs-4"><title>chat</title><use xlink:href="/svg/icons.svg#icon-chat"></use></svg>
          </div>
          <div class="col">
            <p class="mb-2">Livechat</p>
          </div>
        </div>
      </div>
    </div>
</small>


    </span>

  </span>


<p class="logout-button"><a href="/logout">Logout</a></p>


</template>

    </Nav>
</template>

<script>
import Nav from '@/components/Nav/Nav.vue'
import Input from '@/components/Input/Input.vue'
import Icon from '@/foundations/Icon/Icon.vue'
import form from '../../../../assets/js/modules/form'

export default {
  components: {
    Nav,
    Icon,
    Input
  },
  mounted(){

    Array.from(document.querySelectorAll('form')).forEach((arrayElement, index) => {
      form(arrayElement);

    });
  }
}
</script>
