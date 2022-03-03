<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-md-none">
        <li><a href="/foundations">Templates</a></li>
      </ul>
      <h1>Error pages</h1>
      <p></p>

      <h2>Standalone error pages</h2>

      <p>The standalone error pages developed locally as static html pages within the public folder but can be served using the npm run dev command. The CSS is generated using the iamkey Sass files but are further processed with Post CSS. PostCSS is used to purge un-used CSS from the final file. It's worth noting that each template will have its own CSS file as the purging of un-used CSS relies upon reviewing the HTML template.</p>
      
      <p>The logo's are added to the page using an inline SVG with all logo's present. So to change the logo on the template its just a matter of updating the SVG tag to grab the right symbol and update the size. Un-used symbols can be removed from the file if the file size needs to be reduced for any reason.</p>

      <h3>Templates</h3>
      <ul>
        <li><a href="/error/index.html" target="_blank">Standalone Server error page</a></li>
        <li><a href="/error/404.html" target="_blank">Standalone 404 page</a></li>
        <li><a href="/error/maintenance.html" target="_blank">Standalone under maintenance page</a></li>
      </ul>
      <p class="note"><strong>Note:</strong> The above templates are placeholders until a suitable design has been agreeed.</p>
      
      <h2>Inline error pages</h2>

      <p>The inline error pages should really consist of the current sites main navigation, a title like 'Page not found', some explanatory text and maybe a call to action.</p>
      <a href="/broken-link" target="_blank" class="btn btn-tertiary">404 page example</a>
      
    </div>
  </main>
</template>
