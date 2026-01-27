<script lang="ts" setup>
  import VideoModal from '@/components/VideoModal/VideoModal.vue';
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
</script>

<template>
  <nav>


  </nav>
  <main>

    <div class="text-md-end">
      <span class="badge">Eligible for Premium Conveyancing</span>
    </div>
        
    <div>
      <div class="md-col-end-6 ">
        <h1 class="h2 pb-3">Get exchange-ready faster</h1>
        <p class="lead">Cut transaction times by up to 5 weeks by applying Premium Conveyancing.</p>
      </div>
      <div class=" md-col-start-7">
        <div class="highlight bg-success gradient-primary gradient-direction-angle">
          <p>£20 in Love2shop vouchers per Premium Conveyancing instruction</p>
          <img src="/img/illustrations/minimal-cost.png" alt="" loading="lazy">
        </div>
      </div>
    </div>
    <div class="admin-panel">

      <div class="feature fa-rocket-launch md-col-end-6">
        <strong>Order searches in advance </strong>Reduce transaction time on <strong>5 Avenue</strong> by <strong>19 days</strong> by ordering searches up front.
      </div>

      <div class="bg-warning highlight md-col-start-8 mb-2">
        <span class="h4 pb-0">19 days</span>
        <p>Current Skipton council local authority search times</p>
      </div>

      <hr class="border-1 mb-2" />

      <div class="feature fa-rocket-launch md-col-end-6">
        <strong>Order searches in advance </strong>Reduce transaction time on <strong>5 Avenue</strong> by <strong>19 days</strong> by ordering searches up front.
      </div>

      <div class="bg-warning highlight md-col-start-8 mb-2">
        <span class="h4 pb-0">19 days</span>
        <p>Current Skipton council local authority search times</p>
      </div>

      <hr class="border-1 mb-2" />

      <div class="feature fa-rocket-launch md-col-end-6">
        <strong>Order searches in advance </strong>Reduce transaction time on <strong>5 Avenue</strong> by <strong>19 days</strong> by ordering searches up front.
      </div>

      <div class="bg-warning highlight md-col-start-8 mb-2">
        <span class="h4 pb-0">19 days</span>
        <p>Current Skipton council local authority search times</p>
      </div>


      <div class="admin-panel__footer bg-success mt-auto">
        <p class="h4 md-col-end-5">Minimum forecasted time saving on this transaction with Premium Conveyancing:</p>

        <strong class="h2 md-col-start-8">29 days saved</strong>
      </div>
    </div>

    <div class="container">
      <div class="btn__group">

        <button class="btn btn-primary">Refer premium conveyancing</button>
        <button class="btn btn-secondary">Continue to transaction overview</button>
      </div>
    </div>


    <span class="feature fa-rocket-launch md-col-span-4 md-col-start-1">
      <strong>Order searches in advance </strong>Reduce transaction time on <strong>5 Avenue</strong> by <strong>19 days</strong> by ordering searches up front.
    </span>

    <span class="feature fa-rocket-launch md-col-span-4 md-col-start-auto">
      <strong>Order searches in advance </strong>Reduce transaction time on <strong>5 Avenue</strong> by <strong>19 days</strong> by ordering searches up front.
    </span>

    <span class="feature fa-rocket-launch md-col-span-4 md-col-start-auto">
      <strong>Order searches in advance </strong>Reduce transaction time on <strong>5 Avenue</strong> by <strong>19 days</strong> by ordering searches up front.
    </span>

    <hr class="mb-3"/>

    <div class="md-col-end-5">

      <h2 class="h3">Watch our video explainer</h2>

      <a href="https://www.youtube.com/watch?v=lROFZaJcVug" class="text-decoration-none youtube-link d-block" command="show-modal" commandfor="video"> <!-- TODO: move youtube-link class so it gets added via js-->
        <span class="ratio ratio-16x9"><img src="/img/thumbnail.png" alt=""></span>
      </a>
    </div>

    <div class="md-col-start-7 grid">

      <h2 class="h3">Service KPIs on completion</h2>
      <div class="highlight highlight--raised col-start-1 col-end-5 md-col-start-7 md-col-end-8 mb-2">
        <Tooltip data-heading="CSAT:" title="Percentage of customers that are happy with their Premium Conveyancing service"><i class="fa-regular fa-info"></i></Tooltip>
        <span class="h2 pb-0">96%</span>
        <span class="h4">CSAT</span>
      </div>
      <div class="highlight highlight--raised col-start-6 col-end-12 md-col-start-9 md-col-end-12 mb-2">
        <Tooltip data-heading="Fall through rate:" title="Percentage of fall throughs for customers using Premium Conveyancing service"><i class="fa-regular fa-info"></i></Tooltip>
        <span class="h2 pb-0">9%</span>
        <span class="h4">Fall through rate</span>
      </div>
      <div class="highlight highlight--raised  mb-1">
        <Tooltip data-heading="Time to completion:" title="Average number of days taken to complete using the Premium Conveyancing service"><i class="fa-regular fa-info"></i></Tooltip>
        <span class="h2 pb-0">x days</span>
        <span class="h4">Avg. time to completion</span>
      </div>
      <small class="x-small pb-3">KPI figures from August 25</small>

    </div>

    <VideoModal id="video" data-vimeo="1028915961"></VideoModal>

  </main>
</template>