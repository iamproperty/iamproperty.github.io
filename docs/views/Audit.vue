<template>
  <main>
    <div class="container">
      <h1>Audit</h1>
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
            <td>-</td>
            <td>All the CSS available in the framework.</td>
          </tr>
          <tr>
            <th>Core CSS</th>
            <td>{{ $shared.audit.css_core_size }}</td>
            <td>-</td>
            <td>All the CSS available excluding the components.</td>
          </tr>
          <tr>
            <th>JS</th>
            <td>{{ $shared.audit.js_size }}</td>
            <td>-</td>
            <td>All the JS available in the framework.</td>
          </tr>
          <tr>
            <th>Logos SVG</th>
            <td>{{ $shared.audit.logo_size }}</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <th>Icons SVG</th>
            <td>{{ $shared.audit.icons_size }}</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <th>Images</th>
            <td>{{ $shared.audit.img_size }}</td>
            <td>-</td>
            <td>{{ $shared.audit.img_count }} file{{ $shared.audit.img_count > 1 ? 's' : '' }}</td>
          </tr>
          <tr>
            <th>Fonts</th>
            <td>{{ $shared.audit.fonts_size }}</td>
            <td>-</td>
            <td>{{ $shared.audit.fonts_count }} file{{ $shared.audit.fonts_count > 1 ? 's' : '' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
