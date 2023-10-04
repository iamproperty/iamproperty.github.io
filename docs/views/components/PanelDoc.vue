<template>
  <main>



    <DSHeader :image="headerImg" section="components">
      <h1>Admin panel</h1>
    </DSHeader>





    <div class="container">
      <p class="lead">An admin panel can be used to group and seperate content within an admin setting.</p>
      
      <h2>Basic admin panel</h2>

      <p>A basic admin panel includes a header and body text. They can be used to group information under a heading. All will apply a drop shadow with a default colour of HEX #000000, 6px Y-axis and 12px blur with an opacity of 15% as default unless specified otherwise, this should have the ability to be removed if needed.</p>

      <div class="admin-panel">
        <h2>Admin panel title</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
      </div>
    </div>



    <div class="container">
      <h2>Colour variants</h2>
      <p>We can use colour in the header to add interest across products. There are four colour variations light gradient, dark gradient, light, and dark. Please see below:</p>
    </div>

    
    <div class="container visualtest">

      <div class="admin-panel">
        <h2>Admin panel title</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
      </div>
      <div class="admin-panel">
        <h2 class="bg-primary gradient-info">Admin panel title</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
      </div>
      <div class="admin-panel">
        <h2 class="bg-white">Admin panel title</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
      </div>
      <div class="admin-panel">
        <h2 class="bg-primary">Admin panel title</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
      </div>
    </div>


    <div class="container">
      <h2>Admin panels within the grid system</h2>
      <p>When admin panels are arranged in a grid system they should have a minimum of 16px (1rem) spacing between them.</p>
    </div>
 
    <div class="container visualtest">
      <div class="row">
        <div class="col-6 col-sm-4">
          <div class="admin-panel">
            <h2>Admin panel title</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          </div>          
        </div>
        <div class="col-6 col-sm-4">
          <div class="admin-panel">
            <h2 class="bg-primary gradient-info">Admin panel title</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          </div>          
        </div>
        <div class="col-6 col-sm-4">
          <div class="admin-panel">
            <h2 class="bg-white">Admin panel title</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          </div>          
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Admin panel max height</h2>
      <p>To control how much real estate the admin panel takes up on a page we can set a max height for the text within it to a pre-defined list. There are three heights for text to presented. Small with a max height of {{$shared.cssVars.ut_mh_sm}} ({{$shared.cssVars.ut_mh_sm_px}}px), medium with a max height of {{$shared.cssVars.ut_mh_md}} ({{$shared.cssVars.ut_mh_md_px}}px) and, and large with a max height of {{$shared.cssVars.ut_mh_lg}} ({{$shared.cssVars.ut_mh_lg_px}}px). A fade equal to the padding at the bottom (1.5rem) should be added when the text is scrollable.</p>
    </div>

    <div class="container visualtest">
      <div class="row">
        <div class="col-6 col-sm-4">
          <div class="admin-panel">
            <h2>Admin panel title</h2>
            <div class="mh-lg">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </div>          
        </div>
        <div class="col-6 col-sm-4">
          <div class="admin-panel">
            <h2 class="bg-primary gradient-info">Admin panel title</h2>
            <div class="mh-md">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </div>          
        </div>
        <div class="col-6 col-sm-4">
          <div class="admin-panel">
            <h2 class="bg-white">Admin panel title</h2>
            <div class="mh-sm">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </div>          
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Admin panel with CTA</h2>
      <p>Admin panels can include a CTA to start a journey, perform an action or to navigate to a new page. Any button type can be used as the CTA. Use a minimum of 24px (1.5rem) padding above the button.</p>
    </div>

    
    <div class="container visualtest">

      <div class="admin-panel">
        <h2>Admin panel title</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
        <button class="btn btn-primary">Lorum ipsum</button>
      </div>
    </div>

    <div class="container visualtest">
      <h2>Admin panel with table</h2>
      <p>Admin panels can include tables as their main content. Tables should only be used in this instance to present ‘at a glance’ information such as upcoming events, tasks, or reminders.</p>
    </div>
    <div class="container visualtest">
      <div class="row">
        <div class="col-sm-6 col-md-5">
          <div class="admin-panel">
            <h2>Admin panel title</h2>
            <Table class="table--fullwidth mh-md">
              <table>
                <table>
                      <thead>
                        <tr>
                          <th>Time</th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>9:30</td>
                          <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                        </tr>
                        <tr>
                          <td>10:30</td>
                          <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                        </tr>
                        <tr>
                          <td>11:30</td>
                          <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                        </tr>
                        <tr>
                          <td>9:30</td>
                          <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                        </tr>
                        <tr>
                          <td>9:30</td>
                          <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                        </tr>
                        <tr>
                          <td>9:30</td>
                          <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                        </tr>
                        <tr>
                          <td>9:30</td>
                          <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                        </tr>
                        <tr>
                          <td>9:30</td>
                          <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                        </tr>
                        <tr>
                          <td>9:30</td>
                          <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                        </tr>
                        <tr>
                          <td>9:30</td>
                          <td><a href="/somewhere">Lorum ipsumdolor sit emit, consetetur</a></td>
                        </tr>
                      </tbody>
                    </table>
              </table>
            </Table>
          </div>          
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Admin panel with tabs</h2>
      <p>Admin panels can have tabs as a header. Selecting each tab will change the content shown within the admin panel content. The light & dark gradient and block colours can all be used as the highlight colour for the selected tab.</p>
    </div>
    
    <div class="container visualtest">
      <Tabs class="admin-panel">
        <Tab title="Tab 1">
          <p>Tabe content 1</p>
        </Tab>
        <Tab title="Tab 2">
          <p>Tabe content 2</p>
        </Tab>
        <Tab title="Tab 3" >
          <p>Tabe content 3</p>
        </Tab>
      </Tabs>
    </div>
    

    <div class="container">
      
      <h2>Implementation</h2>
      <Tabs>

        <details>
          <summary><h2>HTML</h2></summary>
          <pre><code class="html">{{`<div class="admin-panel">
  <h2>Admin panel title</h2><!-- Titles automatically have a gradient background applied -->
  <p>...</p>
</div>

<div class="admin-panel">
  <h2 class="bg-primary gradient-info">Admin panel title</h2><!-- .bg-primary.gradient-info classes for variant backgruond -->
  <p>...</p>
</div>

<div class="admin-panel">
  <h2 class="bg-white">Admin panel title</h2><!-- .bg-white class for header background similar to panel background (matches dark mode) -->
  <p>...</p>
</div>

<div class="admin-panel">
  <iam-tabs></iam-tabs><!-- Adding tabs as the first child will add the gradient background to the selected tab -->
</div>`}}</code></pre>
        </details>
      </Tabs>
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
              <td>03.10.2023</td>
              <td>
                - Updated 'light' header colour to #fcfcfc to match action bar header<br>
                - Added 'dark mode' and 'high contrast' versions of the admnin panel (design download only)<br>
                - Updated the 'Admin panel tabs' section to match the new 'tabs' guide.
              </td>
            </tr>
          </tbody>
          <tbody class="text-body">
            <tr>
              <td>V1 added</td>
              <td>06.06.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/admin-panel.pdf" download>Download latest designs</a>
      </div>
    </div>

  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import Readme from '@/components/Table/README.md'
import WebReadme from '~/ts/components/table/README.md'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Table from '@/components/Table/Table.vue'

export default {
  components: {
    DSHeader,
    Table,
    Readme,
    WebReadme,
    Tabs,
    Tab,
  },
  mounted(){
    
  },
  data () {
    return {
      headerImg: headerImg
    }
  }
}
</script>