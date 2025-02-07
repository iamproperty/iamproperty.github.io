<script setup>
import Card from '@/components/Card/Card.vue'

import Integration from '../Integration.vue'
import Versions from '../Versions.vue'
import TrackEvents from '../TrackEvents.vue'

import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import cardImg from '../../img/cardImg.png'
import cardModes from '../../img/cardModes.png'


</script>
<template>
  
  <TrackEvents selector="iam-card" :events="['select-card','unselect-card','secondary-button-clicked','action-button-clicked']"></TrackEvents>

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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4  pe-none">
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

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4  pe-none">
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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4  pe-none">
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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4  pe-none">
        
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
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 mb-4 pe-none">
        
        <div class="col pe-none">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          
            <Card class="card--secondary" data-total="99" >Properties <a href="/test" slot="primary-action">Properties page</a> <button class="btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card>
          
        </div>

        <div class="col  pe-none">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <button>
            <Card class="card--secondary hover" data-total="99" >Properties <a href="/test" slot="primary-action">Properties page</a> <button class="btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card>
          </button>
        </div>
        
        <div class="col  pe-none">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <button>
            <Card class="card--secondary active" data-total="99" >Properties<a href="/test" slot="primary-action">Properties page</a> <button class="btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card>
          </button>
        </div>

        <div class="col pe-none">
          <span class="pb-3 d-block text-uppercase">Secondary action hover/focus</span>
          <button>
            <Card class="card--secondary" data-total="99" >Properties<a href="/test" slot="primary-action">Properties page</a> <button class="hover btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card>
          </button>
        </div>

      </div>
    </div>

    

    <h3>Header card with icon and secondary action</h3>
    <p>This is a variation of the Header card which includes the addition of aa icon and a secondary action.</p>


    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 mb-4 pe-none">
        
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/">
            <Card class="card--secondary">Properties <i class="fa fa-key" slot="total-icon"></i><a href="/test" slot="primary-action">Properties page</a> <button class=" btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card>
          </a>
        </div>
        <div class="col  pe-none">
          <span class="pb-3 d-block text-uppercase">Hover/focus State </span>
          <button>
            <Card class="card--secondary hover">Properties <i class="fa fa-key" slot="total-icon"></i><a href="/test" slot="primary-action">Properties page</a> <button class=" btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card>
          </button>
        </div>
        <div class="col  pe-none">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <button>
            <Card class="card--secondary active">Properties <i class="fa fa-key" slot="total-icon"></i><a href="/test" slot="primary-action">Properties page</a> <button class=" btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card>
          </button>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Secondary action hover/focus</span>
          <a href="/">
            <Card class="card--secondary secondary-hover">Properties <i class="fa fa-key" slot="total-icon"></i><a href="/test" slot="primary-action">Properties page</a> <button class="hover btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card>
          </a>
        </div>

      </div>
    </div>


    <h3>Status card</h3>
    <p>This is a variation of the header card which includes a status colour block on the left of the card.</p>
    <p>The status card is used to signify task/items which are not started, in progress, incomplete or complete and the colour block to the left will reflect the relevant task status (please see colours style guide for status colours).</p>


    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4  pe-none">
        
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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4  pe-none">
        
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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4  pe-none">
        
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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col video-col">

          <span class="pb-3 d-block text-uppercase">Default State</span>
          
            <Card :data-image="cardImg" data-menu-title="Template Actions">
              Name of template Here
              <span>Updated by: John smith</span>
              <span class="pt-1">Updated on: 03/01/2024</span>
              <a href="/test" slot="primary-action" title="Edit template">Edit</a>
              <button slot="btns">Duplicate</button>
              <a href="/cards/card" slot="btns">Duplicate</a>
              <button slot="btns" class="btn btn-action">Delete</button>
            </Card>
            
        </div>
        <div class="col video-col">

          <span class="pb-3 d-block text-uppercase">Hover State</span>
          
            <Card :data-image="cardImg" data-menu-title="Template Actions">
              Name of template Here
              <span>Updated by: John smith</span>
              <span class="pt-1">Updated on: 03/01/2024</span>
              <a href="/test" class="hover" slot="primary-action" title="Edit template">Edit</a>
              <button slot="btns">Duplicate</button>
              <a href="/cards/card" slot="btns">Duplicate</a>
              <button slot="btns">Delete</button>
            </Card>
            
        </div>

        <div class="col video-col">

          <span class="pb-3 d-block text-uppercase">Ellipsis Hover State</span>
          
            <Card :data-image="cardImg" data-menu-title="Template Actions" style="--ellipsis-bg: var(--colour-light);">
              Name of template Here
              <span>Updated by: John smith</span>
              <span class="pt-1">Updated on: 03/01/2024</span>
              <a href="/test" slot="primary-action" title="Edit template">Edit</a>
              <button slot="btns">Duplicate</button>
              <a href="/cards/card" slot="btns">Duplicate</a>
              <button slot="btns">Delete</button>
            </Card>
            
        </div>


      <div class="col video-col">

      <span class="pb-3 d-block text-uppercase">Ellipsis Menu Open</span>

        <Card :data-image="cardImg" data-menu-title="Template Actions" style="--menu-display: block; --ellipsis-bg: var(--colour-light);">
          Name of template Here
          <span>Updated by: John smith</span>
          <span class="pt-1">Updated on: 03/01/2024</span>
          <a href="/test" slot="primary-action" title="Edit template">Edit</a>
          <button slot="btns">Duplicate</button>
          <a href="/cards/card" slot="btns">Duplicate</a>
          <button slot="btns">Delete</button>
        </Card>
        
      </div>

      </div>
    </div>


    <div class="container">
      <h2>Mode examples</h2>
      <p>This is an example of how cards can be displayed across light mode, dark mode, and high contrast mode</p>
      <img :src="cardModes" alt="" class="mb-4" />
    </div>

    <Integration component="card" componentName="iam-card" >
      <template #web-component>

        <pre><code>{{`<a href="/url"><iam-card :data-image="cardImg"> 
  Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span>
</iam-card></a>`}}</code></pre>
      </template>
      <template #vue-component>

        <pre><code>{{`<script setup>import Card from '@/components/Card/Card.vue</script>
        
<a href="/url"><Card :data-image="cardImg">
  Speed up sales success <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</span>
</Card></a>
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
            <th>data-img</th>
            <td>-</td>
            <td>String (file location)</td>
            <td>No</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      </template>
      
      <template #slots>
      <table>
        <thead>
          <tr>
            <th>Part</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Default (body)</th>
            <td>The default slot adds content to the body of the card.</td>
          </tr>
          <tr>
            <th>head</th>
            <td>Usually the top of the card but in the instance of the video card its located at the bottom.</td>
          </tr>
          <tr>
            <th>badges</th>
            <td>Usually the top of the card but in the instance of the video card its located at the bottom.</td>
          </tr>
          <tr>
            <th>footer</th>
            <td>The bottom of card.</td>
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
            <th>.colour-{var}</th>
            <td>To create the status card look a clour needs to be defined via a colour class.</td>
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
            <th>head</th>
            <td>Usually the top of the card but in the instance of the video card its located at the bottom.</td>
          </tr>
          <tr>
            <th>image</th>
            <td>The image located in the card head</td>
          </tr>
          <tr>
            <th>body</th>
            <td>The main content of the card</td>
          </tr>
          <tr>
            <th>footer</th>
            <td>The bottom of card.</td>
          </tr>
        </tbody>
      </table>

      </template>

      <template #vars>

      <table>
        <thead>
          <tr>
            <th>Var</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>--card-left-padding</th>
            <td>Controls the padding of all the parts, the card head image ignores this.</td>
          </tr>
          <tr>
            <th>--card-right-padding</th>
            <td>Controls the padding of all the parts, the card head image ignores this.</td>
          </tr>
          <tr>
            <th>--card-head-height</th>
            <td>Controls the height of the head.</td>
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
              <th>select-card</th>
              <td>checkbox is checked</td>
              <td>{"Card value":"on","input name":"card10"}</td>
            </tr>
            <tr>
              <th>unselect-card</th>
              <td>Checkbox is unchecked</td>
              <td>{"Card value":"on","input name":"card10"}</td>
            </tr>
            <tr>
              <th>secondary-button-clicked</th>
              <td>The secondary button is clicked</td>
              <td></td>
            </tr>
            <tr>
              <th>action-button-clicked</th>
              <td>One of the buttons in the dialog menu is clicked</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </template>

      <template #watched-attrs>

      <table>
        <thead>
          <tr>
            <th>Attributes</th>
            <th>Options/Type</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>data-img</th>
            <td>String (file location)</td>
            <td>The head image can be updated by adding a valid file location to this attribute.</td>
          </tr>
        </tbody>
      </table>
      </template>


      <template #criteria>

      <ul>
        <li>When hovering over a secondary,action or checkbox the main hover state on the card should not be shown</li>
        <li>All secodnary type buttons or inputs should be tabbable</li>
      </ul>

      </template>
      <template #data-layer>

        
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
              <th>select-card</th>
              <td>checkbox is checked</td>
              <td>{"Card value":"on","input name":"card10"}</td>
            </tr>
            <tr>
              <th>unselect-card</th>
              <td>Checkbox is unchecked</td>
              <td>{"Card value":"on","input name":"card10"}</td>
            </tr>
            <tr>
              <th>secondary-button-clicked</th>
              <td>The secondary button is clicked</td>
              <td></td>
            </tr>
            <tr>
              <th>action-button-clicked</th>
              <td>One of the buttons in the dialog menu is clicked</td>
              <td></td>
            </tr>
          </tbody>
        </table>


      </template>

    </Integration>
    <Versions pdf="/pdfs/navigational-card.pdf">
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
    </Versions>
  </main>
</template>

<style>

.video-col {
  position: relative;
  margin-top: 3rem;
}
.video-col > span {

  position: absolute;
  bottom: 100%;
  left: 0.5rem;
}

</style>