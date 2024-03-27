<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Inline edit</h1>
    </DSHeader>


    <h2>Introduction</h2>
    <p>The filter list wraps around a normal list element and gives it the functionality to reduce the list by adding a search term to the created input field. The search works on the text content of the list items and not the inner html. This allows for any element you want to be added to the list item from labels to buttons.</p>
    


    <h2>Input field</h2>


    <InlineEdit id="inlineEdit" data-autosave>
      <label >Optional label
        <input type="email" name="text" value="Placeholder text" />
      </label>
    </InlineEdit>


    <h3 class="h4 mt-5 pb-1">Dispatched events</h3>
    <pre><code id="dispatchedEvents"></code></pre>


    <h2 class="mt-5">Textarea</h2>


    <InlineEdit id="inlineEdit2" >
      <label>Optional label
        <textarea name="textarea" required>Default value</textarea>
      </label>
    </InlineEdit>


    <h3 class="h4 mt-5 pb-1">Dispatched events</h3>
    <pre><code id="dispatchedEvents2"></code></pre>


    <h2 class="mt-5">Select</h2>


    <InlineEdit id="inlineEdit3" >
      <label>Optional label
        <select name="select">
          <option value="">Please select</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Detached">Detached</option>
          <option value="Semi-detached">Semi-detached</option>
          <option value="Terraced">Terraced</option>
        </select>
      </label>
    </InlineEdit>


    <h3 class="h4 mt-5 pb-1">Dispatched events</h3>
    <pre><code id="dispatchedEvents3"></code></pre>



    <h2 class="mt-5">Multiselect</h2>


    <InlineEdit id="inlineEdit4">
      <Multiselect placeholder="Placeholder text" data-label="Users">
        <label class="tag"><input type="checkbox" name="tags" value="James Lambert" />James Lambert</label>
        <label class="tag"><input type="checkbox" name="tags" value="Amanda Knight"/>Amanda Knight</label>
        <label class="tag"><input type="checkbox" name="tags" value="Brian Lord"/>Brian Lord</label>
        <label class="tag"><input type="checkbox" name="tags" value="Claire Lane"/>Claire Lane</label>
        <label class="tag"><input type="checkbox" name="tags" value="John Smith"/>John Smith</label>
        <label class="tag"><input type="checkbox" name="tags" value="James Brown"/>James Brown</label>
        <label class="tag"><input type="checkbox" name="tags" value="Sarah Brown"/>Sarah Brown</label>
      </Multiselect>
    </InlineEdit>


    <h3 class="h4 mt-5 pb-1">Dispatched events</h3>
    <pre><code id="dispatchedEvents4"></code></pre>


    

    <h2>Input field</h2>


    <InlineEdit id="inlineEdit5" data-autosave>
      <label>Optional label
        <input type="date" name="text" />
      </label>
    </InlineEdit>


    <h3 class="h4 mt-5 pb-1">Dispatched events</h3>
    <pre><code id="dispatchedEvents5"></code></pre>



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
import Multiselect from '../../../src/components/Multiselect/Multiselect.vue'


export default {
  components: {
    DSHeader,
    Table,
    Readme,
    WebReadme,
    Tabs,
    Tab,
    InlineEdit,
    Multiselect
  },
  mounted(){
    this.$nextTick(function () {
    
      let inlineEdit = document.querySelector('#inlineEdit');
      let inlineEdit2 = document.querySelector('#inlineEdit2');
      let inlineEdit3 = document.querySelector('#inlineEdit3');
      let inlineEdit4 = document.querySelector('#inlineEdit4');
      let inlineEdit5 = document.querySelector('#inlineEdit5');

      let dispatchedEvents = document.querySelector('#dispatchedEvents');
      let dispatchedEvents2 = document.querySelector('#dispatchedEvents2');
      let dispatchedEvents3 = document.querySelector('#dispatchedEvents3');
      let dispatchedEvents4 = document.querySelector('#dispatchedEvents4');
      let dispatchedEvents5 = document.querySelector('#dispatchedEvents5');
      let events = ['inline-edit-cancel','inline-edit-save','inline-edit-autosave','inline-edit-confirmed'];
        
      events.forEach((eventType ,index) => {
            
        inlineEdit.addEventListener(eventType, event => {
          
          dispatchedEvents.innerHTML += `${eventType}: ${JSON.stringify(event.detail)}\n`;
          dispatchedEvents.scrollTop = dispatchedEvents.scrollHeight;
        });

        inlineEdit.addEventListener(eventType, event => {
          
          dispatchedEvents2.innerHTML += `${eventType}: ${JSON.stringify(event.detail)}\n`;
          dispatchedEvents2.scrollTop = dispatchedEvents2.scrollHeight;
        });

        inlineEdit3.addEventListener(eventType, event => {
          
          dispatchedEvents3.innerHTML += `${eventType}: ${JSON.stringify(event.detail)}\n`;
          dispatchedEvents3.scrollTop = dispatchedEvents3.scrollHeight;
        });

        inlineEdit4.addEventListener(eventType, event => {
          
          dispatchedEvents4.innerHTML += `${eventType}: ${JSON.stringify(event.detail)}\n`;
          dispatchedEvents4.scrollTop = dispatchedEvents4.scrollHeight;
        });

        inlineEdit5.addEventListener(eventType, event => {
          
          dispatchedEvents5.innerHTML += `${eventType}: ${JSON.stringify(event.detail)}\n`;
          dispatchedEvents5.scrollTop = dispatchedEvents5.scrollHeight;
        });
      });

      // Input events
      inlineEdit.addEventListener('inline-edit-save', event => {
        
        const savedEvent = new CustomEvent("inline-edit-saved");
        inlineEdit.dispatchEvent(savedEvent);
      });

      inlineEdit.addEventListener('inline-edit-autosave', event => {
          
        const savedEvent = new CustomEvent("inline-edit-saved");
        inlineEdit.dispatchEvent(savedEvent);
      });

      // Textarea events
      inlineEdit2.addEventListener('inline-edit-save', event => {
        
        const savedEvent = new CustomEvent("inline-edit-saved");
        inlineEdit2.dispatchEvent(savedEvent);
      });

      inlineEdit2.addEventListener('inline-edit-autosave', event => {
          
        const savedEvent = new CustomEvent("inline-edit-saved");
        inlineEdit2.dispatchEvent(savedEvent);
      });

      // Select events
      inlineEdit3.addEventListener('inline-edit-save', event => {
          
        const savedEvent = new CustomEvent("inline-edit-saved");
        inlineEdit3.dispatchEvent(savedEvent);
      });

      inlineEdit4.addEventListener('inline-edit-save', event => {
          
        const savedEvent = new CustomEvent("inline-edit-saved");
        inlineEdit4.dispatchEvent(savedEvent);
      });

      
      // date/time events
      inlineEdit5.addEventListener('inline-edit-save', event => {
        
        const savedEvent = new CustomEvent("inline-edit-saved");
        inlineEdit5.dispatchEvent(savedEvent);
      });

      inlineEdit5.addEventListener('inline-edit-autosave', event => {
          
        const savedEvent = new CustomEvent("inline-edit-saved");
        inlineEdit5.dispatchEvent(savedEvent);
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