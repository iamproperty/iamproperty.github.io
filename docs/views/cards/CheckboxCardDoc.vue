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
      <h1>Checkbox Card</h1>
    </DSHeader>

    <p>The checkbox card is variation of the header card that has two actions.</p>
    <p>
      The primary action can be triggered by clicking the card area (except for the checkbox). The type of action that
      will occur from the primary action is indicated by the icon on the bottom right of the card.
    </p>
    <p>
      The secondary action can be triggered by clicking the checkbox on the card. This puts the card in a selected state
      to allow users to make bulk changes to the cards using action buttons in an action bar.
    </p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card
              >Living room <span>1 check</span>
              <div slot="checkbox">
                <input type="checkbox" name="card2" id="card2" /><label for="card2" class="m-0">Select card</label>
              </div></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording" class="hover">
            <Card
              >Living room <span>1 check</span>
              <div slot="checkbox">
                <input type="checkbox" name="card3" id="card3" /><label for="card3" class="m-0">Select card</label>
              </div></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording" class="active">
            <Card
              >Living room <span>1 check</span>
              <div slot="checkbox">
                <input type="checkbox" name="card4" id="card4" /><label for="card4" class="m-0">Select card</label>
              </div></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Checkbox hover</span>
          <a href="/client-onbaording">
            <Card
              >Living room <span>1 check</span>
              <div slot="checkbox">
                <input type="checkbox" name="checked-hover" id="checked-hover" /><label
                  for="checked-hover"
                  class="m-0 hover"
                  >Select card</label
                >
              </div></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Checked</span>
          <a href="/client-onbaording">
            <Card
              >Living room <span>1 check</span>
              <div slot="checkbox">
                <input type="checkbox" name="checked" id="checked" checked /><label for="checked" class="m-0"
                  >Select card</label
                >
              </div></Card
            >
          </a>
        </div>
      </div>
    </div>

    <h3>Checkbox card with label</h3>
    <p>This is a variation of the checkbox card which includes the addition of a label to show status.</p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card
              >Living room <span>1 check</span><span slot="badges" class="badge">Not started</span>
              <div slot="checkbox">
                <input type="checkbox" name="card5" id="card5" /><label for="card5" class="m-0">Select card</label>
              </div></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording" class="hover">
            <Card
              >Living room <span>1 check</span><span slot="badges" class="badge">Not started</span>
              <div slot="checkbox">
                <input type="checkbox" name="card5" id="card5" /><label for="card5" class="m-0">Select card</label>
              </div></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording" class="active">
            <Card
              >Living room <span>1 check</span><span slot="badges" class="badge">Not started</span>
              <div slot="checkbox">
                <input type="checkbox" name="card5" id="card5" /><label for="card5" class="m-0">Select card</label>
              </div></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card
              >Living room <span>1 check</span><span slot="badges" class="badge">Not started</span>
              <div slot="checkbox">
                <input type="checkbox" name="card6" id="card6" /><label for="card6" class="m-0 hover"
                  >Select card</label
                >
              </div></Card
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card
              >Living room <span>1 check</span><span slot="badges" class="badge">Not started</span>
              <div slot="checkbox">
                <input type="checkbox" name="card6" id="card6" checked /><label for="card6" class="m-0"
                  >Select card</label
                >
              </div></Card
            >
          </a>
        </div>
      </div>
    </div>

    <h3>Checkbox card with label and progress bar</h3>
    <p>
      This is a variation of the checkbox card which includes the addition of a label to show status and a progress bar
      to keep track of progress.
    </p>

    <div class="container visualtest">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 pe-none">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <Card>
              Living room <span>1 check</span><span slot="badges" class="badge">Not started</span>
              <div slot="checkbox">
                <input type="checkbox" name="card10" id="card10" /><label for="card10" class="m-0">Select card</label>
              </div>
              <label class="hide-text mb-1 mt-2">
                <span class="visually-hidden">Percentage completed</span>
                <progress max="100" class="progress--inline" value="50">50%</progress>
              </label>
            </Card>
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording" class="hover">
            <Card>
              Living room <span>1 check</span><span slot="badges" class="badge">Not started</span>
              <div slot="checkbox">
                <input type="checkbox" name="card11" id="card11" /><label for="card11" class="m-0">Select card</label>
              </div>
              <label class="hide-text mb-1 mt-2">
                <span class="visually-hidden">Percentage completed</span>
                <progress max="100" class="progress--inline" value="50">50%</progress>
              </label>
            </Card>
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording" class="active">
            <Card>
              Living room <span>1 check</span><span slot="badges" class="badge">Not started</span>
              <div slot="checkbox">
                <input type="checkbox" name="card12" id="card12" /><label for="card12" class="m-0">Select card</label>
              </div>
              <label class="hide-text mb-1 mt-2">
                <span class="visually-hidden">Percentage completed</span>
                <progress max="100" class="progress--inline" value="50">50%</progress>
              </label>
            </Card>
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Checkbox hover</span>
          <a href="/client-onbaording">
            <Card>
              Living room <span>1 check</span><span slot="badges" class="badge">Not started</span>
              <div slot="checkbox">
                <input type="checkbox" name="card13" id="card13" /><label for="card13" class="m-0 hover"
                  >Select card</label
                >
              </div>
              <label class="hide-text mb-1 mt-2">
                <span class="visually-hidden">Percentage completed</span>
                <progress max="100" class="progress--inline" value="50">50%</progress>
              </label>
            </Card>
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Checked</span>
          <a href="/client-onbaording">
            <Card>
              Living room <span>1 check</span><span slot="badges" class="badge">Not started</span>
              <div slot="checkbox">
                <input type="checkbox" name="card14" id="card14" checked /><label for="card14" class="m-0"
                  >Select card</label
                >
              </div>
              <label class="hide-text mb-1 mt-2">
                <span class="visually-hidden">Percentage completed</span>
                <progress max="100" class="progress--inline" value="50">50%</progress>
              </label>
            </Card>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
