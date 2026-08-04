<script setup>
  import Nav from '@/components/Nav/Nav.vue';
  import Card from '@/components/Card/Card.vue';
  import Notification from '@/components/Notification/Notification.vue';

  const accountName = 'John Jones NE';
</script>
<template>
  <nav>
    <Nav>
      <a href="/" class="brand brand--property" slot="logo">
        <svg>
          <title>iamproperty</title>
          <use xlink:href="/svg/logo.svg#logo-property"></use>
        </svg>
      </a>

      <a href="/">Lorem ipsum</a>
      <a href="/">Lorem ipsum</a>
      <a href="/">Lorem ipsum</a>
      <a href="/">Lorem ipsum</a>

      <span class="title" slot="account">John Jones</span>
      <a href="/standalone/switch-account" class="btn btn-tertiary switch-account" slot="account"
        ><i class="fa-regular fa-arrow-up-arrow-down me-1"></i>Switch account</a
      >
      <a href="/" slot="account">Lorem ipsum</a>
    </Nav>
  </nav>
  <main>
    <Notification data-status="success" data-timeout="6000" data-type="toast" dismissable
      ><strong>Account switched</strong><br />You are using {{ accountName }}</Notification
    >

    <h1>Client onboarding</h1>

    <p class="lead"><strong>46</strong> Client added in total</p>

    <a href="/patterns/switching-account" class="btn btn-tertiary">Go back to the Switching account pattern page</a>
  </main>
</template>
