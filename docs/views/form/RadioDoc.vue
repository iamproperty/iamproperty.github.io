<script setup>
  import DSHeader from '../DSHeader.vue';
  import SelectionControl from '../selectionControls.vue';
  import headerImg from '../../img/type-header.png';
  import Input from '@/components/Input/Input.vue';
  import Readme from '@/components/Input/README.md';
  import Tabs from '@/components/Tabs/Tabs.vue';
  import FilterCard from '@/components/FilterCard/FilterCard.vue';

  
  const message = 'input field value';
  const htmlUsage = `...`;

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Form radio fields</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">
        Radio buttons allow the user to select one option from a set. Use radio buttons when the user needs to see all
        available options. If available options can be collapsed, consider using a dropdown menu because it uses less
        space.
      </p>
    </div>

    <SelectionControl></SelectionControl>

    <div class="container pb-0">
      <h2>Standard radio button</h2>
      <p>
        Standard radio buttons feature a button alongside a label. The label should clearly explain the option that can
        be selected. The button should sit in a container of 2.5rem (40px) with 0.5rem (8px) of padding between the
        button and the label.
      </p>
    </div>

    <div class="container visualtest">
      <div class="row pe-none">
        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Unselected</h3>
          <input type="radio" name="radio1" id="radio1" />
          <label for="radio1">Radio button copy</label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Selected</h3>
          <input type="radio" name="radio2" id="radio2" checked />
          <label for="radio2">Radio button copy </label>
        </div>

        <hr />

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Hover/focus unselected</h3>
          <input type="radio" name="radio3" id="radio3" class="focus" />
          <label for="radio3">Radio button copy </label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Hover/focus Selected</h3>
          <input type="radio" name="radio4" id="radio4" class="focus" checked />
          <label for="radio4">Radio button copy </label>
        </div>

        <hr />

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Pressed unselected</h3>
          <input type="radio" name="radio5" id="radio5" class="active" />
          <label for="radio5">Radio button copy </label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Pressed Selected</h3>
          <input type="radio" name="radio6" id="radio6" class="active" checked />
          <label for="radio6">Radio button copy </label>
        </div>
      </div>
    </div>

    <div class="container pb-0">
      <h2>Card radio button</h2>
      <p>
        Card radio buttons feature similar styling to the ‘text and icon filter card’ on the cards style guide. The
        radio button provides user with an optional visual aid (icon) as well as a text label to ensure the user gains a
        quicker understanding of the radio button selection. This radio button can also apply a drop shadow with a
        default colour of HEX #000000, 6px Y-axis and 12px blur with an opacity of 15%.
      </p>
    </div>

    <div class="container visualtest">
      <div class="row">
        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Unselected</h3>
          <input type="radio" name="radiocard1" id="radiocard1" tabindex="-1" />
          <label for="radiocard1"
            ><FilterCard class="card--filter w-auto"><i class="fa fa-house"></i>Character property</FilterCard></label
          >
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Selected</h3>
          <input type="radio" name="radiocard2" id="radiocard2" tabindex="-1" checked />
          <label for="radiocard2"
            ><FilterCard class="card--filter w-auto"><i class="fa fa-house"></i>Character property</FilterCard></label
          >
        </div>

        <hr />

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Hover/focus unselected</h3>
          <input type="radio" name="radiocard3" id="radiocard3" tabindex="-1" class="focus" />
          <label for="radiocard3"
            ><FilterCard class="card--filter w-auto hover"
              ><i class="fa fa-house"></i>Character property</FilterCard
            ></label
          >
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Hover/focus Selected</h3>
          <input type="radio" name="radiocard4" id="radiocard4" tabindex="-1" class="focus" checked />
          <label for="radiocard4"
            ><FilterCard class="card--filter w-auto hover"
              ><i class="fa fa-house"></i>Character property</FilterCard
            ></label
          >
        </div>

        <hr />

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Pressed unselected</h3>
          <input type="radio" name="radiocard5" id="radiocard5" tabindex="-1" class="active" />
          <label for="radiocard5"
            ><FilterCard class="card--filter w-auto active"
              ><i class="fa fa-house"></i>Character property</FilterCard
            ></label
          >
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Pressed Selected</h3>
          <input type="radio" name="radiocrad6" id="radiocrad6" tabindex="-1" class="active" checked />
          <label for="radiocrad6"
            ><FilterCard class="card--filter w-auto active"
              ><i class="fa fa-house"></i>Character property</FilterCard
            ></label
          >
        </div>
      </div>
    </div>

    <div class="container pb-0">
      <h2>Reveal of content radio button</h2>
      <p>
        These are best used at the beginning of a section of the form to determine which type of fields are presented to
        the user.
      </p>
      <p>
        For example, we might use this type of radio button for the options ‘Existing Property’ and ’New Property’ then
        show the relevant fields below once the option has been selected.
      </p>
      <p>Both card and standard radio buttons can be used to reveal content.</p>
    </div>

    <div class="container pb-0">
      <h3 class="h6">Card</h3>
    </div>

    <div class="container visualtest">
      <input type="radio" name="radiocontent" id="radiocontent" tabindex="-1" />
      <input type="radio" name="radiocontent" id="radiocontent2" tabindex="-1" />
      <div class="row">
        <div class="col-6 col-sm-4 col-md-3">
          <label for="radiocontent"
            ><FilterCard class="card--filter"><i class="fa fa-light fa-house"></i>Character property</FilterCard></label
          >
        </div>
        <div class="col-6 col-sm-4 col-md-3">
          <label for="radiocontent2"
            ><FilterCard class="card--filter"
              ><i class="fa-kit fa-light-house-circle-plus"></i>Character property</FilterCard
            ></label
          >
        </div>
      </div>
      <div class="conditional conditional-1 pt-3">
        <p>Conditional content 1</p>
      </div>
      <div class="conditional conditional-2 pt-3">
        <p>Conditional content 2</p>
      </div>
    </div>

    <div class="container pb-0">
      <h3 class="h6">Standard</h3>
    </div>

    <div class="container visualtest">
      <input type="radio" name="radiocontent2" id="radiocontent3" tabindex="-1" />
      <label for="radiocontent3" class="d-inline-block">Use same address</label>

      <input type="radio" name="radiocontent2" id="radiocontent4" tabindex="-1" />
      <label for="radiocontent4" class="d-inline-block">Use another address</label>

      <hr />
      <div class="conditional conditional-1 pt-3">
        <p>Conditional content 1</p>
      </div>
      <div class="conditional conditional-2 pt-3">
        <p>Conditional content 2</p>
      </div>
    </div>

    <div class="container pt-4 pb-0">
      <h2>Disabled radio buttons</h2>
    </div>

    <div class="container pb-0">
      <h3 class="h6">Standard</h3>
    </div>
    <div class="container visualtest">
      <div class="row">
        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Unselected</h3>
          <input type="radio" name="radio10" id="radio10" disabled />
          <label for="radio10">Radio button copy</label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Selected</h3>
          <input type="radio" name="radio20" id="radio20" checked disabled />
          <label for="radio20">Radio button copy </label>
        </div>

        <hr />

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Hover/focus unselected</h3>
          <input type="radio" name="radio30" id="radio30" class="focus" disabled />
          <label for="radio30">Radio button copy </label>
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Hover/focus Selected</h3>
          <input type="radio" name="radio40" id="radio40" class="focus" checked disabled />
          <label for="radio40">Radio button copy </label>
        </div>
      </div>
    </div>

    <div class="container pb-0">
      <h3 class="h6">Card</h3>
    </div>
    <div class="container visualtest">
      <div class="row">
        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Unselected</h3>
          <input type="radio" name="radio100" id="radio100" disabled />
          <label for="radio100"
            ><FilterCard class="card--filter"><i class="fa fa-light fa-house"></i>Character property</FilterCard></label
          >
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Selected</h3>
          <input type="radio" name="radio200" id="radio200" checked disabled />
          <label for="radio200"
            ><FilterCard class="card--filter"><i class="fa fa-light fa-house"></i>Character property</FilterCard></label
          >
        </div>

        <hr />

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Hover/focus unselected</h3>
          <input type="radio" name="radio30" id="radio300" class="focus" disabled />
          <label for="radio300"
            ><FilterCard class="card--filter"><i class="fa fa-light fa-house"></i>Character property</FilterCard></label
          >
        </div>

        <div class="col-6 col-md-4 pb-3">
          <h3 class="lead text-uppercase text-body pb-2">Disabled Hover/focus Selected</h3>
          <input type="radio" name="radio400" id="radio400" class="focus" checked disabled />
          <label for="radio400"
            ><FilterCard class="card--filter"><i class="fa fa-light fa-house"></i>Character property</FilterCard></label
          >
        </div>
      </div>
    </div>

    <div class="container">
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h2>HTML</h2></summary>

          <pre><code class="html">{{`<input type="radio" id="radio" name="radio"  />
<label for="radio">Input field label</label>`}}</code></pre>
        </details>
        <details>
          <summary><h2>Vue component</h2></summary>
          <p class="pb-3">
            The radio input field uses the same Vue component as the input field, the type just needs to be set to
            'radio'. The name attribute is required for the radio input field, this attribute should match other radio
            input fields in a radio button group.
          </p>
          <Readme></Readme>
        </details>
      </Tabs>
    </div>

    <div class="bg-light version-control">
      <div class="container">
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
              <td>13.07.2023</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/radio-buttons.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>

