<template>
  <main>
    <Header :image="headerImg">
      <h1>Design system <span class='text-nowrap'>& framework</span></h1>
      <p>The single source of truth which groups all the elements that will allow the iam property team to design, realize and develop great products.</p>
    </Header>
    

    <div class="cols-1 cols-md-3">

      <a v-for="item in items" :href="item.link">
        <Card>
          {{ item.title }}
          <span v-html="item.content"></span>
        </Card>
      </a>
    </div>

  </main>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Card from '@/components/Card/Card.vue'

import headerImg from '../img/homepage-banner.png'


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
      ],
      headerImg: headerImg
    }
  }
}
</script>