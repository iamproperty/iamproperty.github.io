<script lang="ts" setup>
  
  import Nav from '@/components/Nav/Nav.vue';
</script>

<template>


  <Nav>
    <a href="/" class="brand brand--property" slot="logo">
      <svg>
        <title>iam key</title>
        <use xlink:href="/svg/logo.svg#logo-property"></use>
      </svg>
    </a>

    
    <router-link to="/standalone/premium-conveyancing">Dashboard</router-link>
    <router-link to="/standalone/premium-conveyancing/cases">Cases</router-link>
    <router-link to="/standalone/premium-conveyancing/settings">Settings</router-link>


    <div class="dialog__wrapper dialog-overflow d-none d-md-block" slot="dual">
      <button class="btn btn-secondary btn-compact fa-bell m-0" data-number="2">Notifications</button>
      <dialog class="dialog--list" id="notifications">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </dialog>
    </div>
    <button class="btn btn-primary" slot="actions">Add opportunity</button>
  </Nav>

</template>