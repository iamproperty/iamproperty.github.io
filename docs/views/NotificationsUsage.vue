<template>
  <h3>System notification usage examples</h3>
  <p>
    When deciding which component to use for system notifications, consider the urgency, importance, and persistence of
    the information or action. Toasts for non-critical and transient notifications, inline notifications and banners for
    persistent and important information and modals are best suited for critical and immediate actions.
  </p>

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
        <td><a href="/notifications/toasts">Toasts</a></td>
        <td>Low priority</td>
        <td><strong>Optional:</strong> Toasts disappear automatically</td>
      </tr>
      <tr>
        <td><a href="/notifications/inline-notification">Inline notification</a></td>
        <td>Medium priority</td>
        <td>
          <strong>Optional:</strong> Inline notifications appear amongst the page content in the relevant area and
          remain until the state that cause the inline notification is resolved.
        </td>
      </tr>
      <tr>
        <td><a href="/notifications/alert">Alert</a></td>
        <td>Prominent, medium priority</td>
        <td>
          <strong>Optional:</strong> Alerts remain until dismissed by the user, or if the state that caused the alert is
          resolved
        </td>
      </tr>
      <tr>
        <td><a href="/dialogs/modal#transactional">Transactional modal</a></td>
        <td>High priority</td>
        <td>
          <strong>Required:</strong> Modals block app usage until the user takes a dialog action. There are usually two
          options - one to complete the action and one to offer the user not to complete the action
        </td>
      </tr>
      <tr>
        <td><a href="/dialogs/modal#acknowledgement">Acknowledgement modal</a></td>
        <td>High priority</td>
        <td>
          <strong>Required:</strong> Modals block app usage until the user takes a dialog action. Users are offered a
          mandatory action - they acknowledge the system notification and are in line with compliance or legal
          requirements.
        </td>
      </tr>
    </tbody>
  </table>
</template>
