<template>
  <div>
    <Nav></Nav>

    <main class="text-primary">

      <Heading></Heading>

      <div class="client-wrapper">
        <div class="container bg-info gradient-secondary client-wrapper__inner">
          <h2 class="h4">Your list</h2>

          <div class="col-sm-10 col-md-12">
            <CardDeck class="p-0 mb-0" :items="items" btntype="primary" cardtype="small" titleclass="h5" :smcols="2" :mdcols="4"></CardDeck>

          </div>
        </div>
        <Footer></Footer>
      </div>






    </main>


  </div>
</template>

<style lang="scss">
@import "./clientDashboard.scss";
</style>

<script>
import Nav from './_nav.vue'
import Footer from './_footer.vue'
import Heading from './_heading.vue'
import CardDeck from '@/components/CardDeck/CardDeck.vue'
import Icon from '@/foundations/Icon/Icon.vue'

export default {
  components: {
    Nav,
    Footer,
    Heading,
    CardDeck,
    Icon
  },
  data () {
    return {
      items: [
        {
          cardClass: 'card--danger',
          link: '/standalone/client-risk',
          title: 'Risk assessment and ID checks',
          ctatext: 'Start',
          content: ''
        },
        {
          cardClass: 'card--danger',
          link: '/standalone/client-legal',
          title: 'Legal preparation',
          ctatext: 'Start',
          content: ''
        },
        {
          cardClass: 'card--danger',
          link: 'https://bbc.co.uk',
          title: 'Property information',
          ctatext: 'Start',
          content: '',
          target: '_blank'
        },
        {
          cardClass: 'card--warning',
          link: '/standalone/client-method',
          title: 'Method of sale audit',
          ctatext: 'Continue',
          content: ''
        },
        {
          cardClass: 'card--success',
          link: '/ff',
          title: 'Title register',
          ctatext: 'View',
          content: '',
          btntype: "secondary"
        }

      ]
    }
  }
}
</script>
