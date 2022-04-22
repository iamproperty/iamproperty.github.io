<template>
  <div>
    <Nav logo="movebutler" class="nav--marketplace">
      

        <span class="h6 text-muted">Services</span>

      <a href="/standalone/marketplace" class="text-decoration-none mb-4 d-flex justify-content-between align-items-center">
        <Logo id="property" class="pb-0 pe-0 fs-2"></Logo>
        <span class="text-success">Active</span>
      </a>

      <a href="/standalone/movebutler" class="text-decoration-none mb-4 d-flex justify-content-between align-items-center">
        <Logo id="movebutler" class="pb-0 pe-0 fs-2"></Logo>
        <span class="text-success">Active</span>
      </a>

      <a href="/standalone/agent" class="text-decoration-none mb-5 d-flex justify-content-between align-items-center">
        <Logo id="sold" class="pb-0 pe-0 fs-2"></Logo>
        <span class="text-success">Active</span>
      </a>

      <span class="h6 text-muted">My Branches</span>

      <form>
      <Input type="select" id="test1" label="Today, you're at" :options="[{display:'Branch 1',value:'1'},{display:'Branch Two',value:'2'},{display:'Create new branch',value:'new'}]" data-value-if="new" data-redirect="/cp/company/branches/create"></Input>
      </form>

      <span class="h6 text-muted">Menu</span>

      <a href="/" class="nav__featured-link text-decoration-none pb-3 d-block mb-0">
        <span class="row">
          <span class="col mw-fit-content"><i class="icon fs-1 fa-user"></i></span>
          <span class="col">
            <span Class="h5 mb-1">Control panel</span>
            <span class="text-muted small">
              Manage your iamproperty account, branches, staff, billing and invoices
            </span>
          </span>
        </span>
      </a>
      
      <a href="/" class="nav__featured-link text-decoration-none pb-3 border-top pt-3 d-block mb-0">
        <span class="row">
          <span class="col mw-fit-content"><Icon id="tick-list" class="fs-1 m-0"></Icon></span>
          <span class="col">
            <span Class="h5 mb-1">Quick start guide & FAQ</span>
            <span class="text-muted small">
              Download a guide on how to manage your account
            </span>
          </span>
        </span>
      </a>
      
      <a href="/" class="nav__featured-link text-decoration-none pb-3 border-top pt-3 d-block mb-0">
        <span class="row">
          <span class="col mw-fit-content"><Icon id="chat" class="fs-1 m-0 p-1"></Icon></span>
          <span class="col">
            <span Class="h5 mb-1">Contact us</span>
            <span class="text-muted small">
              Get in touch
            </span>
          </span>
        </span>
      </a>

      <a href="/" class="nav__featured-link text-decoration-none pb-3 border-top pt-3 d-block mb-0">
        <span class="row">
          <span class="col mw-fit-content"><i class="icon fs-1 fa-sign-out"></i></span>
          <span class="col">
            <span Class="h5 mb-1">Log out</span>
            <span class="text-muted small">
              Martin  Critchlow<br> Watson-Clark
            </span>
          </span>
        </span>
      </a>


      <template v-slot:secondary>

        <ul class="list-unstyled pt-4">
          <li class="pb-2"><a href="/ic" class="fw-bold">Dashboard</a></li>
          <li class="pb-2">
              <span class="nav__title fw-bold">Transactions</span>
              <ul class="list-unstyled ms-3">
                <li><a href="/standalone/movebutler" >Properties</a></li>
                <li><a href="/standalone/agent">Client Onboarding</a></li>
                <li><a href="/props">Track Conveyancing</a></li>
              </ul>
          </li>
          <li class="pb-2">
            <span class="nav__title fw-bold">Compliance</span>
            <ul class="list-unstyled ms-3">
              <li><a href="http://my.iamproperty.test/ic/land-registry">Order Land Registry Documents</a></li>
              <li><a href="http://my.iamproperty.test/ic/aml-faqs">Compliance Help Centre</a></li>
              <li><a href="https://www.ukciu.gov.uk/(taisli55qjh4fx2l0azbvi2r)/Registration/Login.aspx" target="_blank">Report a SAR</a></li>
              <li><a href="http://my.iamproperty.test/ic/training-library">Training Library</a></li>
              <li><a href="https://iamproperty-core-assets.s3.eu-west-2.amazonaws.com/AML%20Policy%20Template.docx">Download Template AML Policy</a></li>
              <li><a href="https://iamproperty-core-assets.s3.eu-west-2.amazonaws.com/movebutler/movebutler+MLO+Guide.pdf">Download Money Laundering Officer Guide</a></li>
            </ul>
          </li>
          <li class="pb-2"><a href="/props" class="fw-bold">Service Marketplace</a></li>
          <li class="pb-2">
            <span class="nav__title fw-bold">Conveyancing</span>
            <ul class="list-unstyled ms-3">
              <li><a href="http://my.iamproperty.test/ic/land-registry">My Solicitors</a></li>
              <li><a href="http://my.iamproperty.test/ic/aml-faqs">Compare Solicitors</a></li>
            </ul>
          </li>
          <li class="pb-2">
            <span class="nav__link fw-bold">Agency Settings</span>
            <ul class="list-unstyled ms-3">
              <li><a href="http://my.iamproperty.test/ic/land-registry">Staff Usage</a></li>
            </ul>
          </li>
          <li><a href="/props" class="fw-bold">Contact Us</a></li>
        </ul>

      </template>
    </Nav>
    <main class="main--marketplace">
      
      <div class="container pt-4">

        <div class="row mb-4">
          <div class="col-sm-6">
            <h1 class="h2">Welcome to your movebutler dashboard</h1>
          </div>
          <div class="col-sm-6 text-end mw-fit-content ms-auto">
            <a class="btn btn-tertiary mt-2 mb-0" href="https://iamproperty-core-assets.s3.eu-west-2.amazonaws.com/movebutler/movebutler+Start+Guide.pdf" download="">Quick start guide &amp; FAQ<i class="icon fa-download" aria-hidden="true"></i></a>
            <a class="btn mt-2 me-0 mb-0" href="https://iamproperty-core-assets.s3.eu-west-2.amazonaws.com/movebutler/MarketingAssets.zip">Download Marketing Pack<i class="icon fa-megaphone" aria-hidden="true"></i></a>            
          </div>
        </div>

        <div class="admin-panel">
          <h2>Admin panel title</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </main>
  </div>
</template>

<script>
import PropertySearchbar from '@/components/PropertySearchbar/PropertySearchbar.vue'
import Nav from '@/components/Nav/Nav.vue'
import Input from '@/elements/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'
import Icon from '@/foundations/Icon/Icon.vue'

export default {
  components: {
    PropertySearchbar,
    Nav,
    Input,
    Logo,
    Icon
  },
}
</script>