<script lang="ts" setup>
  import VideoModal from '@/components/VideoModal/VideoModal.vue';
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
  import Form from '@/components/Form/Form.vue';
  import Input from '@/components/Input/Input.vue';
  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';
        
</script>

<template>
  <nav>


  </nav>
  <main>

    <div class="container pt-5 template--form">

      <h1 class="text-center mx-auto">Refer Premium Conveyancing</h1>
      
        <div class="form-panel form-panel--sm text-center">

          <i class="icon icon--lg fa-regular fa-check bg-success mb-4"></i>
          
          
          <h2>Thanks for your referral </h2>


          <div class="highlight bg-success gradient-primary gradient-direction-angle text-start">
            <p>£20 in Love2shop vouchers<wbr /> per Premium Conveyancing instruction</p>
            <img src="/img/illustrations/minimal-cost.png" alt="" loading="lazy">
          </div>
          

          <p><strong>Next steps:</strong> You’ll receive a notification via email if it is successfully instructed.</p>

          <div class="btn__group text-center">
            
            <a href="/transaction" class="btn btn-primary">Go to transaction overview</a>
          </div>
        </div>
    </div>
  </main>
</template>