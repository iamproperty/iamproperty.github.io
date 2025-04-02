<template>
  <main>
    <h1>Best practice</h1>
    <p>A set of rules that should be easily followed aswell as easily tested.</p>

    <ol class="tick-list">
      <li>Only one <code>h1</code> is used on a page and it should be the first heading on the page.</li>
      <li>Only one <code>.btn-primary</code> is used per form/page.</li>
      <li>Bespoke CSS should use relative units and not pixels</li>
      <li>Buttons and links should never just feature an icon</li>
      <li>
        Links and headings should be understandable out of context for example; 'click me' should be replaced with
        'click me to find out more about auctions'. Sometimes this is acceptable within context so a span with the class
        of <code>.visually-hidden</code> can be used to hide the excess text.
      </li>
    </ol>
  </main>
</template>
