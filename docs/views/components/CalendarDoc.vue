<script setup>
  import Calendar from '@/components/Calendar/Calendar.vue';
  
  import TrackEvents from '../TrackEvents.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
</script>

<template>
  <TrackEvents
    selector="iam-calendar"
    :events="['pip-clicked', 'next-clicked', 'prev-clicked', 'slider-changed']"
  ></TrackEvents>

  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Calendar</h1>
    </DSHeader>
    <Calendar>

      
      <button data-modal="event" data-hours="2" datetime="2025-05-16T14:00"><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Conference</button>
      <dialog id="event">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    

      <button data-modal="event2" data-hours="2" datetime="2025-05-16T12:00"><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Phone call</button>
      <dialog id="event2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    


      <button data-modal="event3" data-hours="2" data-days="2" datetime="2025-05-12T12:00"><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Phone call</button>
      <dialog id="event3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    


      

      <button data-modal="event4" data-hours="2" data-days="2" datetime="2025-05-13T12:00"><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Phone call</button>
      <dialog id="event4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    



      <button data-modal="event4" data-hours="2" datetime="2025-05-14T12:00" ><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Phone call</button>
      <dialog id="event4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    



      <button data-modal="event4" data-hours="2" datetime="2025-05-14T12:00"><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Phone call</button>
      <dialog id="event4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    



      <button data-modal="event4" data-hours="2" datetime="2025-05-14T12:00" ><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Phone call</button>
      <dialog id="event4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    



      <button data-modal="event4" data-hours="2" datetime="2025-05-14T12:00" ><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Phone call</button>
      <dialog id="event4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    



      <button data-modal="event4" data-hours="2" datetime="2025-05-14T12:00" ><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Phone call</button>
      <dialog id="event4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    


      <button data-modal="event4" data-hours="2" datetime="2025-05-14T02:00" ><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Phone call</button>
      <dialog id="event4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    


      <button data-modal="event4" data-hours="2" datetime="2025-05-14T13:00" ><time data-duration="2h" title="16 July 2025, duaration 2 hours and 30 mins">16 May</time> Phone call</button>
      <dialog id="event4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    


      <button data-modal="event4"  datetime="2025-05-14"><time title="16 July 2025, duaration 2 hours and 30 mins">All day</time> Phone call</button>
      <dialog id="event4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dialog>
    


      <button data-days="4" datetime="2025-05-04"><time title="16 July 2025, duaration 2 hours and 30 mins">All day</time> Phone call</button>
      
      


    </Calendar>
  </main>
</template>
