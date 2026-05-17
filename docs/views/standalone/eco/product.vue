<script lang="ts" setup>
  import Nav from '@/components/Nav/Nav.vue';
  import STDNav from '@/components/STDNav/STDNav.vue';
  import Card from '@/components/Card/Card.vue';
  
</script>
<template>
  <nav class="nav--sticky">
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
      

      <button class="btn btn-primary" data-modal="modal-transactional" slot="actions">My account</button>

      <STDNav slot="secondary">
        
        <router-link to="/standalone/premium-conveyancing">Eco Hub</router-link>
        

      </STDNav>
    </Nav>
  </nav>
  
  <main class="">


    <h1>product content</h1>
  </main>
</template>
