<script setup>
  import BentoGrid from '@/components/BentoGrid/BentoGrid.vue';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';

  import bentoImg from '../../img/bento-grid.png';
  import bentoHover from '../../img/bento-grid-hover.png';
  import bentoExpand from '../../img/bento-grid-expand.png';
</script>

<template>
  <TrackEvents selector="iam-bento-grid" :events="['item-opened', 'item-closed']"></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Bento grid</h1>
    </DSHeader>

    <p class="lead md-col-end-7">
      A flexible, modular layout component that supports a variety of content types, ensuring that the content is
      organised visually into clean, structured units that adjust dynamically based on screen size or content changes.
    </p>

    <BentoGrid>
      <details name="bento" style="--bg: url('/iamsold-screenshot.png')">
        <summary>The power of auction</summary>
        <ul class="tick-list tick-list--white">
          <li>Faster timescales with 56-day completions*</li>
          <li>A 95% success rate, meaning fewer fall throughs</li>
          <li>7-day payment terms^</li>
          <li>A service more than a third of sellers are calling out for</li>
        </ul>
        <a href="" class="btn btn-secondary">Explore auction</a>
      </details>

      <details name="bento" style="--bg: url('/crm-screenshot.png')">
        <summary>Make your own rules</summary>
        <ul class="tick-list tick-list--white">
          <li>Faster timescales with 56-day completions*</li>
          <li>A 95% success rate, meaning fewer fall throughs</li>
          <li>7-day payment terms^</li>
          <li>A service more than a third of sellers are calling out for</li>
        </ul>
        <a href="" class="btn btn-secondary">Explore auction</a>
      </details>

      <details name="bento" style="--bg: url('/movebutler-screenshot.png')">
        <summary>Get your clients maving faster</summary>
        <ul class="tick-list tick-list--white">
          <li>Faster timescales with 56-day completions*</li>
          <li>A 95% success rate, meaning fewer fall throughs</li>
          <li>7-day payment terms^</li>
          <li>A service more than a third of sellers are calling out for</li>
        </ul>
        <a href="" class="btn btn-secondary">Explore auction</a>
      </details>

      <details name="bento" style="--bg: url('/market-appraisal-screenshot.png')">
        <summary>Stand our from the crowd</summary>
        <ul class="tick-list tick-list--white">
          <li>Faster timescales with 56-day completions*</li>
          <li>A 95% success rate, meaning fewer fall throughs</li>
          <li>7-day payment terms^</li>
          <li>A service more than a third of sellers are calling out for</li>
        </ul>
        <a href="" class="btn btn-secondary">Explore auction</a>
      </details>
    </BentoGrid>

    <h2>Behaviour</h2>

    <div class="col-end-6">
      <img :src="bentoImg" class="mb-3" />
      <p>
        <strong>Hidden content:</strong> Content and buttons are stored within the grid card as 0% opacity, revealed by
        relevant animations.
      </p>
    </div>

    <h2>Animation</h2>

    <div class="col-end-6">
      <img :src="bentoImg" class="mb-3" />
      <p>
        <strong>On hover:</strong> The tertiary button opacity will increase from 0% to 100%, and the image will expand
        slightly.
      </p>
    </div>

    <div class="col-start-7">
      <img :src="bentoImg" class="mb-3" />
      <p><strong>Expand:</strong> Grid cards expand to fill the entire component area when active</p>
    </div>

    <Integration component="bento-grid" componentName="iam-bento-grid">
      <template #web-component>
        <pre><code>{{`<iam-bento-grid>
  <details><summary>Item 1</summary> Item content</details>
  <details><summary>Item 2</summary> Item content</details>
  <details><summary>Item 3</summary> Item content</details>
</iam-bento-grid>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import BentoGrid from '@/components/BentoGrid/BentoGrid.vue</script>
        
<BentoGrid>
  <details><summary>Item 1</summary> Item content</details>
  <details><summary>Item 2</summary> Item content</details>
  <details><summary>Item 3</summary> Item content</details>
</BentoGrid>
`}}</code></pre>
      </template>

      <template #dispatched-events>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>item-opened</th>
              <td>When one of the items in the bento grid has been opened</td>
              <td>{ "event": "item-opened", "title": "Item summary title"}</td>
            </tr>
            <tr>
              <th>item-closed</th>
              <td>When one of the items in the bento grid has been closed</td>
              <td>{ "event": "item-closed", "title": "Item summary title"}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #criteria>
        <ul>
          <li>The opened bento grid should be display above the other items</li>
          <li>The clickable area for the bento grid should be large</li>
          <li>When 'prefer-reduced-motion' is turned on the animations should be turned off</li>
        </ul>
      </template>
      <template #data-layer>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>item-opened</th>
              <td>When one of the items in the bento grid has been opened</td>
              <td>{ "event": "item-opened", "title": "Item summary title"}</td>
            </tr>
            <tr>
              <th>item-closed</th>
              <td>When one of the items in the bento grid has been closed</td>
              <td>{ "event": "item-closed", "title": "Item summary title"}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration>
    <Versions pdf="/pdfs/bento-grid.pdf">
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
            <td>V1 added</td>
            <td>21.03.2025</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>
