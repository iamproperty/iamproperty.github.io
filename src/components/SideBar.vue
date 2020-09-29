<template>
  <div>
    <div class="nav-links fixed-width">
          <p>Components</p>
          <nav>
              <ul class="nav flex-column">
                <li class="nav-item">
                      <router-link class="nav-link" to="/components/task-title">Task Title</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/components/key-stats">Key Fact Group</router-link>
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
