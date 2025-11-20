<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Card from '@/components/Card/Card.vue';
  import Integration from '../Integration.vue';

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Progress (Beta)</h1>
    </DSHeader>

    <div class="container">
      <h2>Horizontal Bar</h2>
      <h3>Default</h3>
      <p>The default version of the progress bar will show as a horizontal bar, with the label text aligned to the left, and the percentage amount aligned to the right.</p>

      <label data-percent="70">Missed opportunities<progress max="100" value="70"></progress></label>
    </div>

    <div class="container">
      <h3>Inline</h3>
      <p>When the inline class is added, the progress bar will leave room for the percentage value to sit to the right of it instead of above.</p>
      <label data-percent="100"
        ><span class="line-clamp"
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s.</span
        ><progress max="100" value="100" class="progress--inline"></progress
      ></label>
    </div>
    <div class="container">
      <h3>Inline with no text</h3>

      <label class="hide-text" data-percent="70"
        ><span class="visually-hidden">Missed opportunities</span
        ><progress max="100" value="70" class="progress--inline"></progress
      ></label>
    </div>

    <div class="container">
      <h2>Circular</h2>
      <p>The circular progress bar will display any copy added inside the label in the centre of the circle. If a data-percent attrbiute is added, this will be shown first.</p>

      <p class="note mb-5">
        <strong>Note:</strong> For the circular progress bar a CSS variable (<code>--progress</code>) needs to be
        supplied on the progress element.
      </p>

      <h3>Examples showing percentage text</h3>

      <p class="note mb-5">
        <strong>Note:</strong> A data-percent attribute is needed on the label for the value to display in firefox.
      </p>

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

      <h3>Example with alternative text</h3>
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



      <hr />


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

      <Integration component="progress" componentName="progress">
      <template #html-element>

        <pre><code>{{`<label data-percent="90">Lorem Ipsum is simply dummy
  <progress max="100" value="90" class="colour-success"></progress>
</label>`}}</code></pre>

<pre>
  <code>{{ `<label class="mb-2" data-percent="70">Missed
    <progress max="100" value="70" class="progress--circular" style="--progress: 70%"></progress>
  </label>` }}
  </code>
</pre>

      </template>

      <template #attr>
        <p>The max and value attributes are part of the HTML element and are not custom.</p>
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
              <th>max</th>
              <td>100</td>
              <td>number</td>
              <td>Yes</td>
              <td>This is the maximum possible value of the progress bar</td>
            </tr>
            <tr>
              <th>value</th>
              <td></td>
              <td>number</td>
              <td>Yes</td>
              <td>This is the current progress</td>
            </tr>
            <tr>
              <th>data-percent</th>
              <td></td>
              <td>number</td>
              <td>Yes</td>
              <td>This attribute should be added to the label element and set to the current progress percentage in order to show a text version of the percentage.</td>
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
              <th>progress--circular</th>
              <td>
                Adding the progress--circular class to the progress element makes the progress bar into a circle. This should be used in conjuction with a CSS variable set to the current percentage set on the progress element. e.g. style="--progress: 10%".
              </td>
            </tr>
            <tr>
              <th>progress--inline</th>
              <td>
                Adding the progress--inline class to the progress element positions the percentage amount of progress to the right of the bar, rather than above it.
              </td>
            </tr>
            <tr>
              <th>colour-{colour identifier}</th>
              <td>
                Adding a class such as colour-warning or colour-complete to the progress bar element will change the colour of the bar.
              </td>
            </tr>
          </tbody>
        </table>
      </template>

        <template #criteria>
        <ul>
          <li>A button should appear alongside the input field</li>
          <li>By default, the button should have the eye icon with a slash through it (or alternative icon set).</li>
          <li>By default, any text entered into the input should be obfuscated</li>
          <li>Clicking the button for the first time should show the text entered into the input.</li>
          <li>Clicking the button for the first time should change the icon.</li>
          <li>Clicking the button a second time, should revert the state to default.</li>

        </ul>
      </template>
    </Integration>

  </main>
</template>
