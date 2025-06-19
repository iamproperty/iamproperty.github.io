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

    <Calendar data-view="day" data-time="11:59">

      <!--
      <button data-modal="event" data-hours="2" datetime="2025-05-20T14:00" title="16 July 2025, duaration 2 hours and 30 mins">Conference</button>
-->

      <button id="event1" data-modal="event" data-hours="1" datetime="2025-06-19T10:15" data-start="10:15" data-calendar="Calendar 2" style="background: yellow;" title="16 July 2025, duaration 2 hours and 30 mins">Conference</button>

      
      <button data-modal="event" data-hours="1" datetime="2025-05-20T15:00" data-calendar="Calendar 2" style="background: purple;" title="16 July 2025, duaration 2 hours and 30 mins">Conference 2</button>

      
      <button data-modal="event" data-hours="1" datetime="2025-05-20T18:00" data-calendar="Calendar 2" style="background: purple;" title="16 July 2025, duaration 2 hours and 30 mins">Conference 2</button>

      <button data-modal="event" data-hours="1" datetime="2025-06-12T18:00" style="background: purple;" title="11 June 2025, duaration 2 hours and 30 mins">Conference 2</button>

      <button data-modal="event" data-hours="1" datetime="2025-06-12T10:00" data-calendar="Calendar 2" style="background: purple;" title="11 June 2025, duaration 2 hours and 30 mins">Conference 2</button>

      <button data-modal="event" data-hours="1" datetime="2025-06-12" style="background: pink;" title="11 June 2025, duaration 2 hours and 30 mins">Conference 2</button>

      <button data-modal="event" data-hours="1" datetime="2025-06-17T19:15" data-start="14:00" style="background: purple;" title="11 June 2025, duaration 2 hours and 30 mins"><span>Conference 2Confe rence 2Con ference 2Confer ence 2Conf erence 2Confere nce 2Conference 2Conf erence 2</span></button>

      <button data-modal="event" data-days="5" datetime="2025-06-13" style="background: pink;" data-calendar="Calendar 2" title="11 June 2025, duaration 2 hours and 30 mins">All day</button>

      
      <dialog id="event">
        hello
      </dialog>
      


    </Calendar>
  </main>
</template>
