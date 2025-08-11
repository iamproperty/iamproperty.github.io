<script setup>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Accordion from '@/components/Accordion/Accordion.vue';
  import AccordionItem from '@/components/Accordion/AccordionItem.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Integration from '../Integration.vue';

  const htmlUsage = `<div class="container accordion">
  <details class="accordion-item">
    <summary><span class="accordion-header accordion-button h4">How long does the auction last?</span></summary>
    <div class="accordion-body">
      <p>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p><p>Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat.</p><p>Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p>
    </div>
  </details>
  <details class="accordion-item">
    <summary><span class="accordion-header accordion-button h4">How long does the auction last?</span></summary>
    <div class="accordion-body">
      <p>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p><p>Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat.</p><p>Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p>
    </div>
  </details>
</div>`;

</script>

<template>
  <TrackEvents
    selector="iam-accordion"
    :events="[]"
  ></TrackEvents>

  <main>
     <DSHeader :image="headerImg" section="components">
      <h1>Accordion</h1>
    </DSHeader>

    <p class="lead md-col-end-7">
      An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.
    </p>

    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/components">Components</a></li>
      </ul>
      <h2>Overview</h2>
      <p>The accordion component organises large content in a compact space using progressive disclosure. Header titles provide a high-level overview, helping users choose which sections to read.</p>
      <p>While accordions enhance content discovery and efficiency, they can also hide information, so it's important to consider that users may overlook some content.</p>
    
      <h3>When to use</h3>
      <ul>
        <li>To organise related information</li>
        <li>To shorten pages and reduce scrolling when content is not crucial to read in full.</li>
        <li>When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel.</li>
      </ul>

      <p>If a user is likely to read all of the content, then don't use an accordion as it adds the burden of an extra click; instead use a full scrolling page with normal headers.</p>
    </div>
    <div class="visualtest container">
      <Accordion>
        <details id="how-long">
          <summary><h3>How long does the auction last?</h3></summary>
          <p>
            Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin
            eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus.
          </p>
          <p>
            Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis
            porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget
            felis porttitor volutpat.
          </p>
          <p>
            Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
            justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta
            dapibus.
          </p>
        </details>

        <AccordionItem badge="hiya"
          title="Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat?"
        >
          <p>
            Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Proin
            eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus.
          </p>
          <p>
            Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis
            porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget
            felis porttitor volutpat.
          </p>
          <p>
            Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
            justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta
            dapibus.
          </p>
        </AccordionItem>
      </Accordion>
    </div>

    
     <Integration component="accordion" componentName="iam-accordion">
      <template #web-component>
        <pre><code>{{`<iam-accordion class="container">
  <details id="question1" class="accordion-item">
    <summary class="accordion-header accordion-button h4">Question 1</summary>
    <p>Answer </p>
  </details>
  <details class="accordion-item">
    <summary class="accordion-header accordion-button h4">Question 2</summary>
    <p>Answer </p>
  </details>
</iam-accordion>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Accordion from '@/components/Accordion/Accordion.vue</script>
        
<Accordion>
  <AccordionItem title="Question 1">
    <p>Accordion item content</p>
  </AccordionItem>
  <AccordionItem title="Question 2">
    <p>Accordion item content</p>
  </AccordionItem>
</Accordion>
`}}</code></pre>
      </template>

       <template #slots>
        <table>
          <thead>
            <tr>
              <th>Slot</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
              <td>This is the content of the accordion item</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #attr>
        <table>
          <thead>
            <tr>
              <th>Attributes</th>
              <th>Default</th>
              <th>Options/Type</th>
              <th>Required</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>title</th>
              <td>-</td>
              <td>String</td>
              <td>Yes</td>
              <td>A question or statement</td>
            </tr>
            <tr>
              <th>badge</th>
              <td>-</td>
              <td>String / Number</td>
              <td>No</td>
              <td>
                Add a highlighted badge/tag to the accordion item title
              </td>
            </tr>
            <tr>
              <th>badgecolour</th>
              <td>light</td>
              <td>String</td>
              <td>No</td>
              <td>
                Apply a colour the badge
              </td>
            </tr>
            <tr>
              <th>lazy</th>
              <td>-</td>
              <td>Boolean</td>
              <td>No</td>
              <td>
                	If set the content of the tab will not loaded intially and will be loaded after the user has clicked on the accordion link.
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #classes>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>accordion-keep-open</th>
              <td>Adding a class of accordion-keep-open to the accordion will stop the items from closing when another one is opened.</td>
            </tr>
          </tbody>
        </table>
      </template>

     <template #criteria>
        <ul>
          <li>Each accordion item should show the correct accordion title and accordion content</li>
          <li>A plus icon should appear to the right hand end of the accordion title</li>
          <li>When clicking an accordion item's title, the accordion item's content should show.</li>
          <li>If the accordion does not have the accordion--keep-open class on it, all other items should close when an item is opened.</li>
          <li>If the accordion DOES have the accordion--keep-open class on it, any previously opened items will stay open until closed.</li>
          <li>When an accordion item is hovered over, it's background will change to a light grey colour</li>
          <li>When an accordion item is opened, the icon will change to a minus, and the icon background will have a fill.</li>
          <li>If a badge is added to an accordion item, it will appear directly at the end of the accordion title.</li>
          <li>If a badge colour is set, the badge will have the expected background colour.</li>
        </ul>
      </template>
    </Integration>
  </main>
</template>

