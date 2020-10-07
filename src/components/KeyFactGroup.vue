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
import KeyFact from '@/components/KeyFact'
import { fetchStats } from '~/api'

export default {
  components: {
    KeyFact
  },
  data () {
    return {
      keyfacts: {}
    }
  },
  created () {
    this.keyfacts = fetchStats()
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
