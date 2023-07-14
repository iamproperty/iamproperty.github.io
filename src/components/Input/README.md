```
<Input id="fieldid" label="Label"></Input>
```

**Properties**

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| id  | String | - | Required |
| label | String | - | Not required but recommended |
| labelclass | String | - | Optional way of adding classes to the label, useful for assigning column class to label when usiong inline input fields. |
| inputclass | String | - | Optional way of adding classes to the input field, useful for assigning column class to label when usiong inline input fields. |
| type | String | text | Assign different types to the input fields like number, email and date. |
| size | String | - | Choose from either 'sm' and 'lg' |
| errormsg | String | - | Error message thats shown when the field fails form validation. |
| options | Array | - | Used for the select type input field to populate the dropdown. Can also be used to create a datalist when used in conjuction of any other input type than select. |
| prefix | String | - | Display a character or two in front of the input field |
