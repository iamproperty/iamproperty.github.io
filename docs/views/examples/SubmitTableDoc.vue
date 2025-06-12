<script setup lang="ts">
  import TableSubmit from '@/components/Table/TableSubmit.vue';
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
</script>

<template>
  <main>
    <h1>Submit table</h1>

    <TableSubmit data-expandable>
      <Actionbar data-selectall="" data-search="" slot="before" data-selected="0">
        <div class="dialog__wrapper" slot="overflow">
          <button data-v-c1cc5ae7="" class="btn btn-action mb-0 me-0">Quick filter</button>
          <dialog data-v-c1cc5ae7="" class="dialog--list">
            <div data-v-c1cc5ae7="" class="pb-0 mb-0">
              <input
                data-v-c1cc5ae7=""
                type="radio"
                name="sort"
                data-sort=""
                id="follow-up-oldest"
                value="follow-up-oldest"
              /><label data-v-c1cc5ae7="" for="follow-up-oldest" class="radio--tick"
                >Follow up date (Oldest to newest)</label
              ><input
                data-v-c1cc5ae7=""
                type="radio"
                name="sort"
                data-sort=""
                id="follow-up-newest"
                value="follow-up-newest"
              /><label data-v-c1cc5ae7="" for="follow-up-newest" class="radio--tick"
                >Follow up date (Newest to oldest)</label
              ><input
                data-v-c1cc5ae7=""
                type="radio"
                name="sort"
                data-sort=""
                id="date-instructed-oldest"
                autofocus=""
                value="date-instructed-oldest"
              /><label data-v-c1cc5ae7="" for="date-instructed-oldest" class="radio--tick"
                >Date Instructed (Oldest to newest)</label
              ><input
                data-v-c1cc5ae7=""
                type="radio"
                name="sort"
                data-sort=""
                id="date-instructed-newest"
                value="date-instructed-newest"
              /><label data-v-c1cc5ae7="" for="date-instructed-newest" class="radio--tick mb-0"
                >Date Instructed (Newest to oldest)</label
              >
            </div>
          </dialog>
        </div>
        <button data-v-c1cc5ae7="" class="btn btn-primary btn-sm fa-plus btn-compact js-updated" id="uploadBtn">
          Upload document</button
        ><button
          data-v-c1cc5ae7=""
          class="btn btn-action fa-pen-to-square btn-compact js-updated"
          data-single=""
          slot="overflow"
        >
          Edit</button
        ><button data-v-c1cc5ae7="" class="btn btn-action fa-box-archive btn-compact js-updated" slot="overflow">
          Archive</button
        ><button data-v-c1cc5ae7="" class="btn btn-action fa-trash-can btn-compact js-updated" slot="overflow">
          Delete
        </button>
        <hr data-v-c1cc5ae7="" />
        <button data-v-c1cc5ae7="" class="btn btn-action btn-compact js-updated" slot="overflow">Cancel</button>
      </Actionbar>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Client name</th>
            <th>Date added</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>
              <div class="dialog__wrapper">
                <button class="btn btn-secondary btn-compact fa-ellipsis-vertical">Lorum ipsum</button>
                <dialog class="dialog--fix dialog--list">
                  <button class="btn btn-action" data-single="">View task</button>
                  <button class="btn btn-action" data-single="">Mark as completed</button>
                  <button class="btn btn-action" data-single="">Delete task</button>
                </dialog>
              </div>
            </td>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
        </tbody>
      </table>
    </TableSubmit>

    <TableSubmit data-expandable>
      <Actionbar data-selectall="" data-search="" slot="before" data-selected="0">
        <div class="dialog__wrapper" slot="overflow">
          <button data-v-c1cc5ae7="" class="btn btn-action mb-0 me-0">Quick filter</button>
          <dialog data-v-c1cc5ae7="" class="dialog--list">
            <div data-v-c1cc5ae7="" class="pb-0 mb-0">
              <input
                data-v-c1cc5ae7=""
                type="radio"
                name="sort"
                data-sort=""
                id="follow-up-oldest"
                value="follow-up-oldest"
              /><label data-v-c1cc5ae7="" for="follow-up-oldest" class="radio--tick"
                >Follow up date (Oldest to newest)</label
              ><input
                data-v-c1cc5ae7=""
                type="radio"
                name="sort"
                data-sort=""
                id="follow-up-newest"
                value="follow-up-newest"
              /><label data-v-c1cc5ae7="" for="follow-up-newest" class="radio--tick"
                >Follow up date (Newest to oldest)</label
              ><input
                data-v-c1cc5ae7=""
                type="radio"
                name="sort"
                data-sort=""
                id="date-instructed-oldest"
                autofocus=""
                value="date-instructed-oldest"
              /><label data-v-c1cc5ae7="" for="date-instructed-oldest" class="radio--tick"
                >Date Instructed (Oldest to newest)</label
              ><input
                data-v-c1cc5ae7=""
                type="radio"
                name="sort"
                data-sort=""
                id="date-instructed-newest"
                value="date-instructed-newest"
              /><label data-v-c1cc5ae7="" for="date-instructed-newest" class="radio--tick mb-0"
                >Date Instructed (Newest to oldest)</label
              >
            </div>
          </dialog>
        </div>
        <button data-v-c1cc5ae7="" class="btn btn-primary btn-sm fa-plus btn-compact js-updated" id="uploadBtn">
          Upload document</button
        ><button
          data-v-c1cc5ae7=""
          class="btn btn-action fa-pen-to-square btn-compact js-updated"
          data-single=""
          slot="overflow"
        >
          Edit</button
        ><button data-v-c1cc5ae7="" class="btn btn-action fa-box-archive btn-compact js-updated" slot="overflow">
          Archive</button
        ><button data-v-c1cc5ae7="" class="btn btn-action fa-trash-can btn-compact js-updated" slot="overflow">
          Delete
        </button>
        <hr data-v-c1cc5ae7="" />
        <button data-v-c1cc5ae7="" class="btn btn-action btn-compact js-updated" slot="overflow">Cancel</button>
      </Actionbar>
      <table>
        <thead>
          <tr>
            <th>Client name</th>
            <th>Date added</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
        </tbody>
      </table>
    </TableSubmit>

    <TableSubmit data-expandable class="table--cta">
      <table>
        <thead>
          <tr>
            <th>Client name</th>
            <th>Date added</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
            <th>Lorum ipsum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
          <tr>
            <td>Tom Smith</td>
            <td>10.05.23</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td>Lorum ipsum</td>
            <td><a href="/manage">Manage</a></td>
          </tr>
        </tbody>
      </table>
    </TableSubmit>
  </main>
</template>
