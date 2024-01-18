<template>
  <div>
    

    <nav>
    <Nav>
      <a href="/" class="brand brand--property" slot="logo"><svg><title>iam key</title><use xlink:href="/svg/logo.svg#logo-property"></use></svg></a>


      <a href="/">Dashboard</a>
      <a href="/">View all stock</a>
      <a href="/">Your rewards</a>
      <a href="/">Mosa leads</a>

      <div class="dialog__wrapper dialog-overflow show" slot="dual">
        <button class="btn btn-secondary btn-compact fa-ellipsis-vertical m-0">More actions</button>
        <dialog class="dialog--list">
                
          <a href="/"><i class="fa-regular fa-upload"></i>Upload lead</a> 
          <a href="/"><i class="fa-solid fa-plus"></i>Add viewing</a>
          <a href="/"><i class="fa-solid fa-plus"></i>Order marketing</a>
        </dialog>
      </div>

      <a href="/notifications" class="btn btn-secondary btn-compact fa-bell" data-number="5" title="5 unread notifications" slot="dual">5 unread notifications</a>

      <a href="/" slot="secondary" >iamproperty</a>
      <a href="https://vtopenview.com/MyDay" slot="secondary">CRM</a>
      <a href="/" slot="secondary">movebutler</a>
      <a href="/" slot="secondary" class="selected">iamsold</a>


      <div class="nav--menu" data-title="My account" data-open-title="Martin Critchlow" data-icon="fa-user fa-solid" slot="menus">
 
        <div>  
          <label for="test1">Active branch</label>
          <select class="form-select" name="test1" id="test1">
            <option value="1">Newcastle</option>
            <option value="2">Two</option>
            <option value="2">Three</option>
            <option value="2">Four</option>
          </select>
        </div>
        <hr class="mt-3">
            
        <a href="/">Notifications</a><!-- Need notification number? -->

        <a href="/">Agency settings</a> <!-- Edit Agent Landing Page -->
        <a href="/">The Success Hub</a>
        <a href="/cp/account-overview">Control panel</a>
        <a href="/">Contact us</a> <!-- What link? -->
        <a href="/">Log out</a>

          
      </div>



    </Nav>
    </nav>


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