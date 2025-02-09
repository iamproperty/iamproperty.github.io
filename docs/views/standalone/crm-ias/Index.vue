<template>
  <div>
    <MBNav></MBNav>
    <main class="template--form">
      <div class="container pt-4 text-center">
        <h1 class="mx-auto">Fetch property from CRM</h1>
        <ol class="list--steps" data-mobile-text="Client details">
          <li class="step--complete">Property details</li>
          <li class="step--complete">Client details</li>
          <li class="step--current">Lead srouce</li>
        </ol>
      </div>
      <div class="container">
        <form id="form" novalidate action="/standalone/crm-ias/page2">
          <div class="form-panel">
            <hr />
            <h2 class="h3">Lead source</h2>
            <fieldset
              data-change-events='[
            {"matches":"any","if":"show","target":"#second-form"},
            {"matches":"uploading-contract","if":"show","else":"hide","target":"#uploading"},
            {"matches":"not-uploading","if":"show","else":"hide","target":"#not-uploading"},
            {"matches":"branch-lead","if":"show","else":"hide","target":"#branch-lead"},
            {"matches":"any","if":"hide","target":"#first-button"}
            ]'
            >
              <div class="row">
                <span class="label">Lead type</span>
                <div class="col">
                  <label class="d-inline-block"
                    ><input type="radio" name="lead-type" value="uploading-contract" required />Valuer <br />(uploading
                    contract now)</label
                  >
                </div>

                <div class="col">
                  <label class="d-inline-block"
                    ><input type="radio" name="lead-type" value="not-uploading" required />Valuer <br />(not uploading
                    contract now)</label
                  >
                </div>

                <div class="col mw-fit-content">
                  <label class="d-inline-block"
                    ><input type="radio" name="lead-type" value="branch-lead" required /> Branch lead</label
                  >
                </div>
              </div>
            </fieldset>

            <a href="/standalone/crm-mb/page3" id="first-button" class="btn btn-tertiary mt-5 mb-0">Back</a>
          </div>

          <hr />
          <div class="form-panel js-hide" id="second-form">
            <span class="h3">Lead source details</span>

            <fieldset id="uploading" class="js-hide">
              <label
                >Valuer
                <select type="select" name="valuer" data-required="">
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
              </label>

              <label class="col-md-4"
                >Starting bid
                <span
                  ><span class="prefix">£ <small>GBP</small></span
                  ><input type="text" name="starting-bid" data-required /></span
              ></label>

              <label class="col-md-4"
                >Reserve price
                <span
                  ><span class="prefix">£ <small>GBP</small></span
                  ><input type="text" name="reserve-price" data-required /></span
              ></label>

              <FileUpload
                ><input type="file" name="files[]" multiple="multiple" accept=".pdf, .csv, .jpg, .png"
              /></FileUpload>
            </fieldset>

            <fieldset id="not-uploading" class="js-hide pb-3">
              <label
                >Valuer
                <select type="select" name="valuer" data-required="">
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
              </label>

              <label class="col-md-4"
                >Starting bid
                <span
                  ><span class="prefix">£ <small>GBP</small></span
                  ><input type="text" name="starting-bid" data-required /></span
              ></label>

              <label class="col-md-4"
                >Reserve price
                <span
                  ><span class="prefix">£ <small>GBP</small></span
                  ><input type="text" name="reserve-price" data-required /></span
              ></label>
            </fieldset>

            <fieldset id="branch-lead" class="js-hide pb-3">
              <label
                >Select the Negotiator
                <select type="select" name="valuer" data-required="">
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
              </label>
            </fieldset>

            <h3 class="label pb-2 mb-0">Lead contact preferences</h3>
            <p class="lead">If your client has a preferred nominated contact please fill in the details below:</p>

            <label
              >Choose a vendor to contact (optional)
              <select type="select" name="vendor">
                <option value=""></option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </label>

            <div class="row">
              <label class="col-md-4"
                >Date to contact (Optional)
                <span><input type="date" name="date" /><span class="suffix fa-regular fa-calendar"></span></span
              ></label>
            </div>

            <div class="row">
              <div class="col-md-4">
                <label
                  >Time to contact (optional)
                  <select type="select" name="time">
                    <option value=""></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </label>
              </div>
            </div>

            <small class="d-block pb-3"
              >Office opening hours:<br />
              9:00 - 17:30 Monday to Thursday<br />
              9:00 - 17:00 Firday<br />
              9:00 - 14:00 Saturday<br />
            </small>

            <p class="lead">Before proceeding, please confirm the following:</p>

            <fieldset>
              <label>
                <input type="checkbox" name="im-aware-shared" value="agreed" required />
                That the vendor is aware that their information will be shared with iamsold, and that they are happy for
                us to contact them in relation to the auction service.
              </label>
            </fieldset>
            <fieldset>
              <label>
                <input type="checkbox" name="im-aware-recorded" value="agreed" required />
                That the vendor is aware that calls to and from iamsold are recorded for training and monitoring
                purposes.
              </label>
            </fieldset>
            <fieldset>
              <label>
                <input type="checkbox" name="completed-assessment" value="agreed" required />
                That you have completed an assessment of the vendor circumstances in order to identify that auction
                would be a suitable method of sale for them.
              </label>
            </fieldset>

            <div class="row pt-3">
              <div class="col-md-4 d-flex align-items-center">
                <a href="/standalone/crm-mb/page3" class="btn btn-tertiary mb-0">Back</a>
              </div>
              <div class="col-md-8 text-end">
                <button type="submit" class="btn btn-primary mb-0 me-0">Continue</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <MBFooter></MBFooter>
    </main>
  </div>
</template>

<script>
  import MBNav from './Nav.vue';
  import MBFooter from './Footer.vue';
  import Input from '@/components/Input/Input.vue';
  import Logo from '@/foundations/Logo/Logo.vue';
  import Notification from '@/components/Notification/Notification.vue';
  import FileUpload from '@/components/FileUpload/FileUpload.vue';

  export default {
    components: {
      MBNav,
      MBFooter,
      Input,
      Logo,
      Notification,
      FileUpload,
    },
  };
</script>
