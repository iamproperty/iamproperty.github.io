<script setup lang="ts">

import { ref } from 'vue';

  import TextEditor from '@/components/TextEditor/TextEditor.vue';
  import TrackEvents from '../TrackEvents.vue';

  const saveEvent = (event): void => {

    console.log(event.detail.content);
    
    localStorage.setItem("textEditor", event.detail.content); // Add id to this
  }


let content = `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`;

if(localStorage.getItem("textEditor"))
  content = localStorage.getItem("textEditor");
  

</script>

<template>
  <TrackEvents
    selector="iam-text-editor"
    :events="['save']"
  ></TrackEvents>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Text editor (Beta)</h1>
      <p></p>
    </div>
    <div class="visualtest container">

      
      <TextEditor v-html="content" @save="saveEvent($event)"></TextEditor>
    </div>


  </main>
</template>
