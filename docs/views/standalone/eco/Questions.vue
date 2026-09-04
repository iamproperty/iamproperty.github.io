<script setup>
  import { ref, onMounted, watch } from 'vue';
  import Search from '@/components/Search/Search.vue';


const props = defineProps({
  question: String,
});

  const question = ref(props.question);

  watch(() => props.question, (newQuestion) => {
    question.value = newQuestion;
  });

</script>
<template>
  <div class="insights-panel bg-primary">

    <div class="text-center">

      <div class="brand brand--key p-4">
        <svg><title>iam key</title><use xlink:href="/svg/logo.svg#logo-key"></use></svg>
      </div>
      <p class="strapline pb-3">iamproperty AI helps you uncover actionable insights to win more instructions, retain customers, improve performance, and grow their business — turning everyday data into smarter decisions.</p>

      <Search class="search--stylised mb-4" @option-selected="(event) => {$router.push({ path: '/standalone/hub-question', query: { question: event.detail.value } }) }">
        <input id="question" type="text" name="question" autocomplete="off" aria-autocomplete="none" list="questions" placeholder="Show me..." :value="question" />
        <datalist id="questions" slot="datalist">
          <option>Show me stock currently on market most likely to switch</option>
          <option>Show me predicted movers not yet on the market</option>
          <option>Show me Market Appraisals carried out, but not yet on market</option>

          <option>Show me properties that could be suitable for auction</option>
          <option>Show me current vendor conveyancing opportunities still to convert</option>
          <option>Show me properties that could be suitable for Sale Ready based on client circumstances</option>
          <option>Show me properties likely to complete within the next 28 days</option>
        </datalist>
      </Search>

    </div>

  </div>
</template>
<style scoped>

.insights-panel {
  background: var(--colour-info);
  border-radius: 1rem;
  outline: 1px solid white;
  box-shadow: 0px 0px 10px 2px var(--colour-info);
  min-height: 10rem;
  margin-bottom: -5rem;
}

.search--stylised {
  max-width: 40rem;
  margin: 0 auto;
}

</style>
