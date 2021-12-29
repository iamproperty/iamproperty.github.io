<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Timeline</h1>
      <p>Represent a linear sequence of events visually.</p>
    </div>
    <div class="container timeline__container visualtest">
      <Timeline :image="require('../../assets/shutterstock_1229155495.webp')">
          <h2>01 Search</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Timeline>
      <Timeline :image="require('../../assets/shutterstock_1229155495.webp')">

        <h2>02 viewing</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Timeline>

      <Timeline :image="require('../../assets/shutterstock_1229155495.webp')">
        <h2>03 buyer information pack</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Timeline>
    </div>
    

    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="language-html">{{htmlUsage}}</code></pre>
    </div>
    
    <div class="container">
      <h2>Vue Header component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Timeline from '@/components/Timeline/Timeline.vue'
import Readme from '@/components/Timeline/README.md'

export default {
  components: {
    Timeline,
    Readme
  },
  data () {
    return {
      htmlUsage: `<div class="container timeline__container visualtest">
  <div class="timeline">
    <div class="timeline__content">
      <h2>01 Search</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <img src="/img/shutterstock_1229155495.f3b0401e.webp" alt="">
  </div>
  <div class="timeline">
    <div class="timeline__content">
      <h2>02 viewing</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <img src="/img/shutterstock_1229155495.f3b0401e.webp" alt="">
  </div>
  <div class="timeline">
    <div class="timeline__content">
      <h2>03 buyer information pack</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <img src="/img/shutterstock_1229155495.f3b0401e.webp" alt="">
  </div>
</div>`
    }
  }
}
</script>