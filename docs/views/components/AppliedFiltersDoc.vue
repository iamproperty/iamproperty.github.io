<script setup>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Readme from '@/components/AppliedFilters/README.md';
  import WebReadme from '~/ts/components/applied-filters/README.md';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue';

  import InputRange from '@/components/InputRange/InputRange.vue';
  import Input from '@/components/Input/Input.vue';

  const htmlUsage = `<div class="applied-filters "><button type="button" class="filter" data-name="test1">Option 1</button></div>`;

  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';


  import { appliedfilters as events } from '../../events.js';
  import CaseActivities from '../../views/standalone/pc/components/CaseActivities.vue'

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Applied Filters</h1>
    </DSHeader>

    <p class="lead">The applied filters are designed to create a quick visual of which filters have been set and a way to quickly modify them.</p>
    
    <h2>Basic</h2>

    <p>The component needs to be wrapped around the filter inputs so that the component can detect the input changes. To add an input to the applied filters an attribute of data-filter-text needs to be supplied so that the JavaScript knows to listen for the value to change. This attribute can also be used on a wrapper for mulitple input filters also and dynamic values can also be given. $value passes the inputs value as the filter text and $1,$2,$3… will pass the corresponding child input value to the text.</p>


    <hr/>
    <div class="md-col-span-6 mb-3 visualtest">
      <h3>Blank</h3>
      <div class=" p-3 bg-light">
        <AppliedFilters>
        
      <fieldset>
          <label >Option 1
            <input
              type="radio"
              name="filter1"
              value="Option 1"
              data-filter-text="$value"
            />
          </label>
          <label>Option 2
            <input
              type="radio"
              name="filter1"
              value="Option 2"
              data-filter-text="$value"
            />
          </label>
        </fieldset>
      </AppliedFilters>
        </div>
    </div>

    <div class="md-col-span-6 md-col-start-auto mb-3 visualtest">
      <h3>Pre-set</h3>
      <div class=" p-3 bg-light">

      <AppliedFilters>
            
        <fieldset>

          <label >Option 1
            <input
              type="radio"
              name="filter2"
              value="Option 1"
              data-filter-text="$value"
              checked="checked"
            />
          </label>
          <label>Option 2
            <input
              type="radio"
              name="filter2"
              value="Option 2"
              data-filter-text="$value"
            />
          </label>
        </fieldset>
      </AppliedFilters>
      </div>
    </div>


    <h2>Filter types</h2>

    <hr/>
    <div class="md-col-span-6 md-col-start-auto mb-3 visualtest">
      
      
      <div class=" p-3 bg-light">

      <AppliedFilters>
      
        <fieldset>
        <label>
          <input type="checkbox" value="Filter" name="filter" data-filter-text="$value" checked />
          A Filter 
        </label>
        <label>
          <input type="checkbox" value="Second Filter" name="filter2" data-filter-text="$value" />
          Second Filter 
        </label>
        </fieldset>
      </AppliedFilters>
      </div>
    </div>


    <div class="md-col-span-6 md-col-start-auto mb-3 visualtest">
      
      
      <div class=" p-3 bg-light">

      <AppliedFilters>
      
        <label>
          Filter 
          <input type="text" value="Filter" name="filter3" data-filter-text="Filter term: $value" />
        </label>
        
      </AppliedFilters>
      </div>
    </div>

    <hr/>
    <div class="md-col-span-6 md-col-start-auto mb-3 visualtest">
      
      
      <div class=" p-3 bg-light">

      <AppliedFilters>
        
        <fieldset class="form-control__wrapper" data-filter-text="Date between: $1 - $2">
          
          <label class="form-label" for="date-from">Date range</label>
          <InputRange>
            <label>
              <Input><input type="date" name="date-from" data-filter-text="Date from - $value" value="2025-12-10" /></Input>
            </label>
            <label>
            <Input><input type="date" name="date-to" data-filter-text="Date to - $value" value="2025-12-12" /></Input>
            </label>
          </InputRange>
        </fieldset>
      </AppliedFilters>
      </div>
    </div>




    <h2 class="mt-5">Combined with table and filters mondal</h2>
    <p>When the applied filters is inside a dialog the filters wont be set straight away and is only set when the primary button is clicked.</p>
    <CaseActivities></CaseActivities>


     

<Integration component="appliedFilters" componentName="iam-applied-filters">
      <template #web-component>
        <pre><code>{{`<iam-applied-filters>
        
<fieldset>
    <label >Option 1
      <input
        type="radio"
        name="filter1"
        value="Option 1"
        data-filter-text="$value"
      />
    </label>
    <label>Option 2
      <input
        type="radio"
        name="filter1"
        value="Option 2"
        data-filter-text="$value"
      />
    </label>
  </fieldset>
</iam-applied-filters>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue</script>
        
<AppliedFilters>
        
<fieldset>
    <label >Option 1
      <input
        type="radio"
        name="filter1"
        value="Option 1"
        data-filter-text="$value"
      />
    </label>
    <label>Option 2
      <input
        type="radio"
        name="filter1"
        value="Option 2"
        data-filter-text="$value"
      />
    </label>
  </fieldset>
</AppliedFilters>`}}</code></pre>
      </template>


      <template #dispatched-events>
        <span v-html="events"></span>
      </template>

      <template #criteria>
        <ul>
          <li>A filter button is created when an input field is changed</li>
          <li>When the filter button is clicked the input field is changed</li>
          <li>The filter button is not marked as set when inside a dialog straight away</li>
          <li>The primary button inside of the dialog sets the filters when clicked</li>
        </ul>
      </template>
      <template #data-layer>
        <span v-html="events"></span>
      </template>
    </Integration>



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
              <td>V0.1 added</td>
              <td>30.05.2023</td>
              <td>Design not supplied yet</td>
            </tr>
          </tbody>
        </table>
        <!--<a href="/pdfs/tables.pdf" download>Download latest designs</a>-->
      </div>
    </div>
  </main>
</template>
