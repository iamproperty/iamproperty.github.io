<script lang="ts" setup>
  import PCNav from './components/PCNav.vue';
  import Table from '@/components/Table/TableAjax.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Rankings from '@/components/Rankings/Rankings.vue';
  import Search from '@/components/Search/Search.vue';
</script>

<template>
  <nav>
  <PCNav></PCNav>
  </nav>
  <main>
    <h1 class=" md-col-end-4">Welcome, Bob</h1>

    
    <Search class="md-col-start-7 ">
      <label data-v-eb8d413a="">
        Property address <span class="optional-text"></span><span data-v-eb8d413a="">
          <input data-v-eb8d413a="" type="hidden" name="client" autocomplete="off" aria-autocomplete="none" list="properties">
          <input data-v-eb8d413a="" type="text" name="clientAlt" autocomplete="off" aria-autocomplete="none" list="" data-list="">
          <span data-v-eb8d413a="" class="suffix fa-regular fa-search" aria-hidden="true"></span></span>
          <button class="empty btn btn-action"><i class="fa-light fa-times me-0" aria-hidden="true"></i></button>
      </label>
    </Search>
      


    <div  class="admin-panel md-col-end-4 md-row-span-2">
      <h2 data-v-c2a3d511="" class="bg-light">Ranking component</h2>
      <Rankings data-v-c2a3d511="" data-max="12" class="leaderboard-scroll hide-podium">
        <table data-v-c2a3d511=""><thead data-v-c2a3d511=""><tr data-v-c2a3d511=""><th data-v-c2a3d511="">Company</th><th data-v-c2a3d511="">Sales</th></tr></thead><tbody data-v-c2a3d511=""><tr data-v-c2a3d511=""><th data-v-c2a3d511=""><iam-rank class="rank--medal first-position" data-position="1st">1st</iam-rank>Pinnacle Homes<progress max="12" value="11"></progress></th><td data-v-c2a3d511="">11</td></tr><tr data-v-c2a3d511=""><th data-v-c2a3d511="">Meadowbrook Estates<progress max="12" value="9"></progress></th><td data-v-c2a3d511="">9</td></tr><tr data-v-c2a3d511=""><th data-v-c2a3d511="">KeyHaven Residential<progress max="12" value="8"></progress></th><td data-v-c2a3d511="">8</td></tr><tr data-v-c2a3d511="" class="highlighted"><th data-v-c2a3d511="">Deacon &amp; partners<progress max="12" value="11"></progress></th><td data-v-c2a3d511="">11</td></tr><tr data-v-c2a3d511=""><th data-v-c2a3d511="">Pinnacle Homes<progress max="12" value="11"></progress></th><td data-v-c2a3d511="">11</td></tr><tr data-v-c2a3d511=""><th data-v-c2a3d511="">Pinnacle Homes<progress max="12" value="11"></progress></th><td data-v-c2a3d511="">11</td></tr><tr data-v-c2a3d511=""><th data-v-c2a3d511="">Pinnacle Homes<progress max="12" value="11"></progress></th><td data-v-c2a3d511="">11</td></tr><tr data-v-c2a3d511=""><th data-v-c2a3d511="">Pinnacle Homes<progress max="12" value="11"></progress></th><td data-v-c2a3d511="">11</td></tr><tr data-v-c2a3d511=""><th data-v-c2a3d511="">Pinnacle Homes<progress max="12" value="11"></progress></th><td data-v-c2a3d511="">11</td></tr><tr data-v-c2a3d511=""><th data-v-c2a3d511="">Pinnacle Homes<progress max="12" value="11"></progress></th><td data-v-c2a3d511="">11</td></tr></tbody></table>
      </Rankings>
    </div>
    

    <div  class="admin-panel md-col-start-5 md-col-end-6" >
      <h2>Opportunity conv rate</h2>
      
    </div>
    

    <div  class="admin-panel md-col-start-8 " >
      <h2>SLA Contact timeframe</h2>
      
    </div>
    
    <div  class="admin-panel md-col-start-5 md-col-end-6" >
      <h2>Opportunities referred</h2>
      
    </div>
    <div  class="admin-panel md-col-start-7 md-col-end-8" >
      <h2>Opportunities open</h2>
      
    </div>
    
    <div  class="admin-panel md-col-start-9 md-col-end-10" >
      <h2>Opportunities instructed</h2>
      
    </div>
    <div  class="admin-panel md-col-start-11 md-col-end-12" >
      <h2>Opportunities declined</h2>
      
    </div>
    

    

    <div class="admin-panel">
      <h2>Your Tasks</h2>


      <Table class="table--cta table--fullwidth" data-ajax="/data/premium-conveyancing.json">
        <form slot="before">
            <Actionbar data-search="">

              <label class="tag tag--toggle" slot="filters"><span class="optional-text"></span><input type="radio" name="casetype" value="new">New prospect</label>

              <label class="tag tag--toggle" slot="filters"><span class="optional-text"></span><input type="radio" name="casetype" value="chase">Chase prospect</label>

              <label class="tag tag--toggle" slot="filters"><span class="optional-text"></span><input type="radio" name="casetype" value="collect">Collect payment</label>
              <span slot="filters" class="text-nowrap ps-1 me-auto">Assigned tasks: 80</span>

              
            </Actionbar>
      </form>
        <table>
          <thead>
            <tr>
              <th data-output="<div class='dialog__wrapper'>
                  <button class='btn btn-secondary btn-compact fa-ellipsis-vertical btn-sm m-0' popovertarget='menu3314748953277' aria-haspopup='true' aria-controls='menu3314748953277' style='anchor-name: --menu3314748953277;'>Lorum ipsum</button>
                  <iam-menu class='dialog--fix dialog--list' id='menu3314748953277' popover='auto' role='menu' style='position-anchor: --menu3314748953277;'><button class='btn btn-action' data-single='' role='menuitem' tabindex='0' autofocus='true'>View task</button><button class='btn btn-action' data-single='' role='menuitem' tabindex='0'>Mark as completed</button><button class='btn btn-action' data-single='' role='menuitem' tabindex='0'>Delete task</button></iam-menu>
                </div>"></th>
              <th data-output="{id}">ID</th>
              <th>Created</th>
              <th>Task</th>
              <th>Assignee</th>
              <th>Lead client</th>
              <th>Phone number</th>
              <th>Agent</th>
              <th data-output="<a href='/standalone/premium-conveyancing/case'>View profile</a>"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
            </tr>
          </tbody>
        </table>
      </Table>

    </div>

    
  </main>
</template>