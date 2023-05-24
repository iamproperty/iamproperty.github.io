<template>
  <main>
    <DSHeader :image="headerImg">
      <h1>Colour</h1>
    </DSHeader>


    <div class="container">

      <h2>Colour palette</h2>
      <p class="lead">Colour distinguishes our brand and helps us create consistent experiences across products.</p>
      <h3>Primary palette</h3>
      <p>Our primary palette is comprised of neutrals, white, and blue, yellow to bring boldness to our brand and is used in logical ways throughout product to guide the eye and highlight the important bits. We pepper warmer, secondary palette colors throughout to soften the experience and to impart confidence and optimism.</p>
      <p>We use dark blue ({{ $shared.themeColours.Primary.toUpperCase() }}) is used primarily for body text and headings, and white ({{ $shared.themeColours.White.toUpperCase() }}) for page background or body text and headings the are overlaid on dark backgrounds.</p>
    </div>
      
    <div class="container visualtest">
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col pb-2">
          <div :class="`colour-block bg-primary`"><span>Text colour</span></div>
          <span class="lead text-primary d-block pb-0">{{ colourNames["Primary"] }}</span>
          <span>CSS Variable: --colour-primary</span><br/>
          <span>Hex code: {{ $shared.themeColours.Primary.toUpperCase() }}</span>
        </div>
        <div class="col pb-2">
          <div class="colour-block bg-white border"><span>Text colour</span></div>
          <span class="lead text-primary d-block pb-0">Off white</span>
          <span>CSS Variable: --colour-white</span><br/>
          <span>Hex code: {{ $shared.themeColours.White.toUpperCase() }}</span>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Secondary palette</h2>
      <p>Our secondary palette contains a variety of colors to keep things fresh and interesting. We lean on these colours more frequently when brand awareness is high, or on our own properties where we control the surrounding environment. When used in conjunction with our primary palette, these colours make every moment feel on-brand and every interaction informative.</p>
      <p>We use blue ({{ $shared.themeColours.Info.toUpperCase() }}) for selected states. Yellow ({{ $shared.themeColours.Warning.toUpperCase() }}) for primary buttons. Green ({{ $shared.themeColours.Success.toUpperCase() }}) for completed states and positive interactions. Red ({{ $shared.themeColours.Danger.toUpperCase() }}) for incomplete or warning states. </p>

    </div>
    <div class="container visualtest">
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col pb-2" v-for="(colour, name) in $shared.secondaryColours" :key="name">
          <div :class="`colour-block bg-${name.toLowerCase()}`"><span>Text</span></div>
          <span class="lead text-primary d-block pb-0">{{ colourNames[name] }}</span>
          <span>CSS Variable: --colour-{{ name.toLowerCase() }}</span><br/>
          <span v-if="name=='Success'">CSS Variable: --colour-secondary</span><br v-if="name=='Success'"/>
          <span>Hex code: {{ colour.toUpperCase() }}</span>
        </div>
      </div>
    </div>
    <div class="container">
      
      <p class="note mb-5"><strong>Note:</strong> The primary and secondary colours are based upon the <a href="https://getbootstrap.com/docs/5.1/utilities/colors/" target="_blank">colours defined in bootstrap</a> and are used to create colour based utility classes. The colours can then by applied as a background colour by using the class <strong>.bg-primary</strong> and change the text colour using <strong>.text-primary</strong>.</p>
    </div>
    <div class="container">
      <h2>Extended palette</h2>
      <p>There are two important considerations when deciding between using theme colors or static colours: what the colour is going to be applied to and what the color’s relationship will be with other colours or objects.</p>

      <p>Make this choice in a way that ensures an appropriate level of contrast is given to an object and any text or iconography.</p>
    </div>
    <div class="container visualtest">
      <div class="row row-cols-2 row-cols-sm-3 pb-2">
        <div class="col pb-2">
          <div :class="`colour-block bg-light`"></div>
          <span class="lead text-primary d-block pb-0">Light</span>
          <span><b>CSS Variable:</b> --colour-light</span><br/>
          <span><b>Hex code:</b> {{ $shared.themeColours.Light.toUpperCase() }}</span><br/>
          <span><b>Dark mode value:</b> {{ $shared.darkModeColours["Light"] }}</span>
        </div>
        <div class="col pb-2">
          <div :class="`colour-block`" style="background: var(--colour-muted);"></div>
          <span class="lead text-primary d-block pb-0">Muted</span>
          <span>CSS Variable: --colour-muted</span><br/>
          <span>Hex code: {{ $shared.nonThemeColours.Muted.toUpperCase() }}</span><br/>
          <span>Dark mode value: {{ $shared.darkModeColours["Muted"] }}</span>
        </div>
        <div class="col pb-2">
          <div :class="`colour-block`" style="background: var(--colour-body);"></div>
          <span class="lead text-primary d-block pb-0">Body</span>
          <span>CSS Variable: --colour-body</span><br/>
          <span>Hex code: {{ $shared.nonThemeColours.Body.toUpperCase() }}</span><br/>
          <span>Dark mode value: {{ $shared.darkModeColours["Body"] }}</span>
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
      <h2>Functional colours</h2>
    </div>

    <div class="container visualtest">
      <div class="row row-cols-2 row-cols-sm-4">
        
        <div class="col pb-2" v-for="(colour, name) in $shared.extendedColours" :key="name">
          <div :class="`colour-block ${(name =='Inverted' ? 'border' : '')}`" :style="`background: var(--colour-${name.toLowerCase()});`"></div>
          <span class="lead text-primary d-block pb-0">{{ colourNames[name] }}</span>
          <span>CSS Variable: --colour-{{ name.toLowerCase() }}</span><br/>
          <span>Value: {{ colour }}</span><br/>
          <span>Dark mode value: {{ $shared.darkModeColours[name] }}</span>
        </div>

      </div>
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
          <h3 class="h5 mb-0">Secondary on info</h3>   
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
    <div class="container">
      <p class="note mb-5"><strong>Note:</strong> All of the above colours, tints and gradients aren't guaranteed to be the same when the user is in high contrast mode as the browser enforces colour changes that are set by the user.</p>
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
  position: relative;
  margin-bottom: 0.5rem;

  span {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
  }
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

@media (forced-colors: active) {
  .colour-block, .colour-circle, .colour-tints {
    forced-color-adjust: none;
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