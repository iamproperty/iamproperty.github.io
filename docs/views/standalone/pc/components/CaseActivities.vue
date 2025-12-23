<script lang="ts" setup>
import { ref } from 'vue'
import Table from '@/components/Table/TableNoSubmit.vue';
import Actionbar from '@/components/Actionbar/Actionbar.vue';
import Menu from '@/components/Menu/Menu.vue';
import Modal from '@/components/Modal/Modal.vue';
import AppliedFilters from '@/components/AppliedFilters/AppliedFilters.vue';
import Accordion from '@/components/Accordion/Accordion.vue';

import { useTemplateRef } from 'vue';
const searchParams = new URLSearchParams(window.location.search);
const order = ref<string>(searchParams.get('order') ?? 'task-asc');


const filters = useTemplateRef('filters');
const filtersInline = useTemplateRef('filters-inline');


const handleSortBy = (): void => {
  // sort
  console.log('sort');
};

const handleSearch = (e): void => {
  // search
  console.log(e);
  console.log('search');
};

const handleSubmit = (e): void => {

  console.log('submit')
}
</script>
<template>
  
    <div class="admin-panel">
      <h2 class="bg-light">Activity log</h2>

      <Table>
        <Actionbar data-search="" slot="before"  @search-submit="handleSearch">

          <button class="btn btn-action mb-0 me-0" type="button" popovertarget="sortbyOptions">Sort by <i class="fa-regular fa-chevron-down m-0"></i></button>
          <Menu id="sortbyOptions" popover>
              <label><input v-model="order" type="radio" name="order" value="task-asc" @change="handleSortBy()">Task by ascending order</label>
              <label><input v-model="order" type="radio" name="order" value="task-desc" @change="handleSortBy()">Task by descending order</label>
          </Menu>
          <button class="btn btn-compact btn-primary mb-0 me-0 fa-sliders" type="button" command="show-modal" commandfor="activity-log-filters">Filter</button>
        </Actionbar>

        <AppliedFilters ref="filters">
          <Modal>
            <dialog id="activity-log-filters">
              <span class="h3">Filter by</span>
              <AppliedFilters ref="filters-inline">

                <Accordion>
                <details name="filter">
                  <summary>Activity</summary>
                  <fieldset>
                    <label><input type="radio" name="activity" value="task-created" data-filter-text="$value"/> Task created</label>
                    <label><input type="radio" name="activity" value="case-created" data-filter-text="$value"/> Case created</label>
                  </fieldset>
                </details>
                
                <details name="filter">
                  <summary>Activity</summary>
                  <fieldset>
                    <label><input type="radio" name="activity" value="task-created" data-filter-text="$value"/> Task created</label>
                    <label><input type="radio" name="activity" value="case-created" data-filter-text="$value"/> Case created</label>
                  </fieldset>
                </details>
                </Accordion>

                <div class="text-center"><button class="btn btn-primary m-0" command="close" commandfor="activity-log-filters" @click="handleSubmit">Update results</button></div>
              </AppliedFilters>
            </dialog>
          </Modal>
        </AppliedFilters>

        <table>
          <thead>
            <tr>
              <th>Date added</th>
              <th>Activity </th>
              <th>User</th>
              <th>Update</th>
            </tr> 
          </thead>
          <tbody>
            <tr>
              <td>Opportunity</td>
              <td>Task created </td>
              <td>[OS name]</td>
              <td><p class="pb-0">Lorum can refer to a Latin word for a strap, thong, or leash, a type of insect or spider anatomy, a male genital piercing, or a Hungarian card game. It is also the basis for the placeholder text "Lorem ipsum". The term's specific meaning depends entirely on the context in which it is used.</p></td>
            </tr>
          </tbody>
        </table>
      </Table>

    </div>

  
</template>