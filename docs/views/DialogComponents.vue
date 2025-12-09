<script setup>
  import Table from '@/components/Table/Table.vue';
  import Card from '@/components/Card/Card.vue';
</script>

<template>
  <div class="container pt-5 pb-5">
      <h2>Dialog components</h2>
      <div class="row row-cols-1 row-cols-md-3">
        <div>
          <a href="/dialogs/modal"><Card>Dialog (Modal)</Card></a>
        </div>
        <div>
          <a href="/dialogs/popover"><Card>Dialog (Popover)</Card></a>
        </div>
      </div>
    </div>
</template>
