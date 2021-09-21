<template>
  <div :class="wrapperClass()">
    <label v-if="needsLabel()" :class="`form-label${labelClass?` ${labelClass}`:''}`" :for="id" v-html="label"></label>
    
    <!-- Standard input field -->
    <input v-if="isInput()" v-model="inputVal" :class="`form-control${size?` form-control-${size}`:``}${inputClass?` ${inputClass}`:``}`" :type="type" :name="id" :id="id" :pattern="needPattern()" :list="hasOptions()" v-bind="$attrs" />
    
    <!-- Textarea -->
    <textarea v-if="type=='textarea'" v-model="inputVal" :class="`form-control${size?` form-control-${size}`:``}${inputClass?` ${inputClass}`:``}`" :type="type" :name="id" :id="id" :pattern="needPattern()" v-bind="$attrs"></textarea>
    
    <!-- Range -->
    <div class="input-group" v-if="type=='range'">
      <input v-model="inputVal" :class="`form-range${inputClass?` ${inputClass}`:``}`" :type="type" :name="id" :id="id" :pattern="needPattern()" :list="hasOptions()" v-bind="$attrs" oninput="this.nextElementSibling.value=this.value;" />
      <output class="input-group-text border-0 col-2 col-sm-1 px-0">{{value}}</output>
    </div>
    
    <!-- Color picker -->
    <div class="input-group" v-if="type=='color'">
      <input v-model="inputVal" :class="`form-control form-control-color${inputClass?` ${inputClass}`:``}`" :type="type" :name="id" :id="id" :pattern="needPattern()" :list="hasOptions()" v-bind="$attrs" oninput="this.nextElementSibling.value=this.value;" />
      <output class="input-group-text flex-fill">{{value?vale:'#000000'}}</output>
    </div>
    
    <!-- Select/dropdown -->
    <select v-if="type=='select'" v-model="inputVal" :class="`form-select${size?` form-select-${size}`:``}${inputClass?` ${inputClass}`:``}`" :type="type" :name="id" :id="id" :pattern="needPattern()" v-bind="$attrs">
      <option v-for="(value,index) in options" :key="index" :value="value.value">{{value.display ? value.display : value.value}}</option>
    </select>

    <datalist v-if="type!='select'&&type!='checkbox'" :id="id+'-list'">
      <option v-for="(value,index) in options" :key="index" :value="value.value">{{value.value}}</option>
    </datalist>

    <!-- Checkbox -->
    <input v-if="type=='checkbox'" class="form-check-input" type="checkbox" :name="id" :id="id" v-bind="$attrs" />
    <label v-if="type=='checkbox'" :class="`form-label form-check-label${labelClass?` ${labelClass}`:''}`" :for="id" v-html="label"></label>

    <!-- Checkbox Button -->
    <input v-if="type=='checkbox-btn'" class="btn-check" type="checkbox" autocomplete="off" :name="id" :id="id" v-bind="$attrs" />
    <label v-if="type=='checkbox-btn'" :class="`btn${labelClass?` ${labelClass}`:''}`" :for="id" v-html="label"></label>


    <!-- Error message -->
    <p v-if="errorMsg" class="invalid-feedback mb-0" v-html="errorMsg"></p>
    <slot></slot>
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
    },
    options: {
      type: Array,
      required: false
    }
  },
  computed: {
    wrapperClass () {
      return () => {
        switch(this.type) {
          case 'radio':
          case 'checkbox':
            return 'form-check'
          case 'checkbox-btn':
            return ''
          default:
            return 'form-control__wrapper'
        }
      }
    },
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
    needsLabel () {
      return () => {
        switch(this.type) {
          case 'radio':
          case 'checkbox':
          case 'checkbox-btn':
            return false
          default:
            return true
        }
      }
    },
    isInput () {
      return () => {
        switch(this.type) {
          case 'textarea':
          case 'select':
          case 'radio':
          case 'checkbox':
          case 'checkbox-btn':
          case 'range':
          case 'color':
            return false
          default:
            return true
        }
      }
    },
    hasOptions() {
      return () => {
        if(this.options) {
          return this.id+'-list'
        }
      }
    },
    inputVal: {
      get() {

        // Default to the first options if no value set for select field
        if(this.value == undefined && this.options != undefined && this.type =="select"){

          return this.options[0].value;
        }

        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>
