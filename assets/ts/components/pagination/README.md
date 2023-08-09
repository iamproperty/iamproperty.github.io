**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/pagination/pagination.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-pagination`))
    window.customElements.define(`iam-pagination`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<iam-pagination data-total="12"></iam-pagination>
```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-total | int | 0 | The total amount is needed to work out how many pagination buttons are needed |
| data-page | int | 1 | Override the current page value |
| data-show | int | 15 | Update how many items can be shown per page |
