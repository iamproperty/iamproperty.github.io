<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Anatomy from '../../img/tag-anatomy.png';
  import TagUsage from '../TagUsage.vue';
  import DisplayTag from '../../img/DisplayTag.png';
  import ToggleTag from '../../img/ToggleTag.png';
  import TagDont from '../../img/TagDont.png';
  import ActionTagComplex from '../../img/action-tag-complex-options.png';
  import ActionTagText from '../../img/action-tag-text-list.png';
  import Integration from '../Integration.vue';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Tags</h1>
    </DSHeader>

    <p class="lead">Tags are small, interactive labels used to visually group, classify, or filter criteria.</p>

    <TagUsage></TagUsage>

    <h2 class="pt-3">Anatomy</h2>

    <img :src="Anatomy" loading="lazy" alt="" class="mb-4" />

    <ol class="mb-5">
      <li>Container</li>
      <li>Label</li>
      <li>Dismissable icon (optional)</li>
    </ol>

    <h2>Types</h2>

    <h3>Toggle tags</h3>

    <p>
      Toggle tags can be turned on and off when selected by the user. Toggle tags are always present on the interface
      and are often used for filtering data on the page.
    </p>

    <figure class="mb-4">
      <img :src="ToggleTag" loading="lazy" alt="" class="mb-1" width="548" />
      <figcaption class="mt-1">Example of active filters displayed using badges</figcaption>
    </figure>

    <h3 class="mt-4">Toggle tag states</h3>

    <p>
      Toggle Tags have unique interactions based around two core states — default and selected. Clicking a default state
      tag switches to a selected state, and vice versa. Each state then has three additional interaction states — hover,
      pressed and disabled.
    </p>

    <div class="container visualtest">
      <div class="d-flex gap-4 flex-wrap">
        <label class="tag tag--toggle"><input type="checkbox" name="tag" value="true" />Default</label>
        <label class="tag tag--toggle pe-none"><input type="checkbox" name="tag" value="true" checked />Selected</label>
        <label class="tag tag--toggle pe-none"
          ><input type="checkbox" name="tag" value="true" disabled />Disabled</label
        >
      </div>
    </div>

    <h3 class="mt-4">Display tags</h3>
    <p>
      Display tags are used to display quick and useful category labels to the user. They are often used to display
      categories or active filters. The dismissible property allows for any tag to be actively removed by the user and
      is often seen in Filtering. If a user can remove or dismiss a badge, the application should provide a way for them
      to easily add it back.
    </p>

    <figure class="mb-4">
      <img :src="DisplayTag" loading="lazy" alt="" class="mb-1" />
      <figcaption>Example of active filters displayed using tags</figcaption>
    </figure>

    <h3 class="pt-4">Display tag states</h3>

    <p>
      Display tags have 5 possible interactive states — default, hover, pressed, selected and disabled. The bolder
      selected state here is only used when a user needs to bulk edit or bulk remove a set of tags.
    </p>
    <p>
      A filter overlay of 95% brightness will be applied to the default state for the hover state, 90% brightness
      applied to the default states for the pressed state, and 85% brightness applied to the default states for the
      pressed hover state.
    </p>

    <div class="container visualtest d-flex gap-2 flex-wrap">
      <button class="tag">Default (button)</button>
      <label class="tag"><input type="checkbox" name="tag" value="true" />Default (checkbox)</label>
      <button class="tag" disabled>Disabled (button)</button>
      <label class="tag"><input type="checkbox" name="tag" value="true" disabled />Disabled (checkbox)</label>
    </div>

    <h3 class="mt-4">Display tag colour palette</h3>
    <p>Display tags can use any colour from the wider colour palette.</p>
    <div class="container visualtest">
      <details>
        <summary>Colour Reference</summary>
        <div class="row row-cols-2 row-cols-sm-4 d-none d-sm-flex">
          <div class="col pb-2"></div>
          <div class="col pb-2">
            <span class="label">Default state</span>
          </div>
          <div class="col pb-2">
            <span class="label">Hover state</span>
          </div>
          <div class="col pb-2">
            <span class="label">Active state</span>
          </div>
        </div>

        <div class="row row-cols-3 row-cols-sm-4" v-for="(colour, name) in $shared.widerColours" :key="name">
          <div class="col-12 col-sm pb-2">
            <span>Wider colour {{ name }}</span>
          </div>
          <div class="col-12 col-sm pb-2">
            <div :class="`tag wider-colour-${name}`">{{ colour }}</div>
          </div>
          <div class="col-12 col-sm pb-2">
            <div :class="`tag wider-colour-${name} hover`">{{ $shared.widerColoursHover[name] }}</div>
          </div>
          <div class="col-12 col-sm pb-2">
            <div :class="`tag wider-colour-${name} active`">
              {{ $shared.widerColoursActive[name] }}
            </div>
          </div>
        </div>
      </details>
    </div>

    <p class="note mb-5">
      <strong>Note:</strong> To apply the wider colours to tags you need to add a class of
      <code>.wider-colour-3</code> to a parent element or each tag itself. This will apply the correct CSS variables for
      the tag elements to pick up
    </p>

    <h3>Action Tags</h3>
    <p>
      An action tag allows users to access configuration options by triggering a menu or modal when clicked or tapped.
      The tag label dynamically updates to reflect the selected option, providing a clear visual cue of the current
      setting.
    </p>

    <div class="row">
      <figure class="col-6">
        <img :src="ActionTagText" loading="lazy" alt="" class="mb-1" />
        <figcaption class="text-center">Example of options presented using the text list component</figcaption>
      </figure>
      <figure class="col-6">
        <img :src="ActionTagComplex" loading="lazy" alt="" class="mb-1" />
        <figcaption class="text-center">Example of more complex options presented in a modal</figcaption>
      </figure>
    </div>

    <h3 class="mt-4">Action Tag Display</h3>
    <p>
      Action tags use colour palette variants of the display tag along with an icon relevant to the intent of the click
      or press action.
    </p>

    <div class="d-flex gap-4 flex-wrap">
      <button class="tag wider-colour-3">Available<i class="fa-light fa-pen-to-square ml-1"></i></button>
      <button class="tag wider-colour-4">Available<i class="fa-light fa-pen-to-square ml-1"></i></button>
      <button class="tag wider-colour-20">Available<i class="fa-light fa-pen-to-square ml-1"></i></button>
    </div>

    <h3 class="mt-4">Action tag states</h3>

    <p>
      Action tags use the same interactive states as display tags - default, hover, pressed, pressed hover, and
      disabled, with the same increments of -5% brightness applied to each state.
    </p>

    <div class="container visualtest">
      <div class="d-flex gap-4 flex-wrap">
        <button class="tag wider-colour-3">Default (button)<i class="fa-light fa-pen-to-square ml-1"></i></button>
        <button class="tag wider-colour-3" disabled>
          Disabled (button)<i class="fa-light fa-pen-to-square ml-1"></i>
        </button>
      </div>
    </div>

    <h2 class="pt-5">Usage</h2>
    <ul>
      <li>Keep labels short to avoid wrapping.</li>
      <li>Do not overload an interface with tags as they will become less meaningful and more easily scanned over.</li>
    </ul>

    <figure class="mb-2">
      <img :src="TagDont" loading="lazy" alt="" />
    </figure>
    <p class="mb-5">
      <strong class="text-danger">Don't</strong><br />
      Use too many colours for tags within one UI. Typically only one color should be used for tags. Mulitples colors
      should only be used when the meaningful to the user.
    </p>

    <Integration component="tag" componentName="tag">
      <template #html-element>
        <p>
          The tag class can be added to a button or on a label with a checkbox inside. Given that a toggle tag has two
          states it makes sense to semantically use a checkbox. Display tags however are either visible or not and will
          require javascript to first display the tag with the tag itself being removed when clicked. So in that case it
          a button semanticallymakes sense.
        </p>

        <pre><code>{{`<!-- Tag as a button -->
<button class="tag">Tag title</button>`}}</code></pre>

        <pre><code>{{`<!-- Toggle tag as a checkbox -->
<label class="tag tag--toggle"><input type="checkbox" name="tag" value="true" checked/>Tag title</label>`}}</code></pre>

        <pre><code>{{`<!-- Action tag as button -->
<button class="tag wider-colour-20">Available<i class="fa-light fa-pen-to-square ml-1" aria-hidden="true"></i></button>`}}</code></pre>
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
              <th>wider-colour-x</th>
              <td>
                Adding a class of wider-colour-x, the last character being the nidentifier for the colour, will add a
                coloured background to the tag.
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </Integration>

    <div class="mt-5 bg-light version-control">
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
              <td>08.03.2024</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/badges-tags.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>
