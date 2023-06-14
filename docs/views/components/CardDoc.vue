<template>
  <main>

    <DSHeader :image="headerImg" section="components">
      <h1>Cards</h1>
    </DSHeader>

    <div class="container">
      <h2>Navigational cards</h2>
      <p class="lead">Navigational cards can be used to direct the user to another page or modal. All will apply a drop shadow with a default colour of HEX #000000, 6px Y-axis and 12px blur with an opacity of 15% as default unless specified otherwise, this should have the ability to be removed if needed.</p>
      <h3>Header card</h3>
    </div>

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
      </div>
    </div>
    <div class="container">

      <h3>Header card with description</h3>
      <p>This is a variation of the Header card which includes the addition body copy description.</p>
    
    </div>
    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card>Client onboarding <span>Action Client due diligence checks and view information</span></Card>
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
    <div class="container">
      <h3>Text card with SVG</h3>
      <p>This is a variation of the Header card which includes the addition of an SVG illustration. </p>

    </div>
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
    <div class="container">


      <h2>Filter cards</h2>
      <p class="lead">Filter cards can be used to better display key data sets or information that when selected will provide the user with a outcome or set of results.</p>

      <h3>Numerical filter card</h3>
      <p>Numerical filter card display a figure on left and text applying to that numerical value next to it. The coloured block on the left of the card can have a primary or a status colour (red, amber, green), the ‘active’ state outline needs to apply the same colour used on the left of the card.</p>

    </div>
    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
          
            
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <button>
            <Card class="card--filter" data-total="14">Due diligence incomplete</Card>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <button>
            <Card class="card--filter hover" data-total="14">Due diligence incomplete</Card>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <button>
            <Card class="card--filter active" data-total="14">Due diligence incomplete</Card>
          </button>
        </div>

      </div>
    </div>
    <div class="container">
      <h3>Text and icon filter card</h3>
      <p>This filter card provides user with a visual aid (icon) as well as a text label to ensure the user gains a quicker understanding of the filter card subject. This card can also apply a drop shadow with a default colour of HEX #000000, 6px Y-axis and 12px blur with an opacity of 15%.</p>

    </div>
    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 mb-4 pe-none">
        
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <button class="d-inline-block">
          <Card class="card--filter"><i class="icon fa-house"></i>Character property</Card>
        </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <button class="d-inline-block">
            <Card class="card--filter hover"><i class="icon fa-house"></i>Character property</Card>
          </button>
        </div>
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <button class="d-inline-block">
            <Card class="card--filter active"><i class="icon fa-house"></i>Character property</Card>
          </button>
        </div>
      </div>
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
        <details>
          <summary><h3>HTML</h3></summary>
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
              <td>V1 added</td>
              <td>19.05.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/cards.pdf" download>Download latest designs</a>
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
    headerImg
  },
  data () {
    return {
      headerImg: headerImg,
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
