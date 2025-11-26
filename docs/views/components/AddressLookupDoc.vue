<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import AddressLookup from '@/components/AddressLookup/AddressLookup.vue';
  import Notification from '@/components/Notification/Notification.vue';

  import anatomyImg from '../../img/address_anatomy.png';
  import resultsImg from '../../img/address_results.png';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';

  import footerImg from '../../img/address_popover_footer.png';
  import stackedImg from '../../img/address_popover_footer_stacked.png';

  

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Address finder UI component</h1>
    </DSHeader>

    <div class="mb-5">
      <Notification data-status="warning" >
        <strong>Use the correct component:</strong> This is the UI component and does not come with any pre-defined values and options. It is preferred that a standardised component is used with agreed upon content and with the correct options already set.
        <br/><a href="/standardised/addresslookup" class="">Standardised component </a>
      </Notification>
    </div>

    <p class="lead">Use the address finder when users need to quickly find and enter an address as part of a form or workflow. This component reduces manual typing, speeds up completion, and helps ensure accurate, standardised address data.</p>
    
    
    <h2>UI component</h2>

    <p>The address finder component is used to lookup an address using a postcode. In the event an address cannot be found a manual entry link is available to the user.</p>


    <h3>Anatomy</h3>

    <div class="container p-0 mb-3"><img :src="anatomyImg" class="w-100"/></div>

    <ol class="mb-5">
      <li>Use existing address checkbox (optional)</li>
      <li>Address finder search (form input field with suffix and helper text)</li>
      <li>Tertiary buttons (optional)</li>
      <li>Search result popover list</li>
    </ol>

    <h3>Behaviour</h3>

    <ul class="mb-5">
      <li>Checking the use existing address checkbox (1) uses an address previously chosen in the workflow. </li>
      <li>Performing a postcode search (2) returns results in a scrollable popover list (4).</li>
      <li>Tertiary buttons are shown inline and wrap when wider than the available space.</li>
    </ul>

    <h2>Search states</h2>

    <p>The postcode search uses default form input field states for default, active and error states. Searching and search results states use the popover component.</p>
    
    <h3>Address finder search field</h3>


    <div class="container visualtest">
      <span class="d-block pb-2">Default</span>
      <AddressLookup data-url="/addressess2.json?search=">
        <label
          >Address line one
          <input
            type="text"
            name="address-line-1"
            data-name="address_1"
            data-name-alt="address_number_name"
            data-name-2="address_1"
            value="142"
            required
        /></label>

        <label>Address line two (Optional) <input type="text" name="address-line-2" data-name="address_2" /></label>

        <label
          >Address line three (Optional)
          <input type="text" name="address-line-3" data-name="address_3" id="address-line-3"
        /></label>

        <label>City <input type="text" name="city" data-name="city" id="city" required /></label>

        <label
          >County
          <select name="county" id="county" required>
            <option value=""></option>
            <option value="Tyne and Wear">Tyne and Wear</option>
            <option value="Cleveland">Cleveland</option>
          </select>
        </label>

        <div class="row">
          <label class="col-sm-4">Postcode <input type="text" name="postcode" data-name="address_1" required /></label>
        </div>

        <label
          >Country
          <select name="country" id="country" required>
            <option value=""></option>
            <option value="England">England</option>
            <option value="Scotland">Scotland</option>
            <option value="Wales">Wales</option>
          </select>
        </label>

      </AddressLookup>


      <span class="d-block pb-2">Error state</span>

      <form class="was-validated">
      <AddressLookup data-url="/addressess2.json?search=">
        <label
          >Address line one
          <input
            type="text"
            name="address-line-1"
            data-name="address_1"
            data-name-alt="address_number_name"
            data-name-2="address_1"
            value="142"
            required
        /></label>

        <label>Address line two (Optional) <input type="text" name="address-line-2" data-name="address_2" required /></label>

        <label
          >Address line three (Optional)
          <input type="text" name="address-line-3" data-name="address_3" id="address-line-3"
        /></label>

        <label>City <input type="text" name="city" data-name="city" id="city" dat-required /></label>

        <label
          >County
          <select name="county" id="county" data-required>
            <option value=""></option>
            <option value="Tyne and Wear">Tyne and Wear</option>
            <option value="Cleveland">Cleveland</option>
          </select>
        </label>

        <div class="row">
          <label class="col-sm-4">Postcode <input type="text" name="postcode" data-name="address_1" data-required /></label>
        </div>

        <label
          >Country
          <select name="country" id="country" data-required>
            <option value=""></option>
            <option value="England">England</option>
            <option value="Scotland">Scotland</option>
            <option value="Wales">Wales</option>
          </select>
        </label>

      </AddressLookup>
      </form>
    </div>


    <h2>Search results popover</h2>

    <p>The search results popover shows the results of the search and can also contain a header and footer allowing the user to take further action. This is particularly useful when providing contextual guidance, and when other UI elements such as tertiary buttons are hidden by the popover.</p>



    <div class="container p-0 mb-3"><img :src="resultsImg" class="w-100"/></div>


    <ol class="mb-5">
      <li>Popover action bar</li>
      <li>Text area</li>
      <li>Action button (optional)</li>
      <li>Search results</li>
    </ol>


    <h3>Behaviour</h3>

    <ul>
      <li>The popover action bar header always shows at the top of the search results list and scrolls with content.</li>
      <li>The popover action bar footer always shows at the bottom of the search results list and scrolls with content.</li>
      <li>The use of an action button (3) is optional.</li>
      <li>Content in the action bar can be stacked.</li>
    </ul>

    <div class="mb-5">
      <div class="md-col-span-6 md-col-start-auto pb-4 text-center">
        <img :src="footerImg" class="w-100 mb-1"/>
        <strong>Example of a popover action bar footer with an action button</strong>
      </div>
      <div class="md-col-span-6 md-col-start-auto pb-4 text-center">
        <img :src="stackedImg" class="w-100 mb-1"/>
        <strong>Example of a stacked action bar footer</strong>
      </div>
    </div>
    
    <h2>Completed address</h2>

    <p>The completed address is shown as a single, compact line of text. This avoids the the use of multiple input fields and makes it clear that the address can’t be edited directly.</p>
    
    <h3>Anatomy</h3>
    <div class="container visualtest">
      <AddressLookup data-url="/addressess.json?search=">
        <label
          >Address line one
          <input
            type="text"
            name="address-line-1"
            data-name="address_1"
            value="Newcastle Upon Tyne Hospitals NHS Trust"
            required
        /></label>

        <label>Address line two (Optional) <input type="text" name="address-line-2" data-name="address_2" /></label>

        <label
          >Address line three (Optional)
          <input type="text" name="address-line-3" data-name="address_3" id="address-line-3"
        /></label>

        <label
          >City <input type="text" name="city" data-name="city" id="city" required value="NEWCASTLE UPON TYNE"
        /></label>

        <label
          >County
          <select name="county" id="county" required>
            <option value=""></option>
            <option value="Tyne and Wear" selected>Tyne and Wear</option>
            <option value="Cleveland">Cleveland</option>
          </select>
        </label>

        <div class="row">
          <label class="col-sm-4"
            >Postcode <input type="text" name="postcode" data-name="address_1" required value="NE3 3HD"
          /></label>
        </div>

        <label
          >Country
          <select name="country" id="country" required>
            <option value=""></option>
            <option value="England" selected>England</option>
            <option value="Scotland">Scotland</option>
            <option value="Wales">Wales</option>
          </select>
        </label>
      </AddressLookup>
    </div>

    <ol class="mb-5">
      <li>Address text (body)</li>
      <li>Actions (optional)</li>
    </ol>

    <h3>Behaviour</h3>
    <ul class="mb-5">
      <li>The address text (1) can be shown alongside optional actions (2).</li>
      <li>When the address is longer than the available space it should wrap onto a new line.</li>
      <li>Actions use the text link with icon component.</li>
      <li>Multiple actions can be shown.</li>
    </ul>
    

    <Integration component="address-lookup" componentName="iam-address-lookup">
      <template #web-component>
        <pre><code>{{`<iam-address-lookup data-url="/addressess2.json?search=">
  <label
    >Address line one
    <input type="text" name="address-line-1" data-name="address_1"  data-name-alt="address_number_name" data-name-2="address_1" value="142" required/></label>

  <label>Address line two (Optional) <input type="text" name="address-line-2" data-name="address_2" required /></label>

  <label
    >Address line three (Optional)
    <input type="text" name="address-line-3" data-name="address_3" id="address-line-3"
  /></label>

  <label>City <input type="text" name="city" data-name="city" id="city" dat-required /></label>

  <label
    >County
    <select name="county" id="county" data-required>
      <option value=""></option>
      <option value="Tyne and Wear">Tyne and Wear</option>
      <option value="Cleveland">Cleveland</option>
    </select>
  </label>

  <div class="row">
    <label class="col-sm-4">Postcode <input type="text" name="postcode" data-name="address_1" data-required /></label>
  </div>

  <label
    >Country
    <select name="country" id="country" data-required>
      <option value=""></option>
      <option value="England">England</option>
      <option value="Scotland">Scotland</option>
      <option value="Wales">Wales</option>
    </select>
  </label>

</iam-address-lookup>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Menu from '@/components/AddressLookup/AddressLookup.vue</script>
        
<AddressLookup data-url="/addressess2.json?search=">
  <label
    >Address line one
    <input type="text" name="address-line-1" data-name="address_1"  data-name-alt="address_number_name" data-name-2="address_1" value="142" required/></label>

  <label>Address line two (Optional) <input type="text" name="address-line-2" data-name="address_2" required /></label>

  <label
    >Address line three (Optional)
    <input type="text" name="address-line-3" data-name="address_3" id="address-line-3"
  /></label>

  <label>City <input type="text" name="city" data-name="city" id="city" dat-required /></label>

  <label
    >County
    <select name="county" id="county" data-required>
      <option value=""></option>
      <option value="Tyne and Wear">Tyne and Wear</option>
      <option value="Cleveland">Cleveland</option>
    </select>
  </label>

  <div class="row">
    <label class="col-sm-4">Postcode <input type="text" name="postcode" data-name="address_1" data-required /></label>
  </div>

  <label
    >Country
    <select name="country" id="country" data-required>
      <option value=""></option>
      <option value="England">England</option>
      <option value="Scotland">Scotland</option>
      <option value="Wales">Wales</option>
    </select>
  </label>

</AddressLookup>
`}}</code></pre>
      </template>

      <template #attr>
        <table>
          <thead>
            <tr>
              <th>Attributes</th>
              <th>Default</th>
              <th>Options/Type</th>
              <th>Required</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>data-url</th>
              <td></td>
              <td>String</td>
              <td>Yes</td>
              <td>Update the URL used for the ajax call</td>
            </tr>
            <tr>
              <th>data-title</th>
              <td>Find an address</td>
              <td>String</td>
              <td>No</td>
              <td>Updates the label shown</td>
            </tr>
            <tr>
              <th>data-error-msg</th>
              <td>Required address fields</td>
              <td>String</td>
              <td>No</td>
              <td>Update what error message is shown</td>
            </tr>
            <tr>
              <th>data-postcode-lookup-label</th>
              <td>Use postcode lookup</td>
              <td>String</td>
              <td>No</td>
              <td>Update the button text of the button which displays the postcode lookup view</td>
            </tr>
            <tr>
              <th>data-display-text</th>
              <td></td>
              <td>String</td>
              <td></td>
              <td>Update which value from returned array (from the ajax call) used in the option values</td>
            </tr>
            <tr>
              <th>data-min-chars</th>
              <td>3</td>
              <td>Number</td>
              <td></td>
              <td>Declare how many characters are needed before triggering an ajax call</td>
            </tr>
            <tr>
              <th>data-use-label</th>
              <td>Use saved address</td>
              <td>String</td>
              <td></td>
              <td>Update the button text of the button which fills the address input fields</td>
            </tr>
            
            <tr>
              <th>data-manual</th>
              <td></td>
              <td>Flag</td>
              <td></td>
              <td>Display the manual input mode by default</td>
            </tr>
            <tr>
              <th>data-placeholder</th>
              <td>Postcode</td>
              <td>String</td>
              <td></td>
              <td>Update the placeholder text</td>
            </tr>
            <tr>
              <th>data-postcode</th>
              <td></td>
              <td>Flag</td>
              <td></td>
              <td>Makes the search input check for a valid postcode before making an ajax call</td>
            </tr>
            
          </tbody>
        </table>
      </template>


      <template #parts>
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>input</th>
              <td>The main search input field</td>
            </tr>
            <tr>
              <th>suffix</th>
              <td>The search button next to the main input field</td>
            </tr>
            <tr>
              <th>manualButton</th>
              <td>The use manual address button</td>
            </tr>
            <tr>
              <th>button</th>
              <td>The use postcode lookup button</td>
            </tr>
            <tr>
              <th>edit-button</th>
              <td>The button on the filled in address to edit address</td>
            </tr>
            <tr>
              <th>remove-button</th>
              <td>The button on the filled in address to remove address</td>
            </tr>
          </tbody>
        </table>
      </template>

    </Integration>
    <Versions pdf="/pdfs/address_finder.pdf">
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
            <td>V1 added</td>
            <td>17.07.2025</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>

  </main>
</template>
