<script lang="ts" setup>
  import Header from '@/components/Header/Header.vue';
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
  import Modal from '@/components/Modal/Modal.vue';
  import Table from '@/components/Table/Table.vue';
  import Notification from '@/components/Notification/Notification.vue';
  import VideoModal from '@/components/VideoModal/VideoModal.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  
</script>

<template>
  <main>
    <Header>
      
      <ul class="breadcrumbs">
        <li><a href="/standalone/movebutler">Dashboard</a></li>
        <li>Premium Conveyancing</li>
      </ul>

      <h1 class="pb-4">Transaction overview</h1>
      

      <div class="d-flex flex-wrap gap-3 pb-4">
        <div>
          <small class="d-block pb-0">Property address</small>
          <address class="mb-0">24 Lynx road, Tynemouth, Newcastle upon tyne, NE2 6AT</address>
        </div>
        <div>
          <small class="d-block pb-0">Price</small>
          <span>£290,000</span>
        </div>
        <div>
          <small class="d-block pb-0">Tenure type</small>
          <span>Freehold</span>
        </div>
        <div class="me-auto">
          <small class="d-block pb-0">Mehod of sale</small>
          <span>Private treaty</span>
        </div>
        <div>
          <a href="/" class="btn btn-sm btn-secondary fa-pen-to-square mb-0">Edit transaction</a>
        </div>
      </div>

      <a href="/" class="btn btn-action fa-file" slot="toolbox">View property report</a>
      <button class="btn btn-action fa-file" command="show-modal" commandfor="send" slot="toolbox">Action button</button>
      <hr slot="toolbox" class="d-none d-sm-block"/>
      <a href="/" class="btn btn-action fa-plus" slot="toolbox">Add client</a>
      <a href="/" class="btn btn-action fa-plus" slot="toolbox">Add note</a>
      <a href="/" class="btn btn-action fa-plus" slot="toolbox">Add document</a>
    
    </Header>
      
    <div class="bg-primary pt-2 px-3 mb-2 rounded">
      <div class="md-col-end-8">
        <h2 class="h3 text-info pb-2">Save up to 41 days on this transaction</h2>
        <p class="pb-3">Forecasted time saved if this transaction uses Premium Conveyancing. <a href="/">Find out more</a></p>
        
        <a href="/" class="btn btn-primary colour-warning">Request callback for client</a>
        <a href="/" class="btn btn-secondary">Send insights and service details</a>
      </div>
      
      <ul class="tick-list mb-0 pt-1 pb-3 md-col-start-9">
        <li class="tick--danger pb-1">21 days for current area search times</li>
        <li class="tick--danger pb-1">3 category search alerts</li>
        <li class="tick--warning pb-1">10 days to complete protocol forms</li>
        <li class="tick--warning  pb-1">2 title alerts</li>
      </ul>

    </div>

    <div class="admin-panel">
      <div class="text-end">
        <span class="badge mb-1">Premium Conveyancing</span>
        <span class="badge wider-colour-3 mb-1">Case status: instructed</span>
      </div>
      <p class="lead text-heading pb-2">Conveyancing case</p>
      <div class="d-flex align-items-center">
          
        <p class="me-auto pb-0">Solicitor office: <strong class="pe-2">JD Conveyancing </strong> Branch assignee: <strong class="pe-2">Chris Holmes</strong> Lead vendor: <strong class="pe-2">John Smith</strong></p>
        <button class="btn btn-compact fa-chevron-right btn-sm ms-2 mb-0" title="View case">Submit</button>
      </div>
    </div>
    

    <div class="md-col-end-6">
      <div class="admin-panel">
        <h2 class="bg-light">Material information</h2>

        <div class="sub-panel">
          <h3>Part A</h3>

          <div class="sub-grid pb-1">
            <span class="col-start-1 col-end-5 pb-1">Tenure type: <strong>Freehold</strong></span>
            <span class="col-start-6 col-end-12 pb-1">EPC rating: <strong>C (79), potential B (83)</strong></span>
              
            <span class="col-start-1 col-end-5 pb-1">Price: <strong>£180,000</strong></span>
            <span class="col-start-6 col-end-12 pb-1">Council tax band: <strong>B</strong></span>
          </div>
          
          <span class="pb-1">Average broadband speed:</span>

          <div class="d-flex gap-1 pb-2">
            <span>
              <strong>Standard</strong><br/>
              <i class="fa-duotone fa-solid fa-wifi-weak text-heading"></i> <strong>17 mb/s</strong>
            </span>
            <span>
              <strong>Superfast</strong><br/>
              <i class="fa-duotone fa-solid fa-wifi-fair text-heading"></i> <strong>N/A</strong>
            </span>
            <span>
              <strong>Ultrafast</strong><br/>
              <i class="fa-duotone fa-solid fa-wifi-strong text-heading"></i> <strong>1000 mb/s</strong>
            </span>
          </div>

          <span class="pb-1">Mobile signal/coverage:</span>

          <div class="d-flex gap-1 pb-1">
            <span>
              <img src="/img/logos/ee.png" class="logo" />
              <i class="fa-duotone fa-solid fa-signal-weak text-heading"></i>
            </span>
            <span>
              <img src="/img/logos/three.png" class="logo" />
              <i class="fa-duotone fa-solid fa-signal-fair text-heading"></i>
            </span>
            <span>
              <img src="/img/logos/o2.png" class="logo" />
              <i class="fa-duotone fa-solid fa-signal-good text-heading"></i>
            </span>
            <span>
              <img src="/img/logos/vodaphone.png" class="logo" />
              <i class="fa-duotone fa-solid fa-signal-strong text-heading"></i>
            </span>
          </div>


        </div>

        <div class="sub-panel">
          <h3>Part C</h3>
          <span class="d-block pb-1">Covenants: <i class="fa-solid fa-exclamation-circle text-danger"></i> <strong>2</strong></span>
          <span class="d-flex"><span class="text-nowrap me-1">Flood risk:</span> <strong>Hasn’t flood in last 5 years, no flooding or sea defences at the property, 1 source of risk from local pond.</strong></span>
        </div>
      </div>
    </div>
    
    <div class="md-col-start-7">
      <div class="admin-panel">
        <h2 class=" bg-light">Local planning permission and development proposals</h2>
        <Actionbar><span class="text-heading text-nowrap" slot="filters">3 applications</span></Actionbar>
        <span class="d-block pb-1 text-heading">3 Akenside Hill, Newcastle upon Tyne, NE5 6TH</span>
        <small class="d-block pb-1">23/00704/TPO • <i class="fa-regular fa-calendar-day"></i> 13/06/25 • Status: Pending Consideration</small>
        <small class="d-block pb-1">Description: Fell 1 no. Poplar tree (T1) as it is growing out of a disused railway embankment at a vulnerable angle in a material of a questionable adhesive nature, and due to its size, poses an unacceptable risk</small>
        <a href="/" class="btn btn-tertiary mb-0">View <i class="fa-regular fa-arrow-up-right-from-square me-0"></i></a>
        <hr class="border border-1 mb-2 mt-2">
        <span class="d-block pb-1 text-heading">3 Akenside Hill, Newcastle upon Tyne, NE5 6TH</span>
        <small class="d-block pb-1">23/00704/TPO • <i class="fa-regular fa-calendar-day"></i> 13/06/25 • Status: Pending Consideration</small>
        <small class="d-block pb-1">Description: Fell 1 no. Poplar tree (T1) as it is growing out of a disused railway embankment at a vulnerable angle in a material of a questionable adhesive nature, and due to its size, poses an unacceptable risk</small>
        <a href="/" class="btn btn-tertiary mb-0">View <i class="fa-regular fa-arrow-up-right-from-square me-0"></i></a>
      </div>
    </div>
  </main>
</template>