<template>
  <main>
    <Header title="Design system <span class='text-nowrap'>& framework</span>" image="/code.jpeg">
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
          link: '/components',
          title: 'Components',
          content: `<p>Configurable re-usable parts that build up a page.</p>`
        },
        {
          link: '/templates',
          title: 'Templates',
          content: `<p>Groups of components that can build up a page.</p>`
        }
      ]
    }
  }
}
</script>