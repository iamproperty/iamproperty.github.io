<template>
  <nav>
    <Nav class="nav--large nav--btn-compact nav--dual-buttons">
      <a href="/" class="brand brand--property" slot="logo">
        <svg>
          <title>iam key</title>
          <use xlink:href="/svg/logo.svg#logo-property"></use>
        </svg>
      </a>

      <a href="/" class="fw-bold">My day</a>
      <details>
        <summary>Lettings</summary>
        <div data-title="Lettings">
          <a href="/">Lettings dashboard</a>
          <details>
            <summary>Transaction</summary>
            <div>
              <a href="/">Transaction dashboard</a>
              <a href="/">Property match</a>
              <a href="/">Applicant match</a>
              <a href="/">Properties</a>
              <a href="/">Landlords</a>
              <a href="/">Tenants</a>
              <a href="/">Applicants</a>
              <a href="/">Guarantors</a>
              <a href="/"
                >Letzone <span class="badge bg-warning"><i class="fa-regular fa-stars"></i>Beta</span></a
              >
              <a href="/">Letzone</a>
              <a href="/">Upload to portals</a>
              <a href="/">E-sign</a>
            </div>
          </details>

          <details>
            <summary>Property Management</summary>
            <div data-title="Property Management">
              <a href="/">Property Management dashboard</a>
              <a href="/">Create maintenance job</a>
              <a href="/">Maintenance jobs</a>
              <a href="/">Feedback centre</a>
              <a href="/">Invoices</a>
              <a href="/">Inspections</a>
              <a href="/">Landlords</a>
              <a href="/">Tenants</a>
              <a href="/">Contractors</a>
              <a href="/">E-sign</a>
            </div>
          </details>
        </div>
      </details>
      <details>
        <summary>Sales</summary>
        <div data-title="Sales">
          <a href="/">Sales Dashboard</a>
          <a href="/">Property match</a>
          <a href="/">Applicant match</a>
          <a href="/">Properties</a>
          <a href="/">Vendors</a>
          <a href="/">Applicants</a>
          <a href="/">Solicitors</a>
          <a href="/">Sales progression</a>
          <a href="/">Upload to portals</a>
          <a href="/">E-sign</a>
        </div>
      </details>

      <details>
        <summary>Accounts</summary>
        <div data-title="Accounts">
          <a href="/">Accounts dashboard</a>

          <details>
            <summary>General</summary>
            <div data-title="Sales">
              <a href="/">Adjustment</a>
              <a href="/">BACS list</a>
              <a href="/">Bank receipt</a>
              <a href="/">Cash account</a>
              <a href="/">Credit note</a>
              <a href="/">Jobs outstanding</a>
              <a href="/">Opening balances</a>
              <a href="/">Regular charges</a>
              <a href="/">Regular expenses</a>
              <a href="/">Unallocated</a>
              <a href="/">View ledgers</a>
              <a href="/">Ledger transfer</a>
            </div>
          </details>

          <details>
            <summary>Landlord</summary>
            <div data-title="Landlord">
              <a href="/">Charge landlord fee</a>
              <a href="/">HMRC payments</a>
              <a href="/">Perform payments</a>
              <a href="/">Statement merge</a>
              <a href="/">Agent refund</a>
            </div>
          </details>

          <details>
            <summary>Tenant</summary>
            <div data-title="Tenant">
              <a href="/">Collect rent</a>
              <a href="/">Invoice import</a>
              <a href="/">Rapid collect</a>
              <a href="/">Service charges</a>
              <a href="/">Transaction sheet</a>
            </div>
          </details>
        </div>
      </details>
      <details>
        <summary>Reporting</summary>
        <div data-title="Reporting">
          <a href="/">Management information</a>
          <a href="/">Branch activity</a>

          <details>
            <summary>Reports</summary>
            <div data-title="Reports">
              <a href="/">General</a>
              <a href="/">Lettings</a>
              <a href="/">Accounts</a>
              <a href="/">Sales</a>
              <a href="/">Portal batch reports</a>
            </div>
          </details>
        </div>
      </details>
      <details>
        <summary>Communications</summary>
        <div data-title="Communications">
          <a href="/">Email merge</a>
          <a href="/">Email tracker</a>
          <a href="/">SMS merge</a>
          <a href="/">Mail merge</a>
          <a href="/">E-sign</a>
        </div>
      </details>

      <button class="btn btn-secondary btn-compact fa-solid fa-search" slot="dual">Search</button>

      <div class="dialog__wrapper dialog-overflow d-none d-md-block" slot="dual">
        <button class="btn btn-secondary btn-compact fa-bell m-0" data-number="2">Notifications</button>
        <dialog class="dialog--list" id="notifications">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </dialog>
      </div>

      <button
        class="btn btn-secondary btn-compact fa-bell m-0 d-md-none"
        slot="dual"
        data-number="2"
        data-modal="modal-passive"
      >
        Notifications
      </button>

      <div class="dialog__wrapper dialog-overflow" slot="dual">
        <button class="btn btn-secondary btn-compact fa-grid fa-solid m-0">More actions</button>
        <dialog class="dialog--list">
          <a href="/"><i class="fa-regular fa-upload"></i>Upload lead</a>
          <a href="/"><i class="fa-solid fa-plus"></i>Add viewing</a>
          <a href="/"><i class="fa-solid fa-plus"></i>Order marketing</a>
        </dialog>
      </div>

      <a href="/standalone/iamproperty" slot="secondary">iamproperty</a>
      <a href="/standalone/openview" slot="secondary" class="selected">CRM</a>
      <a href="/standalone/movebutler" slot="secondary">movebutler</a>
      <a href="/standalone/agent" slot="secondary">iamsold</a>

      <div
        class="nav--menu"
        data-title="My account"
        data-open-title="John Smith"
        data-icon="fa-user fa-solid"
        slot="menus"
      >
        <a href="/">Active branches</a>
        <!-- Edit Agent Landing Page -->
        <a href="/" class="mb-0">Account settings</a>

        <details>
          <summary>Control centre</summary>
          <div data-title="Control centre">
            <a href="/">Dashboard</a>
            <a href="/">Users</a>
            <a href="/">Configuration</a>
            <a href="/">Branches</a>
            <a href="/">Companies</a>
            <a href="/">Modules</a>
            <a href="/">Property Management Settings</a>
            <a href="/">Terms And Conditions</a>
          </div>
        </details>
        <a href="/cp/account-overview">Help centre</a>
        <a href="/">Log out</a>
      </div>
    </Nav>
  </nav>
</template>

<script>
  import Nav from '@/components/Nav/Nav.vue';

  export default {
    components: {
      Nav,
    },
  };
</script>
