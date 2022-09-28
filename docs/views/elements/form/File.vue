<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0">
        <li><a href="/elements/form">Form elements</a></li>
      </ul>
      <h1>File upload</h1>
    </div>
    <div class="container visualtest">
      <Input type="file" id="test16" label="Label"></Input>
    </div>

    <div class="container visualtest">
      <Input class="form-control--lrg-file" type="file" id="testfile" label="Label" multiple="multiple"></Input>
    </div>

    <div class="container pb-0">
      <h2>Multiple files</h2>
      <p>There will be cases when the user needs to upload more than one file at a time. At this point meta style data may need to be collected for each file, which would be bespoke to the task. The muliple file element should always consist of 1 upload input field and a delete button on one row with bespoke fields in the middle. Then an add file button to duplicate the first row to create new file upload fields.</p>
    </div>

    <div class="container visualtest">
      <form method="GET">
        <FileUploads id="files" inputcolclass="col-12 col-md-2" :maxfilesize="90000" :maxfiles="5">
          <div class="row" data-group>
            <div class="col-12 col-sm-6 col-md-4">
              <Input type="select" data-id="category" id="category" name="category[]" label="Category" labelclass="col mw-fit-content" class="form-control-inline" :options="[{display:'Please select an option',value:''},{display:'Client document',value:'client'},{display:'Transaction document',value:'transaction'}]" required></Input>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <Input type="select" data-id="client" id="client" name="client[]" label="Client" labelclass="col mw-fit-content" class="form-control-inline" :options="[{display:'Please select an option',value:''},{display:'A clients name',value:'2'}]" required disabled data-activeif="category" data-equals="client"></Input>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <Input type="select" data-id="type" id="type" name="type[]" label="Document Type" labelclass="col mw-fit-content" class="form-control-inline" :options="[{display:'Please select an option',value:''},{display:'Photo ID',value:'photoid'}]" required disabled data-activeif="category" data-displayif="category" data-equals="client"></Input>

              <Input type="select" data-id="type" id="type" name="type[]" label="Document Type" labelclass="col mw-fit-content" class="form-control-inline d-none" :options="[{display:'Please select an option',value:''},{display:'Title plan',value:'titleplane'}]" required disabled data-activeif="category" data-displayif="category" data-equals="transaction"></Input>

            </div>
          </div>
        </FileUploads>
      </form>

    </div>

  </main>
</template>


<script>
import Input from '@/elements/Input/Input.vue'
import FileUploads from '@/elements/FileUploads/FileUploads.vue'
import Readme from '@/elements/Input/README.md'

export default {
  components: {
    Input,
    FileUploads,
    Readme
  },
  data () {
    return {
      message:'input field value',
      htmlUsage: `...`,
    }
  }
}
</script>
