<template>
  <div>
    <Nav logo="sold"  btnlink="/admin/logout" btntext="Logout" class="bg-primary nav--admin nav--inline-search">
      <ul class="list-unstyled">
        <li class=""><a href="/props" title="View your profile details">Hello <strong>Michelle Main</strong> (Level 1)</a></li>
        <li class=""><a href="/props">Dashboard</a></li>
        <li class=""><a href="https://iamproperty.atlassian.net/servicedesk/customer/portal/11" target="_blank">Support Ticket</a></li>
      </ul>
      <form>
        <Input id="search" type="search" v-model="searchTermGen" placeholder="Keyword, property pr ap ref" label="Search" class="form-control-sm" list="search-terms" @keyupEvent="inputKeyup(...arguments)"></Input>
        <button class="btn btn-search">
          <svg class="icon" viewBox="0 0 32 32">
            <title>Search</title>
            <ellipse cx="14.92" cy="13.81" rx="11.92" ry="11.81" class="icon__outline" />
            <line x1="22.68" y1="22.75" x2="30" y2="30" class="icon__outline" />
          </svg>
        </button>
      </form>

      <template v-slot:secondary>
        <ul class="list-unstyled">
          <li class=""><a href="/props">Properties</a></li>
          <li class=""><a href="/props">Agents</a></li>
          <li class=""><a href="/props">Customer Profiles</a></li>
          <li class=""><a href="/props">Agents League</a></li>
          <li class=""><a href="/props">Staff</a></li>
          <li class=""><a href="/props">Reports</a></li>
          <li class=""><a href="/props">Documents</a></li>
          <li class=""><a href="/props">Archive</a></li>
          <li class=""><a href="/props">Regions</a></li>
        </ul>
      </template>
    </Nav>
    <datalist id="search-terms">
      <option v-for="(value,index) in searchTerms" :key="index" :data-link="value.url">{{value.display ? value.display : value.value}}</option>
    </datalist>


    <main>
      
      <div class="container pt-4">
        <h1>Welcome to your dashboard <span class="text-info">Michelle Main</span></h1>

      </div>
      
      
      <Accordion class="accordion--keep-open accordion--straight">
        <AccordionItem title="November Overview" open titlecolour="primary">
          <Snapshot :items="snapshotitems">
            <h2>Snapshot</h2>
          </Snapshot>

          <Accordion class="accordion--keep-open accordion--straight">
            <AccordionItem title="7 Test Avenue" badge="3">
              <div class="row mt-3 mb-4">
                <div class="col-12 col-sm-4 pb-2">
                  <span>Draft Contracts Received:</span>
                  <span class="h6">15 days ago</span>
                </div>
                <div class="col-12 col-sm-4 pb-2">
                  <span>Original Completions Date:</span>
                  <span class="h6">01/11/2021</span>
                </div>
                <div class="col-12 col-sm-4 pb-2">
                  <span>Forecast Completions Date:</span>
                  <span class="h6">05/11/2021</span>
                </div>
                <div class="col-12 col-sm-4 pb-2">
                  <span>Current Milestone:</span>
                  <span class="h6">Enqs. Answered</span>
                </div>
                <div class="col-12 col-sm-8 col-md-4 pe-5 pb-2">
                  <span>RAG Status against completion deadline:</span>
                  <span class="h6 bg-success p-2 text-center">Green</span>
                </div>
                <div class="col-12 col-sm-4 pb-2">
                  <span>Vendor Name:</span>
                  <span class="h6">Joe Bloggs</span>
                </div>
                <div class="col-12 col-sm-4 pb-2">
                  <span>Vendor Solicitor:</span>
                  <span class="h6">Test & Test & Sons</span>
                </div>
                <div class="col-12 col-sm-4 pb-2">
                  <span>Buyer Name:</span>
                  <span class="h6">John Smith</span>
                </div>
                <div class="col-12 col-sm-4 pb-2">
                  <span>Buyer Solicitor:</span>
                  <span class="h6">Test & Test & Sons</span>
                </div>
                <div class="col-12 col-sm-4 pb-2">
                  <span>Estate Agent:</span>
                  <span class="h6">Test properties</span>
                </div>
              </div>

              <span class="h3">Notes:</span>
              <Table :fields="notefields" :items="notes"></Table>
              <a href="#addnote" class="btn btn-secondary mb-5">Add note</a>

              <span class="h3">Tasks:</span>
              <Table :fields="fields" :items="items" reorder class="mb-5"></Table>
              <a href="#addtask" class="btn btn-secondary mb-5">Add task</a>

            </AccordionItem>
            <AccordionItem title="89 Test Lane">
              <p>Accordion item content</p>
            </AccordionItem>
            <AccordionItem title="17 Test Road">
              <p>Accordion item content</p>
            </AccordionItem>
          </Accordion>
          
        </AccordionItem>
        <AccordionItem title="December overview" titlecolour="primary">
          <p>Accordion item content</p>
        </AccordionItem>
        <AccordionItem title="January overview" titlecolour="primary">
          <p>Accordion item content</p>
        </AccordionItem>
      </Accordion>

      <Modal id="addnote">
        <!-- content -->
        <form class="container" id="create_note" v-on:submit.prevent="createNote">
          <h2 class="h1">Create a new note</h2>
          <Input id="note_property" type="hidden"></Input>
          <Input id="note_date" label="Date:" type="date"></Input>
          <Input id="note_type" label="Type:" type="select" :options="[{display:'Lead Source Notes',value:'lead'},{display:'Appraisal Notes',value:'appraisal'},{display:'Vendor Contact',value:'vendor'},{display:'Branch notes',value:'branch'}]" ></Input>

          <Input id="note_users" label="Users attached to note:" type="select" :options="[{display:'Person 1',value:'person1'},{display:'Person 2',value:'person2'},{display:'Person 3',value:'person3'},{display:'Person 4',value:'person4'}]" multiple="multiple"></Input>

          <Input id="note" label="Note:" type="textarea" rows="5"></Input>
          <button class="btn btn-primary mb-0">Create note</button>
        </form>
      </Modal>

      <Modal id="addtask">
        <!-- content -->
        <form class="container" id="create_task" v-on:submit.prevent="createTask">
          <h2 class="h1">Create a new task</h2>
          <Input id="task_property" type="hidden"></Input>
          <Input id="task_priority" label="Priority:" type="select" :options="[{display:'1',value:'1'},{display:'2',value:'2'},{display:'3',value:'3'}]" ></Input>


          <Input id="task_name" label="Task name:" required></Input>
          <Input id="task_received" label="Date received:" type="date"></Input>
          <Input id="task_due" label="Date due:" type="date"></Input>
          <Input id="task_completed" label="Date completed:" type="date"></Input>

          <Input id="task_info" label="Additional info:"></Input>

          <button class="btn btn-primary mb-0">Create task</button>
        </form>
      </Modal>

    </main>

    <footer class="bg-primary pt-4">
      <div class="container">
        <p>© Copyright iamsold 2021 - All rights reserved</p>
        <p>172.19.0.5</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "../../../assets/sass/_func.scss";

