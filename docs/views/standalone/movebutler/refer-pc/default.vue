<script lang="ts" setup>
  import Header from '@/components/Header/Header.vue';
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
  import Modal from '@/components/Modal/Modal.vue';
  import Table from '@/components/Table/Table.vue';
  import Notification from '@/components/Notification/Notification.vue';
  import VideoModal from '@/components/VideoModal/VideoModal.vue';
</script>

<template>
  <main>
    <ul class="breadcrumbs pt-0">
      <li><a href="/standalone/movebutler">Dashboard</a></li>
      <li>Premium Conveyancing</li>
    </ul>
    <Header>
      <h1 class="pb-4">Upfront information alerts on 24 Lynx road</h1>
      <ul class="tick-list h4 mb-0 pb-3">
        <li class="tick--danger pb-1">21 days for current area search times</li>
        <li class="tick--danger pb-1">3 category search alerts</li>
        <li class="tick--warning pb-1">10 days to complete protocol forms</li>
        <li class="tick--warning  pb-1">2 title alerts</li>
      </ul>
      <a href="#alerts" class="btn btn-tertiary">View information alert details</a>

      
      <span class="badge bg-success" slot="badge">Recommendation</span>
      
      <img slot="panel" src="/img/illustrations/auctioneer.png" alt="" loading="lazy">

      <span class="h3 pb-2" slot="panel">Save 38 days</span>
      <p slot="panel" class="pb-2">Estimated time saved if this transaction uses Premium Conveyancing</p>
      <div class="btn__group" slot="panel">
        <a href="/" class="btn btn-primary">Submit to movebutler</a>
        <button class="btn btn-secondary" command="show-modal" commandfor="send">Send pack information to vendor</button>
        <a href="/" class="btn btn-tertiary">Continue without this service</a>
      </div>
 
    </Header>
    <Modal data-type="transactional">
      <dialog id="send">
        <span class="h3">Send upfront information and premium conveyancing details</span>
        <a href="/" slot="agreed-button" class="btn btn-primary">Confirm and send</a>
      </dialog>
    </Modal>

    <h2 id="alerts" class="h3">Details of the alerts</h2>

    <div class="feature feature--danger mb-2">
      <strong>21 days for current area search times</strong><Tooltip data-type="info"></Tooltip> This is longer than usual
    </div>
    <div class="feature feature--loading mb-2">
      Fetching data  
    </div>
    <div class="feature feature--missing mb-2">       
      Search time is unavailable
    </div>
    <div class="feature feature--error mb-2">
      <strong>Search time is unavailable</strong>There was an error fetching council search time, please try again
      <button class="btn btn-tertiary"><i class="fa-regular fa-arrows-rotate"></i>Retry</button>
    </div>
    <div class="feature feature--danger mb-2">
      <strong>21 days for current area search times</strong><Tooltip></Tooltip> This is longer than usual
    </div>
    <div class="feature feature--warning mb-2">
      <strong>21 days for current area search times</strong><Tooltip></Tooltip> This is longer than usual
    </div>
    <div class="feature feature--success mb-4">
      <strong>21 days for current area search times</strong><Tooltip></Tooltip> This is longer than usual
    </div>

    

    <div class="admin-panel">
      <div class="admin-panel__heading bg-primary gradient-info">
        <h2>Title insights for 24 Lynx Road</h2>
        <span class="badge mb-0">Ai insight <i class="fa-regular fa-sparkle"></i></span>
      </div>
      <p>There are agent actions available that can help mitigate delay, view these below.</p>
      <Table>
        <table>
          <thead>
            <tr>
              <th class="th--sm">Category</th>
              <th>Description</th>
              <th>Agent actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-0 no-hover">
              <th>Restrictions</th>
              <td>
                <Notification data-status="danger" class="notification--no-icon shadow-none p-2 mb-0">No building or structure shall be erected and no excavation shall be made on the land hereby transferred which shall in any way interfere with or endanger the mine and minerals lying beneath the said land, the ownership of which is excepted and reserved to Mining LTD together with all rights of working, winning, and carrying away the same.</Notification>
              </td>
              <td>
                <Notification data-status="warning" class="notification--no-bg mb-0">2</Notification>
              </td>
            </tr>
            <tr class="border-0 no-hover">
              <th></th>
              <td>
                <Notification data-status="danger" class="notification--no-icon shadow-none p-2 mb-0">A court order has been issued restricting the sale, transfer, or disposal of this property without prior permission from the court. This restriction ensures that no legal or financial actions are taken that would affect the property until the order is lifted or varied by the court.</Notification>
              </td>
              <td>
                <Notification data-status="warning" class="notification--no-bg mb-0">A court order has been issued restricting the sale, transfer, or disposal of this property without prior permission from the court. This restriction ensures that no legal or financial actions are taken that would affect the property until the order is lifted or varied by the court.</Notification>
              </td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>

    <p class="mw-100 pb-3 small ">AI insights legal statement - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
    
    <div class="admin-panel">
      
      <span class="badge bg-success">Recommendation</span>
      <div class="md-col-end-6">
          <h2 class="h4">This transaction could benefit from Premium Conveyancing:</h2>
        <ul class="tick-list">
          <li>Time saved: 38 days</li>
          <li>Reduce fall through rate by: 33%</li>
          <li class="tick--warning">You receive £20 in Love2Shop vouchers per instruction</li>
          <li class="tick--danger">You stay ahead of compliance</li>
        </ul>
        <div class="col-start-1 md-col-end-5">
        <div class="btn__group">
          <a href="/" class="btn btn-primary">Submit to movebutler</a>
          <a href="/" class="btn btn-secondary">Send pack information to vendor</a>
          <a href="/" class="btn btn-tertiary">Continue without this service</a>
        </div></div>
      </div>
      <div class="md-col-start-8">
        <div class="text-center rounded rounded-3 border-2 border-gradient mb-2">
            
          <div class="col-start-4 col-end-8 md-col-start-9 md-col-end-11 pt-2">
            <img src="/img/illustrations/auctioneer.png" alt="" loading="lazy">
          </div>

          <span class="h2 pb-2">38 days</span>
          <p class="lead px-2">Estimated time saved using Premium Conveyancing</p>
        
        </div>
      </div>
      
    </div>

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
        <Tooltip data-heading="CSAT:" title="Percentage of customers that are happy with their Premium Conveyancing service"></Tooltip>
        <span class="h2 pb-0">96%</span>
        <span class="h4">CSAT</span>
      </div>
      <div class="highlight highlight--raised col-start-6 col-end-12 md-col-start-9 md-col-end-12 mb-2">
        <Tooltip data-heading="Fall through rate:" title="Percentage of fall throughs for customers using Premium Conveyancing service"></Tooltip>
        <span class="h2 pb-0">9%</span>
        <span class="h4">Fall through rate</span>
      </div>
      <div class="highlight highlight--raised  mb-1">
        <Tooltip data-heading="Time to completion:" title="Average number of days taken to complete using the Premium Conveyancing service">   </Tooltip>
        <span class="h2 pb-0">x days</span>
        <span class="h4">Avg. time to completion</span>
      </div>
      <small class="x-small pb-3">KPI figures from August 25</small>

    </div>
    
    <VideoModal id="video" data-vimeo="1028915961"></VideoModal>

    <div class="container mb-5 text-center">
      
        <div class="bg-info px-3 pt-5 rounded rounded-3 gradient-primary">
          <h2 class="h3 mx-auto">Get Premium Conveyancing marketing assets</h2>
          
          <p class="lead mx-auto pb-4">Description of what you will get......<br/>Please note, if these assets are not in your branding and you wish them to be, please contact marketing@iamproperty.com and they will support.</p>
          
          <a href="https://iamproperty.github.io/" class="btn btn-primary mb-5" data-v-d4114f94="">Download assets</a>
        </div>
        

    </div>

  </main>
</template>