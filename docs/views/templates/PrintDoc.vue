<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/templates">Templates</a></li>
      </ul>
      <h1>Print styles</h1>
      <p class="strapline">Making pages printable gives the user another way of reading the page.</p>

      <p>Allowing the user to print off the page there on will give the user the ability to take the content away to consume the content later. Having presetable printable pages gives us the ability to generate reports and documents that can be printed or saved as a pdf.</p>
      <p>Media queries have been setup in a way so that the default print styles become similiar to the mobile default styles. The use of print utility classes to hide and show elements will help show only relevant content.</p>

      <div class="row"><div class="col-md-8"><pre><code class="language-css">.d-print-block { display: block!important; }</code></pre></div></div>

      <p>Other small tweaks have been made to the default print rules to help tidy up the pages.</p>
      <a href="/standalone/print" target="_blank" class="btn btn-secondary">Print example page</a>

    </div>


    <div class="container">

      <h2>Create print only pages</h2>
      <p>Print only pages can be used for documents and reports, these pages should be optimised to only show whats relevant to the print out. Headers and footers for example could be omitted. A small script tag can be included also to trigger the print window to display on page load.</p>

      <div class="row mb-3"><div class="col-md-8"><pre><code>&lt;script>{{htmlUsage}}&lt;/script></code></pre></div></div>

    </div>

    <div class="container">

      <h2>Single page template</h2>
      <p>Some extra CSS can be included (see below) to add a gradient border to a page, this only really works when applied to a single page. On more than one page the border gradient is too stretched and the text doesn't have enough padding at the top and bottom of the page.</p>

      <p class="note"><strong>Note:</strong> The single page print layout results will vary between browsers and works best when printed via Chrome.</p>

      <div class="row mb-4"><div class="col-md-8"><pre><code>{{htmlSingle}}</code></pre></div></div>

      <a href="/standalone/print-single" target="_blank" class="btn btn-secondary">Single page print template</a>

    </div>
  </main>
</template>

<script>
import YoutubeVideo from '@/foundations/YoutubeVideo/YoutubeVideo.vue'
import Readme from '@/foundations/YoutubeVideo/README.md'

export default {
  components: {
    YoutubeVideo,
    Readme
  },
  data () {
    return {
      htmlUsage: `// Open up any hidden content
Array.from(document.querySelectorAll('details')).forEach((arrayElement, index) => { arrayElement.setAttribute("open", "open")});
// Open the print preview window
document.body.onload = function() { window.print(); };`,
      htmlSingle: `@media print {

  @page {
    margin: 0;
  }

  html {
    padding: 1cm;
    background-color: var(--colour-secondary);
    --gradient-direction: 45deg;
    background-image: linear-gradient(var(--gradient-direction), var(--colour-primary) 0, transparent 100%) !important;
    background-size: 100vw 100vh;
    background-repeat: repeat;

    body {

      padding: 32px;
      min-height: 100%;
      height: auto;
    }
  }
}`
    }
  }
}
</script>
