<template>
<div>
  <div class="template--auth row">

    <main>

      <div class="pb-0 pe-2 mb-0 brand brand--property">    
        <svg>
          <title>iam property</title>
          <use xlink:href="/svg/logo.svg#logo-property"></use>
        </svg>
      </div>

      <h1 class="h3 mt-5">Sign in</h1>
      <form method="POST" action="http://my.iamproperty.test/login">

        <label>Username <input type="text" name="username" autocomplete="username" required="" autofocus="" /></label>

        <label>Password
          
          <span>
            <input type="password" id="password" name="password" required="" autocomplete="on">

            <button type="button" class="suffix fa-solid fa-eye" data-alt-class="suffix fa-solid fa-eye-slash" data-change-type="text" data-input="password" aria-hidden="true"><span class="visually-hidden">Show password</span></button>
          </span>
        </label>
        
        <label><input type="checkbox" name="remember" id="remember">Remember me</label>
        <hr/>
        <a href="http://my.iamproperty.test/password/reset" class="text-nowrap mb-5">Forgot your password?</a>
        <hr/>
        <button class="btn btn-primary px-5" type="submit" value="submit" data-cy="login-submit">Sign In</button>
        <hr/>
        <p>By signing in, I agree to the iamproperty <a href="">Privacy Policy</a>.</p>
      </form>

    </main>
    <aside>

      <figure><img src="/img/signin-bg.png" alt="" /></figure>

      <span class="h4">Your partner for today and tomorrow</span>
      <p>At iamproperty we’re developing everything you need to run your agency under one roof, one supplier relationship. With a ecosystem of solutions that will continue to grow and evolve with your agency, and that put you in control, freeing you up to do what you do best.</p>

      <a href="/" class="btn btn-secondary"><i class="fa-regular fa-arrow-up-right-from-square"></i>Find out more</a>

    </aside>
  </div>
</div>
</template>
<style lang="scss" >



</style>

<script>
import Nav from '@/components/Nav/Nav.vue'
import Table from '@/components/Table/Table.vue'
import Card from '@/components/Card/Card.vue'
import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue'
import Filterlist from '@/components/Filterlist/Filterlist.vue'

export default {
  components: {
    Nav,
    Table,
    Card,
    AppliedFilters,
    Filterlist
  },
  mounted(){

  }
}

</script>