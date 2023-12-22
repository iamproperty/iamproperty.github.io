<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Illustrations</h1>
    </DSHeader>

    <div class="container">

      <p class="lead">Illustrations create an approachable and engaging visual element on comms, allowing us to present complex services in a simplified and understandable way.</p>
    </div>

    <div class="container">

      <h2>Tech illustrations</h2>
      <p>Tech illustrations are our brand’s signature isometric style elements that can be used to display and better explain your proposition or highlight distinctive areas on platforms. They work well overlaid upon a gradient background of the same colours. You can use the gradient patterns in <a href="/foundations/colours">Colours</a> in a tasteful and balanced way. Tints may be used to create depth between different elements.</p>
      <p class="lead">Can be used across marketing and UI mediums.</p>
      <h3>Blue variations</h3>
      <div class="row pb-5">
        <div class="col-6 col-sm-4 col-md-3"  v-for="(img) in blue" :key="img"><img :src="img.src" alt="" loading="lazy" /><p class="h4 text-center">{{ img.title }}</p></div>
      </div>
      <h3>Green variations</h3>
      <div class="row pb-5">
        <div class="col-6 col-sm-4 col-md-3"  v-for="(img) in green" :key="img"><img :src="img.src" alt="" loading="lazy" /><p class="h4 text-center">{{ img.title }}</p></div>
      </div>

      <h3>Other variations</h3>
      <p>Illustrations may be sourced or created to match the illustration suite. They must be isometric, with a minimal clean tech design. Avoid flat illustrations or illustrations with people.</p>
      <h4>Preferred style</h4>
      <img :src="preferredStyle" loading="lazy" alt="" class="mb-5" />
      <h4>Optional style</h4>
      <img :src="optionalStyles" loading="lazy" alt="" class="mb-5" />

      <h3>Best practices</h3>
      <p>An isometric grid should be used when creating new illustrations so that they remain in line with each other and achieve a uniform look.</p>

      <img :src="isometricGrid" loading="lazy" alt="" class="mb-5" />

      <div class="row pb-5">
        <div class="col-12 col-sm-6">
          <img :src="illustrationsDo" alt="" loading="lazy" class="mb-3" />
          <span class="h4 text-complete pb-1">Do</span>
          <p>Use illustrations that are isometric and modern in style, related to our services and what we do, i.e. houses, user groups, digital devices, etc.</p>
        </div>
        <div class="col-12 col-sm-6">
          <img :src="illustrationsDont" alt="" loading="lazy" class="mb-3" />
          <span class="h4 text-danger pb-1">Don't</span>
          <p>Use ‘traditional’ depictions of auction. We are moving away from symbols of auction with long-standing associations and into a modern understanding of auction, and our illustrations should reflect that.</p>
        </div>

        <div class="col-12 col-sm-6">
          <img :src="illustrationsDo2" alt="" loading="lazy" class="mb-3" />
          <span class="h4 text-complete pb-1">Do</span>
          <p>If text is used in illustrations, it should be concise and clear, even at smaller sizes. It should be against a high contrast background to remain legible.</p>
        </div>
        <div class="col-12 col-sm-6">
          <img :src="illustrationsDont2" alt="" loading="lazy" class="mb-3" />
          <span class="h4 text-danger pb-1">Don't</span>
          <p>Use Tech panels in illustrations with sentences of text or low contrast backgrounds. Considering using Tech panels separately.</p>
        </div>

        <div class="col-12 col-sm-6">
          <img :src="illustrationsCaution" alt="" loading="lazy" class="mb-3" />
          <span class="h4 text-warning pb-1">Caution</span>
          <p>Take care when combining multiple illustrations or designing complex illustrations. Use them in appropriate places, in more marketing focused media than UI.</p>
        </div>
        <div class="col-12 col-sm-6">
          <img :src="illustrationsDont3" alt="" loading="lazy" class="mb-3" />
          <span class="h4 text-danger pb-1">Don't</span>
          <p>Use illustrations around people or colours that clash with our brand colour palette.</p>
        </div>

      </div>

      <h2>Tech panels</h2>
      <p>When communications need visual elements or when we want to add depth to communications these graphical devices can be used.</p>
      <p>The panels can hold statements, number crunches, reviews, charts, graphs. You may overlap them. Use the panels sparingly to display important information relevant to the article or post (especially when overlaid on imagery or alongside illustrations).</p>
      <p class="lead">Can be used across marketing mediums.</p>

      <div class="row pb-5">
        <div class="col-6 col-sm-4 col-md-3">
          <img :src="techPanel" alt="" loading="lazy" />
          <span class="h4 text-center pb-1">Data</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
          <img :src="techPanel2" alt="" loading="lazy" />
          <span class="h4 text-center pb-1">Reviews</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
          <img :src="techPanel3" alt="" loading="lazy" />
          <span class="h4 text-center pb-1">Statement</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
          <img :src="techPanel4" alt="" loading="lazy" />
          <span class="h4 text-center pb-1">Bullet points</span>
        </div>
      </div>
      
      <h2>Icons</h2>
      <h3>Functional icons</h3>
      <p>Icons used within the system should be functional, simple, modern and friendly. Each icon is reduced to its minimal form, expressing essential characteristics. They have a symmetrical and consistent look, ensuring readability and clarity, even at small sizes.</p>
      <div class="row">
        <div class="col-6 col-sm-4 col-md-2 pb-4" v-for="(icon) in uiIcons" :key="icon">
          <i :class="`${icon} icon--md mb-2 text-primary`"></i>
          <hr/>
          <span><strong>class:</strong> {{icon}}</span>
        </div>
      </div>
      <a href="/elements/icons" class="btn btn-tertiary">See more abouts icons</a>

      <div class="row pb-5 pt-3">
        <div class="col-12 col-sm-6">
          <img :src="illustrationsDo3" alt="" loading="lazy" class="mb-3" />
          <span class="h4 text-complete pb-1">Do</span>
          <p>Use icons that are relevant to the context of the UI to provide greater clarity and legibility</p>
        </div>
        <div class="col-12 col-sm-6">
          <img :src="illustrationsDont4" alt="" loading="lazy" class="mb-3" />
          <span class="h4 text-danger pb-1">Don't</span>
          <p>Use icons that are offensive or are unclear in meaning.</p>
        </div>
      </div>

      <h3>Non-functional icons</h3>
      <p>Simple icons can be used in designs to help illustrate processes or key points alongside imagery or tech panels. Due to their padded container and sometimes low contrast colouring, these elements should remain a marketing exclusive element and System Icons are used for UI.</p>
      <p>These icons can be displayed in any of the primary colour palette (See examples below). You may create additional icons that match the suite.</p>
      <p class="lead">Can be used across marketing mediums</p>

      <div class="row pb-5">
        <div class="col-6 col-md-3">
          <img :src="NFIcon" alt="" loading="lazy" class="mb-1" />
          <span class="h4">Call</span>
        </div>
        <div class="col-6 col-md-3">
          <img :src="NFIcon2" alt="" loading="lazy" class="mb-1" />
          <span class="h4">CRM Database</span>
        </div>
        <div class="col-6 col-md-3">
          <img :src="NFIcon3" alt="" loading="lazy" class="mb-1" />
          <span class="h4">Digital client journey</span>
        </div>
        <div class="col-6 col-md-3">
          <img :src="NFIcon4" alt="" loading="lazy" class="mb-1" />
          <span class="h4">Large house</span>
        </div>
      </div>

      <div class="row pb-5 pt-3">
        <div class="col-12 col-sm-6">
          <img :src="illustrationsDo4" alt="" loading="lazy" class="mb-3" />
          <span class="h4 text-complete pb-1">Do</span>
          <p>Layer the icons over images or group them with Tech Panels to add further context.</p>
        </div>
        <div class="col-12 col-sm-6">
          <img :src="illustrationsDont5" alt="" loading="lazy" class="mb-3" />
          <span class="h4 text-danger pb-1">Don't</span>
          <p>Use non-functional icons within the UI.</p>
        </div>
      </div>

      <h2>Application</h2>
      <p>There is a separation between the application of brand elements across platforms and media.</p>
      <p><strong>UI Application</strong><br/> Product platforms and internal systems will have a more functional and user focused aesthetic, prioritising simple and easily understood elements that convey direction and clear meaning to users to assist in their interaction with the UI. </p>
      <p><strong>Marketing Application</strong><br/> Marketing platforms and media have a more flexible approach, building of brand elements and palettes to create designs. Illustrations can be layered over images, break up copy, communicate.</p>

      <h3>When to use illustration in marketing</h3>

      <p>We use illustration across marketing touch points to support a cohesive, clear, and consistent story from start to finish. It’s almost always used to support copy, and should never distract or overshadow the key message. Illustration plays a more prominent role in marketing than in product in order to help tell stories, and is most commonly used in the following places: </p>

      <ul>
        <li>websites, landing pages, micro-sites, service sites</li>
        <li>presentations</li>
        <li>demand generation assets (banner ads, etc)</li>
        <li>email</li>
        <li>social media</li>
        <li>infographic</li>
      </ul>

      
      <div class="row pb-5 pt-3">
        <div class="col-12 col-sm-6">
          <img :src="illustrationsMarketing" alt="" loading="lazy" class="mb-3" />
        </div>
        <div class="col-12 col-sm-6">
          <img :src="illustrationsMarketing2" alt="" loading="lazy" class="mb-3" />
        </div>
        <div class="col-12 col-sm-6">
          <img :src="illustrationsMarketing3" alt="" loading="lazy" class="mb-3" />
        </div>
      </div>

      
      <h3>When to use illustration in UI</h3>

      <p>Use illustrations and icons in UI to provide clarity and help users distinguish paths they can take on the platform. They can be used as a main element on the page - headers, error pages, banners - or in smaller components - cards.</p>

      <ul>
        <li>Product platforms (iamsold admin system, iamsold Agent platform, Movebutler, Openview)</li>
        <li>Client facing front end platforms (iamsold auction website)</li>
        <li>Apps</li>
      </ul>

      <div class="row pb-5 pt-3">
        <div class="col-12 col-sm-6">
          <img :src="illustrationsUI" alt="" loading="lazy" class="mb-3" />
        </div>
        <div class="col-12 col-sm-6">
          <img :src="illustrationsUI2" alt="" loading="lazy" class="mb-3" />
        </div>
      </div>

    </div>


  </main>
