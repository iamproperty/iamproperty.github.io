<script setup>
  import { onMounted } from 'vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import backgroundsImg from '../../img/colour-backgrounds.png';
  import Tabs from '../../../src/components/Tabs/Tabs.vue';
  import Tab from '../../../src/components/Tabs/Tab.vue';
  import Table from '../../../src/components/Table/Table.vue';
  import UserColours from '../UserColours.vue';
  import DarkMode from '../../../src/components/DarkMode/DarkMode.vue'

  const colourNames = {
    Primary: 'Deep slate',
    Success: 'Green',
    Dark: 'Dark',
    Info: 'Blue',
    Warning: 'Yellow',
    Danger: 'Red',
  };

</script>

<template>
  <main>
    <DSHeader :image="headerImg">
      <h1>Colour</h1>
    </DSHeader>

    <DarkMode><label class="toggle"><input type="checkbox" name="dark-mode" />Dark mode</label></DarkMode>



    <!-- #region Light mode -->
    <div class="light-mode full-width">

      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Light mode colour palette</h2>
          </div>
        </div>

        <p class="lead">
          This is our default colour palette which distinguishes our brand and helps us create consistent experiences
          across products.
        </p>
        <h3>Background</h3>
        <p>
          Our light background palette is comprised of a default background colour (#FCFCFC). This will form the
          foundations of page UI within dark mode, from which other components can be placed.
        </p>
      </div>

      <div class="container visualtest">
        <div class="row row-cols-2 row-cols-sm-3">
          <div class="col pb-2">
            <div class="colour-block bg-canvas border"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">Default background</span>
            <span>CSS Variable: --colour-canvas</span><br />
            <span>CSS Variable: --colour-canvas-2</span><br />
            <span>Hex code: #fcfcfc</span>
          </div>
        </div>
      </div>

      <div class="container">
        <h3>Primary palette</h3>
        <p>
          Our primary palette is comprised of neutrals, white, and blue, yellow to bring boldness to our brand and is
          used in logical ways throughout product to guide the eye and highlight the important bits. We add warmer,
          secondary palette colors throughout to soften the experience and to impart confidence and optimism.
        </p>
        <p>
          We use dark blue ({{ $shared.themeColours.Primary.toUpperCase() }}) is used primarily for body text and
          headings, and white (#fcfcfc) for page background or body text and headings the are overlaid on dark
          backgrounds.
        </p>
      </div>

      <div class="container visualtest">
        <div class="row row-cols-2 row-cols-sm-3">
          <div class="col pb-2">
            <div :class="`colour-block bg-primary`"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">{{ colourNames['Primary'] }}</span>
            <span>CSS Variable: --colour-primary</span><br />
            <span>Hex code: {{ $shared.themeColours.Primary.toUpperCase() }}</span>
          </div>
          <div class="col pb-2">
            <div class="colour-block bg-white border"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">Off-white</span>
            <span>CSS Variable: --colour-white</span><br />
            <span>Hex code: #fcfcfc</span>
          </div>
          <div class="col pb-2">
            <div class="colour-block bg-warning border"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">Yellow</span>
            <span>CSS Variable: --colour-warning</span><br />
            <span>Hex code: {{ $shared.themeColours.Warning.toUpperCase() }}</span>
          </div>
        </div>
      </div>
      <div class="container">
        <h2>Secondary palette</h2>
        <p>
          Our secondary palette contains a variety of colors to keep things fresh and interesting. We lean on these
          colours more frequently when brand awareness is high, or on our own properties where we control the
          surrounding environment. When used in conjunction with our primary palette, these colours make every moment
          feel on-brand and every interaction informative.
        </p>
        <p>
          We use blue ({{ $shared.themeColours.Info.toUpperCase() }}) for selected states. Yellow ({{
            $shared.themeColours.Warning.toUpperCase()
          }}) for primary buttons. Green ({{ $shared.themeColours.Success.toUpperCase() }}) for completed states and
          positive interactions. Red ({{ $shared.themeColours.Danger.toUpperCase() }}) for incomplete or warning states.
        </p>
      </div>
      <div class="container visualtest">
        <div class="row row-cols-2 row-cols-sm-3">
          <div class="col pb-2" v-for="(colour, name) in $shared.secondaryColours" :key="name">
            <div :class="`colour-block bg-${name.toLowerCase()}`"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">{{ colourNames[name] }}</span>
            <span>CSS Variable: --colour-{{ name.toLowerCase() }}</span
            ><br />
            <span v-if="name == 'Success'">CSS Variable: --colour-secondary</span><br v-if="name == 'Success'" />
            <span>Hex code: {{ colour.toUpperCase() }}</span>
          </div>
          <div class="col pb-2">
            <div :class="`colour-block bg-light`"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">Light</span>
            <span>CSS Variable: --colour-light</span><br />
            <span>Hex code: {{ $shared.themeColours.Light.toUpperCase() }}</span
            ><br />
          </div>
        </div>
      </div>
      <div class="container">
        <p class="note mb-5">
          <strong>Note:</strong> The primary and secondary colours are based upon the
          <a href="https://getbootstrap.com/docs/5.1/utilities/colors/" target="_blank">colours defined in bootstrap</a>
          and are used to create colour based utility classes. The colours can then by applied as a background colour by
          using the class <strong>.bg-primary</strong> and change the Text using <strong>.text-primary</strong>.
        </p>
      </div>
      <div class="container">
        <h2>Extended palette</h2>
        <p>
          Body text grey will be used for copy in paragraphs, the colour will compliment the deep slate colour which is
          used for heading copy. The muted grey colour will be used for boarders and optional relevant components to
          differentiate between the background and a piece of content.
        </p>
      </div>
      <div class="container visualtest">
        <div class="row row-cols-2 row-cols-sm-3 pb-2">
          <div class="col pb-2">
            <div :class="`colour-block`" style="background: var(--colour-muted)"></div>
            <span class="lead text-primary d-block pb-0">Muted</span>
            <span>CSS Variable: --colour-muted</span><br />
            <span>Hex code: {{ $shared.nonThemeColours.Muted.toUpperCase() }}</span
            ><br />
          </div>
          <div class="col pb-2">
            <div :class="`colour-block`" style="background: var(--colour-body)"></div>
            <span class="lead text-primary d-block pb-0">Body</span>
            <span>CSS Variable: --colour-body</span><br />
            <span>Hex code: {{ $shared.nonThemeColours.Body.toUpperCase() }}</span
            ><br />
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion Light mode -->

    <!-- #region Dark mode -->
    <div class="dark-mode full-width">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Dark mode colour palette</h2>
          </div>
          
        </div>

        <p class="lead">
          Our brand dark mode ensures inclusivity and accessibility fore a wider range of users. It should be taken into
          consideration when designing new components, features and pages within our UI.
        </p>
        <h3>Background</h3>
        <p>
          Our dark mode background palette is comprised of a default background colour (#262626) and a second background
          colour (#313131) which will be applied to items that also a drop shadow applied to them. This will form the
          foundations of page UI within dark mode, from which other components can be placed.
        </p>
      </div>

      <div class="container visualtest">
        <div class="row row-cols-2 row-cols-sm-3">
          <div class="col pb-2">
            <div class="colour-block bg-canvas border"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">Default background</span>
            <span>CSS Variable: --colour-canvas</span><br />
            <span>Hex code: {{ $shared.darkModeColours['Canvas'].toUpperCase() }}</span>
          </div>

          <div class="col pb-2">
            <div class="colour-block border" style="background: var(--colour-canvas-2)">
              <span>Text</span>
            </div>
            <span class="lead text-primary d-block pb-0">Background 2</span>
            <span>CSS Variable: --colour-canvas-2</span><br />
            <span>Hex code: {{ $shared.darkModeColours['Canvas-2'].toUpperCase() }}</span>
          </div>
        </div>
      </div>

      <div class="container pb-5">
        <img :src="backgroundsImg" alt="" />
      </div>

      <div class="container">
        <h3>Primary palette</h3>
        <p>
          Our primary dark mode palette is comprised of neutrals, greys, and yellow to bring clarity to our brand
          palette and is used in logical ways throughout product to guide the eye and highlight the important bits. We
          add warmer, secondary palette colors throughout to soften the experience and to impart confidence and
          optimism.
        </p>

        <p>
          Deep slate at 30% (#B3C1C5) is used primarily for text and headings, and charcoal (#262626) for page
          backgrounds. Yellow (#FFC04D) for primary buttons which is 80% brightness of the primary yellow (#FFA500) used
          in light mode.
        </p>
      </div>

      <div class="container visualtest">
        <div class="row row-cols-2 row-cols-sm-3">
          <div class="col pb-2">
            <div :class="`colour-block bg-primary`"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">{{ colourNames['Primary'] }}</span>
            <span>CSS Variable: --colour-primary</span><br />
            <span>Hex code: {{ $shared.darkModeColours['Primary'].toUpperCase() }}</span>
          </div>
          <div class="col pb-2">
            <div class="colour-block bg-white border" style="background: var(--colour-white)">
              <span>Text</span>
            </div>
            <span class="lead text-primary d-block pb-0">Off-white</span>
            <span>CSS Variable: --colour-white</span><br />
            <span>Hex code: #fcfcfc;</span>
          </div>
          <div class="col pb-2">
            <div class="colour-block bg-warning"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">Yellow</span>
            <span>CSS Variable: --colour-warning</span><br />
            <span>Hex code: {{ $shared.darkModeColours['Warning'].toUpperCase() }}</span>
          </div>
        </div>
      </div>

      <div class="container">
        <h3>Secondary palette</h3>
        <p>
          Our secondary palette contains a variety of colors to keep things fresh and interesting. We lean on these
          colours more frequently when brand awareness is high, or on our own properties where we control the
          surrounding environment. When used in conjunction with our primary palette, these colours make every moment
          feel on-brand and every interaction informative.
        </p>

        <p>
          We use blue (#1EBEE6) for selected states. Green (#B4E6A5) for completed states and positive interactions. Red
          (#E7727D) for incomplete or warning states.
        </p>
      </div>

      <div class="container visualtest">
        <div class="row row-cols-2 row-cols-sm-3">
          <div class="col pb-2" v-for="(colour, name) in $shared.secondaryColours" :key="name">
            <div :class="`colour-block bg-${name.toLowerCase()}`"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">{{ colourNames[name] }}</span>
            <span>CSS Variable: --colour-{{ name.toLowerCase() }}</span
            ><br />
            <span v-if="name == 'Success'">CSS Variable: --colour-secondary</span><br v-if="name == 'Success'" />
            <span
              >Hex code:
              {{
                $shared.darkModeColours[name] ? $shared.darkModeColours[name].toUpperCase() : colour.toUpperCase()
              }}</span
            >
          </div>

          <div class="col pb-2">
            <div :class="`colour-block bg-light`"><span>Text</span></div>
            <span class="lead text-primary d-block pb-0">Light</span>
            <span>CSS Variable: --colour-light</span><br />
            <span>Hex code: {{ $shared.darkModeColours['Light'].toUpperCase() }}</span
            ><br />
          </div>
        </div>
      </div>

      <div class="container">
        <h2>Extended palette</h2>
        <p>
          Body text grey will be used for copy in paragraphs, the colour will compliment the deep slate colour which is
          used for heading copy. The muted grey colour will be used for boarders and optional relevant components to
          differentiate between the background and a piece of content.
        </p>
      </div>
      <div class="container visualtest">
        <div class="row row-cols-2 row-cols-sm-3 pb-2">
          <div class="col pb-2">
            <div :class="`colour-block`" style="background: var(--colour-muted)"></div>
            <span class="lead text-primary d-block pb-0">Muted</span>
            <span>CSS Variable: --colour-muted</span><br />
            <span>Hex code: {{ $shared.nonThemeColours.Muted.toUpperCase() }}</span
            ><br />
          </div>
          <div class="col pb-2">
            <div :class="`colour-block`" style="background: var(--colour-body)"></div>
            <span class="lead text-primary d-block pb-0">Body</span>
            <span>CSS Variable: --colour-body</span><br />
            <span>Hex code: {{ $shared.darkModeColours['Body'].toUpperCase() }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion-->

    <div class="container">
      <h2>Colour tints</h2>
    </div>

    <div class="container visualtest">
      <div class="overflow-auto mb-3">
        <table class="colour-tints table--fullwidth border-0 mb-0">
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
              <th>{{ colourNames['Primary'] }}</th>
              <td><span class="colour-circle bg-primary tint-100 light-mode"></span></td>
              <td><span class="colour-circle bg-primary tint-90 light-mode"></span></td>
              <td><span class="colour-circle bg-primary tint-80"></span></td>
              <td><span class="colour-circle bg-primary tint-70"></span></td>
              <td><span class="colour-circle bg-primary tint-60"></span></td>
              <td><span class="colour-circle bg-primary tint-50"></span></td>
              <td><span class="colour-circle bg-primary tint-40"></span></td>
              <td><span class="colour-circle bg-primary tint-30"></span></td>
              <td><span class="colour-circle bg-primary tint-20"></span></td>
              <td><span class="colour-circle bg-primary tint-10"></span></td>
            </tr>
            <tr>
              <th>{{ colourNames['Warning'] }}</th>
              <td><span class="colour-circle bg-warning"></span></td>
              <td><span class="colour-circle bg-warning tint-90"></span></td>
              <td><span class="colour-circle bg-warning tint-80"></span></td>
              <td><span class="colour-circle bg-warning tint-70"></span></td>
              <td><span class="colour-circle bg-warning tint-60"></span></td>
              <td><span class="colour-circle bg-warning tint-50"></span></td>
              <td><span class="colour-circle bg-warning tint-40"></span></td>
              <td><span class="colour-circle bg-warning tint-30"></span></td>
              <td><span class="colour-circle bg-warning tint-20"></span></td>
              <td><span class="colour-circle bg-warning tint-10"></span></td>
            </tr>
            <tr v-for="(colour, name) in $shared.secondaryColours" :key="name">
              <th>{{ colourNames[name] }}</th>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} tint-100`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} tint-90`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} tint-80`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} tint-70`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} tint-60`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} tint-50`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} tint-40`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} tint-30`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} tint-20`"></span></td>
              <td><span :class="`colour-circle bg-${name.toLowerCase()} tint-10`"></span></td>
            </tr>
            <tr>
              <th>Pink</th>
              <td><span class="colour-circle bg-pink tint-100"></span></td>
              <td><span class="colour-circle bg-pink tint-90"></span></td>
              <td><span class="colour-circle bg-pink tint-80"></span></td>
              <td><span class="colour-circle bg-pink tint-70"></span></td>
              <td><span class="colour-circle bg-pink tint-60"></span></td>
              <td><span class="colour-circle bg-pink tint-50"></span></td>
              <td><span class="colour-circle bg-pink tint-40"></span></td>
              <td><span class="colour-circle bg-pink tint-30"></span></td>
              <td><span class="colour-circle bg-pink tint-20"></span></td>
              <td><span class="colour-circle bg-pink tint-10"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="container">
      <h2>Gradient palette</h2>
      <p>
        Our gradient palette is design to inject vibrancy to the product user experience. It is used as background in
        small amounts to compliment the design. Gradient palette cannot be used in text format and must only be used in
        background elements sparingly.
      </p>
    </div>
    <div class="container visualtest">
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col pb-2">
          <div class="colour-block bg-info gradient-success"></div>
          <span class="lead text-primary d-block pb-0">Secondary on info</span>
          <span>CSS classes: .bg-info .gradient-success</span><br />
        </div>
        <div class="col pb-2">
          <div class="colour-block bg-info gradient-success gradient-direction-left"></div>
          <span class="lead text-primary d-block pb-0">Secondary on info</span>
          <span>CSS classes: .bg-info .gradient-success .gradient-direction-left</span><br />
        </div>
        <div class="col pb-2">
          <div class="colour-block bg-info gradient-success gradient-direction-angle"></div>
          <span class="lead text-primary d-block pb-0">Secondary on info</span>
          <span>CSS classes: .bg-info .gradient-success .gradient-direction-angle</span><br />
        </div>
      </div>
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col pb-2">
          <div class="colour-block bg-info gradient-primary"></div>
          <span class="lead text-primary d-block pb-0">Primary on info</span>
          <span>CSS classes: .bg-info .gradient-primary</span><br />
        </div>
        <div class="col pb-2">
          <div class="colour-block bg-info gradient-primary gradient-direction-left"></div>
          <span class="lead text-primary d-block pb-0">Primary on info</span>
          <span>CSS classes: .bg-info .gradient-primary .gradient-direction-left</span><br />
        </div>
        <div class="col pb-2">
          <div class="colour-block bg-info gradient-primary gradient-direction-angle"></div>
          <span class="lead text-primary d-block pb-0">Primary on info</span>
          <span>CSS classes: .bg-info .gradient-primary .gradient-direction-angle</span><br />
        </div>
      </div>
      <div class="row row-cols-2 row-cols-sm-3">
        <div class="col pb-2">
          <div class="colour-block bg-success gradient-primary"></div>
          <span class="lead text-primary d-block pb-0">Primary on success</span>
          <span>CSS classes: .bg-success .gradient-primary .gradient-direction-left</span><br />
        </div>
        <div class="col pb-2">
          <div class="colour-block bg-success gradient-primary gradient-direction-left"></div>
          <span class="lead text-primary d-block pb-0">Primary on success</span>
          <span>CSS classes: .bg-success .gradient-primary .gradient-direction-left</span><br />
        </div>
        <div class="col pb-2">
          <div class="colour-block bg-success gradient-primary gradient-direction-angle"></div>
          <span class="lead text-primary d-block pb-0">Primary on success</span>
          <span>CSS classes: .bg-success .gradient-primary .gradient-direction-angle</span><br />
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Semantic colour</h2>
    </div>
    <div class="container visualtest">
      <div class="overflow-auto mb-3">
        <table class="semantic-colours table--fullwidth border-0 mb-0">
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
              <td><span class="colour-circle bg-info"></span>Inform</td>
              <td></td>
              <td><span class="colour-circle bg-success"></span>Success</td>
              <td><span class="colour-circle bg-warning"></span>Warning</td>
              <td><span class="colour-circle bg-danger"></span>Error</td>
            </tr>
            <tr>
              <th>Status</th>
              <td></td>
              <td><span class="colour-circle bg-muted" style="background: var(--colour-muted)"></span>Not started</td>
              <td><span class="colour-circle bg-success"></span>Approved</td>
              <td><span class="colour-circle bg-warning"></span>Pending</td>
              <td><span class="colour-circle bg-danger"></span>Incomplete</td>
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
      </div>
    </div>

    <div class="container">
      <h2>Functional colours</h2>
    </div>

    <div class="container visualtest pb-5">
      <p class="pb-2">
        The theme colours can all be assigned by using the bootstrap classes but we also have a series of functional
        colours that are used across the system.
      </p>

      <details>
        <summary><span class="btn btn-tertiary">Colours</span></summary>

        <div class="row row-cols-2 row-cols-sm-4">
          <div class="col pb-2" v-for="(colour, name) in $shared.extendedColours" :key="name">
            <div
              :class="`colour-block ${name == 'Inverted' ? 'border' : ''}`"
              :style="`background: var(--colour-${name.toLowerCase()});`"
            ></div>
            <span class="lead text-primary d-block pb-0">{{ colourNames[name] }}</span>
            <span>CSS Variable: --colour-{{ name.toLowerCase() }}</span
            ><br />
            <span>Value: {{ colour }}</span
            ><br />
            <span>Dark mode value: {{ $shared.darkModeColours[name] }}</span>
          </div>
        </div>
      </details>
    </div>

    <div class="container">
      <h2>High contrast mode</h2>
      <p>
        All of the above colours, tints and gradients aren't guaranteed to be the same when the user is in high contrast
        mode as the browser enforces colour changes that are set by the user. The use of colour to display data will
        need to be changed when in high conrast mode, i.e. bar charts will need to use a pattern instead of a background
        colour.
      </p>
    </div>

    <div class="container">
      <h2>Wider colour pallete</h2>
    </div>

    <div class="container visualtest pb-5">
      <p class="pb-2">
        The wider colour palette is a range of colours that can be used in instances where colours can help with
        categorisation - calendar events, user types, applied filters, etc. They should not be used for status
        indications, in brand assets (print media, videos), or throughout the UI. Instead, use them sparingly and only
        when meaningful and functional for the user - see Tags.
      </p>

      <div class="row row-cols-2 row-cols-sm-4 d-none d-sm-flex">
        <div class="col pb-2"></div>
        <div class="col pb-2">
          <span class="label">Default state</span>
        </div>
        <div class="col pb-2">
          <span class="label">Hover state</span>
        </div>
        <div class="col pb-2">
          <span class="label">Active state</span>
        </div>
      </div>

      <div class="row row-cols-3 row-cols-sm-4" v-for="(colour, name) in $shared.widerColours" :key="name">
        <div class="col-12 col-sm pb-2">
          <span>Wider colour {{ name }}</span>
        </div>
        <div class="col pb-2">
          <div :class="`tag wider-colour-${name}`">{{ colour }}</div>
        </div>
        <div class="col pb-2">
          <div :class="`tag wider-colour-${name} hover`">{{ $shared.widerColoursHover[name] }}</div>
        </div>
        <div class="col pb-2">
          <div :class="`tag wider-colour-${name} active`">
            {{ $shared.widerColoursActive[name] }}
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h3 class="pb-2">Established user colours</h3>
      <p class="pb-2">
        Components can be associated with a range of user types - from vendor profiles to business details - and to
        distinguish them, we can use an icon and a colour in the empty image state.
      </p>
    </div>

    <UserColours></UserColours>

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
              <td>V1.5 added</td>
              <td>08.03.2023</td>
              <td>
                Added in wider colour palette<br />
                Added in user type colours
              </td>
            </tr>
            <tr>
              <td>V1 added</td>
              <td>06.06.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/colour-light-mode.pdf" download>Download light mode colours</a>
        <a href="/pdfs/colour-dark-mode.pdf" download>Download dark mode colours</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
  @use '../../../assets/sass/_func' as *;

  @layer utilities {
    @for $i from 1 through 10 {
      .bg-primary.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($primary, $tint) !important;
      }
    }
    @for $i from 1 through 10 {
      .bg-warning.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($warning, $tint) !important;
      }
    }

    @for $i from 1 through 10 {
      .bg-info.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($info, $tint) !important;
      }
    }

    @for $i from 1 through 10 {
      .bg-danger.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($danger, $tint) !important;
      }
    }
    @for $i from 1 through 10 {
      .bg-success.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($success, $tint) !important;
      }
    }
    @for $i from 1 through 10 {
      .bg-dark.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint($dark, $tint) !important;
      }
    }
    @for $i from 1 through 10 {
      .bg-pink.tint-#{$i}0 {
        $tint: 100%-($i * 10%);
        background-color: tint(#ffd2d2, $tint) !important;
      }
    }
    .bg-pink {
      background-color: #ffd2d2 !important;
    }
  }
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
    background: transparent;

    table {
      --hover-background: transparent;
      th,
      td {
        min-width: 0;
        padding-right: 1rem;
      }
    }
  }

  @media (forced-colors: active) {
    .colour-block,
    .colour-circle,
    .colour-tints {
      forced-color-adjust: none;
    }
  }

  .semantic-colours {
    padding: 0;
    box-shadow: none;
    background: transparent;
    table {
      background: transparent;
      --hover-background: transparent;
      --row-bg: transparent;

      th,
      td {
        min-width: 0;
        padding-right: 1rem;
      }
    }
  }

  .semantic-colours td {
    padding-left: 0 !important;
  }

  .semantic-colours td::after {
    display: none !important;
  }

  // Dark/Light mode themes

  @media screen and (prefers-color-scheme: light) {
    .dark-theme {

      --theme: dark;

      
    }

    html #visualtest:target ~ main > .light-mode:not(.visualtest) {
      display: block !important;

      > *:not(.visualtest) {
        display: none !important;
      }
    }
  }

  @media screen and (prefers-color-scheme: dark) {
    .light-theme {
      @each $color, $value in $theme-colors {
        --colour-#{$color}: #{$value};
      }
      @include reset-colours();

      // Reset the colours of lighter backgrounds to make sure they aren't over written by dark mode. Some other tweaks to colours are applied
      [class*='bg-']:not(.bg-primary):not(.bg-dark):not(.bg-danger):not(.bg-white):not(.bg-canvas):not(
          .bg-canvas-2
        ):not(.invert-colours) {
        @each $color, $value in $theme-colors {
          --colour-#{$color}: #{$value};
        }
        @include reset-colours();
        --colour-body: var(--colour-primary);
        color: var(--colour-body);
      }

      // Override the colours when on a dark background, similiar to dark mode but on a module level
      [class*='bg-']:not(.bg-info):not(.bg-success):not(.bg-light):not(.bg-white):not(.bg-canvas):not(.bg-canvas-2):not(
          .prevent-invert
        ),
      .invert-colours {
        @include invert-colours();

        color: #{$colour-inverted};
      }
    }

    html #visualtest:target ~ main > .dark-mode:not(.visualtest) {
      display: block !important;

      > *:not(.visualtest) {
        display: none !important;
      }
    }
  }

  .dark-theme .dark-mode {
    display: block;
  }

  .light-theme .light-mode {
    display: block;
  }

  .dark-theme .light-mode {
    display: none;
  }

  .light-theme .dark-mode,
  .dark-theme .colour-tints .bg-dark.tint-100,
  .dark-theme .colour-tints .bg-dark.tint-90 {
    display: none;
  }

  [for='light-mode']:before,
  [for='dark-mode']:before {
    display: none;
  }
</style>

