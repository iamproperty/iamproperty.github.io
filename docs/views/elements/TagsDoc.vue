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

    <h3>Display tags</h3>
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

    <h3>Toggle tags</h3>

    <p>
      Toggle tags can be turned on and off when selected by the user. Toggle tags are always present on the interface
      and are often used for filtering data on the page.
    </p>

    <figure class="mb-4">
      <img :src="ToggleTag" loading="lazy" alt="" class="mb-1" />
      <figcaption>Example of toggle tags</figcaption>
    </figure>

    <h3 class="pt-4">Display tag states</h3>

    <p>
      Display tags have 5 possible interactive states — default, hover, pressed, selected and disabled. The bolder
      selected state here is only used when a user needs to bulk edit or bulk remove a set of tags.
    </p>

    <div class="container visualtest">
      <button class="tag">Default (button)</button>
      <label class="tag"><input type="checkbox" name="tag" value="true" />Default (checkbox)</label>
      <button class="tag" disabled>Disabled (button)</button>
      <label class="tag"><input type="checkbox" name="tag" value="true" disabled />Disabled (checkbox)</label>
    </div>

    <p class="pt-5 label">Display tag states colour palette</p>
    <div class="container visualtest">
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
    </div>

    <p class="note mb-5">
      <strong>Note:</strong> To apply the wider colours to tags you need to add a class of
      <code>.wider-colour-3</code> to a parent element or each tag itself. This will apply the correct CSS variables for
      the tag elements to pick up
    </p>

    <h3>Toggle tag states</h3>

    <p>
      Toggle Tags have two core states — default and selected. Each of which then has three additional interaction
      states — hover, pressed and disabled.
    </p>
    <div class="container visualtest">
      <div class="row">
        <div class="col-3">
          <label class="tag tag--toggle"><input type="checkbox" name="tag" value="true" />unselected</label>
        </div>
        <div class="col-3">
          <label class="tag tag--toggle pe-none"
            ><input type="checkbox" name="tag" value="true" checked />Selected</label
          >
        </div>
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
      <strong class="text-danger">Don’t</strong><br />
      Use too many colours for tags within one UI. Typically only one color should be used for tags. Mulitples colors
      should only be used when the meaningful to the user.
    </p>

    <h2 class="">Implementation</h2>
    <p>
      The tag class can be added to a button or on a label with a checkbox inside. Given that a toggle tag has two
      states it makes sense to semantically use a checkbox. Display tags however are either visible or not and will
      require javascript to first display the tag with the tag itself being removed when clicked. So in that case it a
      button semanticallymakes sense.
    </p>
    <pre><code class="javascript">{{`<!-- Tag as a button -->
<button class="tag">Tag title</button>

<!-- Toggle tag as a checkbox -->
<label class="tag tag--toggle"><input type="checkbox" name="tag" value="true" checked/>Tag title</label>`}}</code></pre>

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

<script>
  import Tabs from '@/components/Tabs/Tabs.vue';
  import Tab from '@/components/Tabs/Tab.vue';
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import Anatomy from '../../img/tag-anatomy.png';
  import Table from '@/components/Table/Table.vue';
  import TagUsage from '../TagUsage.vue';
  import DisplayTag from '../../img/DisplayTag.png';
  import ToggleTag from '../../img/ToggleTag.png';
  import TagDont from '../../img/TagDont.png';

  export default {
    components: {
      DSHeader,
      Table,
      Tabs,
      Tab,
      TagUsage,
    },
    data() {
      return {
        headerImg: headerImg,
        Anatomy: Anatomy,
        DisplayTag: DisplayTag,
        ToggleTag: ToggleTag,
        TagDont: TagDont,
      };
    },
  };
</script>
