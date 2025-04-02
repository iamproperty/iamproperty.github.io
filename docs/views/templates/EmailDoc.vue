<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-md-none">
        <li><a href="/foundations">Templates</a></li>
      </ul>
      <h1>Email</h1>
      <p>
        The email templates are developed locally as static html pages within the public folder but can be served using
        the <code>npm run dev</code> command. The CSS is generated using the iamkey Sass files but are further processed
        with Post CSS. PostCSS is used to replace CSS variables with the values and then un-used CSS is purged from the
        final file. It's worth noting that each template will have its own CSS file as the purging of un-used CSS relies
        upon reviewing the HTML template.
      </p>

      <h2>Best practices</h2>
      <p>
        Unfortunately email platforms do not provide the same level of support as modern web browsers which means
        certain features of CSS and HTML are not supported.
        <a href="https://www.caniemail.com/" target="_blank">Can I email</a> is a good source for more information on
        what is and isn't supported.
      </p>

      <h3>Tables for layouts</h3>
      <p>
        Due to limited support for the usual tools to layout a web page the use of tables to layout the email becomes a
        necessity.
      </p>

      <h3>Images</h3>
      <p>
        Again modern practices like using CSS or SVG's for presentation have limited support. It is much more reliable
        to fallback to using images with compressed jpegs of gifs being the preferred format.
      </p>

      <h2>Templates</h2>
      <ul>
        <li><a href="/email/index.html" target="_blank">Basic email template</a></li>
        <li><a href="/email/marketing.html" target="_blank">Marketing email template</a></li>
      </ul>
      <p class="note">
        <strong>Note:</strong> The above templates are placeholders until a suitable design has been agreeed.
      </p>
    </div>
  </main>
</template>
