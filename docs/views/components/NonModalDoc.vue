<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Non Modals</h1>
    </DSHeader>

    <div class="container">
      <h2>Introduction</h2>
      <p class="lead">Non-Modals are user interface elements or components that do not impose a modal behaviour or restrict users to a single mode or state of interaction.</p>
    
      <h3>Overview</h3>

      <p>Non-modals in a design system are user interface components that enable users to interact with them while maintaining the context and continuity of their overall workflow. They do not impose a modal behaviour, they don’t interrupt the user workflow or blocking access to other parts of the interface. </p>
    
    </div>

    <div class="container">
      <NonModelDesc></NonModelDesc>
    </div>
    
    <div class="container">
      <h2>Passive</h2>
      <p>Passive non-modal dialogs provide information or content without requiring immediate user input or disrupting the user’s workflow.</p>

      <div class="row mb-2">
        <div class="col-sm-6">
          <img :src="inlineNotification" alt="" />
          <span class="text-center d-block pt-1 pb-3 text-primary">Inline notification</span>
        </div>
        <div class="col-sm-6">
          <img :src="nonmodalPassive" alt="" />
          <span class="text-center d-block pt-1 pb-3 text-primary">Toggletip</span>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Characteristic</th>
            <th>Context</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Non-intrusive</td>
            <td>Does not disrupt the user’s current activity or require them to interact with it. It presents information in a subtle or unobtrusive manner, often in a separate area or alongside the main content.</td>
          </tr>
          <tr>
            <td>Optional Engagement</td>
            <td>Users have the choice to engage with the dialog or ignore it without any negative consequences or impact on their workflow. The dialog may provide additional details, tips, or related information that users can explore if they desire.</td>
          </tr>
          <tr>
            <td>Supplementary information</td>
            <td>typically offers supplementary or contextual information that enhances the user’s understanding or experience. It may provide explanations, tooltips, hints, or relevant suggestions to assist users in their current task.</td>
          </tr>
          <tr>
            <td>Dismissible or Persistent</td>
            <td>Depending on the design, a passive non-modal dialog can be dismissible, allowing users to close or hide it if they prefer not to see it. In some cases, it may remain persistent but unobtrusive, allowing users to continue their workflow while still having access to the main content.</td>
          </tr>
          <tr>
            <td>Minimal Interaction</td>
            <td>Users do not need to interact with the passive non-modal dialog to continue their tasks. It does not require any input, confirmation, or decision-making from the user. The dialog’s purpose is to provide supplementary information rather than soliciting direct user engagement.</td>
          </tr>
        </tbody>
      </table>

      <h3>Dismissal</h3>
      <p>Passive non-modal dialogs are typically dismissible, allowing users to close or hide them if they prefer not to engage with the supplementary information.</p>
    </div>
    
    <div class="container">
      <h2>Transactional</h2>
      <p>The key characteristic of passive non-modal dialogs is that they provide information or content without requiring immediate user input or disrupting the user’s workflow.</p>

      
      <div class="row mb-2">
        <div class="col-sm-6">
          <img :src="cookies" alt="" />
          <span class="text-center d-block pt-1 pb-3 text-primary">Cookie consent</span>
        </div>
        <div class="col-sm-6">
          <img :src="surveys" alt="" />
          <span class="text-center d-block pt-1 pb-3 text-primary">Surveys</span>
        </div>
        <div class="col-sm-6">
          <img :src="multiForm" alt="" />
          <span class="text-center d-block pt-1 pb-3 text-primary">Multi-step form</span>
        </div>
      </div>

      <h3>Dismissal</h3>

      <p>Transactional non-modal dialogs are typically dismissed through specific actions or completion of the transactional process. The specific dismissal method may vary depending on the implementation and user interface design choices. The goal is to provide users with intuitive and easily accessible options to dismiss the transactional non-modal dialog when desired.</p>
    </div>

    <div class="container pt-5 pb-5">
      <h2>Different Non-Modal dialogs types</h2>
      <div class="row row-cols-1 row-cols-md-3">
        <div><a href="/components/popover"><Card>Dialog (Popover)</Card></a></div>
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
        <a href="/pdfs/non-modal.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Card from '@/components/Card/Card.vue'
import headerImg from '../../img/type-header.png'

import NonModelDesc from '../NonModalDesc.vue'


import YoutubeVideo from '@/foundations/YoutubeVideo/YoutubeVideo.vue'
import DSHeader from '../DSHeader.vue'


import nonmodalPassive from '../../img/dialogs/nonmodal-passive.png'

import inlineNotification from '../../img/dialogs/inline-notification.png'

import cookies from '../../img/dialogs/cookies.png'
import surveys from '../../img/dialogs/surveys.png'
import multiForm from '../../img/dialogs/multi-step-form.png'


export default {
  components: {
    YoutubeVideo,
    DSHeader,
    NonModelDesc,
    Tabs,
    Card,
    nonmodalPassive,
    inlineNotification,
    cookies,
    surveys,
    multiForm
  },
  data () {
    return {
      headerImg: headerImg,
      nonmodalPassive: nonmodalPassive,
      inlineNotification:inlineNotification,
      cookies:cookies,
      surveys:surveys,
      multiForm:multiForm
    }
  },
  mounted(){
    this.$nextTick(function () {

     
    })
  }
}
</script>