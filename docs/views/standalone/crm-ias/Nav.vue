<template>
  <div class="bg-primary">
    <div class="container pb-0">
      <span class="brand brand--sold p-0 pt-2 pb-2">
        <svg>
          <title>iamsold</title>
          <use xlink:href="/svg/logo.svg#logo-sold"></use>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
  import PropertySearchbar from '@/components/PropertySearchbar/PropertySearchbar.vue';
  import Nav from '@/components/Nav/Nav.vue';
  import Input from '@/components/Input/Input.vue';
  import Logo from '@/foundations/Logo/Logo.vue';

  export default {
    components: {
      PropertySearchbar,
      Nav,
      Input,
      Logo,
    },
  };
</script>
