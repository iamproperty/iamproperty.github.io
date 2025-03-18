<script setup>
  import components from '../../components.json';
</script>

<template>
  <main>
    <div class="container">
      <h1>Audit</h1>
      <p>Previous stats created on 27/02/2025.</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Size</th>
            <th>Previous</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>CSS</th>
            <td>{{ $shared.audit.css_size }}</td>
            <td>{{ $shared.benchmark.css_size }}</td>
            <td>The base CSS plus the standard grid, components and the mixin utilities</td>
          </tr>
          <tr>
            <th>Core CSS</th>
            <td>{{ $shared.audit.css_core_size }}</td>
            <td>{{ $shared.benchmark.css_core_size }}</td>
            <td>The most important CSS; doesn't include the grid, components or utilities</td>
          </tr>
          <tr>
            <th>Mobile CSS</th>
            <td>{{ $shared.audit.css_mob_size }}</td>
            <td>{{ $shared.benchmark.css_mob_size }}</td>
            <td>The base CSS plus the standard grid, components and the mixin utilities</td>
          </tr>
          <tr>
            <th>Core CSS</th>
            <td>{{ $shared.audit.css_core_mob_size }}</td>
            <td>{{ $shared.benchmark.css_core_mob_size }}</td>
            <td>The most important CSS; doesn't include the grid, components or utilities</td>
          </tr>
          <tr>
            <th>Base JS</th>
            <td>{{ $shared.audit.js_size }}</td>
            <td>{{ $shared.benchmark.js_size }}</td>
            <td></td>
          </tr>
          <tr v-for="(component, index) in components" :key="index">
            <th>- {{ component }} component</th>
            <td>{{ $shared.audit[`${component}_size`] }}</td>
            <td>{{ $shared.benchmark[`${component}_size`] }}</td>
            <td>All the JS/CSS needed for the component</td>
          </tr>
          <tr>
            <th>Total JS</th>
            <td>{{ $shared.audit.Total_JS_size }}</td>
            <td>{{ $shared.benchmark.Total_JS_size }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Logos SVG</th>
            <td>{{ $shared.audit.logo_size }}</td>
            <td>{{ $shared.benchmark.logo_size }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Images</th>
            <td>
              {{ $shared.audit.img_size }} ({{ $shared.audit.img_count }} file{{
                $shared.audit.img_count > 1 ? 's' : ''
              }})
            </td>
            <td>
              {{ $shared.benchmark.img_size }} ({{ $shared.benchmark.img_count }} file{{
                $shared.benchmark.img_count > 1 ? 's' : ''
              }})
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Fonts</th>
            <td>
              {{ $shared.audit.fonts_size }} ({{ $shared.audit.fonts_count }} file{{
                $shared.audit.fonts_count > 1 ? 's' : ''
              }})
            </td>
            <td>
              {{ $shared.benchmark.fonts_size }} ({{ $shared.benchmark.fonts_count }} file{{
                $shared.benchmark.fonts_count > 1 ? 's' : ''
              }})
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
