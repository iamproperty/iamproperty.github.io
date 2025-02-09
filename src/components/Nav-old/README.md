### Usage

```
<Nav></Nav>
```

### Properties

| Option   | Type   | Default Value | Description                                                                    |
| -------- | ------ | ------------- | ------------------------------------------------------------------------------ |
| logo     | String | property      | Update which logo is shown                                                     |
| logotext | String | -             | Optional logo text                                                             |
| btnlink  | String | -             | Optional button can be added, used mainly for links relating to user accounts. |
| btntext  | String | -             | Text used within the above button                                              |

### Slots

| Option    | Default Value | Description                                                                                |
| --------- | ------------- | ------------------------------------------------------------------------------------------ |
| default   | -             | Populates the main nav area, use a ul.list-unstyled element                                |
| secondary | -             | Populates the secondary nav area (top bar when on desktop), use a ul.list-unstyled element |
| search    | -             | Populates the search featured area area                                                    |
