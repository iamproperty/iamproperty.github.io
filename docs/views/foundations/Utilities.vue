<template>
  <main>
    <div class="container">
      <h1>Utility classes</h1>
      <p>Total: {{totalClasses}}</p>
      <ul class="list-unstyled">
        <li class="colour-block" v-for="(value, name) in $shared.utClasses" :key="name">
          <h2 class="h5">{{name}}</h2>
          <p>{{ value }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import {shared} from '../../main.js'

export default {
  data () {
    return {
      totalClasses: Object.keys(shared.utClasses).length
    }
  }
}
</script>