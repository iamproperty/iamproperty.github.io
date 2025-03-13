<template>
  <div>
    <CrmNav></CrmNav>

    <main>
      <CollapsibleSideMenu data-title="Configuration" open open-always>
        <div slot="menu">
          <label for="test1">Active branch</label>
          <select id="test1" class="form-select" name="test1">
            <option value="1" selected>Newcastle</option>
            <option value="2">Two</option>
            <option value="2">Three</option>
            <option value="2">Four</option>
          </select>
        </div>

        <hr slot="menu" />

        <a slot="menu" href="/" class="link"><i class="fa-light fa-alien"></i>Control panel</a>
        <a slot="menu" href="/" class="link selected">Contact us</a>
        <a slot="menu" href="/" class="link active">Active Class</a>
        <a slot="menu" href="/" class="router-link-active router-link-exact-active">Vue's Active Class</a>
        <a slot="menu" href="/" class="link">Example link</a>
        <a slot="menu" href="/" class="link">Example link with a really long name in here for some reason</a>
      
        <ul slot="menu" class="parent">
          <li><a class="link">Parent link</a></li>
          <li><a href="/" class="link"><i class="fa-light fa-house"></i>Example link</a></li>
          <li><a href="/" class="link">Example link with a really long name in here for some reason</a></li>
          <li><a href="/" class="link">Sub link 1</a></li>
          <li><a href="/" class="link">Sub link 2</a></li>
          <li><a href="/" class="link active">Sub link (active)</a></li>
          <li><a href="/" class="router-link-active router-link-exact-active">Sub link (vue active)</a></li>
        </ul>
        <a slot="menu" href="/" class="link">Further sub links after group</a>

        <h1>Inspections</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </CollapsibleSideMenu>
    </main>
  </div>
</template>

<script>
  import Nav from '@/components/Nav/Nav.vue';
  import CollapsibleSideMenu from '@/components/CollapsibleSideMenu/CollapsibleSideMenu.vue';
  import CrmNav from '../CrmNav.vue';

  export default {
    components: {
      Nav,
      CollapsibleSideMenu,
      CrmNav,
    },
  };
</script>
