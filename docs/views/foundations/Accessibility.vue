<template>
  <main>
    <div class="container">
      <h1>Accessibility (Beta)</h1>
      <p class="strapline">
        By making your website accessible, you are ensuring that all of your potential users, including people with
        disabilities, have a decent user experience and are able to easily access your information.
      </p>

      <h2>What can we do to improve peoples experience</h2>

      <h3>Colour contrast</h3>
      <p>
        By following the brand guidelines and not using any CSS classes that override colours you will not easily cause
        any colour contrast issues. It is also recommended to not apply any text onto images or overlap text with any
        other elements.
      </p>
      <h3>Hover, focus and active states</h3>
      <p>
        All links and buttons should have these states with two clear styles changes. It is not good enough to just
        change the colour try to include another visual change like an underline appearing or disappearing.
      </p>
      <h3>Use semantic markup</h3>
      <p>
        Try to keep things simple when it comes to using semantic tags and aria roles. Only apply aria roles and
        semantic tags when you have been recommended too or you are sure it will improve accessibility.
      </p>
      <p class="mb-1"><strong>Some quick rules to follow:</strong></p>
      <ul>
        <li>Images need an alt tag even if it is an empty one to show its for presentation only</li>
        <li>
          Headings need to be in order starting with a h1. Visual changes can be made to the headings by using heading
          classes like <strong>.h1</strong> and <strong>.h3</strong>.
        </li>
        <li>
          Don't use anchor tags for buttons only use them if they have a URL even if its just for non-JavaScript
          fallback.
        </li>
        <li>
          The text on a link or a heading should be understandable even when taken out of context. So a 'Click here'
          link should have additional text with it to read something like 'Click here to read article: Article title'.
          This can be done by wrapping parts of the text in a span and giving it a class of
          <strong>.visually-hidden</strong>.
        </li>
      </ul>

      <h3>Keep things simple</h3>
      <p>
        Don't over complicate user journeys or add in flashy functionality when it is not essential to the users
        experience. Reduce the amount of cognitive load to keep the user focused on the desired task. This could mean
        reducing the amount of input fields in a form to just capture what is essential.
      </p>

      <h3>Test, check and ask someone else</h3>
      <p>
        Generally making things accessible is fairly straight forward if the user journey is straight foward. Sometimes
        this can't be and extra functionality is needed to help keep the journey accessible. This is when developers
        tend to make small but cucial mistakes that cause something to be un userable in certain circumstances. When
        using a semantic tag or aria role your not familiar with get some help from someone who might have and make sure
        you are testing the functionality.
      </p>

      <h2>How can we measure our success</h2>

      <p>
        Ideally where possible use real people with real conditions to test new features and user journeys. This is not
        always an option and most of the time we will need to rely on tools. Tools like
        <a href="https://wave.webaim.org/" title="WAVE Web Accessibility Evaluation Tool">WAVE</a>,
        <a href="https://developers.google.com/web/tools/lighthouse" title="Lighthouse chrome devtool">lighthouse</a>
        and automation testing to evaluate accessibility regularly.
      </p>
    </div>
  </main>
</template>
