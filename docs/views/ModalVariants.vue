<template>
  <h3>Modal variants</h3>

  <div class="row">
    <div class="col-sm-6">
      <img :src="modalPassive" alt="" />
      <span class="text-center d-block pt-1 pb-3 text-primary">Passive</span>
    </div>
    <div class="col-sm-6">
      <img :src="modalTransactional" alt="" />
      <span class="text-center d-block pt-1 pb-3 text-primary">Transactional</span>
    </div>
    <div class="col-sm-6">
      <img :src="modalMulti" alt="" />
      <span class="text-center d-block pt-1 pb-3 text-primary">Multi-step</span>
    </div>
    <div class="col-sm-6">
      <img :src="modalAcknowledgement" alt="" />
      <span class="text-center d-block pt-1 pb-3 text-primary">Acknowledgement</span>
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
            Displays important information that users need to be aware of regarding their current workflow. It does not
            include any user actions to be taken.
          </td>
        </tr>
        <tr>
          <th>Transactional</th>
          <td>
            Requires users to perform a specific action to complete and close the modal. It includes both cancel and
            primary action buttons to guide users through the process. Action orientated.
          </td>
        </tr>
        <tr>
          <th>Acknowledgement</th>
          <td>
            The system necessitates user acknowledgement of provided information. It typically includes a single button,
            commonly labeled as “OK”.
          </td>
        </tr>
        <tr>
          <th>Multi-step</th>
          <td>
            Requires users to complete multiple steps before it can be closed. It contains cancel, previous, and
            next/completion buttons to facilitate users’ progression through the steps.
          </td>
        </tr>
      </tbody>
    </table>
  </Table>
</template>

<script>
  import Table from '@/components/Table/Table.vue';
  import modalPassive from '../img/dialogs/modal-passive.png';
  import modalTransactional from '../img/dialogs/modal-transactional.png';
  import modalMulti from '../img/dialogs/modal-multi.png';
  import modalAcknowledgement from '../img/dialogs/modal-acknowledgement.png';

  export default {
    components: {
      Table,
      modalPassive,
      modalTransactional,
      modalMulti,
      modalAcknowledgement,
    },
    data() {
      return {
        modalPassive: modalPassive,
        modalTransactional: modalTransactional,
        modalMulti: modalMulti,
        modalAcknowledgement: modalAcknowledgement,
      };
    },
  };
</script>
