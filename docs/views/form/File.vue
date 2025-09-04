<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import anatomy from '../../img/file-upload-anatomy.png';
  import Tabs from '@/components/Tabs/Tabs.vue';

  import Input from '@/components/Input/Input.vue';
  import FileUpload from '@/components/FileUpload/FileUpload.vue';
  import Readme from '@/components/FileUpload/README.md';
  import WebReadme from '~/ts/components/fileupload/README.md';

  const message = 'input field value';
  const htmlUsage = `...`;
</script>

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
      <h2>File upload component</h2>
      <p>
        The basic styles and behaviour of file upload field can be upgraded by using the design system file upload
        component.
      </p>
      <a href="/components/file" class="btn btn-primary">File upload component</a>
    </div>
  </main>
</template>
