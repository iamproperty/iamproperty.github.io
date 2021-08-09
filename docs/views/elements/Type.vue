<template>
  <main>
    <div class="container">
      <h1>Typography</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Font Family</th>
            <th>Weight</th>
            <th>Size</th>
            <th>Line Height</th>
            <th>Margin Bottom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="h1">heading 1</span></td>
            <td>{{$shared.cssVars.__font_heading}}</td>
            <td>{{$shared.cssVars.__heading_weight}}</td>
            <td><span>{{$shared.cssVars.__fs_1}}</span>/<span>2.5rem</span></td>
            <td>{{$shared.cssVars.heading_lh}}</td>
            <td>0.5em</td>
          </tr>
          <tr>
            <td><span class="h2">heading 2</span></td>
            <td>{{$shared.cssVars.__font_heading}}</td>
            <td>{{$shared.cssVars.__heading_weight}}</td>
            <td>{{$shared.cssVars.__fs_2}}</td>
            <td>{{$shared.cssVars.heading_lh}}</td>
            <td>0.5em</td>
          </tr>
          <tr>
            <td><span class="h3">heading 3</span></td>
            <td>{{$shared.cssVars.__font_body}}</td>
            <td>normal</td>
            <td>{{$shared.cssVars.__fs_3}}</td>
            <td>{{$shared.cssVars.heading_lh}}</td>
            <td>0.5em</td>
          </tr>
          <tr>
            <td><span class="h4">heading 4</span></td>
            <td>{{$shared.cssVars.__font_heading}}</td>
            <td>{{$shared.cssVars.__heading_weight}}</td>
            <td>{{$shared.cssVars.__fs_4}}</td>
            <td>{{$shared.cssVars.heading_lh}}</td>
            <td>0.5em</td>
          </tr>
          <tr>
            <td><span class="h5">heading 5</span></td>
            <td>{{$shared.cssVars.__font_heading}}</td>
            <td>{{$shared.cssVars.__heading_weight}}</td>
            <td>{{$shared.cssVars.__fs_5}}</td>
            <td>{{$shared.cssVars.heading_lh}}</td>
            <td>0.5em</td>
          </tr>
          <tr>
            <td><span class="font-weight-normal">Body text</span></td>
            <td>{{$shared.cssVars.__font_body}}</td>
            <td>normal</td>
            <td>1rem</td>
            <td>{{$shared.cssVars.heading_lh}}</td>
            <td>0.5em</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container">
      <h6>Heading number 1<br/>Heading number 1</h6>
      <p class="h1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
/* Table overrides for this page only */
table {
  font-size: 1rem!important;
  font-weight: normal;
  color: var(--colour-primary);

  td {

    font-weight: normal;
  }
}
</style>
