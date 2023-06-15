<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Dialog (popover / modal)</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">The dialog component can be used as an inline popover to reveal content on a button click, or as a traditional modal taking up the whole screen. Use this to hide away secondary information so that it can be viewed when the user requires it.</p>
      <h2>Modal</h2>
      <p>The traditional modal use the bootstrap approach of <kbd>data-modal="[modal_id]"</kbd> on a button to show the targeted dialog with matching id. Supports backdrop click or escape key to hide. Add a div with class <kbd>mh-lg</kbd> to allow scrollable content.</p>
      <button data-modal="modal" class="btn btn-secondary">Open Modal</button>
    </div>
    
    <dialog id="modal" class="mh">
      <h3>Dialog Content (Modal)</h3>
      <div class="mh-lg">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </dialog>

    

    <div class="container">
      <h2>Popover</h2>
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
      <h2>Dialog Content (Modal) - YouTube Video</h2>
      <p>We can add a YouTube video to a modal which would play/load once the modal is opened. Same implementation as the modal above, passing through the YoutubeVideo component as the content of the dialog.</p>
      <button data-modal="youtubewrapper" class="btn btn-secondary">Open YouTube Video Modal</button>
    </div>

    <dialog id="youtubewrapper">
      <YoutubeVideo video="fXyAMkQzDls"></YoutubeVideo>
    </dialog>



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
      htmlUsage: `
      <!-- Modal Version -->
      <button data-modal="modal" class="btn btn-secondary">Open Modal</button>
      
      <dialog id="modal">
        <h3>Dialog Content (Modal)</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </dialog>


      <!-- Popover Version -->
      <div class="dialog__wrapper">
        <button class="btn btn-secondary">Open Popover</button>
        <dialog>
          <h3>Dialog Content (Popover)</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </dialog>
      </div>

      `
    }
  }
}
</script>