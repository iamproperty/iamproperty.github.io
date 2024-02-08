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
| data-page-minimal | flag | - | Will display the minimal variant even on mobile | 
| data-page-jump | flag | - | Adds the page jump dropdown on all viewports | 
| data-per-page | flag | - | Adds the per page dropdown on tablet and desktop viewports (is hidden on tablet if not enough room availble) | 
| data-item-count | flag | - | Will add the total count on tablet and desktop viewports | 

**Dispatched events**

| Event | Dispatched when | Details passed|
| ------ | ------------- | ----------- |
| update-show | When a user clicks mobile 'Load more' button | { show: $showAmont } |
| update-page | When a user changes the page jump select or clicks on the 'Prev' and 'Next' buttons | { page: $pageNumber } |
