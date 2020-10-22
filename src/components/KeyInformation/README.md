# Key Information

```
<key-information :items='items'></key-information>
```

Example data passed into the key information component:

```
{
    "Full Name": "Mr Richard Branson",
    "Legal Capacity": "Legal Owner",
    "Mobile Number": "07411882800",
    "Full Address": "Branson Towers<br> London<br> London<br> SW20 0AL<br> United Kingdom",
    "Website Link": "<a href=\"https://www.branson-towers.co.uk\" target=\"_blank\">Branson Towers</a>"
}
```

## Component Reference

### Properties

| Property  | Type  | Default Value  | Description  |
| --------- | ----- | -------------- | -------------- |
| items     | Object | `{}`           | Required. Takes a basic json object of key/value pairs |

### Component Description
The key information component is a way of displaying text in neat rows and columns in key/value pairs

The key information component accepts html tags so links, buttons etc will display correctly.

The columns will stack on smaller viewports.