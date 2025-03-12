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
<iam-search>
<label>Search existing transactions
  <span>
    <input type="text" name="client" autocomplete="off" aria-autocomplete="none" required />
    <span class="suffix fa-regular fa-search"></span>
  </span>
</label>
<datalist id="properties"></datalist>
</iam-search>
```

**Properties**

| Option              | Type   | Default Value | Description                                                                |
| ------------------- | ------ | ------------- | -------------------------------------------------------------------------- |
| data-url            | String | -             | Optional value that populates the datalist with extra results from an API  |
| data-schema         | String | -             | Tells the JavaScript where to look for the array of values in the API JSON |
| data-value-schema   | String | -             | Tells the JavaScript where to look for the value within the API JSON       |
| data-display-schema | String | -             | Tells the JavaScript where to look for the title within the API JSON       |
