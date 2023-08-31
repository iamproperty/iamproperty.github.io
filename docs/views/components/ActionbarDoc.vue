<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Action bar</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">Action bars serve as a central hub for users to access and perform actions within an interface.</p>
      <h2>Introduction</h2>
      <p>Action bars are a useful component that can be integrated with other existing components, allowing users to eciently perform actions on one or multiple items simultaneously. Action bars emphasise clarity by presenting a concise set of actions, ensuring that the most important and frequently used actions are prominently displayed.</p>
      <p>Defined by it’s compact design and responsive overflow options, the micro-component rich action bar is viable in already busy interfaces and on smaller screens.</p>
    </div>


    <div class="container">

      <Actionbar data-selectall data-search>

        <div class="dialog__wrapper">
          <button class="btn btn-action mb-0 me-0">Quick filter</button>
          <dialog>
            <div class="mb-0">
              <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest">
              <label for="follow-up-oldest" class="radio--tick">Follow up date (Oldest to newest)</label>
              <hr>
              <input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest">
              <label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label>
              <hr>
              <input type="radio" name="sort" data-sort="" id="date-instructed-oldest" value="date-instructed-oldest" checked="" autofocus="true">
              <label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label>
              <hr>
              <input type="radio" name="sort" data-sort="" id="date-instructed-newest" value="date-instructed-newest">
              <label for="date-instructed-newest" class="radio--tick mb-0">Date Instructed (Newest to oldest)</label>
            </div>
          </dialog>
        </div>

        <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>

        <button class="btn btn-action fa-pen-to-square"  data-single>Edit</button>
        <button class="btn btn-action fa-box-archive" >Archive</button>
        <button class="btn btn-action fa-trash-can" >Delete</button>
        <hr />
        <button class="btn btn-action" >Cancel</button>

      </Actionbar>

      

      <h3 class="pt-5">Dispatched events</h3>
      <pre><code id="dispatchedEvents"></code></pre>
    </div>


    <div class="container">

      <Actionbar data-switchviews="square,list,small" data-view="square">


        <button class="btn btn-action fa-pen-to-square">Edit</button>
        <button class="btn btn-action fa-box-archive">Archive</button>
        <button class="btn btn-action fa-trash-can">Delete</button>

        <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>
      </Actionbar>

      <div data-view="square">
        Square view
      </div>
      <div data-view="list">
        List view
      </div>
      <div data-view="small">
        Small view
      </div>

    </div>



    <div class="container pt-5">
      
      <Table>
        
        <Actionbar data-selectall data-search slot="before">

          <div class="dialog__wrapper">
            <button class="btn btn-action mb-0 me-0">Quick filter</button>
            <dialog>
              <div class="mb-0">
                <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest">
                <label for="follow-up-oldest" class="radio--tick">Follow up date (Oldest to newest)</label>
                <hr>
                <input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest">
                <label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label>
                <hr>
                <input type="radio" name="sort" data-sort="" id="date-instructed-oldest" value="date-instructed-oldest" checked="" autofocus="true">
                <label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label>
                <hr>
                <input type="radio" name="sort" data-sort="" id="date-instructed-newest" value="date-instructed-newest">
                <label for="date-instructed-newest" class="radio--tick mb-0">Date Instructed (Newest to oldest)</label>
              </div>
            </dialog>
          </div>
          
          <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>

          <button class="btn btn-action fa-pen-to-square"  data-single>Edit</button>
          <button class="btn btn-action fa-box-archive" >Archive</button>
          <button class="btn btn-action fa-trash-can" >Delete</button>
          <hr />
          <button class="btn btn-action" >Cancel</button>

        </Actionbar>

        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Date added</th>
              <th>Lorum ipsum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
          </tbody>
        </table>
      </Table>

    </div>



    <div class="container">
      
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h3>Web component</h3></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h3>Vue component</h3></summary>
          <Readme></Readme>
        </details>
        <details>
          <summary><h3>HTML</h3></summary>
          <pre><code class="javascript">{{`<div class="container"></div>`}}</code></pre>
        </details>
      </Tabs>

    </div>
    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Design System Version</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>V1 added</td>
              <td>23.08.2023</td>
              <td>v3.7.10</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/actionbar.pdf" download>Download latest designs</a>
      </div>
    </div>

  </main>
</template>

<style>

#dispatchedEvents {
  max-height: 10rem;;
}

</style>

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import Tabs from '@/components/Tabs/Tabs.vue'
import Table from '@/components/Table/Table.vue'

// Component - Replace the card references to new component
import Actionbar from '@/components/Actionbar/Actionbar.vue'
import Readme from '@/components/Card/README.md'
import WebReadme from '~/ts/components/card/README.md'

export default {
  components: {
    DSHeader,
    headerImg,
    Tabs,
    Table,
    Actionbar,
    Readme,
    WebReadme
  },
  data () {
    return {
      headerImg: headerImg
    }
  },
  mounted() {
    this.$nextTick(function () {

      let uploadBtn = document.getElementById('uploadBtn');


      uploadBtn.addEventListener('click', (event) => {

        alert('Trigger an upload function, this will be done as seperate JS.')
      });



      let actionbar = document.querySelector('iam-actionbar');
      let dispatchedEvents = document.querySelector('#dispatchedEvents');
      let events = ['search-keyup','search-change','search-submit','selected'];
      
      events.forEach((eventType ,index) => {
          
        actionbar.addEventListener(eventType, event => {
          
          dispatchedEvents.innerHTML += `${eventType}: ${JSON.stringify(event.detail)}\n`;
          dispatchedEvents.scrollTop = dispatchedEvents.scrollHeight;
        });
      });

        
            
          
      


    })
  }
}
</script>