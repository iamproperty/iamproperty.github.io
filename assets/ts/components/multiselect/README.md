**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/fileupload/fileupload.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-fileupload`))
    window.customElements.define(`iam-fileupload`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<iam-multiselect>
  <span class="label" slot="label">Users</span>
  <label class="tag"><input type="checkbox" name="tags" value="IT James Lambert" />James Lambert</label>
  <label class="tag"><input type="checkbox" name="tags" value="IT Amanda Knight"/>Amanda Knight</label>
  <label class="tag"><input type="checkbox" name="tags" value="IT Brian Lord"/>Brian Lord</label>
  <label class="tag"><input type="checkbox" name="tags" value="Claire Lane"/>Claire Lane</label>
  <label class="tag"><input type="checkbox" name="tags" value="John Smith"/>John Smith</label>
  <label class="tag"><input type="checkbox" name="tags" value="James Brown"/>James Brown</label>
  <label class="tag"><input type="checkbox" name="tags" value="Sarah Brown"/>Sarah Brown</label>
</iam-multiselect>
```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-min | Int | - | Set's the minimum amout of tags needed for the input field to validate |
| data-min | Int | - | Set's the maximum amout of tags allowed to be added |
| data-is-required | flag | - | Makes it so at least one tag must be added for the it to be valid and allow the outer form to be sumitted |
