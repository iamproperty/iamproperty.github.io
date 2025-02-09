<template>
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
          <pre><code class="html">{{`<div class="iam-notification bg-danger" role="alert" id="example" data-type="alert" data-status="danger" data-dismiss="">
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
        <a href="/pdfs/alerts.pdf" download>Download latest designs</a>
      </div>
    </div>
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

<script>
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

  export default {
    components: {
      Tabs,
      Readme,
      WebReadme,
      DSHeader,
      NotificationsUsage,
      alertImg,
      Notification,
      alertAnatomy,
      alertAlingment,
      alertDo,
      alertDo2,
      alertDo3,
      alertDo4,
      alertDont,
      alertDont2,
      alertDont3,
    },
    data() {
      return {
        headerImg: headerImg,
        alertImg: alertImg,
        alertAnatomy: alertAnatomy,
        alertAlingment: alertAlingment,
        alertDo: alertDo,
        alertDo2: alertDo2,
        alertDo3: alertDo3,
        alertDo4: alertDo4,
        alertDont: alertDont,
        alertDont2: alertDont2,
        alertDont3: alertDont3,
      };
    },
  };
</script>
