<script setup>
  import Integration from '../Integration.vue';
</script>
<template>

  <Integration component="nav" componentName="iam-nav">

    <template #web-component>

      <pre><code>{{`<nav>
<iam-nav>
<a href="/" class="brand brand--property" slot="logo">
  <svg>
    <title>iamproperty</title>
    <use xlink:href="/svg/logo.svg#logo-property"></use>
  </svg>
</a>

<a href="/" class="selected">Lorem ipsum</a>
<a href="/">Lorem ipsum</a>
<a href="/">Lorem ipsum</a>
<a href="/">Lorem ipsum</a>

<button class="btn btn-primary">Lorem ipsum</button>
</iam-nav>
</nav>`}}</code></pre>
    </template>
    <template #vue-component>
      <pre><code>{{`<script setup>import Nav from '@/components/nav/nav.vue</script>

<Nav>
<a href="/" class="brand brand--property" slot="logo">
  <svg>
    <title>iamproperty</title>
    <use xlink:href="/svg/logo.svg#logo-property"></use>
  </svg>
</a>

<a href="/" class="selected">Lorem ipsum</a>
<a href="/">Lorem ipsum</a>
<a href="/">Lorem ipsum</a>
<a href="/">Lorem ipsum</a>

<button class="btn btn-primary">Lorem ipsum</button>
</Nav>
`}}</code></pre>
    </template>

    <template #attr>
      <table>
        <thead>
          <tr>
            <th>Attributes</th>
            <th>Default</th>
            <th>Options/Type</th>
            <th>Required</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>data-search-open</th>
            <td></td>
            <td>String</td>
            <td>No</td>
            <td>Flag that opens the search bar on desktop on page load.</td>
          </tr>
        </tbody>
      </table>
    </template>

    <template #slots>
      <table>
        <thead>
          <tr><th>Option</th><th>Default Value</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>default</td><td>-</td><td>Populates the main nav area</td></tr>
          <tr><td>logo</td><td>-</td><td>A place to add the logo to the site</td></tr>
          <tr><td>secondary</td><td>-</td><td>Moves the link upto the top of the navbar on desktop</td></tr>
          <tr><td>actions</td><td>-</td><td>A place to add buttons</td></tr>
          <tr><td>dual</td><td>-</td><td>Plave the link or list to the right of the nav, forcing the default slot to the left.</td></tr>
          <tr><td>search</td><td>-</td><td>A place to include a form with search functionality</td></tr>
        </tbody>
      </table>
    </template>
    <template #classes>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>.bg-primary</th>
            <td>will change the background of the navbar without chaning the menu background.</td>
          </tr>
          <tr>
            <th>.nav-sticky</th>
            <td>will add etxra styling to make the navbar stick to the top of the page</td>
          </tr>
          <tr>
            <th>.nav-xs-sticky</th>
            <td>will add etxra styling to make the navbar stick to the top of the page BUT only on the mobile view.</td>
          </tr>
        </tbody>
      </table>
    </template>

  </Integration>

</template>
