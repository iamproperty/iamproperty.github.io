<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Modals</h1>
    </DSHeader>

    <div class="container">
      <h2>Introduction</h2>
      <p class="lead">Modals are user interface elements that concentrate the user’s attention on a specific task or information by displaying a window that overlays the page content.</p>
      <h3>Overview</h3>
      <p>Modals are widely used in user interfaces to convey important information, obtain user input, confirm actions, or present critical alerts. They help maintain user focus, provide clear guidance, and ensure that users are actively engaged in the specific task or information presented within the modal window.</p>
      <p class="note mb-4"><strong>Note:</strong> The traditional modal use the bootstrap approach of <kbd>data-modal="[modal_id]"</kbd> on a button to show the targeted dialog with matching id. Supports backdrop click or escape key to hide. Add a div with class <kbd>mh-lg</kbd> to allow scrollable content.</p>

    </div>


    
    <div class="container">
      
      <DialogUsage></DialogUsage>

      <p>For more context of when to use modals and when not to, see the <a href="/components/dialog">dialog</a> page for further details. </p>
    </div>


    
    <div class="container">
      <ModalVariants></ModalVariants>
    </div>

    <!-- #region Passive -->
    <div class="container">
      <h3>Passive</h3>
      <p>Provides information, feedback, or context to the user without explicitly prompting for input or demanding a decision. Can be used to display critical information, important notifications, or alerts that require user awareness but not immediate action.</p>

      <div class="row">
        <div class="col-sm-6">
          <img :src="modalPassive" alt="" class="mb-3" />
          <p>Passive dialogs are used to inform about crucial information, no action is needed. They can be dismissed by pressing the ‘X’ icon.</p>
        </div>
      </div>
      <h4>Anatomy</h4>
      <img :src="modalPassiveAnatomy" alt="" class="mb-3" />
      <ol class="mb-4">
        <li>Backdrop</li>
        <li>Optional label</li>
        <li>Title (H3 styles)</li>
        <li>Body: contains the information and/or controls needed to complete the dialog’s task. It can include message text and components.</li>
        <li>Dismiss button</li>
        <li>Dialog container</li>
      </ol>
      <h4>Dismissal</h4>
      <p>The passive modal is less restrictive about dismissal, the body content is less urgent and doesn’t require an action from the user. It can be dismissed by clicking the ‘X’ button or clicking anywhere outside the modal.</p>
    </div>

    <div class="container pb-5 mb-5">
      <h4>Preview</h4>
      <button data-modal="modal-passive" class="btn btn-secondary">Open Modal</button>
    </div>
    <dialog id="modal-passive">
      <span>Optional label</span>
      <span class="h3">Passive modal title</span>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      
    </dialog>



    <!-- #endregion -->

    <!-- #region Transactional -->
    <div class="container">
      <h3>Transactional</h3>
      <p>A transactional modal dialog is a type of modal dialog that is used when a user’s action or decision has significant consequences or irreversible effects. Its key characteristic is to ensure that the user fully understands the implications of their action before proceeding.</p>

      <div class="row">
        <div class="col-sm-6">
          <img :src="modalTransactional" alt="" class="mb-3" />
          <p>Transactional dialog requires user action </p>
        </div>
      </div>
      <h4>Anatomy</h4>
      <img :src="modalTransactionalAnatomy" alt="" class="mb-3" />
      <ol class="mb-4">
        <li>Backdrop</li>
        <li>Dialog container</li>
        <li>Title (H3 styles)</li>
        <li>Actions The main actions needed to complete or cancel the dialog task. Use descriptive words for the actions like Add, Delete, Save and avoid vague words like Done or OK.</li>
        <li>Icon (optional)</li>
        <li> Body: Contains the information and/or controls needed to complete the dialog’s task. It can include message text and components.</li>
      </ol>
      <h4>Dismissal</h4>
      <p>The transactional modal is intentionally restrictive because it requires an action. To dismiss it, the user has to use one of the two action buttons. The primary button should complete the action the modal is urging, but the secondary button should offer them the option not to.</p>
    </div>
    
    <div class="container pb-5 mb-5">
      <h4>Preview</h4>
      <button data-modal="modal-transactional" class="btn btn-secondary">Open Modal</button>
    </div>
    <dialog id="modal-transactional">
      
      <span class="h3">Delete property file</span>
      <p>Continually will permanently delete this property. Are you sure you’d like to continue?</p>
  
      <form>
        <button class="btn btn-secondary" formmethod="dialog">Cancel</button>
        <button class="btn btn-primary">Delete</button>
      </form>
    </dialog>


    <!-- #endregion -->


    <!-- #region Acknowledgement -->
    <div class="container">
      <h3>Acknowledgement</h3>
      <p>The purpose of an acknowledgment modal dialog is to obtain explicit consent or confirmation from the user regarding specific information or conditions. It ensures that users are aware of important details and have actively acknowledged them, providing legal or compliance requirements, and establishing a clear understanding between the user and the system or platform.</p>

      <div class="row">
        <div class="col-sm-6">
          <img :src="modalAcknowledgement" alt="" class="mb-3" />
          <p>The system needs acknowledgment from the user. Users must press ‘OK’ to dismiss the dialog </p>
        </div>
      </div>
      <h4>Anatomy</h4>
      <img :src="modalAcknowledgementAnatomy" alt="" class="mb-3" />
      <ol class="mb-4">
        <li>Backdrop</li>
        <li>Dialog container</li>
        <li>Title (H3 styles)</li>
        <li>Actions: The main actions needed to complete or navigate the dialog task. </li>
        <li>Icon (optional)</li>
        <li>Text</li>
      </ol>
      <h4>Dismissal</h4>
      <p>The transactional modal is intentionally restrictive because it requires an action to acknowledge the message - for legal or compliance reasons. To dismiss it, the user has to press the primary button so the System has confirmation that the user acknowledges the message.</p>
    </div>
    
    <div class="container pb-5 mb-5">
      <h4>Preview</h4>
      <button data-modal="modal-ack" class="btn btn-secondary">Open Modal</button>
    </div>
    <dialog id="modal-ack">
      <span class="h3">Acknowledgment modal title</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua.</p>
  
      <form>
        <button class="btn btn-primary">OK</button>
      </form>
    </dialog>

    <!-- #endregion -->

    <!-- #region Multi-step -->
    <div class="container">
      <h3>Multi-step</h3>
      <p>The purpose of a multi-step modal dialog is to provide users with a sense of assurance that their requested action is being processed and to keep them informed about the progress. It helps manage user expectations, reduce uncertainty, and provide a responsive user experience during tasks that require time to complete.</p>

      <div class="row">
        <div class="col-sm-6">
          <img :src="modalMulti" alt="" class="mb-3" />
          <p>Multi-step modal can be dismissed by clicking the ‘X’ button or following and completing the steps in the dialog.</p>
        </div>
      </div>
      <h4>Standard Anatomy</h4>
      <img :src="modalMultiAnatomy" alt="" class="mb-3" />
      <ol class="mb-4">
        <li>Backdrop</li>
        <li>Dialog container</li>
        <li>Tabs</li>
        <li>Tab pane</li>
        <li>Title (H3 styles)</li>
        <li>Close button</li>
        <li>Body: Contains the information and/or controls needed to complete the dialog’s task. It can include message text and components.</li>
        <li>Actions: The main actions needed to complete or navigate the dialog task. Use descriptive words for the actions like Add, Delete, Save and avoid vague words like Done or OK.</li>
      </ol>


      <h4>With scroll Anatomy</h4>
      <img :src="modalMultiAnatomyScroll" alt="" class="mb-3" />
      <ol class="mb-4">
        <li>Header section: Container the title and ‘X’ button. Has a surrounding padding of 32px, overlays the body content with a flat cut off.</li>
        <li>Scroll bar: Inline with body content</li>
        <li>Bottom aligned fade: Tinted layer with a linear white fill. Height matches the padding of the parent container.</li>
      </ol>

      <h4>Dismissal</h4>
      <p>The multi-step modal is less restrictive about dismissal, allowing the user several options to navigate content or dismiss. Users can follow the action buttons, progress through the modal content and complete the prompted action at the end to dismiss. It can also be dismissed by clicking the ‘X’ button or clicking anywhere outside the modal. </p>
    </div>
    
    <div class="container pb-5 mb-5">
      <h4>Preview</h4>
      <button data-modal="modal-multi" class="btn btn-secondary">Open Modal</button>
    </div>
    <dialog id="modal-multi" class="dialog--multi">

      <span class="h3">Multi-step modal title</span>
      <form>
        <fieldset data-title="Personal details">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
        </fieldset>
        <fieldset data-title="Property details">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
        </fieldset>
        <fieldset data-title="Location">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
        </fieldset>
        <fieldset data-title="Submit property">

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>

        </fieldset>
        <button class="btn btn-primary">Submit</button>
      </form>

    </dialog>
    <!-- #endregion -->


    
    <div class="container pb-5">
      <h3>YouTube Video</h3>
      <p>We can add a YouTube video to a modal which would play/load once the modal is opened. Same implementation as the modal above, passing through the YoutubeVideo component as the content of the dialog.</p>
      <button data-modal="youtubewrapper" class="btn btn-secondary">Open YouTube Video Modal</button>
    </div>

    <dialog id="youtubewrapper">
      <YoutubeVideo video="fXyAMkQzDls"></YoutubeVideo>
    </dialog>



    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="html">{{htmlUsage}}</code></pre>
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
              <td>V1.1</td>
              <td>25.05.2023</td>
              <td>Added min and max widths to the modals for design flexibility</td>
            </tr>
            <tr>
              <td>V1 added</td>
              <td>19.05.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/modals.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss">

