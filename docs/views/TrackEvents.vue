<script setup>

import Notification from '@/components/Notification/Notification.vue'
import { onMounted, ref } from 'vue';

const $toast = ref();
const toastInterval = ref();

const props = defineProps(['selector','events']);

onMounted(async () => {
  
  Array.from(document.querySelectorAll(props.selector)).forEach((component, index) => {
       
    props.events.forEach((customEvent, index) => {
      component.addEventListener(customEvent, (event) => {

        clearInterval(toastInterval.value);

        $toast.value.$el.classList.remove('d-none');
        let msgElement = $toast.value.$el.querySelector('.msg');
        msgElement.innerHTML = `${event.type} event has been dispatched<br/>${JSON.stringify(event.detail)}`;

        toastInterval.value = setInterval(function(){

          $toast.value.$el.classList.add('d-none');
        }, 5000);
      });
    });
  });
});


</script>

<template>
  <div class="container notification__holder bottom"><Notification data-type="toast" data-dismiss ref="$toast" class="d-none"><strong>Event</strong><br/> <span class="msg"></span></Notification></div>
  
</template>
