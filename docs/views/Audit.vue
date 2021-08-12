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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CSS</td>
            <td>{{$shared.audit.css_size}}</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Core CSS</td>
            <td>{{$shared.audit.css_core_size}}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
