<template>
  <div class="container visualtest pb-5">

<div class="row">
  <div class="col pb-3 flex-grow-0">
    <div class="wider-colour-2 empty-state">
      
      <i class="fa-light fa-building"></i>
    </div>
    Business
  </div>
  <div class="col pb-3 flex-grow-0">
    <div class="wider-colour-3 empty-state">
      
      <i class="fa-light fa-file-lines"></i>
    </div>
    Page
  </div>
  <div class="col pb-3 flex-grow-0">
    <div class="wider-colour-4 empty-state">
      
      <i class="fa-light fa-address-book"></i>
    </div>
    Contact
  </div>
  <div class="col pb-3 flex-grow-0">
    <div class="wider-colour-5 empty-state">
      
      <i class="fa-kit fa-lettings-property"></i>
    </div>
    Lettings
  </div>
  <div class="col pb-3 flex-grow-0">
    <div class="wider-colour-7 empty-state">
      
      <i class="fa-kit fa-sales-property"></i>
    </div>
    Sales
  </div>
  <div class="col pb-3 flex-grow-0">
    <div class="wider-colour-8 empty-state">
      
      <i class="fa-kit fa-landlord"></i>
    </div>
    Landlord
  </div>
  <div class="col pb-3 flex-grow-0">
    <div class="wider-colour-9 empty-state">
      
      <i class="fa-light fa-user-helmet-safety"></i>
    </div>
    Contractor
  </div>
  <div class="col pb-3 flex-grow-0">
    <div class="wider-colour-13 empty-state">
      
      <i class="fa-kit fa-vendor"></i>
    </div>
    Vendor
  </div>
  <div class="col pb-3 flex-grow-0">
    <div class="wider-colour-6 empty-state">
      
      <i class="fa-light fa-house-user"></i>
    </div>
    Tenant
  </div>
  <div class="col pb-3 flex-grow-0">
    <div class="wider-colour-10 empty-state">
      
      <i class="fa-kit fa-sales-applicant"></i>
    </div>
    Sales applicant
  </div>


</div>

</div>

</template>

<style lang="scss">
.empty-state {
  height: 5rem;
  width: 5rem;
  background: var(--wider-colour, transparent);
  border-radius: 50%;
  position: relative;
  margin-right: 3rem;
  margin-bottom: 0.5rem;

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    font-size: 2rem;

  }

  &:is(:hover,.hover) {
    background: var(--wider-colour-hover, transparent);
  }
  &:is(:active,.active) {
    background: var(--wider-colour-active, transparent);
  }
}

</style>