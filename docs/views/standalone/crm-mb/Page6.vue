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
      <div class="container">

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
                  <td>Alex Brown</td>
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
              <button data-click-events='[{"event ":"show","target":"#invite"}]'>
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


        <div class="form-panel js-hide" id="invite">
          <hr/>
          <h2>Send digital invite</h2>

          company

        </div>



      </div>













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