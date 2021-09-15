<template>
  <div class="form-control__wrapper">
    <label :class="`form-label${labelClass?` ${labelClass}`:''}`" :for="id">{{label}}</label>
    
    
    <input v-if="isInput()" v-model="inputVal" :class="`form-control${size?` form-control-${size}`:``}${inputClass?` ${inputClass}`:``}`" :type="type" :name="id" :id="id" :pattern="needPattern()" v-bind="$attrs" />

    <textarea v-if="type=='textarea'" v-model="inputVal" :class="`form-control${size?` form-control-${size}`:``}${inputClass?` ${inputClass}`:``}`" :type="type" :name="id" :id="id" :pattern="needPattern()" v-bind="$attrs"></textarea>

    <div class="input-group" v-if="type=='range'">
      <input v-model="inputVal" :class="`form-range${inputClass?` ${inputClass}`:``}`" :type="type" :name="id" :id="id" :pattern="needPattern()" v-bind="$attrs" oninput="this.nextElementSibling.value=this.value;" />
      <output class="input-group-text border-0 col-2 col-sm-1 px-0">{{value}}</output>
    </div>

    <div class="input-group" v-if="type=='color'">
      <input v-model="inputVal" :class="`form-control form-control-color${inputClass?` ${inputClass}`:``}`" :type="type" :name="id" :id="id" :pattern="needPattern()" v-bind="$attrs" oninput="this.nextElementSibling.value=this.value;" />
      <output class="input-group-text flex-fill">{{value?vale:'#000000'}}</output>
    </div>

    <p v-if="errorMsg" class="invalid-feedback mb-0" v-html="errorMsg"></p>
  </div>
</template>

<script>

export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    labelClass: {
      type: String,
      required: false
    },
    inputClass: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    size: {
      type: String,
      required: false
    },
    errorMsg: {
      type: String,
      required: false
    }
  },
  computed: {
    needPattern () {
      return () => {

        if(this.pattern)
          return this.pattern;

        // Create fallback patterns for input types
        switch(this.type) {
          case 'datetime-local':
            return '[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}'
        }
        
        return false
      }
    },
    isInput () {
      return () => {
        switch(this.type) {
          case 'textarea':
          case 'select':
          case 'radio':
          case 'checkbox':
          case 'range':
          case 'color':
            return false
          default:
            return true
        }
      }
    },
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>
