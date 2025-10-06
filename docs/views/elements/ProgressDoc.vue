<script setup>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Tab from '@/components/Tabs/Tab.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Table from '@/components/Table/Table.vue';
  import Card from '@/components/Card/Card.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Progress (Beta)</h1>
    </DSHeader>

    <div class="container">
      <h2>Default</h2>

      <label data-percent="70">Missed opportunities<progress max="100" value="70"></progress></label>
    </div>
    <div class="container">
      <h2>Rank</h2>

      <label data-percent="70"
        ><strong>120</strong> Properties<progress
          max="100"
          value="70"
          class="progress--circular"
          style="--progress: 70%"
        ></progress
      ></label>
    </div>

    <div class="container">
      <h2>Circular</h2>

      <label data-percent="70"
        >Missed<progress max="100" value="70" class="progress--circular" style="--progress: 70%"></progress
      ></label>

      <label data-percent="70"
        >Lose rate
        <progress
          max="100"
          value="70"
          class="progress--circular progress--md colour-danger"
          style="--progress: 70%"
        ></progress
      ></label>

      <label data-percent="10"
        >Lose rate
        <progress
          max="100"
          value="10"
          class="progress--circular progress--sm colour-warning"
          style="--progress: 10%"
        ></progress
      ></label>

      <hr />

      <p class="note mb-5">
        <strong>Note:</strong> For the circular progress bar a CSS variable (<code>--progress</code>) needs to be
        supplied on the progress element.
      </p>

      <p class="note mb-5">
        <strong>Note:</strong> A data-percent attribute is needed on the label for the value to display in firefox.
      </p>

      <div class="row">
        <div class="col-md-4 text-center">
          <label class="mb-2" data-percent="70"
            >Missed<progress max="100" value="70" class="progress--circular" style="--progress: 70%"></progress
          ></label>
          <span class="label"><i class="fa-solid fa-circle-up text-complete"></i> 4% vs previous 30 days</span>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Inline</h2>

      <label data-percent="100"
        ><span class="line-clamp"
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s.</span
        ><progress max="100" value="100" class="progress--inline"></progress
      ></label>
    </div>
    <div class="container">
      <h2>Inline with no text</h2>

      <label class="hide-text" data-percent="70"
        ><span class="visually-hidden">Missed opportunities</span
        ><progress max="100" value="70" class="progress--inline"></progress
      ></label>
    </div>
    <div class="container">
      <h2>Change colours</h2>

      <label data-percent="10"
        >Lorem Ipsum is simply dummy<progress max="100" value="10" class="colour-danger"></progress
      ></label>

      <label data-percent="60"
        >Lorem Ipsum is simply dummy<progress max="100" value="60" class="colour-warning"></progress
      ></label>

      <label data-percent="90"
        >Lorem Ipsum is simply dummy<progress max="100" value="90" class="colour-success"></progress
      ></label>

      <label data-percent="100"
        >Lorem Ipsum is simply dummy<progress max="100" value="100" class="colour-complete"></progress
      ></label>
    </div>
    <div class="container">
      <h2>Add a tooltip</h2>

      <div class="mw-content">
        <div class="row">
          <div class="col flex-shrink-0">
            <label data-percent="100"
              >Lorem Ipsum is simply dummy<progress max="100" value="100" class="colour-complete"></progress
            ></label>
          </div>
          <div class="col flex-grow-0">
            <span class="tooltip" tabindex="0"
              ><span class="tooltip__content"
                ><strong>Popover title</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                incididunt ut labore et dolore magna aliqua.</span
              ></span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Card examples</h2>

      <div class="row">
        <div class="col-md-4">
          <a href="http://bbc.co.uk">
            <Card>
              Material Information <span class="badge bg-warning" slot="badges">In progress</span>

              <label class="mt-3 mb-0 me-1" slot="footer" data-percent="35"
                ><span class="line-clamp">12 May st, Gosforth, Newcastle upon Tyne, NE3 5DB</span
                ><progress max="100" value="35" class="progress--inline"></progress
              ></label>
            </Card>
          </a>
        </div>
        <div class="col-md-4">
          <a href="http://bbc.co.uk" target="_blank">
            <Card>
              Material Information<span class="badge border border-2" slot="badges">Not started</span>

              <span class="pb-0 text-body" slot="footer"
                ><span class="line-clamp">12 May st, Gosforth, Newcastle upon Tyne, NE3 5DB</span></span
              >
              <span class="pt-0" slot="footer">Completed 7 Aug 2023</span>
            </Card>
          </a>
        </div>
        <div class="col-md-4">
          <a href="http://bbc.co.uk" target="_blank">
            <Card data-cta="Read more"> Material Information </Card>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
