<template>
  <main>
    <div class="container">
      <ul class="breadcrumb mb-0 d-sm-none">
        <li><a href="/foundations">Foundations</a></li>
      </ul>
      <h1>Z-index strategy (Beta)</h1>

      <p>Z-index is a relative CSS property. It has no unit of measurement, other than the other z-indexes in the project. Those other values are usually spread all over the project, which leads to interesting phenomenons. It is very easy to accidentally assign a larger z-index number to an element than that of an element it should be above. The aim of this strategy is to use semantic values instead of numbers using keywords which describe the position of the z-index.</p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>z-index</th>
            <th>Use case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>below</td>
            <td>-1</td>
            <td>For elements that we want to be displayed as a background.</td>
          </tr>
          <tr>
            <td>base</td>
            <td>0</td>
            <td>The main index of a component or page. This will usually be used to give child elements z-index values meaning.</td>
          </tr>
          <tr>
            <td>focus</td>
            <td>2</td>
            <td>Used to maintain focus on elements when be interacted with.</td>
          </tr>
          <tr>
            <td>above</td>
            <td>10</td>
            <td>For inline elements that need to displayed on top of the content but not above other coomponents like overlays. A good example of this would be tooltips and popovers.</td>
          </tr>
          <tr>
            <td>floating</td>
            <td>100</td>
            <td>For components that are positioned absolutely, fixed or sticky. Because they have been taken out of the natural flow of the page they should be displayed above other components.</td>
          </tr>
          <tr>
            <td>menu</td>
            <td>200</td>
            <td>For components that have call to actions like a mobile off canvas menu.</td>
          </tr>
          <tr>
            <td>overlay</td>
            <td>1000</td>
            <td>Used for the likes of modals and other components that need to be on the very top of the z-index.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
