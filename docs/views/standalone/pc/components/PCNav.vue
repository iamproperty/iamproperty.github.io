<script lang="ts" setup>
  
  import Nav from '@/components/Nav/Nav.vue';
</script>

<template>


  <Nav class="nav--large">
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
    <button class="btn btn-primary" data-modal="modal-transactional" slot="actions">Add opportunity</button>

    <router-link to="/standalone/premium-conveyancing/settings" slot="secondary">Useful service link</router-link>
    
    <router-link to="/standalone/premium-conveyancing/settings" slot="secondary">Useful service link</router-link>
    

  </Nav>

  <dialog id="modal-transactional" class="dialog--transactional hide-icon">
    <button class="dialog__close">Close</button>
    <span class="h3">Select case type</span>
    <div class="mh-lg">
        
      <form action="/standalone/premium-conveyancing/add-opportunity">
        <fieldset class="text-start">

          <span class="label">Select the case type of opportunity</span>
          <label class="mb-0"><input type="radio" name="type" value="sale" checked/> Sale</label>
          <label class="mb-5"><input type="radio" name="type" value="purchase" /> Purchase</label>
        </fieldset>
        <div class="text-nowrap">
               <button class="btn btn-secondary" formmethod="dialog">Cancel</button>
        <button class="btn btn-primary">Start creating</button>
      
        </div>   
      </form>
    </div>
  </dialog>

</template>