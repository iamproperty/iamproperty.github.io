<script lang="ts" setup>
  import { ref, onMounted, defineComponent } from 'vue'
  import PCNav from './components/PCNav.vue';
  import Notification from '@/components/Notification/Notification.vue';

  

  import CaseStatus from './components/CaseStatus.vue';
  import CaseActions from './components/CaseActions.vue';
  import CaseDetails from './components/CaseDetails.vue';

  import CaseTasks from './components/CaseTasks.vue';
  import CaseNotes from './components/CaseNotes.vue';
  import CaseDocuments from './components/CaseDocuments.vue';
  import CaseActivities from './components/CaseActivities.vue'
  
  import CaseMilestones from './components/CaseMilestones.vue'
  
  import CaseProtocols from './components/CaseProtocols.vue'
  
  import addNote from './components/addNote.vue';
  import EditDetails from './components/editDetails.vue'

  import { addColour, addDataContent } from './functions.ts';

  import { useRoute } from 'vue-router'

  const route = useRoute()
  const onward = route.query['onward'] && route.query['onward'] == 'yes' ? true : false;

  const alert = route.query['alert'];

  const tags = ref([]);

  if(localStorage.getItem('tags') != null)
    tags.value = JSON.parse(localStorage.getItem('tags'));


  onMounted(() => {
    
    addDataContent(tags);
    addColour(tags);
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
    <CaseStatus></CaseStatus>
    <CaseActions></CaseActions>
    <CaseDetails></CaseDetails>


<CaseMilestones></CaseMilestones>
<CaseProtocols class="md-col-end-5"></CaseProtocols>


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
    
    <CaseTasks class="md-col-start-7"></CaseTasks>
    <CaseNotes class="md-col-end-7"></CaseNotes>
    <CaseDocuments class="md-col-start-8"></CaseDocuments>
    <CaseActivities class=""></CaseActivities>

    
  </main>


  <addNote></addNote>



  <EditDetails></EditDetails>




</template>