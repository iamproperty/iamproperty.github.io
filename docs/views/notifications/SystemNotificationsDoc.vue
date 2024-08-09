<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>System notifications</h1>
    </DSHeader>

    <div class="container pb-5 mb-4">
      <h2>Introduction</h2>
      <p class="lead">Types of dialogs and notifications that are used in the iamproperty design system. An exploration on how to make a distinction between these types, and how to pick a certain type to deliver the right message to our product users.</p>
      <h3>Definition of urgency</h3>
      <p>Consideration of urgency is crucial when delivering messages and notifications to customers. Three levels of urgency commonly used are high, medium, and low. Each message should be carefully evaluated to ensure its level of urgency is conveyed to the customer effectively. </p>
      
      <div class="row">
        <div class="col-sm-4">
          <h4>HIGH URGENCY</h4>
          <p>Messages with high urgency require immediate action for full product functionality.</p>
        </div>
        <div class="col-sm-4 order-sm-2">
          <img :src="modalTransactional" alt="" class="mb-2" />
          <span class="pb-2 m-auto d-block text-center">Modals</span>
        </div>
        <div class="col-sm-4">
          <h4>MEDIUM URGENCY</h4>
          <p>Medium urgency messages inform customers about beneficial features and opportunities.</p>
        </div>
        <div class="col-sm-4 order-sm-2">
          <img :src="alert" alt="" class="mb-2" />
          <span class="pb-2 m-auto d-block text-center">Alert/Inline Notification</span>
        </div>
        <div class="col-sm-4">
          <h4>LOW URGENCY</h4>
          <p>Low urgency messages include status changes (e.g., “Email verified”) and action responses (e.g.“Link copied”), and provide general information about the product’s services and functionality.</p>
        </div>
        <div class="col-sm-4 order-sm-2">
          <img :src="toast" alt="" class="mb-2" />
          <span class="pb-2 m-auto d-block text-center">Toasts</span>
        </div>
      </div>
      
    </div>

    <div class="container">
      <NotificationsUsage></NotificationsUsage>
    </div>

    <div class="container">
      <h3>Notification status</h3>
      <p>Notification status helps convey the information being communicated. These statuses correspond with a color and icon to provide a consistent, universal experience for users.</p>

      <div class="row mb-4">
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo" data-status="danger"><strong>Documents not uploaded:</strong> Subtitle text goes here.</Notification>
          <span class="d-block mb-4">Error notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo" data-status="warning"><strong>Documents not uploaded:</strong> Subtitle text goes here.</Notification>
          <span class="d-block mb-4">Warning notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo" data-status="success"><strong>Documents not uploaded:</strong> Subtitle text goes here.</Notification>
          <span class="d-block mb-4">Success notification</span>
        </div>
        <div class="col-sm-6 pe-5">
          <Notification data-type="demo"><strong>Documents not uploaded:</strong> Subtitle text goes here.</Notification>
          <span class="d-block mb-4">Informational notification</span>
        </div>
      </div>

      <table class="mb-5">
        <thead>
          <tr>
            <th>Status</th>
            <th>Usage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Danger</td>
            <td>Inform users of an error or critical failure and optionally block the user from proceeding until the issue has been resolved</td>
            <td>Always persist until the user dismisses them or resolves error</td>
          </tr>
          <tr>
            <td>Warning</td>
            <td>Inform users that they are taking actions that are not desirable or might have unexpected results</td>
            <td>Often persist until the user dismisses the notification or continues in their task</td>
          </tr>
          <tr>
            <td>Success</td>
            <td>Confirm a task was completed as expected</td>
            <td>Typically do not require further action and can be dismissed automatically or persist in a nonintrusive manner</td>
          </tr>
          <tr>
            <td>Informational</td>
            <td>Provide additional information to users that may not be tied to their current action or task</td>
            <td>Do not require immediate action and can be dismissed on a timer or persist, depending on the content</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="container pt-5 pb-5">
      <h2>Notification types</h2>
      <p>Components available in the iamproperty design system.</p>
      <div class="row row-cols-1 row-cols-md-3">
        <div><a href="/notifications/toasts"><Card :data-image="toast" class="card--lg-image">Toasts</Card></a></div>
        <div><a href="/notifications/inline-notification"><Card :data-image="inlineNotification" class="card--lg-image">Inline</Card></a></div>
        <div><a href="/notifications/alert"><Card :data-image="alert" class="card--lg-image">Alert</Card></a></div>
        <div><a href="/dialogs/modal#transactional"><Card :data-image="modalTransactional" class="card--lg-image">Transactional modal</Card></a></div>
        <div><a href="/dialogs/modal#acknowledgement"><Card :data-image="modalAcknowledgement" class="card--lg-image">Acknowledgement modal</Card></a></div>
      </div>
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
        <a href="/pdfs/system-notifications.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Card from '@/components/Card/Card.vue'
import Notification from '@/components/Notification/Notification.vue'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import modalTransactional from '../../img/dialogs/modal-transactional.png'
import modalAcknowledgement from '../../img/dialogs/modal-acknowledgement.png'
import alert from '../../img/notifications/alert.png'
import toast from '../../img/notifications/toast.png'

import NotificationsUsage from '../NotificationsUsage.vue'

import inlineNotification from '../../img/dialogs/inline-notification.png'


modalTransactional
export default {
  components: {
    DSHeader,
    Tabs,
    Card,
    modalTransactional,
    inlineNotification,
    alert,
    toast,
    Notification,
    NotificationsUsage,
    modalAcknowledgement
  },
  data () {
    return {
      headerImg: headerImg,
      modalTransactional: modalTransactional,
      modalAcknowledgement: modalAcknowledgement,
      inlineNotification:inlineNotification,
      alert: alert,
      toast: toast
    }
  }
}
</script>