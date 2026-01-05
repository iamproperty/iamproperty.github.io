<script lang="ts" setup>
  import { ref, onMounted, defineComponent } from 'vue'
  import PCNav from './components/PCNav.vue';
  import Table from '@/components/Table/TableNoSubmit.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Rankings from '@/components/Rankings/Rankings.vue';
  import Search from '@/components/Search/Search.vue';

  import InlineEdit from '@/components/InlineEdit/InlineEdit.vue';
  import Multiselect from '@/components/Multiselect/Multiselect.vue';


  const cases = ref([]);

  const page = ref(1);
  const pages = ref(1);
  const per_page = ref(5);
  const total = ref();

  const tags = ref([]);

  if(localStorage.getItem('tags') != null)
    tags.value = JSON.parse(localStorage.getItem('tags'));


  const addTag = (event) => {
    Array.from(document.querySelectorAll('td .tag, td .badge')).forEach((tag) => {

      console.log(tag);
      tag.setAttribute('data-content', tag.textContent);


      if(!tags.value.includes(tag.textContent)){
        tags.value.push(tag.textContent);
        localStorage.setItem('tags',JSON.stringify(tags.value));
      }

      if(tag.textContent == "Amanda Knight"){
        tag.classList.add('wider-colour-1');
      }
    });

    addColour();
  }

  const addColour = (event) => {

    let i = 2;
    tags.value.forEach((item, index) => {
      if(document.querySelector(`[data-content="${item}"]`)){
        Array.from(document.querySelectorAll(`[data-content="${item}"]`)).forEach((tag)=>{

          tag.classList.add(`wider-colour-${i}`);
          
        });
        
          if(i > 20)
            i = 0;

          i++;
      }
    });
  }

  const getCases = async (requestObject) => {
    try {

      const response = await fetch(`/data/premium-conveyancing.json`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(requestObject),
      }).then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong on API server!');
        }
      });

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const filterCases = async (event) => {


    const tableComponent = document.querySelector('#table');
    const form = document.querySelector('#filter');
    const formData = new FormData(form);

    if(event && event.detail.page)
      formData.append("page", event.detail.page);
    else if(tableComponent.hasAttribute('data-page'))
      formData.append("show", tableComponent.getAttribute('data-page'));

    if(tableComponent.hasAttribute('data-show'))
      formData.append("show", tableComponent.getAttribute('data-show'));


    cases.value = await getCases(Object.fromEntries(formData));

    if(cases.value.meta){

      page.value = cases.value.meta['current_page'];
      pages.value = cases.value.meta['last_page'];
      per_page.value = cases.value.meta['per_page'];
      total.value = cases.value.meta['total'];
    }

    const updateEvent = new CustomEvent('update-table');
    tableComponent.dispatchEvent(updateEvent);
  }

  onMounted(async () => {

    await filterCases();

    // Make it easier to query the tags later by adding a data attribute
    Array.from(document.querySelectorAll('td .tag, td .badge')).forEach((tag) => {

      tag.setAttribute('data-content', tag.textContent);

      if(!tags.value.includes(tag.textContent)){
        tags.value.push(tag.textContent);
        localStorage.setItem('tags',JSON.stringify(tags.value));
      }
    });

    addColour();
  });

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


      <Table id="table" class="table--cta table--fullwidth" @search-submit="filterCases" @update-show="filterCases" @update-page="filterCases" :data-page="page" :data-pages="pages" :data-show="per_page" :data-total="total" >
        <form slot="before" @change="filterCases" id="filter">

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in cases['data']" :key="row.id">
              <td>
                <div class='dialog__wrapper'>
                  <button class='btn btn-secondary btn-compact fa-ellipsis-vertical btn-sm m-0' popovertarget='menu3314748953277' aria-haspopup='true' aria-controls='menu3314748953277' style='anchor-name: --menu3314748953277;'>Lorum ipsum</button>
                  <iam-menu class='dialog--fix dialog--list' id='menu3314748953277' popover='auto' role='menu' style='position-anchor: --menu3314748953277;'><button class='btn btn-action' data-single='' role='menuitem' tabindex='0' autofocus='true'>View task</button><button class='btn btn-action' data-single='' role='menuitem' tabindex='0'>Mark as completed</button><button class='btn btn-action' data-single='' role='menuitem' tabindex='0'>Delete task</button></iam-menu>
                </div>
              </td>
              <td>{{ row.id }}</td>
              <td>{{ row.created }}</td>
              <td>{{ row.task }}</td>
              <td data-value="James Lambert">
                <InlineEdit @inline-edit-save="addColour">
                <Multiselect data-label="" data-name="users2" data-url="/users.json?search=" class="mb-0" data-single>
                  <label class="tag"><input type="checkbox" name="user" value="1234" checked/>James Lambert</label>
                </Multiselect>
                </InlineEdit>
              </td>
              <td>{{ row.lead }}</td>
              <td>{{ row.phone }}</td>
              <td>{{ row.agent }}</td>
              <td><a href='/standalone/premium-conveyancing/case'>View profile</a></td>
            </tr>
          </tbody>
        </table>
      </Table>

    </div>

    
  </main>
</template>