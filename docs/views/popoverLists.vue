<template>
  <div class="row">
    <div class="col-sm-6 col-md-4" style="min-height: 15rem">
      <p class="pb-1">Text list</p>
      <div class="dialog__wrapper" data-keep-open>
        <button class="btn btn-primary pe-none d-none">Text list Popover</button>
        <dialog class="dialog--list" open>
          <button class="btn btn-action">Action 1</button>
          <button class="btn btn-action">Action 2</button>
          <hr />
          <button class="btn btn-action">Lorem ipsum</button>
        </dialog>
      </div>
    </div>
    <div class="col-sm-6 col-md-4" style="min-height: 15rem">
      <p class="pb-1">Text list with icons</p>
      <div class="dialog__wrapper" data-keep-open>
        <button class="btn btn-primary pe-none d-none">Text list with icons</button>
        <dialog class="dialog--list" open>
          <button class="btn btn-action fa-browsers">Action 1</button>
          <button class="btn btn-action fa-rotate-left">Action 2</button>
          <hr />
          <button class="btn btn-action fa-link">Action 3</button>
        </dialog>
      </div>
    </div>
    <div class="col-md-4" style="min-height: 15rem">
      <p class="pb-1">Select list</p>
      <div class="dialog__wrapper" data-keep-open>
        <button class="btn btn-primary pe-none d-none">Select list</button>
        <dialog class="dialog--list" open>
          <div class="dialog__wrapper">
            <button class="btn btn-action">Sort by</button>
            <dialog class="dialog--list">
              <input type="radio" name="sort" data-sort="" id="follow-up-oldest" value="follow-up-oldest" />
              <label for="follow-up-oldest" class="radio--tick">Option 1</label>

              <input type="radio" name="sort" data-sort="" id="follow-up-newest" value="follow-up-newest" />
              <label for="follow-up-newest" class="radio--tick">Option 2</label>
              <input
                type="radio"
                name="sort"
                data-sort=""
                id="date-instructed-oldest"
                value="date-instructed-oldest"
                checked="true"
                autofocus
              />
              <label for="date-instructed-oldest" class="radio--tick">Option 3</label>

              <input type="radio" name="sort" data-sort="" id="date-instructed-newest" value="date-instructed-newest" />
              <label for="date-instructed-newest" class="radio--tick">Option 4</label>
            </dialog>
          </div>
          <div class="dialog__wrapper">
            <button class="btn btn-action">Filter by</button>
            <dialog class="dialog--list">
              <input type="radio" name="filter" data-sort="" id="follow-up-oldest2" value="follow-up-oldest" />
              <label for="follow-up-oldest2" class="radio--tick">Option 1</label>

              <input type="radio" name="filter" data-sort="" id="follow-up-newest2" value="follow-up-newest" />
              <label for="follow-up-newest2" class="radio--tick">Option 2</label>
              <input
                type="radio"
                name="filter"
                data-sort=""
                id="date-instructed-oldest2"
                value="date-instructed-oldest"
                checked="true"
                autofocus
              />
              <label for="date-instructed-oldest2" class="radio--tick">Option 3</label>

              <input
                type="radio"
                name="filter"
                data-sort=""
                id="date-instructed-newest2"
                value="date-instructed-newest"
              />
              <label for="date-instructed-newest2" class="radio--tick">Option 4</label>
            </dialog>
          </div>
          <hr />
          <button class="btn btn-action">Lorum ipsum</button>
          <button class="btn btn-action">Lorum ipsum</button>
        </dialog>
      </div>
    </div>
  </div>
</template>
