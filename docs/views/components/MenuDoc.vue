<script setup>
  import TrackEvents from '../TrackEvents.vue';
  import menuAnatomy from '../../img/menu-anatomy.png';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import Menu from '@/components/Menu/Menu.vue';
</script>
<template>
  <TrackEvents selector="iam-menu" :events="['open', 'closed']"></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Menu</h1>
    </DSHeader>

    <p class="lead">A list of options to help users navigate, or perform actions.</p>

    <h2>Anatomy</h2>

    <p>
      Menus contain 3 required parts (the trigger, container, and body) and 2 optional parts (the heading and breaker).
      When opened they overlay the content on screen and apply a drop shadow with a default colour of HEX #000000, 6px
      Y-axis and 12px blur with an opacity of 15%
    </p>

    <img :src="menuAnatomy" alt="" class="mb-3" />
    <ol class="mb-5">
      <li>UI trigger button</li>
      <li>Container</li>
      <li>Body: contains the content, could include items, text, links, icons, etc.</li>
      <li>Heading (optional): describes the category of items</li>
      <li>Breaker (optional): visually separates content</li>
    </ol>

    <h2>Behaviour</h2>

    <p>Menus can be opened by clicking/pressing the trigger i.e. a button, field or icon.</p>
    <p>
      For keyboard users the menu can be opened via space, enter, or using the up and down arrow keys when the trigger
      is focused.
    </p>
    <p>Menus can be dismissed in a variety of ways, depending on how it is built and its use case:</p>

    <ul class="mb-5">
      <li>UI trigger: users can dismiss the pop-up by clicking the UI trigger (button or alternative styling)</li>
      <li>Outside click: clicking outside the pop-up area should dismiss the pop-up</li>
      <li>
        User Interaction: Pop-ups may also be designed to be dismissed when users interact with specific elements within
        the pop-up. For example, if a pop-up includes a form, submitting the form could dismiss the pop-up.
      </li>
    </ul>

    <h3>Keyboard options</h3>

    <p>
      To make menus accessible for keyboard users, menus can be opened via space, enter, or using the up and down arrow
      keys when the trigger is focused.
    </p>
    <p>Menus can be dismissed in a variety of ways, depending on how it is built and its use case:</p>

    <ul class="mb-5">
      <li>UI trigger: users can dismiss the pop-up by pressing enter or space on the trigger when the menu is open</li>
      <li>Tab outside the menu: pressing tab to focus outside the menu</li>
      <li>Escape key: pressing the escape (Esc) key</li>
      <li>
        User interaction: Pop-ups may also be designed to be dismissed when users interact with specific elements within
        the pop-up. For example, if a pop-up includes a form, submitting the form could dismiss the pop-up.
      </li>
    </ul>

    <h2>Dimensions</h2>

    <h3>Widths</h3>
    <p>
      We can apply a fixed width to menus using classes. There are 3 fixed sizes, small: 10rem (160px), medium: 15rem
      (240px), and large: 20rem (320px).
    </p>
    <h4>Fixed</h4>

    <div class="col-end-3">
      <Menu class="menu--sm">
        <span>Heading (optional)</span>
        <button><i class="fa-regular fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-clone"></i> Duplicate</button>
        <hr />
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>
      <small class="mt-2 d-block pb-3">Small: 10rem (160px)<br /><code>.menu--sm</code></small>
    </div>

    <div class="col-start-4 col-end-7">
      <Menu class="menu--md">
        <span>Heading (optional)</span>
        <button><i class="fa-regular fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-clone"></i> Duplicate</button>
        <hr />
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>
      <small class="mt-2 d-block pb-3">Medium: 15rem (240px)<br /><code>.menu--md</code></small>
    </div>

    <div class="col-start-8">
      <Menu class="menu--lg">
        <span>Heading (optional)</span>
        <button><i class="fa-regular fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-clone"></i> Duplicate</button>
        <hr />
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>
      <small class="mt-2 d-block pb-3">Large: 20rem (320px)<br /><code>.menu--lg</code></small>
    </div>

    <h4>Fluid</h4>

    <p>Instead of a fixed width we can apply 2 fluid width options to the menu, hug and fill.</p>
    <ul class="mb-5">
      <li>Hug will hug the contents of the menu and make the menu the width of the widest content in the menu.</li>
      <li>Fill will match the width of the menu to the trigger, for example the width of the button or field.</li>
    </ul>

    <div class="container visualtest">
      <button class="btn btn-primary" popovertarget="actions" style="anchor-name: --actions">Actions <i class="fa-regular fa-chevron-down"></i></button>
      <Menu id="actions" popover style="position-anchor: --actions">
        <button><i class="fa-solid fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-clone"></i> Duplicate</button>
        <hr />
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>      
      
      <button class="btn btn-primary" popovertarget="actions2" style="anchor-name: --actions">Actions <i class="fa-regular fa-chevron-down"></i></button>
      <Menu id="actions2" class="menu--fill" popover style="position-anchor: --actions">
        <button><i class="fa-solid fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-clone"></i> Duplicate</button>
        <hr />
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>
    </div>

    <h3>Height</h3>

    <h4>Fixed</h4>

    <p>
      We can apply a fixed height to menus. There are 2 fixed sizes, small (12.5rem) and medium (25rem). We can either
      chose to use one of the fixed heights or apply a calculation to the menu to work out which of the sizes is most
      appropriate depending upon the spacing available.
    </p>

    <div class="container visualtest">
      <div class="md-col-end-4">
        <Menu class="menu--height-sm menu--md">
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr />
          <button><i class="fa-solid fa-trash"></i> Delete</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
        </Menu>
        <span class="d-block pt-3 mb-3"
          >Small: 12.5rem (200px)<br />
          <code>.menu--height-sm</code></span
        >
      </div>
      <div class="md-col-start-5">
        <Menu class="menu--height-lg menu--md">
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr />
          <button><i class="fa-solid fa-trash"></i> Delete</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
        </Menu>
        <span class="d-block pt-3 mb-3"
          >Large: 25rem (400px)<br />
          <code>.menu--height-lg</code></span
        >
      </div>
    </div>

    <h4>Fluid</h4>

    <p>
      We can apply a fluid height to menus. Fluid heights calculate the height of the menu by determining how much
      screen space is available above or below the menu (also taking into account any required spacing) then produces a
      menu which makes use of all the height available.
    </p>

    <div class="container visualtest bg-light mb-5" style="height: 100vh">
      <div class="md-col-start-5 md-col-end-9">
        <Menu class="menu--md">
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr />
          <button><i class="fa-solid fa-trash"></i> Delete</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
        </Menu>
      </div>
    </div>

    <h2>Positioning</h2>
    <p>
      The menu should always open where there is most space to do so. For example if you open the menu when the trigger
      is near the bottom/left of the page then the menu should open above/right of the trigger.
    </p>

    <label>
      Default Position
      <select>
        <option value="default">Default</option>
        <option value="left">Near left of page</option>
        <option value="right">Near right of page</option>
      </select>
    </label>
    <div id="positioning-wrapper" class="container visualtest bg-light mb-5" style="height: 20rem">
      <button class="btn btn-secondary btn-compact fa-ellipsis-vertical btn-sm" popovertarget="positioning">
        Lorum ipsum
      </button>
      <Menu id="positioning" popover="auto" popover-open>
        <button><i class="fa-regular fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-edit"></i> Duplicate</button>
        <hr />
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>
    </div>

    <h2>Scroll behaviour</h2>

    <p>
      If the contents of the menu exceed the height of the menu then the content should become scrollable. There should
      be 0.5rem (8px) padding between the content of the menu and the scrollbar.
    </p>

    <div class="container visualtest">
      <div class="md-col-end-4">
        <Menu class="menu--height-sm menu--md">
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr />
          <button><i class="fa-solid fa-trash"></i> Delete</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
        </Menu>
        <span class="d-block pt-3 mb-3"
          >Small: 12.5rem (200px)<br />
          <code>.menu--height-sm</code></span
        >
      </div>
      <div class="md-col-start-5">
        <Menu class="menu--height-lg menu--md">
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr />
          <button><i class="fa-solid fa-trash"></i> Delete</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
          <button><i class="fa-regular fa-plus"></i> Lorum ipsum</button>
        </Menu>
        <span class="d-block pt-3 mb-3"
          >Large: 25rem (400px)<br />
          <code>.menu--height-lg</code></span
        >
      </div>
    </div>

    <h2>Content examples</h2>

    <p>
      Menus can contain various different content but usually include some sort of items. Please see below some options
      for content within the menu alogn with recommended dimensions.
    </p>

    <h3>Default items</h3>

    <p>Default items are clickable items that usually perform actions like navigating, deleting, etc.</p>

    <div class="container visualtest">
      <Menu class="mb-3">
        <button><i class="fa-regular fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-edit"></i> Duplicate</button>
        <hr />
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>
    </div>

    <h4>States</h4>
    <div class="container visualtest pe-none">
      <div class="md-col-end-4 mb-3">
        <span class="d-block">DEFAULT</span>
        <Menu>
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr />
          <button><i class="fa-solid fa-trash"></i> Delete</button>
        </Menu>
      </div>
      <div class="md-col-start-5 md-col-end-9 mb-3">
        <span class="d-block">HOVER</span>
        <Menu>
          <button class="hover"><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr />
          <button><i class="fa-solid fa-trash"></i> Delete</button>
        </Menu>
      </div>
      <div class="md-col-start-10 md-col-end-13 mb-3">
        <span class="d-block">PRESSED</span>
        <Menu>
          <button class="active"><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr />
          <button><i class="fa-solid fa-trash"></i> Delete</button>
        </Menu>
      </div>
    </div>

    <h3>Selected items</h3>

    <p>Selectable items are used primarily in advanced selects to show which item is currently selected.</p>

    <div class="container visualtest">
      <Menu class="mb-3" multiple>
        <button class="selectable selected">1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
        <button class="selectable">1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
        <button class="selectable">1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
      </Menu>
    </div>

    <h4>States</h4>
    <div class="container visualtest pe-none">
      <div class="md-col-end-5 mb-3">
        <span class="d-block">DEFAULT</span>
        <Menu class="mb-3">
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
        </Menu>
      </div>
      <div class="md-col-start-6 md-col-end-10 mb-3">
        <span class="d-block">HOVER</span>
        <Menu class="mb-3">
          <button class="hover">1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
        </Menu>
      </div>
      <div class="md-col-start-1 md-col-end-5 mb-3">
        <span class="d-block">PRESSED</span>
        <Menu class="mb-3">
          <button class="active">1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
        </Menu>
      </div>

      <div class="md-col-start-6 md-col-end-10 mb-3">
        <span class="d-block">SELECTED DEFAULT</span>
        <Menu class="mb-3">
          <button class="selected">1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
        </Menu>
      </div>

      <div class="md-col-start-1 md-col-end-5 mb-3">
        <span class="d-block">SELECTED HOVER</span>
        <Menu class="mb-3">
          <button class="selected hover">1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
        </Menu>
      </div>

      <div class="md-col-start-6 md-col-end-10 mb-3">
        <span class="d-block">SELECTED ACTIVE</span>
        <Menu class="mb-3">
          <button class="selected active">1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT</button>
        </Menu>
      </div>
    </div>

    <h3>Radio button items</h3>
    <p>
      Radio button items are used when only one option at a time can be selected from a small list of items. For example
      for a filter.
    </p>

    <div class="container visualtest">
      <Menu class="mb-3">
        <label><input type="radio" name="radio-buttons" />All</label>
        <label><input type="radio" name="radio-buttons" />Not started</label>
        <label><input type="radio" name="radio-buttons" />In progress</label>
        <label><input type="radio" name="radio-buttons" />Complete</label>
      </Menu>
    </div>

    <h3>Checkbox items</h3>
    <p>
      Checkbox items are used when multiple options at a time can be selected from a small list of items. For example
      for a filter.
    </p>

    <div class="container visualtest">
      <Menu class="mb-3">
        <label><input type="checkbox" name="checkbox" indeterminate="" />All</label>
        <label><input type="checkbox" name="checkbox2" checked />Not started</label>
        <label><input type="checkbox" name="checkbox3" checked />In progress</label>
        <label><input type="checkbox" name="checkbox4" />Complete</label>
      </Menu>
    </div>

    <h3>Expandable items (extend)</h3>
    <p>Expandable items can be used to group items in a menu.</p>

    <h4>Extend</h4>
    <p>Expandable items extend the menu to show the options.</p>

    <div class="container visualtest">
      <Menu class="mb-3 menu--lg">
        <button><i class="fa-regular fa-upload"></i> Export as .CSV</button>
        <button><i class="fa-solid fa-share"></i> Share</button>
        <button><i class="fa-regular fa-sort"></i> Sort by</button>
        <Menu class="menu--lg">
          <button><i class="fa-regular fa-upload"></i> Export as .CSV</button>
          <button><i class="fa-solid fa-share"></i> Share</button>
          <button><i class="fa-regular fa-sort"></i> Sort by</button>
        </Menu>
      </Menu>
    </div>
    <h3>Popover</h3>

    <div class="container visualtest">
      <Menu class="mb-3 menu--lg">
        <button><i class="fa-regular fa-upload"></i> Export as .CSV</button>
        <button><i class="fa-solid fa-share"></i> Share</button>
        <button popovertarget="submenu"><i class="fa-regular fa-sort"></i> Sort by</button>
        <Menu id="submenu" class="menu--lg" popover>
          <button><i class="fa-regular fa-upload"></i> Export as .CSV</button>
          <button><i class="fa-solid fa-share"></i> Share</button>
          <button><i class="fa-regular fa-sort"></i> Sort by</button>
        </Menu>
      </Menu>
    </div>

    <h4>Behaviour</h4>

    <p>Clicking the expandable item or pressing space or enter on the keyboard should open the additional popover.</p>
    <p>The additional popover can be closed in a variety of ways:</p>
    <ul>
      <li>Expand trigger: users can dismiss the additional popover by clicking the expand item again</li>
      <li>Outside click: clicking outside the pop-up area should dismiss the pop over and initial menu</li>
      <li>
        User Interaction: clicking another item on the original menu should close the additional popover and open the
        other popover. Also clicking any item that closes the original menu should also close the additional popover.
      </li>
    </ul>
    <p>
      To make this popover accessible for keyboard users, menus can be opened via space, enter, or using the up and down
      arrow keys when the trigger is focused.
    </p>

    <p>Menus can be dismissed in a variety of ways, depending on how it is built and its use case:</p>

    <ul>
      <li>Expand trigger: users can dismiss the additional popover by pressing enter or space on expand item again</li>
      <li>Tab outside the menu: pressing tab to focus outside the additional popover</li>
      <li>Escape key: pressing the escape (Esc) key</li>
      <li>
        User interaction: pressing enter or space another item on the original menu should close the additional popover
        and open the other popover. Also pressing enter or space any item that closes the original menu should also
        close the additional popover.
      </li>
    </ul>

    <!-- Kept for testing purposes
    <button popovertarget="example" class="btn"><i class="fa-regular fa-sort"></i> Sort by</button>
    <Menu id="example" class="mb-3 menu--lg" popover>
      <button><i class="fa-regular fa-upload"></i> Export as .CSV</button>
      <button><i class="fa-solid fa-share"></i> Share</button>
      <button popovertarget="submenu2"><i class="fa-regular fa-sort"></i> Sort by</button>
      <Menu id="submenu2" class="menu--lg" popover>
        <button><i class="fa-regular fa-upload"></i> Export as .CSV</button>
        <button><i class="fa-solid fa-share"></i> Share</button>
        <button><i class="fa-regular fa-sort"></i> Sort by</button>
      </Menu>
    </Menu>
