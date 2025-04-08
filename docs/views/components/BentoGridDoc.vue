<script setup>
  import BentoGrid from '@/components/BentoGrid/BentoGrid.vue';


  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
</script>

<template>
  <TrackEvents
    selector="iam-bento-grid"
    :events="['opened']"
  ></TrackEvents>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Bento grid</h1>
    </DSHeader>


    <p class="lead md-col-end-7">A flexible, modular layout component that supports a variety of content types, ensuring that the content is organised visually into clean, structured units that adjust dynamically based on screen size or content changes.</p>

      <BentoGrid>
        <details name="bento" style="--bg: url('/iamsold-screenshot.png')">
          <summary>The power of auction</summary>
          <ul class="tick-list">
            <li>Faster timescales with 56-day completions*</li>
            <li>A 95% success rate, meaning fewer fall throughs</li>
            <li>7-day payment terms^</li>
            <li>A service more than a third of sellers are calling out for</li>
          </ul>
          <a href="" class="btn btn-secondary">Explore auction</a>
        </details>

        <details name="bento" style="--bg: url('/crm-screenshot.png')">
          <summary>Make your own rules</summary>
          <p>some text</p>
        </details>

        <details name="bento" style="--bg: url('/movebutler-screenshot.png')">
          <summary>Get your clients maving faster</summary>
          <p>some text</p>
        </details>


        <details name="bento" style="--bg: url('/market-appraisal-screenshot.png')">
          <summary>Stand our from the crowd</summary>
          <p>some text</p>
        </details>
        
        <details name="bento" style="--bg: url('/market-appraisal-screenshot.png')">
          <summary>Stand our from the crowd</summary>
          <p>some text</p>
        </details>
      </BentoGrid>

  </main>
</template>
