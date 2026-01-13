<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import mobileImg from '../../img/mobile.png';
  import tabletDesktopImg from '../../img/tablet-desktop.png';
  import Tabs from '../../../src/components/Tabs/Tabs.vue';
  import Tab from '../../../src/components/Tabs/Tab.vue';

  const getVar = (propertyString) => {

    let returnString = window.getComputedStyle(document.querySelector('body')).getPropertyValue(propertyString).toUpperCase();

    returnString = returnString.replace('LIGHT-DARK(','').replace(')','');

    let returnStringArr = returnString.split(",");

    returnString = returnStringArr[0];

    if (returnStringArr[1]) {
      
      returnString = `<span class="light-var">${returnStringArr[0]}</span><span class="dark-var">${returnStringArr[1]}</span>`;
    }

    return returnString;
  };

  const roundNearQtr = (number) => { return (Math.round(number * 4) / 4).toFixed(2); };
  const roundNearQtrUp = (number) => { return (Math.ceil(number * 4) / 4).toFixed(2); };

  const maxWidth = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--content-max-width');
  const maxWidth_px = parseInt(maxWidth) * 16;

  const body_fs = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--body-fs');

  const h1_fs = parseFloat(body_fs) * roundNearQtr(Math.pow(1.2,6)) +'rem' ;
  const h1_fs_px = parseFloat(h1_fs) * 16;
  
  const h1_lh = parseFloat(roundNearQtr(parseFloat(h1_fs) * 1.2)) +'rem';
  const h1_lh_px = parseFloat(h1_lh) * 16;
  const h1_pb = parseFloat(roundNearQtr(parseFloat(h1_fs) * 1.2)) +'rem';
  const h1_pb_px = parseFloat(h1_pb) * 16;

  const h2_fs = parseFloat(body_fs) * roundNearQtr(Math.pow(1.2,5)) +'rem' ;
  const h2_fs_px = parseFloat(h2_fs) * 16;

  const h2_lh = parseFloat(roundNearQtr(parseFloat(h2_fs) * 1.2)) +'rem';
  const h2_lh_px = parseFloat(h2_lh) * 16;
  const h2_pb = parseFloat(roundNearQtr(parseFloat(h2_fs) * 1.2)) +'rem';
  const h2_pb_px = parseFloat(h2_pb) * 16;

  const h3_fs = parseFloat(body_fs) * roundNearQtr(Math.pow(1.2,3)) +'rem' ;
  const h3_fs_px = parseFloat(h3_fs) * 16;

  const h3_lh = parseFloat(roundNearQtrUp(parseFloat(h3_fs) * 1.2)) +'rem';
  const h3_lh_px = parseFloat(h3_lh) * 16;
  const h3_pb = parseFloat(roundNearQtrUp(parseFloat(h3_fs) * 1.2)) +'rem';
  const h3_pb_px = parseFloat(h3_pb) * 16;

  const h4_fs = parseFloat(body_fs) * roundNearQtr(Math.pow(1.2,2)) +'rem' ;
  const h4_fs_px = parseFloat(h4_fs) * 16;

  const h4_lh = parseFloat(roundNearQtrUp(parseFloat(h4_fs) * 1.2)) +'rem';
  const h4_lh_px = parseFloat(h4_lh) * 16;
  const h4_pb = parseFloat(roundNearQtrUp(parseFloat(h4_fs) * 1.2)) +'rem';
  const h4_pb_px = parseFloat(h4_pb) * 16;





