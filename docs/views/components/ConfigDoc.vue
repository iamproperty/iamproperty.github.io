<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Config from '@/components/Config/Config.vue';
  import Input from '@/components/Input/Input.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Config (Beta)</h1>
    </DSHeader>
<!--
    <h2>Basic example</h2>
    <div class="admin-panel">
      <h2 class="bg-light">Fee bands</h2>
      <Config data-import="/fee.json" data-name="fee" data-item-name="pricing band">

      
        <form>
          <label class="col-span-4">
            From 
            <Input data-currency><input name="amount" type="number" /></Input>
          </label>
          <label class="col-span-4 col-start-auto">
            To
            <Input data-currency><input name="amount2" type="number" /></Input>
          </label>
          <label class="col-span-4 col-start-auto">
            Referral fee
            <Input data-currency><input name="amount2" type="number" /></Input>
          </label>
        </form>
      </Config>
    </div>
-->
    <h2 class="pt-5">Fees example</h2>
    <Config data-import="/config2.json" data-name="config" data-buckets="type,partner,assigned" data-validate-add data-order>

      <form class="bg-light mb-5 p-3">
        <label>
          Fee
          <input name="name" type="text" />
        </label>
        <label>
          Amount ()
          <Input data-currency><input name="amount" type="number" /></Input>
        </label>
        <label>
          VAT
          <select name="vat">
            <option value="exempt">Exempt</option>
            <option value="non-exempt">Non-exempt</option>
          </select>
        </label>
        <label>
          Type select
          <select name="type" data-import="/types.json">
            <option value="">Please select one</option>
          </select>
        </label>
      </form>
    </Config>

  </main>
</template>
