<template>
  <div>
    <Nav btnLink="/account" btnText="Account">
      <ul class="list-unstyled">
        <li><a href="/">Link 1</a></li>
        <li><a href="/">Link 2</a></li>
        <li><a href="/">Link 3</a></li>
      </ul>
    </Nav>
    <main>
      <div class="container pt-4">
        <h1>Heading 1</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </main>
    <footer class="bg-primary">
      <div class="container">
        footer here
      </div>
    </footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>