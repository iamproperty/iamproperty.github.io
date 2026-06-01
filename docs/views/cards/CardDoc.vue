<script setup>
  import Card from '@/components/Card/Card.vue';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import cardImg from '../../img/cardImg.png';
  import cardModes from '../../img/cardModes.png';

  import cardArticleImg from '../../img/card-article-anatomy.png';

</script>
<template>

  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Cards</h1>
    </DSHeader>

    <h2>Navigational Cards</h2>
    <p class="lead">Navigational cards can be used to direct the user to another page or modal. All will apply a drop shadow with a default colour of HEX #000000, 6px Y-axis and 12px blur with an opacity of 15% as default unless specified otherwise, this should have the ability to be removed if needed.</p>

    

    <h2>Header card</h2>

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
          <a href="/client-onbaording" class="hover">
            <Card>Client onboarding</Card>
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording" class="active">
            <Card>Client onboarding</Card>
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
          <a href="/client-onbaording" class="hover">
            <Card>Client onboarding <span>Action Client due diligence checks and view information</span></Card>
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording" class="active">
            <Card>
              Client onboarding <span>Action Client due diligence checks and view information</span>
            </Card>
          </a>
        </div>
      </div>
    </div>

    

    <h3>Status card</h3>
    <p>This is a variation of the header card which includes a status colour block on the left of the card.</p>
    <p>
      The status card is used to signify task/items which are not started, in progress, incomplete or complete and the
      colour block to the left will reflect the relevant task status (please see colours style guide for status
      colours).
    </p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card class="colour-danger"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording" class="hover">
            <Card class="colour-danger"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording" class="active">
            <Card class="colour-danger"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>
      </div>
    </div>

    <h3>Feature card with description</h3>
    <p>
      The feature card is a variation of the header card which includes the ability to added an image or SVG to the top
      of the card. This is a useful card for pointing users to features, articles or any larger item which would benefit
      From a greater visual prominance.
    </p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording" class="hover">
            <Card :data-image="cardImg"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording" class="active">
            <Card :data-image="cardImg"
              >Financial preparation <span>Here would be the top level description of the task</span></Card
            >
          </a>
        </div>
      </div>
    </div>
    <h3>Text card with SVG</h3>
    <p>This is a variation of the Header card which includes the addition of an SVG illustration.</p>

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
          <a href="/client-onbaording" class="hover">
            <Card data-illustration="/svg/illustrations/table.svg">Client onboarding</Card>
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording" class="active">
            <Card data-illustration="/svg/illustrations/table.svg">Client onboarding</Card>
          </a>
        </div>
      </div>
    </div>
    <!--
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
          <a href="/client-onbaording" class="hover">
            <Card>
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
-->


    <!--

    <h3>Header card with counter and secondary action</h3>
    <p>This is a variation of the Header card which includes the addition of a counter and a secondary action.</p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 mb-4 pe-none">
        <div class="col pe-none">
          <span class="pb-3 d-block text-uppercase">Default State</span>

          <Card class="card--secondary" data-total="99"
            >Properties <a href="/test" slot="primary-action">Properties page</a>
            <button class="btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card
          >
        </div>

        <div class="col pe-none">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <button class="hover">
            <Card class="card--secondary" data-total="99"
              >Properties <a href="/test" slot="primary-action">Properties page</a>
              <button class="btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card
            >
          </button>
        </div>

        <div class="col pe-none">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <button class="active">
            <Card class="card--secondary" data-total="99"
              >Properties<a href="/test" slot="primary-action">Properties page</a>
              <button class="btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card
            >
          </button>
        </div>

        <div class="col pe-none">
          <span class="pb-3 d-block text-uppercase">Secondary action hover/focus</span>
          <button>
            <Card class="card--secondary" data-total="99"
              >Properties<a href="/test" slot="primary-action">Properties page</a>
              <button class="hover btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card
            >
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
            <Card class="card--secondary"
              >Properties <i class="fa fa-key" slot="total-icon"></i
              ><a href="/test" slot="primary-action">Properties page</a>
              <button class="btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card
            >
          </a>
        </div>
        <div class="col pe-none">
          <span class="pb-3 d-block text-uppercase">Hover/focus State </span>
          <button class="hover">
            <Card class="card--secondary"
              >Properties <i class="fa fa-key" slot="total-icon"></i
              ><a href="/test" slot="primary-action">Properties page</a>
              <button class="btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card
            >
          </button>
        </div>
        <div class="col pe-none">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <button class="active">
            <Card class="card--secondary"
              >Properties <i class="fa fa-key" slot="total-icon"></i
              ><a href="/test" slot="primary-action">Properties page</a>
              <button class="btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card
            >
          </button>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Secondary action hover/focus</span>
          <a href="/">
            <Card class="card--secondary secondary-hover"
              >Properties <i class="fa fa-key" slot="total-icon"></i
              ><a href="/test" slot="primary-action">Properties page</a>
              <button class="hover btn btn-compact btn-secondary fa-plus" slot="secondary">Add property</button></Card
            >
          </a>
        </div>
      </div>
    </div>
