<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/elements">Elements</a></li>
      </ul>
      <h1>Details (Beta)</h1>
      <p class="strapline">...</p>
    </div>
    <div class="container visualtest">
      
      <details id="how_long_does_the_auction_last">
        <summary>How long does the auction last?</summary>
        <p>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
        <p>Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
        <p>Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p>
      </details>


    </div>


    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>

  </main>
</template>

<script>
import Logo from '@/foundations/Logo/Logo.vue'
import Readme from '@/foundations/Logo/README.md'

export default {
  components: {
    Logo,
    Readme
  },
  data () {
    return {
      htmlUsage: `<div class="brand brand--property">
  <svg>
    <title>iam property</title>
    <use xlink:href="./assets/svg/logo.svg#logo-property"></use>
  </svg>
  <span>the founders<br>of iamsold</span>
</div>`
    }
  }
}
</script>
