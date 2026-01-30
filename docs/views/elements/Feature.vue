<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';


</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Feature (Beta)</h1>
    </DSHeader>
    <p class="lead">Used to indicate that a section or page features a service or capability.</p>

    <div class="visualtest">
      <span class="feature fa-rocket-launch">
        <strong>Order searches in advance </strong>Reduce transaction time on <strong>5 Avenue</strong> by <strong>19 days</strong> by ordering searches up front.
      </span>
    </div>
      
    <div class="visualtest">
      <div class="admin-panel">
        
        <span class="feature fa-rocket-launch">
          <strong>Order searches in advance </strong>Reduce transaction time on <strong>5 Avenue</strong> by <strong>19 days</strong> by ordering searches up front.
        </span>
      </div>
    </div>

    <div class="visualtest">
      <div class="admin-panel">
        
        <span class="feature fa-location-dot d-flex align-items-center">
          <strong>Average search times:</strong>
          <strong class="ms-auto">21 days</strong>
        </span>

        <span class="feature fa-location-dot d-flex align-items-center">
          <strong>Average search times:</strong>
          <strong class="ms-auto">21 days</strong>
        </span>

        <span class="feature fa-location-dot d-flex align-items-center">
          <strong>Average search times:</strong>
          <strong class="ms-auto">21 days</strong>
        </span>

      </div>
    </div>

  </main>
</template>
