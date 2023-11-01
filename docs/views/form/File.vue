<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Form file upload fields (Beta)</h1>
    </DSHeader>


    <div class="container">
      <p class="lead">....</p>
    </div>



    <div class="container pb-0">

      <h2>Default file uploader</h2>
    </div>

    <div class="container visualtest">
      <input type="file" name="files[]" multiple="multiple" accept=".pdf, .csv, .jpg, .png" />
    </div>

    <div class="container">

      <h2>Tables component</h2>
      <p>The basic styles and behaviour of tables can be upgraded by using the design system table component. </p>
      <a href="/elements/tables" class="btn btn-primary">Tables component</a>
    </div>

  </main>
</template>


<script>
import DSHeader from '../DSHeader.vue';
import headerImg from '../../img/type-header.png';
import anatomy from '../../img/file-upload-anatomy.png';
import Tabs from '@/components/Tabs/Tabs.vue'

import Input from '@/components/Input/Input.vue'
import FileUpload from '@/components/FileUpload/FileUpload.vue'
import Readme from '@/components/FileUpload/README.md'
import WebReadme from '~/ts/components/fileupload/README.md'

export default {
  components: {
    DSHeader,
    Input,
    FileUpload,
    Readme,
    Tabs,
    WebReadme
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
