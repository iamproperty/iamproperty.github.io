<template>

  <details class="accordion-item" :id="createID(title)">
    <summary :class="`${titlecolour?`bg-${titlecolour}`:''}`" v-on:click="show = true"><span class="accordion-header accordion-button h4">{{title}}<span v-if="badge" :class="`badge bg-${badgecolour}`">{{badge}}</span></span></summary>
    <div class="accordion-body" v-if="show">
      <slot></slot>
    </div>
  </details>
</template>

<script>
import { safeID } from '../../helpers/strings'

export default {
  name: 'AccordionItem',
  props: {
    title: {
      type: String,
      required: true
    },
    titlecolour: {
      type: String,
      required: false
    },
    badge: {
      type: [Number, String],
      required: false
    },
    badgecolour: {
      type: String,
      required: false,
      default: 'light'
    },
    lazy: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    createID () {
      return (summary) => {
        return `${safeID(summary)}`
      }
    }
  },
  data() {
    return {
      show: this.lazy ? false : true
    }
  }
}
</script>
