<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Dialog</h1>
    </DSHeader>

    <div class="container">
      <h2>Introduction</h2>
      <p class="lead">Dialogs serve the purpose of unveiling critical information, displaying information while maintaining context, or prompting a user response when necessary.</p>
      <h3>Overview</h3>
      <p>Dialogs are most effective when utilized for brief tasks or to notify users of task-related information. They offer a useful alternative to navigating users to a new page for simple tasks or gathering knowledge, as they are less disorienting. However, it is important to exercise caution in their usage due to their disruptive and potentially distracting nature.</p>
      <p>Dialogs should be employed sparingly. When triggered by a user's action, a dialog emerges on top of the main page content and remains visible until dismissed. The purpose of a dialog should be immediately apparent to the user, providing a clear and unmistakable path towards completion.</p>
    </div>
    

    <div class="container">
      <h2>Types</h2>
      <p>There are two types of dialogs, modal and non-modal.</p>
      <p>Modal: A modal dialog initiates a state or mode that directs the user's attention solely towards a specific task or relevant information. While a modal dialog is active, the underlying page content is hidden and inaccessible until the user either completes the task or dismisses the modal.</p>
      <p>Non-modal: When a non-modal dialog is active, users can simultaneously view and interact with the main page while the dialog remains open. Non-modal dialogs are often employed to present non-critical information or offer optional user tasks.</p>

      <Table>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Usage</th>
              <th>Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modal</td>
              <td>Used to display crucial information or prompt users for necessary input to complete a workflow.</td>
              <td>Modal dialogs concentrate the user's attention solely on a specific task or information, obscuring on-page content while the modal dialog is active.</td>
            </tr>
            <tr>
              <td class="text-nowrap">Non-modal</td>
              <td>Used for presenting non-essential information or providing optional user tasks.</td>
              <td>Users can access and interact with on-page content while the dialog remains open.</td>
            </tr>
          </tbody>
        </table>
      </Table>

      <div class="row">
        <div class="col-sm-6">
          <img :src="modalImg" alt="" />
          <span class="text-center d-block pt-1 pb-3 text-primary">Modal</span>
        </div>
        <div class="col-sm-6">
          <img :src="nonModalImg" alt="" />
          <span class="text-center d-block pt-1 pb-3 text-primary">Non-modal</span>
        </div>
      </div>

      <h3>Principles</h3>

      <div class="row">
        <div class="col-md-4">
          <span class="h2 pb-2 text-body">Focused</span>
          <p>Dialogs focus user attention to ensure their content is addressed.</p>
        </div>
        <div class="col-md-4">
          <span class="h2 pb-2 text-body">Direct</span>
          <p>Dialogs should deliver information directly and be dedicated to accomplishing a specific task.</p>
        </div>
        <div class="col-md-4">
          <span class="h2 pb-2 text-body">Helpful</span>
          <p>Dialogs should emerge when triggered by a user task or action, presenting relevant and contextual information.</p>
        </div>
      </div>

      <DialogUsage></DialogUsage>
      
    </div>
    
    <div class="container">
      <h2>Modal</h2>
      <p class="lead">A modal dialog pops up on top of a page after some user action or system trigger. It waits for user input. The page content below is disabled. Often, it is darkened.</p>

      <Table class="table--fullwidth">
        <table>
          <thead>
            <tr>
              <th><i class="fa-sharp fa-solid fa-circle-check text-success"></i> When to use</th>
              <th><i class="fa-sharp fa-solid fa-circle-xmark text-danger"></i> When not to use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>User response required</strong>: Utilize a dialog to prompt the user for information necessary to proceed with a user-initiated process that is currently being blocked.</td>
              <td><strong>Avoid full-page modals</strong>: If a modal dialog requires more space than the large modal component allows, it’s recommended to display the content on a dedicated page rather than within a modal. Modals are not intended to substitute for a full page.</td>
            </tr>
            <tr>
              <td><strong>Notify urgent information</strong>: Employ a modal dialog to urgently communicate important information regarding the user’s ongoing work. This is commonly used to report system errors or convey the consequences of a user’s action.</td>
              <td><strong>Avoid nested modals</strong>: Never trigger another modal within a modal. If the first modal task is dependent on a confirmation modal for approval, it’s best to perform the initial task outside of a modal.</td>
            </tr>
            <tr>
              <td><strong>Confirm user decision</strong>: Implement a modal dialog to obtain confirmation for user decisions. Clearly describe the action being confirmed and provide an explanation of any potential consequences it may entail. Ensure that both the dialog’s title and button accurately reflect the action that will take place. </td>
              <td><strong>Modal limits main page access</strong>: Avoid using modals when additional information outside of the modal is required. While a modal dialog is active, users cannot interact with the main page and are restricted to the information presented within the modal for decision-making. Modal tasks should be designed to be easily completed with the limited information provided in the dialog itself. If users need access to supplementary information, consider utilizing a full page instead.</td>
            </tr>
          </tbody>
        </table>
      </Table>

      <ModalVariants></ModalVariants>
      
    </div>

    <div class="container">
      <h3>Custom Events</h3>
      <p>On closing a modal, the 'dialog-closed' cutom event will be dispatched. It will send an object with the modal ID in it as the detail.</p>
    </div>

    <NonModelDesc></NonModelDesc>

    <div class="container pt-5 pb-5">
      <h2>Different dialog types</h2>
      <div class="row row-cols-1 row-cols-md-3">
        <div><a href="/dialogs/modal"><Card>Dialog (Modal)</Card></a></div>
        <div><a href="/dialogs/nonmodal"><Card>Dialog (Non-Modal)</Card></a></div>
        <div><a href="/dialogs/popover"><Card>Dialog (Popover)</Card></a></div>
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
              <td>19.05.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/dialog.pdf" download>Download latest designs</a>
      </div>
    </div>

  </main>
</template>

<script>
import Table from '@/components/Table/Table.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
import Card from '@/components/Card/Card.vue'
import DSHeader from '../DSHeader.vue'
import DialogUsage from '../DialogUsage.vue'
import ModalVariants from '../ModalVariants.vue'
import NonModelDesc from '../NonModalDesc.vue'
import headerImg from '../../img/type-header.png'
import modalImg from '../../img/dialogs/modal-demo.png'
import nonModalImg from '../../img/dialogs/non-modal-demo.png'

export default {
  components: {
    DSHeader,
    DialogUsage,
    ModalVariants,
    NonModelDesc,
    Tabs,
    Table,
    Card,
    modalImg,
    nonModalImg
  },
  data () {
    return {
      headerImg: headerImg,
      modalImg: modalImg,
      nonModalImg: nonModalImg,
    }
  }
}
</script>