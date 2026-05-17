<script setup>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Popover from '@/components/Popover/Popover.vue';
  import Menu from '@/components/Menu/Menu.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import popoverNotip from '../../img/dialogs/popovers-notip.png';
  import popoverPointer from '../../img/dialogs/popovers-pointer.png';

  import popoverDesktopSm from '../../img/dialogs/popover-desktop-sm.png';
  import popoverDesktopMd from '../../img/dialogs/popover-desktop-md.png';
  import popoverDesktopLg from '../../img/dialogs/popover-desktop-lg.png';

  import popoverTabletSm from '../../img/dialogs/popover-tablet-sm.png';
  import popoverTabletMd from '../../img/dialogs/popover-tablet-md.png';
  import popoverTabletLg from '../../img/dialogs/popover-tablet-lg.png';
 
  import popoverMobileSm from '../../img/dialogs/popover-mobile-sm.png';
  import popoverMobileMd from '../../img/dialogs/popover-mobile-md.png';
  import popoverMobileLg from '../../img/dialogs/popover-mobile-lg.png';

  import popoverNotipAnatomy from '../../img/dialogs/popover-notip-anatomy.png';

  import popoverNotipAlignmentDo from '../../img/dialogs/popover-notip-alignment-do.png';
  import popoverNotipAlignmentDont from '../../img/dialogs/popover-notip-alignment-dont.png';

  import popoverNotipDo from '../../img/dialogs/popover-notip-do.png';
  import popoverNotipDont from '../../img/dialogs/popover-notip-dont.png';
  import popoverNotipDo2 from '../../img/dialogs/popover-notip-do-2.png';
  import popoverNotipDont2 from '../../img/dialogs/popover-notip-dont-2.png';



  import PopoverLists from '../popoverLists.vue';

  const htmlUsage = `<div class="dialog__wrapper">
  <button class="btn btn-secondary">Open Popover</button>
  <dialog>
    <h3>Dialog Content (Popover)</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  </dialog>
</div>

<span class="tooltip"><span class="tooltip__content"><strong>Popover title</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua.</span></span>
`;


  import Integration from '../Integration.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Popovers</h1>
    </DSHeader>

    <p class="lead">
      A popover is layer that appears above other content onscreen when people click or tap a control or interactive
      area.
    </p>
    <h2>Overview</h2>

    <p>
      Popovers are visually discreet and unobtrusive elements commonly used in user interfaces to provide a more
      focused and intuitive experience by presenting relevant information or options in a compact and easily
      dismissible manner. It provides extra options or details without interrupting the user workflow. Only one
      popover can appear at a time and can contain varying text and interactive elements.
    </p>

    <table>
      <thead>
        <tr>
          <th><i class="fa-solid fa-check-circle text-success colour-primary"></i> How to use</th>
          <th><i class="fa-solid fa-times-circle text-danger"></i> How not to use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Use popovers for non-critical information:</strong> Popovers are intended to provide additional
            contextual information or options related to a specific element.
          </td>
          <td>
            <strong>Don’t use overlays with popovers:</strong> Overlays disable the page and prevent users from
            performing other task. If you are displaying critical information, consider using a modal instead.
          </td>
        </tr>
        <tr>
          <td>
            <strong>Make popovers clear and concise:</strong> Avoid large amounts of text, it can overload the user
            with irrelevant information and mobile users can lose visibility of the page.
          </td>
          <td>
            <strong>Don’t cover attributed elements:</strong> Try to avoid the popover covering the element the
            popover is attributed to as it will lose context, e.g. headings, form labels.
          </td>
        </tr>
        <tr>
          <td>
            <strong>Keep popovers in view until dismissed:</strong> Dismissal methods may vary, users may click the UI
            trigger again, click the surrounding area around the popover or dismiss it directly with an ‘X’ button.
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>

    
    <h2>Popover variants</h2>

    <div class="row">
      <div class="col-md-6 pb-2">
        <img :src="popoverNotip" alt="" loading="lazy" />
        <span class="text-primary d-block p-2 text-center">No tip</span>
      </div>
      <div class="col-md-6">
        <img :src="popoverPointer" alt="" loading="lazy" />
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
          <td>
            When a trigger button has a visually defined down state or active state, such as a distinct visual change
            (e.g. colour change, shading, or indentation) when it is pressed or activated, the popover that appears
            may not require an additional arrow-like tip to indicate its association with the button.
          </td>
        </tr>
        <tr>
          <td>Pointer</td>
          <td>
            Popovers with a pointer tip should be used to help show the relationship between the popover and where it
            was triggered from.
          </td>
        </tr>
      </tbody>
    </table>
  

    <h2>Dimensions</h2>


    <h3>Padding</h3>
    
    <p>The default popover should contain a minimum of 0.5rem (8px) internal padding.</p>

    <button class="btn btn-secondary active" popovertarget="popover" popovertargetaction="toggle" aria-pressed="true" style="anchor-name: --button-padding;">Open Popover</button>
    <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s,
    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s,
    </p>
    
    <Popover id="popover-padding" data-open style="position-anchor: --button-padding; display: flex; position-try-fallbacks: unset;">
        
          
      <h3>Heading (Optional)</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      </p>
      
    </Popover>



    <h3>Width</h3>

    <h4>Fixed</h4>
    
    <p>We can apply a fixed width to popovers using columns. There are 3 fixed sizes, small: 10rem (160px), medium: 15rem (240px), and large: 20rem (320px).</p>

    <div class="col-end-3">
      <Popover class="popover--sm" data-open style="display: flex; position: relative;">
        
        <h3>Heading (Optional)</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
        
      </Popover>

      <small class="mt-2 d-block pb-3">Small: 10rem (160px)<br /><code>.popover--sm</code></small>
    </div>

    <div class="col-start-4 col-end-7">
      <Popover class="popover--md" data-open style="display: flex; position: relative;">
        
        <h3>Heading (Optional)</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
        
      </Popover>
      <small class="mt-2 d-block pb-3">Medium: 15rem (240px)<br /><code>.popover--md</code></small>
    </div>

    <div class="col-start-8">
      <Popover class="popover--lg" data-open style="display: flex; position: relative;">
        
        <h3>Heading (Optional)</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
        
      </Popover>
      <small class="mt-2 d-block pb-3">Large: 20rem (320px)<br /><code>.popover--lg</code></small>
    </div>


    <h4>Fluid</h4>

    <p>Instead of a fixed width we can apply 2 fluid width options to the popover, hug and fill.</p>
    <ul>
      <li>Hug will hug the contents of the popover and make the popover the width of the widest content in the popover</li>
      <li>Fill will match the width of the popover to the trigger, for example the width of the button or field.</li>
    </ul>


    <div class="col-end-3">
      <p>Hug - Popover hugs the content within it</p>
      <button class="btn btn-primary active" popovertarget="popover-fluid" popovertargetaction="toggle" aria-pressed="true" style="anchor-name: --button-fluid;">Action</button>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
        </p>
        <Popover id="popover-fluid" data-open style="position-anchor: --button-fluid; display: flex; position-try-fallbacks: unset;">
        
          <p>
            Edit<br/>
            Duplicate
          </p>
          
        </Popover>
    </div>

    <div class="col-start-4 col-end-8">
      <p>Fill - Popover hugs the content within it</p>
      <button class="btn btn-primary active" popovertarget="popover-fluid2" popovertargetaction="toggle" aria-pressed="true" style="anchor-name: --button-fluid3;">Action</button>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
        </p>
        <Popover id="popover-fluid2" class="popover--fill" data-open style="position-anchor: --button-fluid3; display: flex; position-try-fallbacks: unset;">
        
          <p>
            Edit<br/>
            Duplicate
          </p>
          
        </Popover>
    </div>


    
    <h3>Height</h3>


    
    <h4>Fixed</h4>

    <p>We can apply a fixed height to popovers. There are 2 fixed sizes, small (12.5rem) and medium (25rem). We can either chose to use one of the fixed heights or apply a calculation to the menu to work out which of the sizes is most appropriate depending upon the spacing available.</p>
    
    <h4>Fluid</h4>



    <p>We can apply a fluid height to popovers. 3luid heights calculate the height of the popover by determining how much screen space is available above or below the popover (also taking into account any required spacing) then produces a popover which makes use of all the height available.</p>


    <div class="container">
      <h2>No tip</h2>

      <p>
        No tip popovers have a trigger button that has a visually defined down state or active state. They align with
        the trigger button and don’t need a pointer to define their relationship to the trigger button. They are
        designed to be visually discreet and unobtrusive, allowing the main content and trigger element to remain
        prominent.
      </p>

      <div class="row">
        <div class="col-sm-9 col-md-6">
          <figure>
            <img :src="popoverNotip" alt="" loading="lazy" />
            <figcaption class="pt-2 pb-3">
              No tip popover amongst page content. Trigger button is prominent without distracting from main page
              content.
            </figcaption>
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

      <p>
        <strong>UI trigger:</strong> users can dismiss the pop-up by clicking the UI trigger (button or alternative
        styling)<br />
        <strong>Outside Click:</strong> clicking outside the pop-up area should dismiss the pop-up<br />
        <strong>Escape Key:</strong> Allowing users to dismiss the pop-up by pressing the escape (Esc) key is a common
        convention. This is especially useful for keyboard-centric users who prefer to navigate without using a
        mouse.<br />
        <strong>User Interaction:</strong> Pop-ups may also be designed to be dismissed when users interact with
        specific elements within the pop-up. For example, if a pop-up includes a form, submitting the form could dismiss
        the pop-up.
      </p>

      <h3>Alignment</h3>

      <div class="row">
        <div class="col-md-6">
          <img :src="popoverNotipAlignmentDo" alt="" loading="lazy" class="mb-2" />
          <p>
            <strong class="d-block text-complete">Do</strong> Align popover flush with UI trigger on at least one side.
          </p>
        </div>
        <div class="col-md-6">
          <img :src="popoverNotipAlignmentDont" alt="" loading="lazy" class="mb-2" />
          <p>
            <strong class="d-block text-danger">Don't</strong> Don’t arbitrarily place the popover around the UI
            trigger.
          </p>
        </div>
      </div>

      <h3>Behaviours</h3>

      <div class="row">
        <div class="col-md-6">
          <img :src="popoverNotipDo" alt="" loading="lazy" class="mb-2" />
          <p>
            <strong class="d-block text-complete">Do</strong> Use selected and hover/focus states to distinguish
            elements in the popover and assist the user. Designer note: The UI trigger is set, I guess it’s down to
            specific use?? Follow your heart &#10084;
          </p>
        </div>
        <div class="col-md-6">
          <img :src="popoverNotipDont" alt="" loading="lazy" class="mb-2" />
          <p>
            <strong class="d-block text-danger">Don't</strong> Over use the button component in one area - use
            alternative UI trigger styling styling where appropriate
          </p>
        </div>
        <div class="col-md-6">
          <img :src="popoverNotipDo2" alt="" loading="lazy" class="mb-2" />
          <p>
            <strong class="d-block text-complete">Do</strong> Be mindful oh how content in a popover will stack on
            mobile. Limit actions to be performed in a popover. If you require more extensive or complex user actions,
            consider using a component like a <a href="/components/modal">Modal</a>.
          </p>
        </div>
        <div class="col-md-6">
          <img :src="popoverNotipDont2" alt="" loading="lazy" class="mb-2" />
          <p>
            <strong class="d-block text-danger">Don't</strong> Have content with a higher position than the popover. The
            popover should over lay page content - with the exception of critical components like navigation.
          </p>
        </div>
      </div>
    </div>


    <div class="container">
      <h3>Menu</h3>
      <p>Menus have a trigger button that has a visually defined down state or active state. They align with the trigger button and don’t need a pointer to define their relationship to the trigger button. They are designed to be visually discreet and unobtrusive, allowing the main content and trigger element to remain prominent.</p>
    </div>

    <div class="container visualtest">
      <PopoverLists></PopoverLists>
    </div>
    <div class="container mb-5">
      <p>Menu amongst page content. Trigger button is prominent without distracting from main page content.</p>
      <a href="/components/menu" class="btn btn-primary">Menu component <i class="fa-regular fa-up-right-from-square"></i></a>
    </div>
    
    <Integration component="Popover" componentName="iam-popover">
      <template #web-component>
        <pre><code>{{`<iam-popover>
  <p>...</p>
</iam-modal>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Popover from '@/components/Popover/Popover.vue</script>
        
<Popover>
  <p>...</p>
</Popover>
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
              <th>ID</th>
              <td></td>
              <td>String</td>
              <td>Yes</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #dispatched-events>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>openModal</td>
            <td>
              Element with the <code>data-modal</code> attribute is clicked,<br />
              Button with a parent of <code>dialog__wrapper</code> is clicked while the target modal is closed
            </td>
            <td>The modal ID</td>
          </tr>
          <tr>
            <td>closeModal</td>
            <td>
              Button with the class of <code>dialog__close</code> is clicked,<br />
              Button with the <code>formmethod</code> attribute of <code>dialog</code> is clicked,<br />
              While a <code>dialog</code> is open and the backdrop is clicked,<br />
              Button with a parent of <code>dialog__wrapper</code> is clicked while the target modal is open
            </td>
            <td>The modal ID</td>
          </tr>
          <tr>
            <td>agreed</td>
            <td>
              The primary button is pressed on the transactional and acknowledgement modals
            </td>
            <td>The modal ID</td>
          </tr>
          </tbody>
        </table>
      </template>

      
    </Integration>



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
              <td>V1.6</td>
              <td>06.08.2025</td>
              <td>- Updated the dimensions to align with behaviour for menus<br/> - Replaced list item popover with link to the new menus componen<br/> - Added new trigger and dismiss behaviour for pointer</td>
            </tr>
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



