<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Toasts</h1>
    </DSHeader>

    <div class="container pb-5">

      <h2>Introduction</h2>
      <p class="lead">Toasts communicate confirmation of an action or a low-priority message. They usually appear at the top of the screen and disappear after a few seconds.</p>
      <h3>Overview</h3>
      <p>Toasts are temporary notifications that appear for a brief period and then disappear automatically. They are designed to be non-persistent and non-blocking, allowing users to continue their tasks without interruption.</p>

      <img :src="toastImg" alt="" class="mb-2" />
      <span class="pb-2 d-block">Toast notification at the top right of the viewport.</span>
    </div>

    <div class="container">
      <NotificationsUsage></NotificationsUsage>
    </div>

    <div class="container">
      <h4>Anatomy</h4>

      <img :src="toastAnatomy" alt="" class="mb-3" />
      <ol class="mb-4">
        <li>Container</li>
        <li>Icon</li>
        <li>Title</li>
        <li>Text</li>
        <li>Divider</li>
        <li>Tertiary button</li>
      </ol>
    </div>

    <div class="container">
      <h4>Status</h4>
      <p>Alerts offer the following message statuses — Informative, success, warning, error.</p>

      <div class="row mb-4">
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo"><strong>Timer set</strong><br/> Alert message will display here <a href="/close">Cancel</a></Notification>
          <span class="d-block mb-4">Informational notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo" data-status="success"><strong>Property added</strong><br/> Alert message will display here <a href="/">Undo</a></Notification>
          <span class="d-block mb-4">Success notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo" data-status="warning"><strong>Action incomplete</strong><br/> Alert message will display here <a href="/">Dismiss</a></Notification>
          <span class="d-block mb-4">Warning notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo" data-status="danger"><strong>Transaction failed</strong><br/> Alert message will display here <a href="/">Retry</a></Notification>
          <span class="d-block mb-4">Error notification</span>
        </div>
      </div>
    </div>
    
    <div class="container">
      <h4>Alignment</h4>
      <p>Toast can slide in from six different positions within the view port with an offset to separate them from the content of the page</p>

      <img :src="toastsAlingment" alt="" class="mb-3" />
      <p>In cases where there is a quick succession of actions and multiple toasts are generated using a queue system, they are stacked and display for as long as their predetermined delay timer counts down. First will fade once the time is up and the rest of the stack will slide up to fill the space it emptied.</p>
      <img :src="toastsAlingment2" alt="" class="mb-3" />
    </div>

    <div class="container">
      <h4>Behaviours</h4>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
        <div class="col">
          <img :src="toastsDo" alt="" class="mb-3" />
          <p><strong class="text-complete d-block">Do</strong> Persist on interaction - when the toast is in a hover or focus state, the delay timer will pause. When the toast is no longer in a hover or focus state, the timer unpauses and starts from where it left off.</p>
        </div>
        <div class="col">
          <img :src="toastsDont" alt="" class="mb-3" />
          <p><strong class="text-danger d-block">Don't</strong> Place a toast over key elements like navigation as this may block user interaction.</p>
        </div>
        <div class="col">
          <img :src="toastsDo2" alt="" class="mb-3" />
          <p><strong class="text-complete d-block">Do</strong> Text labels are short, clear updates on processes that have been performed.  Allow users to amend choices where applicable, display an “Undo” action.</p>
        </div>
        <div class="col">
          <img :src="toastsDont2" alt="" class="mb-3" />
          <p><strong class="text-danger d-block">Don't</strong>Exceed two lines (on desktop, this will double on mobile). Stick within the character limit and keep messages concise and to the point.</p>
        </div>

        <div class="col">
          <img :src="toastsDo3" alt="" class="mb-3" />
          <p><strong class="text-complete d-block">Do</strong> Offset from the edge of the screen. Always have offset (space) from the edge of the screen to the toast.</p>
        </div>
        <div class="col">
          <img :src="toastsDont3" alt="" class="mb-3" />
          <p><strong class="text-danger d-block">Don't</strong> Don’t use toasts for multiple actions. Avoid displaying more than one action in a toast. Having more than one action to choose from can make it difficult for the user to decide to do next.</p>
        </div>
      </div>
    </div>

    <div class="container pb-0">
      <h2>Component</h2>
    </div>

    <div class="notification__holder container" id="example">
      <Notification data-type="toast" data-status="danger"><strong>Just an example</strong><br/> Alert message will display here</Notification>

      <Notification data-type="toast" data-status="danger" data-dismiss><strong>Just an example</strong><br/> Alert message will display here <a href="/" data-dismiss-button>Retry</a></Notification>
    </div>


    <div class="container">
      <a href="#example">Show in correct page position</a>
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
          <pre><code class="html">{{`<div class="iam-notification bg-danger" role="alert" id="example" data-type="toast" data-status="danger" data-dismiss="">
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

<style lang="scss">

#example:not(:target) {
  position: static;
  min-height: 30rem;
  transform: none;
  margin: auto;
  background-color: lightgray;
  margin-bottom: 2rem;
}

#example:target ~ div a{
  display: none;
}
</style>

<script>
import Notification from '@/components/Notification/Notification.vue'
import Readme from '@/components/Notification/README.md'
import WebReadme from '../../../assets/ts/components/notification/README.md'

import Tabs from '@/components/Tabs/Tabs.vue'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'

import NotificationsUsage from '../NotificationsUsage.vue'
import toastImg from '../../img/notifications/toast.png'
import toastAnatomy from '../../img/notifications/toasts-anatomy.png'

import toastsAlingment from '../../img/notifications/toastsAlignment.png'
import toastsAlingment2 from '../../img/notifications/toastsAlignment2.png'

import toastsDo from '../../img/notifications/toasts-do.png'
import toastsDo2 from '../../img/notifications/toasts-do2.png'
import toastsDo3 from '../../img/notifications/toasts-do3.png'

import toastsDont from '../../img/notifications/toasts-dont.png'
import toastsDont2 from '../../img/notifications/toasts-dont2.png'
import toastsDont3 from '../../img/notifications/toasts-dont3.png'

export default {
  components: {
    Tabs,
    Readme,
    WebReadme,
    DSHeader,
    NotificationsUsage,
    toastImg,
    Notification,
    toastAnatomy,
    toastsAlingment,
    toastsAlingment2,
    toastsDo,
    toastsDo2,
    toastsDo3,
    toastsDont,
    toastsDont2,
    toastsDont3,
  },
  data () {
    return {
      headerImg: headerImg,
      toastImg: toastImg,
      toastAnatomy: toastAnatomy,
      toastsAlingment:toastsAlingment,
      toastsAlingment2:toastsAlingment2,
      toastsDo:toastsDo,
      toastsDo2:toastsDo2,
      toastsDo3:toastsDo3,
      toastsDont:toastsDont,
      toastsDont2:toastsDont2,
      toastsDont3:toastsDont3
    }
  }
}
</script>
