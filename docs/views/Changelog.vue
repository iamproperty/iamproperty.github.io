<template>
  <main>
    <div class="container">
      <h1>Changelog</h1>

      <h2>V5.4.0</h2>
      <ul>
        <li>Update the Nav component for greater configuration</li>
      </ul>

      <h3>Breaking changes</h3>
      <ul>
        <li>Tabs classes are now only available using the tabs component</li>
        <li>Some Sass/CSS file names have changed or moved</li>
      </ul>

      <h2>V5.1.0</h2>
      <ul>
        <li>Tidy up and reduce the file size of the core CSS' with some CSS moved into seperate files loaded via the component associated.</li>
        <li>Developers can now add links into the tabs component to create a secondary nav component looking like the tabs</li>
        <li>Remove the need to put content into a .container div</li>
      </ul>

      <h3>Breaking changes</h3>
      <ul>
        <li>Tabs classes are now only available using the tabs component</li>
        <li>Some Sass/CSS file names have changed or moved</li>
      </ul>

      <h2>V5.0.0</h2>
      <ul>
        <li>Re-introduce elements section</li>
        <li>Add CSS layers</li>
        <li>Dynamic Events</li>
      </ul>

      <h3>Breaking changes</h3>
      <ul>
        <li>Some Sass/CSS file names have changed</li>
      </ul>

      <h2>V4.1.0</h2>
      <ul>
        <li>Lots of changes ad fixes for the forms</li>
        <li>Updated Tables</li>
        <li>Updated Pagination</li>
        <li>Updated Navbar</li>
        <li>Collapsible side menu</li>
      </ul>

      <h3>Breaking changes</h3>
      <ul>
        <li>Any where the table component is used requires that the pagination component JS is loaded</li>
      </ul>


      <h2>V4.0.0</h2>
      <ul>
        <li>Action bar component</li>
        <li>Updated Navbar</li>
        <li>Collapsible side menu</li>
      </ul>

      <h3>Breaking changes</h3>
      <ul>
        <li>To use the old navbar CSS or SCSS files you will need to update the filename to nav.old.scss or nav.old.css.</li>
      </ul>


      <h2>V3.8.0</h2>
      <ul>
        <li>New action button variant</li>
        <li>Checkbox documentation</li>
        <li>Popover lists variants</li>
      </ul>

      <h2>V3.7.9</h2>
      <ul>
        <li>Multi-step modal component updated to display full width on mobile.</li>
        <li>Update the ajax table functionality so we can take ajax responses and display the meta data values on the page.</li>
      </ul>


      <h2>V3.7.8</h2>

      <ul>
        <li>Form inputs (removal of bootstrap classes)</li>
        <li>Form radio buttons</li>
        <li>Form checkboxes</li>
        <li>Form file upload</li>
      </ul>

      <h3>Breaking changes</h3>
      <ul>
        <li>Updating the form inputs could cause issues with other compoonents especiialy since not all of the input field varients have been reviewed yet.</li>
      </ul>


      <h2>V3.7.7</h2>
      <ul>
        <li>Bug fixed to always recreate cta width on table</li>
        <li>Allow flags to be shown on the cards</li>
        <li>Update the status icons</li>
      </ul>

      <h2>V3.7.6</h2>
      <ul>
        <li>Table bug fixes</li>
      </ul>

      <h2>V3.7.5</h2>
      <ul>
        <li>System Notification components (Alert,inline and toasts)</li>
        <li>Bug fixes</li>
      </ul>

      <h3>Breaking changes</h3>
      <ul>
        <li>Vue alert component has been depreciated and replaced with the notifications component</li>
      </ul>

      <h2>V3.7.4</h2>
      <ul>
        <li>Popovers</li>
        <li>Update table status icons</li>
      </ul>

      <h3>Breaking changes</h3>
      <ul>
        <li>Some of the dialog utility classes have changed</li>
      </ul>

      <h2>V3.7.3</h2>
      <ul>
        <li>Minor non-breaking bug fixes</li>
      </ul>

      <h2>V3.7.2</h2>
      <ul>
        <li>Updates to the ajax table functionality to include cancelling old fetches, allow for columns to write from an array returned in the json and better config for empty table messages.</li>
      </ul>

      <h2>V3.7.1</h2>
      <ul>
        <li>Updates to the ajax table functionality</li>
      </ul>

      <h2>V3.7.0</h2>
      <ul>
        <li>Update icons to just use font awesome ones</li>
        <li>Update the dialogs</li>
        <li>Bug fixes</li>
      </ul>

      <h3>Breaking changes</h3>
      <ul>
        <li>The dialog javaScript is split out into a new fill and requires a new function to be called on the body.</li>
        <li>Old SVG icons have been removed</li>
      </ul>

      <h2>V3.6.0</h2>
      <ul>
        <li>Major overhaul of the colours</li>
        <li>Dark mode support added</li>
        <li>High contrast mode support started</li>
        <li>Update to Admin panels documentation</li>
        <li>Minor button amends</li>
        <li>Update to dialog (modal / popover) documentation</li>
        <li>Update to dialog style, max height and width</li>
        <li>Update to Cards component when icon is included</li>
      </ul>

      <h3>Breaking changes</h3>
      <ul>
        <li>Updates to the colors should not break if they have been implented correctly. But if Sass variables have been used some of the names may have changed.</li>
      </ul>

      <h2>V3.5</h2>
      <ul>
        <li>New way of loading bootstrap</li>
        <li>Redesigned Admin panels</li>
        <li>Redesigned buttons and links</li>
      </ul>

      <h2>V3.4.7</h2>
      <ul>
        <li>Applied filters component</li>
        <li>Filter list component</li>
        <li>Update the modal component to use a dialog element</li>
        <li>Implement the datalayer</li>
        <li>New card custom element</li>
        <li>Removal of the card deck vue component</li>
        <li>New table custom element</li>
      </ul>

      <h2>V3.4.6</h2>
      <h3>Native web components introduced</h3>
      <p>See https://iamproperty.atlassian.net/wiki/spaces/FEG/blog/2023/04/13/218759184/Exploring+Native+web+components for information</p>
      <ul>
        <li>Transform Accordions, Tabs and header components into custom elements</li>
        <li>Vue wrappers for the 3 components</li>
        <li>New documentation for the web components</li>
        <li>New test html pages to test the components without Vue</li>
      </ul>
      <h3>Other changes</h3>
      <ul>
        <li>Google analytics installed</li>
        <li>Update the typography page</li>
        <li>Update the general font sizes and line heights</li>
        <li>Update the inverted colour</li>
        <li>Update the spacing page</li>
        <li>Add spacing CSS custom properties</li>
        <li>Add spacing Sass function</li>
        <li>Update the spacing classes values</li>
      </ul>

      <h2>V3.1</h2>
      <ul>
        <li>Minor CSS changes</li>
        <li>Two new JS modules (orderablelist and file-upload)</li>
        <li>Start of client dashboard prototype</li>
      </ul>

      <h2>V3</h2>
      <ul>
        <li>Upgrade to Vue3</li>
        <li>Switch webpack with Vite</li>
      </ul>

      <h2>V2.9</h2>

      <h3>Breaking changes</h3>
      <ul>
        <li>Update to the nav component</li>
      </ul>

      <h2>V2.8</h2>
      <ul>
        <li><a href="https://blog.getbootstrap.com/2022/07/19/bootstrap-5-2-0/">Update to bootstrap 5.2</a></li>
        <li>Typescript support added</li>
      </ul>

      <h2>V2.7.9</h2>
      <ul>
        <li>Fix for tables row id appearing when the data is updated.</li>
      </ul>

      <h2>V2.7.8</h2>
      <ul>
        <li>Enhance tabs</li>
      </ul>

      <h2>V2.7.7</h2>
      <ul>
        <li>Update icons</li>
        <li>Update the table and chart JS so it can be used with external javascript easier</li>
      </ul>

      <h2>V2.7.6</h2>
      <ul>
        <li>Minor fixes for the marketplace nav so it works better in dark mode.</li>
      </ul>

      <h2>V2.7.5</h2>
      <ul>
        <li>Add extra tick list classes</li>
      </ul>

      <h2>V2.7.4</h2>
      <ul>
        <li>Fix marketplace nav</li>
      </ul>

      <h2>V2.7.1</h2>
      <ul>
        <li>Start of 'required if' functionality</li>
        <li>Multi upload input field</li>
        <li>Note feed component</li>
        <li>Marketplace nav</li>
        <li>Ticklist</li>
        <li>Admin panel</li>
      </ul>
      <h3>Breaking changes</h3>
      <ul>
        <li>A change to the z-index values may cause some display issues with integrated systems.</li>
      </ul>
      <h2>V2.7.0</h2>
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
