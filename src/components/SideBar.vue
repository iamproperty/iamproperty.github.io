<template>
  <div>
    <div class="nav-links fixed-width">
          <p>Components</p>
          <nav>
              <ul class="nav flex-column">
                <li class="nav-item">
                      <router-link class="nav-link" to="/task-title">Task Title</router-link>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#btn-section">Buttons</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Dialogs</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Feedback</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#form-section">Form Elements</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Lists</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Tables</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Helper Classes</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#iconography">Icons</a>
                  </li>
              </ul>
          </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