</style>

<script>
import Nav from '@/components/Nav/Nav.vue'
import Input from '@/components/Input/Input.vue'
import Snapshot from '@/components/Snapshot/Snapshot.vue'
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionItem from '@/components/Accordion/AccordionItem.vue'
import Table from '@/components/Table/Table.vue'
import Modal from '@/components/Modal/Modal.vue'

export default {
  components: {
    Nav,
    Input,
    Snapshot,
    Accordion,
    AccordionItem,
    Table,
    Modal
  },
  props: {
    searchTerm: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      savedSearchTerm: '',
      searchTerms: [
        {
          'url': '/london',
          'value': 'London'
        }
      ],
      snapshotitems: [
        {
          title: 'Exchanged',
          number: 1
        },
        {
          title: 'SSTC',
          number: 5,
          link: '#anchor'
        },
        {
          title: 'Green',
          number: 1,
          bg: 'success'
        },
        {
          title: 'Amber',
          number: 1,
          bg: 'warning'
        },
        {
          title: 'Red',
          number: 1,
          bg: 'danger'
        },
        {
          title: 'Opportunities this month',
          number: 1,
          bg: 'info'
        },
        {
          title: 'Completions Achieved MTD',
          number: 1,
          bg: 'info'
        }
      ],
      fields: [
        { key: 'priority',
    sortable: true },
        { key: 'task_name' },
        { key: 'date_received',
    sortable: true },
        { key: 'date_due',
    sortable: true },
        { key: 'date_completed',
    sortable: true },
        { key: 'additional_info' }
      ],
      items: [
        {
          priority: '2',
          task_name: 'Task One',
          date_received: '01/11/21',
          date_due: '01/11/21',
          date_completed: '01/11/21',
          additional_info: 'Task One info'
        },
        {
          priority: '2',
          task_name: 'Task Two',
          date_received: '01/11/21',
          date_due: '01/11/21',
          date_completed: '01/11/21',
          additional_info: 'Task Two info'
        },
        {
          priority: '1',
          task_name: 'Task Three',
          date_received: '01/11/21',
          date_due: '01/11/21',
          date_completed: '01/11/21',
          additional_info: 'Task Three info'
        }
      ],
      notefields: [
        { key: 'date', sortable: true },
        { key: 'type' },
        { key: 'users' },
        { key: 'note' }
      ],
      notes: [
        {
          date: '01/11/21',
          type: 'Vendor Contact',
          users: 'Person',
          note: 'A note of some kind'
        }
      ]
    }
  },
  computed: {
    searchTermGen: {
      get() {

        if(this.savedSearchTerm)
          return this.savedSearchTerm;

        return this.searchTerm;
      },
      set(val) {
        
        this.savedSearchTerm = val;
        this.$emit('input', val);
      }
    }
  },
  methods: {
    inputKeyup(event){
      this.searchTerms =  [
        {
          'url': '/london',
          'value': 'London'
        },
        {
          'url': '/leicester',
          'value': 'Leicester'
        }
      ];
    },
    createNote(event){

      const selected = document.querySelectorAll('#note_users option:checked');
      const users = Array.from(selected).map(el => el.innerHTML);

      let note = {
        'date': document.getElementById('note_date').value,
        'type': document.getElementById('note_type').value,
        'users': users.join(', '),
        'note': document.getElementById('note').value
      }

      this.notes.push(note)
      document.querySelector('#addnote > a:first-child').click();
    },
    createTask(event){


      let note = {
        'priority': document.getElementById('task_priority').value,
        'task_name': document.getElementById('task_name').value,
        'date_received': document.getElementById('task_received').value,
        'date_due': document.getElementById('task_due').value,
        'date_completed': document.getElementById('task_completed').value,
        'additional_info': document.getElementById('task_info').value
      }

      this.items.push(note)

      document.querySelector('#addtask > a:first-child').click();
    }
  }
}
</script>