</template>

<style lang="scss">
.example {
}

</style>

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/type-header.png'

import isometricGrid from '../../img/illustrations/isometric-grid.png'
import optionalStyles from '../../img/illustrations/optional-styles.png'
import preferredStyle from '../../img/illustrations/preferred-style.png'

import illustrationsDo from '../../img/illustrations/illustrations-do.png'
import illustrationsDo2 from '../../img/illustrations/illustrations-do-2.png'
import illustrationsDo3 from '../../img/illustrations/illustrations-do-3.png'
import illustrationsDo4 from '../../img/illustrations/illustrations-do-4.png'

import illustrationsDont from '../../img/illustrations/illustrations-dont.png'
import illustrationsDont2 from '../../img/illustrations/illustrations-dont-2.png'
import illustrationsDont3 from '../../img/illustrations/illustrations-dont-3.png'
import illustrationsDont4 from '../../img/illustrations/illustrations-dont-4.png'
import illustrationsDont5 from '../../img/illustrations/illustrations-dont-5.png'

import illustrationsCaution from '../../img/illustrations/illustrations-caution.png'

import illustrationsMarketing from '../../img/illustrations/illustrations-marketing.png'
import illustrationsMarketing2 from '../../img/illustrations/illustrations-marketing-2.png'
import illustrationsMarketing3 from '../../img/illustrations/illustrations-marketing-3.png'

