<script setup lang="ts">
  import Integration from '../Integration.vue';

  function filesupload($event) {
    console.log($event);
  }
</script>
<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Form file upload fields</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">
        File uploaders allow users to upload content of their own. A file uploader is commonly found in forms, but can
        also live as a standalone element. There are two variants of file uploaders—our default file uploader and a drag
        and drop file uploader. Max-width: 800px, In other cases, assume that the width typically follows where the form
        lives in (Modal, focused task, page, etc.)
      </p>
    </div>

    <div class="container pb-0">
      <h2>Default file uploader</h2>
    </div>

    <div class="container visualtest">
      <FileUpload
        data-maxsize="500"
        @elementchange="
          ($event) => {
            filesupload($event);
          }
        "
        @empty="
          ($event) => {
            filesupload($event);
          }
        "
        ><input
          type="file"
          name="files[]"
          accept=".pdf, .csv, .jpg, .png"
          multiple="multiple"
          @change="
          ($event) => {
            filesupload($event);
          }
        "
      /></FileUpload>
    </div>

    <div class="container">
      <h3>Anatomy</h3>

      <img :src="anatomy" loading="lazy" class="mb-3" />
      <ol class="mb-4">
        <li>Heading: Text to describe upload section.</li>
        <li>Description: Text to help the user make an informed selection.</li>
        <li>Button or drop zone label: The action to select a file to upload.</li>
        <li>Uploaded file: A file that has successfully been uploaded.</li>
        <li>X: The delete icon will remove the uploaded file.</li>
      </ol>
    </div>

    <div class="container pb-0">
      <h2>Default file uploader with form fields</h2>
      <p>
        In some circumstances a document upload may require you to label which document type it is you’re uploading,
        please use the form fields necessary to achieve this. No matter the form field element chosen, it must follow
        the correct guidance which is applied to that form field type used alongside the file uploader.
      </p>
    </div>

    <div class="container visualtest">
      <FileUpload data-maxsize="500"
        ><input type="file" name="files[]" multiple="multiple" accept=".pdf, .csv, .jpg, .png"
      /></FileUpload>

      <div>
        <label for="category">Category</label>

        <select id="category" name="category">
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
      </div>

      <div>
        <label for="client">Client</label>

        <select id="client" name="client">
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
      </div>

      <div>
        <label for="type">Type</label>

        <select id="type" name="type">
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
      </div>
    </div>

    <div class="container pb-0">
      <h2>Drag and drop file uploader</h2>
      <p>
        In some circumstances a document upload may require you to label which document type it is you’re uploading,
        please use the form fields necessary to achieve this. No matter the form field element chosen, it must follow
        the correct guidance which is applied to that form field type used alongside the file uploader.
      </p>
    </div>
    <div class="container visualtest">
      <FileUpload data-maxsize="500" class="fileupload--drag-drop"
        ><input type="file" name="files[]" accept=".pdf, .csv, .jpg, .png"
      /></FileUpload>
    </div>

    <Integration component="fileupload" componentName="iam-fileupload">
      <template #web-component>
        <pre><code>{{`<div class="file-upload">
  <span class="file-upload__title">Upload file</span>
  <p class="helper-text">Max file size is 500kb. Supported file types are .pdf, .csv, .jpg, .png</p>
  <button class="btn btn-primary"><i class="fa-regular fa-arrow-up-from-bracket me-2" aria-hidden="true" slot="btn"></i> Upload document</button>
  <div class="drop-area"><input type="file" name="files[]" accept=".pdf, .csv, .jpg, .png"></div>
  <hr>
  <input type="file" name="files[]" accept=".pdf, .csv, .jpg, .png">
  <div class="files"></div>
</div>`}}</code></pre>
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
              <td>Blocks files from being added that is larger than the max size given in kb's.                .</td>
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

      <template #vars>
        <table>
          <thead>
            <tr>
              <th>Var</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>--carousel-spacing</th>
              <td>
                The outer inline spacing, used to correctly create the overflow effect on mobile and tablet. This is
                updated when the carousel is contained insde an admin panel our dialog.
              </td>
            </tr>
            <tr>
              <th>--last-item-extra</th>
              <td>
                Can be used to make sure the last item is displayed correctly. Not set by default but used in situations
                like when the carousel is contained inside and admin panel or dialog.
              </td>
            </tr>
            <tr>
              <th>--track-size, --track-colour, --thumb-colour, --thumb-size, --thumb-size-outline</th>
              <td>These variables are used to control the size and colour of the slider element.</td>
            </tr>
            <tr>
              <th>--carousel-image-aspect-ratio</th>
              <td>
                Update the image aspect ratio when the carousel is used to house images. By default it is 3/2 which is a
                fairly common landscape aspect ratio.
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #dispatched-events>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>elementchange</th>
              <td>Fires whenever the file input changes, so if files are added, or changed.</td>
              <td></td>
            </tr>
            <tr>
              <th>empty</th>
              <td>Fires when the file input changes, resulting in there being no files selected.</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #criteria>
        <ul>
          <li>The user should be able to open their file explorer by clicking the 'upload file' button.</li>
          <li>The user should be able to select multiple files in the 'multiple' attribute is set.</li>
          <li>The user should be able to see a list of all the files they have selected.</li>
          <li>The user should be able to remove a file from the list by clicking the 'x' icon on the file.</li>
          <li>If the data-maxsize attribute is set and the user tries to upload a file larger than the set size, they will be shown an error and the file will not be added to the list.</li>
        </ul>
      </template>
      <template #data-layer>
        <p>No component specific dataLayer events</p>
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
  import Tabs from '@/components/Tabs/Tabs.vue';

  import Input from '@/components/Input/Input.vue';
  import FileUpload from '@/components/FileUpload/FileUpload.vue';
  import Readme from '@/components/FileUpload/README.md';
  import WebReadme from '~/ts/components/fileupload/README.md';

  export default {
    components: {
      DSHeader,
      Input,
      FileUpload,
      Readme,
      Tabs,
      WebReadme,
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
