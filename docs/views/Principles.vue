<template>
  <main>
    <div class="container">

      <h1>Principles</h1>
      <p class="strapline">Basic concepts and rules to help guide us to making the correct choices.</p>
      <ul>
        <li class="pb-3"><strong class="text-primary d-block">Relative units:</strong> Keeping units relative means they can react and respond to their environment making them more flexibile and durable.</li>
        <li class="pb-3"><strong class="text-primary d-block">Variables and components:</strong> Reduce the amount of repetition and improve maintainability by using varialbes whenever something is used more than once. </li>
        <li class="pb-3"><strong class="text-primary d-block">'Mobile' first:</strong> Design and build with the smallest standard viewport in mind first then introduce complexity to larger viewports.</li>
        <li class="pb-3"><strong class="text-primary d-block">HTML first:</strong> Use standard functionality that comes free with modern web browsers and only use JavaScript to progressively enhance.</li>
        <li class="pb-3"><strong class="text-primary d-block">Accessible for all:</strong> Make sure that we do <strong>not</strong> prevent anybody from getting the most out of our systems and sites.</li>
        <li class="pb-3"><strong class="text-primary d-block">Server friendly:</strong> Limit the number of calls to the serer of your application.</li>
      </ul>

      <h2>How to achieve these principles</h2>
      <ul>
        <li class="pb-3"><strong class="text-primary d-block">Relative units:</strong> Simply just use relative units; percentages for widths, rems or ems for heights and pixels only for stuff like borders. Using sass function and mixins to convert pixel sizes to relative units can save a lot of time.</li>
        <li class="pb-3"><strong class="text-primary d-block">Variables and components:</strong> Using CSS custom properties at both a root and component level.</li>
        <li class="pb-3"><strong class="text-primary d-block">'Mobile' first:</strong> Use a flexbox based grid system that allows you to order and layout content depending upon viewport size.</li>
        <li class="pb-3"><strong class="text-primary d-block">HTML first:</strong> Build without JavaScript and try to get as much functionality working without it. Then introduce JS to improve and enhance the functionality.</li>
        <li class="pb-3"><strong class="text-primary d-block">Accessible for all:</strong> Use tools like <a href="https://wave.webaim.org/" title="WAVE Web Accessibility Evaluation Tool">WAVE</a> and automation testing to evaluate accessibility regularly.</li>
        <li class="pb-3"><strong class="text-primary d-block">Server friendly:</strong> Concatenate files where appropriate, only make ajax calls that would produce new valid information and lazy load assets.</li>
      </ul>



    </div>
  </main>
</template>
