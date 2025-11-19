<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';
  import Notification from '@/components/Notification/Notification.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Standardised iamproperty address lookup</h1>
    </DSHeader>

    
    <p class="lead">Content on which values and content need to be added</p>
    <form>
      
    <STDAddressLookup data-allow-overseas data-allow-manual data-county-required></STDAddressLookup>

    <button type="submit">submit</button>
    </form>

    <div class="pb-5">
      <Notification>
        This is the standardised component which uses an existing UI component which has more flexability built in.
        <br/><a href="/components/addresslookup" class="">UI component</a>
      </Notification>
      
    </div>
    
    <div class="bg-light version-control">
      <div class="container">
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
              <td>0.1</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/iamproperty-address-lookup.pdf" download>Download latest acceptance criteria and technical designs</a>
      </div>
    </div>
  </main>
</template>
