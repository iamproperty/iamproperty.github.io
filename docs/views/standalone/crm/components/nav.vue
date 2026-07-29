<script lang="ts" setup>
  import Nav from '@/components/Nav/Nav.vue';
</script>

<template>
  <Nav>
    <a href="/" class="brand brand--property" slot="logo">
      <svg>
        <title>iam key</title>
        <use xlink:href="/svg/logo.svg#logo-property" />
      </svg>
    </a>

    <router-link to="/standalone/premium-conveyancing">Dashboard</router-link>
    <router-link to="/standalone/premium-conveyancing/cases">Cases</router-link>
    <router-link to="/standalone/premium-conveyancing/settings"
      >Settings</router-link
    >

    <button
      class="btn btn-primary"
      data-modal="modal-transactional"
      slot="actions"
    >
      My account
    </button>

    <router-link to="/standalone/premium-conveyancing/settings" slot="secondary"
      >iamproperty</router-link
    >
    <router-link to="/standalone/premium-conveyancing/settings" slot="secondary"
      >CRM</router-link
    >
    <router-link
      to="/standalone/premium-conveyancing/settings"
      class="active"
      slot="secondary"
    >
      movebutler
    </router-link>
    <router-link to="/standalone/premium-conveyancing/settings" slot="secondary"
      >iamsold</router-link
    >
  </Nav>

  <nav>
    <iam-nav
      class="nav--sticky nav--large nav--btn-compact nav--dual-buttons hidden-print open"
      data-css="/assets/build/css/nav-darkmode-fix.css?version=2.52.0"
      style="z-index: 999"
      ><a
        href="/MyDay"
        class="brand brand--property"
        slot="logo"
        aria-current="page"
        ><div class="brand inline">
          <img
            loading="lazy"
            src="https://media.vtopenview.com/OV1/240131/b6238022-8299-424a-95ff-7f32d4476d03/iamproperty-Colour-Reversed.png"
            alt="logo"
            data-src="https://media.vtopenview.com/OV1/240131/b6238022-8299-424a-95ff-7f32d4476d03/iamproperty-Colour-Reversed.png"
            data-src-retina="https://media.vtopenview.com/OV1/240131/b6238022-8299-424a-95ff-7f32d4476d03/iamproperty-Colour-Reversed.png"
            onerror="
              fallbackToSvg(
                this,
                '/assets/iamkey/assets/svg/logo.svg#logo-property'
              )
            "
          /></div></a
      ><a href="/MyDay">My day</a>
      <details class="details--revert">
        <summary>Lettings</summary>
        <div data-title="Lettings">
          <a class="menu-Lettings" href="/Dashboards/Lettings"
            >Lettings dashboard</a
          >
          <details class="details--revert">
            <summary>General</summary>
            <div data-title="General">
              <a href="/Matching/MatchingProperties?lettings=1"
                >Property Match</a
              ><a href="/Matching/MatchingApplicants?lettings=1"
                >Applicant Match</a
              ><a class="menu-LetZone" href="/Dashboards/LetZoneDashboard"
                >Letzone</a
              ><a
                href="/Search#tabSearchPropertiesLettings"
                class="sr-ra-searchProperty-let"
                >Properties</a
              ><a
                href="/Search#tabSearchLandlords"
                class="sr-ra-searchLandlords"
                >Landlords</a
              ><a href="/Search#tabSearchTenants" class="sr-ra-search-tenant"
                >Tenants</a
              ><a
                href="/Search#tabSearchApplicantsLettings"
                class="sr-ra-searchApplicant-let"
                >Applicants</a
              ><a
                href="/Search#tabSearchContractors"
                class="sr-ra-search-contractor"
                >Contractors</a
              ><a href="/Search#tabSearchGuarantors">Guarantors</a
              ><a
                data-reporttype="Lettings"
                class="load-link-reports-lettings"
                href="javascript:void(0)"
                >Reports</a
              ><a href="/Dashboards/Esign" data-duplicate="">E-sign</a
              ><a href="/Portals/Upload">Upload to portals</a>
            </div>
          </details>
          <details class="details--revert">
            <summary>Property management</summary>
            <div data-title="Property management">
              <a class="menu-Toolbox" href="/Dashboards/PropertyManagement"
                >Property management dashboard</a
              ><a href="/Toolbox/Main/Index">Create maintenance Job</a
              ><a
                class="menu-Esign esign-force-trigger"
                href="/Dashboards/ESign"
                data-duplicate=""
                >E-sign</a
              ><a href="/Toolbox/Feedback/Index">Feedback Centre</a
              ><a class="menu-Inspections" href="/InspectionsV2/Dashboard"
                >Inspections</a
              ><a href="/Toolbox/Invoices/Index">Invoices</a
              ><a href="/Toolbox/Tasklist/Index">Maintenance jobs</a>
            </div>
          </details>
        </div>
      </details>
      <details class="details--revert">
        <summary>Sales</summary>
        <div data-title="Sales">
          <a class="menu-Sales" href="/Dashboards/Sales">Sales Dashboard</a
          ><a
            href="/Search#tabSearchPropertiesSales"
            class="sr-ra-searchProperty-sales"
            >Properties</a
          ><a href="/Search#tabSearchVendors" class="sr-ra-searchVendors"
            >Vendors</a
          ><a
            href="/Search#tabSearchApplicantsSales"
            class="sr-ra-searchApplicant-sales"
            >Applicants</a
          ><a href="/Search#tabSearchSolicitors">Solicitors</a
          ><a href="/Matching/MatchingProperties?lettings=0">Property Match</a
          ><a href="/Matching/MatchingApplicants?lettings=0">Applicant Match</a
          ><a
            data-reporttype="Sales"
            class="load-link-reports-sales"
            href="javascript:void(0)"
            >Reports</a
          ><a href="/Sales/SalesProgression">Sales Progression</a
          ><a href="/Portals/Upload">Upload to portals</a
          ><a
            class="menu-ESign esign-force-trigger"
            href="/Dashboards/ESign"
            data-duplicate=""
            >E-sign</a
          >
        </div>
      </details>
      <details class="details--revert">
        <summary>Accounts</summary>
        <div data-title="Accounts">
          <a class="show-accounts-container" href="/Dashboards/Accounts"
            >Accounts dashboard</a
          >
          <details class="details--revert">
            <summary>General</summary>
            <div data-title="General">
              <a
                data-goto="/Dashboards/Accounts?showModal=modalAdjustment"
                class="show-accounts-container v-legacy-link-click"
                data-toggle="modal"
                data-target="#modalAdjustment"
                >Adjustment</a
              ><a
                class="show-accounts-container accounts-tab-toggle accounts-bacs-open v-legacy-link-click"
                data-goto="/Dashboards/Accounts?clickLink=accounts-bacs-open"
                data-toggle="tab"
                data-tabtitle="BACS List"
                data-tabid="AccountsBacsTab"
                href="#AccountsBacs"
                >BACS List</a
              ><a
                data-goto="/Dashboards/Accounts?showModal=modalBankReceipt"
                class="show-accounts-container v-legacy-link-click"
                data-toggle="modal"
                data-target="#modalBankReceipt"
                >Bank Receipt</a
              ><a
                class="show-accounts-container accounts-tab-toggle accounts_ca-view-transactions v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Cash Account"
                data-tabid="AccountsCashTab"
                href="#AccountsCash"
                data-goto="/Dashboards/Accounts?clickLink=accounts_ca-view-transactions"
                >Cash Account</a
              ><a
                class="show-accounts-container v-legacy-link-click"
                data-toggle="modal"
                data-target="#modalCreditNote"
                data-goto="/Dashboards/Accounts?showModal=modalCreditNote"
                >Credit Note</a
              ><a
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Jobs Outstanding"
                data-tabid="AccountsJobsOsTab"
                href="#AccountsJobsOs"
                data-goto="/Dashboards/Accounts?showTab=AccountsJobsOsTab"
                >Jobs Outstanding</a
              ><a
                class="show-accounts-container accounts-ledger-transfer-link accounts-tab-toggle v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Ledger Transfer"
                data-tabid="AccountsLedgerTransferTab"
                href="#AccountsLedgerTransfer"
                data-goto="/Dashboards/Accounts?clickLink=accounts-ledger-transfer-link"
                >Ledger Transfer</a
              ><a
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Opening Balances"
                data-tabid="AccountsOpeningBalancesTab"
                href="#AccountsOpeningBalances"
                data-goto="/Dashboards/Accounts?showTab=AccountsOpeningBalancesTab"
                >Opening Balances</a
              ><a
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Regular Charges"
                data-tabid="AccountsRegChrgTab"
                href="#AccountsRegChrg"
                data-goto="/Dashboards/Accounts?showTab=AccountsRegChrgTab"
                >Regular Charges</a
              ><a
                class="show-accounts-container accounts-tab-toggle accounts-regular-expenses-link v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Regular Expenses"
                data-tabid="AccountsRegExpTab"
                href="#AccountsRegExp"
                data-goto="/Dashboards/Accounts?clickLink=accounts-regular-expenses-link"
                >Regular Expenses</a
              ><a
                class="show-accounts-container accounts-tab-toggle accounts-unallocated-link v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Unallocated Funds"
                data-tabid="AccountsUnallocatedTab"
                href="#AccountsUnallocated"
                data-goto="/Dashboards/Accounts?clickLink=accounts-unallocated-link"
                >Unallocated</a
              ><a
                class="show-accounts-container accounts-view-ledgers-link v-legacy-link-click"
                data-toggle="tab"
                data-target="null"
                data-tabid="null"
                onclick="createLedgerTab(null)"
                data-goto="/Dashboards/Accounts?clickLink=accounts-view-ledgers-link"
                >View Ledgers</a
              ><a
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click statementMergeContractor"
                data-toggle="tab"
                data-tabtitle="Statement Merge"
                data-tabid="AccountsStatementMergeTab"
                href="#AccountsStatementMerge"
                data-goto="/Dashboards/Accounts?showTab=AccountsStatementMergeTab&amp;tabType=contractor"
                >Contractor Statement Merge</a
              >
            </div>
          </details>
          <details class="details--revert">
            <summary>Landlord</summary>
            <div data-title="Landlord">
              <a
                class="show-accounts-container v-legacy-link-click"
                data-toggle="modal"
                data-target="#modalAgentRefund"
                data-goto="/Dashboards/Accounts?showModal=modalAgentRefund"
                >Agent Refund</a
              ><a
                class="show-accounts-container v-legacy-link-click"
                data-toggle="modal"
                data-target="#modalChargeLandlordFee"
                data-goto="/Dashboards/Accounts?showModal=modalChargeLandlordFee"
                >Charge Landlord Fee</a
              ><a
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="HMRC Payments"
                data-tabid="AccountsHMRCTab"
                href="#AccountsHMRC"
                data-goto="/Dashboards/Accounts?showTab=AccountsHMRCTab"
                ><span>HMRC Payments</span></a
              ><a
                class="show-accounts-container accounts-tab-toggle accounts-perform-payments-link v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Perform Payments"
                data-tabid="AccountsPerformPaymentsTab"
                href="#AccountsPerformPayments"
                data-goto="/Dashboards/Accounts?clickLink=accounts-perform-payments-link"
                >Perform Payments</a
              ><a
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click statementMergeLandlord"
                data-toggle="tab"
                data-tabtitle="Statement Merge"
                data-tabid="AccountsStatementMergeTab"
                href="#AccountsStatementMerge"
                data-goto="/Dashboards/Accounts?showTab=AccountsStatementMergeTab&amp;tabType=landlord"
                >Statement Merge</a
              ><a
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click RapidPayLandlord"
                data-toggle="tab"
                data-tabtitle="Rapid Pay"
                data-tabid="RapidPayTab"
                href="#AccountsPay"
                data-goto="/Dashboards/Accounts?showTab=AccountsPayTab&amp;tabType=landlord"
                >Rapid Pay</a
              >
            </div>
          </details>
          <details class="details--revert">
            <summary>Tenant</summary>
            <div data-title="Tenant">
              <a
                class="show-accounts-container v-legacy-link-click"
                data-toggle="modal"
                data-target="#modalCollectRent"
                data-goto="/Dashboards/Accounts?showModal=modalCollectRent"
                >Collect Rent</a
              ><a
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Invoice Import"
                data-tabid="AccountsInvoiceImportTab"
                href="#AccountsInvoiceImport"
                data-goto="/Dashboards/Accounts?showTab=AccountsInvoiceImportTab"
                >Invoice Import</a
              ><a
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Rapid Collect"
                data-tabid="AccountsCollectTab"
                href="#AccountsCollect"
                data-goto="/Dashboards/Accounts?showTab=AccountsCollectTab"
                >Rapid Collect</a
              ><a
                id="header-menu_rent-gurantee-invoices"
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Rent Guarantee Invoices"
                data-tabid="RentGuaranteeTab"
                href="#AccountsRentGuaranteeInvoices"
                data-goto="/Dashboards/Accounts?showTab=RentGuaranteeTab"
                >Rent Guarantee</a
              ><a
                class="show-accounts-container accounts-tab-toggle v-legacy-link-click"
                data-toggle="tab"
                data-tabtitle="Service Charges"
                data-tabid="AccountsServiceChrgsTab"
                href="#AccountsServiceChrgs"
                data-goto="/Dashboards/Accounts?showTab=AccountsServiceChrgsTab"
                >Service Charges</a
              ><a
                class="show-accounts-container v-legacy-link-click"
                data-toggle="modal"
                data-target="#modalTransactionSheet"
                data-goto="/Dashboards/Accounts?showModal=modalTransactionSheet"
                >Transaction Sheet</a
              >
            </div>
          </details>
        </div>
      </details>
      <details class="details--revert">
        <summary>Reporting</summary>
        <div data-title="Reporting">
          <a href="/Reporting/Sales-Reporting/">Reporting Dashboard</a
          ><a
            class="menu-ManagementInformationDashboard"
            href="/Dashboards/ManagementInfo"
            >Management information</a
          ><a href="/BranchActivity/BranchActivity">Branch activity</a>
          <details class="details--revert">
            <summary>Reports</summary>
            <div data-title="Reports">
              <a
                href="javascript:void(0)"
                data-reporttype="General"
                class="load-link-reports-general"
                >General</a
              ><a
                href="javascript:void(0)"
                data-reporttype="Lettings"
                data-category-filter="13"
                class="load-link-reports-accounts"
                >Accounts</a
              ><a
                href="javascript:void(0)"
                data-reporttype="Lettings"
                class="load-link-reports-lettings"
                >Lettings</a
              ><a href="/Portals/Reports">Batch Reports</a
              ><a
                href="javascript:void(0)"
                data-reporttype="Sales"
                class="load-link-reports-sales"
                >Sales</a
              >
            </div>
          </details>
        </div>
      </details>
      <details class="details--revert">
        <summary>Communications</summary>
        <div data-title="Communications">
          <a href="/Communications/MassEmail">Email Merge</a
          ><a href="/Communications/EmailTracker">Email Tracker</a
          ><a href="/Dashboards/ESign" class="menu-ESign esign-force-trigger"
            >E-Sign</a
          ><a href="/Communications/LetterMailMerge">Mail Merge</a
          ><a href="/Communications/MassSMS">SMS Merge</a>
        </div>
      </details>
      <button
        class="btn btn-secondary btn-compact fa-solid fa-search search-link"
        data-toggle="search"
        slot="dual"
      >
        Search</button
      ><button
        class="btn btn-secondary btn-compact fa-bell m-0 d-md-none"
        slot="dual"
        data-number="2"
        data-modal="modal-notification"
      >
        Notifications
      </button>
      <div
        class="dialog__wrapper dialog__wrapper--right dialog-overflow d-none d-md-block"
        slot="dual"
      >
        <button
          class="btn btn-secondary btn-compact fa-bell m-0 icon-set-two mynotification"
        >
          Notificatons
        </button>
        <dialog id="notifications-dialog">
          <div class="notification-panel">
            <div class="notifications-header">
              <h4>Notifications</h4>
              <h4 class="text-center">No notifications</h4>
            </div>
            <div class="notification-body"></div>
          </div>
        </dialog>
      </div>
      <a
        href="/Calendar"
        class="btn btn-secondary btn-compact fa-calendar icon-set-two mycalendar"
        slot="dual"
        >Calendar</a
      >
      <div class="dialog__wrapper dialog-overflow show" slot="dual">
        <button class="btn btn-secondary btn-compact fa-grid fa-solid m-0">
          More actions
        </button>
        <dialog class="dialog--list" id="more-actions-dialog">
          <a
            href="javascript:void(0)"
            class="icon-set-two mybranch"
            data-toggle="modal"
            data-target="#modalSelectBranches"
            ><i class="fa-light fa-store"></i>Active branches</a
          ><a href="/calendar" class="mycalendar icon-set-two"
            ><i class="fa-light fa-calendar"></i>Calendar</a
          ><a
            href="#openview-"
            id="header-notifictions-add"
            class="icon-set-two"
            data-toggle="quickview"
            data-modal="modal-add-new-record"
            ><i class="fa-regular fa-plus"></i>Add new record</a
          ><a
            href="#openview-calls"
            data-toggle="quickview"
            class="auto-tab icon-set-two mycalls"
            ><i class="fa-regular fa-phone"></i>Calls</a
          ><a
            href="#openview-contacts"
            data-toggle="quickview"
            class="auto-tab mycontacts icon-set-two"
            ><i class="fa-regular fa-address-book"></i>Contacts</a
          ><a
            href="#openview-events"
            data-toggle="quickview"
            class="auto-tab icon-set-two myevents"
            ><i class="fa-light fa-calendar-lines"></i>Events</a
          ><a
            href="#openview-notes"
            data-toggle="quickview"
            class="auto-tab mynotes icon-set-two"
            ><i class="fa-light fa-sticky-note"></i>Notes</a
          ><a
            href="#openview-tasks"
            data-toggle="quickview"
            class="auto-tab mytodo icon-set-two"
            ><i class="fa-regular fa-check-circle"></i>Tasks</a
          >
        </dialog>
      </div>
      <a href="https://my.iamproperty.com/" slot="secondary">iamproperty</a
      ><a href="/" slot="secondary" class="selected">CRM</a
      ><a href="https://my.iamproperty.com/ic" slot="secondary">movebutler</a
      ><a href="https://my.iamproperty.com/ias" slot="secondary">iamsold</a>
      <div
        class="nav--menu open"
        data-title="My account"
        data-icon="fa-user fa-solid"
        slot="menus"
      >
        <div class="mt-3 mb-3 d-flex align-items-start">
          <div class="flex-shrink-0 mt-1 me-2">
            <div class="thumbnail-wrapper d32 circular inline">
              <img
                id="partial-view-avatar-img"
                class="hide"
                src=""
                alt=""
                data-src=""
                data-src-retina=""
                width="32"
                height="32"
              />
              <div
                class="avatar-placeholder"
                style="background-color: rgb(185, 31, 109)"
              >
                <span class="semi-bold">JL </span>
              </div>
            </div>
          </div>
          <span class="h3 fa-normal pb-0 mb-0">James Lambert</span>
        </div>
        <a
          href="javascript:void(0)"
          data-toggle="modal"
          class="mybranch icon-set-two"
          data-target="#modalSelectBranches"
          >Active branches</a
        ><a href="/User/Account" class="mb-0">Account settings</a>
        <details class="details--revert">
          <summary>Control centre</summary>
          <div data-title="Control centre">
            <a class="menu-CtrlCentre" href="/Dashboards/ControlCentre"
              >Dashboard</a
            ><a href="/ControlCentre/Users">Users</a
            ><a href="/ControlCentre/Configuration/Index/545911"
              >Configuration</a
            ><a href="/ControlCentre/Branches">Branches</a
            ><a href="/ControlCentre/Admin/Companies">Company</a
            ><a href="/ControlCentre/Admin/TBControls/545911"
              >Property Management Settings</a
            >
          </div>
        </details>
        <a href="https://helpcentre.iamproperty.com/hc/en-gb" target="_blank"
          >Help centre</a
        ><a href="javascript:document.getElementById('logoutForm').submit()"
          >Log out</a
        >
        <form
          action="/User/LogOff"
          class="visually-hidden"
          id="logoutForm"
          method="post"
        >
          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="QZ68jaSr13tS4P_7le65g1mJYhmiTx_T8huuCDzfShr0yZiODplQjl1ysi6NYVpgSa4WdyudXxqePfa5Z0uUC9SevnM2QFH5EcB81RG9aZCoD25iVp0nZx8D-ASn5UTw0JB4c9ULL8iJSXZGxCLiMw2"
          />
          <button class="btn btn-prmary" type="button">Log out</button>
        </form>
      </div></iam-nav
    >
  </nav>
</template>
