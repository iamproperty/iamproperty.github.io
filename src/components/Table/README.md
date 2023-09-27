```
<Table :fields="fields" :items="items"></Table>
```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| items  | Array | - | Table row data passed |
| fields | Array | - | Table header titles |
| data-show | int | 15 | Update how many rows can be shown per page |
| data-filterby | string (form ID) | | Give an optional form ID to connect a form to the table and make it act like a filtering system |

*Pagination properties can also be added to the table component so that they can be passed down to the child pagination element.*

**Class modifiers**

- Adding a class of **.table--cta** to the table component will fix the last column of the table in place (While on tablet or desktop). 
- Adding a class of **.table--export** to the table component will create a button at the bottom of the table to export its contents out as a CSV file.
- Adding a class of **.table--fullwidth** to the table component will prevent it from becoming a stacked view on mobile.
- Adding a class of **.table--mh-small**,**.table--mh-medium** or **.table--mh-large** to the table component will give the table container a max height and the ability to scroll.

**Example of items and fields**

**fields**

```
[
  {
    key: 'col_1',
    key: 'col_2',
    key: 'col_3',
    key: 'col_4',
  }
]
```
**items**

```
[
  {
    col_1: 'Row content 1',
    col_2: 'Row content 2',
    col_3: 'Row content 3',
    col_4: 'Row content 4',
  }
]
```