<script lang="ts" setup>
  import VideoModal from '@/components/VideoModal/VideoModal.vue';
  import Tooltip from '@/components/Tooltip/Tooltip.vue';
  import Form from '@/components/Form/Form.vue';
  import Input from '@/components/Input/Input.vue';
  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';
        
</script>

<template>
  <nav>


  </nav>
  <main>

    <div class="container pt-5 template--form">

      <h1 class="text-center mx-auto">Refer Premium Conveyancing</h1>
      <Form>
      <form class="form-panel">
        <h2>Additional referral information needed</h2>


        
        <!-- Company -->
        <fieldset class="pb-3">
          <legend class="lead pb-3"><strong>Company:</strong> The best company</legend>

          <span class="label">Registered address</span>
          <address class="bg-light p-3 mw-input">22 Lynx Road, Tynemouth, Newcastle upon Tyne NE1 5LS</address>

        </fieldset>

        <!-- Lead client -->
        <fieldset class="pb-3">
          <legend class="lead pb-3"><strong>Lead client:</strong> Bob Smith</legend>

          <label>
            Phone number
            <input type="tel" name="lead_client[tel]" /> 
          </label>

          <label>
            Email address
            <input type="email" name="lead_client[email]" /> 
          </label>
        </fieldset>

        <!-- second client -->    
        <fieldset class="mb-3">
          <legend class="lead pb-3"><strong>Client 2:</strong> Bob Smith</legend>

          <label>
            Phone number
            <input type="tel" name="client2[tel]" /> 
          </label>

          <label>
            Email address
            <input type="email" name="client2[email]" /> 
          </label>
        </fieldset>

        <fieldset class="mb-3">
          <legend class="label">Does this case require all party consent, e.g marital split?</legend>
          <label class="d-inline-block">
            <input type="radio" name="require_consent" value="yes" />
            Yes
          </label>
          <label class="d-inline-block">
            <input type="radio" name="require_consent" value="no" />
            No
          </label>
        </fieldset>

        <fieldset class="mb-3">
          <legend class="label">Does this case have a known onward purchase?</legend>
          <input type="radio" name="onward_purchase" value="yes" id="onward_purchase_yes" />
          <label class="d-inline-block" for="onward_purchase_yes">
            Yes, there is a known onward purchase
          </label>
          <input type="radio" name="onward_purchase" value="no" id="onward_purchase_no" />
          <label class="d-inline-block" for="onward_purchase_no">
            No known onward purchase
          </label>

          <hr/>

          <div class="conditional conditional-1 pt-3">

            <STDAddressLookup data-title="Search onward purchase address" data-allow-manual data-address-unknown="address-unknown" ></STDAddressLookup>
            <hr class="mb-1" />
            <label class="pb-5">
              Offer price
              <Input data-currency><input type="text" name="offer-price" step="100" value="50,006"/></Input>
            </label>


            <fieldset class="mb-3">
              <legend class="label">Are they purchasing with a mortgage?</legend>
              <label class="d-inline-block">
                <input type="radio" name="mortgage" value="yes" />
                Yes
              </label>
              <label class="d-inline-block">
                <input type="radio" name="mortgage" value="no" />
                No
              </label>
            </fieldset>

            <fieldset class="mb-3">
              <legend class="label">Tenure</legend>
              <label class="d-inline-block">
                <input type="radio" name="Tenure" value="freehold" />
                Freehold
              </label>
              <label class="d-inline-block">
                <input type="radio" name="Tenure" value="leasehold" />
                Leasehold
              </label>
              <label class="d-inline-block">
                <input type="radio" name="Tenure" value="unknown" />
                Unknown
              </label>
            </fieldset>

            <fieldset class="mb-3">
              <legend class="label">Property type</legend>
              <label class="d-inline-block">
                <input type="radio" name="property-type" value="residential" />
                Residential
              </label>
              <label class="d-inline-block">
                <input type="radio" name="property-type" value="commercial" />
                Commercial/land
              </label>
              <label class="d-inline-block">
                <input type="radio" name="property-type" value="land" />
                Land
              </label>
              <label class="d-inline-block">
                <input type="radio" name="property-type" value="Unknown" />
                Unknown
              </label>
            </fieldset>
          </div>
        </fieldset>

        


        <label class="mw-100">
          Add referral note <iam-tooltip title="By ticking this box, you are argeeing to the terms and conditions"></iam-tooltip>
          <textarea name="note" rows="8"></textarea>
        </label>

        <label class="mw-100 pb-3">
          <input type="checkbox" name="agree" required />
          By ticking this box, you are argeeing to the terms and conditions<br/>
          <small>
            Confirming that you will ensure: The vendor will sign a Premium Conveyancing agreement before their property is marketed. We’ll notify you in movebutler once both agreements are signed. If this process isn’t followed, any referral fee from the vendor conveyancing may be forfeited.
          </small>
        </label>

        <div class="btn__group text-end">
          <a href="{{ route('ic.transactions.view', $transaction) }}" class="btn btn-secondary">Cancel</a>
          <button type="submit" class="btn btn-primary">Submit referral</button>
        </div>

      </form>
      </Form>
    </div>

  </main>
</template>