<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Lists</h1>
      <p>Our lists have been kept very basic using default styles.</p>
    </div>
    <div class="container visualtest">
      <h2>Unordered lists</h2>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ul>
    </div>
    <div class="container visualtest">
      <h2>Ordered lists</h2>
      <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ol>
    </div>
    <div class="container visualtest">
      <h2>Tick lists</h2>
      <ul class="tick-list">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li class="tick--danger">List item with a class of tick--danger</li>
        <li class="tick--warning">List item with a class of tick--warning</li>
        <li class="tick--incomplete">List item with a class of tick--incomplete</li>
      </ul>
    </div>
    <div class="container visualtest">
      <h2>Breadcrumb</h2>
      <ol class="breadcrumb">
        <li><a href="/home">Home</a></li>
        <li><a href="/section">Section</a></li>
        <li><a href="/sub-section">Sub Section</a></li>
      </ol>
    </div>

    <div class="container visualtest">
      <h2>Step list</h2>
      <ol class="list--steps" data-mobile-text="Client details">
        <li class="step--complete">Property details</li>
        <li class="step--current">Client details</li>
        <li>Onboarding route</li>
      </ol>
    </div>
  </main>
</template>
