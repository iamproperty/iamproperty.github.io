<template>
  <main>
    <div class="container">
      <h1>Changelog</h1>
      
      <h2>V2.7.1 (future version)</h2>
      <ul>
        <li></li>
      </ul>
      <h3>Breaking changes</h3>
      <ul>
        <li>A change to the z-index values may cause some display issues with integrated systems.</li>
      </ul>
      <h2>V2.7.0 (current version)</h2>
      <ul>
        <li>Error page templates and error specific CSS</li>
        <li>Email templates and email specific CSS</li>
        <li>Dark mode</li>
        <li>PWA support added</li>
      </ul>
      <h3>Breaking changes</h3>
      <ul>
        <li>The way sass gets imported has changed to seperate out the forms files so that they dont have to be included into the email CSS.</li>
        <li>Some new sass features are being used this might cause issues for bespoke builds using older sass versions in the build.</li>
      </ul>

      <h2>V2.6.3</h2>
      <ul>
        <li>Update the default font awesome selector so it doesn't break older/existing font awesome usage.</li>
      </ul>
      <h2>V2.6.1</h2>
      <ul>
        <li>Update stepper hover states</li>
      </ul>
      <h2>V2.6.0</h2>
      <ul>
        <li>Print stylesheet</li>
      </ul>
      <h3>Breaking changes</h3>
      <ul>
        <li>Change for font's are inculded in the SASS files, this will mean nay bespoke SASS builds will need updating to include '_fonts'.</li>
      </ul>

      <h2>V2.5.1</h2>
      <ul>
        <li>Button selector fix</li>
      </ul>

      <h2>V2.5.0</h2>
      <ul>
        <li>Update icons and add font awesome support</li>
        <li>Alert component</li>
        <li>Add the ability to add a 'lazy' attribute to the Tab and accordion components, allowing for the content to then be lazy loaded.</li>
      </ul>

      <h2>V2.4.0</h2>
      <ul>
        <li>New stepper component</li>
      </ul>

      <h2>V2.3.3</h2>
      <ul>
        <li>Table component hotfix - Add the ability to add id's to table rows so that the vue component can connect to external JS.</li>
      </ul>

      <h2>V2.3.2 </h2>
      <ul>
        <li>Table component hotfix - Create a re-ordered event that gets dispatched when the user successfully re-orders a table.</li>
      </ul>

      <h2>V2.3.1</h2>
      <ul>
        <li>Accordion component hotfix</li>
      </ul>
      
      <h2>V2.3.0</h2>
      <ul>
        <li>Inline YouTube video support</li>
        <li>Fix for tabs component</li>
      </ul>

      <h2>V2.2.0</h2>
      <ul>
        <li>Documentation update</li>
        <li>Curved background CSS</li>
      </ul>
      
      <h3>Breaking changes</h3>
      <ul>
        <li>Update the type rules, the type scale has been increased on the headings which will possibly cause breaking layout changes.</li>
      </ul>
      
      <h2>V2.1.0</h2>
      <ul>
        <li>Updated modal component with focus entrapment feature and the ability to dock the modal left or right.</li>
        <li>Updated reboot CSS to make the footer sticky.</li>
        <li>Add tooltip CSS</li>
        <li>Add Chart components</li>
        <li>Update accordion component</li>
        <li>Add snapshot component</li>
      </ul>
      <!--
      <h3>Breaking changes</h3>
      <ul>
        <li></li>
      </ul>
      -->
      <h2>V2.0.1</h2>
      <p>Version 2 represents a restart to the design system with a different scope and function.</p>
      <h3>Breaking changes</h3>
      <ul>
        <li>The majority of the development dependencies within node.js have been updated.</li>
      </ul>
    </div>
    <div class="container">
      <h2>V1.0.14 (Not supported)</h2>
      <p>This is the latest version of the previous component library, a lot will change from this version to the next one.</p>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
