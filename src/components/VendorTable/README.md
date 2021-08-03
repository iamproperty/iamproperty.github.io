# Vendor Table

```
<vendor-table :items="items" :fields="fields"></vendor-table>
```

Example data passed for the vendor profile table:

```
data () {
    return {
      fields: [
        { key: 'basic_details' },
        { key: 'capacity' },
        { key: 'contact_details' },
        { key: 'address' },
        { key: 'point_of_contact' },
        { key: 'actions' }
      ],
      items: [
        {
          basic_details: 'mr Richard Branson<br> (Mr Richard Branson)',
          capacity: 'Legal owner',
          contact_details: '07411882800 (Mobile)<br> 07411882800 (Main)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          point_of_contact: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          basic_details: 'mrs Laura Branson<br> (Mrs Laura Branson)',
          capacity: 'Legal owner',
          contact_details: '07729797870 (Main)<br> 07729797870 (Mobile)',
          address: 'Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          point_of_contact: 'None set',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        }
      ]      
    }
  }
```

## Component Reference

### Properties

| Property  | Type  | Default Value  | Description  |
| --------- | ----- | -------------- | -------------- |
| items     | Array | `[]`           | Table row data passed |
| fields | Array| `[]`     | Table header titles  |
| small | Boolean | `false` | Removes cell padding |

### Component Description
TBC