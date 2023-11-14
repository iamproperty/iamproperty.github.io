<template>
  <main>
    <Header title="Design system <span class='text-nowrap'>& framework</span>" image="/code.jpeg">
      <p>The single source of truth which groups all the elements that will allow the iam property team to design, realize and develop great products.</p>
    </Header>
    

    <div class="row row-cols-1 row-cols-md-3">

      <div v-for="item in items">
        <a :href="item.link">
          <Card>
            {{ item.title }}
            <span v-html="item.content"></span>
          </Card>
        </a>
      </div>
    </div>

  </main>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Card from '@/components/Card/Card.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Card
  },
  data () {
    return {
      items: [
        {
          link: '/foundations',
          title: 'Foundations',
          content: `Core variables and principles that are used through out the framework.`
        },
        {
          link: '/components',
          title: 'Components',
          content: `Configurable re-usable parts that build up a page.`
        },
        {
          link: '/templates',
          title: 'Templates',
          content: `Groups of components that can build up a page.`
        }
      ]
    }
  }
}
</script>