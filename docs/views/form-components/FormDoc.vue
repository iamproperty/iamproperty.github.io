<script setup lang="ts">
  import Integration from '../Integration.vue';
  import Form from '@/components/Form/Form.vue';

  import { fileupload as events } from '../../events.js';

  function filesupload($event) {
    console.log($event);
  }
</script>
<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Form component (beta)</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">
        ..
      </p>
    </div>

    <Form>

      <form>
      <label>
        Category
        <select name="category" id="add-document-category">
            <option value="">Please select an option</option>
            <option value="App\Client">Client Document</option>
            <option value="App\Transaction">Transaction Document</option>
        </select>
      </label>

      <label>
        Select document type
        <select name="document_type_id[]" id="document_type_id-0" data-disabled-if='[{"if":"add-document-category","equals":"App\\Transaction"}]'>
          <option value=""></option>
          <option value="17" data-show-if='[{"if":"add-document-category","equals":"App\\Transaction"}]'>Title plan</option>
          <option value="18">Title register</option>
          <option value="19">Monthly Invoice</option>
          <option value="20">Monthly Transactions</option>
          <option value="21">AML Quick Search</option>
          <option value="22">AML Full Search</option>
          <option value="23">PRS Search</option>
          <option value="24">Title Plan</option>
          <option value="25">Title Register</option>
          <option value="26">International Client Search</option>
          <option value="27">Client Risk Assessement</option>
          <option value="28">Company Logo</option>
          <option value="29">Photo ID</option>
          <option value="30">Authenticated photo ID</option>
          <option value="31">Non-photo ID</option>
          <option value="32">Authenticated non-photo ID</option>
          <option value="33">Proof of address</option>
          <option value="34">Authenticated proof of address</option>
          <option value="35">Other</option>
          <option value="36">Company document</option>
          <option value="37">Billing Invoice</option>
          <option value="38">Billing Transactions</option>
          <option value="39">Power of Attorney</option>
          <option value="40">Appointment as personal representative</option>
          <option value="41">Will</option>
          <option value="42">Death certificate</option>
          <option value="43">Solicitor Contract</option>
          <option value="44">Solicitor Logo</option>
          <option value="45">Solicitor Client Care Letter</option>
          <option value="46">Client Billing Invoice</option>
          <option value="47">Biometric Online ID Verification</option>
          <option value="48">Biometric Online ID Verification Selfie Image</option>
          <option value="49">Biometric Online ID Verification Instructions Image</option>
          <option value="50">Biometric Online ID Verification Performed Image</option>
          <option value="51">Biometric Online ID Verification ID document Image</option>
          <option value="52">Company Statement</option>
          <option value="53">Conveyancing Quote</option>
          <option value="54">Instruction Document</option>
          <option value="55">Conveyancing Document</option>
          <option value="56">Solicitor Invoice</option>
        </select>
      </label>
    
    </form>
    </Form>



    <Integration component="fileupload" componentName="iam-fileupload">
      <template #web-component>
        <pre><code>{{`<iam-fileupload data-maxsize="500"> <input type="file" name="files[]" accept=".pdf, .csv, .jpg, .png" multiple="multiple" /></iam-fileupload>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import FileUpload from '@/components/Carousel/FileUpload.vue</script>
        
<FileUpload data-maxsize="500"><input type="file" name="files[]" multiple="multiple" accept=".pdf, .csv, .jpg, .png" /></FileUpload>

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
              <th>data-maxsize</th>
              <td>-</td>
              <td>Integer</td>
              <td>No</td>
              <td>Blocks files from being added that is larger than the max size given in kb's. .</td>
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
              <th>title</th>
              <td>The span which contains the label for the component e.g., Upload file</td>
            </tr>
            <tr>
              <th>button</th>
              <td>The button which prompts the system file explorer to open</td>
            </tr>
            <tr>
              <th>files</th>
              <td>The div which houses an item per file that has been selected.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #dispatched-events>
        <span v-html="events"></span>
      </template>

      <template #criteria>
        <ul>
          <li>The user should be able to open their file explorer by clicking the 'upload file' button.</li>
          <li>The user should be able to select multiple files in the 'multiple' attribute is set.</li>
          <li>The user should be able to see a list of all the files they have selected.</li>
          <li>The user should be able to remove a file from the list by clicking the 'x' icon on the file.</li>
          <li>
            If the data-maxsize attribute is set and the user tries to upload a file larger than the set size, they will
            be shown an error and the file will not be added to the list.
          </li>
        </ul>
      </template>
      <template #data-layer>
        <span v-html="events"></span>
      </template>
    </Integration>

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
              <td>V1 added</td>
              <td>24.07.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/file-upload.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import anatomy from '../../img/file-upload-anatomy.png';

  import Input from '@/components/Input/Input.vue';
  import FileUpload from '@/components/FileUpload/FileUpload.vue';

  export default {
    components: {
      DSHeader,
      Input,
      FileUpload,
    },
    data() {
      return {
        headerImg: headerImg,
        anatomy: anatomy,
        message: 'input field value',
        htmlUsage: `...`,
      };
    },
  };
</script>
