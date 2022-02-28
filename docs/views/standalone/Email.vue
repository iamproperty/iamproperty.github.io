<template>
  <div class="bg-primary">
    
    <img :src="require('../../assets/email-header.png')" alt="Welcome aboard" />

    <div class="container pt-2">
      <h1>Hi [NAME]</h1>
      <p class="mb-3" style="max-width: 18rem;">Now that your <strong>iamsold</strong> account has been activated, you can:</p>
      <table class="table--email mb-3">
        <tr>
          <td style="width: 3rem;"></td>
          <td>
            <p class="mb-3">Save properties you are interested in, so you never miss out!</p>
          </td>
        </tr>
        <tr>
          <td style="width: 3rem;"></td>
          <td>
            <p class="mb-3">Register to bid, so you can easily place your offer as soon as an auction begins.</p>
          </td>
        </tr>
        <tr>
          <td style="width: 3rem;"></td>
          <td>
            <p class="mb-3">View Buyer Information Packs for properties, which are full of important information to help you make an informed decision.</p>
          </td>
        </tr>
      </table>

      <a href="/search" class="btn">Start your search</a>
    </div>

    <div class="container pt-2">

<a href="/components/card" title="Find out more: Card 1" class="card"><!----><div class="card-body"><span class="card-title d-block h4">Card 1</span>
        
        
        
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p></div><div class="card-footer"><span class="btn btn-secondary mb-0">Find out more<span class="visually-hidden"> about Card 1</span></span></div></a>

            <a href="/components/card" title="Find out more: Card 1" class="card"><!----><div class="card-body"><span class="card-title d-block h4">Card 1</span>
        
        
        
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages..</p></div><div class="card-footer"><span class="btn btn-secondary mb-0">Find out more<span class="visually-hidden"> about Card 1</span></span></div></a>
            

      <Logo id="movebutler" class="mb-3 mt-5" style="font-size: 3rem"></Logo>

    </div>

  </div>
</template>


<style lang="scss">
@import "../../../assets/sass/email.scss";
</style>

<script>
import Logo from '@/foundations/Logo/Logo.vue'


var emailStyles = require('../../../assets/sass/email.scss');

console.log(emailStyles)

export default {
  components: {
    Logo
  },
  mounted(){
    
    // Remove all CSS except for the email only CSS
    let styleTags = Array.from(document.querySelectorAll('style'));

    styleTags.forEach((arrayElement, index) => {

      if(index != styleTags.length - 1)
        arrayElement.remove();
    });
  }
}
</script>