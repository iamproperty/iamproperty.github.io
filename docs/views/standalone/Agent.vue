<template>
  <div>
    <Nav logo="sold" class="nav--marketplace" propertylink="/standalone/marketplace" movebutlerlink="/standalone/movebutler" iamsoldlink="/standalone/agent">
      


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
          <span class="col mw-fit-content"></span>
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
          <span class="col mw-fit-content"></span>
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

TBC

      </template>
    </Nav>
    <main class="main--marketplace">
      
      <div class="container pt-4">
        <h1>Iamsold homepage (work in progress)</h1>
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
import Input from '@/components/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'

export default {
  components: {
    PropertySearchbar,
    Nav,
    Input,
    Logo
  },
}
</script>