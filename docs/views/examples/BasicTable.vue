<script setup lang="ts">
  import TableBasic from '@/components/Table/TableBasic.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
</script>

<template>
  <main>
    <h1>Basic table</h1>


<TableBasic data-show="15" data-page="1" data-total="50" data-page-minimal="" data-page-jump="" data-per-page="" data-item-count="" data-increment="15">
  <Actionbar data-search="" slot="before" data-columns-shown="0">
      <label class="tag tag--toggle" slot="filters"><input type="radio" name="instruction" value="pre">Pre-instruction</label>
      <label class="tag tag--toggle" slot="filters"><input type="radio" name="instruction" value="post">Post-instruction</label>
      

      <button class="btn btn-action mb-0 me-0 fa-sort fa-compact-only" type="button" popovertarget="sortbyOptions" aria-haspopup="true" aria-controls="sortbyOptions" style="anchor-name: --sortbyOptions;">Sort by <i class="fa-regular fa-chevron-down m-0" aria-hidden="true"></i></button>

      <iam-menu id="sortOptions" popover="" role="menu" style="position-anchor: --filterOptions;"><label><input type="radio" name="filter" value="my-cases">My cases</label><label><input type="radio" name="filter" value="all-cases">All Cases</label></iam-menu>
    

      <button class="btn btn-action mb-0 me-0 fa-filter fa-compact-only" type="button" popovertarget="sortbyOptions" aria-haspopup="true" aria-controls="sortbyOptions" style="anchor-name: --filterOptions;">Filter by <i class="fa-regular fa-chevron-down m-0" aria-hidden="true"></i></button>

      
      
      <iam-menu id="filterOptions" popover="" role="menu" style="position-anchor: --filterOptions;"><label><input type="radio" name="filter" value="my-cases">My cases</label><label><input type="radio" name="filter" value="all-cases">All Cases</label></iam-menu>
    
  </Actionbar>
   <table>
      <thead>
         <tr>
            <th class="expand-button-heading"></th>
            <th>ID</th>
            <th>Transaction</th>
            <th>Last update</th>
            <th>Assignee</th>
            <th>Case type</th>
            <th>Status</th>
            <th>Milestone</th>
            <th></th>
         </tr>
      </thead>
      <tbody>
         <tr class="show" data-view="default">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="0">Expand</button></td>
            <td data-label="ID">1</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Purchase</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/1"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="1">Expand</button></td>
            <td data-label="ID">2</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Purchase</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/2"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="2">Expand</button></td>
            <td data-label="ID">3</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Purchase</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/3"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="3">Expand</button></td>
            <td data-label="ID">4</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Purchase</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/4"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="4">Expand</button></td>
            <td data-label="ID">5</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Purchase</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/5"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="5">Expand</button></td>
            <td data-label="ID">6</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Purchase</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/6"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="6">Expand</button></td>
            <td data-label="ID">7</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Sale</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/7"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="7">Expand</button></td>
            <td data-label="ID">8</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Sale</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/8"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="8">Expand</button></td>
            <td data-label="ID">9</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Purchase</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/9"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="9">Expand</button></td>
            <td data-label="ID">10</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Sale</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/10"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="10">Expand</button></td>
            <td data-label="ID">11</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Purchase</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/11"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="11">Expand</button></td>
            <td data-label="ID">12</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Purchase</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/12"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="12">Expand</button></td>
            <td data-label="ID">13</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Sale</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/13"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="13">Expand</button></td>
            <td data-label="ID">14</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Sale</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/14"> View profile </a></td>
         </tr>
         <tr class="show">
            <td class="td--expand"><button class="btn btn-compact btn-secondary btn-sm" data-expand-button="" data-index="14">Expand</button></td>
            <td data-label="ID">15</td>
            <td data-label="Transaction">...</td>
            <td data-label="Last update"><time datetime="2025-11-20T11:02:24.000Z" title="2025-11-20T11:02:24.000Z">20/11/2025, 11:02</time></td>
            <td data-label="Assignee" data-content="n/a">N/A</td>
            <td data-label="Case type">Sale</td>
            <td data-label="Status">...</td>
            <td data-label="Milestone">...</td>
            <td data-label=""><a href="/matters/15"> View profile </a></td>
         </tr>
      </tbody>
   </table>

</TableBasic>


    <TableBasic>
      <table>
        <thead>
          <tr>
            <th>Client name</th>
            <th>Date added</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
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
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
          </tr>
        </tbody>
      </table>
    </TableBasic>

    <h1 class="mt-5">Basic full width table</h1>

    <TableBasic class="table--fullwidth">
      <table>
        <thead>
          <tr>
            <th>Client name</th>
            <th>Date added</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
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
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
          </tr>
        </tbody>
      </table>
    </TableBasic>
  </main>
</template>
