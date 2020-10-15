<template>
    <div>
        <div>
            <div class="key-fact-group">
                <div class="row">
                    <key-fact
                            v-for="keyfact in keyfacts"
                            :key="keyfact.id"
                            :keyfact="keyfact">
                    </key-fact>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import KeyFact from '@/components/KeyFacts/KeyFact.vue'

export default {
  name: 'KeyFactGroup',
  props: {
    keyfacts: {
      type: Array,
      required: true
    }
  },
  components: {
    KeyFact
  }
}
</script>

<style lang="scss" scoped>

    .key-fact-group {
        background-color: #46003C;
        color:white;
        padding: 10px;
        border-radius:3px;
    }

</style>
