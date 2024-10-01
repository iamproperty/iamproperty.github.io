<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Navigational Cards</h1>
    </DSHeader>

    <h2>Introduction</h2>
    <p>Navigational cards can be used to direct the user to another page or modal.</p>
    <p>They can also have secondary actions such as being selectable or having a secondary action.</p> 
    <p>All will apply a drop shadow with a default colour of HEX #000000, 6px Y-axis and 12px blur with an opacity of 15% as default unless specified otherwise, this should have the ability to be removed if needed.</p>
    
    
    <h2>Types</h2>
    
    
    <h3>Header card</h3>

    <p>The header card is primarily used in or near the header of the page and is used to direct the user to another page or modal.</p>
    
    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card>Client onboarding</Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card class="hover">Client onboarding</Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card class="active">Client onboarding</Card>
          </a>          
        </div>
      </div>
    </div>


    <h3>Header card with icon</h3>
    <p>This is a variation of the Header card which includes the addition of an icon.</p>

    <div class="container visualtest">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">With Icon</span>
          <a href="/client-onbaording">
            <Card>
              <i class="fa fa-home"></i>
              Lorem Ipsum
            </Card>
          </a>          
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">With Icon</span>
          <a href="/client-onbaording">
            <Card class="hover">
              <i class="fa fa-home"></i>
              Lorem Ipsum
            </Card>
          </a>          
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">With Icon</span>
          <a href="/client-onbaording">
            <Card class="active">
              <i class="fa fa-home"></i>
              Lorem Ipsum
            </Card>
          </a>          
        </div>
      </div>
    </div>

    <h3>Header card with SVG</h3>
    <p>This is a variation of the Header card which includes the addition of an SVG illustration. </p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card data-illustration="/svg/illustrations/table.svg">Client onboarding</Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card data-illustration="/svg/illustrations/table.svg" class="hover">Client onboarding</Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card data-illustration="/svg/illustrations/table.svg" class="active">Client onboarding</Card>
          </a>          
        </div>
      </div>
    </div>

    <h3>Header card with description</h3>
    <p>This is a variation of the Header card which includes the addition body copy description.</p>
  
    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card>
              Client onboarding 
              <span>Action Client due diligence checks and view information</span>
            </Card>
          </a>          
        </div>

      
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card class="hover">Client onboarding <span>Action Client due diligence checks and view information</span></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card class="active">Client onboarding <span>Action Client due diligence checks and view information</span></Card>
          </a>
        </div>
      </div>

    </div>


    <h3>Header card with counter and secondary action</h3>
    <p>This is a variation of the Header card which includes the addition of a counter and a secondary action.</p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 mb-4">
        
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/">
            <Card class="card--secondary" data-total="99" data-add-link="/?add=true">Properties</Card>
          </a>
        </div>

        <div class="col4 pe-none">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <button>
            <Card class="card--secondary hover" data-total="99" data-add-link="/?add=true">Properties</Card>
          </button>
        </div>
        
        <div class="col4 pe-none">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <button>
            <Card class="card--secondary active" data-total="99" data-add-link="/?add=true">Properties</Card>
          </button>
        </div>

        <div class="col4 pe-no/ne">
          <span class="pb-3 d-block text-uppercase">Secondary action hover/focus</span>
          <button>
            <Card class="card--secondary secondary-hover" data-total="99" data-add-link="/?add=true">Properties</Card>
          </button>
        </div>

      </div>
    </div>

    

    <h3>Header card with icon and secondary action</h3>
    <p>This is a variation of the Header card which includes the addition of aa icon and a secondary action.</p>


    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 mb-4">
        
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/">
            <Card class="card--secondary" data-add-link="/?add=true">Properties <i class="fa fa-key"></i></Card>
          </a>
        </div>
        <div class="col4 pe-none">
          <span class="pb-3 d-block text-uppercase">Hover/focus State </span>
          <button>
            <Card class="card--secondary hover" data-add-link="/?add=true">Properties <i class="fa fa-key"></i></Card>
          </button>
        </div>
        <div class="col4 pe-none">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <button>
            <Card class="card--secondary active" data-add-link="/?add=true">Properties <i class="fa fa-key"></i></Card>
          </button>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Secondary action hover/focus</span>
          <a href="/">
            <Card class="card--secondary secondary-hover" data-add-link="/?add=true">Properties <i class="fa fa-key"></i></Card>
          </a>
        </div>

      </div>
    </div>


    <h3>Status card</h3>
    <p>This is a variation of the header card which includes a status colour block on the left of the card.</p>
    <p>The status card is used to signify task/items which are not started, in progress, incomplete or complete and the colour block to the left will reflect the relevant task status (please see colours style guide for status colours).</p>


    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card class="colour-danger">Financial preparation <span>Here would be the top level description of the task</span></Card>
          </a>          
        </div>

      
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card class="colour-danger hover">Financial preparation <span>Here would be the top level description of the task</span></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card class="colour-danger active">Financial preparation <span>Here would be the top level description of the task</span></Card>
          </a>
        </div>
      </div>

    </div>

    <h3>Feature card with description</h3>
    <p>The feature card is a variation of the header card which includes the ability to added an image or SVG to the top of the card. This is a useful card for pointing users to features, articles or any larger item which would benefit From a greater visual prominance.</p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg">Financial preparation <span>Here would be the top level description of the task</span></Card>
          </a>          
        </div>

      
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="hover">Financial preparation <span>Here would be the top level description of the task</span></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="active">Financial preparation <span>Here would be the top level description of the task</span></Card>
          </a>
        </div>
      </div>

    </div>

    <h3>Feature card with description and label</h3>
    <p>This is a variation of the feature card which also features a label to show status or categorise the card.</p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg"><span slot="badges" class="badge bg-warning"><i class="fa-regular fa-sparkles"></i> New</span>Financial preparation <span>Here would be the top level description of the task</span></Card>
          </a>          
        </div>

      
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="hover"><span slot="badges" class="badge bg-warning"><i class="fa-regular fa-sparkles"></i> New</span>Financial preparation <span>Here would be the top level description of the task</span></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="active"><span slot="badges" class="badge bg-warning"><i class="fa-regular fa-sparkles"></i> New</span>Financial preparation <span>Here would be the top level description of the task</span></Card>
          </a>
        </div>
      </div>

    </div>




    <h3>Checkbox card</h3>
    <p>The checkbox card is variation of the header card that has two actions.</p>
    <p>The primary action can be triggered by clicking the card area (except for the checkbox). The type of action that will occur from the primary action is indicated by the icon on the bottom right of the card.</p>
    <p>The secondary action can be triggered by clicking the checkbox on the card. This puts the card in a selected state to allow users to make bulk changes to the cards using action buttons in an action bar.</p>




    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card>Living room <span>1 check</span><div slot="checkbox"><input type="checkbox" name="card2" id="card2"><label for="card2" class="m-0">Select card</label></div></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card class="hover">Living room <span>1 check</span><div slot="checkbox"><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card class="active">Living room <span>1 check</span><div slot="checkbox"><input type="checkbox" name="card4" id="card4"><label for="card4" class="m-0">Select card</label></div></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Checkbox hover</span>
          <a href="/client-onbaording">
            <Card>Living room <span>1 check</span><div slot="checkbox"><input type="checkbox" name="checked-hover" id="checked-hover" ><label for="checked-hover" class="m-0 hover">Select card</label></div></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Checked</span>
          <a href="/client-onbaording">
            <Card>Living room <span>1 check</span><div slot="checkbox"><input type="checkbox" name="checked" id="checked" checked><label for="checked" class="m-0">Select card</label></div></Card>
          </a>          
        </div>

      </div>
    </div>



    <h3>Checkbox card with label</h3>
    <p>This is a variation of the checkbox card which includes the addition of a label to show status.</p>


    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card>Living room <span>1 check</span><span slot="badges" class="badge">Not started</span><div slot="checkbox"><input type="checkbox" name="card5" id="card5"><label for="card5" class="m-0">Select card</label></div></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card class="hover">Living room <span>1 check</span><span slot="badges" class="badge">Not started</span><div slot="checkbox"><input type="checkbox" name="card5" id="card5"><label for="card5" class="m-0">Select card</label></div></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card class="active">Living room <span>1 check</span><span slot="badges" class="badge">Not started</span><div slot="checkbox"><input type="checkbox" name="card5" id="card5"><label for="card5" class="m-0">Select card</label></div></Card>
          </a>          
        </div>


        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card>Living room <span>1 check</span><span slot="badges" class="badge">Not started</span><div slot="checkbox"><input type="checkbox" name="card6" id="card6"><label for="card6" class="m-0 hover">Select card</label></div></Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card>Living room <span>1 check</span><span slot="badges" class="badge">Not started</span><div slot="checkbox"><input type="checkbox" name="card6" id="card6" checked><label for="card6" class="m-0">Select card</label></div></Card>
          </a>          
        </div>

      </div>
    </div>


    <h3>Checkbox card with label and progress bar</h3>
    <p>This is a variation of the checkbox card which includes the addition of a label to show status and a progress bar to keep track of progress.</p>


    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card>
              Living room <span>1 check</span><span slot="badges" class="badge">Not started</span><div slot="checkbox"><input type="checkbox" name="card10" id="card10"><label for="card10" class="m-0">Select card</label></div>
              <label class="hide-text mb-1 mt-2">
                <span class="visually-hidden">Percentage completed</span>
                <progress max="100" class="progress--inline" value="50">50%</progress>
              </label>
            </Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <Card class="hover">
              Living room <span>1 check</span><span slot="badges" class="badge">Not started</span><div slot="checkbox"><input type="checkbox" name="card11" id="card11"><label for="card11" class="m-0">Select card</label></div>
              <label class="hide-text mb-1 mt-2">
                <span class="visually-hidden">Percentage completed</span>
                <progress max="100" class="progress--inline" value="50">50%</progress>
              </label>
            </Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <Card class="active">
              Living room <span>1 check</span><span slot="badges" class="badge">Not started</span><div slot="checkbox"><input type="checkbox" name="card12" id="card12"><label for="card12" class="m-0">Select card</label></div>
              <label class="hide-text mb-1 mt-2">
                <span class="visually-hidden">Percentage completed</span>
                <progress max="100" class="progress--inline" value="50">50%</progress>
              </label>
            </Card>
          </a>          
        </div>


        <div class="col">
          <span class="pb-3 d-block text-uppercase">Checkbox hover</span>
          <a href="/client-onbaording">
            <Card>
              Living room <span>1 check</span><span slot="badges" class="badge">Not started</span><div slot="checkbox"><input type="checkbox" name="card13" id="card13"><label for="card13" class="m-0 hover">Select card</label></div>
              <label class="hide-text mb-1 mt-2">
                <span class="visually-hidden">Percentage completed</span>
                <progress max="100" class="progress--inline" value="50">50%</progress>
              </label>
            </Card>
          </a>          
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Checked</span>
          <a href="/client-onbaording">
            <Card>
              Living room <span>1 check</span><span slot="badges" class="badge">Not started</span><div slot="checkbox"><input type="checkbox" name="card14" id="card14" checked><label for="card14" class="m-0">Select card</label></div>
              <label class="hide-text mb-1 mt-2">
                <span class="visually-hidden">Percentage completed</span>
                <progress max="100" class="progress--inline" value="50">50%</progress>
              </label>
            </Card>
          </a>          
        </div>

      </div>
    </div>

    <h3>Multi-action card</h3>
    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4">
        <div class="col">

          <span class="pb-3 d-block text-uppercase">Default State</span>
          
            <Card :data-image="cardImg" data-menu-title="Template Actions">
              Name of template Here
              <span>Updated by: John smith</span>
              <span class="pt-1">Updated on: 03/01/2024</span>
              <a href="/test" slot="primary-action" title="Edit template">Edit</a>
              <button>Duplicate</button>
              <a href="/cards/card">Duplicate</a>
              <button>Delete</button>
            </Card>
            
        </div>
        <div class="col">

          <span class="pb-3 d-block text-uppercase">Hover State</span>
          
            <Card :data-image="cardImg" data-menu-title="Template Actions">
              Name of template Here
              <span>Updated by: John smith</span>
              <span class="pt-1">Updated on: 03/01/2024</span>
              <a href="/test" class="hover" slot="primary-action" title="Edit template">Edit</a>
              <button>Duplicate</button>
              <a href="/cards/card">Duplicate</a>
              <button>Delete</button>
            </Card>
            
        </div>

        <div class="col">

          <span class="pb-3 d-block text-uppercase">Ellipsis Hover State</span>
          
            <Card :data-image="cardImg" data-menu-title="Template Actions" style="--ellipsis-bg: var(--colour-light);">
              Name of template Here
              <span>Updated by: John smith</span>
              <span class="pt-1">Updated on: 03/01/2024</span>
              <a href="/test" class="hover" slot="primary-action" title="Edit template">Edit</a>
              <button>Duplicate</button>
              <a href="/cards/card">Duplicate</a>
              <button>Delete</button>
            </Card>
            
        </div>


      <div class="col">

      <span class="pb-3 d-block text-uppercase">Ellipsis Menu Open</span>

        <Card :data-image="cardImg" data-menu-title="Template Actions" style="--menu-display: block; --ellipsis-bg: var(--colour-light);">
          Name of template Here
          <span>Updated by: John smith</span>
          <span class="pt-1">Updated on: 03/01/2024</span>
          <a href="/test" class="hover" slot="primary-action" title="Edit template">Edit</a>
          <button slot="actions">Duplicate</button>
          <a href="/cards/card">Duplicate</a>
          <button slot="actions">Delete</button>
        </Card>
        
      </div>

      </div>
    </div>




    <div class="container">
      <h2>Mode examples</h2>
      <p>This is an example of how cards can be displayed across light mode, dark mode, and high contrast mode</p>
      <img :src="cardModes" alt="" class="mb-4" />
    </div>


    <div class="container">
      
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h3>Web component</h3></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h3>Vue component</h3></summary>
          <Readme></Readme>
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
              <td>V1 added</td>
              <td>28.03.2024</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/navigational-cards.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<script>
import Card from '@/components/Card/Card.vue'
import Readme from '@/components/Card/README.md'
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import WebReadme from '~/ts/components/card/README.md'
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import cardImg from '../../img/cardImg.png'
import cardModes from '../../img/cardModes.png'
import Table from '@/components/Table/Table.vue'

export default {
  components: {
    DSHeader,
    Table,
    Readme,
    WebReadme,
    Tabs,
    Tab,
    Card,
    headerImg,
    cardImg,
    cardModes
  },
  data () {
    return {
      headerImg: headerImg,
      cardImg: cardImg,
      cardModes:cardModes,
      htmlUsage: `<a href="/link-url" class="card">
  <div class="card-body">
    Link text
    <span>Link description text..</span>
  </div>
</a>`
    }
  }
}
</script>
