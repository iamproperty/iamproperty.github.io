<script setup>
  import Banner from '@/components/Banner/Banner.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';

  
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Banner</h1>
      <p>Highlight or promote some content.</p>
    </DSHeader>

    
    <Banner class="bg-primary" data-image="/market-appraisal-screenshot.png">

      <h2>Market Appraisals that impress</h2>
      <p>
        Stand out from the start with everything you need to stand out in the front room and maximise your win rate.
        Integrated with your CRM for a fully connected solution.
      </p>
      <hr />
      <a href="/market-appraisals" class="btn btn-secondary" slot="buttons">Find Out More</a>
      
    </Banner>

    
  </main>
</template>
