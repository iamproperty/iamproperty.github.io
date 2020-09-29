<template>
    <div>
        <div v-if="keyfacts && keyfacts.length <= 6">
          <div class="key-fact-group">
            <div class="row">
                <key-fact class="col-lg-2 col-md-4 col-sm-4 col-6"
                    v-for="keyfact in keyfacts"
                    :key="keyfact.statLabel"
                    :statValue="keyfact.statValue"
                    :statLabel="keyfact.statLabel">
                </key-fact>
            </div>
          </div>
        </div>
        <div class="key-fact-group" v-else-if="keyfacts && keyfacts.length > 6">
            <p>Maximum number of key fact items exceeded</p>
        </div>
        <div v-else class="key-fact-group no-keyfacts">
            <p>There are no key fact items to view</p>
        </div>
    </div>
</template>

<script>
import KeyFact from '@/components/KeyFact'
export default {
  components: {
    KeyFact
  },
  data () {
    return {
      positive: false,
      keyfacts: [
        {
          statValue: 0,
          statLabel: 'upcoming views'
        },
        {
          statValue: 7,
          statLabel: 'viewings completed'
        },
        {
          statValue: 0,
          statLabel: 'viewings in past 14 days'
        },
        {
          statValue: 1,
          statLabel: 'total bids'
        },
        {
          statValue: 0,
          statLabel: 'bids in past 14 days'
        },
        {
          statValue: 0,
          statLabel: 'price reductions'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.key-fact-group {
    background-color: $homely-aubergine;
    color:white;
    padding: 10px;
    border-radius:3px;
}

</style>
