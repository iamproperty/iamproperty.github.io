<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Form file upload fields</h1>
    </DSHeader>


    <div class="container">
      <p class="lead">File uploaders allow users to upload content of their own. A file uploader is commonly found in forms, but can also live as a standalone element. There are two variants of file uploaders—our default file uploader and a drag and drop file uploader.  Max-width: 800px, In other cases, assume that the width typically follows where the form lives in (Modal, focused task, page, etc.)</p>
    </div>



    <div class="container pb-0">

      <h2>Default file uploader</h2>
    </div>

    <div class="container visualtest">
      <FileUpload><input type="file" name="files[]" multiple="multiple" accept=".pdf, .csv, .jpg, .png" /></FileUpload>
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
      <p>In some circumstances a document upload may require you to label which document type it is you’re uploading, please use the form fields necessary to achieve this. No matter the form field element chosen, it must follow the correct guidance which is applied to that form field type used alongside the file uploader.</p>
    </div>

    <div class="container visualtest">
      <FileUpload><input type="file" name="files[]" multiple="multiple" accept=".pdf, .csv, .jpg, .png" /></FileUpload>

      <div>

<label for="test1">Label</label>

<select name="test1" id="test1" >
  <option value="1">One</option>
  <option value="2">Two</option>
</select>

</div>
      <div>

        <label for="test2">Label</label>

        <select name="test2" id="test2" multiple>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
        
      </div>



    </div>

    <div class="container pb-0">

<h2>Drag and drop file uploader</h2>
<p>In some circumstances a document upload may require you to label which document type it is you’re uploading, please use the form fields necessary to achieve this. No matter the form field element chosen, it must follow the correct guidance which is applied to that form field type used alongside the file uploader.</p>
</div>
    <div class="container visualtest">
      <FileUpload class="drag-drop"><input type="file" name="files[]" accept=".pdf, .csv, .jpg, .png" /></FileUpload>
    </div>


  </main>
</template>


<script>
import DSHeader from '../DSHeader.vue';
import headerImg from '../../img/type-header.png';
import anatomy from '../../img/file-upload-anatomy.png';

import Input from '@/components/Input/Input.vue'
import FileUpload from '@/components/FileUpload/FileUpload.vue'
import Readme from '@/components/Input/README.md'

export default {
  components: {
    DSHeader,
    Input,
    FileUpload,
    Readme
  },
  data () {
    return {
      headerImg: headerImg,
      anatomy: anatomy,
      message:'input field value',
      htmlUsage: `...`,
    }
  }
}
</script>