import illustrationsUI from '../../img/illustrations/illustrations-ui.png'
import illustrationsUI2 from '../../img/illustrations/illustrations-ui-2.png'


import NFIcon from '../../img/illustrations/nf-icon.png'
import NFIcon2 from '../../img/illustrations/nf-icon-2.png'
import NFIcon3 from '../../img/illustrations/nf-icon-3.png'
import NFIcon4 from '../../img/illustrations/nf-icon-4.png'

import techPanel from '../../img/illustrations/tech-panel-1.png'
import techPanel2 from '../../img/illustrations/tech-panel-2.png'
import techPanel3 from '../../img/illustrations/tech-panel-3.png'
import techPanel4 from '../../img/illustrations/tech-panel-4.png'


export default {
  components: {
    DSHeader
  },
  data () {
    return {
      headerImg: headerImg,
      isometricGrid:isometricGrid,
      optionalStyles: optionalStyles,
      preferredStyle: preferredStyle,
      illustrationsDo: illustrationsDo,
      illustrationsDo2: illustrationsDo2,
      illustrationsDo3: illustrationsDo3,
      illustrationsDo4: illustrationsDo4,
      illustrationsDont: illustrationsDont,
      illustrationsDont2: illustrationsDont2,
      illustrationsDont3: illustrationsDont3,
      illustrationsDont4: illustrationsDont4,
      illustrationsDont5: illustrationsDont5,
      illustrationsCaution: illustrationsCaution,
      illustrationsMarketing: illustrationsMarketing,
      illustrationsMarketing2: illustrationsMarketing2,
      illustrationsMarketing3: illustrationsMarketing3,
      illustrationsUI: illustrationsUI,
      illustrationsUI2: illustrationsUI2,
      NFIcon: NFIcon,
      NFIcon2: NFIcon2,
      NFIcon3: NFIcon3,
      NFIcon4: NFIcon4,
      techPanel: techPanel,
      techPanel2: techPanel2,
      techPanel3: techPanel3,
      techPanel4: techPanel4,
      blue: [
        {title: "Auctioneer", src: "/img/illustrations/auctioneer.png"},
        {title: "Branch", src: "/img/illustrations/branch.png"},
        {title: "Buyer", src: "/img/illustrations/buyer.png"},
        {title: "Company Level", src: "/img/illustrations/company-level.png"},
        {title: "Contractors", src: "/img/illustrations/contractors.png"},
        {title: "Estate Agents", src: "/img/illustrations/estate-agents.png"},
        {title: "Landlords", src: "/img/illustrations/landlords.png"},
        {title: "Seller", src: "/img/illustrations/seller.png"},
        {title: "Add New Property", src: "/img/illustrations/add-new-property.png"},
        {title: "Find Existing Property", src: "/img/illustrations/find-existing-property.png"},
        {title: "What’s New (1)", src: "/img/illustrations/whats-new.png"},
        {title: "What’s New (2)", src: "/img/illustrations/whats-new-2.png"},
        {title: "Information Works", src: "/img/illustrations/information-works.png"}
      ],
      green: [
        {title: "Auctioneer", src: "/img/illustrations/green/auctioneer.png"},
        {title: "Branch", src: "/img/illustrations/green/branch.png"},
        {title: "Buyer", src: "/img/illustrations/green/buyer.png"},
        {title: "Company Level", src: "/img/illustrations/green/company-level.png"},
        {title: "Contractors", src: "/img/illustrations/green/contractors.png"},
        {title: "Estate Agents", src: "/img/illustrations/green/estate-agents.png"},
        {title: "Landlords", src: "/img/illustrations/green/landlords.png"},
        {title: "Seller", src: "/img/illustrations/green/seller.png"},
        {title: "Add New Property", src: "/img/illustrations/green/add-new-property.png"},
        {title: "Find Existing Property", src: "/img/illustrations/green/find-existing-property.png"},
        {title: "What’s New (1)", src: "/img/illustrations/green/whats-new.png"},
        {title: "What’s New (2)", src: "/img/illustrations/green/whats-new-2.png"}
      ],
      uiIcons: [
        "fa-angle-up fa-light",
        "fa-angle-down fa-light",
        "fa-angle-left fa-light",
        "fa-angle-right fa-light",
        "fa-plus fa-regular",
        "fa-circle-info fa-light",
        "fa-arrow-up-arrow-down fa-light",
        "fa-arrows-up-down fa-light",
        "fa-arrow-down-to-bracket fa-light",
        "fa-arrow-up-from-square fa-light",
        "fa-magnifying-glass fa-regular",
        "fa-pen-to-square fa-light",
        "fa-check fa-regular",
        "fa-sliders fa-light",
        "fa-arrow-up-right-from-square fa-light",
        "fa-arrows-rotate fa-light",
        "fa-arrow-rotate-left fa-light",
        "fa-link fa-light",
        "fa-xmark fa-light",
        "fa-bars fa-solid",
        "fa-arrow-up-right-from-square fa-light"
      ],
    }
  },
}
</script>
