<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Tabs from '../../../src/components/Tabs/Tabs.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg">
      <h1>Dynamic events</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">JSON-driven events to help build modern user interfaces.</p>

      <p>
        The dynamic events framework's objective is to enhance the functionality of elements that are typically
        implemented through custom JavaScript files. By consolidating these common events into a central file, it
        becomes easier to maintain and minimizes redundancy.
      </p>

      <p>
        Events within the framework are designed for simplicity and reusability. Multiple events can be seamlessly
        combined to perform various functions simultaneously. Common use cases involve manipulating the visibility of
        elements on a page.
      </p>

      <p>
        These events are associated with the triggering element through a data attribute containing valid JSON. This
        JSON essentially acts as a set of instructions that dictate when and how the event should be triggered based on
        specific conditions.
      </p>

      <pre><code>{{ `<label for="input11">Search property sales address</label>
<input type="text" id="input11" name="input11" placeholder="Optional placheolder text" required="" list="addresses" 
data-change-events='[
  {"in-list":"#addresses", "target":"#property-details", "if": "show", "else": "hide"},
  {"in-list":"#addresses", "target":"#form", "if": "populate-form"}
]' />` }}</code></pre>

      <h2 class="pt-3">Getting started</h2>

      <p>
        The installation of the JS module is very simple, its a simple import and launching an event after the page has
        loaded.
      </p>

      <pre><code>import createDynamicEvents from '../assets/ts/modules/dynamicEvents'

document.addEventListener("DOMContentLoaded", function() {
  createDynamicEvents();
});</code></pre>

      <h2 class="pt-3">Create the event handlers</h2>

      <p>Different event handlers are created to allow for the events to be triggered in different ways.</p>

      <div class="row">
        <div class="col-md-6">
          <table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Triggered by</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>[data-change-events]</td>
                <td>change, keyup</td>
              </tr>
              <tr>
                <td>[data-click-events]</td>
                <td>click</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="pt-3">Functions</h2>

      <h3>Read the events</h3>

      <p>
        Once the the event handler has been triggered the JSON is passed to a function that will loop through it and
        pass each event to be evaluated.
      </p>

      <h3>Check the conditions</h3>

      <p>
        Each event is evaluated depending upon the given evaluation property, if it passes typically the function in the
        'if' property will be ran.
      </p>

      <div class="row">
        <div class="col-md-8">
          <table>
            <thead>
              <tr>
                <th>Evaluation Property</th>
                <th>How its evaluated</th>
                <th>Conditional properties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>matches</td>
                <td>Elements value matches the value of the property</td>
                <td>'if','else'</td>
              </tr>
              <tr>
                <td>in-list</td>
                <td>
                  The elements value matches the value of an item in the datalist (the properties value should be a
                  selector of a datalist)
                </td>
                <td>'if','else'</td>
              </tr>
              <tr>
                <td>event</td>
                <td>No evaluation is done and the event passed in this property will be ran.</td>
                <td>n/a</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>Run the event</h3>

      <p>
        The event passed through the coniditional property will trigger on the element that matches the target
        properties selector.
      </p>

      <div class="row">
        <div class="col-md-12 overflow-auto">
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Required properties</th>
                <th>What it does</th>
                <th>Dispatches event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hide</td>
                <td>target</td>
                <td>Hides the target element by adding the js-hide class.</td>
                <td></td>
              </tr>
              <tr>
                <td>show</td>
                <td>target</td>
                <td>Shows the target element by removing the js-hide class.</td>
                <td></td>
              </tr>
              <tr>
                <td>populate-form</td>
                <td>target</td>
                <td>This triggers the bespoke function 'populate-form' on the target element.</td>
                <td></td>
              </tr>
              <tr>
                <td>setAttribute</td>
                <td>target, attribute, value</td>
                <td>
                  Sets the attribute passed in the attribute property of the target element to the value of the value
                  property.
                </td>
                <td></td>
              </tr>
              <tr>
                <td>removeAttribute</td>
                <td>target, attribute, value</td>
                <td>Removes the attribute passed in the attribute property of the target element.</td>
                <td></td>
              </tr>
              <tr>
                <td>updateValue</td>
                <td>target, value</td>
                <td>Sets the elements value to the value of the value property.</td>
                <td>Change event</td>
              </tr>
              <tr>
                <td>dispatchDvent</td>
                <td>target, value</td>
                <td>Dispatches an event on the element</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="pt-5">Bespoke functions</h2>
      <h3>Populate a form</h3>

      <p>
        To utilize this function, the element must possess a data-values attribute containing valid JSON. Subsequently,
        the JSON data will be iterated through, and the corresponding properties will populate the specified form
        values.
      </p>
    </div>
  </main>
</template>
