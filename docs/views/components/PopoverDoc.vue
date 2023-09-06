<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Popovers</h1>
    </DSHeader>


    

    <div class="container">
      <h2>Introduction</h2>
      <p class="lead">A popover is layer that appears above other content onscreen when people click or tap a control or interactive area.</p>
      <h3>Overview</h3>
      
      <p>Popovers are visually discreet and unobtrusive elements commonly used in user interfaces to provide a more focused and intuitive experience by presenting relevant information or options in a compact and easily dismissible manner. It provides extra options or details without interrupting the user workflow. Only one popover can appear at a time and can contain varying text and interactive elements.</p>
      
      <table>
        <thead>
          <tr>
            <th><i class="fa-solid fa-check-circle text-success colour-primary"></i> How to use</th>
            <th><i class="fa-solid fa-times-circle text-danger"></i> How not to use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Use popovers for non-critical information:</strong> Popovers are intended to provide additional contextual information or options related to a specific element.</td>
            <td><strong>Don’t use overlays with popovers:</strong> Overlays disable the page and prevent users from performing other task. If you are displaying critical information, consider using a modal instead.</td>
          </tr>
          <tr>
            <td><strong>Make popovers clear and concise:</strong> Avoid large amounts of text, it can overload the user with irrelevant information and mobile users can lose visibility of the page.</td>
            <td><strong>Don’t cover attributed elements:</strong> Try to avoid the popover covering the element the popover is attributed to as it will lose context, e.g. headings, form labels. </td>
          </tr>
          <tr>
            <td><strong>Keep popovers in view until dismissed:</strong> Dismissal methods may vary, users may click the UI trigger again, click the surrounding area around the popover or dismiss it directly with an ‘X’ button.</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
      
      
    <div class="container">

      <h3>Popover variants</h3>

      <div class="row">
        <div class="col-md-6 pb-2">
          <img :src="popoverNotip" alt="" loading="lazy"/>
          <span class="text-primary d-block p-2 text-center">No tip</span>
        </div>
        <div class="col-md-6">
          <img :src="popoverPointer" alt="" loading="lazy"/>
          <span class="text-primary d-block p-2 text-center">Pointer</span>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th class="th--mw-sm">Variant</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No tip</td>
            <td>When a trigger button has a visually defined down state or active state, such as a distinct visual change (e.g. colour change, shading, or indentation) when it is pressed or activated, the popover that appears may not require an additional arrow-like tip to indicate its association with the button.</td>
          </tr>
          <tr>
            <td>Pointer</td>
            <td>Popovers with a pointer tip should be used to help show the relationship between the popover and where it was triggered from.</td>
          </tr>
        </tbody>
      </table>

    </div>

    <div class="container">

      <h3>Size</h3>

      <h4>Desktop</h4>

      <div class="row">
        <div class="col-sm-4 pb-3">
          <img :src="popoverDesktopSm" alt="" loading="lazy"/>
          <span class="pt-2 d-block">Small: 266px<br/>3 columns</span>
        </div>
        <div class="col-sm-4 pb-3">
          <img :src="popoverDesktopMd" alt="" loading="lazy"/>
          <span class="pt-2 d-block">Medium: 360px<br/>4 columns</span>
        </div>
        <div class="col-sm-4 pb-3">
          <img :src="popoverDesktopLg" alt="" loading="lazy"/>
          <span class="pt-2 d-block">Large: 454px<br/>5 columns</span>
        </div>
      </div>

      <h4>Tablet</h4>

      <div class="row">
        <div class="col-sm-4 pb-3">
          <img :src="popoverTabletSm" alt="" loading="lazy" />
          <span class="pt-2 d-block">Small: 265px<br/>(Same fixed size as the desktop values)</span>
        </div>
        <div class="col-sm-4 pb-3">
          <img :src="popoverTabletMd" alt="" loading="lazy"/>
          <span class="pt-2 d-block">Medium: 335px<br/>3 columns</span>
        </div>
        <div class="col-sm-4 pb-3">
          <img :src="popoverTabletLg" alt="" loading="lazy"/>
          <span class="pt-2 d-block">Large: 452px<br/>4 columns</span>
        </div>
      </div>

      <h4>Mobile</h4>

      <div class="row">
        <div class="col-sm-4 pb-3">
          <img :src="popoverMobileSm" alt="" loading="lazy"/>
          <span class="pt-2 d-block">Small: 239px<br/>3 columns</span>
        </div>
        <div class="col-sm-4 pb-3">
          <img :src="popoverMobileMd" alt="" loading="lazy"/>
          <span class="pt-2 d-block">Small: 319px<br/>4 columns</span>
        </div>
        <div class="col-sm-4 pb-3">
          <img :src="popoverMobileLg" alt="" loading="lazy"/>
          <span class="pt-2 d-block">Small: 319px<br/>4 columns</span>
        </div>
      </div>

    </div>
      
      
    <div class="container">

      <h2>No tip</h2>

      <p>No tip popovers have a trigger button that has a visually defined down state or active state. They align with the trigger button and don’t need a pointer to define their relationship to the trigger button. They are designed to be visually discreet and unobtrusive, allowing the main content and trigger element to remain prominent.</p>

      <div class="row">
        <div class="col-sm-9 col-md-6">
          <figure>
            <img :src="popoverNotip" alt="" loading="lazy"/>
            <figcaption class="pt-2 pb-3">No tip popover amongst page content. Trigger button is prominent without distracting from main page content.</figcaption>
          </figure>
        </div>
      </div>

      <h3>Anatomy</h3>

      <img :src="popoverNotipAnatomy" alt="" loading="lazy" class="mb-4" />
      <ol class="mb-4">
        <li>UI trigger button</li>
        <li>Container</li>
        <li>Body: contains the content, could include text, links, icons, etc.</li>
      </ol>

      <h3>Dismissal</h3>
      <p>Pop ups can be dismissed in a variety of ways, depending on how it is built and its use case.</p>

      <p><strong>UI trigger:</strong> users can dismiss the pop-up by clicking the UI trigger (button or alternative styling)<br/>
      <strong>Outside Click:</strong> clicking outside the pop-up area should dismiss the pop-up<br/>
      <strong>Escape Key:</strong> Allowing users to dismiss the pop-up by pressing the escape (Esc) key is a common convention. This is especially useful for keyboard-centric users who prefer to navigate without using a mouse.<br/>
      <strong>User Interaction:</strong> Pop-ups may also be designed to be dismissed when users interact with specific elements within the pop-up. For example, if a pop-up includes a form, submitting the form could dismiss the pop-up.</p>


      <h3>Alignment</h3>

      <div class="row">
        <div class="col-md-6">
          <img :src="popoverNotipAlignmentDo" alt="" loading="lazy" class="mb-2" />
          <p><strong class="d-block text-complete">Do</strong> Align popover flush with UI trigger on at least one side.</p>
        </div>
        <div class="col-md-6">
          <img :src="popoverNotipAlignmentDont" alt="" loading="lazy" class="mb-2"/>
          <p><strong class="d-block text-danger">Don't</strong> Don’t arbitrarily place the popover around the UI trigger.</p>
        </div>
      </div>

      <h3>Behaviours</h3>
      
      <div class="row">
        <div class="col-md-6">
          <img :src="popoverNotipDo" alt="" loading="lazy" class="mb-2" />
          <p><strong class="d-block text-complete">Do</strong> Use selected and hover/focus states to distinguish elements in the popover and assist the user. Designer note: The UI trigger is set, I guess it’s down to specific use?? Follow your heart &#10084;</p>
        </div>
        <div class="col-md-6">
          <img :src="popoverNotipDont" alt="" loading="lazy" class="mb-2"/>
          <p><strong class="d-block text-danger">Don't</strong> Over use the button component in one area - use alternative UI trigger styling styling where appropriate</p>
        </div>
        <div class="col-md-6">
          <img :src="popoverNotipDo2" alt="" loading="lazy" class="mb-2" />
          <p><strong class="d-block text-complete">Do</strong> Be mindful oh how content in a popover will stack on mobile. Limit actions to be performed in a popover. If you require more extensive or complex user actions, consider using a component like a <a href="/components/modal">Modal</a>.</p>
        </div>
        <div class="col-md-6">
          <img :src="popoverNotipDont2" alt="" loading="lazy" class="mb-2"/>
          <p><strong class="d-block text-danger">Don't</strong> Have content with a higher position than the popover. The popover should over lay page content - with the exception of critical components like navigation.</p>
        </div>
      </div>

    </div>
      
    <div class="container visualtest" style="min-height: 25rem;">

      <div class="dialog__wrapper" data-keep-open>
        <button class="btn btn-secondary">Open Popover</button>
        <dialog open>
          <h3>Dialog Content (Popover)</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </dialog>
      </div>
    
    </div>

    <div class="container">
      <h3>Popover List variant</h3>

    </div>
   
    <div class="container visualtest">
      <div class="row">
        <div class="col-sm-6" style="min-height: 15rem;">
          <div class="dialog__wrapper" data-keep-open>
            <button class="btn btn-primary pe-none">Text list Popover</button>
            <dialog class="dialog--list" open>
              <button class="btn btn-action">Action 1</button>
              <button class="btn btn-action">Action 2</button>
              <hr/>
              <button class="btn btn-action">Lorem ipsum</button>
            </dialog>
          </div>
        </div>
        <div class="col-sm-6" style="min-height: 15rem;">
          <div class="dialog__wrapper" data-keep-open>
            <button class="btn btn-primary pe-none">Text list with icons</button>
            <dialog class="dialog--list" open>
              <button class="btn btn-action fa-browsers">Action 1</button>
              <button class="btn btn-action fa-rotate-left">Action 2</button>
              <hr/>
              <button class="btn btn-action fa-link">Action 3</button>
            </dialog>
          </div>
        </div>
        <div class="col-md-6" style="min-height: 20rem;">
          <div class="dialog__wrapper" data-keep-open>
            <button class="btn btn-primary pe-none">Select list</button>
            <dialog class="dialog--list" open>
              <div class="dialog__wrapper">
                <button class="btn btn-action">Sort by</button>
                <dialog class="dialog--list">
                    <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest">
                    <label for="follow-up-oldest" class="radio--tick">Option 1</label>
                    
                    
                    <input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest">
                    <label for="follow-up-newest" class="radio--tick">Option 2</label>
                    <input type="radio" name="sort" data-sort="" id="date-instructed-oldest" value="date-instructed-oldest" checked="" autofocus>
                    <label for="date-instructed-oldest" class="radio--tick">Option 3</label>
                    
                    <input type="radio" name="sort" data-sort="" id="date-instructed-newest" value="date-instructed-newest">
                    <label for="date-instructed-newest" class="radio--tick">Option 4</label>

                </dialog>
              </div>
              <div class="dialog__wrapper">
                <button class="btn btn-action">Filter by</button>
                <dialog class="dialog--list">
                    <input type="radio" name="filter" data-sort="" id="follow-up-oldest2" value="follow-up-oldest">
                    <label for="follow-up-oldest2" class="radio--tick">Option 1</label>
                    
                    
                    <input type="radio" name="filter" data-sort="" id="follow-up-newest2" value="follow-up-newest">
                    <label for="follow-up-newest2" class="radio--tick">Option 2</label>
                    <input type="radio" name="filter" data-sort="" id="date-instructed-oldest2" value="date-instructed-oldest" checked="" autofocus>
                    <label for="date-instructed-oldest2" class="radio--tick">Option 3</label>
                    
                    <input type="radio" name="filter" data-sort="" id="date-instructed-newest2" value="date-instructed-newest">
                    <label for="date-instructed-newest2" class="radio--tick">Option 4</label>

                </dialog>
              </div>
              <hr/>
              <button class="btn btn-action">Lorum ipsum</button>
              <button class="btn btn-action">Lorum ipsum</button>
            </dialog>
          </div>
        </div>
      </div>

    </div>


    <div class="container">

      <h2>Pointer</h2>
      <p>The pointer popover is visually attention-grabbing, with a pointer tip that visually indicates the association between the popover and its trigger. The trigger button is small and discreet, so as not to disrupt the content of the page.</p>

      <img :src="popoverPointer" alt="" loading="lazy" class="mb-5"/> 

      <h3>Anatomy</h3>


      <img :src="popoverPointerAnatomy" alt="" loading="lazy" class="mb-3"/> 
      <ol>
        <li>UI Trigger </li>
        <li>Container with pointer tip</li>
        <li>Title (lead text styles)</li>
        <li>Body: contains the content, could include text, links, icons, etc.</li>
      </ol>

      <h3>Dismissal</h3>

      <p>Pop ups can be dismissed in a variety of ways, depending on how it is built and its use case.</p>

      <p><strong>UI trigger:</strong> users can dismiss the pop-up by clicking the UI trigger (button)<br/>
      <strong>Outside Click:</strong> clicking outside the pop-up area should dismiss the pop-up<br/>
      <strong>Escape Key:</strong> Allowing users to dismiss the pop-up by pressing the escape (Esc) key is a common convention. This is especially useful for keyboard-centric users who prefer to navigate without using a mouse.<br/>
      <strong>User Interaction:</strong> Pop-ups may also be designed to be dismissed when users interact with specific elements within the pop-up. For example, if a pop-up includes a form, submitting the form could dismiss the pop-up.</p>

      <h3>Alignment</h3>

      <p>Popovers can be place to the top, right, left or bottom of their related content.</p>

      <img :src="popoverPointeralign" alt="" loading="lazy" class="mb-5" />

      <p><strong>Shift:</strong> the popover shifts in order to remain in view of the visible area, with the pointer maintaining the context that the popover is attributed to.</p>

      <img :src="popoverPointeralign2" alt="" loading="lazy" class="mb-5" />

      <p class="note mb-4"><strong>Note:</strong> This desired bit of functionality will be done through using the shift classes for the smaller sized devices.</p>

      <div class="row">
        <div class="col-md-6">
          <img :src="popoverPointeralignDo" alt="" loading="lazy" class="mb-2" />
          <p><strong class="d-block text-complete">Do</strong> Align the pointer tip centre with the trigger button</p>
        </div>
        <div class="col-md-6">
          <img :src="popoverPointeralignDont" alt="" loading="lazy" class="mb-2"/>
          <p><strong class="d-block text-danger">Don't</strong> Don’t misalign the pointer tip with the trigger button</p>
        </div>
      </div>


      <h3>Behaviours</h3>

      <div class="row">
        <div class="col-md-6">
          <img :src="popoverPointerDo" alt="" loading="lazy" class="mb-2" />
          <p><strong class="d-block text-complete">Do</strong> Make popovers short and to the point. Avoid large chunks of text in popovers. Too much text can cause cognitive overload, and users with smaller screens or who are zoomed in can lose their place.</p>
        </div>
        <div class="col-md-6">
          <img :src="popoverPointerDont" alt="" loading="lazy" class="mb-2"/>
          <p><strong class="d-block text-danger">Don't</strong> Avoid covering the element that the popover is attributed to, as it will lose its context.</p>
        </div>
      </div>

    </div>

    <div class="container visualtest tooltip-demo">
      <h3>The component</h3>
      <div class="form-control__wrapper">
        <label class="form-label visually-hidden" for="test1">Label</label>

        <select class="form-select" v-model="selected">
          <option v-for="option in options" :value="option.id">
            {{ option.name}}
          </option>
        </select>
      </div>
    

      <span :class="`tooltip hover ${selected}`" tabindex="0"><span class="tooltip__content"> <strong>Popover  title</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua.</span></span>

    </div>
  

    <div class="container">
      <Tabs>
        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="javascript">{{htmlUsage}}</code></pre>
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
              <td>V1.5</td>
              <td>31.08.2023</td>
              <td>Adding ‘Popover Lists’ to the document under ‘No Tip’ popovers.</td>
            </tr>
            <tr>
              <td>V1 added</td>
              <td>19.05.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/popovers.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

