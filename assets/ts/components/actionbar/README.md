**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/actionbar/actionbar.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-actionbar`))
    window.customElements.define(`iam-actionbar`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<iam-actionbar data-selectall data-search>
  
  <div class="dialog__wrapper">
    <button class="btn btn-action mb-0 me-0">Quick filter</button>
    <dialog class="dialog--list">
      <div class="pb-0">
        <input type="radio" name="sorta" data-sort="" id="follow-up-oldesta" value="follow-up-oldest">
        <label for="follow-up-oldesta" class="radio--tick">Option 1</label>

        <input type="radio" name="sorta" data-sort="" id="follow-up-newesta" value="follow-up-newest">
        <label for="follow-up-newesta" class="radio--tick">Option 2</label>

        <input type="radio" name="sorta" data-sort="" id="date-instructed-oldesta" value="date-instructed-oldest" checked="" autofocus="true">
        <label for="date-instructed-oldesta" class="radio--tick">Option 3</label>

        <input type="radio" name="sorta" data-sort="" id="date-instructed-newesta" value="date-instructed-newest">
        <label for="date-instructed-newesta" class="radio--tick mb-0">Option 4</label>
      </div>
    </dialog>
  </div>

  <button class="btn btn-primary btn-sm fa-plus" id="uploadBtn">Upload document</button>

  <button class="btn btn-action fa-pen-to-square" data-single slot="selected">Edit</button>
  <button class="btn btn-action fa-box-archive" slot="selected">Archive</button>
  <button class="btn btn-action fa-trash-can" slot="selected">Delete</button>
  <hr slot="selected" />
  <button class="btn btn-action" slot="selected">Cancel</button>

</iam-actionbar>
```
**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-selectall | - | - | Optional flag to include the select all button |
| data-search | - | - | Optional flag to include the search button and functionality |
| data-switchviews | - | - | Optional flag to include the switch views buttons |
| data-view | String | square | Required if you have the above flag set. Can be set to wither 'square','list' or 'small'. |
