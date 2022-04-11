### Usage

```
<NoteFeed user="User name" :fields="fields" :items="items" :show="3" @formSubmitted="submitForm(...arguments)"></NoteFeed>
```

### Properties

<p class="note"><strong>Note:</strong> See the tables documentation for the table props which are inherited here</p>

| Option | Type | Default Value | Description |
| ------ | ---- | ------------- | ----------- |
| user | String | - | Required |
| title | String | - | Optional as we may want to add the title outside of the note feed. |
| method | String | post | Form method of posting the data, post or get |
| action | String| | Optional URL to submit the form too, not really usefull for Vue JS. |
