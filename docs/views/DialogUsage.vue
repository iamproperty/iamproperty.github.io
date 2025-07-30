<script setup>
  import Table from '@/components/Table/Table.vue';

</script>

<template>
  <h3>Usage</h3>

  <p>
    When deciding which component to use, consider the urgency, importance, and persistence of the information or
    action. Snackbars for non-critical and transient notifications, inline notifications and banners for persistent and
    important information and dialogs are best suited for critical and immediate actions.
  </p>

  <Table>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Priority</th>
          <th>User action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Snackbar</td>
          <td>Low priority</td>
          <td><strong>Optional</strong>: Snackbars disappear automatically</td>
        </tr>
        <tr>
          <td class="text-nowrap">Inline notification</td>
          <td class="text-nowrap">Medium priority</td>
          <td>
            <strong>Optional</strong>: Inline notifications appear amongst the page content in the relevant area and
            remain until the state that cause the inline notification is resolved.
          </td>
        </tr>
        <tr>
          <td>Banner</td>
          <td>Prominent, medium priority</td>
          <td>
            <strong>Optional</strong>: Banners remain until dismissed by the user, or if the state that caused the
            banner is resolved
          </td>
        </tr>
        <tr>
          <td><a href="/dialogs/modal">Modal</a></td>
          <td>High priority</td>
          <td>
            <strong>Required</strong>: Modals block app usage until the user takes a dialog action or exits the dialog
            (if available)
          </td>
        </tr>
      </tbody>
    </table>
  </Table>
</template>
