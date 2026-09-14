<script setup>
  import Skeleton from '@/components/Skeleton/Skeleton.vue';
  import Bone from '@/components/Skeleton/Bone.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Integration from '../Integration.vue';
  import TrackEvents from '../TrackEvents.vue';
</script>

<template>
  <TrackEvents selector="iam-accordion" :events="['accordion-item-closed', 'accordion-item-opened']"></TrackEvents>

  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Skeleton (Beta)</h1>
    </DSHeader>

    <h2>Cards</h2>
    <Skeleton>
      <Bone class="card"></Bone>
      <Bone class="card"></Bone>
      <Bone class="card"></Bone>
    </Skeleton>

    <h2 class="pt-5">Search</h2>
    <Skeleton>
      <Bone class="search"></Bone>
    </Skeleton>

    <h2 class="pt-5">Mixed (with badge)</h2>
    <Skeleton>
      <Bone class="w-25 me-auto"></Bone>
      <Bone class="badge"></Bone>
    </Skeleton>

    <h2 class="pt-5">Tags</h2>
    <Skeleton>
      <Bone class="tag"></Bone>
      <Bone class="tag"></Bone>
      <Bone class="tag"></Bone>
      <Bone class="tag"></Bone>
    </Skeleton>

    <h2 class="pt-5">Buttons</h2>
    <Skeleton>
      <Bone class="btn"></Bone>
      <Bone class="btn d-none d-md-block"></Bone>
    </Skeleton>

    <h2 class="pt-5">Link</h2>
    <Skeleton>
      <Bone class="link"></Bone>
    </Skeleton>

    <h2 class="pt-5">Spinner</h2>
    <Skeleton>
      <Bone class="spinner"></Bone>
      <Bone></Bone>
    </Skeleton>

    <h2 class="pt-5">Paragraph</h2>
    <Skeleton>
      <Bone class="h1 w-75"></Bone>
      <Bone></Bone>
      <Bone></Bone>
      <Bone></Bone>
      <Bone class="w-75"></Bone>
    </Skeleton>

    <Integration component="skeleton" componentName="iam-skeleton"> </Integration>
  </main>
</template>
