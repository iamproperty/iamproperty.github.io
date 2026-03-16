<script lang="ts" setup>
  import Nav from '@/components/Nav/Nav.vue';
</script>

<template>

  <Nav >
    <a href="/" class="brand brand--property" slot="logo">
      <svg>
        <title>iam key</title>
        <use xlink:href="/svg/logo.svg#logo-property"></use>
      </svg>
    </a>

    
    <router-link to="/standalone/premium-conveyancing">Dashboard</router-link>
    <router-link to="/standalone/premium-conveyancing/cases">Cases</router-link>
    <router-link to="/standalone/premium-conveyancing/settings">Settings</router-link>
    

    <button class="btn btn-primary" data-modal="modal-transactional" slot="actions">My account</button>

    <router-link to="/standalone/premium-conveyancing/settings" slot="secondary">iamproperty</router-link>
    
    <router-link to="/standalone/premium-conveyancing/settings" slot="secondary">CRM</router-link>
    
    <router-link to="/standalone/premium-conveyancing/settings" class="active" slot="secondary">movebutler</router-link>
    
    <router-link to="/standalone/premium-conveyancing/settings" slot="secondary">iamsold</router-link>
    

  </Nav>

</template>
