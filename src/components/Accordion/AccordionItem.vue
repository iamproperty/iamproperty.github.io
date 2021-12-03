<template>

  <details class="accordion-item" :id="createID(title)">
    <summary :class="`${titlecolour?`bg-${titlecolour}`:''}`"><span class="accordion-header accordion-button h4">{{title}}<span v-if="badge" :class="`badge bg-${badgecolour}`">{{badge}}</span></span></summary>
    <div class="accordion-body">
      <slot></slot>
    </div>
  </details>
</template>

<script>
import { safeID } from '../../helpers/strings'

export default {
  name: 'Accordion',
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
      type: String,
      required: false
    },
    badgecolour: {
      type: String,
      required: false,
      default: 'light'
    }
  },
  computed: {
    createID () {
      return (summary) => {
        return `${safeID(summary)}`
      }
    }
  }
}
</script>