-->

    
    <h3>Feature article card </h3>
    <p>This is a card used within products to primarily used to showcase articles within the iamproperty product.</p>

    <div class="container visualtest">
      
        <div class="col-start-auto col-span-2">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="card--article">Take control of your transactions <span>Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed o eiusmod tempor incididunt.</span><span class="duration" slot="footer">6 mins</span><span class="badge" slot="badges">New</span></Card>
          </a>
        </div>

        <div class="col-start-auto col-span-2">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording" class="hover">
            <Card :data-image="cardImg" class="card--article">Take control of your transactions <span>Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed o eiusmod tempor incididunt.</span><span class="duration" slot="footer">6 mins</span></Card>
          </a>
        </div>

        <div class="col-start-auto col-span-2">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording" class="active">
            <Card :data-image="cardImg" class="card--article">Take control of your transactions <span>Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed o eiusmod tempor incididunt.</span><span class="duration" slot="footer">6 mins</span></Card>
          </a>
        </div>
    </div>

    <h3>Anatomy</h3>

    <img :src="cardArticleImg" alt="Card anatomy diagram" class="mb-4 mt-2" />


    <ul class="mb-4">
      <li>Image window</li>
      <li>Article header text</li>
      <li>Description (optional)</li>
      <li>Read time and icon (optional)</li>
    </ul>

    <h3>Variant examples</h3>


    <div class="container visualtest">
      
        <div class="col-start-auto col-span-2">
          <span class="pb-3 d-block text-uppercase">Card with header text</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="card--article">Take control of your transactions</Card>
          </a>
        </div>

        <div class="col-start-auto col-span-2">
          <span class="pb-3 d-block text-uppercase">Addition of read time</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="card--article">Take control of your transactions <span class="duration" slot="footer">6 mins</span></Card>
          </a>
        </div>

        <div class="col-start-auto col-span-2">
          <span class="pb-3 d-block text-uppercase">Addition of description</span>
          <a href="/client-onbaording">
            <Card :data-image="cardImg" class="card--article">Take control of your transactions <span>Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed o eiusmod tempor incididunt.</span><span class="duration" slot="footer">6 mins</span></Card>
          </a>
        </div>
    </div>

    
    <div class="container">
      <h2>Mode examples</h2>
      <p>This is an example of how cards can be displayed across light mode, dark mode, and high contrast mode</p>
      <img :src="cardModes" alt="" class="mb-4" />
    </div>

    <Integration component="card" componentName="iam-card">
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
              <th>.card--article</th>
              <td>Transforms the card into an article-style layout.</td>
            </tr>
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
        <span v-html="events"></span>
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

    </Integration>
    <Versions pdf="/pdfs/navigational-card.pdf" jira="FEG-948">
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
            <td>V3</td>
            <td>05.05.2025</td>
            <td>Inclusion of a articles card</td>
          </tr>
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

