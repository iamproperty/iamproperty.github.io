**Add the below to your initialise script**

```
import('../node_modules/@iamproperty/components/assets/js/components/table/table.component.min').then(module => { // Might need to update the path

  if (!window.customElements.get(`iam-table`))
    window.customElements.define(`iam-table`, module.default);

}).catch((err) => {
  console.log(err.message);
});
```

**Add the below HTML code to where you want the component to live.**

```
<iam-table class="container">
  <table>
    <thead>....</thead>
    <tbody>...</tbody>
  </table>
</iam-tabs>
```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-show | int | 15 | Update how many rows can be shown per page |
| data-filterby | string (form ID) | | Give an optional form ID to connect a form to the table and make it act like a filtering system |
| data-no-scroll | flag | - | Stops the page from scrolling up to the top of the table |
| data-expandable | flag | - | Adds expandable buttons to rows with will allow for larger paragraphs to be shown correctly |

*Pagination properties can also be added to the table component so that they can be passed down to the child pagination element.*

**Class modifiers**

- Adding a class of **.table--cta** to the table component will fix the last column of the table in place (While on tablet or desktop).
- Adding a class of **.table--fullwidth** to the table component will prevent it from becoming a stacked view on mobile.
- Adding a class of **.table--mh-small**,**.table--mh-medium** or **.table--mh-large** to the table component will give the table container a max height and the ability to scroll.