-->

    <Integration component="menu" componentName="iam-menu">
      <template #web-component>
        <pre><code>{{`<iam-menu class="mb-3 menu--lg">
  <button><i class="fa-regular fa-upload"></i> Export as .CSV</button>
  <button><i class="fa-solid fa-share"></i> Share</button>
</iam-menu>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Menu from '@/components/Menu/Menu.vue</script>
        
<Menu class="mb-3 menu--lg">
  <button><i class="fa-regular fa-upload"></i> Export as .CSV</button>
  <button><i class="fa-solid fa-share"></i> Share</button>
</Menu>
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
              <th>id</th>
              <td></td>
              <td>String</td>
              <td>Yes (needed to allow it to be opened via a button)</td>
              <td></td>
            </tr>
            <tr>
              <th>popover</th>
              <td></td>
              <td>Flag</td>
              <td>No</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #classes>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>.menu-sm</th>
              <td>Setes a width on the menu</td>
            </tr>
            <tr>
              <th>.menu-md</th>
              <td>Setes a width on the menu</td>
            </tr>
            <tr>
              <th>.menu-lg</th>
              <td>Setes a width on the menu</td>
            </tr>
            <tr>
              <th>.menu--height-sm</th>
              <td>Sets a height on the menu</td>
            </tr>
            <tr>
              <th>.menu--height-lg</th>
              <td>Sets a height on the menu</td>
            </tr>
            <tr>
              <th>.selectable (on the button)</th>
              <td>Allows for the button to have a selected class when clicked</td>
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
              <th>inner</th>
              <td>A container div</td>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>open</th>
              <td>When the menu is opened</td>
            </tr>
            <tr>
              <th>closed</th>
              <td>When the menu is closed</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #criteria>
        <ul>
          <li>The menu should be keyboard controllable</li>
          <li>Child buttons and input fields should be kept extendable via JavaScript events</li>
        </ul>
      </template>
      <template #data-layer>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>open</th>
              <td>When the menu is opened</td>
            </tr>
            <tr>
              <th>closed</th>
              <td>When the menu is closed</td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration>
    <Versions pdf="/pdfs/menu.pdf">
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
            <td>10.04.2025</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>

<style lang="scss" scoped>
  @use '../../../assets/sass/func' as *;

  #positioning-wrapper {
    position: relative;
  }

  [popovertarget='positioning'] {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
  }

  label:has(option[value='left']:checked) + #positioning-wrapper [popovertarget='positioning'] {
    top: 50%;
    left: 2rem;
  }

  label:has(option[value='right']:checked) + #positioning-wrapper [popovertarget='positioning'] {
    top: 50%;
    left: auto;
    right: 2rem;
  }
</style>
