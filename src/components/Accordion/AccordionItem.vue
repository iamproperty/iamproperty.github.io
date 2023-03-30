<template>

  <details :id="createID(title)">
    <summary :class="`${titlecolour?`bg-${titlecolour}`:''}`">{{title}}<span v-if="badge" :class="`badge bg-${badgecolour}`">{{badge}}</span></summary>
    <slot></slot>
  </details>
</template>

<script>
import { safeID } from '../../helpers/strings.js'

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
