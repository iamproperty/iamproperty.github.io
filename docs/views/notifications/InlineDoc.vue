<template>
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

    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h2>Web component</h2></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <Readme></Readme>
        </details>
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="html">{{`<div class="iam-notification bg-danger" role="alert" id="example" data-status="danger" data-dismiss="">
  <div class="notification">
    <div class="notification__icon"><i class="fa-solid fa-circle-exclamation" aria-hidden="true" slot="icon"></i></div>
    <div class="notification__inner">
      <div class="notification__text"><strong>Just an example</strong><br> Alert message will display here</div>
      <div class="notification__btns"><a href="/" data-dismiss-button="" slot="btns" class="link">Retry</a></div>
    </div>
    <div class="notification__dismiss"><button data-dismiss-button="">Dismiss</button></div>
  </div>
</div>`}}</code></pre>
        </details>
      </Tabs>
    </div>

    <div class="bg-light version-control">
      <div class="container">
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
        <a href="/pdfs/inline-notifications.pdf" download>Download latest designs</a>
      </div>
    </div>
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

<script>
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

  export default {
    components: {
      Tabs,
      Readme,
      WebReadme,
      DSHeader,
      NotificationsUsage,
      Notification,
      inlineAnatomy,
      inlineNotification,
    },
    data() {
      return {
        headerImg: headerImg,
        inlineAnatomy: inlineAnatomy,
        inlineNotification: inlineNotification,
      };
    },
  };
</script>
