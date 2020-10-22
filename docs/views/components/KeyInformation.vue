<template>
  <section class="mb-4">
    <h3>Key Information</h3>
    <hr />
    <div class="paragraph-wrap">
      <p>
        Group key information as key/value in responsive columns
      </p>
    </div>
    <h3>Key Information Example</h3>
      <key-information :items="items"></key-information>
  </section>
</template>
<script>
import KeyInformation from '@/components/KeyInformation/KeyInformation.vue'
export default {
  components: {
    KeyInformation
  },
  data () {
    return {
      items: {
        'Full Name': 'Mr Richard Branson',
        'Legal Capacity': 'Legal Owner',
        'Mobile Number': '07411882800',
        'Full Address': 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
        'Website Link': '<a href="https://www.branson-towers.co.uk" target="_blank">Branson Towers</a>'
      }
    }
  }
}
</script>
