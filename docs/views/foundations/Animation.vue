<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-md-none">
        <li><a href="/foundations">Foundations</a></li>
      </ul>
      <h1>Animation (Beta)</h1>
      <p class="strapline">Animations come in many shapes and forms.</p>
      <p>They can be as subtle as a slight motion of a button, or they can appear as spectacular as a fully animated background. Animation can be set up as interactive reactions to your visitors’ behavior (like objects being revealed when scrolling), or can be independent of visitors’ actions altogether.</p>
      <p class="mb-3"><strong>Key principles:</strong></p>
      <ul>
        <li>Foreground animations should only be triggered after user input like clicking or scrolling the page.</li>
        <li>Backround animations should not take focus away from the foreground or degrade its readability/usability.</li>
        <li>Loading animations should only be triggered once, if they are scroll based they should only be triggered when scrolling down and not up. </li>
        <li>Non-JavaScript solutions need to be considered to prevent content being hidden when an error occurs or JavaScript is disabled.</li>
        <li>Animations should be disabled or reduced significantly when a user has set reduced motion options.</li>
      </ul>


    </div>
  </main>
</template>
