<script lang="ts" setup>
  import { ref, onMounted, defineComponent } from 'vue'
  import PCNav from './components/PCNav.vue';
  import Table from '@/components/Table/Table.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Notification from '@/components/Notification/Notification.vue';

  
  import InlineEdit from '@/components/InlineEdit/InlineEdit.vue';
  import Multiselect from '@/components/Multiselect/Multiselect.vue';



import clientForm from './components/client-form.vue';


import { useRoute } from 'vue-router'

const route = useRoute()
const onward = route.query['onward'] && route.query['onward'] == 'yes' ? true : false;

const alert = route.query['alert'];



  const tags = ref([]);

  if(localStorage.getItem('tags') != null)
    tags.value = JSON.parse(localStorage.getItem('tags'));


const addColour = () => {

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


  onMounted(() => {

    //await filterCases();

    // Make it easier to query the tags later by adding a data attribute
    Array.from(document.querySelectorAll('iam-inline-edit .tag, iam-inline-edit .badge')).forEach((tag) => {

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

    <Notification v-if="alert == 'add-client'" data-type="toast" data-status="success" class="colour-success" data-timeout="9000" role="alert"> 
      <strong>Client manually added</strong>
      <br/>Amy Smith had been added to this case.
      <i class="fa-regular fa-circle-check" aria-hidden="true" slot="icon"></i>
    </Notification>

    <Notification v-if="alert == 'add-onward'" data-type="toast" data-status="success" class="colour-success" data-timeout="9000" role="alert"> 
      <strong>Linked purchase case manually created</strong>
      <br/>View all information in the case profile.
      <i class="fa-regular fa-circle-check" aria-hidden="true" slot="icon"></i>
    </Notification>



    <div v-if="onward" class="pt-0 pb-3">
    <Notification data-status="info" class="colour-info" role="alert"> 
      <strong>Add onward purchase:</strong>
      It has been identified there is a known onward purchase linked to this case, add onward purchase via the toolbox on this case preofile.
      <button slot="btns" class="link">Dismiss</button>
      <i class="fa-regular fa-triangle-exclamation" aria-hidden="true" slot="icon"></i>
    </Notification>
    </div>

    <!-- Add an alert if onward purchase -->

    <h1 v-if="alert == 'add-onward'" class="h2" >Onward purchase: 22 Lynx Road, Tynemouth, Newcastle Upon Tyne NE1 5LS</h1>
    <h1 v-else>Sale: 22 Lynx Road, Tynemouth, Newcastle Upon Tyne NE1 5LS</h1>

    <div class="md-col-end-6">
      <span class="badge wider-colour-3 me-3 mb-3">Status: Opportunity</span> ID: <strong class="me-3">56930</strong> <a v-if="alert == 'add-onward'" href="/standalone/premium-conveyancing/case" target="_blank"><i class="fa-regular fa-file"></i>View related sale</a>
    </div>

    <div class="md-col-start-8 text-md-end">
      
      <strong>Case assignee: </strong><span class="d-inline-block text-start" data-value="James Lambert"><InlineEdit @inline-edit-save="addColour" >
                <Multiselect data-label="" data-name="users2" data-url="/users.json?search=" class="mb-0" data-single>
                  <label class="tag"><input type="checkbox" name="user" value="1234" checked/>James Lambert</label>
                </Multiselect>
                </InlineEdit></span>
    </div>

    

    <div class="md-col-end-7">
      <div class="admin-panel mw-fit-content pt-2 px-2 pb-0">
          
        <a href="/standalone/premium-conveyancing/add-onward" class="btn btn-action fa-plus mb-2">Add onward purchase</a>
        <a href="/standalone/premium-conveyancing/add-client" class="btn btn-action fa-plus mb-2">Add client</a>
        <button data-modal="add-note"  class="btn btn-action fa-plus mb-2">Add note</button>
        <hr class="hr--vertical"/>
        <a href="/standalone/premium-conveyancing/quote" class="btn btn-action fa-arrows-rotate mb-2">Follow up</a>
      </div>
    </div>
    
    <div class="md-col-start-8 text-md-end">
      
      <a href="/standalone/premium-conveyancing/quote" class="btn btn-secondary mt-1">Decline case</a>
      <a href="/standalone/premium-conveyancing/quote" class="btn btn-primary mt-1">Quote case</a>
    </div>



      <div  class="admin-panel ">

        <h2 class="lead text-heading d-block pb-1">Client details</h2>


        <div class="d-flex hover-light p-2 mb-1 rounded mx-minus-2">
          <div class="d-block">
            <span class="d-block pb-1"><strong>Lead client:</strong> John Smith</span>
            <span class="d-block ">
              <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
              <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
              <span class="pe-3 pb-1 d-inline-block"><strong>Email:</strong> Vendor</span>
              <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
              <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
            </span>
          </div>
          <button class="btn btn-secondary btn-compact fa-edit ms-auto mb-0" data-modal="edit-details">Edit</button>
        </div>

        <hr class="border-1 mb-1"/>

        <div class="d-flex hover-light p-2 mb-1 rounded mx-minus-2">
          <div class="d-block">
            <h2 class="lead text-heading d-block pb-3">Transaction details</h2>

            <span class="d-block">
              <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
              <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
              <span class="pe-3 pb-1 d-inline-block"><strong>Email:</strong> Vendor</span>
              <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
              <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
            </span>
          </div>
          
            <button class="btn btn-secondary btn-compact fa-edit ms-auto mb-0" data-modal="edit-details">Edit</button>
        </div>


        <hr class="border-1 mb-1"/>

        
        <div class="d-flex hover-light p-2 rounded mx-minus-2">
          <div class="d-block">
          <h2 class="lead text-heading d-block pb-3">Agency details</h2>


        <span class="d-block">
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
          <span class="pe-3 pb-1 d-inline-block"><strong>Email:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
        </span>
        </div>
          <button class="btn btn-secondary btn-compact fa-edit ms-auto mb-0" data-modal="edit-details">Edit</button>
        </div>

      </div>
      
    <div class="admin-panel md-col-end-6 d-md-flex flex-column">
      <h2 class="bg-light">Local authority: North Tyneside Council</h2>


      <span class="d-block pb-1"><strong>Lead client:</strong> John Smith</span>

      <span class="d-block pb-1"><strong>Lead client:</strong> John Smith</span>

      <Notification data-status="danger" class="colour-danger" role="alert">
        <strong>Action incomplete</strong>
        <br> Alert message will display here<i class="fa-solid fa-triangle-exclamation" aria-hidden="true" slot="icon"></i>
      </Notification>

      <div class="admin-panel__footer wider-colour-3 mt-auto">
        <p>Minimum forecasted time saving on this transaction with Premium Conveyancing</p>
        <strong>25 days saved</strong>
      </div>

    </div>

    <div class="admin-panel md-col-start-7">
      <h2 class="bg-light">Tasks</h2>

      <div class="d-flex align-items-start">
        <!--<span class="lead d-block p-0 me-1"><i class="fa-regular fa-dash p-1"></i></span>-->
        <span class="lead d-block p-0 me-1"><i class="fa-regular fa-check rounded-circle bg-success p-1"></i></span>
        <div>
          <strong class="lead d-block pb-1">Chase prospect</strong>
        
          <span class="d-block mb-2">
            <span class="pe-3 pb-1 d-inline-block"><strong>Task created:</strong> 21.09.25</span>
            <span class="pe-3 pb-1 d-inline-block"><strong>Time:</strong> 11:00</span> 
            <span class="pe-3 pb-1 d-inline-block"><strong>Assignee:</strong> <span class="d-inline-block text-start" data-value="Amanda Knight"><InlineEdit @inline-edit-save="addColour" >
                <Multiselect data-label="" data-name="users2" data-url="/users.json?search=" class="mb-0" data-single>
                  <label class="tag"><input type="checkbox" name="user" value="1234" checked/>Amanda Knight</label>
                </Multiselect>
                </InlineEdit></span></span>
          </span>
        </div>
      </div>
      <div class="d-flex align-items-start">
        <span class="lead d-block p-0 me-1"><i class="fa-regular fa-dash p-1"></i></span>
        <div>
          <strong class="lead d-block pb-1">New prospect</strong>
        
          <span class="d-block mb-2">
            <span class="pe-3 pb-1 d-inline-block"><strong>Task created:</strong> 21.09.25</span>
            <span class="pe-3 pb-1 d-inline-block"><strong>Time:</strong> 11:00</span> 
            <span class="pe-3 pb-1 d-inline-block"><strong>Assignee:</strong> <span class="d-inline-block text-start" data-value="James Lambert"><InlineEdit @inline-edit-save="addColour" >
                <Multiselect data-label="" data-name="users2" data-url="/users.json?search=" class="mb-0" data-single>
                  <label class="tag"><input type="checkbox" name="user" value="1234" checked/>James Lambert</label>
                </Multiselect>
                </InlineEdit></span></span>
          </span>
        </div>
      </div>
        

    </div>
    <div id="notes" class="admin-panel md-col-end-7">
      <h2 class="bg-light">Notes</h2>

      <div v-if="alert == 'add-note'" class="text-end"><button data-modal="add-note" class="fa-plus btn btn-action btn-primary">Add note</button></div>
      <div v-if="alert == 'add-note'" class="mh-md">
        <span class="d-block pb-1">Most recent</span>

        <span class="pe-1 pb-1 d-block"><strong>Title of note</strong></span>
        <span class="d-block mb-2">
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
          <span class="pe-3 pb-1 d-inline-block"><strong>Email:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
        </span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        <hr class="border-1 mb-3" />

        
        <span class="pe-1 pb-1 d-block"><strong>Title of note</strong></span>
        <span class="d-block mb-2">
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Phone:</strong> Vendor</span> 
          <span class="pe-3 pb-1 d-inline-block"><strong>Email:</strong> Vendor</span>
          <span class="pe-3 pb-1 d-inline-block"><strong>Client type:</strong> Vendor</span>
        </span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


      </div>
      <div  v-else class="d-flex flex-column align-items-center p-5 text-center">
        <span class="h3 d-block pb-3">No notes added</span>
        <button  data-modal="add-note" class="btn btn-secondary mx-auto mb-0" >Add note</button>
        
      </div>
    </div>
    <div class="admin-panel md-col-start-8">
      <h2 class="bg-light">Documents</h2>
      <div v-if="alert == 'add-note'" class="text-end"><button data-modal="add-note" class="fa-plus btn btn-action btn-primary">Upload document</button></div>
      <div v-if="alert == 'add-note'" class="mh-md">

      </div>
      <div v-else class="d-flex flex-column align-items-center p-5 text-center">
        <span class="h3 d-block pb-3">No documents added</span>
        <button class="btn btn-secondary mx-auto mb-0" >Add document</button>
      </div>
 
    </div> 

     <div class="admin-panel">
      <h2 class="bg-light">Activity log</h2>

      <Table>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Activity </th>
              <th>Assignee</th>
              <th>Date</th>
              <th>Time</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Opportunity</td>
              <td>Added </td>
              <td>Branch assignee name</td>
              <td>21.09.25</td>
              <td>09:58</td>
              <td><p class="pb-0">Lorum can refer to a Latin word for a strap, thong, or leash, a type of insect or spider anatomy, a male genital piercing, or a Hungarian card game. It is also the basis for the placeholder text "Lorem ipsum". The term's specific meaning depends entirely on the context in which it is used.</p></td>
            </tr>
          </tbody>
        </table>
      </Table>

    </div>

    
  </main>


  <dialog id="add-note" class="dialog--transactional hide-icon text-start">
    <button class="dialog__close">Close</button>
    <span class="h3">Add note</span>
    <p>You are adding a note for the sale case: 22 Lynx Road, Tynemouth, Newcastle upon Tyne, NE1 5LS</p>
    <div class="mh-lg">
        
      <form action="#notes">
        
        <input type="hidden" name="alert" value="add-note" /> 
        
        <label>
          Note type
          <select>
            <option value="vendor" name="method">Vendor</option>
          </select>
        </label>

        <label>
          Add note
          <textarea></textarea>
        </label>

        <span class="label">Share note with</span>
        <fieldset>
          <label class="mb-0"><input type="checkbox" name="share[]" value="all" /> All</label>
          <label class="mb-0"><input type="checkbox" name="share[]" value="iamproperty" /> iamproperty internal</label>
          <label class="mb-0"><input type="checkbox" name="share[]" value="agent" /> Linked agent</label>
          <label class="mb-5"><input type="checkbox" name="share[]" value="solicitor" /> Solicitor (if assigned)</label>
        </fieldset>
          
        <div class="text-nowrap text-end">
          <button class="btn btn-secondary" formmethod="dialog">Cancel</button>
          <button class="btn btn-primary">Save note</button>
      
        </div>   
      </form>
    </div>
  </dialog>




  <dialog id="edit-details" class="dialog--transactional hide-icon text-start">
    <button class="dialog__close">Close</button>
    <span class="h3">Edit details</span>
    <p>You are editing a client for the sale case: 22 Lynx Road, Tynemouth, Newcastle upon Tyne, NE1 5LS</p>
    <div class="mh-lg">
        
      <form>
        
        <input type="hidden" name="alert" value="edit-client" /> 
        
         
        <clientForm></clientForm>
        
          
        <div class="text-nowrap text-end">
          <button class="btn btn-secondary" formmethod="dialog">Cancel</button>
          <button class="btn btn-primary">Save note</button>
      
        </div>   
      </form>
    </div>
  </dialog>




</template>