<script setup>
  import TrackEvents from '../TrackEvents.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Tag from '@/components/Tag/Tag.vue';

</script>

<template>
  <TrackEvents selector="iam-rank" :events="['update-show']"></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Tag component (Beta)</h1>
    </DSHeader>

    <p>
      Character or word counters should be used if there is a character or word limit. They display the ratio of
      characters used and the total character limit.
    </p>
    <div class="visualtest">
      
      <Tag data-url="/users.json">
        <label class="tag checked"><input type="radio" name="tags" value="Amanda Knight" checked>Amanda Knight</label>
        <label class="tag"><input type="radio" name="tags" value="James Lambert">James Lambert</label>
        <label class="tag"><input type="radio" name="tags" value="Bob Harry">Bob Harry</label>
      </Tag>
      <Tag data-url="/users.json">
        <label class="tag checked"><input type="radio" name="tags2" value="Amanda Knight" checked readonly>Amanda Knight</label>
      </Tag>

    </div>

  </main>
</template>
