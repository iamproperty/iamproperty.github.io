<template>
  <div class="multiple-file-uploads mb-4">

    <div class="row">
      <div :class="`${inputcolclass ? inputcolclass : 'col-12 col-sm-4'}`">
        <Input type="file" :id="id" :name="`${id}[]`" label="Add new file" labelclass="d-none" class="form-control-inline col" required :data-filesize="maxfilesize"></Input>
      </div>
      <div class="col-12 col-md me-auto">
        <slot></slot>
      </div>
      <div class="col mw-fit-content">
        <button type="button" class="btn btn-tertiary me-0" data-delete>Delete</button>
      </div>
    </div>

    <button type="button" class="btn btn-secondary me-0" data-add :data-maxfiles="maxfiles">+ Add file</button>
    
  </div>
</template>

<script>
import Input from '../../elements/Input/Input.vue'

export default {
  components: {
    Input
  },
  name: 'FileUploads',
  props: {
    id: {
      type: String,
      required: true
    },
    inputcolclass: {
      type: String,
      required: false
    },
    maxfilesize: {
      type: Number,
      required: false
    },
    maxfiles: {
      type: Number,
      required: false
    }
  }
}
</script>
