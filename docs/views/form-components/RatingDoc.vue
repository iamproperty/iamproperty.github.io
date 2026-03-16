<script setup>
  import TrackEvents from '../TrackEvents.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Integration from '../Integration.vue';
  import Rating from '@/components/Rating/Rating.vue';

</script>

<template>
  <TrackEvents selector="iam-rating" :events="['update-show']"></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Rating (Beta)</h1>
    </DSHeader>

 
    <p class="lead">This component transforms a basic range or number input field into an interactable star rating input.</p>
    <p>The field can be configured by changing the minimum and maximum values along with the step amount. The step amount should be no more than one but could a fractional amount i.e. setting it to 0.5 sould enable half star amounts.</p>
    <div class="visualtest">
      <label>Optional label
        <Rating><input type="number" name="stars" /></Rating>
      </label>
    </div>
    <h2 class="pt-4">Star amount</h2>
    <div class="visualtest">
      <label class="md-col-span-4">3 stars
        <Rating><input type="number" name="stars" max="3" /></Rating>
      </label>
      <label class="md-col-span-8 md-col-start-auto">10 stars
        <Rating><input type="number" name="stars" max="10" value="4" min="2" step="0.5" /></Rating>
      </label>
    </div>
    <h2 class="pt-4">Sizes</h2>
    <div class="visualtest">
      <label class="md-col-span-6">.rating--sm
        <Rating class="rating--md"><input type="number" name="stars" /></Rating>
      </label>
      <label class="md-col-span-6 md-col-start-auto">.rating--lg
        <Rating class="rating--lg"><input type="number" name="stars" /></Rating>
      </label>
    </div>

    <h2 class="pt-4">Change the SVG</h2>

    <p>By default the SVG used is a star, but can be updated by providing a set of two SVG's; one for the fill and one for the outline.</p>
    <div class="visualtest mb-5">
      <label>Lives
        <Rating class="colour-danger" style="--mask: url(&quot;data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath d='M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z'/%3E%3C/svg%3E&quot;); --outline: url(&quot;data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath d='M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z'/%3E%3C/svg%3E&quot;);"><input type="number" name="stars" max="3" value="3" /></Rating>
      </label>
    </div>

    <Integration component="rating" componentName="rating">
      <template #web-component>
        <pre><code>{{`<iam-rating class="wider-colour-5"><input type="number" name="stars" min="2" max="8"/></iam-rating>`}}</code></pre>
      </template>
      <template #vue-component>
        <pre><code>{{`<script setup>import Rating from '@/components/Rating/Rating.vue</script>
        
<Rating class="wider-colour-5"><input type="number" name="stars" min="2" max="8"/></Rating>
`}}</code></pre>
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
              <th>min</th>
              <td>0</td>
              <td>Number</td>
              <td>No</td>
              <td>Added to the input field</td>
            </tr>
            <tr>
              <th>max</th>
              <td>5</td>
              <td>Number</td>
              <td>No</td>
              <td>Added to the input field</td>
            </tr>
            <tr>
              <th>step</th>
              <td>1</td>
              <td>Number</td>
              <td>No</td>
              <td>Added to the input field</td>
            </tr>
            <tr>
              <th>disabled</th>
              <td></td>
              <td>Flag</td>
              <td>No</td>
              <td>Added to the input field</td>
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
              <th>.rating--sm</th>
              <td>Reduces the size of the rating field</td>
            </tr>
            <tr>
              <th>.rating--lg</th>
              <td>Increases the size of the rating field</td>
            </tr>
            <tr>
              <th>.colour-{i}</th>
              <td>Changes the colour of the rating field</td>
            </tr>
            <tr>
              <th>.wider-colour-{i}</th>
              <td>Changes the colour of the rating field</td>
            </tr>
          </tbody>
        </table>
      </template>

      
      <template #vars>
        <table>
          <thead>
            <tr>
              <th>Var</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>--mask</th>
              <td>Override the default star SVG</td>
            </tr>
            <tr>
              <th>--outline</th>
              <td>Override the default star outline SVG</td>
            </tr>
          </tbody>
        </table>
      </template>

    </Integration>
  </main>
</template>
