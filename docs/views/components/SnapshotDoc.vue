<script setup>
  import Snapshot from '@/components/Snapshot/Snapshot.vue';
  import Readme from '@/components/Snapshot/README.md';

  const items = [
    {
      title: 'Exchanged',
      number: 1,
    },
    {
      title: 'SSTC',
      number: 5,
      link: '#anchor',
    },
    {
      title: 'Green',
      number: 1,
      bg: 'success',
    },
    {
      title: 'Amber',
      number: 1,
      bg: 'warning',
    },
    {
      title: 'Red',
      number: 1,
      bg: 'danger',
    },
    {
      title: 'Opportunities this month',
      number: 1,
      bg: 'info',
    },
    {
      title: 'Completions Achieved MTD',
      number: 1,
      bg: 'info',
    },
  ];

  const htmlUsage = `<div class="container snapshot">
  <div class="row">
    <div class="col">
      <div class="snapshot__item "><span class="h6 snapshot__title">Exchanged</span><span class="stat">1</span></div>
    </div>
    <div class="col">
      <a href="#anchor">View SSTC</a>
      <div class="snapshot__item "><span class="h6 snapshot__title">SSTC</span><span class="stat">5</span></div>
    </div>
    <div class="col">
      <div class="snapshot__item bg-success"><span class="h6 snapshot__title">Green</span><span class="stat">1</span></div>
    </div>
    <div class="col">
      <div class="snapshot__item bg-warning"><span class="h6 snapshot__title">Amber</span><span class="stat">1</span></div>
    </div>
    <div class="col">
      <div class="snapshot__item bg-danger"><span class="h6 snapshot__title">Red</span><span class="stat">1</span></div>
    </div>
    <div class="col">
      <div class="snapshot__item bg-info"><span class="h6 snapshot__title">Opportunities this month</span><span class="stat">1</span></div>
    </div>
    <div class="col">
      <div class="snapshot__item bg-info"><span class="h6 snapshot__title">Completions Achieved MTD</span><span class="stat">1</span></div>
    </div>
  </div>
</div>`;
</script>

<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Snapshot</h1>
      <p>Provides a brief overview of a set of figures.</p>
    </div>
    <Snapshot :items="items" class="visualtest"><h2>Snapshot title</h2></Snapshot>

    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

    <div class="container">
      <h2>Example</h2>
      <a href="/standalone/completions-dashboard" target="_blank">iamsold Completions Dashboard</a>
    </div>

    <div class="container">
      <h2>Vue Accordion component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>
