<template>
  <main>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="admin-panel pb-1">
            <h2>With Actionbar</h2>
            <Actionbar data-selectall data-select-watch="cards" data-search slot="before">
              <div class="dialog__wrapper">
                <button class="btn btn-action mb-0 me-0">Quick filter</button>
                <dialog class="dialog--list">
                  <div class="pb-0 mb-0">
                    <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" />
                    <label for="follow-up-oldest" class="radio--tick">Follow up date (Oldest to newest)</label>

                    <input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest" />
                    <label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label>

                    <input
                      type="radio"
                      name="sort"
                      data-sort=""
                      id="date-instructed-oldest"
                      value="date-instructed-oldest"
                      checked=""
                      autofocus="true"
                    />
                    <label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label>

                    <input
                      type="radio"
                      name="sort"
                      data-sort=""
                      id="date-instructed-newest"
                      value="date-instructed-newest"
                    />
                    <label for="date-instructed-newest" class="radio--tick mb-0"
                      >Date Instructed (Newest to oldest)</label
                    >
                  </div>
                </dialog>
              </div>

              <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>

              <button class="btn btn-action fa-pen-to-square" slot="selected" data-single>Edit</button>
              <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
              <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
              <hr />
              <button class="btn btn-action">Cancel</button>
            </Actionbar>
            <div class="row row-cols-1 row-cols-sm-2 pt-1" id="cards">
              <div class="col">
                <a href="/">
                  <Card>
                    Property 1
                    <span>Lorem ipsum</span>
                    <div>
                      <input type="checkbox" name="card1" id="card1" /><label for="card1" class="m-0"
                        >Select card</label
                      >
                    </div>
                  </Card>
                </a>
              </div>
              <div class="col">
                <a href="/">
                  <Card>
                    Property 2
                    <span>Lorem ipsum</span>
                    <div>
                      <input type="checkbox" name="card2" id="card2" /><label for="card2" class="m-0"
                        >Select card</label
                      >
                    </div>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="admin-panel">
            <h2>With table and actionbar</h2>
            <Table class="table--cta table--fullwidth">
              <Actionbar data-selectall data-search slot="before">
                <div class="dialog__wrapper">
                  <button class="btn btn-action mb-0 me-0">Quick filter</button>
                  <dialog class="dialog--list">
                    <div class="pb-0 mb-0">
                      <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" />
                      <label for="follow-up-oldest" class="radio--tick">Follow up date (Oldest to newest)</label>

                      <input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest" />
                      <label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label>

                      <input
                        type="radio"
                        name="sort"
                        data-sort=""
                        id="date-instructed-oldest"
                        value="date-instructed-oldest"
                        checked=""
                        autofocus="true"
                      />
                      <label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label>

                      <input
                        type="radio"
                        name="sort"
                        data-sort=""
                        id="date-instructed-newest"
                        value="date-instructed-newest"
                      />
                      <label for="date-instructed-newest" class="radio--tick mb-0"
                        >Date Instructed (Newest to oldest)</label
                      >
                    </div>
                  </dialog>
                </div>

                <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>

                <button class="btn btn-action fa-pen-to-square" data-single>Edit</button>
                <button class="btn btn-action fa-box-archive">Archive</button>
                <button class="btn btn-action fa-trash-can">Delete</button>
                <hr />
                <button class="btn btn-action">Cancel</button>
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
      </div>
    </div>
  </main>
</template>

<script>
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Table from '@/components/Table/Table.vue';
  import Input from '@/components/Input/Input.vue';
  import Card from '@/components/Card/Card.vue';

  export default {
    components: {
      Actionbar,
      Table,
      Input,
      Card,
    },
  };
</script>
