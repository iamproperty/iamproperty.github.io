<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Modal</h1>
      <p>Hide away secondary information so that it can be viewed upon request.</p>
      <button data-modal="modal" class="btn btn-secondary">Open modal</button>
    </div>
    
    <dialog id="modal">
      <h2>Modal content</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      
      <form><button class="btn btn-secondary mb-0" formmethod="dialog">Close</button></form>
    </dialog>
    

    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h2>YouTube video Modal</h2>
      <p>We can add a YouTube video to a modal which would play/load once the modal is opened.</p>
      <button data-modal="youtubewrapper" class="btn btn-secondary">Open YouTube video modal</button>
    </div>
    

    <dialog id="youtubewrapper" class="p-0">
      <YoutubeVideo video="fXyAMkQzDls"></YoutubeVideo>
    </dialog>
    

    <div class="container" id="return">
      <h2>HTML code examples</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h2>Vue Modal component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import YoutubeVideo from '@/foundations/YoutubeVideo/YoutubeVideo.vue'
import Modal from '@/components/Modal/Modal.vue'
import Readme from '@/components/Modal/README.md'

export default {
  components: {
    Modal,
    YoutubeVideo,
    Readme
  },
  data () {
    return {
      htmlUsage: `<div class="modal" :d="id">
  <a :href="#close"><span class="visually-hidden">Close</span></a>
  <div class="modal__outer">
    <a :href="#close" class="btn btn-tertiary py-1 px-2"><span class="visually-hidden">Close</span>✕</a>
    <div class="modal__inner">
      <!-- content -->
    </div>
  </div>
</div>`
    }
  }
}
</script>