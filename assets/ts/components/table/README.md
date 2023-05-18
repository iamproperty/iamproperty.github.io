```
<iam-table class="container">
  <table>
    <thead>....</thead>
    <tbody>...</tbody>
  </table>
</iam-tabs>
```

### Properties

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| data-show | int | 15 | Update how many rows can be shown per page |
| data-filterby | string (form ID) | | Give an optional form ID to connect a form to the table and make it act like a filtering system |


### Class modifiers

- Adding a class of **.table--cta** to the table component will fix the last column of the table in place (While on tablet or desktop). 
- Adding a class of **.table--export** to the table component will create a button at the bottom of the table to export its contents out as a CSV file.
