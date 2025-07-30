<script setup>
  import Table from '@/components/Table/Table.vue';
  import nonmodalPassive from '../img/dialogs/nonmodal-passive.png';
  import nonmodalTransactional from '../img/dialogs/nonmodal-transactional.png';

</script>

<template>
  <div class="container">
    <h2>Non-modal</h2>
    <p class="lead">
      A non-modal dialog pops up on top of a page, sometimes triggered by the page and sometimes after some user action.
      The page below is still accessible, but is now often partly covered by the dialog.
    </p>

    <Table class="table--fullwidth">
      <table>
        <thead>
          <tr>
            <th><i class="fa-sharp fa-solid fa-circle-check text-success"></i> When to use</th>
            <th class="text-nowrap"><i class="fa-sharp fa-solid fa-circle-xmark text-danger"></i> When not to use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Access to page</strong>: Use non-modal dialogs when users need to compare or refer to information
              on the main page alongside the modal. Users can interact with both the non-modal and on-page content
              simultaneously, and the non-modal dialog may be moved to access hidden information.
            </td>
            <td>
              <strong>Avoid when user response is required</strong>: Do not use non-modal dialogs if the user’s response
              or input is necessary to continue the workflow. Non-modal dialogs should be reserved for optional or
              non-critical tasks. Instead, opt for a modal dialog when user interaction is required to progress the
              workflow.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Workflow aid</strong>: Utilize non-modal dialogs to perform tasks or present information alongside
              the main page, accelerating and aiding user workflows.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <strong>Additional information</strong>: Display supplementary information in non-modal dialogs to inform
              user decisions and workflows, such as in-context help or tutorials like a knowledge center.
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Table>

    <h3 class="pt-3">Non-Modal variants</h3>

    <div class="row mb-2">
      <div class="col-sm-6">
        <img :src="nonmodalPassive" alt="" />
        <span class="text-center d-block pt-1 pb-3 text-primary">Passive</span>
      </div>
      <div class="col-sm-6">
        <img :src="nonmodalTransactional" alt="" />
        <span class="text-center d-block pt-1 pb-3 text-primary">Transactional</span>
      </div>
    </div>

    <Table>
      <table>
        <thead>
          <tr>
            <th>Variant</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Passive</th>
            <td>
              Provide supplementary information or feedback without interrupting the user’s workflow. Contains no
              actions for the user to take. See Tooltip, Progress bar, Inline notification, etc.
            </td>
          </tr>
          <tr>
            <th>Transactional</th>
            <td>
              Presents the user with optional action(s). Actions can be repeated without closing the dialog. Contains at
              least one button. See Cookies, surveys, multi-step forms.
            </td>
          </tr>
        </tbody>
      </table>
    </Table>
  </div>
</template>
