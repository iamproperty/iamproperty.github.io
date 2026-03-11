<script lang="ts" setup>
  import Header from '@/components/Header/Header.vue';
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
  import Modal from '@/components/Modal/Modal.vue';
  import Table from '@/components/Table/Table.vue';
  import Notification from '@/components/Notification/Notification.vue';
  import VideoModal from '@/components/VideoModal/VideoModal.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Tabs from '@/components/Tabs/Tabs.vue';

  const handleSubmit = function(){
    console.log('submit');
  }
</script>

<template>
  <main>
    <Header>
      <ul class="breadcrumbs pt-0">
        <li><a href="/standalone/movebutler">Dashboard</a></li>
        <li>Premium Conveyancing</li>
      </ul>
      <h1 class="pb-4">Upfront information alerts on 24 Lynx road</h1>
      <ul class="tick-list h4 mb-0 pb-3">
        <li class="pb-1">21 days for current area search times</li>
        <li class="tick--danger pb-1">3 category search alerts</li>
        <li class="tick--warning pb-1">10 days to complete protocol forms</li>
        <li class="tick--warning  pb-1">2 title alerts</li>
      </ul>
      <a href="#alerts" class="btn btn-tertiary">View alert details</a>

      <span class="badge bg-success" slot="badge">Recommendation</span>
      
      <img slot="panel" src="/img/illustrations/auctioneer.png" alt="" loading="lazy">

      <span class="h3 pb-2" slot="panel">Save 38 days</span>
      <p slot="panel" class="pb-2">Estimated time saved if this transaction uses Premium Conveyancing. <a href="#info">Find out more</a></p>
      <div class="btn__group" slot="panel">
        <a href="/" class="btn btn-primary">Submit to movebutler</a>
        <button class="btn btn-secondary" command="show-modal" commandfor="send">Send pack information to vendor</button>
        <a href="/" class="btn btn-tertiary">Continue without this service</a>
      </div>
    </Header>

    <Modal data-type="transactional" data-agreed-text="Confirm and send" @agreed="handleSubmit">
      <dialog id="send">
        <span class="h3">Send upfront information and premium conveyancing details</span>
        <p>We’ll send your client their Property Insights along with further information about this service.</p>

        <p>If a valid mobile number is available, they’ll also receive this via SMS.</p>
        
        <p>The notification will include alert details, title insight information, and a link to request a callback from our team. If requested, this will be passed directly  to our team and we’ll manage the next steps, with the aim of progressing this to a PC instruction.</p>
        
        <p>You’ll be notified if your client requests a callback, and you’ll be able to track the progress of this referral within your Transaction Overview.</p>

        <a href="/" slot="agreed-button" class="btn btn-primary">Confirm and send</a>
      </dialog>
    </Modal>

    <h2 id="alerts" class="h3">Details of the alerts</h2>

    <div class="feature feature--danger mb-2">
      <strong>21 days for current area search times</strong> This is longer than usual
    </div>
    <div class="feature feature--danger mb-2">
      <strong>21 days for current area search times</strong>This is longer than usual
    </div>
    <div class="feature feature--warning mb-2">
      <strong>21 days for current area search times</strong>This is longer than usual
    </div>
    <div class="feature feature--success mb-4">
      <strong>21 days for current area search times</strong>This is longer than usual
    </div>

    

    <div class="admin-panel">
      <div class="admin-panel__heading bg-primary gradient-info mb-0">
        <h2>Title insight</h2>
        <span class="badge mb-0">Ai insight <i class="fa-regular fa-sparkle"></i></span>
      </div>
      
      

      <Tabs class="tabs--toggle">

        <details>
          <summary>Title ID 1</summary>
            <Actionbar>

              <label class="tag tag--toggle" slot="filters"><input type="radio" name="title" value="1" checked>Title ID 1</label>
              <label class="tag tag--toggle" slot="filters"><input type="radio" name="title" value="2">Title ID 2</label>

              <a href="/" class="btn btn-action fa-cart">Order another title  register</a>
              <a href="/" class="btn btn-action fa-cart">Download title register</a>
            </Actionbar>
          <Table class="md-md">

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
                  <th class="text-nowrap">Class of title</th>
                  <td>
                    Indicates the level of assurance the Land Registry can provide regarding the owner's legal right to the property.
                  </td>
                  <td>
                    <Notification data-status="danger" class="notification--no-bg mb-0">2</Notification>
                  </td>
                  <td>
                    <button class="btn btn-tertiary" command="show-modal" commandfor="actions">View actions</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Table>

        </details>
        <details>
          <summary>Title ID 2</summary>
          
            <Actionbar>

              <label class="tag tag--toggle" slot="filters"><input type="radio" name="title" value="1" checked>Title ID 1</label>
              <label class="tag tag--toggle" slot="filters"><input type="radio" name="title" value="2">Title ID 2</label>

              <a href="/" class="btn btn-action fa-cart">Order another title  register 2</a>
              <a href="/" class="btn btn-action fa-cart">Download title register 2</a>
            </Actionbar>
          <Table class="md-md">

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
                  <th class="text-nowrap">Class of title</th>
                  <td>
                    Indicates the level of assurance the Land Registry can provide regarding the owner's legal right to the property.
                  </td>
                  <td>
                    <Notification data-status="danger" class="notification--no-bg mb-0">2</Notification>
                  </td>
                  <td>
                    <button class="btn btn-tertiary" command="show-modal" commandfor="actions">View actions</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Table>

        </details>
      </Tabs>

      


    </div>

    <Modal data-type="acknowledgement" class="modal--lg modal--no-cancel" data-agreed-text="Close">
      <dialog id="actions">
        <span class="h3">Category: Restrictions</span>
        <table class="">
          <thead>
            <tr>
              <th>Description</th>
              <th>Agent actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-0">
              <td class="pb-0">
                Entries that regulate, or prohibit, the registration of certain property transactions, such as selling or mortgaging, by preventing a disposition unless specific conditions are met
              </td>
              <td>
                
                <Notification data-status="danger" class="notification--no-bg mb-0">2</Notification>
              </td>
            </tr>
            <tr class="border-0">
              <td class="pb-0">
                <Notification data-status="danger" class="notification--no-icon shadow-none p-2 mb-0">No building or structure shall be erected and no excavation shall be made on the land hereby transferred which shall in any way interfere with or endanger the mine and minerals lying beneath the said land, the ownership of which is excepted and reserved to Mining LTD together with all rights of working, winning, and carrying away the same.</Notification>
              </td>
              <td>
                There are general restrictions. This could be material information. You should engage a conveyancer to review this. This service can be provided through the movebutler team.
              </td>
            </tr>
            <tr class="border-0">
              <td>
                <Notification data-status="danger" class="notification--no-icon shadow-none p-2 mb-0">A court order has been issued restricting the sale, transfer, or disposal of this property without prior permission from the court. This restriction ensures that no legal or financial actions are taken that would affect the property until the order is lifted or varied by the court.</Notification>
              </td>
              <td class="pb-0">
                There is a Court Order Restriction. This could be material information. You should engage a conveyancer to review this. This service can be provided through the movebutler team.
              </td>
            </tr>
          </tbody>
        </table>
        
      </dialog>
    </Modal>

    <p class="mw-100 pb-3 small ">AI generated insights are provided for general information only and may not always be complete or 100% accurate. Any suggested timeframes or indications of transaction complexity are estimates based on available data and do not constitute legal advice. Information should always be independently checked and reviewed with a qualified legal professional.</p>
    
    <div class="admin-panel" id="info">
      
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

    <div class="container mb-0 text-center">
      
        <div class="bg-info px-3 pt-5 rounded rounded-3 gradient-primary">
          <h2 class="h3 mx-auto">Get Premium Conveyancing marketing assets</h2>
          
          <p class="lead mx-auto pb-4">Description of what you will get......<br/>Please note, if these assets are not in your branding and you wish them to be, please contact marketing@iamproperty.com and they will support.</p>
          
          <a href="https://iamproperty.github.io/" class="btn btn-primary colour-warning mb-5" data-v-d4114f94="">Download assets</a>
        </div>
        
    </div>

    <p class="mb-5">*Compared to Private Treaty transactions</p>
  </main>
</template>