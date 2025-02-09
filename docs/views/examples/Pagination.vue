<template>
  <main>
    <div class="container">
      <Table class="table--fullwidth" data-page="1" data-page-jump data-item-count data-per-page>
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Date added</th>
              <th>Lorum ipsum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom Smith1</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith2</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith3</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith4</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith5</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith6</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith7</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith8</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith9</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith10</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith11</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith12</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith13</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith14</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>
  </main>
</template>

<script>
  import Pagination from '@/components/Pagination/Pagination.vue';
  import Table from '@/components/Table/Table.vue';
  import Card from '@/components/Card/Card.vue';

  export default {
    components: {
      Pagination,
      Table,
      Card,
    },
  };
</script>
