<script setup lang="ts">
  import Integration from '../Integration.vue';
  import Form from '@/components/Form/Form.vue';
  import Versions from '../Versions.vue';
  import TrackEvents from '../TrackEvents.vue';
</script>
<template>
  <TrackEvents selector="iam-form" :events="['checkbox-limit-reached']"></TrackEvents>
  <main>
    <DSHeader :image="headerImg" section="components">
      <h1>Form component</h1>
    </DSHeader>

    <p class="lead">This component is a place to house interactive features and functionality.</p>

    <h2 class="pt-5">Limit the number of checkboxes</h2>
    <p>
      Below we have a series of checkboxes which we want to limit to only having 2 selected; so once the user has
      checked 2 values the other checkboxes become disabled.
    </p>
    <Form id="checkboxes">
      <form>
        <fieldset data-checkbox-limit="2">
          <label><input type="checkbox" name="test" value="1" /> Value 1</label>
          <label><input type="checkbox" name="test" value="2" /> Value 2</label>
          <label><input type="checkbox" name="test" value="3" /> Value 3</label>
          <label><input type="checkbox" name="test" value="4" /> Value 4</label>
        </fieldset>
      </form>
    </Form>

    <Integration component="form" componentName="iam-form">
      <template #web-component>
        <pre><code>{{`<iam-form></iam-form>`}}</code></pre>
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
              <th>data-checkbox-limit</th>
              <td>-</td>
              <td>Integer</td>
              <td>No</td>
              <td>Set the number of checkboxes that are allowed to be checked.</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #dispatched-events>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dispatched</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>checkbox-limit-reached</th>
              <td>When a user has selected the max limited number of checkboxes</td>
              <td>{ detail: {event: 'checkbox-limit-reached', limit: i, element: '#test'} }</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #data-layer>
        <span v-html="events"></span>
      </template>
    </Integration>

    <Versions>
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
            <td>08.06.2026</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>

<script lang="ts">
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  import anatomy from '../../img/file-upload-anatomy.png';

  import Input from '@/components/Input/Input.vue';
  import FileUpload from '@/components/FileUpload/FileUpload.vue';

  export default {
    components: {
      DSHeader,
      Input,
      FileUpload,
    },
    data() {
      return {
        headerImg: headerImg,
        anatomy: anatomy,
        message: 'input field value',
        htmlUsage: `...`,
      };
    },
  };
</script>
