<template>
  <div>
    <MBNav></MBNav>
    <main class="template--form">
      
      <div class="container pt-4 text-center">

      <h1 class="mx-auto">Fetch property from CRM</h1>
      <ol class="list--steps" data-mobile-text="Client details">
        <li class="step--complete">Property details</li>
        <li class="step--complete">Client details</li>
        <li class="step--current">Onboarding route</li>
      </ol>

      </div>
        <div class="form-panel" >
          <hr/>
          <h2>Onboarding route</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  labore et dolore magna aliqua. Ut enim ad minim veniam, nisi ut aliquip ex ea commodo consequat.</p>

          <Table>
            <table>
              <thead>
                <tr>
                  <th>Client name</th>
                  <th>Client type</th>
                  <th></th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td><i class="fa-solid fa-star text-primary"></i> Alex Brown</td>
                  <td>Buyer</td>
                  <td><a href="/" class="btn btn-tertiary m-0">Edit client details <i class="fa-regular fa-edit me-0"></i></a></td>
                </tr>
              </thead>
            </table>
          </Table>

          <a href="/buyer" class="btn btn-secondary fa-plus">Add another buyer</a>
          <p class="pb-1">How would you like to onbaord your client(s)?</p>
          <div class="row">
            <div class="col-sm-6">
              <button data-click-events='[{"event":"show","target":"#invite"}]'>
                <Card>Send digital invite<span>Description about what this is to provide more context</span></Card>
              </button>
            </div>
            <div class="col-sm-6">
              <a href="/">
                <Card>Continue in platform<br/><span>Description about what this is to provide more context</span></Card>
              </a>
            </div>
          </div>
        </div>


        <form class="form-panel js-hide" id="invite">
          <hr/>
          <h2>Send digital invite</h2>

          <span class="label">Client name</span>
          <p>Julie Smith</p>

          <div class="row">
            <div class="col-sm-6">
              
              <label for="email">Email address</label>
              <input type="email" id="email" name="email" data-required="" />

            </div>
            <div class="col-sm-6">
              
              <label for="tel">Telephone number</label>
              <input type="tel" id="tel" name="tel" data-required="" />

            </div>
          </div>

          <div>
            <input type="checkbox" name="sms" id="sms">
            <label for="sms">Send SMS reminder (Optional)</label>
          </div>

          
          <div>
            <span class="label">From a money laundering perspective is there anything unusual or suspicious about this transaction or individual at this stage?</span>
            <input type="radio" name="money-laundering" id="money-laundering1" value="yes" data-required>
            <label for="money-laundering1" class="d-inline-block">Yes</label>

            <input type="radio" name="money-laundering" id="money-laundering2" value="no" data-required>
            <label for="money-laundering2" class="d-inline-block">No</label>
          </div>
          
          <Notification class="">
            <strong>Please ensure the details from your CRM are correct: </strong> If they are not correct, please go to the property details within the CRM to update.
          </Notification>

          <p class="pt-4">By click ‘Send client digital invite’ you are confirming that the client(s) is/are aware that their information will be shared with movebutler, and that they are happy for us to contact them in relation to the movebutler service.</p>

          <div class="text-end"><button class="btn btn-primary mb-0">Send client(s) digital invite</button></div>

        </form>















      <MBFooter></MBFooter>
    </main>
  </div>
</template>

<script>
import MBNav from './Nav.vue'
import MBFooter from './Footer.vue'
import Input from '@/components/Input/Input.vue'
import Logo from '@/foundations/Logo/Logo.vue'
import Notification from '@/components/Notification/Notification.vue'
import Table from '@/components/Table/Table.vue'
import Card from '@/components/Card/Card.vue'

export default {
  components: {
    MBNav,
    MBFooter,
    Input,
    Logo,
    Notification,
    Table,
    Card
  },
}
</script>