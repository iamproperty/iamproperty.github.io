<script setup lang="ts">
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import encodedImg from '../../../assets/img/illustrations/contractors.png';
  import encodedImg2 from '../../../assets/img/illustrations/not-found.png';
</script>
<template>
  <main>
    <DSHeader :image="headerImg" section="templates">
      <h1>Error pages</h1>
    </DSHeader>

    <p class="standalone">
      An error page informs users that a requested page doesn’t exist. These pages are standardized throughout the
      product experience.
    </p>

    <h2>Introduction</h2>

    <p>
      Error pages are used to clarify to the user when a page doesn’t exist or if there has been an error of some kind
      that can be frustrating or confusing for the user. Straightforward plain language can help. Use an error page to
      explain the error and instruct the user what to do next.
    </p>

    <h3>Layout</h3>
    <p>
      The layout of the error page needs to be balanced with the illustration across different device breakpoints. Text
      should be concise to avoid overloading the user with unnecessary information.
    </p>

    <div class="error-example full-width">
      <div class="invert-colours bg-info gradient-primary gradient-direction-angle container mb-5 pt-5 pb-5">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <span class="h1">Website is down for maintenance</span>
            <P>We're busy updating the iamsold site for you. We'll be back up and running again shortly.</P>

            <span class="reset-colours"><button class="btn btn-primary" onclick="history.back()">Go back</button></span>
          </div>
          <div class="col-8 col-sm-10 col-md-5 ms-auto me-auto">
            <img :src="encodedImg" />
          </div>
        </div>
      </div>
    </div>

    <h2>Examples</h2>

    <h3>403 Forbidden</h3>

    <p>
      The user requested a restricted resource they do not have access to. Users must have authorisation to continue -
      they may need to sign into their account or review their subscription permissions to continue
    </p>

    <div class="error-example full-width">
      <div class="invert-colours bg-info gradient-primary gradient-direction-angle container mb-5 pt-5 pb-5">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <span class="h1">403: Access denied</span>
            <P
              >The page you are trying to access has restricted access. To access this page, you need to
              <a href="/sign-in">sign in</a> or contact
              <a href="support@iamproperty.co.uk">support@iamproperty.co.uk</a></P
            >

            <span class="reset-colours"><button class="btn btn-primary">Go back</button></span>
          </div>
          <div class="col-8 col-sm-10 col-md-5 ms-auto me-auto">
            <img :src="encodedImg2" />
          </div>
        </div>
      </div>
    </div>

    <a href="/error/403.html" class="btn btn-secondary mb-5"
      >Full page example <span class="visually-hidden">of the 403 page</span></a
    >

    <h3>404 Not found</h3>

    <p>
      The requested resource could not be found but may be available in the future. Subsequent requests by the user are
      permissible.
    </p>

    <div class="error-example full-width">
      <div class="invert-colours bg-info gradient-primary gradient-direction-angle container mb-5 pt-5 pb-5">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <span class="h1">404: Not found</span>
            <P>The page you are looking for cannot be found. Check the web address and try again.</P>

            <span class="reset-colours"><button class="btn btn-primary">Go back</button></span>
          </div>
          <div class="col-8 col-sm-10 col-md-5 ms-auto me-auto">
            <img :src="encodedImg2" />
          </div>
        </div>
      </div>
    </div>

    <a href="/error/404.html" class="btn btn-secondary mb-5"
      >Full page example <span class="visually-hidden">of the 404 page</span></a
    >

    <h3>500 Internal server error</h3>

    <p>
      A generic error message, given when an unexpected condition was encountered and no more specific message is
      suitable.
    </p>

    <div class="error-example full-width">
      <div class="invert-colours bg-info gradient-primary gradient-direction-angle container mb-5 pt-5 pb-5">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <span class="h1">There's a problem loading this page</span>
            <P>Please try again. If you continue to experience problems, please let us know.</P>

            <span class="reset-colours"><button class="btn btn-primary">Reload page</button></span>
          </div>
          <div class="col-8 col-sm-10 col-md-5 ms-auto me-auto">
            <img :src="encodedImg2" />
          </div>
        </div>
      </div>
    </div>

    <h3>503 Service unavailable</h3>

    <p>
      The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a
      temporary state.
    </p>

    <div class="error-example full-width">
      <div class="invert-colours bg-info gradient-primary gradient-direction-angle container mb-5 pt-5 pb-5">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <span class="h1">Website is down for maintenance</span>
            <P>We're busy updating the iamsold website for you. We'll be back up and running again shortly.</P>

            <span class="reset-colours"><button class="btn btn-primary">Go back</button></span>
          </div>
          <div class="col-8 col-sm-10 col-md-5 ms-auto me-auto">
            <img :src="encodedImg" />
          </div>
        </div>
      </div>
    </div>

    <h3>504 Gateway timeout error</h3>

    <p>
      The browser sent an HTTP request to the server and it did not receive a response in time from another server to
      complete the request. In most cases, you can resolve it by refreshing the web page.
    </p>

    <div class="error-example full-width">
      <div class="invert-colours bg-info gradient-primary gradient-direction-angle container mb-5 pt-5 pb-5">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <span class="h1">504: Gateway timeout</span>
            <P
              >This page is taking too long to load. Please refresh the page and contact
              <a href="mailto:support@iamproperty.co.uk">support@iamproperty.co.uk</a> it the problem persists.</P
            >

            <span class="reset-colours"><button class="btn btn-primary">Reload page</button></span>
          </div>
          <div class="col-8 col-sm-10 col-md-5 ms-auto me-auto">
            <img :src="encodedImg2" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
