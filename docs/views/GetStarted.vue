<script setup>
  import workflow from '../img/development-workflow.png';
</script>

<template>
  <main>
    <h1>Getting started</h1>
    <h2>Using the component library or assets</h2>
    <h3>Install</h3>

    <pre><code>npm install @iamproperty/components --save</code></pre>

    <h3 class="pt-3">Usage</h3>
    <h4>Static assets</h4>

    <p>
      The assets folder can be used independently from the Vue components so that they can be used with other
      frameworks. With the compiled files available to use out of the box alongside the source files that can be
      configured.
    </p>

    <pre><code>&lt;link href="./node_modules/@iamproperty/components/assets/css/style.min.css" as="style" /&gt;
&lt;script src="./node_modules/@iamproperty/components/assets/js/scripts.bundle.min.js"&gt;&lt;/script&gt;
    </code></pre>

    <h5 class="pt-3">Sass files</h5>

    <pre><code >@import './node_modules/@iamproperty/components/assets/sass/_func.scss';
@import './node_modules/@iamproperty/components/assets/sass/_corefiles_.scss';</code></pre>

    <h5 class="pt-3">JS modules</h5>

    <pre><code>import navbar from @iamproperty/components/assets/js/modules/navbar.js</code></pre>

    <h4>Vue application</h4>

    <pre><code>import '@iamproperty/components/assets/css/core.min.css'
import '@iamproperty/components/dist/style.css'

import * as iamkey from '@iamproperty/components'
for (const [key, value] of Object.entries(iamkey)) {
  Vue.component(key, value)
}
</code></pre>

    <p>Components then can be used as described in the design system documentation.</p>

    <pre><code>&lt;Header title="Page title" image="../../assets/image.jpeg"&gt;&lt;p&gt;Page description&lt;/p&gt;&lt;/Header&gt;</code></pre>

    <h2 class="pt-3">Contributing to iam key</h2>
    <h3>Create code branch</h3>
    <p>
      Firstly the clone the
      <a href="https://github.com/iamproperty/iamproperty.github.io">repo</a> from GitHub and create a new branch from
      the develop branch using the agreed naming convention (FEG-99/feature/task-title).
    </p>

    <h3>Commands</h3>
    <h4>Install node packages</h4>
    <pre><code >npm install --force</code></pre>

    <h4>Development local web server</h4>
    <p>Setup a local web server to run the documentation site this will allow you to modify the code and check it.</p>

    <pre><code>npm run dev</code></pre>

    <p>OR</p>

    <pre><code >npm run watch</code></pre>

    <p>
      The second command will run dev but will also watch for sass and typescript files being changed which would then
      update the CSS and JavaScript files.
    </p>

    <h3>Create Pull request into develop</h3>
    <p>
      You will not have the ability to commit changes directly to the main or develop branches and a pull request will
      have to be created. This pull request should follow the format dictated in the .github/pull_request_template.md
      file. The pull reguest should always be into develop unless you are doing a hotfix in a release branch. At least
      one approver is needed but for more complex bits of work more can be added. The pull request will run the unit
      tests and create a test environment in netlify for the reviewer to help complete the review. Once the pull request
      is closed the netlify development environment will get updated.
    </p>
    <p><a href="https://iamproperty-dev.netlify.app/">https://iamproperty-dev.netlify.app/</a></p>
    <h2>Create release</h2>
    <p>
      The creation of an npm package is done through GitHub actions when a GitHub release is created. Releases can be
      made from any branch but it should come from the master branch.
      <a href="https://www.npmjs.com/package/@iamproperty/components" target="_blank">npm registry package</a>.
    </p>

    <h2>Update the documentation site</h2>
    <p>
      To update the documentation site you need to create a pull request from develop or a release branch into master.
      Once the PR is approved an automatic build and deploy process using GitHub actions will be created.
    </p>

    <p><a href="https://iamproperty.github.io/">https://iamproperty.github.io/</a></p>

    <h2>Workflow</h2>
    <img :src="workflow" alt="" />
  </main>
</template>
