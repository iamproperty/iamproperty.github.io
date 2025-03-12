<template>
  <main>
    <div class="container pt-5">
      <Table class="table--cta">
        <div class="actionbar__sticky" slot="before">
          <Actionbar data-selectall data-search>
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
        </div>
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

    <div class="container">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  </main>
</template>

<script>
  import Actionbar from '@/components/Actionbar/Actionbar.vue';
  import Table from '@/components/Table/Table.vue';
  import Input from '@/components/Input/Input.vue';

  export default {
    components: {
      Actionbar,
      Table,
      Input,
    },
  };
</script>
