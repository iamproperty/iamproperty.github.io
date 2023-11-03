<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Iconography</h1>
    </DSHeader>

    <div class="container">

      <p class="lead">Icons should be used in a purposeful manner to maximize comprehension and reduce cognitive load when you need to call attention to a particular action, command, or section. Use them infrequently – if you’re questioning an icon’s use, it probably doesn’t need to be used at all.</p>
      <p class="lead">As a general rule, icons should be used in combination with meaningful text to support users progressing through the product in an accessible manner.</p>
    </div>

    <div class="container">
      <h2>Size</h2>
      <p>There are five icon sizes in our design system: </p>
      <p><strong class="text-primary d-block">16px (very small)</strong> Very small icons are best used when space is very limited. This size is largely used on our dashboards where there is a lot of information. They are also commonly used alongside text with the same font size.</p>
      <p><strong class="text-primary d-block">18px (small)</strong> Small icons are best used when space is limited. These are icons largely used on our primary, secondary, and tertiary buttons.  They are also commonly used alongside text with the same font size.</p>
      <p><strong class="text-primary d-block">20px (compact)</strong> Compact icons are best used when space is limited but the icon should still remain a key focus. This size is primarily for the ‘compact’ primary and secondary buttons.</p>
      <p><strong class="text-primary d-block">28px (medium)</strong> Medium icons are best used when there is more space to emphasise a point or they can be used as a ‘large’ icon height on mobile devices. Medium icons are best used when there is more space to emphasise a point or they can be used as a ‘large’ icon height on mobile devices.</p>
      <p><strong class="text-primary d-block">40px (large)</strong> Large icons are used sparingly to emphasise a concept or when space is plentiful. Wherever it’s used, consider the fidelity of the icon in the space it’s being used. (If there’s plenty of room, a spot illustration might be more appropriate).</p>
    </div>

    <div class="container">
      <h2>Colour and style</h2>

      <p>Our icons are available to use as a single colour primarily but can use two colours occasionally. The styling is an outline style for the primary state but can change to a filled out version where needed.</p>

      <div class="row">
        <div class="col-6 col-sm-4 col-md-3 pb-4">
          <span class="colour-circle bg-primary"></span>
          <strong class="text-primary d-block">Primary</strong>
          <span>HEX code: #00313C</span>
        </div>

        <div class="col-6 col-sm-4 col-md-3 pb-4">
          <span class="bg-primary p-1 d-inline-block" style="margin-bottom: 0.25rem;">
            <span class="colour-circle bg-white mb-0" style="background: #FCFCFC;"></span>
          </span>
          <strong class="text-primary d-block">Inverted</strong>
          <span>HEX code: #FCFCFC</span>
        </div>

        <div class="col-6 col-sm-4 col-md-3 pb-4">
          <span class="colour-circle" style="background: var(--colour-muted);"></span>
          <strong class="text-primary d-block">Muted/Not started</strong>
          <span>HEX code: #9D9D9D</span>
        </div>
        
        <div class="col-6 col-sm-4 col-md-3 pb-4">
          <span class="colour-circle bg-info"></span>
          <strong class="text-primary d-block">Selected</strong>
          <span>HEX code: #1EBEE6</span>
        </div>
        
        <div class="col-6 col-sm-4 col-md-3 pb-4">
          <span class="colour-circle bg-warning"></span>
          <strong class="text-primary d-block">Amber status/ requires attention</strong>
          <span>HEX code: #FFA500</span>
        </div>
        
        <div class="col-6 col-sm-4 col-md-3 pb-4">
          <span class="colour-circle bg-danger"></span>
          <strong class="text-primary d-block">Warning/ incomplete</strong>
          <span>HEX code: #DC3545</span>
        </div>
        
        <div class="col-6 col-sm-4 col-md-3 pb-4">
          <span class="colour-circle bg-success"></span>
          <strong class="text-primary d-block">Positive/complete</strong>
          <span>HEX code: #B4E6A5</span>
        </div>
        
        <div class="col-6 col-sm-4 col-md-3 pb-4">
          <span class="colour-circle" style="background: #0F9D58;"></span>
          <strong class="text-primary d-block">Positive/complete (Small icon in table or list only)</strong>
          <span>HEX code: #0F9D58</span>
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Icon Library</h2>

      <p>We use fontawesome icons for the vast majority of our icon library. These icons are available from the ‘default’ kit on fontawesome.com.</p>

      <h3>Custom SVGs in fontawesome</h3>

      <p>When there isn’t a suitable icon available in font awesome we should use a custom SVG comprised of two or more icons or a totally new icon in the same style as the rest of the font awesome library.</p>

      <h3>Handover of icons</h3>
      <p>To ensure a smoother process when handing designs over to the development team please only use icons which are from or have been added to the ‘default’ kit in fontawesome. Each prototype should have a clear label with the relevant icon label i.e. ‘check-light’,</p>

      <h3>Status</h3>
      <p>Status icons are commonly used throughout the application. They are particularly useful for highlighting the status and priority of an application, task, or process. They are also frequently used on warnings and error messages to bring attention to the message and highlight the severity of it.</p>

      <div class="row">
        <div class="col-md-2 pb-4" v-for="(icon) in statusIcons" :key="icon">
          <i :class="`${icon.class} icon--md mb-2`"></i>
          <hr/>
          <strong class="text-primary d-block">{{ icon.title }}</strong>
          <span><strong>class:</strong> {{icon.class}}</span>
        </div>
      </div>

      <h3>UI</h3>
      <p>UI icons are functional and highly reusable icons that appear throughout the application. They commonly are used to navigate to features, support a CTA, or to complete an action. ‘Solid’ variations of all these icons can also be used and should be used for compact primary and secondary buttons. See guidance on the button component.</p>

      <div class="row">
        <div class="col-md-2 pb-4" v-for="(icon) in uiIcons" :key="icon">
          <i :class="`${icon} icon--md mb-2 text-primary`"></i>
          <hr/>
          <span><strong>class:</strong> {{icon}}</span>
        </div>
      </div>

      <h3>App features</h3>
      <p>App feature icons are less frequently used. They identify specific features of the products. For example using an icon in a link to clearly show which feature the user is activating or navigating to.</p>

      <div class="row">
        <div class="col-md-2 pb-4" v-for="(icon) in appIcons" :key="icon">
          <i :class="`${icon.class} icon--md mb-2 text-primary`"></i>
          <hr/>
          <strong class="text-primary d-block">{{ icon.title }}</strong>
          <span><strong>class:</strong> {{icon.class}}</span>
        </div>
      </div>

      <h3>Property details</h3>
      <p>Property details icons are best used to highlight details relating to properties. They can be used alongside a number to demonstrate how many beds or baths a property has. They could also be used to visualise what a task for a property relates to, for example using an appliance icon alongside a task name to show it relates to an issue with an appliance in a property.</p>

      <div class="row">
        <div class="col-md-2 pb-4" v-for="(icon) in propertyIcons" :key="icon">
          <i :class="`${icon.class} icon--md mb-2 text-primary`"></i>
          <hr/>
          <strong class="text-primary d-block">{{ icon.title }}</strong>
          <span><strong>class:</strong> {{icon.class}}</span>
        </div>
      </div>

      <h3>User groups</h3>
      <p>User group icons are useful to support different types of users visually from one another. These type of icons are particularly useful on search results to help users distinguish results from one another.</p>

      <div class="row">
        <div class="col-md-2 pb-4" v-for="(icon) in userIcons" :key="icon">
          <i :class="`${icon.class} icon--md mb-2 text-primary`"></i>
          <hr/>
          <strong class="text-primary d-block">{{ icon.title }}</strong>
          <span><strong>class:</strong> {{icon.class}}</span>
        </div>
      </div>

      
      <h3>Social</h3>
      <p>Social icons are used to link users to social platforms.</p>

      <div class="row">
        <div class="col-md-2 pb-4" v-for="(icon) in socialIcons" :key="icon">
          <i :class="`${icon} icon--md mb-2 text-primary`"></i>
          <hr/>
          <span><strong>class:</strong> {{icon}}</span>
        </div>
      </div>

    </div>

    <div class="container pt-5">
      
      <h2>Implementation</h2>
      <h3>To add font awesome to an app</h3>
      <p>To include the relevant CSS and font files to your app/website you need to include the below tag. Or follow the the <a href="https://fontawesome.com/start">font awesome getting started</a> guide. It is worth noting that we are only using the light version of the font file, this is to match our icons better.</p>
      <pre><code class="html">{{cssScripts}}</code></pre>

      <h3>How to use font awesome</h3>
      <p>Font awesome is implemented in the typical way so the <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/referencing-icons/basic-use" target="_blank">font awesome basic usage</a> guide is the best source of information. Below is also an example of very basic usage.</p>
      <pre><code class="html">{{fausage}}</code></pre>
    </div>


    <div class="bg-light version-control">
      <div class="container ct-inline">
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
              <td>V2 added</td>
              <td>04.07.2023</td>
              <td>Changes to status icons</td>
            </tr>
            <tr>
              <td>V1 added</td>
              <td>15.06.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/icons.pdf" download>Download lastest design</a>
      </div>
    </div>

  </main>
