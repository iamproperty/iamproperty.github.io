<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import PCNav from './components/PCNav.vue';
  import Table from '@/components/Table/TableAjax.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Rankings from '@/components/Rankings/Rankings.vue';

  const quote = ref(0);

onMounted(() =>{

  /*
  const observer = new IntersectionObserver( 
    ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
    {
      threshold: [1],
      rootMargin: '100px'
    }
  );

  console.log(document.querySelector('div.bg-light'));

observer.observe(document.querySelector('div.bg-light'));
*/

const stickyElements = [...document.querySelectorAll("div.summary")];
window.addEventListener("scroll", () => {
  stickyElements.forEach((el) => toggleClassIfStuck(el))
});
window.dispatchEvent(new Event('scroll')); //trigger initially


function toggleClassIfStuck(el){
  const computedStyles = getComputedStyle(el);

    const hasTopPositionSet = computedStyles.top !== 'auto';
    const hasBottomPositionSet = computedStyles.bottom !== 'auto';

    if (hasTopPositionSet || hasBottomPositionSet) {
      el.classList.toggle('is-stuck', isStuck(el, computedStyles, hasBottomPositionSet))
    }

}


function isStuck(el, computedStyles, shouldUseBottomPosition) {
  const offsetParent = el.offsetParent; //the element which this element is relatively sticky to
  const rect = el.getBoundingClientRect();
  const parentRect = offsetParent.getBoundingClientRect();

  if (shouldUseBottomPosition) {
    const elBottom = parseInt(computedStyles.bottom, 10);
    return window.innerHeight - rect.bottom <= elBottom;
  } else {
    const elTop = parseInt(computedStyles.top,10);
    return rect.top <= elTop;
  }
}



});
</script>

<template>
  <nav>
  <PCNav></PCNav>
  </nav>
  <main>
    <h1>Quote: 22 Lynx Road, Tynemouth, Newcastle Upon Tyne NE1 5LS</h1>
      <div  class="admin-panel md-col-end-5">
        <h2 data-v-c2a3d511="" class="bg-light">Ranking component</h2>
        
      </div>
      
    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>

    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>

    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>

    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>

    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>

    <div class="summary">

      <h2 class="md-col-end-6 pb-1">Quote summary: <span>{{ quote }}</span></h2>
      <div class=" md-col-start-7 text-end"><button class="link">Clear quote</button></div>
    </div>

    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>


    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>


    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>


    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>


    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>


    <div class="admin-panel">
      <h2>Your Tasks</h2>


    </div>

    
   
  </main>
</template>

<style>
.summary {
  position: sticky;
  left: 0;
  bottom: -1px;
 padding: 1rem;
  transition: padding 1s;

  background: none!important;
  margin-bottom: 2rem;

}
.summary:after {
  content: "";
  position: absolute;
  background: var(--colour-light);

  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: translate(-50%, 0);
  border: 1px solid black;

  transition: 0.5s;

}
.summary.is-stuck {
  
}
.summary.is-stuck:after {
  opacity: 1;
  width: 100vw;
  box-shadow: 0px -2px 2px 0px rgba(0,0,0,0.25);
}
</style>