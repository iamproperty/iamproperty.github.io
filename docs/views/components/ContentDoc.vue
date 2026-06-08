
<script setup lang="ts">
  import DSHeader from '../DSHeader.vue';
  import Content from '@/components/Content/Content.vue';
  import Integration from '../Integration.vue';
  import Versions from '../Versions.vue';

  const envVars = import.meta.env as unknown as {
    VITE_CONTENT_DEMO_URL: string
  };
</script>

<template>
  <main>

    <DSHeader section="components">
      <h1>Content</h1>
    </DSHeader>

    <p>This component loads content from the wordpress rest API using a difined URL passed through the `data-url` attribute.</p>

    <div class="container bg-light mb-4">


        <Content :data-url="envVars.VITE_CONTENT_DEMO_URL" data-title-tag="h2" data-title-class="bg-primary" data-transform="div" class="admin-panel">
          <h2 class="bg-primary">Fallback title</h2>
          <p>If you are seeing this then the content component has not loaded the content correctly.</p>
        </Content>


    </div>

    <p class="note"><strong>Note:</strong> The above content should be updated from the iamcontent wordpress, the fallback text will be overwritten. So if any fallback text is still present then the component is not working correctly.</p>



    <Integration component="search" componentName="search">
      <template #web-component>
        <pre><code>{{`<Content :data-url="http://www.domain.com">
        <h2>Default content</h2>
      </Content>`}}</code></pre>
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
              <th class="text-nowrap">data-url</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>The URL endpoint used to populate the content</td>
            </tr>
            <tr>
              <th class="text-nowrap">data-transform</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>When the content is rendered it is rendered inside the supplied transorm tag.</td>
            </tr>
            <tr>
              <th class="text-nowrap">data-title-tag</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>If set then once the content is loaded a title is created with the tag supplied.</td>
            </tr>
            <tr>
              <th class="text-nowrap">data-title-class</th>
              <td></td>
              <td>String</td>
              <td>No</td>
              <td>If the title tag attribute is set alongside this then the tag is created with the supplied class.</td>
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
              <th>content-loaded</th>
              <td>When the content is loaded</td>
              <td>{ detail: { url: '{URL}' } }</td>
            </tr>
          </tbody>
        </table>
      </template>

    </Integration>

    <Versions >
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
            <td>05.06.2026</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </Versions>
  </main>
</template>
