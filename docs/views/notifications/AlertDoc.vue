<script setup>
  import Notification from '@/components/Notification/Notification.vue';
  import Readme from '@/components/Notification/README.md';
  import WebReadme from '../../../assets/ts/components/notification/README.md';

  import Tabs from '@/components/Tabs/Tabs.vue';
  import Card from '@/components/Card/Card.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';

  import NotificationsUsage from '../NotificationsUsage.vue';
  import alertImg from '../../img/notifications/alert.png';
  import alertAnatomy from '../../img/notifications/alert-anatomy.png';

  import alertAlingment from '../../img/notifications/alert-alignment.png';

  import alertDo from '../../img/notifications/alert-do.png';
  import alertDo2 from '../../img/notifications/alert-do2.png';
  import alertDo3 from '../../img/notifications/alert-do3.png';
  import alertDo4 from '../../img/notifications/alert-do4.png';

  import alertDont from '../../img/notifications/alert-dont.png';
  import alertDont2 from '../../img/notifications/alert-dont2.png';
  import alertDont3 from '../../img/notifications/alert-dont3.png';

  document.addEventListener('click', function (event) {
    if (event && event.target instanceof HTMLElement && event.target.closest('[href="#reset"]')) {
      let link = event.target.closest('[href="#reset"]');

      if (document.querySelector('#example')) document.querySelector('#example').classList.remove('d-none');
    }
  });

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';
</script>

<template>

  <TrackEvents
    selector="iam-notification"
    :events="['dismiess']"
  ></TrackEvents>

  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Alerts</h1>
    </DSHeader>

    <div class="container pb-5">
      <h2>Introduction</h2>
      <p class="lead">
        Alerts communicate essential information. They’re positioned at the top of the screen to be noticeable and
        require user action to disappear.
      </p>
      <h3>Overview</h3>
      <p>
        Alerts are visually prominent components primarily used to deliver important information or messages to users.
        This could include announcements, alerts, warnings, promotional messages, or calls to action. Banners are often
        used for time-sensitive or critical updates and persist until they are either dismissed or the purpose of the
        message is fulfilled.
      </p>

      <img :src="alertImg" alt="" class="mb-2" />
      <span class="pb-2 d-block">Alert displayed at the top of the page, flush with the menu.</span>
    </div>

    <div class="container">
      <NotificationsUsage></NotificationsUsage>
    </div>

    <div class="container">
      <h4>Anatomy</h4>

      <img :src="alertAnatomy" alt="" class="mb-3" />
      <ol class="mb-4">
        <li>Container</li>
        <li>Icon</li>
        <li>Title</li>
        <li>Text</li>
        <li>Divider</li>
        <li>Tertiary button</li>
        <li>Dismissal button (optional)</li>
      </ol>

      <h4>Dismissal</h4>

      <p>
        Close button: Alerts often include a visible close button (typically an “x” icon) in the corner or somewhere
        within the alert itself. Users can click or tap on the close button to dismiss the alert.
      </p>

      <p>
        User action: Alerts may require users to perform a specific action to dismiss them. This action can be clicking
        on a confirmation button, selecting an option, or completing a task related to the alert’s content.
      </p>

      <p>
        *Alerts will persist in certain cases. If a user dismisses an alert without performing the action it is urging,
        it will return a day later to urge them to complete the action.
      </p>
    </div>

    <div class="container">
      <h4>Status</h4>
      <p>Alerts offer the following message statuses — Informative, success, warning, error.</p>

      <div class="row mb-4">
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo"
            ><strong>Timer set</strong><br />
            Alert message will display here <a href="/components/alert">Cancel</a></Notification
          >
          <span class="d-block mb-4">Informational notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo" data-status="success"
            ><strong>Property added</strong><br />
            Alert message will display here <a href="/components/alert">Undo</a></Notification
          >
          <span class="d-block mb-4">Success notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo" data-status="warning"
            ><strong>Action incomplete</strong><br />
            Alert message will display here <a href="/components/alert">Dismiss</a></Notification
          >
          <span class="d-block mb-4">Warning notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo" data-status="danger"
            ><strong>Transaction failed</strong><br />
            Alert message will display here <a href="/components/alert">Retry</a></Notification
          >
          <span class="d-block mb-4">Error notification</span>
        </div>
      </div>
    </div>

    <div class="container">
      <h4>Alignment</h4>
      <p>Alerts will remain flush with the menu at the top of the screen</p>

      <img :src="alertAlingment" alt="" class="mb-3" />
      <p>Alerts displayed at the top of the page, fixed flush with the menu and will overlay page content.</p>
    </div>

    <div class="container">
      <h4>Behaviours</h4>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
        <div class="col">
          <img :src="alertDo" alt="" class="mb-3" />
          <p>
            <strong class="text-complete d-block">Do</strong> Use one alert that takes the user to a notification centre
            where they can address multiple alerts without being disrupted.
          </p>
        </div>
        <div class="col">
          <img :src="alertDont" alt="" class="mb-3" />
          <p>
            <strong class="text-danger d-block">Don't</strong> Don`t unnecessarily alarm users with multiple non-urgent
            alerts stacked at the top of the screen.
          </p>
        </div>
        <div class="col">
          <img :src="alertDo2" alt="" class="mb-3" />
          <p>
            <strong class="text-complete d-block">Do</strong> Display again if unresolved. If a user dismisses a alert
            without resolving the issue, display it again at the next possible occasion, without overwhelming the user
            (e.g. the next time session).
          </p>
        </div>
        <div class="col">
          <img :src="alertDont2" alt="" class="mb-3" />
          <p>
            <strong class="text-danger d-block">Don't</strong>Don’t let alerts time out. Banners should only disappear
            on user interaction (dismissing or completing a task) or when the information is no longer relevant (e.g.
            updating failed payment details).
          </p>
        </div>

        <div class="col">
          <img :src="alertDo3" alt="" class="mb-3" />
          <p>
            <strong class="text-complete d-block">Do</strong> Be clear and concise with the content and actions in the
            alert.
          </p>
        </div>
        <div class="col">
          <img :src="alertDont3" alt="" class="mb-3" />
          <p><strong class="text-danger d-block">Don't</strong> Don’t use titles that have ambiguous meaning.</p>
        </div>
        <div class="col">
          <img :src="alertDo4" alt="" class="mb-3" />
          <p>
            <strong class="text-complete d-block">Do</strong> Display alerts horizontally or vertically to best use the
            space available on a screen. When vertical, stack content and align to the left
          </p>
        </div>
      </div>
    </div>

    <div class="container pb-0">
      <h2>Component</h2>
    </div>

    <Notification id="example" class="visualtest" data-type="alert" data-status="danger" data-dismiss
      ><strong>Just an example</strong><br />
      Alert message will display here <a href="/" data-dismiss-button>Retry</a></Notification
    >

    <div class="container">
      <a href="#example">Show in correct page position</a>
      <a href="#reset">Reset</a>
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

  #example ~ div a + a {
    display: none;
  }
  #example:not(.d-none):target ~ div a:first-child {
    display: none;
  }
  #example:target ~ div a + a {
    display: inline-block;
  }

  #example.d-none ~ div a:first-child {
    display: none !important;
  }

  #example.d-none ~ div a + a {
    display: inline-block !important;
  }
</style>