html #app #visualtest:target ~ main > {
  dialog {
    display: block!important;
    position: static;
    margin-bottom: 3rem;
  }

  #modal-multi {
    
    display: flex!important;
  }
}

</style>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import YoutubeVideo from '@/foundations/YoutubeVideo/YoutubeVideo.vue'
import DSHeader from '../DSHeader.vue'
import ModalVariants from '../ModalVariants.vue'
import headerImg from '../../img/type-header.png'
import DialogUsage from '../DialogUsage.vue'
import modalPassive from '../../img/dialogs/modal-passive.png'
import modalPassiveAnatomy from '../../img/dialogs/passive-modal-anatomy.png'
import modalTransactional from '../../img/dialogs/modal-transactional.png'
import modalTransactionalAnatomy from '../../img/dialogs/transactional-modal-anatomy.png'
import modalMulti from '../../img/dialogs/modal-multi.png'
import modalMultiAnatomy from '../../img/dialogs/multi-modal-anatomy.png'
import modalMultiAnatomyScroll from '../../img/dialogs/multi-modal-anatomy-scroll.png'
import modalAcknowledgement from '../../img/dialogs/modal-acknowledgement.png'
import modalAcknowledgementAnatomy from '../../img/dialogs/acknowledgement-modal-anatomy.png'

