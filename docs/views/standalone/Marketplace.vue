<template>
  <div>
    <nav>
      <iam-nav id="menu">
        <a href="/" class="brand brand--property" slot="logo">
          <svg>
            <title>iamproperty</title>
            <use xlink:href="/svg/logo.svg#logo-property"></use>
          </svg>
        </a>

        <a href="#menu" class="btn-menu" slot="btn">Menu</a>

        <ul class="d-md-hidden">
          <li>
            <a href="/standalone/marketplace" class="text-decoration-none current">iamproperty</a>
          </li>
          <li><a href="/standalone/agent" class="text-decoration-none">iamsold</a></li>
          <li><a href="/standalone/movebutler" class="text-decoration-none">movebutler</a></li>
        </ul>

        <ul class="list-unstyled" slot="secondary">
          <li class=""><a href="/props">Dashboard</a></li>
          <li class="">
            <span class="nav__section-link">Transaction</span>
            <div class="sub-nav">
              <ul class="list-unstyled" id="transaction-links">
                <li class=""><a href="/props">Client Onboarding</a></li>
                <li class=""><a href="/props">Track Conveyancing</a></li>
              </ul>
            </div>
          </li>
          <li class="">
            <span class="nav__section-link">Compliance</span>
            <div class="sub-nav">
              <ul class="list-unstyled" id="transaction-links">
                <li class=""><a href="/props">Property Audit</a></li>
                <li class=""><a href="/props">Order Land Registry Documents</a></li>
                <li class=""><a href="/props">Compliance Help Centre</a></li>
                <li class=""><a href="/props">Report a SAR</a></li>
                <li class=""><a href="/props">Training Library</a></li>
                <li class="nav__download"><a href="/props">Template AML Policy</a></li>
                <li class="nav__download"><a href="/props">Money Laundering Officer Guide</a></li>
              </ul>
            </div>
          </li>
          <li class=""><a href="/props">Service Marketplace</a></li>
          <li class=""><a href="/props">Conveyancing</a></li>
        </ul>

        <div class="dialog__wrapper" slot="actions">
          <button class="btn btn-primary">My Account</button>
          <dialog id="my-account" class="sub-nav sub-nav--mega">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-3">
                  <span class="col mw-fit-content"></span>
                  <span class="col d-flex align-items-center">
                    <span Class="h5 mb-1">Johny Smith</span>
                  </span>
                  <form class="mt-2">
                    <Input
                      type="select"
                      id="test1"
                      label="Today, you're at"
                      :options="[
                        { display: 'Branch 1', value: '1' },
                        { display: 'Branch Two', value: '2' },
                        { display: 'Create new branch', value: 'new' },
                      ]"
                      data-value-if="new"
                      data-redirect="/cp/company/branches/create"
                    ></Input>
                  </form>
                </div>

                <div class="col-12 col-md-3">
                  <span Class="h5 mb-1">Services</span>

                  <ul class="list-unstyled services text-primary">
                    <li>iamproperty <span class="service service--active">Active</span></li>
                    <li>iamsold <span class="service service--active">Active</span></li>
                    <li>movebutler <span class="service service--active">Active</span></li>
                  </ul>
                </div>

                <div class="col-12 col-md-3">
                  <a href="/" class="nav__featured-link text-decoration-none pb-5 d-block mb-0">
                    <span class="row">
                      <span class="col mw-fit-content"></span>
                      <span class="col">
                        <span Class="h5 mb-1">Control panel</span>
                        <span class="small">
                          Manage your iamproperty account, branches, staff, billing and invoices.
                        </span>
                      </span>
                    </span>
                  </a>
                </div>

                <div class="col-12 col-md-3">
                  <div class="credits">
                    <span Class="h5 mb-1">Your credits</span>
                    <span class="small">
                      <ul class="list-unstyled text-primary">
                        <li class="d-flex">Credits user <span class="ms-auto">1000</span></li>
                        <li class="d-flex">Credits Remaining <span class="ms-auto">0</span></li>
                      </ul>
                    </span>
                    <a href="/credits" class="btn d-block me-0">Buy credits</a>
                  </div>
                </div>
              </div>

              <a href="/logout" class="btn btn-secondary">Logout</a>
            </div>
          </dialog>
        </div>
      </iam-nav>
    </nav>
    <main>
      <div class="container pt-4">
        <h1>Iamsold homepage (work in progress)</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </main>
  </div>
</template>

<script>
  import PropertySearchbar from '@/components/PropertySearchbar/PropertySearchbar.vue';
  import Nav from '@/components/Nav/Nav.vue';
  import Logo from '@/foundations/Logo/Logo.vue';
  import Input from '@/components/Input/Input.vue';

  export default {
    components: {
      PropertySearchbar,
      Nav,
      Input,
      Logo,
    },
    mounted() {},
  };
</script>