</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Typography</h1>
    </DSHeader>

    <div class="container">
      <h2>Typography - Headings</h2>
      <p class="lead">
        Most headings will have a max-width of {{maxWidth}} ({{ maxWidth_px }}px)
        applied to aid readability, with the exception of H1 and H2, which will have an auto width.
      </p>
      <p class="lead">
        We use Qanelas font for all in-product experiences. This ensures that the UI is optimised to be highly legible,
        performs well, and is frictionless as you move between iamproperty products and the rest of the system.
      </p>
      <p>We use a type scale ratio of 1.2, minor third scale, to ensure consistency through type sizing.</p>
    </div>
    <div class="container visualtest">
      <div class="row">
        <div class="d-none d-md-block col-md-3">
          <img :src="tabletDesktopImg" alt="Rendered image of a tablet and a desktop PC" loading="lazy" class="mb-5" />
          <img :src="mobileImg" alt="Rendered image of a mobile phone" loading="lazy" />
        </div>
        <div class="col">
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h1">This is heading 1<span
                  class="lineheight-demo"
                  :style="`height:${h1_pb}!important`"
                ></span
              ></span>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small"
                >H1<br />Font-family: Qanelas<br />Font-weight: Bold<br />Font-size: {{ h1_fs }} ({{h1_fs_px}}px)<br />Letter-spacing:
                0px<br />Line-height: {{ h1_lh }} ({{h1_lh_px}}px)<br />Padding-bottom: {{ h1_pb }} ({{h1_pb_px}}px)</span
              >
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h2">This is heading 2<span
                  class="lineheight-demo"
                  :style="`height:${h2_pb}!important`"
                ></span
              ></span>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small"
                >H2<br />Font-family: Qanelas<br />Font-weight: Bold<br />Font-size: {{ h2_fs }} ({{h2_fs_px}}px)<br />Letter-spacing:
                0px<br />Line-height: {{ h2_lh }} ({{h2_lh_px}}px)<br />Padding-bottom: {{ h2_pb }} ({{h2_pb_px}}px)</span
              >
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h3">This is heading 3<span
                  class="lineheight-demo"
                  :style="`height:${h3_pb}!important`"
                ></span
              ></span>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small"
                >H3<br />Font-family: Qanelas<br />Font-weight: Semi-Bold <br />Font-size: {{ h3_fs }} ({{h3_fs_px}}px)<br />Letter-spacing:
                0px<br />Line-height: {{ h3_lh }} ({{h3_lh_px}}px)<br />Padding-bottom: {{ h3_pb }} ({{h3_pb_px}}px)</span
              >
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h4">This is heading 4
                <span
                  class="lineheight-demo"
                  :style="`height:${h4_pb}!important`"
                ></span
              ></span>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small"
                >H4<br />Font-family: Qanelas<br />Font-weight: Semi-Bold<br />Font-size: {{ h4_fs }} ({{h4_fs_px}}px)<br />Letter-spacing:
                0px<br />Line-height: {{ h4_lh }} ({{h4_lh_px}}px)<br />Padding-bottom: {{ h4_pb }} ({{h4_pb_px}}px)</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container visualtest">
      <h2>Typography - Body</h2>
      <p class="lead">
        Our body font is Qanelas. It should be used for all supporting copy or information. All body will have a
        max-width of 50rem (800px) applied to aid readability.
      </p>

      <div class="row">
        <div class="d-none d-md-block col-md-3"></div>
        <div class="col">
          <!-- Lead -->
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <p class="lead pb-1">LEAD</p>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua. Ut enim ad minim
                veniam, nisi ut aliquip ex ea commodo consequat.<span
                  class="lineheight-demo"
                  :style="`height:3rem!important`"
                ></span>
              </p>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small"
                >.lead<br />Font-family: Qanelas<br />Font-weight: Semi-Bold<br />Font-size:
                1.125rem (18px)<br />Letter-spacing: 0px<br />Line-height:
                1.75rem (28px)<br />Padding-bottom:
                3rem (48px)</span
              >
            </div>
          </div>

          <!-- Body -->
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <p class="lead pb-1">BODY</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <p class="small extra-small pb-2">
                body<br />Font-family: Qanelas<br />Font-weight: Normal<br />Font-size:
                1rem (16px)<br />Letter-spacing: 0px<br />Line-height:
                auto
              </p>
            </div>
          </div>

          <!-- Paragraph -->
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <p class="lead pb-1">PARAGRAPH</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.<span
                  class="lineheight-demo"
                  :style="`height:1.5rem!important`"
                ></span>
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.<span
                  class="lineheight-demo"
                  :style="`height:3rem!important`"
                ></span>
              </p>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <p class="small extra-small pb-2">
                p<br />Font-family: Qanelas<br />Font-weight: Normal<br />Font-size:
                1rem (16px)<br />Letter-spacing: 0px<br />Line-height:
                1.5rem (24px)<br />
                Padding-bottom: 3rem (48px)
              </p>

              <p class="small extra-small">
                p:has(+ p)<br />Padding-bottom: 1.5rem (24px)
              </p>
            </div>
          </div>
          <!-- Small -->
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <p class="lead pb-1">SMALL</p>
              <p class="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.<span
                  class="lineheight-demo"
                  :style="`height:3rem!important`"
                ></span>
              </p>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <p class="small extra-small pb-2">
                .small, small<br />Font-family: Qanelas<br />Font-weight: Medium<br />Font-size:
                0.875rem (14px)<br />Letter-spacing: 0px<br />Line-height:
                1.5rem (24px)<br />Padding-bottom:
                3rem (48px)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container visualtest">
      <h3 class="h4 pb-2">Blockquote</h3>
      <blockquote>
        <p>
          Our body font is Qanelas. It should be used for all supporting copy or information. All body will have a
          max-width of 50rem (800px) applied to aid readability.
        </p>
        <cite>Citation</cite>
      </blockquote>
      <h3 class="h4 pb-2">Stat</h3>
      <span class="stat">3,886</span>
    </div>

    <div class="container visualtest">
      <h2>Typography - colour</h2>
      <div class="colour-sample">
        <div class="colour bg-primary"></div>
        <span class="lead pb-2">Primary text colour</span><br />
        <span>CSS Variable: --colour-primary</span><br />
        <p>HEX code: <span v-html="getVar('--colour-primary')"></span></p>
      </div>
      <div class="colour-sample">
        <div class="colour border" :style="`background:${$shared.cssVars.nonThemeColour_inverted}!important`"></div>
        <span class="lead pb-2">Inverted text colour</span><br />
        <span>CSS Variable: --colour-white</span><br />
        <p>HEX code: <span v-html="getVar('--colour-white')"></span></p>
      </div>
      <div class="colour-sample">
        <div class="colour" :style="`background:${$shared.cssVars.nonThemeColour_body}!important`"></div>
        <span class="lead pb-2">Paragraph body text colour</span><br />
        <span>CSS Variable: --colour-body</span><br />
        <p>HEX code: <span v-html="getVar('--colour-body')"></span></p>
      </div>
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
              <td>21.04.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/typography.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @use '../../../assets/sass/_func' as *;

  .extra-small {
    line-height: 1.2;
  }

  .h1,
  .h2,
  .h3,
  .h4,
  .lead,
  p,
  .small {
    position: relative;
  }
  .lineheight-demo {
    width: 100%;
    background: var(--colour-secondary);
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .colour-sample {
    float: left;
    margin-right: 1rem;

    @media (forced-colors: active) {
      forced-color-adjust: none;
    }

    .colour {
      display: block;
      height: rem(80);
      width: rem(172);
      margin-bottom: 1rem;
    }
  }
</style>
