<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Typography</h1>
    </DSHeader>

    <div class="container ">
      <h2>Typography - Headings</h2>
      <p class="lead">Most headings will have a max-width of {{ $shared.cssVars.text_mw_rem }} ({{$shared.cssVars.text_mw}}px) applied to aid readability, with the exception of H1 and H2, which will have an auto width.</p>
      <p class="lead">We use Qanelas font for all in-product experiences. This ensures that the UI is optimised to be highly legible, performs well, and is frictionless as you move between iamproperty products and the rest of the system.</p>
    </div>
    <div class="container visualtest">
      <h3>Headings - Mobile</h3>
      
      <div class="row">
        <div class="d-none d-md-block col-md-3">
          <img :src="mobileImg" alt="Rendered image of a mobile phone" loading="lazy" />
        </div>
        <div class="col">
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h1" :style="`font-size:${$shared.cssVars.h1_fs_rem}!important;line-height:${$shared.cssVars.h1_lh_rem}!important;padding-bottom:${$shared.cssVars.h1_pb_rem}!important;`">This is heading 1<span class="lineheight-demo" :style="`height:${$shared.cssVars.h1_pb_rem}!important`"></span></span>
              
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small">H1<br/>Font-family: Qanelas<br/>Font-weight: Bold<br/>Font-size: {{$shared.cssVars.h1_fs_rem}} ({{$shared.cssVars.h1_fs}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.h1_lh_rem}} ({{$shared.cssVars.h1_lh}}px)<br/>Padding-bottom: {{$shared.cssVars.h1_pb_rem}} ({{$shared.cssVars.h1_pb}}px)</span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h2" :style="`font-size:${$shared.cssVars.h2_fs_rem}!important;line-height:${$shared.cssVars.h2_lh_rem}!important;padding-bottom:${$shared.cssVars.h2_pb_rem}!important;`">This is heading 2<span class="lineheight-demo" :style="`height:${$shared.cssVars.h2_pb_rem}!important`"></span></span>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small">H2<br/>Font-family: Qanelas<br/>Font-weight: Bold<br/>Font-size: {{$shared.cssVars.h2_fs_rem}} ({{$shared.cssVars.h2_fs}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.h2_lh_rem}} ({{$shared.cssVars.h2_lh}}px)<br/>Padding-bottom: {{$shared.cssVars.h2_pb_rem}} ({{$shared.cssVars.h2_pb}}px)</span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h3" :style="`font-size:${$shared.cssVars.h3_fs_rem}!important;line-height:${$shared.cssVars.h3_lh_rem}!important;padding-bottom:${$shared.cssVars.h3_pb_rem}!important;`">This is heading 3<span class="lineheight-demo" :style="`height:${$shared.cssVars.h3_pb_rem}!important`"></span></span>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small">H3<br/>Font-family: Qanelas<br/>Font-weight: Bold<br/>Font-size: {{$shared.cssVars.h3_fs_rem}} ({{$shared.cssVars.h3_fs}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.h3_lh_rem}} ({{$shared.cssVars.h3_lh}}px)<br/>Padding-bottom: {{$shared.cssVars.h3_pb_rem}} ({{$shared.cssVars.h3_pb}}px)</span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h4" :style="`font-size:${$shared.cssVars.h4_fs_rem}!important;line-height:${$shared.cssVars.h3_lh_rem}!important;padding-bottom:${$shared.cssVars.h4_pb_rem}!important;`">This is heading 4<span class="lineheight-demo" :style="`height:${$shared.cssVars.h4_pb_rem}!important`"></span></span>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small">H4<br/>Font-family: Qanelas<br/>Font-weight: Semi-Bold<br/>Font-size: {{$shared.cssVars.h4_fs_rem}} ({{$shared.cssVars.h4_fs}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.h4_lh_rem}} ({{$shared.cssVars.h4_lh}}px)<br/>Padding-bottom: {{$shared.cssVars.h4_pb_rem}} ({{$shared.cssVars.h4_pb}}px)</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container visualtest">
      <h3>Headings - Tablet and Desktop</h3>
      
      <div class="row">
        <div class="d-none d-md-block col-md-3">
          <img :src="tabletDesktopImg" alt="Rendered image of a tablet and a desktop PC" loading="lazy" />
        </div>
        <div class="col">
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h1" :style="`font-size:${$shared.cssVars.h1_fs_sm_rem}!important;line-height:${$shared.cssVars.h1_lh_sm_rem}!important;padding-bottom:${$shared.cssVars.h1_pb_sm_rem}!important;`">This is heading 1<span class="lineheight-demo" :style="`height:${$shared.cssVars.h1_pb_sm_rem}!important`"></span></span>
              
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small">H1<br/>Font-family: Qanelas<br/>Font-weight: Bold<br/>Font-size: {{$shared.cssVars.h1_fs_sm_rem}} ({{$shared.cssVars.h1_fs_sm}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.h1_lh_sm_rem}} ({{$shared.cssVars.h1_lh_sm}}px)<br/>Padding-bottom: {{$shared.cssVars.h1_pb_sm_rem}} ({{$shared.cssVars.h1_pb_sm}}px)</span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h2" :style="`font-size:${$shared.cssVars.h2_fs_sm_rem}!important;line-height:${$shared.cssVars.h2_lh_sm_rem}!important;padding-bottom:${$shared.cssVars.h2_pb_sm_rem}!important;`">This is heading 2<span class="lineheight-demo" :style="`height:${$shared.cssVars.h2_pb_sm_rem}!important`"></span></span>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small">H2<br/>Font-family: Qanelas<br/>Font-weight: Bold<br/>Font-size: {{$shared.cssVars.h2_fs_sm_rem}} ({{$shared.cssVars.h2_fs_sm}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.h2_lh_sm_rem}} ({{$shared.cssVars.h2_lh_sm}}px)<br/>Padding-bottom: {{$shared.cssVars.h2_pb_sm_rem}} ({{$shared.cssVars.h2_pb_sm}}px)</span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h3" :style="`font-size:${$shared.cssVars.h3_fs_sm_rem}!important;line-height:${$shared.cssVars.h3_lh_sm_rem}!important;padding-bottom:${$shared.cssVars.h3_pb_sm_rem}!important;`">This is heading 3<span class="lineheight-demo" :style="`height:${$shared.cssVars.h3_pb_sm_rem}!important`"></span></span>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small">H3<br/>Font-family: Qanelas<br/>Font-weight: Bold<br/>Font-size: {{$shared.cssVars.h3_fs_sm_rem}} ({{$shared.cssVars.h3_fs_sm}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.h3_lh_sm_rem}} ({{$shared.cssVars.h3_lh_sm}}px)<br/>Padding-bottom: {{$shared.cssVars.h3_pb_sm_rem}} ({{$shared.cssVars.h3_pb_sm}}px)</span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">
              <span class="h4" :style="`font-size:${$shared.cssVars.h4_fs_sm_rem}!important;line-height:${$shared.cssVars.h3_lh_sm_rem}!important;padding-bottom:${$shared.cssVars.h4_pb_sm_rem}!important;`">This is heading 4<span class="lineheight-demo" :style="`height:${$shared.cssVars.h4_pb_sm_rem}!important`"></span></span>
            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small">H4<br/>Font-family: Qanelas<br/>Font-weight: Semi-Bold<br/>Font-size: {{$shared.cssVars.h4_fs_sm_rem}} ({{$shared.cssVars.h4_fs_sm}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.h4_lh_sm_rem}} ({{$shared.cssVars.h4_lh_sm}}px)<br/>Padding-bottom: {{$shared.cssVars.h4_pb_sm_rem}} ({{$shared.cssVars.h4_pb_sm}}px)</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container visualtest">
      
      <h2>Typography - Body</h2>
      <p class="lead">Our body font is Qantas. It should be used for all supporting copy or information. All body will have a max-width of {{ $shared.cssVars.text_mw_rem }} ({{$shared.cssVars.text_mw}}px) applied to aid readability.</p>

      
      <div class="row">
        <div class="d-none d-md-block col-md-3">
        </div>
        <div class="col">
          <!-- Lead -->
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">

              <p class="lead pb-1">LEAD</p>
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua. Ut enim ad minim veniam, nisi ut aliquip ex ea commodo consequat.<span class="lineheight-demo" :style="`height:${$shared.cssVars.lead_pb_rem}!important`"></span></p>

            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <span class="small extra-small">.lead<br/>Font-family: Qanelas<br/>Font-weight: Semi-Bold<br/>Font-size: {{$shared.cssVars.lead_fs_rem}} ({{$shared.cssVars.lead_fs}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.lead_lh_rem}} ({{$shared.cssVars.lead_lh}}px)<br/>Padding-bottom: {{$shared.cssVars.lead_pb_rem}} ({{$shared.cssVars.lead_pb}}px)</span>
            </div>
          </div>
          <!-- Body -->
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">

              <p class="lead pb-1">BODY</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.<span class="lineheight-demo" :style="`height:${$shared.cssVars.body_pb_rem}!important`"></span></p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.<span class="lineheight-demo" :style="`height:${$shared.cssVars.body_end_pb_rem}!important`"></span></p>

            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <p class="small extra-small pb-2">p<br/>Font-family: Qanelas<br/>Font-weight: Normal<br/>Font-size: {{$shared.cssVars.body_fs_rem}} ({{$shared.cssVars.body_fs}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.body_lh_rem}} ({{$shared.cssVars.body_lh}}px)<br/>Padding-bottom: {{$shared.cssVars.body_pb_end_rem}} ({{$shared.cssVars.body_end_pb}}px)</p>
              
              <p class="small extra-small">p:has(+ p)<br/>Padding-bottom: {{$shared.cssVars.body_pb_rem}} ({{$shared.cssVars.body_pb}}px)</p>
            </div>
          </div>
          <!-- Small -->
          <div class="row">
            <div class="col-12 col-sm-7 mb-2">

              <p class="lead pb-1">SMALL</p>
              <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span class="lineheight-demo" :style="`height:${$shared.cssVars.small_pb_rem}!important`"></span></p>

            </div>
            <div class="col-12 col-sm-4 mb-5 ms-auto">
              <p class="small extra-small pb-2">.small, small<br/>Font-family: Arial<br/>Font-weight: Medium<br/>Font-size: {{$shared.cssVars.small_fs_rem}} ({{$shared.cssVars.small_fs}}px)<br/>Letter-spacing: 0px<br/>Line-height: {{$shared.cssVars.small_lh_rem}} ({{$shared.cssVars.small_lh}}px)<br/>Padding-bottom: {{$shared.cssVars.small_pb_rem}} ({{$shared.cssVars.small_pb}}px)</p>
              
            </div>
          </div>
          
        </div>
      </div>

    </div>

    <div class="container visualtest">


      <h3 class="h4 pb-2">Blockquote</h3>
      <blockquote>
        <p>Our body font is Qantas. It should be used for all supporting copy or information. All body will have a max-width of 50rem (800px) applied to aid readability.</p>
        <cite>Citation</cite>
      </blockquote>
      <h3 class="h4 pb-2">Stat</h3>
      <span class="stat">3,886</span>
    </div>

    <div class="container visualtest">

      <h2>Typography - colour</h2>
      <div class="colour-sample">
        <div class="colour" :style="`background:${$shared.cssVars.themeColour_primary}!important`"></div>
        <span class="lead pb-2">Primary text colour</span><br/>
        <span>CSS Variable: --colour-primary</span><br/>
        <p>HEX code: {{ $shared.cssVars.themeColour_primary.toUpperCase() }}</p>
      </div>
      <div class="colour-sample">
        <div class="colour border" :style="`background:${$shared.cssVars.nonThemeColour_inverted}!important`"></div>
        <span class="lead pb-2">Inverted text colour</span><br/>
        <span>CSS Variable: --colour-white</span><br/>
        <p>HEX code: {{ $shared.cssVars.nonThemeColour_inverted.toUpperCase() }}</p>
      </div>
      <div class="colour-sample">
        <div class="colour" :style="`background:${$shared.cssVars.nonThemeColour_body}!important`"></div>
        <span class="lead pb-2">Paragraph body text colour</span><br/>
        <span>CSS Variable: --colour-body</span><br/>
        <p>HEX code: {{ $shared.cssVars.nonThemeColour_body.toUpperCase() }}</p>
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
@use "../../../assets/sass/_func" as *;

.extra-small {
  line-height: 1.2;
}

.h1,.h2,.h3,.h4, .lead, p, .small {
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
<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'
import mobileImg from '../../img/mobile.png'
import tabletDesktopImg from '../../img/tablet-desktop.png'
import Tabs from '../../../src/components/Tabs/Tabs.vue'
import Tab from '../../../src/components/Tabs/Tab.vue'

export default {
  name: 'TypeDoc',
  components: {
    DSHeader,
    Tabs,
    Tab
  },
  data: function () {
    return {
      headerImg: headerImg,
      mobileImg: mobileImg,
      tabletDesktopImg: tabletDesktopImg
    }
  }
}
</script>