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
    
      <h2>Anatomy</h2>
      <img :src="anatomy" class="mb-3" />
      <ol class="mb-5">
        <li>Default state container</li>
        <li>Select box  (optional)</li>
        <li>Filter/Sort by (optional)</li>
        <li>Secondary compact button (optional)</li>
        <li>Primary button  (optional)</li>
        <li>Selected state container (if a Select box is added, the selected state container will appear when one or more items are selected)</li>
        <li>Action button group</li>
      </ol>
    </div>


    <div class="container">

      <h3>Components that can be used in the Action bar</h3>

      <div class="row">
        <div class="col-6 col-md-4">
          <p>Primary button small</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Primary button small (compact)</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Secondary button small compact</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Action button</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Action button (compact)</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Quick filter action bar button</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Grid/List/Small list</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Text count</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Search bar (secondary compact button)</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Search bar expanded</p>
        </div>
        
      </div>
      <h4>Overflow menu options</h4>
      <div class="row">
        <div class="col-6 col-md-4">
          <p>Popover: Text list</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Popover: Text list with icons</p>
        </div>
        <div class="col-6 col-md-4">
          <p>Popover: selection collapsed </p>
        </div>
        <div class="col-6 col-md-4">
          <p>Popover: selection expanded</p>
        </div>
      </div>

    </div>




    <div class="container">
      <h2>Behaviours</h2>
      <h3>Adaptive displays</h3>



      <div class="demo" >

        <div class="row">
          <div class="d-none d-md-block col-12 pb-5">
                
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

              <button class="btn btn-action fa-pen-to-square" data-single slot="selected">Edit</button>
              <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
              <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
              <hr slot="selected" />
              <button class="btn btn-action" slot="selected">Cancel</button>

            </Actionbar>
          </div>
        </div>


        <div class="row">
          <div class="d-none d-sm-block col-12 col-md-8 pb-5">
                
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

              <button class="btn btn-action fa-pen-to-square" data-single slot="selected">Edit</button>
              <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
              <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
              <hr slot="selected" />
              <button class="btn btn-action" slot="selected">Cancel</button>

            </Actionbar>
          </div>
        </div>

        <div class="row">
          <div class="col">
                
            <Actionbar data-selectall data-search style="max-width: 23.4375em;">
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

              <button class="btn btn-action fa-pen-to-square" data-single slot="selected">Edit</button>
              <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
              <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
              <hr slot="selected" />
              <button class="btn btn-action" slot="selected">Cancel</button>

            </Actionbar>
          </div>
        </div>

      </div>

      <h3 class="pt-5">Dispatched events</h3>
      <p>The actionbar component will dispatch events for other components like tables to listen to creating interactive UI's.</p>
      <div class="demo">
        <Actionbar data-selectall data-search id="dispatch">
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

          <button class="btn btn-action fa-pen-to-square" data-single slot="selected">Edit</button>
          <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
          <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
          <hr slot="selected" />
          <button class="btn btn-action" slot="selected">Cancel</button>

        </Actionbar>
      </div>
      <pre><code id="dispatchedEvents"></code></pre>
    </div>

    <div class="container">
      <h3>States</h3>
      <p>The Action bar has three states: Default, Selected and Search.</p>
      <p>Default is the initial (and possibly only, depending on use) state the Action bar takes. Defined by it’s lighter background, it’s a responsive container that houses buttons and actions that affect the elements its linked to globally, e.g., filtering a table, sorting a list by newest to oldest, etc. </p>
      <p>The Default state may not have the ‘Select all’ checkbox on the left, it could have other components or be empty on the left. It’s down to the utility and required functions needed.</p>

      <div class="demo mb-5">
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

          <button class="btn btn-action fa-pen-to-square" data-single slot="selected">Edit</button>
          <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
          <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
          <hr slot="selected" />
          <button class="btn btn-action" slot="selected">Cancel</button>

        </Actionbar>
      </div>

      <p>Selected is a secondary state, it only appears when the user selects an item linked to the Action bar, overlapping the Default state and presenting a list of actions relevant to the selected item(s). There are Individual and Batch actions:</p>

      <p><strong>Individual actions:</strong> These are actions that only change a single item. They are disabled when two or more items are selected, e.g. ‘Edit’.</p>
      <p><strong>Batch actions:</strong> These are actions that can be done ‘in batch’. The user can selected as many items as they want and apply a batch action to them and change them simultaneously, e.g. ‘Delete’, ‘Undo’, ‘Archive’.</p>

      <p>Dismissal: The Select state will be dismissed either when the user completes an action and it is no longer needed, or when the user deselects all linked items. In both cases, the Selected state will be hidden and return to the Default state.</p>
      
      <div class="demo mb-5">
        <Actionbar data-selectall data-selected="1" data-search class="mb-4">
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

          <button class="btn btn-action fa-pen-to-square" data-single slot="selected">Edit</button>
          <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
          <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
          <hr slot="selected" />
          <button class="btn btn-action" slot="selected">Cancel</button>

        </Actionbar>
        <Actionbar data-selectall data-selected="6" data-search>
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

          <button class="btn btn-action fa-pen-to-square" data-single slot="selected">Edit</button>
          <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
          <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
          <hr slot="selected" />
          <button class="btn btn-action" slot="selected">Cancel</button>

        </Actionbar>
      </div>
      <p>Search is a secondary state, it only appears when the user clicks the ‘search’ icon, overlapping the Default state and presenting an input field. </p>
      <p>Dismissal: On Desktop and Tablet, you can exit the Search state by pressing the ‘X’ icon or anywhere on the page outside the search bar. On Mobile, You can exit the Search state by pressing anywhere on the page outside the search bar. When dismissed, the Search state will be hidden and return to the Default state.</p>
      <div class="demo mb-5">
        <Actionbar data-selectall data-search="show">
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

          <button class="btn btn-action fa-pen-to-square" data-single slot="selected">Edit</button>
          <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
          <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
          <hr slot="selected" />
          <button class="btn btn-action" slot="selected">Cancel</button>

        </Actionbar>
      </div>
    </div>




    <div class="container">

      <h3>Switch views</h3>

      <div class="demo">
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

.demo {
  background-color: #F2F2F2;
  padding: 3rem 1.5rem;
}

div[data-view] {
  padding: 2rem 1rem;
  background: #FCFCFC;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
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

import anatomy from '../../img/actionbar/actionbar-anatomy.png'

export default {
  components: {
    DSHeader,
    headerImg,
    Tabs,
    Table,
    Actionbar,
    Readme,
    WebReadme,
    anatomy
  },
  data () {
    return {
      headerImg: headerImg,
      anatomy:anatomy
    }
  },
  mounted() {
    this.$nextTick(function () {

      let uploadBtn = document.getElementById('uploadBtn');


      uploadBtn.addEventListener('click', (event) => {

        alert('Trigger an upload function, this will be done as seperate JS.')
      });



      let actionbar = document.querySelector('#dispatch');
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