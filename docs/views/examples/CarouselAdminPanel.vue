<script lang="ts" setup>

  import Carousel from '@/components/Carousel/Carousel.vue';
  import Card from '@/components/Card/Card.vue';
</script>
<template>
  <main>
    <hr/>
    <div class="admin-panel visualtest mb-5">
      <h2>Carousel in an admin panel</h2>
      <Carousel data-smcols="2" data-mdcols="3">
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
        <div>
          <Card :data-image="cardImg"
            >Financial preparation <span>Here would be the top level description of the task</span></Card
          >
        </div>
      </Carousel>
    </div>
  </main>
</template>