.tooltip-demo {
  position: relative;
  min-height: 40rem;

  .tooltip {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .tooltip.shift--left {
    left: 75%;
  }
  .tooltip.shift--right {
    left: 25%;
  }

  @media screen and (min-width: 36em) {
    .tooltip.shift--left {
      left: 50%;
    }
    .tooltip.shift--right {
      left: 50%;
    }
  }

  .form-control__wrapper {
    width: 12rem;
  }
}
</style>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import YoutubeVideo from '@/foundations/YoutubeVideo/YoutubeVideo.vue'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import popoverNotip from '../../img/dialogs/popovers-notip.png'
import popoverPointer from '../../img/dialogs/popovers-pointer.png'

import popoverDesktopSm from '../../img/dialogs/popover-desktop-sm.png'
import popoverDesktopMd from '../../img/dialogs/popover-desktop-md.png'
import popoverDesktopLg from '../../img/dialogs/popover-desktop-lg.png'

import popoverTabletSm from '../../img/dialogs/popover-tablet-sm.png'
import popoverTabletMd from '../../img/dialogs/popover-tablet-md.png'
import popoverTabletLg from '../../img/dialogs/popover-tablet-lg.png'

import popoverMobileSm from '../../img/dialogs/popover-mobile-sm.png'
import popoverMobileMd from '../../img/dialogs/popover-mobile-md.png'
import popoverMobileLg from '../../img/dialogs/popover-mobile-lg.png'

import popoverNotipAnatomy from '../../img/dialogs/popover-notip-anatomy.png'

import popoverNotipAlignmentDo from '../../img/dialogs/popover-notip-alignment-do.png'
import popoverNotipAlignmentDont from '../../img/dialogs/popover-notip-alignment-dont.png'

import popoverNotipDo from '../../img/dialogs/popover-notip-do.png'
import popoverNotipDont from '../../img/dialogs/popover-notip-dont.png'
import popoverNotipDo2 from '../../img/dialogs/popover-notip-do-2.png'
import popoverNotipDont2 from '../../img/dialogs/popover-notip-dont-2.png'

import popoverPointerAnatomy from '../../img/dialogs/popover-pointer-anatomy.png'


import popoverPointeralign from '../../img/dialogs/popover-tip-align.png'
import popoverPointeralign2 from '../../img/dialogs/popover-tip-align-2.png'
import popoverPointeralign3 from '../../img/dialogs/popover-tip-align-3.png'
import popoverPointeralignDo from '../../img/dialogs/popover-tip-align-do.png'
import popoverPointeralignDont from '../../img/dialogs/popover-tip-align-dont.png'

import popoverPointerDo from '../../img/dialogs/popover-tip-do.png'
import popoverPointerDont from '../../img/dialogs/popover-tip-dont.png'




export default {
  components: {
    YoutubeVideo,
    DSHeader,
    Tabs,
    popoverNotip,
    popoverPointer,
    popoverMobileSm,
    popoverMobileMd,
    popoverMobileLg,
    popoverTabletSm,
    popoverTabletMd,
    popoverTabletLg,
    popoverDesktopSm,
    popoverDesktopMd,
    popoverDesktopLg,
    popoverNotipAnatomy,
    popoverNotipAlignmentDo,
    popoverNotipAlignmentDont,
    popoverNotipDo,
    popoverNotipDont,
    popoverNotipDo2,
    popoverNotipDont2,
    popoverPointerAnatomy,
    popoverPointeralign,
    popoverPointeralign2,
    popoverPointeralign3,
    popoverPointeralignDo,
    popoverPointeralignDont,
    popoverPointerDo,
    popoverPointerDont
  },
  data () {
    return {
      headerImg: headerImg,
      popoverNotip: popoverNotip,
      popoverPointer: popoverPointer,
      popoverMobileSm:popoverMobileSm,
      popoverMobileMd:popoverMobileMd,
      popoverMobileLg:popoverMobileLg,
      popoverTabletSm:popoverTabletSm,
      popoverTabletMd:popoverTabletMd,
      popoverTabletLg:popoverTabletLg,
      popoverDesktopSm:popoverDesktopSm,
      popoverDesktopMd:popoverDesktopMd,
      popoverDesktopLg:popoverDesktopLg,
      popoverNotipAnatomy:popoverNotipAnatomy,
      popoverNotipAlignmentDo:popoverNotipAlignmentDo,
      popoverNotipAlignmentDont:popoverNotipAlignmentDont,
      popoverNotipDo:popoverNotipDo,
      popoverNotipDont:popoverNotipDont,
      popoverNotipDo2:popoverNotipDo2,
      popoverNotipDont2:popoverNotipDont2,
      popoverPointerAnatomy:popoverPointerAnatomy,
      popoverPointeralign:popoverPointeralign,
      popoverPointeralign2:popoverPointeralign2,
      popoverPointeralign3:popoverPointeralign3,
      popoverPointeralignDo:popoverPointeralignDo,
      popoverPointeralignDont:popoverPointeralignDont,
      popoverPointerDo:popoverPointerDo,
      popoverPointerDont:popoverPointerDont,
      htmlUsage: `<div class="dialog__wrapper">
  <button class="btn btn-secondary">Open Popover</button>
  <dialog>
    <h3>Dialog Content (Popover)</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  </dialog>
</div>

<span class="tooltip"><span class="tooltip__content"><strong>Popover title</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua.</span></span>
`,
      selected: 'tooltip',
      options: [
        { name: 'Default', id: 'tooltip' },
        { name: 'shift--left (mobile)', id: 'shift--left' },
        { name: 'shift--right (mobile)', id: 'shift--right' },
        { name: 'tooltip--top', id: 'tooltip--top' },
        { name: 'tooltip--top shift--left (mobile)', id: 'tooltip--top shift--left' },
        { name: 'tooltip--top shift--right (mobile)', id: 'tooltip--top shift--right' },
        { name: 'tooltip--left (tablet,desktop)', id: 'tooltip--left' },
        { name: 'tooltip--right (tablet,desktop)', id: 'tooltip--right' }
      ]
    }
  }
}
</script>