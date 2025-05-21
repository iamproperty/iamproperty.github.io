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

      <!--
      <button data-modal="event" data-hours="2" datetime="2025-05-20T14:00" title="16 July 2025, duaration 2 hours and 30 mins">Conference</button>
-->

      <button data-modal="event" data-hours="1" datetime="2025-05-20T14:00" data-calendar="Calendar 2" style="background: purple;" title="16 July 2025, duaration 2 hours and 30 mins">Conference</button>

      
      <button data-modal="event" data-hours="1" datetime="2025-05-20T15:00" data-calendar="Calendar 2" style="background: purple;" title="16 July 2025, duaration 2 hours and 30 mins">Conference 2</button>

      
      <button data-modal="event" data-hours="1" datetime="2025-05-20T18:00" data-calendar="Calendar 2" style="background: purple;" title="16 July 2025, duaration 2 hours and 30 mins">Conference 2</button>

      
      <dialog id="event"> 
        hello
      </dialog>
      


    </Calendar>
  </main>
</template>
