<script setup>
import menuAnatomy from "../../img/menu-anatomy.png";
</script>
<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Menu</h1>
    </DSHeader>

    <p class="lead">A list of options to help users navigate, or perform actions.</p>

    <h2>Anatomy</h2>

    <p>Menus contain 3 required parts (the trigger, container, and body) and 2 optional parts (the heading and breaker). When opened they overlay the content on screen and apply a drop shadow with a default colour of HEX #000000, 6px Y-axis and 12px blur with an opacity of 15%</p>

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
    <p>For keyboard users the menu can be opened via space, enter, or using the up and down arrow keys when the trigger is focused.</p>
    <p>Menus can be dismissed in a variety of ways, depending on how it is built and its use case:</p>

    <ul class="mb-5">
      <li>UI trigger: users can dismiss the pop-up by clicking the UI trigger (button or alternative styling)</li>
      <li>Outside click: clicking outside the pop-up area should dismiss the pop-up</li>
      <li>User Interaction: Pop-ups may also be designed to be dismissed when users interact with specific elements within the pop-up. For example, if a pop-up includes a form, submitting the form could dismiss the pop-up.</li>
    </ul>

    <h3>Keyboard options</h3>

    <p>To make menus accessible for keyboard users, menus can be opened via space, enter, or using the up and down arrow keys when the trigger is focused.</p>
    <p>Menus can be dismissed in a variety of ways, depending on how it is built and its use case:</p>

    <ul class="mb-5">
      <li>UI trigger: users can dismiss the pop-up by pressing enter or space on the trigger when the menu is open</li>
      <li>Tab outside the menu: pressing tab to focus outside the menu</li>
      <li>Escape key: pressing the escape (Esc) key</li>
      <li>User interaction: Pop-ups may also be designed to be dismissed when users interact with specific elements within the pop-up. For example, if a pop-up includes a form, submitting the form could dismiss the pop-up.</li>
    </ul>

    <h2>Dimensions</h2>

    <h3>Widths</h3>
    <p>We can apply a fixed width to menus using classes. There are 3 fixed sizes, small: 10rem (160px), medium: 15rem (240px), and large: 20rem (320px).</p>
    <h4>Fixed</h4>

    <div class="col-end-3">
      <Menu class="menu--sm">
        <span>Heading (optional)</span>
        <button><i class="fa-regular fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-clone"></i> Duplicate</button>
        <hr/>
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>
      <small class="mt-2 d-block pb-3">Small: 10rem (160px)<br/><code>.menu--sm</code></small>
      
    </div>


    <div class="col-start-4 col-end-7">
      <Menu class="menu--md">
        <span>Heading (optional)</span>
        <button><i class="fa-regular fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-clone"></i> Duplicate</button>
        <hr/>
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>
      <small class="mt-2 d-block pb-3">Medium: 15rem (240px)<br/><code>.menu--md</code></small>
    </div>

    <div class="col-start-8">
      <Menu class="menu--lg">
        <span>Heading (optional)</span>
        <button><i class="fa-regular fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-clone"></i> Duplicate</button>
        <hr/>
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>
      <small class="mt-2 d-block pb-3">Large: 20rem (320px)<br/><code>.menu--lg</code></small>
    </div>

    <h4>Fluid</h4>
    
    <p>Instead of a fixed width we can apply 2 fluid width options to the menu, hug and fill.</p>
    <ul class="mb-5">
      <li>Hug will hug the contents of the menu and make the menu the width of the widest content in the menu.</li>
      <li>Fill will match the width of the menu to the trigger, for example the width of the button or field.</li>
    </ul>


    <div class="container visualtest">
      <button class="btn btn-primary" popovertarget="actions" style="anchor-name: --actions;">Actions <i class="fa-regular fa-chevron-down"></i></button>
      <Menu id="actions" popover style="position-anchor: --actions;">
        <button><i class="fa-regular fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-edit"></i> Duplicate</button>
        <hr/>
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>

    </div>



    <h3>Height</h3>

    <h4>Fixed</h4>

    <p>We can apply a fixed height to menus. There are 2 fixed sizes, small (12.5rem) and medium (25rem). We can either chose to use one of the fixed heights or apply a calculation to the menu to work out which of the sizes is most appropriate depending upon the spacing available.</p>

    <div class="container visualtest">

      <div class="md-col-end-4">

        <Menu class="menu--height-sm menu--md">
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr/>
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
        <span class="d-block pt-3 mb-3">Small: 12.5rem (200px)<br/>
        <code>.menu--height-sm</code></span>

      </div>
      <div class="md-col-start-5">

        <Menu class="menu--height-lg menu--md">
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr/>
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
        <span class="d-block pt-3 mb-3">Large: 25rem (400px)<br/>
        <code>.menu--height-lg</code></span>
      </div>
    </div>
    
    <h4>Fluid</h4>

    <p>We can apply a fluid height to menus. Fluid heights calculate the height of the menu by determining how much screen space is available above or below the menu (also taking into account any required spacing) then produces a menu which makes use of all the height available.</p>


    
    <div class="container visualtest bg-light mb-5" style="height: 100vh;">

      <div class="md-col-start-5 md-col-end-9">

        <Menu class="menu--md">
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr/>
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
    <p>The menu should always open where there is most space to do so. For example if you open the menu when the trigger is near the bottom/left of the page then the menu should open above/right of the trigger.</p>
    
    <label>
      Default Position
      <select>
        <option value="default">Default</option>
        <option value="left">Near left of page</option>
        <option value="right">Near right of page</option>
      </select>
    </label>
    <div id="positioning-wrapper" class="container visualtest bg-light mb-5" style="height: 20rem;">

      <button class="btn btn-secondary btn-compact fa-ellipsis-vertical btn-sm" popovertarget="positioning">Lorum ipsum</button>
      <Menu id="positioning" popover="auto" popover-open>
        <button><i class="fa-regular fa-edit"></i> Edit</button>
        <button><i class="fa-solid fa-edit"></i> Duplicate</button>
        <hr/>
        <button><i class="fa-solid fa-trash"></i> Delete</button>
      </Menu>
    </div>

    <h2>Scroll behaviour</h2>

    <p>If the contents of the menu exceed the height of the menu then the content should become scrollable. There should be 0.5rem (8px) padding between the content of the menu and the scrollbar.</p>

    <div class="container visualtest">

      <div class="md-col-end-4">

        <Menu class="menu--height-sm menu--md">
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr/>
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
        <span class="d-block pt-3 mb-3">Small: 12.5rem (200px)<br/>
        <code>.menu--height-sm</code></span>

      </div>
      <div class="md-col-start-5">

        <Menu class="menu--height-lg menu--md">
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr/>
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
        <span class="d-block pt-3 mb-3">Large: 25rem (400px)<br/>
        <code>.menu--height-lg</code></span>
      </div>
    </div>

    <h2>Content examples</h2>

    <p>Menus can contain various different content but usually include some sort of items. Please see below some options for content within the menu alogn with recommended dimensions.</p>

    <h3>Default items</h3>

    <p>Default items are clickable items that usually perform actions like navigating, deleting, etc.</p>


    <Menu class="mb-3">
      <button><i class="fa-regular fa-edit"></i> Edit</button>
      <button><i class="fa-solid fa-edit"></i> Duplicate</button>
      <hr/>
      <button><i class="fa-solid fa-trash"></i> Delete</button>
      
    </Menu>

    <h4>States</h4>
    <div class="container visualtest pe-none">

      <div class="md-col-end-4 mb-3">
        <span class="d-block">DEFAULT</span>
        <Menu>
          <button><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr/>
          <button><i class="fa-solid fa-trash"></i> Delete</button>
          
        </Menu>

      </div>
      <div class="md-col-start-5 md-col-end-9 mb-3">
        <span class="d-block">HOVER</span>
        <Menu>
          <button class="hover"><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr/>
          <button><i class="fa-solid fa-trash"></i> Delete</button>
          
        </Menu>

      </div>
      <div class="md-col-start-10 md-col-end-13 mb-3">
        <span class="d-block">PRESSED</span>
        <Menu>
          <button class="active"><i class="fa-regular fa-edit"></i> Edit</button>
          <button><i class="fa-solid fa-edit"></i> Duplicate</button>
          <hr/>
          <button><i class="fa-solid fa-trash"></i> Delete</button>
          
        </Menu>

      </div>
    </div>

    <h3>Selected items</h3>

    <p>Selectable items are used primarily in advanced selects to show which item is currently selected.</p>


    <Menu class="mb-3" multiple>
      <button class="selectable selected">1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
      <button class="selectable">1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
      <button class="selectable">1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
    </Menu>

    <h4>States</h4>
    <div class="container visualtest pe-none">

      <div class="md-col-end-5 mb-3">
        <span class="d-block">DEFAULT</span>
        <Menu class="mb-3">
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
        </Menu>

      </div>
      <div class="md-col-start-6 md-col-end-10 mb-3">
        <span class="d-block">HOVER</span>
        <Menu class="mb-3">
          <button class="hover">1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
        </Menu>

      </div>
      <div class="md-col-start-1 md-col-end-5 mb-3">
        <span class="d-block">PRESSED</span>
        <Menu class="mb-3">
          <button class="active">1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
        </Menu>
      </div>

      <div class="md-col-start-6 md-col-end-10 mb-3">
        <span class="d-block">SELECTED DEFAULT</span>
        <Menu class="mb-3">
          <button class="selected">1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
        </Menu>
      </div>

      <div class="md-col-start-1 md-col-end-5 mb-3">
        <span class="d-block">SELECTED HOVER</span>
        <Menu class="mb-3">
          <button class="selected hover">1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
        </Menu>
      </div>

      <div class="md-col-start-6 md-col-end-10 mb-3">
        <span class="d-block">SELECTED ACTIVE</span>
        <Menu class="mb-3">
          <button class="selected active">1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
          <button>1 Oak Road, Newcastle upon Tyne, NE1 6QT </button>
        </Menu>
      </div>


    </div>


    <h3>Radio button items</h3>
    <p>Radio button items are used when only one option at a time can be selected from a small list of items. For example for a filter.</p>

    <Menu class="mb-3">
      <label><input type="radio" name="radio-buttons" />All</label>
      <label><input type="radio" name="radio-buttons" />Not started</label>
      <label><input type="radio" name="radio-buttons" />In progress</label>
      <label><input type="radio" name="radio-buttons" />Complete</label>
    </Menu>


    <h3>Checkbox items</h3>
    <p>Checkbox items are used when multiple options at a time can be selected from a small list of items. For example for a filter.</p>


    <Menu class="mb-3">
      <label><input type="checkbox" name="checkbox" indeterminate="" />All</label>
      <label><input type="checkbox" name="checkbox2" checked />Not started</label>
      <label><input type="checkbox" name="checkbox3" checked />In progress</label>
      <label><input type="checkbox" name="checkbox4" />Complete</label>
    </Menu>


    <h3>Expandable items (extend)</h3>
    <p>Expandable items can be used to group items in a menu.</p>

    <h4>Extend</h4>
    <p>Expandable items extend the menu to show the options.</p>


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

    <h3>Popover</h3>


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

    <div class="container visualtest">
      <button class="btn btn-secondary" popovertarget="my-menu">Menu</button>

      <Menu id="my-menu" popover>
        <button><i class="fa-regular fa-eye"></i> Action 1</button>
        <button>Action 1</button>
        <button>Action 1</button>
        <button>Action 1</button>
        <a href="/components/menu">Link 1</a>
        <hr />
        <details>
          <summary class="fa-regular fa-arrow-down">Menu</summary>
          <button>Action 1</button>
          <button>Action 1</button>
          <button>Action 1</button>
        </details>
        <a href="/components/menu">Link 2</a>

        <button popovertarget="sub-menu" class="fa-regular fa-arrow-right">Menu</button>
        <Menu id="sub-menu" popover>
          <button>Action 1</button>
          <button>Action 1</button>
          <button>Action 1</button>
        </Menu>
      </Menu>
    </div>

    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h3>Web component</h3></summary>
        </details>
        <details>
          <summary><h3>Vue component</h3></summary>
        </details>
        <!--
        <details>
          <summary><h3>HTML</h3></summary>
          <pre><code class="javascript">{{`<div class="container"></div>`}}</code></pre>
        </details>
      -->
      </Tabs>
    </div>
    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Design System Version</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>V1 added</td>
              <td>23.08.2023</td>
              <td>v3.7.10</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/actionbar.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @use '../../../assets/sass/func' as *;


  #positioning-wrapper {
    position: relative;
  }


  [popovertarget="positioning"] {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
  }

  label:has(option[value="left"]:checked) + #positioning-wrapper [popovertarget="positioning"] {

  top: 50%;
  left: 2rem;
  }

  label:has(option[value="right"]:checked) + #positioning-wrapper [popovertarget="positioning"] {

    top: 50%;
    left: auto;
    right: 2rem;
  }




</style>

<script>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Menu from '@/components/Menu/Menu.vue';

  export default {
    components: {
      DSHeader,
      Menu,
      Tabs,
    },
    data() {
      return {
        headerImg: headerImg,
      };
    },
    mounted() {},
  };
</script>
