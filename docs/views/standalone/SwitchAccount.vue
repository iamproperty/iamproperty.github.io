<script setup>
  import Nav from '@/components/Nav/Nav.vue';
  import Card from '@/components/Card/Card.vue';
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
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
  <main class="template--form">
    <ul class="breadcrumb">
      <li>Breadcrumb</li>
      <li>Switch accounts</li>
    </ul>
    <h1 class="mx-auto">Switch accounts</h1>

    <form action="/standalone/account-switched">
      <div class="form-panel">
        <h2>Select the account you wish to use</h2>

        <fieldset class="switch-accounts">
          <label>
            <div class="tooltip__content">
              <strong>Branches associated</strong>
              Branch name 1<br />
              Branch name 1<br />
              Branch name 1<br />
              Branch name 1
            </div>
            <input type="radio" name="account" value="1234" checked />
            <Card class="card--plain">
              John Jones NE
              <span class="text-body pt-1">2 Branches</span>
            </Card>
          </label>
          <label>
            <div class="tooltip__content">
              <strong>Branches associated</strong>
              Branch name 1<br />
              Branch name 1<br />
              Branch name 1<br />
              Branch name 1
            </div>
            <input type="radio" name="account" value="4321" />
            <Card class="card--plain">
              John Jones NY
              <span class="text-body pt-1">2 Branches</span>
            </Card>
          </label>
        </fieldset>

        <fieldset class="btn__group">
          <button class="btn btn-secondary">Cancel</button>
          <button class="btn btn-primary" type="submit">Confirm</button>
        </fieldset>
      </div>
    </form>
  </main>
</template>
