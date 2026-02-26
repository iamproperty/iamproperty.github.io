<script lang="ts" setup>
  import Header from '@/components/Header/Header.vue';
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
  import Rank from '@/components/Rank/Rank.vue';
  import Table from '@/components/Table/Table.vue';
  import Notification from '@/components/Notification/Notification.vue';
</script>

<template>
  <main>

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
      <Rank class="rank--trophy rank--sm mx-auto mb-2" slot="panel" data-position="1st"></Rank>
      <span class="h3 pb-2" slot="panel">Save 38 days</span>
      <p slot="panel" class="pb-2">Estimated time saved if this transaction uses Premium Conveyancing</p>
      <div class="btn__group" slot="panel">
        <a href="/" class="btn btn-primary">Submit to movebutler</a>
        <a href="/" class="btn btn-secondary">Send pack information to vendor</a>
        <a href="/" class="btn btn-tertiary">Continue without this service</a>
      </div>
 
    </Header>

    <h2 id="alerts" class="h3">Details of the alerts</h2>

    <div class="feature feature--danger colour-danger mb-2">
      <strong>21 days for current area search times</strong><Tooltip data-type="info"></Tooltip> This is longer than usual
    </div>
    <div class="feature feature--danger mb-2">
      <strong>21 days for current area search times</strong><Tooltip></Tooltip> This is longer than usual
    </div>
    <div class="feature feature--warning mb-2">
      <strong>21 days for current area search times</strong><Tooltip></Tooltip> This is longer than usual
    </div>
    <div class="feature feature--success mb-2">
      <strong>21 days for current area search times</strong><Tooltip></Tooltip> This is longer than usual
    </div>
    
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
        <div class=" text-center border border-1 rounded px-4 py-2">
          
        <span class="h2 pb-2">38 days</span>
        <p class="lead">Estimated time saved using Premium Conveyancing</p>
        <Rank class="rank--trophy mx-auto mb-0" data-position="1st"></Rank>
        </div>
      </div>
      
    </div>

    <div class="admin-panel">
      <div class="admin-panel__heading bg-info gradient-primary gradient-direction-left">
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
                <Notification data-status="warning" class="notification--no-bg mb-0">No building or structure shall be erected and no excavation shall be made on the land hereby transferred which shall in any way interfere with or endanger the mine and minerals lying beneath the said land, the ownership of which is excepted and reserved to Mining LTD together with all rights of working, winning, and carrying away the same.</Notification>
              </td>
            </tr>
            <tr class="border-0 no-hover">
              <th></th>
              <td>
                <Notification data-status="danger" class="notification--no-icon notification--no-shadow p-2 mb-0">A court order has been issued restricting the sale, transfer, or disposal of this property without prior permission from the court. This restriction ensures that no legal or financial actions are taken that would affect the property until the order is lifted or varied by the court.</Notification>
              </td>
              <td>
                <Notification data-status="warning" class="notification--no-bg mb-0">A court order has been issued restricting the sale, transfer, or disposal of this property without prior permission from the court. This restriction ensures that no legal or financial actions are taken that would affect the property until the order is lifted or varied by the court.</Notification>
              </td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>
  </main>
</template>