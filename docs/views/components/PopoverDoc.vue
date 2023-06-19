<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Dialog (Popover)</h1>
    </DSHeader>


    

    <div class="container">
      <p>For inline wrap the button and dialog in a div with class: <kbd>dialog__wrapper</kbd>.</p>
      <div class="dialog__wrapper">
        <button class="btn btn-secondary">Open Popover</button>
        <dialog>
          <h3>Dialog Content (Popover)</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </dialog>
      </div>
    </div>
    


    <div class="container">
      <Tabs>
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="javascript">{{htmlUsage}}</code></pre>
        </details>
      </Tabs>
    </div>

  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import YoutubeVideo from '@/foundations/YoutubeVideo/YoutubeVideo.vue'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'

export default {
  components: {
    YoutubeVideo,
    DSHeader,
    Tabs,
  },
  data () {
    return {
      headerImg: headerImg,
      htmlUsage: `<div class="dialog__wrapper">
  <button class="btn btn-secondary">Open Popover</button>
  <dialog>
    <h3>Dialog Content (Popover)</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  </dialog>
</div>`
    }
  }
}
</script>