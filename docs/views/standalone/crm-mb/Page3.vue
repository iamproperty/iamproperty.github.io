<template>
  <div>
    <MBNav></MBNav>
    <main class="template--form">
      <div class="container pt-4 text-center">
        <h1 class="mx-auto">Fetch property from CRM</h1>
        <ol class="list--steps" data-mobile-text="Client details">
          <li class="step--current">Property details</li>
          <li>Client details</li>
          <li>Onboarding route</li>
        </ol>
      </div>
      <div class="container">
        <div class="form-panel">
          <h2 class="h3">Legal proprietor and material information check</h2>

          <form id="form" novalidate action="/standalone/crm-mb/page4">
            <strong class="text-primary d-block">Transation address</strong>
            <span id="property" class="d-block pb-5">5 Sunset Road, Leeds, West Yorkshire, LS6 4LS, England</span>

            <hr />

            <p class="lead pb-5">
              Please confirm the building name/number you would like to select the title register for. You are entitled
              to one free title register per transaction, any additional title register requests Will be billed to the
              usual charge of £3.00 per title.
            </p>

            <label>Building name/number <input type="text" name="building-name" value="5" required="" /></label>

            <label>Postcode <input type="text" name="postcode" value="LS6 4LS" required="" /></label>

            <div class="row pt-3">
              <div class="col-md-4 d-flex align-items-center">
                <a href="/standalone/crm-mb/page2" class="btn btn-tertiary mb-0">Back</a>
              </div>
              <div class="col-md-8 text-end">
                <a href="/standalone/crm-mb/page4" class="btn btn-secondary mb-0">Skip this step</a>
                <button type="submit" class="btn btn-primary mb-0 me-0">Continue</button>
              </div>
            </div>
          </form>
        </div>

        <hr />
      </div>

      <MBFooter></MBFooter>
    </main>
  </div>
</template>

<script>
  import MBFooter from './Footer.vue';
  import MBNav from './Nav.vue';
  import Input from '@/components/Input/Input.vue';
  import Logo from '@/foundations/Logo/Logo.vue';
  import Notification from '@/components/Notification/Notification.vue';

  export default {
    components: {
      MBNav,
      MBFooter,
      Input,
      Logo,
      Notification,
    },
  };
</script>
