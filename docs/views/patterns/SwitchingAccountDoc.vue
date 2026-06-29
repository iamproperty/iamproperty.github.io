<script setup>
  import DSHeader from '../DSHeader.vue';
  import Nav from '@/components/Nav/Nav.vue';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
</script>

<template>
  <main>
    <DSHeader section="components">
      <h1>Switching account</h1>
    </DSHeader>


    <p class="lead">Within the our products, we have many users who have multiple accounts so we have provided a way for those users to switch their accounts right from the my account navbar menu. The switch account button will only appear if the user has more than one account. </p>

    <p>Below documents where that switch account is positioned in the navbar menu and the page template required to perform the switch.</p>

    <h2>Account switcher placement in navbar menu</h2>

    <a href="/switch" class="btn btn-tertiary"><i class="fa-thin fa-arrow-up-arrow-down me-1"></i>Switch account</a>

    <Versions pdf="/pdfs/switch-account.pdf">
      <table>
        <thead>
          <tr>
            <th>Version Control</th>
            <th>Date</th>
            <th>Notable updates</th>
          </tr>
        </thead>
        <tbody class="text-body">
          <tr>
              <td>V1</td>
              <td>29.06.2026</td>
              <td>N/A</td>
            </tr>
        </tbody>
      </table>
    </Versions>

  </main>
</template>