</template>

<style lang="scss">
.colour-circle {
  height: 3rem;
  width: 3rem;
  margin-bottom: 1.5rem;
  border-radius: 50%;
  display: block;
}
</style>

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'

export default {
  components: {
    DSHeader
  },
  data () {
    return {
      headerImg: headerImg,
      statusIcons: [
        {title: "Complete", class: "fa-regular fa-check text-complete"},
        {title: "Approval required/Upcoming", class: "fa-light fa-flag text-warning"},
        {title: "Overdue/Due", class: "fa-light fa-flag text-danger"},
        {title: "Not Started/To do/On track", class: "fa-light fa-flag text-muted"},
        {title: "Warning", class: "fa-light fa-triangle-exclamation text-warning"},
        {title: "Error", class: "fa-light fa-circle-exclamation text-danger"},
        {title: "Low priority", class: "fa-regular fa-dash text-complete"},
        {title: "Medium priority", class: "fa-regular fa-grip-lines text-warning"},
        {title: "High priority", class: "fa-regular fa-chevrons-up text-danger"}
      ],
      uiIcons: [
        "fa-angle-up fa-light",
        "fa-angle-down fa-light",
        "fa-angle-left fa-light",
        "fa-angle-right fa-light",
        "fa-plus fa-regular",
        "fa-circle-info fa-light",
        "fa-arrow-up-arrow-down fa-light",
        "fa-arrows-up-down fa-light",
        "fa-arrow-down-to-bracket fa-light",
        "fa-arrow-up-from-square fa-light",
        "fa-magnifying-glass fa-regular",
        "fa-pen-to-square fa-light",
        "fa-check fa-regular",
        "fa-sliders fa-light",
        "fa-arrow-up-right-from-square fa-light",
        "fa-arrows-rotate fa-light",
        "fa-arrow-rotate-left fa-light",
        "fa-link fa-light",
        "fa-xmark fa-light",
        "fa-bars fa-solid",
        "fa-arrow-up-right-from-square fa-light",
        "fa-file fa-light",
        "fa-house fa-light",
        "fa-clock fa-light",
        "fa-gear fa-light",
        "fa-ellipsis-vertical fa-light",
        "fa-trash-can fa-regular",
        "fa-question fa-regular",
        "fa-floppy-disk fa-light",
        "fa-arrows-maximize fa-light",
        "fa-arrows-up-down-left-right fa-light",
        "fa-grip-lines fa-light",
        "fa-dash fa-light",
        "fa-lock fa-light",
        "fa-copy fa-light",
        "fa-clone fa-regular",
        "fa-paper-plane fa-light",
        "fa-share fa-light",
        "fa-bell fa-light",
        "fa-grid-2 fa-light",
        "fa-circle-plus fa-light",
        "fa-circle-minus fa-light"
      ],
      appIcons: [
        {title: "Calendar", class: "fa-calendar fa-regular"},
        {title: "Events", class: "fa-calendar-lines fa-regular"},
        {title: "Event", class: "fa-calendar-day fa-regular"},
        {title: "Email", class: "fa-envelope fa-light"},
        {title: "Comments", class: "fa-comments fa-light"},
        {title: "Tag", class: "fa-tag fa-light"},
        {title: "Accounts", class: "fa-piggy-bank fa-light"},
        {title: "Task Manager", class: "fa-clipboard-list-check fa-light"},
        {title: "Business Information", class: "fa-briefcase fa-light"},
        {title: "Inspections", class: "fa-file-magnifying-glass fa-light"},
        {title: "Signature", class: "fa-pen-nib fa-light"},
        {title: "Lettings", class: "fa-key fa-light"},
        {title: "Portals", class: "fa-house-laptop fa-light"},
        {title: "Reports", class: "fa-chart-pie-simple fa-light"},
        {title: "Activity List", class: "fa-list fa-light"},
        {title: "Messages", class: "fa-messages fa-light"},
        {title: "User", class: "fa-user fa-light"},
        {title: "Users", class: "fa-users fa-light"},
        {title: "Contacts", class: "fa-address-book fa-light"},
        {title: "Notes", class: "fa-note-sticky fa-light"},
        {title: "Branch", class: "fa-shop fa-light"},
        {title: "Language", class: "fa-earth-americas fa-light"},
        {title: "Location", class: "fa-location-dot fa-light"},
        {title: "Certificate", class: "fa-file-certificate fa-light"},
        {title: "Newspaper", class: "fa-newspaper fa-light"},
        {title: "Photos", class: "fa-camera fa-light"},
        {title: "Call", class: "fa-phone fa-light"},
        {title: "Help Centre", class: "fa-cloud-question fa-light"},
        {title: "Text", class: "fa-message-sms fa-light"},
        {title: "Sales", class: "fa-sterling-sign fa-light"},
        {title: "New/Update", class: "fa-sparkles fa-light"},
        {title: "Announcement", class: "fa-bullhorn fa-regular"},
        {title: "Maintenance Job", class: "fa-screwdriver-wrench fa-light"},
        {title: "Agree", class: "fa-handshake fa-light"},
        {title: "Favourite", class: "fa-heart fa-light"},
        {title: "Chat", class: "fa-message-dots fa-light"},
        {title: "Directions", class: "fa-route fa-light"},
        {title: "Chart Decreasing", class: "fa-chart-line-down fa-light"},
        {title: "Idea/New", class: "fa-lightbulb-on fa-light"},
        {title: "Auction", class: "fa-gavel fa-light"},
        {title: "Mobile", class: "fa-mobile-screen-button fa-light"},
        {title: "Tasks", class: "fa-circle-check fa-light"},
        {title: "My Day", class: "fa-kit fa-light-calendar-lines-circle-user"},
        {title: "Lettings property", class: "fa-kit fa-lettings-property"},
        {title: "Sales property", class: "fa-kit fa-sales-property"},
        {title: "My Services", class: "fa-kit fa-my-services"},
        {title: "Control Panel", class: "fa-kit fa-control-panel"},
        {title: "Portfolio", class: "fa-kit fa-portfolio"},
        {title: "Move in", class: "fa-kit fa-light-house-circle-arrow-left"},
        {title: "Move out", class: "fa-kit fa-light-house-circle-arrow-right"},
        {title: "Refund", class: "fa-kit fa-light-sterling-sign-circle-arrow-left"},
        {title: "Transfer", class: "fa-kit fa-light-sterling-sign-circle-arrow-right"},
        {title: "My Account", class: "fa-kit fa-my-account"},
        {title: "Tasks", class: "fa-circle-check fa-light"}
      ],
      propertyIcons: [
        {title: "Bed/Bedroom", class: "fa-bed-front fa-light"},
        {title: "Bath/Bathroom", class: "fa-bath fa-light"},
        {title: "Security", class: "fa-shield-quartered fa-light"},
        {title: "Alarm/Sensor", class: "fa-sensor-on fa-light"},
        {title: "Water", class: "fa-droplet fa-light"},
        {title: "Fire", class: "fa-fire fa-light"},
        {title: "Gas", class: "fa-fire-flame-simple fa-light"},
        {title: "Appliance", class: "fa-oven fa-light"},
        {title: "Electricity", class: "fa-bolt fa-light"},
        {title: "Decorating", class: "fa-paint-roller fa-light"},
        {title: "Flooding", class: "fa-house-flood-water fa-light"},
        {title: "Cleaning", class: "fa-broom fa-light"},
        {title: "Toilet", class: "fa-toilet fa-light"},
        {title: "Pumbing/Pipe", class: "fa-pipe-valve fa-regular"},
        {title: "Sofa/Living Room", class: "fa-couch fa-light"},
        {title: "Elevator", class: "fa-elevator fa-light"},
        {title: "Exterior/Garden", class: "fa-house-tree fa-light"},
        {title: "Pest", class: "fa-mouse-field fa-regular"},
        {title: "Parking/Garage", class: "fa-square-parking fa-regular"},
        {title: "Stairs", class: "fa-stairs fa-regular"},
        {title: "Lock", class: "fa-lock-keyhole-open fa-light"}
      ],
      userIcons: [
        {title: "Contractor ", class: "fa-user-helmet-safety fa-light"},
        {title: "Tenant", class: "fa-house-user fa-light"},
        {title: "Landlord", class: "fa-kit fa-landlord"},
        {title: "Vendor", class: "fa-kit fa-vendor"},
        {title: "Lettings applicant", class: "fa-kit fa-lettings-applicant"},
        {title: "Sales applicant", class: "fa-kit fa-sales-applicant"},
        {title: "Lettings property", class: "fa-kit fa-lettings-property"},
        {title: "Sales property", class: "fa-kit fa-sales-property"}
      ],
      socialIcons: [
        "fa-brands fa-facebook",
        "fa-brands fa-linkedin",
        "fa-brands fa-twitter",
        "fa-brands fa-flickr",
        "fa-brands fa-instagram",
        "fa-brands fa-youtube"
      ],
      icons: [],
      faicons: ['arrow-down','envelope','award','camera','align-right','axe','bicycle'],
      htmlUsage: `<svg class="icon">
  <title>Email</title>
  <use xlink:href="{filepath}#icon-email"></use>
</svg>`,
      cssScripts: `<script src="https://kit.fontawesome.com/26fdbf0179.js" crossorigin="anonymous" />`,
      fausage: `<a href="#down">Down <i class="fa-arrow-down fa-light"></i></a>`
    }
  },
  mounted(){

  }
}
</script>
