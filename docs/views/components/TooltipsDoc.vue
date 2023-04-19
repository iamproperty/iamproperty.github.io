<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Tooltips</h1>
      <p>The framework supports three ways of creating tooltips firstly is by using an <abbr title="Abbreviation" tabindex="0">abbr tag</abbr>. Abbr tags aren't really recommended and an abbreviation should only be used alongside the full title or as a second instance of use. The second is by using the class <span class="tooltip" title="Tooltip content will go in the title tag" tabindex="0">.tooltip alongside a title</span>. Both of these cases it is recommended to use a tabindex attribute with the value of 0 so that the touch device fallback will work. The prefered and last option is to the class of <span class="tooltip" tabindex="0">.tooltip with a span inside<span class="tooltip__content"> (Hidden tooltip content)</span></span> to hold the tooltip content. This way the content is held on the page and is accessible to screen readers and other assistive technology.</p>

      <p class="note">In all of these instances the content should be kept to the minimal and not need any secondary interaction, i.e. content links or buttons. In cases when you want to hide large bits of text or secondary links collapsible content components or modal components should be used.</p>

    </div>
  </main>
</template>