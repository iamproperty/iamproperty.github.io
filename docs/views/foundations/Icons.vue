<template>
  <main>
    <div class="container pb-0">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/foundations">Foundations</a></li>
      </ul>
      <h1>Icons</h1>
      <p>Our icons are created using SVG sprites to reduce the number network calls and improve the ease of use.</p>
    </div>




    <div class="container visualtest">
      <div class="row">

        <div class="col text-center mw-fit-content mb-3" v-for="(icon) in icons" :key="icon">
          <div :id="'icon-'+icon"><Icon :id="icon"></Icon></div>
          <span class="d-block text-nowrap">{{icon}}</span>
        </div>
        <div class="col text-center mw-fit-content mb-3" >
          <div id="icon-email">
            <svg class="icon"><title>email</title><use xlink:href="/svg/icons.svg#icon-email"></use></svg>
          </div>
          <span class="d-block text-nowrap">email</span>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="javascript">{{htmlUsage}}</code></pre>
    </div>
    <div class="container">
      <h2>Vue Icon component reference</h2>
      <Readme></Readme>
    </div>


    <div class="container">
      <h2>Font Awesome Icons</h2>

      <p>If you cannot find an icon above that you need, <a href="https://fontawesome.com/" target="_blank">font awesome</a> can be used instead. The free version comes with other 1,600 icons but if needed iamproperty has access to a pro licence just <a href="mailto:james.lambert@iamproperty.com">email James Lambert<i class="icon fa-envelope me-0"></i></a>. </p>

      <h3>Icons examples</h3>

      <div class="row mb-3">
        <div class="col mw-fit-content mb-3" v-for="(icon) in faicons" :key="icon">
          <i :class="`icon fa-${icon} d-block mx-auto text-center`"></i>
          <span class="d-block text-center">{{icon}}</span>
        </div>
      </div>

      <h3>To add font awesome to an app</h3>
      <p>To include the relevant CSS and font files to your app/website you need to include the below tag. Or follow the the <a href="https://fontawesome.com/start">font awesome getting started</a> guide. It is worth noting that we are only using the light version of the font file, this is to match our icons better.</p>
      <pre><code class="html">{{cssScripts}}</code></pre>

      <h3>How to use font awesome</h3>
      <p>Font awesome is implemented in the typical way so the <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/referencing-icons/basic-use" target="_blank">font awesome basic usage</a> guide is the best source of information. Below is also an example of very basic usage.</p>
      <pre><code class="html">{{fausage}}</code></pre>
    </div>


  </main>
</template>

<script>
import Icon from '@/foundations/Icon/Icon.vue'
import Readme from '@/foundations/Icon/README.md'

export default {
  components: {
    Icon,
    Readme
  },
  data () {
    return {
      icons: [],
      faicons: ['arrow-down','envelope','award','camera','align-right','axe','bicycle'],
      htmlUsage: `<svg class="icon">
  <title>Email</title>
  <use xlink:href="{filepath}#icon-email"></use>
</svg>`,
      cssScripts: `<script src="https://kit.fontawesome.com/26fdbf0179.js" crossorigin="anonymous" />`,
      fausage: `<a href="#down">Down <i class="fa-arrow-down"></i></a>`
    }
  },
  mounted(){

    let vueComp = this;
    let tempIcons = [];
    var request = new XMLHttpRequest();

    request.open("GET", "/svg/icons.svg");
    request.setRequestHeader("Content-Type", "image/svg+xml");
    request.addEventListener("load", function(event) {
      var response = event.target.responseText;

      var doc = new DOMParser();
      var xml = doc.parseFromString(response, "image/svg+xml");

      Array.from(xml.querySelectorAll('symbol')).forEach((arrayElement, index) => {
        tempIcons.push(arrayElement.getAttribute('id').replace('icon-',''));
      });

      tempIcons = tempIcons.sort();
      vueComp.icons = tempIcons;
    });
    request.send();

  }
}
</script>
