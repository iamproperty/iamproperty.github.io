<script lang="ts" setup>
  import { ref } from 'vue';

  import STDAddressLookup from '@/components/STDAddressLookup/STDAddressLookup.vue';

  const url = ref('https://8mzh15wnrc.execute-api.eu-west-2.amazonaws.com/dev');
  const auth = ref('AWS4-HMAC-SHA256 Credential=ASIA4J67XPOD3EAZW65M/20260112/eu-west-2/execute-api/aws4_request, SignedHeaders=content-type;host;x-amz-date;x-amz-security-token, Signature=b6fad84bf3b823cd0a4930cb3107457bc3b3be9207e5950e98231f7297f5ace7');
  const token = ref('IQoJb3JpZ2luX2VjECQaCWV1LXdlc3QtMiJHMEUCIQCremFoF85mBe4f9iGsiydWhNQKR0h2SLH41G4CCXMANAIgLYZY0hiH7xEjWoiqy+ztHwaL5bfnZTT9UWXU99cWV1EqpwII7f//////////ARAAGgw4NDYwNDA4OTAyNDciDCnCWME641GmpX5Rrir7AWOQmeD8Ourlm0J5CRRanT9cYwYIk/og/mZR35VInIKZfhi6VZ2nqQfljySEvkmADUm27rUdUjtlb2yZboHLFwBYgaI2LwTKhrZ9YgKb6asC6rSKHAk+DCKySR+OL4DjkEtYqP+Q/HdidAgAYWLUxnXsv69bNePQlX4jFND1/43mR+mncGWATIPvySWGMNHvs3Fa7tMHjGie+Umy5N8erzzSPRqIWZ0pn4+L1mOHDfABf9drz+VrHqLwUZ51eXdDW6g4eH9PWQHQpmjX+cVscQVikFUrdUIUI9WSkM6aGG/QbCfPxy40IV5k2w8zsrIIKBnF9nyyZgA1d9nbMPvBk8sGOp0BmV5NYrpOXAFqAUXIjFXkh/W2+pnCARoPad3TxoQgrXcu7mVtTTFl4BnKCCbsowBi2io0PLKbIs8mhVauuCz2qiDAlaI7qyFoU1RuVZvl5gn5SFPZyhvRStlhWDSXBKWPiFCJpMovPFdUNEY3oxROzH+NN7Z1t/r+3RlTvAwkT4v3Q1gCD5g2tcSuf9l6fkpr4bCiFwuj+DIytggJgg==')
  const date = ref('20260112T115529Z');
</script>

<template>

<main>
  <h1>Address lookup</h1>
  <h2 class="h4 pb-2">Headers</h2>
  <label>
    URL
    <input name="url" v-model="url" />
  </label>
  <label>
    Authorization
    <input name="auth" v-model="auth" />
  </label>
  <label>
    X-Amz-Date
    <input name="amz-date" v-model="date" />
  </label>
  <label>
    X-Amz-Security-Token
    <input name="token" v-model="token" />
  </label>

  <h2 class="h4 pt-5">Component</h2>
  <form class="d-block">
    <STDAddressLookup 
    :data-url="url"
    :data-auth="auth"
    :data-token="token"
    :data-amz-date="date"
    ></STDAddressLookup>
    <button class="btn btn-primary">Submit form</button>
  </form>

  </main>
</template>