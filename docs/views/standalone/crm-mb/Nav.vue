<template>
  <Nav class="nav--sticky">

  <a href="/" class="brand brand--movebutler" slot="logo">
    <svg>
      <title>iamproperty Movebutler</title>
      <use xlink:href="/svg/logo.svg#logo-movebutler"></use>
    </svg>
  </a>

  <a href="/" class="selected">Lorem ipsum</a>
  <a href="/">Lorem ipsum</a>
  <a href="/">Lorem ipsum</a>
  <a href="/">Lorem ipsum</a>

  <button class="btn btn-primary">Lorem ipsum</button>

  </Nav>
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