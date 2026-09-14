<script setup>
  import Card from '@/components/Card/Card.vue';

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';

  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/cards-header.png';
  import cardImg from '../../img/cardImg.png';
  import cardModes from '../../img/cardModes.png';

  import cardArticleImg from '../../img/card-article-anatomy.png';

  import { card as events } from '../../events.js';
</script>
<template>
  <TrackEvents
    selector="iam-card"
    :events="['select-card', 'unselect-card', 'secondary-button-clicked', 'action-button-clicked']"
  ></TrackEvents>

  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Multi-action card</h1>
    </DSHeader>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4">
        <div class="col video-col">
          <span class="pb-3 d-block text-uppercase">Default State</span>

          <Card :data-image="cardImg" data-menu-title="Template Actions">
            Name of template Here
            <span>Updated by: John smith</span>
            <span class="pt-1">Updated on: 03/01/2024</span>
            <a href="/test" slot="primary-action" title="Edit template">Edit</a>
            <button slot="btns">Duplicate</button>
            <a href="/cards/card" slot="btns">Duplicate</a>
            <button slot="btns" class="btn btn-action">Delete</button>
          </Card>
        </div>
        <div class="col video-col">
          <span class="pb-3 d-block text-uppercase">Hover State</span>

          <Card :data-image="cardImg" data-menu-title="Template Actions">
            Name of template Here
            <span>Updated by: John smith</span>
            <span class="pt-1">Updated on: 03/01/2024</span>
            <a href="/test" class="hover" slot="primary-action" title="Edit template">Edit</a>
            <button slot="btns">Duplicate</button>
            <a href="/cards/card" slot="btns">Duplicate</a>
            <button slot="btns">Delete</button>
          </Card>
        </div>

        <div class="col video-col">
          <span class="pb-3 d-block text-uppercase">Ellipsis Hover State</span>

          <Card :data-image="cardImg" data-menu-title="Template Actions" style="--ellipsis-bg: var(--colour-light)">
            Name of template Here
            <span>Updated by: John smith</span>
            <span class="pt-1">Updated on: 03/01/2024</span>
            <a href="/test" slot="primary-action" title="Edit template">Edit</a>
            <button slot="btns">Duplicate</button>
            <a href="/cards/card" slot="btns">Duplicate</a>
            <button slot="btns">Delete</button>
          </Card>
        </div>

        <div class="col video-col">
          <span class="pb-3 d-block text-uppercase">Ellipsis Menu Open</span>

          <Card
            :data-image="cardImg"
            data-menu-title="Template Actions"
            style="--menu-display: block; --ellipsis-bg: var(--colour-light)"
          >
            Name of template Here
            <span>Updated by: John smith</span>
            <span class="pt-1">Updated on: 03/01/2024</span>
            <a href="/test" slot="primary-action" title="Edit template">Edit</a>
            <button slot="btns">Duplicate</button>
            <a href="/cards/card" slot="btns">Duplicate</a>
            <button slot="btns">Delete</button>
          </Card>
        </div>
      </div>
    </div>
  </main>
</template>
