<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h1>Tabs</h1>
      <p>Group together some content and display one at a time, should not be used for important content as it may not be visible on page load.</p>
    </div>
    
    <Tabs class="visualtest">
      <Tab title="The benefits of auction">
        <h2>Tab content 1</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab>
      <Tab title="The types of auctions we offer">
        <h2>Tab content 2</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab>
      <Tab title="Online auctions" lazy>
        <h2>Tab content 3</h2>
        <p>Lazy loaded table</p>
        <Table 
        :fields="[
          { key: 'column_1' },
          { key: 'column_2' },
          { key: 'column_3' }
        ]" 
        :items="[
        {
          column_1: 'row 1',
          column_2: 'row 1',
          column_4: 'row 1',
        }
        ]"></Table>
      </Tab>
    </Tabs>

    <div class="container">
      <h2>HTML code example</h2>
      <pre><code class="language-html">{{htmlUsage}}</code></pre>
    </div>
    
    <div class="container">
      <h2>Vue Tabs component reference</h2>
      <Readme></Readme>
    </div>
  </main>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import Tab from '@/components/Tabs/Tab.vue'
import Readme from '@/components/Tabs/README.md'
import Table from '@/elements/Table/Table.vue'

export default {
  components: {
    Tabs,
    Tab,
    Readme,
    Table
  },
  data () {
    return {
      items: [
        {
          title: 'Tab 1',
          content: '<p>Tab content</p>'
        },
        {
          cite: 'Name goes here 2',
          quote: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>`,
          image: require('../../assets/code.jpeg')
        },
        {
          cite: 'Name goes here 3',
          quote: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>`,
          class: 'largest',
          image: require('../../assets/shutterstock_1229155495.webp')
        }
      ],
      htmlUsage: `<div class="container tabs__container visualtest">
  <input type="radio" name="tabs_kiz0g36sw" id="tabs_kiz0g36sw_tab1" class="d-none">
  <input type="radio" name="tabs_kiz0g36sw" id="tabs_kiz0g36sw_tab2" class="d-none">
  <input type="radio" name="tabs_kiz0g36sw" id="tabs_kiz0g36sw_tab3" class="d-none">
  <div class="tabs__links">
    <label for="tabs_kiz0g36sw_tab1" class="link"> The benefits of auction </label>
    <label for="tabs_kiz0g36sw_tab2" class="link"> The types of auctions we offer </label>
    <label for="tabs_kiz0g36sw_tab3" class="link"> Online auctions </label>
  </div>
  <div class="tabs">
    <div class="tab"><h2>Tab content 1</h2></div>
    <div class="tab"><h2>Tab content 2</h2></div>
    <div class="tab"><h2>Tab content 3</h2></div>
  </div>
</div>`
    }
  }
}
</script>