<script setup>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import popoverPointer from '../../img/dialogs/popovers-pointer.png';



  import popoverPointerAnatomy from '../../img/dialogs/popover-pointer-anatomy.png';

  import popoverPointeralign from '../../img/dialogs/popover-tip-align.png';
  import popoverPointeralign2 from '../../img/dialogs/popover-tip-align-2.png';
  import popoverPointeralign3 from '../../img/dialogs/popover-tip-align-3.png';
  import popoverPointeralignDo from '../../img/dialogs/popover-tip-align-do.png';
  import popoverPointeralignDont from '../../img/dialogs/popover-tip-align-dont.png';

  import popoverPointerDo from '../../img/dialogs/popover-tip-do.png';
  import popoverPointerDont from '../../img/dialogs/popover-tip-dont.png';

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

  const selected = 'tooltip';
  const options = [
    { name: 'Default', id: 'tooltip' },
    { name: 'shift--left (mobile)', id: 'shift--left' },
    { name: 'shift--right (mobile)', id: 'shift--right' },
    { name: 'tooltip--top (all)', id: 'tooltip--top' },
    { name: 'tooltip--top shift--left (mobile)', id: 'tooltip--top shift--left' },
    { name: 'tooltip--top shift--right (mobile)', id: 'tooltip--top shift--right' },
    { name: 'tooltip--left (tablet,desktop)', id: 'tooltip--left' },
    { name: 'tooltip--right (tablet,desktop)', id: 'tooltip--right' },
  ];
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Tooltip</h1>
    </DSHeader>

    <div class="container">
      <p>
        The tooltip is visually attention-grabbing, with a pointer tip that visually indicates the association
        between the popover and its trigger. The trigger button is small and discreet, so as not to disrupt the content
        of the page.
      </p>

      <img :src="popoverPointer" alt="" loading="lazy" class="mb-5" />

      <h3>Anatomy</h3>

      <img :src="popoverPointerAnatomy" alt="" loading="lazy" class="mb-3" />
      <ol>
        <li>UI Trigger</li>
        <li>Container with pointer tip</li>
        <li>Title (lead text styles)</li>
        <li>Body: contains the content, could include text, links, icons, etc.</li>
      </ol>

      <h3>Dismissal</h3>

      <p>Pop ups can be dismissed in a variety of ways, depending on how it is built and its use case.</p>

      <p>
        <strong>UI trigger:</strong> users can dismiss the pop-up by clicking the UI trigger (button)<br />
        <strong>Outside Click:</strong> clicking outside the pop-up area should dismiss the pop-up<br />
        <strong>Escape Key:</strong> Allowing users to dismiss the pop-up by pressing the escape (Esc) key is a common
        convention. This is especially useful for keyboard-centric users who prefer to navigate without using a
        mouse.<br />
        <strong>User Interaction:</strong> Pop-ups may also be designed to be dismissed when users interact with
        specific elements within the pop-up. For example, if a pop-up includes a form, submitting the form could dismiss
        the pop-up.
      </p>

      <h3>Alignment</h3>

      <p>Popovers can be place to the top, right, left or bottom of their related content.</p>

      <img :src="popoverPointeralign" alt="" loading="lazy" class="mb-5" />

      <p>
        <strong>Shift:</strong> the popover shifts in order to remain in view of the visible area, with the pointer
        maintaining the context that the popover is attributed to.
      </p>

      <img :src="popoverPointeralign2" alt="" loading="lazy" class="mb-5" />

      <p class="note mb-4">
        <strong>Note:</strong> This desired bit of functionality will be done through using the shift classes for the
        smaller sized devices.
      </p>

      <div class="row">
        <div class="col-md-6">
          <img :src="popoverPointeralignDo" alt="" loading="lazy" class="mb-2" />
          <p><strong class="d-block text-complete">Do</strong> Align the pointer tip centre with the trigger button</p>
        </div>
        <div class="col-md-6">
          <img :src="popoverPointeralignDont" alt="" loading="lazy" class="mb-2" />
          <p>
            <strong class="d-block text-danger">Don't</strong> Don’t misalign the pointer tip with the trigger button
          </p>
        </div>
      </div>

      <h3>Behaviours</h3>

      <div class="row">
        <div class="col-md-6">
          <img :src="popoverPointerDo" alt="" loading="lazy" class="mb-2" />
          <p>
            <strong class="d-block text-complete">Do</strong> Make popovers short and to the point. Avoid large chunks
            of text in popovers. Too much text can cause cognitive overload, and users with smaller screens or who are
            zoomed in can lose their place.
          </p>
        </div>
        <div class="col-md-6">
          <img :src="popoverPointerDont" alt="" loading="lazy" class="mb-2" />
          <p>
            <strong class="d-block text-danger">Don't</strong> Avoid covering the element that the popover is attributed
            to, as it will lose its context.
          </p>
        </div>
      </div>
    </div>

    <div class="container visualtest tooltip-demo">
      <h3>The component</h3>
      <div class="form-control__wrapper">
        <label class="form-label visually-hidden" for="test1">Label</label>

        <select class="form-select" v-model="selected">
          <option v-for="option in options" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>

      <span :class="`tooltip hover ${selected}`" tabindex="0"><span class="tooltip__content">
          <strong>Popover title</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut
          labore et dolore magna aliqua.</span
        >
      </span>
    </div>
    <div class="container visualtest tooltip-demo">
      <h3>The component</h3>
      <div class="form-control__wrapper">
        <label class="form-label visually-hidden" for="test1">Label</label>

        <select class="form-select" v-model="selected">
          <option v-for="option in options" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>

        <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut
          labore et dolore magna aliqua." data-heading="Popover title">?
        </Tooltip>
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
      transform: translate(-50%, -50%);
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
