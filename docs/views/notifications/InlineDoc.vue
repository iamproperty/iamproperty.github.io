<script setup>
  import Notification from '@/components/Notification/Notification.vue';
  import Readme from '@/components/Notification/README.md';
  import WebReadme from '../../../assets/ts/components/notification/README.md';

  import Tabs from '@/components/Tabs/Tabs.vue';
  import Card from '@/components/Card/Card.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import NotificationsUsage from '../NotificationsUsage.vue';
  import inlineAnatomy from '../../img/notifications/inlineAnatomy.png';

  import inlineNotification from '../../img/dialogs/inline-notification.png';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';
</script>
<template>
  <TrackEvents selector="iam-notification" :events="['dismiess']"></TrackEvents>

  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Inline notifications</h1>
    </DSHeader>

    <div class="container pb-5">
      <h2>Introduction</h2>
      <p class="lead">
        Inline notifications communicate contextual information. They’re positioned inline within the content flow,
        close to the element they’re adding context to.
      </p>
      <h3>Overview</h3>
      <p>
        Inline notifications are used to notify a user of the status of an action during a task flow. They usually
        appear at the top of the primary content area or at the bottom of forms.
      </p>
      <p>
        Inline notifications are non-disruptive, designed to be visually noticeable but not intrusive, allowing users to
        continue their tasks without interruption. These notifications are often used in conjunction with field-level
        messages for errors in forms or other input areas.
      </p>

      <img :src="inlineNotification" alt="" class="mb-2" />
      <span class="pb-2 d-block">Inline error notification at the bottom of a form.</span>
    </div>

    <div class="container">
      <NotificationsUsage></NotificationsUsage>
    </div>

    <div class="container">
      <h4>Anatomy</h4>

      <img :src="inlineAnatomy" alt="" class="mb-3" />
      <ol class="mb-4">
        <li>Container</li>
        <li>Icon</li>
        <li>Body: contains the content, could include text, links, icons, etc.</li>
        <li>Close button (optional)</li>
      </ol>

      <h4>Dismissal</h4>

      <p>
        Inline notifications do not dismiss automatically. They persist on the page until the user dismisses them or
        takes action that resolves the notification.
      </p>

      <p>
        A small “x” in the top right corner is used to dismiss inline notifications. Including the close button is
        optional and should not be included if it is critical for a user to read or interact with the notification.
      </p>
    </div>

    <div class="container pb-0">
      <h4>Status</h4>
      <p>Inline notifications offer the following message statuses — Informative, success, warning, error.</p>
    </div>
    <div class="container pt-0 visualtest">
      <div class="row mb-4">
        <div class="col-sm-6 pe-5">
          <Notification data-dismiss=""
            ><strong>Timer set</strong><br />
            Alert message will display here</Notification
          >
          <span class="d-block mb-4">Informational notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-status="success" data-dismiss=""
            ><strong>Property added</strong><br />
            Alert message will display here</Notification
          >
          <span class="d-block mb-4">Success notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-status="warning" data-dismiss=""
            ><strong>Action incomplete</strong><br />
            Alert message will display here</Notification
          >
          <span class="d-block mb-4">Warning notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-status="danger" data-dismiss=""
            ><strong>Transaction failed</strong><br />
            Alert message will display here</Notification
          >
          <span class="d-block mb-4">Error notification</span>
        </div>
      </div>
    </div>

    <Integration component="carousel" componentName="iam-carousel">
      <template #web-component>
        <pre><code>{{`<!-- Inline -->
<iam-notification data-status="danger" data-dismiss="">
<strong>Just an example</strong><br> Alert message will display here <a href="/" data-dismiss-button="" slot="btns" class="link">Retry</a>
</iam-notification>

<!-- Alert -->
<iam-notification data-type="alert" data-status="danger" data-dismiss="">
<strong>Just an example</strong><br> Alert message will display here <a href="/" data-dismiss-button="" slot="btns" class="link">Retry</a>
</iam-notification>

<!-- Toast -->
<iam-notification data-type="toast" data-status="danger" data-dismiss="">
<strong>Just an example</strong><br> Alert message will display here <a href="/" data-dismiss-button="" slot="btns" class="link">Retry</a>
</iam-notification>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Carousel from '@/components/Notification/Notification.vue</script>
        
<!-- Inline -->
<Notification data-status="danger" data-dismiss="">
<strong>Just an example</strong><br> Alert message will display here <a href="/" data-dismiss-button="" slot="btns" class="link">Retry</a>
</Notification>

<!-- Alert -->
<Notification data-type="alert" data-status="danger" data-dismiss="">
<strong>Just an example</strong><br> Alert message will display here <a href="/" data-dismiss-button="" slot="btns" class="link">Retry</a>
</Notification>

<!-- Toast -->
<Notification data-type="toast" data-status="danger" data-dismiss="">
<strong>Just an example</strong><br> Alert message will display here <a href="/" data-dismiss-button="" slot="btns" class="link">Retry</a>
</Notification>
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
              <th>data-dismiss</th>
              <td></td>
              <td>Flag</td>
              <td>no</td>
              <td>This attribute adds a dismiss button</td>
            </tr>
            <tr>
              <th>data-status</th>
              <td></td>
              <td>String {warning, success, danger}</td>
              <td>No</td>
              <td>Controls the colour and style of the notification</td>
            </tr>
            <tr>
              <th>data-type</th>
              <td></td>
              <td>String {alert,}</td>
              <td>No</td>
              <td>Controls the behaviour of the notification</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #parts>
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>dismiss-btn</th>
              <td>Button to close the notification</td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration>

    <Versions pdf="/pdfs/inline-notifications.pdf">
      <table>
        <thead>
          <tr>
            <th>Version Control</th>
            <th>Date</th>
            <th>Notable updates</th>
          </tr>
        </thead>
        <tbody class="text-body">
          <tr>
            <td>V1 added</td>
            <td>03.07.2023</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>

<style>
  #example:not(:target) {
    position: static;
    margin-bottom: 3rem;
  }

  #example:target ~ div a {
    display: none;
  }
</style>
