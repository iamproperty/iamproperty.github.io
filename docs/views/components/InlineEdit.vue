<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Inline edit</h1>
    </DSHeader>


    <h2>Introduction</h2>
    <p>The filter list wraps around a normal list element and gives it the functionality to reduce the list by adding a search term to the created input field. The search works on the text content of the list items and not the inner html. This allows for any element you want to be added to the list item from labels to buttons.</p>
    


    <h2>Input field</h2>


    <InlineEdit id="inlineEdit" data-autosave>
      <label>Optional label
        <input type="text" name="text" value="Placeholder text" />
      </label>
    </InlineEdit>



    <h3 class="h4 mt-5 pb-1">Dispatched events</h3>
    <pre><code id="dispatchedEvents"></code></pre>


    <div class="mt-5 container">
      
      <h2>Implementation</h2>
      <Tabs >
        <details>
          <summary><h2>Web component</h2></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <Readme></Readme>
        </details>
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="javascript">{{htmlUsage}}</code></pre>
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
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>0.1</td>
              <td>28.05.2023</td>
              <td>No designs supplied</td>
            </tr>
          </tbody>
        </table>
        <!--<a href="/pdfs/tables.pdf" download>Download latest designs</a>-->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../../../assets/sass/func" as *;

#dispatchedEvents {
  max-height: 10rem;
}
</style>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import Readme from '@/components/Filterlist/README.md'
import WebReadme from '~/ts/components/filterlist/README.md'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Table from '@/components/Table/Table.vue'
import InlineEdit from '../../../src/components/InlineEdit/InlineEdit.vue'

export default {
  components: {
    DSHeader,
    Table,
    Readme,
    WebReadme,
    Tabs,
    Tab,
    InlineEdit
  },
  mounted(){
    this.$nextTick(function () {
    
      let inlineEdit = document.querySelector('#inlineEdit');

      let dispatchedEvents = document.querySelector('#dispatchedEvents');
      let events = ['inline-edit-cancel','inline-edit-save','inline-edit-autosave'];
        
      events.forEach((eventType ,index) => {
            
        inlineEdit.addEventListener(eventType, event => {
          
          dispatchedEvents.innerHTML += `${eventType}: ${JSON.stringify(event.detail)}\n`;
          dispatchedEvents.scrollTop = dispatchedEvents.scrollHeight;
        });
      });


      inlineEdit.addEventListener('inline-edit-save', event => {
        
        const savedEvent = new CustomEvent("inline-edit-saved");
        inlineEdit.dispatchEvent(savedEvent);
      });

      inlineEdit.addEventListener('inline-edit-autosave', event => {
          
        const savedEvent = new CustomEvent("inline-edit-saved");
        inlineEdit.dispatchEvent(savedEvent);
      });

    });
  },
  data () {
    return {
      headerImg: headerImg,
      htmlUsage: `<div class="iam-filter-list">
  <div class="form-control__wrapper">
    <label for="search" class="visually-hidden">Search</label>
    <span class="suffix" role="presentation"><slot name="icon"></slot></span>
    <input name="search" id="search" type="text" class="form-control" autocomplete="off">
  </div>
  <div class="list__wrapper">
    <ul>
      <li>Olivia Anderson</li>
      <li>Ethan Ramirez</li>
      <li>Sophia Patel</li>
      <li>Noah Jenkins</li>
      <li>Ava Thompson</li>
    </ul>
  </div>
</div>`
    }
  }
}
</script>