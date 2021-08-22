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


### Class modifiers

- **.table-fullwidth** - Prevents the table from stacking on mobile
- **.table-striped** - Add zebra-striping to the table
- **.table-hover** - Enable a hover state on table rows within a <tbody>

### Custom JavaScript Event 

A custom event can be hooked into when the table gets updated by one of it filters.

```
this.$el.addEventListener('updated', function (e) { 
      
  console.log('Table updated')
}, false);
```