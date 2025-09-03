<script setup>
  import components from '../../components.json';
  import * as htmlContent from '../events.js';
  import { onMounted } from 'vue';

  let trackingHTML = '';

  components.forEach((component) => {
    if (htmlContent[component.replace('-', '')]) {
      trackingHTML += `<h3 class="text-capitalize">${component}</h3>`;
      trackingHTML += htmlContent[component.replace('-', '')];
    }
  });

  onMounted(() => {
    const el = document.getElementById('trackingContent');
    el.innerHTML = trackingHTML;
  });
</script>

<template>
  <main>
    <h1>Data layer</h1>

    <p>
      A data layer is a structured repository that stores and manages data about a website or application, acting as a
      bridge between the website and various marketing, analytics, or third-party tools. It allows these tools to access
      consistent, organized information such as user interactions, page details, or transaction data.
    </p>

    <p>
      In web development and digital marketing, a data layer is often implemented as a JavaScript object, commonly named
      dataLayer, which can be pushed with data points to facilitate tracking and personalization without directly
      modifying the website's core code.
    </p>

    <p class="pb-2">Key benefits of a data layer include:</p>

    <ul class="mb-5">
      <li>Centralized data management</li>
      <li>Simplified tracking implementation</li>
      <li>Consistent data across various tools</li>
      <li>Easier maintenance and updates</li>
    </ul>

    <h2>Global tracking</h2>

    <table>
      <thead>
        <tr>
          <th>Event</th>
          <th>Description</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Pageview</th>
          <td>
            This event is automatically pushed to the `window.dataLayer` array during the function's execution,
            representing the initial pageview with the current document title.
          </td>
          <td>
            - event: "Pageview"<br />
            - pageTitle: The title of the current document.
          </td>
        </tr>
        <tr>
          <th>closeDetails</th>
          <td>
            This event is triggered when a click occurs on an element with the attribute `[open] summary`, indicating
            that a summary element with the `[open]` attribute is being closed.
          </td>
          <td>
            - `event`: "closeDetails"<br />
            - `detailsTitle`: The text content of the `summary` element associated with the clicked element. If the
            `summary` element doesn't have any text content, an empty string is used.
          </td>
        </tr>
        <tr>
          <th>openDetails</th>
          <td>
            This event is triggered when a click occurs on a `summary` element (not associated with `[open]` attribute),
            indicating that a summary element is being opened.
          </td>
          <td>
            - `event`: "openDetails"<br />
            - `detailsTitle`: The text content of the clicked `summary` element. If the `summary` element doesn't have
            any text content, an empty string is used.
          </td>
        </tr>
        <tr>
          <th>linkClicked</th>
          <td>This event is triggered when a click occurs on an `a` (anchor) element.</td>
          <td>
            - `event`: "linkClicked"<br />
            - `linkText`: The text content of the clicked `a` element. If the `a` element has a `title` attribute, its
            value is used as `linkText`; otherwise, the text content of the `a` element is used. If the `a` element
            doesn't have any text content, an empty string is used.<br />
            - `class`: The `class` attribute value of the `a` element. If the `a` element doesn't have a `class`
            attribute, an empty string is used.<br />
            - `href`: The value of the `href` attribute of the `a` element. If the `a` element doesn't have an `href`
            attribute, an empty string is used.
          </td>
        </tr>
        <tr>
          <th>buttonClicked</th>
          <td>This event is triggered when a click occurs on a `button` element.</td>
          <td>
            - `event`: "buttonClicked"<br />
            - `buttonText`: The text content of the clicked `button` element. If the `button` element doesn't have any
            text content, an empty string is used.<br />
            - `class`: The `class` attribute value of the `button` element. If the `button` element doesn't have a
            `class` attribute, an empty string is used.
          </td>
        </tr>
        <tr>
          <th>customElementRegistered</th>
          <td>When component is registered (Usually on page load)</td>
          <td>
            - "event": "customElementRegistered"<br />
            - "element": "iam-carousel"
          </td>
        </tr>
        <tr>
          <th>customElementAdded</th>
          <td>When component is added to the page</td>
          <td>
            - "event": "customElementAdded"<br />
            - "element": "iam-carousel"
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Component tracking</h2>

    <div id="trackingContent"></div>
  </main>
</template>
