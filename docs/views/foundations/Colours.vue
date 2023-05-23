<template>
  <main>
    <DSHeader :image="headerImg">
      <h1>Colour</h1>
    </DSHeader>


    <div class="container">

      <h2>Colour palette</h2>
      <p class="lead">Colour distinguishes our brand and helps us create consistent experiences across products.</p>
    </div>
      
    <div class="container visualtest">
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col">
          <div :class="`colour-block bg-primary`"></div>
          <div class="details">
            <h3 class="h5 mb-0">Primary {{ colourNames["Primary"] }}</h3>
            <span>{{ $shared.themeColours.Primary }}</span>
          </div>
        </div>
        <div class="col">
          <div class="colour-block bg-canvas border"></div>
          <div class="details">
            <h3 class="h5 mb-0">Canvas</h3>
            <span>{{ $shared.themeColours.Canvas }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Theme Colours</h2>
      <p>The theme colours are based upon the <a href="https://getbootstrap.com/docs/5.1/utilities/colors/" target="_blank">colours defined in bootstrap</a> and are used to create colour based utility classes. The colours can then by applied as a background colour by using the class <strong>.bg-primary</strong> and change the text colour using <strong>.text-primary</strong>.</p>
    </div>
    <div class="container visualtest">
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col" v-for="(colour, name) in $shared.secondaryColours" :key="name">
          <div :class="`colour-block bg-${name.toLowerCase()}`"><span>Text</span></div>
          <div class="details">
            {{ colourNames[name] }}
            <h3 class="h5 mb-0">{{ name }}{{ (name == 'Success' ? ' & Secondary' : '') }}</h3>
            <span>{{ colour }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Functional Colours</h2>
      <p>These non-theme colours are not to be used for backgrounds or to be used to configure components. But are used for pre-defined functional tasks.</p>
    </div>
    <div class="container visualtest">
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col">
          <div :class="`colour-block bg-light`"></div>
          <div class="details">
            <h3 class="h5 mb-0">Light</h3>
            <span>{{ $shared.themeColours.Light }}</span>
          </div>
        </div>
        <div class="col" v-for="(colour, name) in $shared.nonThemeColours" :key="name">
          <div :class="`colour-block ${(name =='Inverted' ? 'border' : '')}`" :style="'background: '+colour+';'">
            
          </div>
          <div class="details">
            <h3 class="h5 mb-0">{{ name }}</h3>
            <span>{{ colour }}</span>
          </div>
        </div>

      </div>
    </div>
    
    <div class="container">
      <h2>Colour tints</h2>
    </div>

    <div class="container visualtest">
      <Table class="colour-tints table--fullwidth border-0">
        <table>
          <thead>
            <tr>
              <th class="visually-hidden">Colour</th>
              <th>100%</th>
              <th>90%</th>
              <th>80%</th>
              <th>70%</th>
              <th>60%</th>
              <th>50%</th>
              <th>40%</th>
              <th>30%</th>
              <th>20%</th>
              <th>10%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{{colourNames["Primary"]}}</th>
              <td><span class="colour-circle bg-primary"></span></td>
              <td><span class="colour-circle bg-primary bg-opacity-90"></span></td>
              <td><span class="colour-circle bg-primary bg-opacity-80"></span></td>
              <td><span class="colour-circle bg-primary bg-opacity-70"></span></td>
              <td><span class="colour-circle bg-primary bg-opacity-60"></span></td>
              <td><span class="colour-circle bg-primary bg-opacity-50"></span></td>
              <td><span class="colour-circle bg-primary bg-opacity-40"></span></td>
              <td><span class="colour-circle bg-primary bg-opacity-30"></span></td>
              <td><span class="colour-circle bg-primary bg-opacity-20"></span></td>
              <td><span class="colour-circle bg-primary bg-opacity-10"></span></td>
            </tr>
            <tr v-for="(colour, name) in $shared.secondaryColours" :key="name">
              <th>{{ colourNames[name] }}</th>
              <td><span :class="`colour-circle bg-${name.toLowerCase()}`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} bg-opacity-90`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} bg-opacity-80`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} bg-opacity-70`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} bg-opacity-60`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} bg-opacity-50`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} bg-opacity-40`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} bg-opacity-30`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} bg-opacity-20`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} bg-opacity-10`"></span></td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>

    <div class="container">
      <h2>Gradients</h2>
      <p>Gradients can be used to help convey technological eepertise and innovation.</p>
    </div>
    <div class="container visualtest">
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col">
          <div class="colour-block bg-info gradient-success">
          </div>
          <h3 class="h5 mb-0">Success on info</h3>   
        </div>
        <div class="col">
          <div class="colour-block bg-info gradient-success gradient-direction-left">
          </div>
          <h3 class="h5 mb-0">Success on info</h3>   
        </div>
        <div class="col">
          <div class="colour-block bg-info gradient-success gradient-direction-angle">
          </div>
          <h3 class="h5 mb-0">Success on info</h3>   
        </div>
      </div>
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col">
          <div class="colour-block bg-info gradient-primary">
          </div>
          <h3 class="h5 mb-0">Primary on info</h3>   
        </div>
        <div class="col">
          <div class="colour-block bg-info gradient-primary gradient-direction-left">
          </div>  
        </div>
        <div class="col">
          <div class="colour-block bg-info gradient-primary gradient-direction-angle">
          </div>
        </div>
      </div>
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col">
          <div class="colour-block bg-success gradient-primary">
          </div>
          <h3 class="h5 mb-0">primary on success</h3>   
        </div>
        <div class="col">
          <div class="colour-block bg-success gradient-primary gradient-direction-left">
          </div>
        </div>
        <div class="col">
          <div class="colour-block bg-success gradient-primary gradient-direction-angle">
          </div> 
        </div>
      </div>
    </div>

    
    <div class="container">
      <h2>Semantic colour</h2>
    </div>
    <div class="container visualtest">
      <Table class="colour-tints table--fullwidth border-0">
        <table>
          <thead>
            <tr>
              <th class="visually-hidden">Usage</th>
              <th>Blue</th>
              <th>Neutral</th>
              <th>Green</th>
              <th>Yellow</th>
              <th>Red</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Messages</th>
              <td></td>
              <td></td>
              <td><span class="colour-circle bg-success"></span>Success</td>
              <td><span class="colour-circle bg-warning"></span>Warning</td>
              <td><span class="colour-circle bg-danger"></span>Error</td>
            </tr>
            <tr>
              <th>Status</th>
              <td></td>
              <td><span class="colour-circle bg-muted" style="background: var(--colour-muted);"></span>Incomplete</td>
              <td><span class="colour-circle bg-success"></span>Approved</td>
              <td><span class="colour-circle bg-warning"></span>Pending</td>
              <td><span class="colour-circle bg-danger"></span>Unsuccessful</td>
            </tr>
            <tr>
              <th>Risk</th>
              <td></td>
              <td></td>
              <td><span class="colour-circle bg-success"></span>Low</td>
              <td><span class="colour-circle bg-warning"></span>Medium</td>
              <td><span class="colour-circle bg-danger"></span>High</td>
            </tr>
            <tr>
              <th>Status</th>
              <td><span class="colour-circle bg-info"></span>Selected</td>
              <td></td>
              <td><span class="colour-circle bg-success"></span>Positive</td>
              <td></td>
              <td><span class="colour-circle bg-danger"></span>Warning</td>
            </tr>
            <tr>
              <th>Priority</th>
              <td></td>
              <td></td>
              <td><span class="colour-circle bg-success"></span>Low</td>
              <td><span class="colour-circle bg-warning"></span>Medium</td>
              <td><span class="colour-circle bg-danger"></span>High</td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>
  </main>
</template>

<style lang="scss">
$compatible: 'false';
@import "../../../assets/sass/_func";
.colour-blocks {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 2rem;
}
.colour-block {
  width: 100%;
  padding-top: 50%;
  display: block;
}
.colour-circle {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  display: block;
}
.colour-tints {
  padding: 0;
  box-shadow: none;

  table {
  --hover-background: transparent;
    th, td {
      min-width: 0;
      padding-right: 1rem;
    }
  }
}
</style>

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import Tabs from '../../../src/components/Tabs/Tabs.vue'
import Tab from '../../../src/components/Tabs/Tab.vue'
import Table from '../../../src/components/Table/Table.vue'


export default {
  name: 'ColourDoc',
  components: {
    DSHeader,
    Tabs,
    Tab,
    Table
  },
  data: function () {
    return {
      headerImg: headerImg,
      colourNames: {
        "Primary":  "Deep slate",
        "Success":  "Soft Green",
        "Dark":     "Homely aubergine",
        "Info":     "Fresh blue",
        "Warning":  "Punchy mustard",
        "Danger":   "Red"
      }
    }
  }
}
</script>