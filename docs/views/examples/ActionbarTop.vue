<template>
  <main >

  <div class="actionbar__sticky-wrapper">

    <div class="actionbar__sticky">
      <Actionbar data-selectall data-select-watch="cards" data-search slot="before">

        <div class="dialog__wrapper">
          <button class="btn btn-action mb-0 me-0">Quick filter</button>
          <dialog class="dialog--list">
            <div class="mb-0">
              <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest">
              <label for="follow-up-oldest" class="radio--tick">Follow up date (Oldest to newest)</label>
              <hr>
              <input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest">
              <label for="follow-up-newest" class="radio--tick">Follow up date (Newest to oldest)</label>
              <hr>
              <input type="radio" name="sort" data-sort="" id="date-instructed-oldest" value="date-instructed-oldest" checked="" autofocus="true">
              <label for="date-instructed-oldest" class="radio--tick">Date Instructed (Oldest to newest)</label>
              <hr>
              <input type="radio" name="sort" data-sort="" id="date-instructed-newest" value="date-instructed-newest">
              <label for="date-instructed-newest" class="radio--tick mb-0">Date Instructed (Newest to oldest)</label>
            </div>
          </dialog>
        </div>

        <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>

        <button class="btn btn-action fa-pen-to-square" slot="selected" data-single>Edit</button>
        <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
        <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
        <hr />
        <button class="btn btn-action" >Cancel</button>

      </Actionbar>
    </div>

    <div class="container" id="cards">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="col">
              
          <a href="/">
            <Card>
              Property 1
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card1" id="card1"><label for="card1" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
              
          <a href="/">
            <Card>
              Property 2
              <span>Lorem ipsum</span>
              <div slot="checkbox"><input type="checkbox" name="card2" id="card2"><label for="card2" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
          <a href="/">
            <Card>
              Property 3
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
          <a href="/">
            <Card>
              Property 3
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
          <a href="/">
            <Card>
              Property 3
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
          <a href="/">
            <Card>
              Property 3
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
          <a href="/">
            <Card>
              Property 3
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
          <a href="/">
            <Card>
              Property 3
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
          <a href="/">
            <Card>
              Property 3
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
          <a href="/">
            <Card>
              Property 3
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
          <a href="/">
            <Card>
              Property 3
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
        <div class="col">
          <a href="/">
            <Card>
              Property 3
              <span>Lorem ipsum</span>
              <div><input type="checkbox" name="card3" id="card3"><label for="card3" class="m-0">Select card</label></div>
            </Card>
          </a>
        </div>
      </div>
      
    </div>

  </div>
    <div class="container">
      
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    </div>


  </main>

</template>

<script>
import Actionbar from '@/components/Actionbar/Actionbar.vue'
import Table from '@/components/Table/Table.vue'
import Card from '@/components/Card/Card.vue'

export default {
  components: {
    Actionbar,
    Table,
    Card
  }
}
</script>