<script setup>
  import DSHeader from '../DSHeader.vue';
  import headerImg from '../../img/type-header.png';
  

</script>

<template>
  <main>
    <DSHeader :image="headerImg" section="elements">
      <h1>Table Element</h1>
    </DSHeader>

    <p class="lead">Basic styles and behaviour of tables.</p>

    <table class="mb-5">
      <thead>
        <tr>
          <th>Client name</th>
          <th>Date added</th>
          <th>Lorum ipsum</th>
          <th>Lorum ipsum</th>
          <th>Lorum ipsum</th>
          <th>Lorum ipsum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tom Smith</td>
          <td>10.05.23</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
        </tr>
        <tr>
          <td>Tom Smith</td>
          <td>10.05.23</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
        </tr>
        <tr>
          <td>Tom Smith</td>
          <td>10.05.23</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
        </tr>
        <tr>
          <td>Tom Smith</td>
          <td>10.05.23</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
          <td>Lorum ipsum</td>
        </tr>
      </tbody>
    </table>

    <h3>Add an overflow Scroll</h3>
    <p>To add a scroll bar to a table the table needs to be wrapped in a div element with nothing else in it.</p>
    <div>
      <table>
        <thead>
          <tr>
            <th>Client name</th>
            <th>Date added</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
          </tr>
          <tr>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
          </tr>
          <tr>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
          </tr>
          <tr>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Table component</h2>
    <p>The basic styles and behaviour of tables can be upgraded by using the design system table component.</p>
    <a href="/components/tables" class="btn btn-primary mb-5">Tables component</a>
  </main>
</template>

