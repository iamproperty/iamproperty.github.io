<template>
  <iam-pagination>
  </iam-pagination>
</template>

<script>
import iamPagination from '../../../assets/ts/components/pagination/pagination.component'
import { ucfirst, unsnake } from '../../helpers/strings'

export default {
  name: 'Pagination',
  props: {

  },
  computed: {

  },
  created(){

    this.$nextTick(function () {
      
      if (!window.customElements.get('iam-pagination'))
        window.customElements.define('iam-pagination', iamPagination);
    })
  },
  updated(){
    
  }
}
</script>
