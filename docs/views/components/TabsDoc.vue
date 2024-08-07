<script setup>
  import DSHeader from '../DSHeader.vue'
  import headerImg from '../../img/cards-header.png'
  import anatomy from '../../img/tabs/tabs-anatomy.png'
  import Tabs from '@/components/Tabs/Tabs.vue'
  import Tab from '@/components/Tabs/Tab.vue'
  import Readme from '@/components/Tabs/README.md'
  import WebReadme from '~/ts/components/tabs/README.md'
  import Table from '@/components/Table/Table.vue'

  import { ref } from 'vue'

  const disabledBoolean = ref(true);
  const items = [
    {
      title: 'Tab 1',
      content: '<p>Tab content</p>'
    },
    {
      cite: 'Name goes here 2',
      quote: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>`,
      image: '/code.jpeg'
    },
    {
      cite: 'Name goes here 3',
      quote: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>`,
      class: 'largest',
      image: '/shutterstock_1229155495.webp'
    }
  ];

  const htmlUsage = ref(`<div class="container tabs__container visualtest">
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
  </div>`)
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Tabs</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">Tabs group together content and display one at a time, they should not be used for important content as it may not be visible on page load. Tabs should be presented horizontally and above content.</p>

      <h2>Anatomy</h2>
      <img :src="anatomy" class="mb-3" />
      <ol class="mb-5">
        <li>Selected tab item name: this should briefly summarise what type of content is shown below the tab.</li>
        <li>Selected tab underline: this line shows beneath the selected tab item.</li>
        <li>Unselected tab item name: this should briefly summarise what type of content is shown below the tab when selected.</li>
        <li>Tabs underline: this line stretches the width of the page and serves as a separation between the tab items and tab content.</li>
        <li>Tab content: the content that is shown when a tab is selected.</li>
      </ol>
    </div>

    <div class="container visualtest">
      <Tabs>
        <a href="/link" class="active">A link</a>
        <a href="/link">A another link</a>
      </Tabs>

      <p>Fake content that is served up via the serverside</p>
    </div>

    <div class="container visualtest">
      <Tabs>
        <Tab title="The benefits of auction">
          <p class="lead">Tab content 1</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Tab>
        <Tab title="The types of auctions we offer">
          <p class="lead">Tab content 2</p>
          <a href="/link">a link</a>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Tab>
        <Tab title="Online auctions" lazy>
          <p class="lead">Tab content 3</p>
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
        <Tab title="Disabled tab example" :disabled="disabledBoolean">
          <p class="lead">Tab content (disabled tab)</p>
          <p>Tab paragraph (disabled tab)</p>
        </Tab>
      </Tabs>
    </div>

    <div class="container">
      <h2 class="mt-5">Admin panel</h2>
      <p>The tabs component display changes when its held within an admin panel, this is to make it fit into the admin panel styles.</p>
    </div>

    <div class="container visualtest">
        <Tabs class="admin-panel">
          <Tab title="The benefits of auction">
            <p class="lead">Tab content 1</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Tab>
          <Tab title="The types of auctions we offer">
            <p class="lead">Tab content 2</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Tab>
          <Tab title="Online auctions" lazy>
            <p class="lead">Tab content 3</p>
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
          <Tab title="Disabled tab example" :disabled="disabledBoolean">
            <p class="lead">Tab content (disabled tab)</p>
          </Tab>
        </Tabs>
    </div>


    <div class="container">
      <h2 class="mt-5">Guided tabs</h2>
      <p>Adding a <code>.tabs--guided</code> class adds an extra layer of swiping functinality on the tabs content. Alongside this a button is displayed on desktop to navigate it to the next tab with the idea that the user is being guided through the tab content.</p>
    </div>

    <div class="container visualtest">
        <Tabs class="tabs--guided">
          <Tab title="Tab 1">
            <p class="lead">Tab content 1</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Tab>
          <Tab title="Tab 2">
            <p class="lead">Tab content 2</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Tab>
          <Tab title="Tab 3" >
            <p class="lead">Tab content 3</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Tab>
          <Tab title="Tab 4" >
            <p class="lead">Tab content 4</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Tab>
          <Tab title="Tab 5" >
            <p class="lead">Tab content 5</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Tab>
          <Tab title="Tab 6" >
            <p class="lead">Tab content 6</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Tab>
          <Tab title="Tab 7" >
            <p class="lead">Tab content 7</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Tab>
          
        </Tabs>
    </div>

    <Tabs class="container">
      <details>
        <summary><h2>Web component</h2></summary>
        <WebReadme></WebReadme>
      </details>
      <details>
        <summary><h2>Vue component</h2></summary>
        <Readme></Readme>
      </details>
    </Tabs>
    
    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Design System Version</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>V1 added</td>
              <td>28.09.2023</td>
              <td>v4.0.1</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/tabs.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>
