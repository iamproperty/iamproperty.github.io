<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Text links</h1>
    </DSHeader>

    <div class="container pb-0">
      <p class="lead">Text links are links that are primarily used inline within text. They are also sometimes used within components if to help users navigate to specific areas. A filter overlay of 85% brightness will be applied to the default states for the active state.</p>
      
      <h2>Default</h2>
      <p>
        Inline text links can be used among body copy. See examples below:
      </p>
    </div>

    <div class="container visualtest">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        <a href="/components/buttons">industry's standard</a> dummy text ever since the 1500s, when an
        <a href="/components/buttons"><i class="fa-light fa-envelope"></i> unknown printer</a> took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
    <div class="container visualtest pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Default state</p>
          <p><a href="/components/buttons">industry's standard</a></p>
          <p>
            <a href="/components/buttons"><i class="fa-light fa-envelope"></i> unknown printer</a>
          </p>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Hover/Focus state</p>
          <p><a href="/components/buttons" class="hover">industry's standard</a></p>
          <p>
            <a href="/components/buttons" class="hover"><i class="fa-light fa-envelope"></i> unknown printer</a>
          </p>
        </div>
        <div class="col-sm-6 col-md-4">
          <p class="lead pb-2">Disabled</p>
          <p><a href="/components/buttons" disabled>industry's standard</a></p>
          <p>
            <a href="/components/buttons" disabled><i class="fa-light fa-envelope"></i> unknown printer</a>
          </p>
        </div>
      </div>
    </div>
    <div class="container visualtest bg-primary pb-5 pe-none">
      <div class="row">
        <div class="col-sm-6 col-md-4 light-mode pt-3">
          <p><a href="/components/buttons">industry's standard</a></p>
          <p>
            <a href="/components/buttons"><i class="fa-light fa-envelope"></i> unknown printer</a>
          </p>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary light-mode pt-3">
          <p><a href="/components/buttons" class="hover">industry's standard</a></p>
          <p>
            <a href="/components/buttons" class="hover"><i class="fa-light fa-envelope"></i> unknown printer</a>
          </p>
        </div>
        <div class="col-sm-6 col-md-4 bg-primary light-mode pt-3">
          <p><a href="/components/buttons" disabled>industry's standard</a></p>
          <p>
            <a href="/components/buttons" disabled><i class="fa-light fa-envelope"></i> unknown printer</a>
          </p>
        </div>
      </div>
    </div>




    <div class="bg-light version-control">
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
              <td>21.02.2025</td>
              <td>- Split out into separate page<br/>
                  - Added disabled states</td>
            </tr>

          </tbody>
        </table>
        <a href="/pdfs/text-links.pdf" download>Download latest designs</a>
      </div>
    </div>
  </main>
</template>
