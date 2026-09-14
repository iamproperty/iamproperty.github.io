<script setup>
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Table from '@/components/Table/Table.vue';
  import AdvancedTable from '@/components/Table/TableAdvanced.vue';

</script>


<template>
  <main>
    <h1>Tables with actionbars</h1>
    <h2 class="h4">Default table with actionbar</h2>
    <div class="visualtest container mb-5 bg-light">
      <Table>
        <Actionbar data-selectall>
          <button class="btn btn-action fa-pen-to-square" data-single>Edit</button>
          <button class="btn btn-action fa-box-archive">Archive</button>
          <button class="btn btn-action fa-trash-can">Delete</button>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Date added</th>
              <th>Lorum ipsum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td data-label=""><a href="/" class="text-nowrap">Manage client</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td data-label=""><a href="/" class="text-nowrap">Manage client</a></td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>
    <div class="visualtest container mb-5 bg-light">
      <Table class="table--fullwidth">
        <Actionbar data-selectall>
          <button class="btn btn-action fa-pen-to-square" data-single>Edit</button>
          <button class="btn btn-action fa-box-archive">Archive</button>
          <button class="btn btn-action fa-trash-can">Delete</button>
        </Actionbar>
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Date added</th>
              <th>Lorum ipsum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td data-label=""><a href="/" class="text-nowrap">Manage client</a></td>
            </tr>
            <tr>
              <td>Tom Smith</td>
              <td>10.05.23</td>
              <td>Lorum ipsum</td>
              <td data-label=""><a href="/" class="text-nowrap">Manage client</a></td>
            </tr>
          </tbody>
        </table>
      </Table>
    </div>
    <h2 class="h4">Default table with actionbar in admin panel</h2>
    <div class="visualtest container mb-5 bg-light">
      <div class="admin-panel">
        <h2>Admin heading</h2>
        <Table>
            <Actionbar>
              <button class="btn btn-action fa-pen-to-square" data-single>Edit</button>
              <button class="btn btn-action fa-box-archive">Archive</button>
              <button class="btn btn-action fa-trash-can">Delete</button>
            </Actionbar>
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Lorum ipsum</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td data-label=""><a href="/" class="text-nowrap">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td data-label=""><a href="/" class="text-nowrap">Manage client</a></td>
              </tr>
            </tbody>
          </table>
        </Table>
      </div>
    </div>
    <h2 class="h4">Default table with actionbar in admin panel as secondary content</h2>

    <div class="visualtest container mb-5 bg-light">
      <div class="admin-panel">
        <h2>Admin heading</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <AdvancedTable>
          <Actionbar >
            <button class="btn btn-action fa-pen-to-square" data-single>Edit</button>
            <button class="btn btn-action fa-box-archive">Archive</button>
            <button class="btn btn-action fa-trash-can">Delete</button>
          </Actionbar>
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date added</th>
                <th>Lorum ipsum</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td data-label=""><a href="/" class="text-nowrap">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td data-label=""><a href="/" class="text-nowrap">Manage client</a></td>
              </tr>
            </tbody>
          </table>
        </AdvancedTable>
      </div>
    </div>

    <h2 class="h4">Advanced table with actionbar in admin panel as secondary content AND has applied filters</h2>

    <div class="visualtest container mb-5 bg-light">
      <div class="admin-panel">
        <h2>Admin heading</h2>

        <AdvancedTable>
          <Actionbar >
            <button class="btn btn-action fa-pen-to-square" data-single>Edit</button>
            <button class="btn btn-action fa-box-archive">Archive</button>
            <button class="btn btn-action fa-trash-can">Delete</button>
          </Actionbar>
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th data-filters>Date added</th>
                <th>Lorum ipsum</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td data-label=""><a href="/" class="text-nowrap">Manage client</a></td>
              </tr>
              <tr>
                <td>Tom Smith</td>
                <td>10.05.23</td>
                <td>Lorum ipsum</td>
                <td data-label=""><a href="/" class="text-nowrap">Manage client</a></td>
              </tr>
            </tbody>
          </table>
        </AdvancedTable>
      </div>
    </div>

  </main>
</template>

