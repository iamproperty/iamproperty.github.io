<template>
  <main>
    <Header :image="headerImg">
      <h1>Design system <span class='text-nowrap'>& framework</span></h1>
      <p>The single source of truth which groups all the elements that will allow the iam property team to design, realize and develop great products.</p>
    </Header>
    
    <a v-for="(item, index) in items" :href="item.link" :class="`col-span-12 md-col-span-4 md-col-start-${index == 0 ? '1' : 'auto'} mb-4`">
      <Card>
        {{ item.title }}
        <span v-html="item.content"></span>
      </Card>
    </a>
    
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