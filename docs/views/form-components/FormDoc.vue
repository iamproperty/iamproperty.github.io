<script setup lang="ts">
  import Integration from '../Integration.vue';

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
