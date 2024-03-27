<script setup>
function saveValue(event){
  
  // Replace the timeout with an ajax call
  setTimeout(() => {

    console.log('Passed to Vue');
    const saveEvent = new CustomEvent("inline-edit-saved");
    event.target.dispatchEvent(saveEvent);

  }, 100);
}
</script>

<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Inline edit</h1>
    </DSHeader>


    <h2>Introduction</h2>
    <p>Inline edit displays a custom input component that switches between reading and editing on the same page.</p>
    
    <h2>Anatomy</h2>

    <p>Selects are composed of 3 required sections and 4 optional sections.</p>

    <img :src="Anatomy" />

    <ol>
      <li>Label</li>
      <li>Placeholder text (optional).</li>
      <li>Hover area.</li>
      <li>Field value</li>
      <li>Action buttons</li>
      <li>Validation icon (optional).</li>
      <li>Browser default validation message (optional)</li>
    </ol>

    <h2 class="mt-5">Input field</h2>
    <p>Inline edit can be wrapped around a input field. It starts in a read-only but can be activated when the user clicks or taps the field. Once activated the input appears and can be edited and saved.</p>

    <InlineEdit id="inlineEdit" data-autosave @save="(event) => {saveValue(event)}" @autosave="(event) => {saveValue(event)}">
      <label >Optional label
        <input type="text" name="text" value="Placeholder text" />
      </label>
    </InlineEdit>

    <h3 class="h4 mt-2 pb-1">Dispatched events</h3>
    <pre class="mb-4"><code id="dispatchedEvents" class="dispatchedEvents"></code></pre>

    <h3>Behaviour</h3>

    <ul>
      <li>Hovering over the editable area should show the hover state.</li>
      <li>Clicking the hover state should change the input from read only to editable and show the input.</li>
      <li>The input should have a ‘Save’ and ‘Cancel’ button overlaying the page content located to the right and below the input.</li>
      <li>(Option 1) User must manually save field: the user can change the value in the field then click or press ‘Save’ or ‘Enter’ to change the value or click or press cancel to return the field to the previously entered value. If they click onto another element on the page the field will go into the unsaved state where it remembers the changes. When the user clicks into the field it will show the field with the changes but the user must manually save to change the field value permanently.</li>
      <li>(Option 2) Field saves when the user clicks away - the user can change the value in the field then either click or press ’Save’, ‘Enter’, or click another element on the page to save the value permanently. To cancel the change the user would need to click the cancel button.</li>
      <li>If the value entered in the field is not valid then we can show an optional error message in the browser default error popover. The user shouldn’t be able to save the field until the error has been resolved.</li>
    </ul>

    <h3 class="mt-4">Error state</h3>

    <InlineEdit id="inlineEdit-rror" class="was-validated">
      <label>Optional label
        <input type="text" name="text" required value="" />
      </label>
    </InlineEdit>



    <h2 class="mt-5">Textarea</h2>
    <p>Text area inline edit is a wrapper around a text area. It starts in a read-only but can be activated when the user clicks or taps the field. Once activated the text area appears and can be edited and saved.</p>

    <InlineEdit id="inlineEdit2" @save="(event) => {saveValue(event)}" @autosave="(event) => {saveValue(event)}">
      <label>Optional label
        <textarea name="textarea" required>Default value</textarea>
      </label>
    </InlineEdit>

    <h3 class="h4 mt-2 pb-1">Dispatched events</h3>
    <pre class="mb-4"><code id="dispatchedEvents2" class="dispatchedEvents"></code></pre>

    <h3>Behaviour</h3>

    <ul>
      <li>Hovering over the editable area should show the hover state.</li>
      <li>Clicking the hover state should change the input from read only to editable and show the input.</li>
      <li>The input should have a ‘Save’ and ‘Cancel’ button overlayed over the content located to the right and below the input.</li>
      <li>(Option 1) User must manually save field: the user can change the value in the field then click or press ‘Save’ to change the value or click or press cancel to return the field to the previously entered value. If they click onto another element on the page the field will go into the unsaved state where it remembers the changes. When the user clicks into the field it will show the field with the changes but the user must manually save to change the field value permanently.</li>
      <li>(Option 2) Field saves when the user clicks away - the user can change the value in the field then either click or press ’Save’ or click another element on the page to save the value permanently. To cancel the change the user would need to click the cancel button.</li>
      <li>If the value entered in the field is not valid then we can show an optional error message in the browser default error popover.</li>
      <li>When the input is in inactive or hover the text area should be scrollable.</li>
    </ul>



    <h2 class="mt-5">Select</h2>
    <p>Select inline edit is a wrapper around a standard select. It starts in a read-only but can be activated when the user clicks or taps the field. Once activated the select appears and can be edited and saved.</p>

    <InlineEdit id="inlineEdit3" @save="(event) => {saveValue(event)}" @autosave="(event) => {saveValue(event)}">
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


    <h3 class="h4 mt-2 pb-1">Dispatched events</h3>
    <pre class="mb-4"><code id="dispatchedEvents3" class="dispatchedEvents"></code></pre>

    <h3>Behaviours</h3>

    <ul>
      <li>Hovering over the editable area should show the hover state.</li>
      <li>Clicking the hover state should change the select from read only to editable and show the select with the dropdown open.</li>
      <li>If the user clicks a value from the dropdown it should change and save the new value and change the inline edit to the inactive selected state.</li>
      <li>If the user clicks away from the select or closes the select without choosing a new value it should return the value to the previously selected value and change the inline edit to the inactive state.</li>
    </ul>


    <h2 class="mt-5">Multiselect</h2>
    <p>Multiselect inline edit is a wrapper around a multiselect. It starts in a read-only but can be activated when the user clicks or taps the field. Once activated the multiselect appears and can be edited and saved.</p>

    <InlineEdit id="inlineEdit4" @save="(event) => {saveValue(event)}" @autosave="(event) => {saveValue(event)}">
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


    <h3 class="h4 mt-2 pb-1">Dispatched events</h3>
    <pre class="mb-4"><code id="dispatchedEvents4" class="dispatchedEvents"></code></pre>


    <h3>Behaviours</h3>

    <ul>
      <li>Hovering over the editable area should show the hover state.</li>
      <li>Clicking the hover state should change the multiselect from read only to editable and show the multiselect.</li>
      <li>The multiselect should open with the active state with the dropdown open.</li>
      <li>When a tag is added/removed the value should be saved automatically.</li>
      <li>The user can click away from the field or click another element to return it back to the inactive state</li>
      <li>If the value entered in the multiselect is not valid then we can show an optional error message in the browser default error popover.</li>
    </ul>


    <h2 class="mt-5">Integration</h2>


    <p>The component works by the web component dispatching a custom event called `inline-edit-save` which can be picked up by the pages javaScript so that they can be turned into an api call. The API call will need to dispatch another custom event called `inline-edit-saved` after it has saved the value.</p>





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
              <td>V1</td>
              <td>18.03.2024</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/inline-edit.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../../../assets/sass/func" as *;

.dispatchedEvents {
  min-height: 3rem;
  max-height: 10rem;
  display: block;
  background: #f3f3f3;
  color: #444;
}
</style>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import Readme from '@/components/InlineEdit/README.md'
import WebReadme from '~/ts/components/inline-edit/README.md'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Anatomy from '../../img/inline-edit-anatomy.png'
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

      let dispatchedEvents = document.querySelector('#dispatchedEvents');
      let dispatchedEvents2 = document.querySelector('#dispatchedEvents2');
      let dispatchedEvents3 = document.querySelector('#dispatchedEvents3');
      let dispatchedEvents4 = document.querySelector('#dispatchedEvents4');
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
      });


    });
  },
  data () {
    return {
      headerImg: headerImg,
      Anatomy: Anatomy
    }
  }
}
</script>