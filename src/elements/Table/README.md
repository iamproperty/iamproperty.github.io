### Usage

```
<Table :fields="fields" :items="items"></Table>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| items  | Array | - | Table row data passed |
| fields | Array | - | Table header titles  |
| sort   | string | - | Choose from ascending or descending |
| sortBy | string | - | Needs to match a column name and will trigger sorting via that column on page load |
| show | number | - | Limits the number of results shown and will create pagination controls. |
| page | number | - | Starting page for the pagination. |
| reorder | bool | - | Create an order column and allow for the table rows to be reordered |

### Class modifiers

- **.table-fullwidth** - Prevents the table from stacking on mobile
- **.table-striped** - Add zebra-striping to the table
- **.table-hover** - Enable a hover state on table rows within a &lt;tbody&gt;

### Make columns filterable or sortable

To give a column some extra functionality extra values need to be set in the data.

```
fields: [
  { 
    key: 'name',
    filterable: true,
    sortable: true
  },
  { key: 'address' }
]
```

### Custom JavaScript Events

A custom event can be hooked into when the table gets updated by one of it filters.

```
this.$el.addEventListener('filtered', function (e) { 
      
  console.log('Table filtered')
}, false);

// Sorted
this.$el.addEventListener('sorted', function (e) { 
      
  console.log('Table sorted')
}, false);

// Re-ordered via drag and drop
this.$el.addEventListener('reordered', function (e) { 
      
  console.log('Table re-ordered')
}, false);
```
