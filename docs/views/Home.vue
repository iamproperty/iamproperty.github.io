<template>
  <main>
    <Header title="Design system <span class='text-nowrap'>& framework</span>" :image="require('../assets/code.jpeg')">
      <p>The single source of truth which groups all the elements that will allow the iam property team to design, realize and develop great products.</p>
    </Header>
    <CardDeck :items="items" class="pb-5 pt-5"></CardDeck>
  </main>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import CardDeck from '@/components/CardDeck/CardDeck.vue'

export default {
  name: 'Home',
  components: {
    Header,
    CardDeck
  },
  data () {
    return {
      items: [
        {
          link: '/foundations',
          title: 'Foundations',
          content: `<p>Core variables and principles that are used through out the framework.</p>`
        },
        {
          link: '/elements',
          title: 'Elements',
          content: `<p>Small re-usable parts that are commonly used within components.</p>`
        },
        {
          link: '/components',
          title: 'Components',
          content: `<p>Configurable re-usable parts that build up a page.</p>`
        }
      ]
    }
  }
}
</script>