import {createDialog} from '../../../assets/ts/modules/dialogs';

modalTransactional
export default {
  components: {
    YoutubeVideo,
    DSHeader,
    ModalVariants,
    Tabs,
    DialogUsage,
    modalPassive,
    modalPassiveAnatomy,
    modalTransactional,
    modalTransactionalAnatomy,
    modalMulti,
    modalMultiAnatomy,
    modalMultiAnatomyScroll,
    modalAcknowledgement,
    modalAcknowledgementAnatomy
  },
  data () {
    return {
      headerImg: headerImg,
      modalPassive: modalPassive,
      modalPassiveAnatomy: modalPassiveAnatomy,
      modalTransactional: modalTransactional,
      modalTransactionalAnatomy: modalTransactionalAnatomy,
      modalMulti: modalMulti,
      modalMultiAnatomy: modalMultiAnatomy,
      modalMultiAnatomyScroll: modalMultiAnatomyScroll,
      modalAcknowledgement: modalAcknowledgement,
      modalAcknowledgementAnatomy: modalAcknowledgementAnatomy,
      htmlUsage: `<button data-modal="modal" class="btn btn-secondary">Open Modal</button>

<dialog id="modal">
  <h3>Dialog Content (Modal)</h3>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</dialog>
      `
    }
  },
  mounted(){
    this.$nextTick(function () {

      var hash = window.location.hash;

      if(hash == "#visualtest"){

        Array.from(document.querySelectorAll('dialog')).forEach((dialog,index) => {

          dialog.setAttribute('open','open');
          createDialog(dialog);
        });

      }
    })
  }
}
</script>