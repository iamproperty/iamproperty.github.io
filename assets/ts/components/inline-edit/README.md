**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/nav/nav.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-nav`))
    window.customElements.define(`iam-nav`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<iam-inline-edit id="inlineEdit" data-autosave>
  <label >Optional label
    <input type="text" name="text" value="Placeholder text" />
  </label>
</iam-inline-edit>
```

```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-autosave  | Flag | - | Allows the input field to dispatch the autosave event when unfocusing the input field |
